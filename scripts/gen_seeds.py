# Minimal seed generator
import json
from pathlib import Path

states_cities = [
  ("Karnataka", "Bengaluru", "South Western"),
  ("Gujarat", "Ahmedabad", "Western"),
  ("Uttar Pradesh", "Lucknow", "Northern"),
  ("Haryana", "Rohtak", "North Western"),
  ("West Bengal", "Kolkata", "Eastern"),
  ("Kerala", "Ernakulam", "South Western"),
  ("Maharashtra", "Pune", "Western"),
  ("Puducherry", "Puducherry", "Southern"),
  ("Jharkhand", "Ranchi", "Eastern"),
  ("Odisha", "Bhubaneswar", "Eastern"),
  ("Delhi", "New Delhi", "North Western"),
  ("Tamil Nadu", "Chennai", "Southern"),
  ("Madhya Pradesh", "Bhopal", "Central"),
  ("Telangana", "Warangal", "South Central"),
  ("Punjab", "Ludhiana", "North Western"),
  ("Goa", "Panaji", "Western"),
  ("Assam", "Guwahati", "Eastern"),
  ("Rajasthan", "Jaipur", "North Western"),
  ("Bihar", "Patna", "Northern"),
  ("Andhra Pradesh", "Vijayawada", "Southern"),
  ("Uttarakhand", "Dehradun", "Northern")
]

types = ["Engineering", "Management", "Pharmacy", "Polytechnic", "Architecture"]
names = [
  "Aryabhata Institute of Technology", "Sardar Patel Management Academy", "Kalam Technical Campus",
  "Maharshi Dayanand College", "Tagore Architecture Institute", "St. Xavier Polytechnic",
  "Shivaji Research Institute", "Aurobindo Business School", "Birsa Munda Technical College",
  "Netaji Subhash Pharmacy College", "Delhi Advanced Engineering College", "Thiruvalluvar Institute",
  "Vidyasagar Technical Academy", "Shastri Management Institute", "Kakatiya Pharmaceutical Institute",
  "Rani Laxmibai Engineering Campus", "Visvesvaraya School of Planning", "Punjab Applied Science College",
  "Goa Marine & Technical College", "Assam Valley Management Campus", "Rajasthan Institute of Technology"
]

institutions = []
for i in range(21):
    st, ct, reg = states_cities[i]
    t = types[i % len(types)]
    nm = names[i]
    institutions.append({
        "id": f"inst-{i+1}",
        "code": f"AICTE-1-{4920190 + i*17}",
        "name": nm,
        "type": t,
        "state": st,
        "city": ct,
        "contactPerson": f"Director / Principal ({nm})",
        "email": f"contact@inst-{i+1}.edu.in",
        "phone": f"+91 {9800000000 + i*1357}",
        "aicteApprovalNo": f"AICTE/{reg.replace(' ', '')}/{t[:4].upper()}/20{(10+i)%24:02d}/9{i:02d}",
        "approvalYear": 2000 + (i % 22),
        "complianceStatus": "Action Required" if i == 1 else "Under Review" if i == 12 else "Compliant",
        "riskProfile": "High" if i == 1 else "Medium" if i in [2, 12] else "Low",
        "totalFDRCount": 2 + (i % 4),
        "activeFDRAmount": (15 + (i % 6) * 10) * 100000
    })

