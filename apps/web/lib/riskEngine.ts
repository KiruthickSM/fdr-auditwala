import { FDRRecord, RiskAssessment, RiskFactor, RiskLevel } from "./types";

export class ExplainableRiskEngine {
  public static assess(fdr: FDRRecord): RiskAssessment {
    const factors: RiskFactor[] = [];
    let score = 0;

    // 1. Cross-Source Verification Mismatch (+25)
    if (fdr.verificationStatus === "MISMATCH") {
      factors.push({
        factor: "Authoritative Bank Discrepancy",
        points: 25,
        weight: 0.25,
        category: "VERIFICATION",
        description: "Bank API verification confirmed discrepancy in principal amount, dates, or beneficiary."
      });
      score += 25;
    } else if (fdr.verificationStatus === "PENDING_HUMAN_REVIEW" || (fdr.verificationStatus as string) === "REQUIRES HUMAN REVIEW") {
      factors.push({
        factor: "Verification Anomaly / Manual Review Needed",
        points: 15,
        weight: 0.15,
        category: "VERIFICATION",
        description: "Partial match or manual bank branch validation needed."
      });
      score += 15;
    } else if (fdr.verificationStatus === "SOURCE_UNAVAILABLE" || (fdr.verificationStatus as string) === "SOURCE UNAVAILABLE") {
      factors.push({
        factor: "Bank Verification Source Unavailable",
        points: 10,
        weight: 0.10,
        category: "VERIFICATION",
        description: "Fail-safe trigger: Bank API unreachable or offline. Requires human confirmation."
      });
      score += 10;
    }

    // 2. Document Authenticity / Tamper Anomaly (+20)
    if (fdr.authenticityLevel === "High concern") {
      factors.push({
        factor: "High Concern Document Authenticity",
        points: 20,
        weight: 0.20,
        category: "TAMPER",
        description: "Altered numerics, font inconsistencies, or metadata manipulation detected."
      });
      score += 20;
    } else if (fdr.authenticityLevel === "Review recommended") {
      factors.push({
        factor: "Review Recommended on Certificate Artifacts",
        points: 12,
        weight: 0.12,
        category: "TAMPER",
        description: "Moderate font variations or compression anomalies around security text."
      });
      score += 12;
    } else if (fdr.authenticityLevel === "Low concern") {
      factors.push({
        factor: "Minor Scan Artifact",
        points: 4,
        weight: 0.04,
        category: "TAMPER",
        description: "Slight scan skew or low-resolution paper artifact."
      });
      score += 4;
    }

    // 3. Maturity Proximity (+15)
    const maturity = new Date(fdr.maturityDate).getTime();
    const now = new Date().getTime();
    const daysLeft = Math.ceil((maturity - now) / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) {
      factors.push({
        factor: "FDR Lapsed / Past Maturity Date",
        points: 18,
        weight: 0.18,
        category: "MATURITY",
        description: `FDR has expired ${Math.abs(daysLeft)} days ago without recorded renewal.`
      });
      score += 18;
    } else if (daysLeft <= 45) {
      factors.push({
        factor: "Imminent Maturity Window (<= 45 Days)",
        points: 15,
        weight: 0.15,
        category: "MATURITY",
        description: `Only ${daysLeft} days remaining. Requires immediate renewal guarantee.`
      });
      score += 15;
    } else if (daysLeft <= 90) {
      factors.push({
        factor: "Maturity Within 90 Days",
        points: 8,
        weight: 0.08,
        category: "MATURITY",
        description: `${daysLeft} days to maturity. Pre-renewal notice staging recommended.`
      });
      score += 8;
    }

    // 4. Missing Evidence / Low Extraction Confidence (+12)
    const lowConfidenceFields = (fdr.extractedFields || []).filter(f => f.confidence < 0.85);
    if (lowConfidenceFields.length > 0) {
      const fieldNames = lowConfidenceFields.map(f => f.label).join(", ");
      factors.push({
        factor: "Low Document OCR/Extraction Confidence",
        points: 12,
        weight: 0.12,
        category: "EVIDENCE",
        description: `Low confidence (<85%) on critical fields: ${fieldNames}. Requires human cross-verification.`
      });
      score += 12;
    }

    // 5. Regulatory Rule Non-Compliance (+18)
    const criticalFails = (fdr.ruleEvaluations || []).filter(r => r.status === "FAIL" && r.severity === "CRITICAL");
    if (criticalFails.length > 0) {
      factors.push({
        factor: "Critical Regulatory Rule Violation",
        points: 18,
        weight: 0.18,
        category: "COMPLIANCE",
        description: `Violated mandatory AICTE rule(s): ${criticalFails.map(r => r.ruleId).join(", ")}.`
      });
      score += 18;
    }

    // Clamp score to [0, 100]
    score = Math.min(100, Math.max(0, score));

    let level: RiskLevel = "Low";
    if (score >= 65) level = "Critical";
    else if (score >= 45) level = "High";
    else if (score >= 20) level = "Medium";

    let summary = "FDR exhibits standard regulatory standing with clean verification.";
    if (level === "Critical") {
      summary = "CRITICAL EXPOSURE: High probability of source conflict, document irregularity, or severe regulatory breach.";
    } else if (level === "High") {
      summary = "HIGH RISK: Discrepancies or impending maturity requires mandatory human reviewer inspection.";
    } else if (level === "Medium") {
      summary = "MODERATE NOTICE: Standard review required for scan quality or renewal timetable.";
    }

    return {
      score,
      level,
      factors,
      summary,
      assessedAt: new Date().toISOString()
    };
  }
}
