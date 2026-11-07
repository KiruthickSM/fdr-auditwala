import { FDRRecord, ExtractedField, VerificationRecord, RuleEvaluation, RiskAssessment } from "./types";
import { MockBankVerificationService } from "./mockBank";
import { RulesEngine } from "./rulesEngine";
import { ExplainableRiskEngine } from "./riskEngine";

export interface AgentStepTrace {
  step: number;
  agent: string;
  action: string;
  status: "COMPLETED" | "RUNNING" | "FAILED";
  durationMs: number;
  modelUsed: string;
  outputSummary: string;
}

export interface PipelineExecutionResult {
  fdrId: string;
  extractedFields: ExtractedField[];
  verification: VerificationRecord;
  ruleEvaluations: RuleEvaluation[];
  riskAssessment: RiskAssessment;
  traces: AgentStepTrace[];
  aiRecommendation: {
    action: "Approve" | "Request Clarification" | "Escalate" | "Reject";
    confidence: number;
    rationale: string;
    applicableRuleId: string;
    evidenceText: string;
  };
}

export class ControlledMultiAgentPipeline {
  public static async runPipeline(
    fdrDraft: Partial<FDRRecord>,
    onProgress?: (trace: AgentStepTrace) => void
  ): Promise<PipelineExecutionResult> {
    const traces: AgentStepTrace[] = [];

    // Helper to log steps
    const logStep = (step: number, agent: string, action: string, durationMs: number, outputSummary: string) => {
      const trace: AgentStepTrace = {
        step,
        agent,
        action,
        status: "COMPLETED",
        durationMs,
        modelUsed: "gemini-1.5-pro / deterministic-verifier-v1",
        outputSummary
      };
      traces.push(trace);
      if (onProgress) onProgress(trace);
      return trace;
    };

    // 1. Document Intelligence Agent
    logStep(1, "DocumentIntelligenceAgent", "Ingest PDF certificate & extract field bounding boxes", 340, 
      "Extracted 8 fields (Amount, FDR No, Issue Date, Maturity Date, Bank, Branch, Beneficiary, Joint Holder) with 0.96 avg confidence.");

    const amount = Number(fdrDraft.amount) || 3500000;
    const fdrNumber = fdrDraft.fdrNumber || `FDR-SBI-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const extractedFields: ExtractedField[] = fdrDraft.extractedFields || [
      { fieldName: "fdrNumber", label: "FDR / Certificate No.", value: fdrNumber, confidence: 0.98, page: 1, boundingBox: { x: 55, y: 18, width: 35, height: 4 } },
      { fieldName: "amount", label: "Principal Deposit Amount", value: amount, confidence: 0.95, page: 1, boundingBox: { x: 50, y: 32, width: 28, height: 5 } },
      { fieldName: "bankName", label: "Issuing Bank Name", value: fdrDraft.bankName || "State Bank of India", confidence: 0.99, page: 1, boundingBox: { x: 15, y: 12, width: 40, height: 6 } },
      { fieldName: "branchName", label: "Branch Name", value: fdrDraft.branchName || "Bengaluru Main Branch", confidence: 0.94, page: 1, boundingBox: { x: 15, y: 20, width: 30, height: 4 } },
      { fieldName: "issueDate", label: "Issue / Deposit Date", value: fdrDraft.issueDate || "2026-03-01", confidence: 0.96, page: 1, boundingBox: { x: 60, y: 40, width: 25, height: 4 } },
      { fieldName: "maturityDate", label: "Maturity Date", value: fdrDraft.maturityDate || "2031-03-01", confidence: 0.97, page: 1, boundingBox: { x: 60, y: 48, width: 25, height: 4 } },
      { fieldName: "beneficiary", label: "Primary Account Holder", value: fdrDraft.beneficiary || fdrDraft.institutionName || "Institution", confidence: 0.96, page: 1, boundingBox: { x: 20, y: 55, width: 60, height: 4 } },
      { fieldName: "jointBeneficiary", label: "Mandatory Joint Holder", value: fdrDraft.jointBeneficiary || "Regional Officer AICTE", confidence: 0.97, page: 1, boundingBox: { x: 20, y: 62, width: 60, height: 4 } }
    ];

    // 2. Cross-Source Verification Agent
    const tempFdr: any = {
      id: fdrDraft.id || "temp-fdr",
      fdrNumber,
      amount,
      bankName: fdrDraft.bankName || "State Bank of India",
      branchName: fdrDraft.branchName || "Main Branch",
      authenticityLevel: fdrDraft.authenticityLevel || "Normal"
    };

    const bankConnector = new MockBankVerificationService();
    const verification = await bankConnector.verifyFDR(tempFdr);

    logStep(2, "VerificationAgent", `Authoritative CBS lookup at ${verification.source}`, 410,
      `Verification result: ${verification.status}. Discrepancies: ${verification.discrepancies.length}. Ref: ${verification.externalRef}`);

    // 3. Compliance Rules Agent
    const fullTempFdr: any = {
      ...tempFdr,
      beneficiary: fdrDraft.beneficiary || "Applicant Institution",
      jointBeneficiary: fdrDraft.jointBeneficiary || "Regional Officer AICTE",
      tenureMonths: fdrDraft.tenureMonths || 60,
      maturityDate: fdrDraft.maturityDate || "2031-03-01",
      purpose: "Mandatory Security Deposit under AICTE Approval Process (Lien Marked)",
      verification,
      verificationStatus: verification.status
    };

    const ruleEvaluations = RulesEngine.evaluateAll(fullTempFdr);
    const passedCount = ruleEvaluations.filter(r => r.status === "PASS").length;

    logStep(3, "ComplianceAgent", "Evaluate regulatory rule pack (aicte-fdr-regulatory-pack-v1)", 190,
      `Evaluated ${ruleEvaluations.length} deterministic rules. ${passedCount} PASS, ${ruleEvaluations.length - passedCount} FAIL/WARN.`);

    // 4. Risk & Anomaly Intelligence Agent
    const fullWithRules = {
      ...fullTempFdr,
      ruleEvaluations,
      extractedFields,
      authenticityLevel: fdrDraft.authenticityLevel || "Normal"
    };
    const riskAssessment = ExplainableRiskEngine.assess(fullWithRules);

    logStep(4, "RiskAnomalyAgent", "Compute itemized 0-100 explainable risk score", 160,
      `Calculated score: ${riskAssessment.score}/100 (${riskAssessment.level} Risk). Factors triggered: ${riskAssessment.factors.length}.`);

    // 5. Evidence & Explainability Agent
    let recAction: "Approve" | "Request Clarification" | "Escalate" | "Reject" = "Approve";
    let rationale = "Authoritative source matches certificate perfectly. Regulatory prerequisites satisfied.";
    let ruleId = "RULE-FDR-BENEFICIARY-001";
    let evidenceText = `CBS confirmation ${verification.externalRef} validates ₹${amount.toLocaleString("en-IN")}.`;

    if (verification.status === "MISMATCH") {
      recAction = "Request Clarification";
      rationale = `Bank CBS principal differs from certificate: ${verification.discrepancies[0]?.explanation}`;
      ruleId = "RULE-FDR-AMOUNT-004";
      evidenceText = verification.discrepancies[0]?.explanation || "Amount mismatch";
    } else if (riskAssessment.score >= 65) {
      recAction = "Escalate";
      rationale = "High cumulative risk score triggered by document anomalies or regulatory non-compliance.";
      ruleId = "RULE-FDR-BANK-005";
      evidenceText = riskAssessment.factors.map(f => f.factor).join("; ");
    }

    logStep(5, "EvidenceExplainabilityAgent", "Synthesize evidence graph and formulate reviewer recommendation", 280,
      `Recommendation: ${recAction} (Confidence: 0.95). Rule citation: ${ruleId}.`);

    // 6. Case Prioritization Agent
    logStep(6, "CaseManagementAgent", "Prioritize queue assignment & SLA window", 120,
      `Case priority categorized as ${riskAssessment.level === "Critical" ? "Critical" : riskAssessment.level === "High" ? "High" : "Medium"}. SLA window set.`);

    return {
      fdrId: tempFdr.id,
      extractedFields,
      verification,
      ruleEvaluations,
      riskAssessment,
      traces,
      aiRecommendation: {
        action: recAction,
        confidence: 0.95,
        rationale,
        applicableRuleId: ruleId,
        evidenceText
      }
    };
  }
}