def make_fields(fdr_num, amt, bank, branch, issue, mat, ben, joint):
    return [
        {"fieldName": "fdrNumber", "label": "FDR / Certificate No.", "value": fdr_num, "confidence": 0.98, "page": 1, "boundingBox": {"x": 55, "y": 18, "width": 35, "height": 4}},
        {"fieldName": "amount", "label": "Principal Deposit Amount", "value": amt, "confidence": 0.96, "page": 1, "boundingBox": {"x": 50, "y": 32, "width": 28, "height": 5}},
        {"fieldName": "bankName", "label": "Issuing Bank Name", "value": bank, "confidence": 0.99, "page": 1, "boundingBox": {"x": 15, "y": 12, "width": 40, "height": 6}},
        {"fieldName": "branchName", "label": "Branch Name", "value": branch, "confidence": 0.94, "page": 1, "boundingBox": {"x": 15, "y": 20, "width": 30, "height": 4}},
        {"fieldName": "issueDate", "label": "Issue / Deposit Date", "value": issue, "confidence": 0.95, "page": 1, "boundingBox": {"x": 60, "y": 40, "width": 25, "height": 4}},
        {"fieldName": "maturityDate", "label": "Maturity Date", "value": mat, "confidence": 0.97, "page": 1, "boundingBox": {"x": 60, "y": 48, "width": 25, "height": 4}},
        {"fieldName": "beneficiary", "label": "Primary Account Holder", "value": ben, "confidence": 0.96, "page": 1, "boundingBox": {"x": 20, "y": 55, "width": 60, "height": 4}},
        {"fieldName": "jointBeneficiary", "label": "Mandatory Joint Holder", "value": joint, "confidence": 0.97, "page": 1, "boundingBox": {"x": 20, "y": 62, "width": 60, "height": 4}}
    ]

