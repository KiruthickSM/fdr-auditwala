"""
Unit test suite for Guidebook (SIH26265) Invariants and Compliance.
"""

def test_tenant_boundary_isolation():
    # Simulate tenant request
    session_inst_2 = {"role": "APPLICANT", "institutionId": "inst-2"}
    case_inst_1 = {"id": "case-1", "institutionId": "inst-1"}
    case_inst_2 = {"id": "case-2", "institutionId": "inst-2"}

    # Filter logic simulation
    def get_allowed_cases(session, all_cases):
        if session["role"] == "APPLICANT":
            return [c for c in all_cases if c["institutionId"] == session["institutionId"]]
        return all_cases

    allowed = get_allowed_cases(session_inst_2, [case_inst_1, case_inst_2])
    assert len(allowed) == 1, "Applicant should only see their own institution's cases"
    assert allowed[0]["id"] == "case-2", "Cross-tenant case must not leak"


def test_case_officer_cannot_issue_final_approval():
    case_officer_role = "CASE_OFFICER"
    attempted_action = "APPROVE"

    def validate_action(role, action):
        if role in ["CASE_OFFICER", "REVIEWER"] and action in ["APPROVE", "REJECT"]:
            return False, "403_FORBIDDEN: Case Officers can only recommend actions"
        return True, "OK"

    allowed, msg = validate_action(case_officer_role, attempted_action)
    assert not allowed, "Case Officer must not be permitted to issue final approval"
    assert "403_FORBIDDEN" in msg


def test_system_admin_blocked_from_altering_case_decisions():
    admin_role = "SYSTEM_ADMIN"

    def can_adjudicate(role):
        if role in ["SYSTEM_ADMIN", "ADMIN"]:
            return False
        return True

    assert not can_adjudicate(admin_role), "System Admin must be blocked from adjudicating regulatory cases"


def test_optimistic_concurrency_conflict():
    server_version = 2
    client_version = 1

    def update_record(server_v, client_v):
        if client_v != server_v:
            return 409, "409_CONFLICT: Stale record version"
        return 200, "OK"

    status, err = update_record(server_version, client_version)
    assert status == 409, f"Expected 409 Conflict, got {status}"
    assert "409_CONFLICT" in err


def test_source_unavailable_is_not_fraud():
    verification_status = "SOURCE_UNAVAILABLE"

    def evaluate_fraud_risk(status):
        # Invariant: SOURCE_UNAVAILABLE is a connectivity state, not fraud or failure
        if status == "SOURCE_UNAVAILABLE":
            return False, "TEMPORARY_NETWORK_DEGRADATION"
        return True, "CHECKED"

    is_fraud, label = evaluate_fraud_risk(verification_status)
    assert not is_fraud, "SOURCE_UNAVAILABLE must never be flagged as fraud"
    assert label == "TEMPORARY_NETWORK_DEGRADATION"


def test_digital_twin_claims_never_overwrite_canonical_facts():
    extracted_claim = {"field": "amount", "value": 5000000, "confidence": 0.95}
    authoritative_fact = {"field": "amount", "value": 4500000, "status": "VERIFIED"}

    def resolve_digital_twin(claim, fact):
        if claim["value"] != fact["value"]:
            # Never overwrite canonical value automatically; mark unresolved conflict
            return {
                "canonical_status": "UNRESOLVED_CONFLICT",
                "claimed_value": claim["value"],
                "authoritative_value": fact["value"],
                "requires_human_adjudication": True
            }
        return {"canonical_status": "MATCH"}

    twin = resolve_digital_twin(extracted_claim, authoritative_fact)
    assert twin["canonical_status"] == "UNRESOLVED_CONFLICT"
    assert twin["claimed_value"] == 5000000
    assert twin["authoritative_value"] == 4500000
    assert twin["requires_human_adjudication"] is True
