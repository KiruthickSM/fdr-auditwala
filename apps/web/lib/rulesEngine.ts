import { FDRRecord, RuleEvaluation } from "./types";

export interface RegulatoryRuleDef {
  id: string;
  name: string;
  version: string;
  category: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "INFO";
  description: string;
  evaluator: (fdr: FDRRecord) => { passed: boolean; warning?: boolean; explanation: string; remedy?: string };
}

export const REGULATORY_RULES: RegulatoryRuleDef[] = [
  {
    id: "RULE-FDR-BENEFICIARY-001",
    name: "AICTE Mandatory Joint Beneficiary Requirement",
    version: "1.0",
    category: "MANDATORY_FIELD",
    severity: "CRITICAL",
    description: "FDR must be held jointly in the name of the Applicant Institution and Regional Officer/Member Secretary, AICTE.",
    evaluator: (fdr) => {
      const joint = (fdr.jointBeneficiary || "").toLowerCase();
      const ben = (fdr.beneficiary || "").toLowerCase();
      const combined = `${ben} ${joint}`;
      const containsAicte = combined.includes("aicte") || combined.includes("all india council for technical education");
      
      if (containsAicte) {
        return {
          passed: true,
          explanation: "FDR clearly designates AICTE as mandatory joint holder / beneficiary."
        };
      }
      return {
        passed: false,
        explanation: "Beneficiary notation fails to designate AICTE / Regional Officer as joint holder.",
        remedy: "Request institution to submit amended FDR certificate with AICTE joint endorsement."
      };
    }
  },
  {
    id: "RULE-FDR-TENURE-002",
    name: "Minimum Mandatory Security Deposit Tenure",
    version: "1.0",
    category: "TENURE_VALIDATION",
    severity: "HIGH",
    description: "Security deposit FDR tenure must be at least 60 months (5 years) or auto-renewal lien marked.",
    evaluator: (fdr) => {
      if (fdr.tenureMonths >= 60) {
        return {
          passed: true,
          explanation: `Tenure meets requirement: ${fdr.tenureMonths} months (>= 60 months mandatory minimum).`
        };
      }
      return {
        passed: false,
        explanation: `Tenure of ${fdr.tenureMonths} months is below required 60 months (5 years).`,
        remedy: "Institution must provide auto-renewal endorsement letter from issuing bank."
      };
    }
  },
  {
    id: "RULE-FDR-EXP-003",
    name: "Maturity Proximity & Renewal Trigger",
    version: "2.0",
    category: "LIFECYCLE_MATURITY",
    severity: "HIGH",
    description: "FDRs with maturity within 45 days must trigger mandatory renewal workflow.",
    evaluator: (fdr) => {
      const maturity = new Date(fdr.maturityDate).getTime();
      const now = new Date().getTime();
      const daysLeft = Math.ceil((maturity - now) / (1000 * 60 * 60 * 24));

      if (daysLeft < 0) {
        return {
          passed: false,
          explanation: `FDR has already expired (${Math.abs(daysLeft)} days ago). Immediate renewal or forfeiture review mandatory.`,
          remedy: "Initiate urgent escalation and bank lien encashment review."
        };
      }
      if (daysLeft <= 45) {
        return {
          passed: false,
          warning: true,
          explanation: `Maturity within ${daysLeft} days (threshold <= 45 days). Renewal review required.`,
          remedy: "Dispatch renewal notice to institution and bank."
        };
      }
      return {
        passed: true,
        explanation: `Sufficient validity remaining: ${daysLeft} days until maturity.`
      };
    }
  },
  {
    id: "RULE-FDR-AMOUNT-004",
    name: "Minimum Institutional Security Deposit Slab",
    version: "1.0",
    category: "FINANCIAL_THRESHOLD",
    severity: "CRITICAL",
    description: "Standard technical institution FDR amount must be at least ₹15,00,000 up to ₹1,00,00,000.",
    evaluator: (fdr) => {
      if (fdr.amount >= 1500000) {
        return {
          passed: true,
          explanation: `FDR amount (₹${fdr.amount.toLocaleString("en-IN")}) satisfies minimum security deposit slab.`
        };
      }
      return {
        passed: false,
        explanation: `FDR amount (₹${fdr.amount.toLocaleString("en-IN")}) is below mandatory minimum of ₹15,00,000.`,
        remedy: "Reject submission or request supplementary FDR to cover deficiency."
      };
    }
  },
  {
    id: "RULE-FDR-BANK-005",
    name: "Scheduled Commercial Bank Requirement",
    version: "1.0",
    category: "BANK_AUTHORIZATION",
    severity: "HIGH",
    description: "FDR must be drawn from an RBI-recognized Scheduled Commercial Bank or Nationalized Bank.",
    evaluator: (fdr) => {
      const approvedBanks = [
        "state bank of india",
        "punjab national bank",
        "bank of baroda",
        "canara bank",
        "union bank of india",
        "hdfc bank",
        "icici bank",
        "axis bank",
        "kotak mahindra bank",
        "indian bank",
        "bank of india",
        "central bank of india"
      ];
      const bankLower = (fdr.bankName || "").toLowerCase();
      const isApproved = approvedBanks.some(b => bankLower.includes(b));

      if (isApproved) {
        return {
          passed: true,
          explanation: `Issuing bank "${fdr.bankName}" is verified against RBI Scheduled Commercial list.`
        };
      }
      return {
        passed: false,
        explanation: `Bank "${fdr.bankName}" is not verified on the standard approved schedule bank registry.`,
        remedy: "Verify special exemption status or request transfer to nationalized bank."
      };
    }
  },
  {
    id: "RULE-FDR-LIEN-006",
    name: "Exclusive Lien Marking to AICTE",
    version: "1.0",
    category: "LIEN_VERIFICATION",
    severity: "CRITICAL",
    description: "FDR certificate must have clear unencumbered lien marked in favor of AICTE.",
    evaluator: (fdr) => {
      const purpose = (fdr.purpose || "").toLowerCase();
      const hasLien = purpose.includes("lien") || purpose.includes("security deposit") || purpose.includes("aicte");
      if (hasLien) {
        return {
          passed: true,
          explanation: "Unencumbered lien marking confirmed in favor of AICTE."
        };
      }
      return {
        passed: false,
        explanation: "Lien notation in favor of AICTE is absent or ambiguous.",
        remedy: "Obtain formal lien confirmation letter on issuing bank letterhead."
      };
    }
  }
];

export class RulesEngine {
  public static evaluateAll(fdr: FDRRecord): RuleEvaluation[] {
    return REGULATORY_RULES.map(rule => {
      const res = rule.evaluator(fdr);
      return {
        ruleId: rule.id,
        ruleName: rule.name,
        ruleVersion: rule.version,
        category: rule.category,
        severity: rule.severity,
        status: res.passed ? "PASS" : res.warning ? "WARNING" : "FAIL",
        explanation: res.explanation,
        remedy: res.remedy
      };
    });
  }
}
