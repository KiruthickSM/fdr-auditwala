import pytest

def evaluate_beneficiary_rule(beneficiary: str, joint: str):
    combined = f"{beneficiary} {joint}".lower()
    return "aicte" in combined or "all india council for technical education" in combined

def evaluate_tenure_rule(tenure_months: int):
    return tenure_months >= 60

def evaluate_amount_rule(amount: int):
    return amount >= 1500000

def test_beneficiary_rule_passes_with_aicte():
    assert evaluate_beneficiary_rule("Aryabhata Tech", "Regional Officer AICTE") is True

def test_beneficiary_rule_fails_without_aicte():
    assert evaluate_beneficiary_rule("Aryabhata Tech", "State Bank of India") is False

def test_tenure_rule_validates_minimum_60_months():
    assert evaluate_tenure_rule(60) is True
    assert evaluate_tenure_rule(84) is True
    assert evaluate_tenure_rule(36) is False

def test_amount_rule_validates_15_lakh_slab():
    assert evaluate_amount_rule(3500000) is True
    assert evaluate_amount_rule(1500000) is True
    assert evaluate_amount_rule(1000000) is False
