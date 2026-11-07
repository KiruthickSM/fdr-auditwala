import { FDRRecord, VerificationRecord, VerificationDiscrepancy, VerificationStatus } from "./types";

export interface VerificationAdapter {
  verifyFDR(fdr: FDRRecord): Promise<VerificationRecord>;
}

export type VerificationConnector = VerificationAdapter;

export class MockBankVerificationAdapter implements VerificationAdapter {
  public async verifyFDR(fdr: FDRRecord): Promise<VerificationRecord> {
    const fdrNum = (fdr.fdrNumber || "").toUpperCase();
    const now = new Date().toISOString();

    // Trigger 1: Amount Mismatch Demo Case
    if (
      fdrNum.includes("MISMATCH") ||
      fdr.id === "fdr-benchmark-2" ||
      (fdr.amount === 5000000 && fdr.fdrNumber === "FDR-PNB-2024-9981")
    ) {
      const discrepancies: VerificationDiscrepancy[] = [
        {
          field: "amount",
          submittedValue: fdr.amount,
          authoritativeValue: 4500000,
          severity: "CRITICAL",
          explanation: `Authoritative bank response indicates principal amount of ₹45,00,000, whereas submitted certificate claims ₹${fdr.amount.toLocaleString("en-IN")}. Deficit: ₹5,00,000.`
        }
      ];

      return {
        source: `${fdr.bankName} Verification Gateway (Simulated)`,
        status: "MISMATCH",
        verifiedAt: now,
        checked_at: now,
        reference_id: `VERIF-REF-${Math.floor(100000 + Math.random() * 900000)}`,
        discrepancies,
        matchedFields: ["bankName", "branchName", "beneficiary", "issueDate"],
        externalRef: `CBS-TXN-ALERT-${Math.floor(100000 + Math.random() * 900000)}`,
        bankBranch: fdr.branchName,
        isAuthorizedConnector: true
      };
    }

    // Trigger 2: Offline / Source Unavailable Case (Not a fraud; fail-safe)
    if (fdrNum.includes("UNAVAILABLE") || fdrNum.includes("OFFLINE")) {
      return {
        source: `${fdr.bankName} API Gateway (Simulated)`,
        status: "SOURCE_UNAVAILABLE",
        verifiedAt: now,
        checked_at: now,
        reference_id: "ERR-CONN-504",
        discrepancies: [
          {
            field: "connection",
            submittedValue: "Active",
            authoritativeValue: "Unreachable",
            severity: "HIGH",
            explanation: "Core banking verification endpoint timed out after 3 retries. Fail-safe: No verification decision made; held for human review."
          }
        ],
        matchedFields: [],
        externalRef: "ERR-CONN-504",
        bankBranch: fdr.branchName,
        isAuthorizedConnector: false
      };
    }

    // Trigger 3: Source Error (Internal Gateway Error)
    if (fdrNum.includes("ERROR")) {
      return {
        source: `${fdr.bankName} API Gateway (Simulated)`,
        status: "SOURCE_ERROR",
        verifiedAt: now,
        checked_at: now,
        reference_id: "ERR-CBS-500",
        discrepancies: [
          {
            field: "service",
            submittedValue: "OK",
            authoritativeValue: "Internal Service Fault",
            severity: "HIGH",
            explanation: "Issuing bank integration service returned HTTP 500. Verification postponed."
          }
        ],
        matchedFields: [],
        externalRef: "ERR-CBS-500",
        bankBranch: fdr.branchName,
        isAuthorizedConnector: false
      };
    }

    // Trigger 4: Suspicious Document / Pending Human Review
    if (fdrNum.includes("SUSPICIOUS") || fdr.authenticityLevel === "High concern") {
      return {
        source: `${fdr.bankName} Verification Gateway (Simulated)`,
        status: "PENDING_HUMAN_REVIEW",
        verifiedAt: now,
        checked_at: now,
        reference_id: `VERIF-FLAG-${Math.floor(100000 + Math.random() * 900000)}`,
        discrepancies: [
          {
            field: "serial_security_thread",
            submittedValue: "Not verified",
            authoritativeValue: "Branch confirmation required",
            severity: "HIGH",
            explanation: "Certificate serial number not recognized in issuing branch inventory. Branch letter verification required."
          }
        ],
        matchedFields: ["amount", "maturityDate"],
        externalRef: `CBS-FLAG-${Math.floor(100000 + Math.random() * 900000)}`,
        bankBranch: fdr.branchName,
        isAuthorizedConnector: true
      };
    }

    // Default Case: Clean Match
    return {
      source: `${fdr.bankName} Verification Gateway (Simulated)`,
      status: "MATCH",
      verifiedAt: now,
      checked_at: now,
      reference_id: `VERIF-AUTH-${Math.floor(10000000 + Math.random() * 90000000)}`,
      discrepancies: [],
      matchedFields: [
        "fdrNumber",
        "amount",
        "issueDate",
        "maturityDate",
        "bankName",
        "branchName",
        "beneficiary",
        "jointBeneficiary"
      ],
      externalRef: `CBS-AUTH-${Math.floor(10000000 + Math.random() * 90000000)}`,
      bankBranch: fdr.branchName,
      isAuthorizedConnector: true
    };
  }
}

// Backward-compatible export alias
export const MockBankVerificationService = MockBankVerificationAdapter;
