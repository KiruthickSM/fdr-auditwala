import { LifecycleState, FDRRecord } from "./types";

export interface StateTransitionGuard {
  name: string;
  check: (fdr: FDRRecord) => { allowed: boolean; reason?: string };
}

export interface StateTransitionConfig {
  from: LifecycleState;
  to: LifecycleState;
  guards: StateTransitionGuard[];
  actionLabel: string;
}

export const LIFECYCLE_TRANSITIONS: StateTransitionConfig[] = [
  {
    from: "Submitted",
    to: "Extracted",
    guards: [
      {
        name: "DOCUMENT_PRESENT",
        check: (fdr) => ({
          allowed: !!fdr.documentId && fdr.extractedFields.length > 0,
          reason: "FDR certificate document and extracted fields are required."
        })
      }
    ],
    actionLabel: "Ingest & Extract"
  },
  {
    from: "Extracted",
    to: "Validation Pending",
    guards: [
      {
        name: "EXTRACTION_COMPLETE",
        check: (fdr) => ({
          allowed: fdr.extractedFields.length >= 4,
          reason: "Extraction must yield at least amount, dates, bank, and beneficiary."
        })
      }
    ],
    actionLabel: "Queue for Validation"
  },
  {
    from: "Validation Pending",
    to: "Verification Pending",
    guards: [
      {
        name: "VALIDATION_PASSED",
        check: (fdr) => ({
          allowed: fdr.amount > 0 && !!fdr.bankName,
          reason: "Mandatory structural validation must pass."
        })
      }
    ],
    actionLabel: "Initiate Bank Verification"
  },
  {
    from: "Verification Pending",
    to: "Under Review",
    guards: [
      {
        name: "VERIFICATION_PROCESSED",
        check: (fdr) => ({
          allowed: !!fdr.verification,
          reason: "Bank verification response must be recorded."
        })
      }
    ],
    actionLabel: "Forward to Human Reviewer"
  },
  {
    from: "Under Review",
    to: "Verified",
    guards: [
      {
        name: "VERIFICATION_CONFIRMED",
        check: (fdr) => ({
          allowed: fdr.verificationStatus === "MATCH" || fdr.verificationStatus === "PARTIAL MATCH",
          reason: "Verification status must be MATCH or human-cleared PARTIAL MATCH."
        })
      }
    ],
    actionLabel: "Mark Verified"
  },
  {
    from: "Verified",
    to: "Compliance Checked",
    guards: [
      {
        name: "RULES_EVALUATED",
        check: (fdr) => ({
          allowed: fdr.ruleEvaluations.length > 0,
          reason: "Regulatory rules pack must be evaluated."
        })
      }
    ],
    actionLabel: "Evaluate Regulatory Rules"
  },
  {
    from: "Compliance Checked",
    to: "Active",
    guards: [
      {
        name: "NO_CRITICAL_RULE_FAILURES",
        check: (fdr) => {
          const criticalFailures = fdr.ruleEvaluations.filter(
            r => r.status === "FAIL" && r.severity === "CRITICAL"
          );
          return {
            allowed: criticalFailures.length === 0,
            reason: criticalFailures.length > 0 
              ? `Cannot activate with critical rule failure: ${criticalFailures[0].ruleName}`
              : undefined
          };
        }
      }
    ],
    actionLabel: "Activate FDR"
  },
  {
    from: "Active",
    to: "Maturity Approaching",
    guards: [
      {
        name: "DAYS_TO_MATURITY_WINDOW",
        check: (fdr) => {
          const maturity = new Date(fdr.maturityDate).getTime();
          const now = new Date().getTime();
          const daysLeft = Math.ceil((maturity - now) / (1000 * 60 * 60 * 24));
          return {
            allowed: daysLeft <= 60,
            reason: "Maturity must be within 60 days to trigger maturity window."
          };
        }
      }
    ],
    actionLabel: "Mark Maturity Approaching"
  },
  {
    from: "Maturity Approaching",
    to: "Renewal Required",
    guards: [
      {
        name: "MANDATORY_RENEWAL_WINDOW",
        check: (fdr) => {
          const maturity = new Date(fdr.maturityDate).getTime();
          const now = new Date().getTime();
          const daysLeft = Math.ceil((maturity - now) / (1000 * 60 * 60 * 24));
          return {
            allowed: daysLeft <= 45,
            reason: "Renewal is required when FDR maturity is <= 45 days."
          };
        }
      }
    ],
    actionLabel: "Flag Renewal Required"
  },
  {
    from: "Renewal Required",
    to: "Renewal Submitted",
    guards: [
      {
        name: "REPLACEMENT_FDR_REFERENCE",
        check: (fdr) => ({
          allowed: !!fdr.replacedByFdrId || !!fdr.clarificationResponse,
          reason: "Replacement FDR or renewal confirmation certificate must be submitted."
        })
      }
    ],
    actionLabel: "Submit Renewal/Replacement"
  },
  {
    from: "Renewal Submitted",
    to: "Replacement Under Review",
    guards: [],
    actionLabel: "Review Replacement FDR"
  },
  {
    from: "Active",
    to: "Release Eligible",
    guards: [
      {
        name: "TENURE_OR_CONDITIONS_MET",
        check: (fdr) => ({
          allowed: fdr.riskLevel === "Low" || fdr.riskLevel === "Medium",
          reason: "FDR must have compliant risk standing to be eligible for release."
        })
      }
    ],
    actionLabel: "Mark Release Eligible"
  },
  {
    from: "Release Eligible",
    to: "Refund Processing",
    guards: [
      {
        name: "RELEASE_APPROVAL_RECORDED",
        check: (fdr) => ({
          allowed: !!fdr.releaseEligibilityDate,
          reason: "Executive committee release prerequisites must be recorded."
        })
      }
    ],
    actionLabel: "Process Refund / Release"
  },
  {
    from: "Refund Processing",
    to: "Released/Refunded",
    guards: [
      {
        name: "AUTHORIZATION_COMPLETE",
        check: (fdr) => ({
          allowed: (fdr.refundAmount || 0) > 0 || (fdr.amount || 0) > 0,
          reason: "Authorized refund remittance confirmation required."
        })
      }
    ],
    actionLabel: "Confirm Release / Remittance"
  },
  {
    from: "Released/Refunded",
    to: "Closed",
    guards: [],
    actionLabel: "Archive & Close"
  }
];

