import { FDRRecord, VerificationRecord, VerificationDiscrepancy, VerificationStatus } from "./types";

export interface VerificationConnector {
  verifyFDR(fdr: FDRRecord): Promise<VerificationRecord>;
}

export class MockBankVerificationService implements VerificationConnector {
  public async verifyFDR(fdr: FDRRecord): Promise<VerificationRecord> {
    // Check for special test case triggers by FDR number or amount
    const fdrNum = (fdr.fdrNumber || "").toUpperCase();

    // Trigger 1: Amount Mismatch Demo Case
    if (fdrNum.includes("MISMATCH") || fdr.id === "fdr-benchmark-2" || (fdr.amount === 5000000 && fdr.fdrNumber === "FDR-PNB-2024-9981")) {
      const discrepancies: VerificationDiscrepancy[] = [
        {
          field: "amount",
          submittedValue: fdr.amount,
          authoritativeValue: 4500000,
          severity: "CRITICAL",
          explanation: `Bank CBS record shows principal amount of ₹45,00,000, whereas submitted certificate claims ₹${fdr.amount.toLocaleString("en-IN")}. Deficit: ₹5,00,000.`
        }
      ];

      return {
        source: `${fdr.bankName} Core Banking System (CBS API)`,
        status: "MISMATCH",
        verifiedAt: new Date().toISOString(),
        discrepancies,
        matchedFields: ["bankName", "branchName", "beneficiary", "issueDate"],
        externalRef: `CBS-TXN-ALERT-${Math.floor(100000 + Math.random() * 900000)}`,
        bankBranch: fdr.branchName,
        isAuthorizedConnector: true
      };
    }

    // Trigger 2: Offline / Source Unavailable Fallback Case
    if (fdrNum.includes("UNAVAILABLE") || fdrNum.includes("OFFLINE")) {
      return {
        source: `${fdr.bankName} API Gateway (Timeout)`,
        status: "SOURCE UNAVAILABLE",
        verifiedAt: new Date().toISOString(),
        discrepancies: [
          {
            field: "connection",
            submittedValue: "Active",
            authoritativeValue: "Unreachable",
            severity: "HIGH",
            explanation: "Core banking verification endpoint timed out after 3 retries. Fail-safe: Escalate to human reviewer."
          }
        ],
        matchedFields: [],
        externalRef: "ERR-CONN-504",
        bankBranch: fdr.branchName,
        isAuthorizedConnector: false
      };
    }

    // Trigger 3: Suspicious Document / Requires Human Review
    if (fdrNum.includes("SUSPICIOUS") || fdr.authenticityLevel === "High concern") {
      return {
        source: `${fdr.bankName} CBS Node`,
        status: "REQUIRES HUMAN REVIEW",
        verifiedAt: new Date().toISOString(),
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
      source: `${fdr.bankName} CBS Direct Connect API`,
      status: "MATCH",
      verifiedAt: new Date().toISOString(),
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
