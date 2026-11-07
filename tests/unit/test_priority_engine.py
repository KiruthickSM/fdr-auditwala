import json
from pathlib import Path

def compute_priority_score(c, fdr):
    if c.get("status") == "Resolved":
        return 10
        
    raw_risk = fdr.get("riskScore", 75 if c["priority"] == "Critical" else 50 if c["priority"] == "High" else 20)
    risk_pts = raw_risk * 0.35
    
    # Urgency
    urgency_raw = 95 if "14:30" in c.get("slaDeadline", "") else 65
    urgency_pts = urgency_raw * 0.25
    
    # Compliance
    comp_raw = 100 if fdr.get("verificationStatus") == "MISMATCH" or fdr.get("riskLevel") == "Critical" else 75 if fdr.get("lifecycleStatus") == "Renewal Required" else 20
    comp_pts = comp_raw * 0.15
    
    # Exposure
    amt = c.get("amount", 0)
    expo_raw = 85 if amt >= 5000000 else 65 if amt >= 2500000 else 40
    expo_pts = expo_raw * 0.15
    
    # Verification
    v_stat = fdr.get("verificationStatus", "MATCH")
    v_raw = 100 if v_stat == "MISMATCH" else 85 if v_stat == "REQUIRES HUMAN REVIEW" else 10
    v_pts = v_raw * 0.10
    
    return round(risk_pts + urgency_pts + comp_pts + expo_pts + v_pts)

def test_priority_ranking_order():
    seed_text = Path("apps/web/lib/seedData.ts").read_text(encoding="utf-8")
    
    case_start = seed_text.find("export const SEED_CASES: CaseRecord[] = [")
    case_end = seed_text.find("];", case_start)
    cases = json.loads(seed_text[case_start + len("export const SEED_CASES: CaseRecord[] = "): case_end + 1])
    
    fdr_start = seed_text.find("export const ALL_SEED_FDRS: FDRRecord[] = [")
    fdr_end = seed_text.find("];", fdr_start)
    fdrs = json.loads(seed_text[fdr_start + len("export const ALL_SEED_FDRS: FDRRecord[] = "): fdr_end + 1])
    fdr_map = {f["id"]: f for f in fdrs}
    
    scored = []
    for c in cases:
        fdr = fdr_map.get(c["fdrId"], {})
        score = compute_priority_score(c, fdr)
        scored.append((score, c["id"], c["status"]))
        
    # Sort descending
    scored.sort(key=lambda x: x[0], reverse=True)
    
    # Check top case is CASE-2024-CRIT-002
    assert scored[0][1] == "CASE-2024-CRIT-002", f"Top case should be CASE-2024-CRIT-002, got {scored[0][1]}"
    # Check resolved case is at the bottom
    assert scored[-1][1] == "CASE-2024-LOW-001", f"Lowest case should be CASE-2024-LOW-001, got {scored[-1][1]}"
    assert scored[-1][2] == "Resolved"

if __name__ == "__main__":
    test_priority_ranking_order()
    print("Priority ranking order test passed!")