export class LifecycleStateMachine {
  public static canTransition(fdr: FDRRecord, targetState: LifecycleState): { allowed: boolean; reason?: string } {
    const transition = LIFECYCLE_TRANSITIONS.find(
      t => t.from === fdr.lifecycleStatus && t.to === targetState
    );

    if (!transition) {
      return {
        allowed: false,
        reason: `Invalid transition from "${fdr.lifecycleStatus}" to "${targetState}". Not defined in state machine.`
      };
    }

    for (const guard of transition.guards) {
      const result = guard.check(fdr);
      if (!result.allowed) {
        return {
          allowed: false,
          reason: `Guard [${guard.name}] rejected transition: ${result.reason}`
        };
      }
    }

    return { allowed: true };
  }

  public static getAvailableTransitions(fdr: FDRRecord): StateTransitionConfig[] {
    return LIFECYCLE_TRANSITIONS.filter(t => t.from === fdr.lifecycleStatus);
  }

  public static getAllStates(): LifecycleState[] {
    return [
      "Submitted",
      "Extracted",
      "Validation Pending",
      "Verification Pending",
      "Under Review",
      "Verified",
      "Compliance Checked",
      "Active",
      "Maturity Approaching",
      "Renewal Required",
      "Renewal Submitted",
      "Replacement Under Review",
      "Release Eligible",
      "Refund Processing",
      "Released/Refunded",
      "Closed"
    ];
  }
}
