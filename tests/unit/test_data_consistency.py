import json
import re
from pathlib import Path

def test_canonical_institution_names():
    seed_text = Path("apps/web/lib/seedData.ts").read_text(encoding="utf-8")
    
    # Extract institutions
    inst_start = seed_text.find("export const SEED_INSTITUTIONS: Institution[] = [")
    inst_end = seed_text.find("];", inst_start)
    inst_json = json.loads(seed_text[inst_start + len("export const SEED_INSTITUTIONS: Institution[] = "): inst_end + 1])
    
    inst_names = {}
    for inst in inst_json:
        iid = inst["id"]
        iname = inst["name"]
        assert iid not in inst_names, f"Duplicate institution ID {iid}"
        inst_names[iid] = iname
        
    # Check inst-2 specifically
    assert inst_names.get("inst-2") == "Sardar Patel Management Academy", (
        f"inst-2 name mismatch: {inst_names.get('inst-2')}"
    )

    # Check cases
    case_start = seed_text.find("export const SEED_CASES: CaseRecord[] = [")
    case_end = seed_text.find("];", case_start)
    case_json = json.loads(seed_text[case_start + len("export const SEED_CASES: CaseRecord[] = "): case_end + 1])
    
    for c in case_json:
        cid = c["id"]
        cnum = c["caseNumber"]
        assert cid == cnum, f"Case id {cid} must match caseNumber {cnum}"
        # Validate pattern CASE-<YYYY>-<PRIORITY>-<NNN>
        m = re.match(r"^CASE-(\d{4})-(CRIT|HIGH|MED|LOW)-(\d{3})$", cid)
        assert m, f"Case ID {cid} does not match canonical pattern CASE-<YYYY>-<PRIORITY>-<NNN>"
        # Year matches createdAt
        created_year = c["createdAt"][:4]
        assert m.group(1) == created_year, f"Case ID year {m.group(1)} does not match createdAt {created_year}"
        
        # Verify institution name is canonical
        expected_inst_name = inst_names.get(c["institutionId"])
        if expected_inst_name:
            assert c["institutionName"] == expected_inst_name, (
                f"Case {cid} has inst name {c['institutionName']}, expected {expected_inst_name}"
            )

def test_no_institution_has_two_names():
    seed_text = Path("apps/web/lib/seedData.ts").read_text(encoding="utf-8")
    pairs = re.findall(r'"institutionId":\s*"([^"]+)",\s*"institutionName":\s*"([^"]+)"', seed_text)
    mapping = {}
    for iid, name in pairs:
        if iid in mapping:
            assert mapping[iid] == name, f"Institution {iid} has multiple names: {mapping[iid]} vs {name}"
        else:
            mapping[iid] = name

if __name__ == "__main__":
    test_canonical_institution_names()
    test_no_institution_has_two_names()
    print("All data consistency tests passed!")
