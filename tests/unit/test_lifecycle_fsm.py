import pytest

VALID_TRANSITIONS = {
    "Submitted": ["Extracted"],
    "Extracted": ["Validation Pending"],
    "Validation Pending": ["Verification Pending"],
    "Verification Pending": ["Under Review"],
    "Under Review": ["Verified"],
    "Verified": ["Compliance Checked"],
    "Compliance Checked": ["Active"],
    "Active": ["Maturity Approaching", "Release Eligible"],
    "Maturity Approaching": ["Renewal Required"],
    "Renewal Required": ["Renewal Submitted"],
    "Renewal Submitted": ["Replacement Under Review"],
    "Release Eligible": ["Refund Processing"],
    "Refund Processing": ["Released/Refunded"],
    "Released/Refunded": ["Closed"]
}

def can_transition(current_state: str, target_state: str) -> bool:
    return target_state in VALID_TRANSITIONS.get(current_state, [])

def test_valid_sequential_transitions():
    assert can_transition("Submitted", "Extracted") is True
    assert can_transition("Extracted", "Validation Pending") is True
    assert can_transition("Compliance Checked", "Active") is True
    assert can_transition("Active", "Maturity Approaching") is True

def test_illegal_arbitrary_transition_blocked():
    assert can_transition("Submitted", "Active") is False
    assert can_transition("Under Review", "Released/Refunded") is False
