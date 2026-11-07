import pytest

def calculate_risk_score(is_mismatch: bool, tamper_level: str, days_left: int) -> int:
    score = 0
    if is_mismatch:
        score += 25
    if tamper_level == "High concern":
        score += 20
    elif tamper_level == "Review recommended":
        score += 12
    if days_left <= 45:
        score += 15
    return min(100, score)

def test_clean_fdr_scores_low():
    score = calculate_risk_score(False, "Normal", 1200)
    assert score == 0

def test_mismatch_and_tamper_scores_critical():
    score = calculate_risk_score(True, "Review recommended", 30)
    # 25 + 12 + 15 = 52 (High risk)
    assert score >= 45

def test_extreme_risk_triggers():
    score = calculate_risk_score(True, "High concern", 10)
    # 25 + 20 + 15 = 60
    assert score >= 60
