import { NextRequest, NextResponse } from "next/server";
import { SEED_CASES, ALL_SEED_FDRS } from "@/lib/seedData";
import { getSessionFromCookie } from "@/lib/auth";
import { AuditLedgerService } from "@/lib/auditLedger";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getSessionFromCookie();
  if (!session) {
    return NextResponse.json(
      { success: false, error: "401_UNAUTHORIZED: Authentication required" },
      { status: 401 }
    );
  }

  const caseId = params.id;
  const c = SEED_CASES.find(item => item.id === caseId || item.caseNumber === caseId);
  const fdr = ALL_SEED_FDRS.find(item => item.id === (c?.fdrId || caseId));

  if (!fdr) {
    return NextResponse.json(
      { success: false, error: "Case not found" },
      { status: 404 }
    );
  }

  const body = await request.json();
  const { action, justification, expected_version, override_ai } = body;

  if (!action || !justification || !justification.trim()) {
    return NextResponse.json(
      { success: false, error: "Action and non-empty justification are mandatory" },
      { status: 400 }
    );
  }

  // Separation of duties enforcement
  const role = session.role;
  if (role === "SYSTEM_ADMIN" || role === "ADMIN") {
    return NextResponse.json(
      {
        success: false,
        error: "403_FORBIDDEN: System Administrators maintain infrastructure and cannot adjudicate regulatory cases"
      },
      { status: 403 }
    );
  }

  if (role === "APPLICANT" || role === "INSTITUTION") {
    return NextResponse.json(
      { success: false, error: "403_FORBIDDEN: Institutional applicants cannot review cases" },
      { status: 403 }
    );
  }

  const isCaseOfficer = role === "CASE_OFFICER" || role === "REVIEWER";
  const isApprover = role === "APPROVING_AUTHORITY";

  if (isCaseOfficer && (action === "APPROVE" || action === "REJECT")) {
    return NextResponse.json(
      {
        success: false,
        error: "403_FORBIDDEN: Case Officers can only recommend actions. Final approval or rejection requires APPROVING_AUTHORITY"
      },
      { status: 403 }
    );
  }

  if (isApprover && !["APPROVE", "REJECT", "REQUEST_INFORMATION"].includes(action)) {
    return NextResponse.json(
      { success: false, error: `Invalid action ${action} for Approving Authority` },
      { status: 400 }
    );
  }

  // Optimistic Concurrency Control (Version Check)
  if (expected_version !== undefined && fdr.record_version !== undefined && expected_version !== fdr.record_version) {
    return NextResponse.json(
      {
        success: false,
        error: "409_CONFLICT: Case record was modified by another officer. Refresh before submitting."
      },
      { status: 409 }
    );
  }

  // Persist to Cryptographic Audit Ledger
  await AuditLedgerService.recordEvent({
    actorId: session.userId,
    actorName: session.name,
    actorRole: session.role,
    action: `API_REVIEW_DECISION: ${action}`,
    entityType: "Case",
    entityId: caseId,
    previousState: fdr.lifecycleStatus,
    newState: action === "APPROVE" ? "Active" : fdr.lifecycleStatus,
    reason: `${justification} ${override_ai ? "[OVERRODE_AI]" : ""}`
  });

  return NextResponse.json({
    success: true,
    message: `Decision ${action} recorded and cryptographically sealed.`,
    new_version: (fdr.record_version || 1) + 1
  });
}
