import { NextRequest, NextResponse } from "next/server";
import { SEED_CASES, ALL_SEED_FDRS } from "@/lib/seedData";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const caseId = params.id;
  const c = SEED_CASES.find(item => item.id === caseId || item.caseNumber === caseId);
  const fdrId = c ? c.fdrId : caseId;
  const fdr = ALL_SEED_FDRS.find(item => item.id === fdrId);

  if (!fdr) {
    return NextResponse.json(
      { success: false, error: "Case or FDR record not found" },
      { status: 404 }
    );
  }

  const explainabilityTrace = {
    case_id: c?.id || `case-${fdr.id}`,
    case_number: c?.caseNumber || "CASE-2026-CRITICAL-001",
    fdr_id: fdr.id,
    record_version: fdr.record_version || 1,
    pipeline: {
      ocr_engine: "Docling-FastOCR-v2.1",
      extraction_model: "LayoutLMv3-FDRGuard-FineTuned",
      model_confidence: fdr.aiRecommendation?.confidence || 0.96,
      execution_timestamp: fdr.createdAt
    },
    claims: fdr.claims || fdr.extractedFields.map((f, i) => ({
      id: `clm-${i}`,
      field: f.fieldName,
      label: f.label,
      extracted_value: f.value,
      normalized_value: f.value,
      confidence: f.confidence,
      page_number: 1,
      source_text: String(f.value),
      engine: "LayoutLMv3",
      engine_version: "2.1.0",
      review_status: "UNREVIEWED"
    })),
    verification: {
      source: fdr.verification?.source || "Bank Gateway CBS Connector",
      status: fdr.verificationStatus,
      checked_at: fdr.verification?.verifiedAt || fdr.updatedAt,
      reference_id: fdr.verification?.reference_id || "REF-CBS-99210",
      discrepancies: fdr.verification?.discrepancies || []
    },
    rule_evaluations: fdr.ruleEvaluations,
    risk_assessment: fdr.riskAssessment,
    findings: fdr.findings || [],
    ai_recommendation: fdr.aiRecommendation
  };

  return NextResponse.json({
    success: true,
    data: explainabilityTrace
  });
}