# 5 Scripted Benchmark FDRs
benchmarks = [
  {
    "id": "fdr-benchmark-1",
    "fdrNumber": "FDR-SBI-2024-81729",
    "institutionId": "inst-1",
    "institutionName": institutions[0]["name"],
    "bankName": "State Bank of India",
    "branchName": "Koramangala Branch, Bengaluru",
    "ifscCode": "SBIN0007812",
    "amount": 3500000,
    "issueDate": "2024-03-15",
    "maturityDate": "2029-03-15",
    "tenureMonths": 60,
    "interestRate": 7.25,
    "beneficiary": institutions[0]["name"],
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Mandatory Security Deposit under AICTE Approval Process Handbook (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-clean-81729",
    "documentFileName": "SBI_FDR_35L_Aryabhata_Clean.pdf",
    "extractedFields": make_fields("FDR-SBI-2024-81729", 3500000, "State Bank of India", "Koramangala Branch, Bengaluru", "2024-03-15", "2029-03-15", institutions[0]["name"], "Regional Officer AICTE"),
    "verification": {
      "source": "State Bank of India CBS API Direct Connect",
      "status": "MATCH",
      "verifiedAt": "2024-03-16T10:30:00Z",
      "discrepancies": [],
      "matchedFields": ["fdrNumber", "amount", "issueDate", "maturityDate", "bankName", "beneficiary", "jointBeneficiary"],
      "externalRef": "CBS-SBI-TXN-902819",
      "bankBranch": "Koramangala Branch, Bengaluru",
      "isAuthorizedConnector": True
    },
    "tamperAnalysis": {
      "overallLevel": "Normal", "fontConsistency": 99, "layoutIntegrity": 98,
      "alteredNumericsDetected": False, "metadataAnomalies": [], "sealSignatureCheck": "Verified Authentic", "confidence": 0.98
    },
    "ruleEvaluations": [
      {"ruleId": "RULE-FDR-BENEFICIARY-001", "ruleName": "AICTE Mandatory Joint Beneficiary Requirement", "ruleVersion": "1.0", "category": "MANDATORY_FIELD", "status": "PASS", "severity": "CRITICAL", "explanation": "FDR clearly designates AICTE as mandatory joint holder."},
      {"ruleId": "RULE-FDR-TENURE-002", "ruleName": "Minimum Mandatory Security Deposit Tenure", "ruleVersion": "1.0", "category": "TENURE_VALIDATION", "status": "PASS", "severity": "HIGH", "explanation": "Tenure meets requirement: 60 months."}
    ],
    "aiRecommendation": {
      "action": "Approve", "confidence": 0.98,
      "rationale": "Authoritative bank records match 100%. Full regulatory compliance satisfied.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001", "evidenceText": "SBI API returned matching principal under lien to AICTE."
    },
    "createdAt": "2024-03-15T09:00:00Z", "updatedAt": "2024-03-16T11:00:00Z"
  },
  {
    "id": "fdr-benchmark-2",
    "fdrNumber": "FDR-PNB-2024-9981",
    "institutionId": "inst-2",
    "institutionName": institutions[1]["name"],
    "bankName": "Punjab National Bank",
    "branchName": "Ashram Road Branch, Ahmedabad",
    "ifscCode": "PUNB0182900",
    "amount": 5000000,
    "issueDate": "2024-06-10",
    "maturityDate": "2029-06-10",
    "tenureMonths": 60,
    "interestRate": 7.10,
    "beneficiary": institutions[1]["name"],
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Management Expansion Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Review recommended",
    "verificationStatus": "MISMATCH",
    "riskScore": 78,
    "riskLevel": "Critical",
    "documentId": "doc-altered-9981",
    "documentFileName": "PNB_FDR_50L_Altered_Scan.pdf",
    "extractedFields": make_fields("FDR-PNB-2024-9981", 5000000, "Punjab National Bank", "Ashram Road Branch, Ahmedabad", "2024-06-10", "2029-06-10", institutions[1]["name"], "Regional Officer AICTE"),
    "verification": {
      "source": "Punjab National Bank CBS Direct API (Mock)",
      "status": "MISMATCH",
      "verifiedAt": "2024-06-11T14:20:00Z",
      "discrepancies": [
        {"field": "amount", "submittedValue": 5000000, "authoritativeValue": 4500000, "severity": "CRITICAL", "explanation": "Bank CBS record shows principal amount of ₹45,00,000, whereas submitted certificate claims ₹50,00,000. Deficit: ₹5,00,000."}
      ],
      "matchedFields": ["fdrNumber", "bankName", "branchName", "issueDate", "maturityDate"],
      "externalRef": "CBS-PNB-MISMATCH-81920",
      "bankBranch": "Ashram Road Branch, Ahmedabad",
      "isAuthorizedConnector": True
    },
    "tamperAnalysis": {
      "overallLevel": "Review recommended", "fontConsistency": 74, "layoutIntegrity": 82,
      "alteredNumericsDetected": True, "metadataAnomalies": ["Font face mismatch detected on numeric glyph '5' in amount field"],
      "sealSignatureCheck": "Needs Manual Inspection", "confidence": 0.91
    },
    "ruleEvaluations": [
      {"ruleId": "RULE-FDR-AMOUNT-004", "ruleName": "Minimum Institutional Security Deposit Slab", "ruleVersion": "1.0", "category": "FINANCIAL_THRESHOLD", "status": "FAIL", "severity": "CRITICAL", "explanation": "Verified authoritative principal ₹45 Lakhs leaves ₹5 Lakh deficit."}
    ],
    "aiRecommendation": {
      "action": "Request Clarification", "confidence": 0.94,
      "rationale": "Definite cross-source discrepancy between submitted certificate (₹50L) and PNB Core Banking System (₹45L). Officer must seek bank confirmation letter or escalate.",
      "applicableRuleId": "RULE-FDR-AMOUNT-004", "evidenceText": "PNB CBS API account reflects ₹45,00,000. OCR glyph anomaly on '50,00,000'."
    },
    "createdAt": "2024-06-10T08:15:00Z", "updatedAt": "2024-06-11T14:30:00Z"
  },
  {
    "id": "fdr-benchmark-3",
    "fdrNumber": "FDR-BOB-2019-44120",
    "institutionId": "inst-3",
    "institutionName": institutions[2]["name"],
    "bankName": "Bank of Baroda",
    "branchName": "Hazratganj Branch, Lucknow",
    "ifscCode": "BARB0HAZRAT",
    "amount": 5000000,
    "issueDate": "2019-12-01",
    "maturityDate": "2026-11-25",
    "tenureMonths": 84,
    "interestRate": 6.85,
    "beneficiary": institutions[2]["name"],
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Security Deposit for B.Tech Expansion (Lien Marked)",
    "lifecycleStatus": "Renewal Required",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 52,
    "riskLevel": "High",
    "documentId": "doc-expiring-44120",
    "documentFileName": "BOB_FDR_50L_MaturityImminent.pdf",
    "extractedFields": make_fields("FDR-BOB-2019-44120", 5000000, "Bank of Baroda", "Hazratganj Branch, Lucknow", "2019-12-01", "2026-11-25", institutions[2]["name"], "Regional Officer AICTE"),
    "verification": {
      "source": "Bank of Baroda CBS API", "status": "MATCH", "verifiedAt": "2026-10-15T09:12:00Z",
      "discrepancies": [], "matchedFields": ["fdrNumber", "amount", "maturityDate"],
      "externalRef": "CBS-BOB-MAT-991204", "bankBranch": "Hazratganj Branch, Lucknow", "isAuthorizedConnector": True
    },
    "tamperAnalysis": {
      "overallLevel": "Normal", "fontConsistency": 97, "layoutIntegrity": 96,
      "alteredNumericsDetected": False, "metadataAnomalies": [], "sealSignatureCheck": "Verified Authentic", "confidence": 0.96
    },
    "ruleEvaluations": [
      {"ruleId": "RULE-FDR-EXP-003", "ruleName": "Maturity Proximity & Renewal Trigger", "ruleVersion": "2.0", "category": "LIFECYCLE_MATURITY", "status": "WARNING", "severity": "HIGH", "explanation": "Maturity date is within 18 days. Mandatory renewal workflow triggered."}
    ],
    "aiRecommendation": {
      "action": "Request Clarification", "confidence": 0.96,
      "rationale": "FDR approaches maturity on 25-Nov-2026 (< 20 days). Automatic renewal notice triggered.",
      "applicableRuleId": "RULE-FDR-EXP-003", "evidenceText": "Maturity countdown active: 18 days remaining. Replacement certificate required."
    },
    "createdAt": "2019-12-01T10:00:00Z", "updatedAt": "2026-11-01T08:00:00Z"
  },
  {
    "id": "fdr-benchmark-4",
    "fdrNumber": "FDR-HDFC-2024-55190",
    "institutionId": "inst-13",
    "institutionName": institutions[12]["name"],
    "bankName": "HDFC Bank",
    "branchName": "Midnapore Main Branch",
    "ifscCode": "HDFC0001928",
    "amount": 2500000,
    "issueDate": "2024-05-18",
    "maturityDate": "2029-05-18",
    "tenureMonths": 60,
    "interestRate": 7.20,
    "beneficiary": institutions[12]["name"],
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Diploma Polytechnic Security Deposit",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "High concern",
    "verificationStatus": "REQUIRES HUMAN REVIEW",
    "riskScore": 72,
    "riskLevel": "Critical",
    "documentId": "doc-suspicious-55190",
    "documentFileName": "HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf",
    "extractedFields": make_fields("FDR-HDFC-2024-55190", 2500000, "HDFC Bank", "Midnapore Main Branch", "2024-05-18", "2029-05-18", institutions[12]["name"], "Regional Officer AICTE"),
    "verification": {
      "source": "HDFC Core Banking Service Node", "status": "REQUIRES HUMAN REVIEW", "verifiedAt": "2024-05-19T11:00:00Z",
      "discrepancies": [
        {"field": "serial_security_thread", "submittedValue": "Not verified", "authoritativeValue": "Branch confirmation required", "severity": "HIGH", "explanation": "Certificate serial number not recognized in issuing branch inventory. Branch letter verification required."}
      ],
      "matchedFields": ["amount", "maturityDate"],
      "externalRef": "CBS-HDFC-INSP-55190", "bankBranch": "Midnapore Main Branch", "isAuthorizedConnector": True
    },
    "tamperAnalysis": {
      "overallLevel": "High concern", "fontConsistency": 62, "layoutIntegrity": 68,
      "alteredNumericsDetected": True,
      "metadataAnomalies": [
        "PDF modified with Adobe Photoshop 24.1 (Windows)",
        "Resolution mismatch: 150 DPI background canvas with 600 DPI pasted bank seal stamp"
      ],
      "sealSignatureCheck": "Anomalous", "confidence": 0.89
    },
    "ruleEvaluations": [
      {"ruleId": "RULE-FDR-BANK-005", "ruleName": "Scheduled Commercial Bank Requirement", "ruleVersion": "1.0", "category": "BANK_AUTHORIZATION", "status": "PASS", "severity": "HIGH", "explanation": "HDFC Bank is an RBI-approved Scheduled Commercial Bank."}
    ],
    "aiRecommendation": {
      "action": "Escalate", "confidence": 0.91,
      "rationale": "High-concern tampering signals detected: Photoshop modification tag and unverified branch certificate serial.",
      "applicableRuleId": "RULE-FDR-BANK-005", "evidenceText": "Metadata contains software signature 'Photoshop 24.1'; stamp DPI is 4x background scan DPI."
    },
    "createdAt": "2024-05-18T10:00:00Z", "updatedAt": "2024-05-19T12:00:00Z"
  },
  {
    "id": "fdr-benchmark-5",
    "fdrNumber": "FDR-CAN-2016-10291",
    "institutionId": "inst-7",
    "institutionName": institutions[6]["name"],
    "bankName": "Canara Bank",
    "branchName": "Shivaji Nagar Branch, Pune",
    "ifscCode": "CNRB0001029",
    "amount": 10000000,
    "issueDate": "2016-08-10",
    "maturityDate": "2024-08-10",
    "tenureMonths": 96,
    "interestRate": 7.75,
    "beneficiary": institutions[6]["name"],
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "10-Year Permanent Approval Security Deposit (Lien Marked)",
    "lifecycleStatus": "Release Eligible",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-release-10291",
    "documentFileName": "Canara_FDR_100L_ReleaseEligible.pdf",
    "extractedFields": make_fields("FDR-CAN-2016-10291", 10000000, "Canara Bank", "Shivaji Nagar Branch, Pune", "2016-08-10", "2024-08-10", institutions[6]["name"], "Regional Officer AICTE"),
    "verification": {
      "source": "Canara Bank CBS API", "status": "MATCH", "verifiedAt": "2024-08-12T16:00:00Z",
      "discrepancies": [], "matchedFields": ["fdrNumber", "amount", "issueDate", "maturityDate"],
      "externalRef": "CBS-CAN-REL-881920", "bankBranch": "Shivaji Nagar Branch, Pune", "isAuthorizedConnector": True
    },
    "tamperAnalysis": {
      "overallLevel": "Normal", "fontConsistency": 98, "layoutIntegrity": 98,
      "alteredNumericsDetected": False, "metadataAnomalies": [], "sealSignatureCheck": "Verified Authentic", "confidence": 0.99
    },
    "ruleEvaluations": [
      {"ruleId": "RULE-FDR-RELEASE-007", "ruleName": "Release Eligibility Prerequisite Check", "ruleVersion": "1.0", "category": "RELEASE_PREREQUISITE", "status": "PASS", "severity": "CRITICAL", "explanation": "Mandatory 8-year lock-in satisfied. Zero pending deficiencies."}
    ],
    "releaseEligibilityDate": "2024-08-11",
    "releaseReason": "Successful completion of 8-year mandatory security deposit tenure with continuous AICTE accreditation A++ grade.",
    "refundAmount": 10000000,
    "aiRecommendation": {
      "action": "Approve", "confidence": 0.99,
      "rationale": "Institution meets 100% of AICTE release prerequisites. Complete tenure completed without violations.",
      "applicableRuleId": "RULE-FDR-RELEASE-007", "evidenceText": "Lien release prerequisites confirmed by Canara Bank and AICTE WRO."
    },
    "createdAt": "2016-08-10T11:00:00Z", "updatedAt": "2024-08-12T16:30:00Z"
  }
]

# Generate 50 additional FDRs
banks_list = [
    ("State Bank of India", "SBIN000"),
    ("Punjab National Bank", "PUNB0"),
    ("Bank of Baroda", "BARB0"),
    ("Canara Bank", "CNRB000"),
    ("Union Bank of India", "UBIN05"),
    ("HDFC Bank", "HDFC000"),
    ("ICICI Bank", "ICIC000"),
    ("Indian Bank", "IDIB000")
]
amounts_list = [1500000, 2500000, 3500000, 5000000, 7500000, 10000000]
states_list = [
    ("Active", "Low", 12),
    ("Active", "Low", 15),
    ("Active", "Low", 18),
    ("Under Review", "Medium", 32),
    ("Compliance Checked", "Low", 14),
    ("Verified", "Low", 10),
    ("Validation Pending", "Low", 12),
    ("Maturity Approaching", "Medium", 38),
    ("Renewal Submitted", "Low", 22),
    ("Replacement Under Review", "Medium", 28),
    ("Refund Processing", "Low", 15),
    ("Released/Refunded", "Low", 8),
    ("Closed", "Low", 5)
]

extra_fdrs = []
for i in range(6, 56):
    inst = institutions[(i - 6) % len(institutions)]
    b_name, ifsc_p = banks_list[i % len(banks_list)]
    amt = amounts_list[i % len(amounts_list)]
    st_name, rk_name, sc = states_list[i % len(states_list)]
    f_num = f"FDR-{b_name[:3].upper()}-202{i % 5}-{10000 + i * 37}"
    iy = 2020 + (i % 5)
    my = iy + 5
    is_d = f"{iy}-0{(i % 8) + 1}-15"
    ma_d = f"{my}-0{(i % 8) + 1}-15"
    extra_fdrs.append({
        "id": f"fdr-extra-{i}",
        "fdrNumber": f_num,
        "institutionId": inst["id"],
        "institutionName": inst["name"],
        "bankName": b_name,
        "branchName": f"{inst['city']} Main Commercial Branch",
        "ifscCode": f"{ifsc_p}{1000 + i}",
        "amount": amt,
        "issueDate": is_d,
        "maturityDate": ma_d,
        "tenureMonths": 60,
        "interestRate": round(7.0 + (i % 6) * 0.15, 2),
        "beneficiary": inst["name"],
        "jointBeneficiary": "Regional Officer AICTE",
        "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
        "lifecycleStatus": st_name,
        "authenticityLevel": "Normal",
        "verificationStatus": "MATCH",
        "riskScore": sc,
        "riskLevel": rk_name,
        "documentId": f"doc-{i}",
        "documentFileName": f"{b_name.replace(' ', '_')}_FDR_{int(amt/100000)}L_{inst['city']}.pdf",
        "extractedFields": make_fields(f_num, amt, b_name, f"{inst['city']} Main Branch", is_d, ma_d, inst["name"], "Regional Officer AICTE"),
        "verification": {
            "source": f"{b_name} CBS API",
            "status": "MATCH",
            "verifiedAt": f"{is_d}T10:00:00Z",
            "discrepancies": [],
            "matchedFields": ["fdrNumber", "amount", "maturityDate"],
            "externalRef": f"CBS-REF-{100000 + i}",
            "bankBranch": f"{inst['city']} Main Commercial Branch",
            "isAuthorizedConnector": True
        },
        "tamperAnalysis": {
            "overallLevel": "Normal", "fontConsistency": 96 + (i % 4), "layoutIntegrity": 97,
            "alteredNumericsDetected": False, "metadataAnomalies": [], "sealSignatureCheck": "Verified Authentic", "confidence": 0.97
        },
        "ruleEvaluations": [
            {"ruleId": "RULE-FDR-BENEFICIARY-001", "ruleName": "AICTE Mandatory Joint Beneficiary Requirement", "ruleVersion": "1.0", "category": "MANDATORY_FIELD", "status": "PASS", "severity": "CRITICAL", "explanation": "FDR designates AICTE as joint holder."},
            {"ruleId": "RULE-FDR-TENURE-002", "ruleName": "Minimum Mandatory Security Deposit Tenure", "ruleVersion": "1.0", "category": "TENURE_VALIDATION", "status": "PASS", "severity": "HIGH", "explanation": "Tenure meets 60 months."}
        ],
        "aiRecommendation": {
            "action": "Approve", "confidence": 0.97,
            "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
            "applicableRuleId": "RULE-FDR-BENEFICIARY-001", "evidenceText": "Core banking verification confirmed."
        },
        "createdAt": f"{is_d}T09:00:00Z", "updatedAt": f"{is_d}T12:00:00Z"
    })

all_fdrs = benchmarks + extra_fdrs

cases = [
  {"id": "case-bench-2", "caseNumber": "CASE-2024-CRIT-002", "fdrId": "fdr-benchmark-2", "fdrNumber": "FDR-PNB-2024-9981", "institutionId": "inst-2", "institutionName": institutions[1]["name"], "amount": 5000000, "priority": "Critical", "status": "Open", "slaDeadline": "2026-11-07T14:30:00Z", "isSlaBreached": False, "assignedReviewerId": "rev-1", "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)", "createdAt": "2024-06-11T14:30:00Z", "updatedAt": "2024-06-11T14:30:00Z"},
  {"id": "case-bench-4", "caseNumber": "CASE-2024-CRIT-004", "fdrId": "fdr-benchmark-4", "fdrNumber": "FDR-HDFC-2024-55190", "institutionId": "inst-13", "institutionName": institutions[12]["name"], "amount": 2500000, "priority": "Critical", "status": "Open", "slaDeadline": "2026-11-07T18:00:00Z", "isSlaBreached": False, "assignedReviewerId": "rev-2", "assignedReviewerName": "Priya Nair (Forensic Analyst)", "createdAt": "2024-05-19T12:00:00Z", "updatedAt": "2024-05-19T12:00:00Z"},
  {"id": "case-bench-3", "caseNumber": "CASE-2026-HIGH-003", "fdrId": "fdr-benchmark-3", "fdrNumber": "FDR-BOB-2019-44120", "institutionId": "inst-3", "institutionName": institutions[2]["name"], "amount": 5000000, "priority": "High", "status": "In Review", "slaDeadline": "2026-11-08T10:00:00Z", "isSlaBreached": False, "assignedReviewerId": "rev-1", "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)", "createdAt": "2026-11-01T08:00:00Z", "updatedAt": "2026-11-02T10:00:00Z"},
  {"id": "case-bench-5", "caseNumber": "CASE-2024-MED-005", "fdrId": "fdr-benchmark-5", "fdrNumber": "FDR-CAN-2016-10291", "institutionId": "inst-7", "institutionName": institutions[6]["name"], "amount": 10000000, "priority": "Medium", "status": "Open", "slaDeadline": "2026-11-09T16:30:00Z", "isSlaBreached": False, "assignedReviewerId": "rev-3", "assignedReviewerName": "Anand Joshi (Officer)", "createdAt": "2024-08-12T16:30:00Z", "updatedAt": "2024-08-12T16:30:00Z"},
  {"id": "case-bench-1", "caseNumber": "CASE-2024-LOW-001", "fdrId": "fdr-benchmark-1", "fdrNumber": "FDR-SBI-2024-81729", "institutionId": "inst-1", "institutionName": institutions[0]["name"], "amount": 3500000, "priority": "Low", "status": "Resolved", "slaDeadline": "2024-03-20T18:00:00Z", "isSlaBreached": False, "assignedReviewerId": "rev-1", "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)", "createdAt": "2024-03-15T09:30:00Z", "updatedAt": "2024-03-16T11:00:00Z"}
]

ts = f'''import {{ Institution, FDRRecord, CaseRecord, ExtractedField, VerificationRecord }} from "./types";

export const SEED_INSTITUTIONS: Institution[] = {json.dumps(institutions, indent=2)};

export const BENCHMARK_FDRS: FDRRecord[] = {json.dumps(benchmarks, indent=2)};

export const ALL_SEED_FDRS: FDRRecord[] = {json.dumps(all_fdrs, indent=2)};

export const SEED_CASES: CaseRecord[] = {json.dumps(cases, indent=2)};
'''

Path("apps/web/lib/seedData.ts").write_text(ts, encoding="utf-8")
print(f"Generated {len(institutions)} institutions, {len(all_fdrs)} FDRs, {len(cases)} cases.")
