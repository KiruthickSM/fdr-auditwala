import { Institution, FDRRecord, CaseRecord, ExtractedField, VerificationRecord } from "./types";

export const SEED_INSTITUTIONS: Institution[] = [
  {
    "id": "inst-1",
    "code": "AICTE-1-4920190",
    "name": "Aryabhata Institute of Technology",
    "type": "Engineering",
    "state": "Karnataka",
    "city": "Bengaluru",
    "contactPerson": "Director / Principal (Aryabhata Institute of Technology)",
    "email": "contact@inst-1.edu.in",
    "phone": "+91 9800000000",
    "aicteApprovalNo": "AICTE/SouthWestern/ENGI/2010/900",
    "approvalYear": 2000,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 2,
    "activeFDRAmount": 1500000
  },
  {
    "id": "inst-2",
    "code": "AICTE-1-4920207",
    "name": "Sardar Patel Management Academy",
    "type": "Management",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "contactPerson": "Director / Principal (Sardar Patel Management Academy)",
    "email": "contact@inst-2.edu.in",
    "phone": "+91 9800001357",
    "aicteApprovalNo": "AICTE/Western/MANA/2011/901",
    "approvalYear": 2001,
    "complianceStatus": "Action Required",
    "riskProfile": "High",
    "totalFDRCount": 3,
    "activeFDRAmount": 2500000
  },
  {
    "id": "inst-3",
    "code": "AICTE-1-4920224",
    "name": "Kalam Technical Campus",
    "type": "Pharmacy",
    "state": "Uttar Pradesh",
    "city": "Lucknow",
    "contactPerson": "Director / Principal (Kalam Technical Campus)",
    "email": "contact@inst-3.edu.in",
    "phone": "+91 9800002714",
    "aicteApprovalNo": "AICTE/Northern/PHAR/2012/902",
    "approvalYear": 2002,
    "complianceStatus": "Compliant",
    "riskProfile": "Medium",
    "totalFDRCount": 4,
    "activeFDRAmount": 3500000
  },
  {
    "id": "inst-4",
    "code": "AICTE-1-4920241",
    "name": "Maharshi Dayanand College",
    "type": "Polytechnic",
    "state": "Haryana",
    "city": "Rohtak",
    "contactPerson": "Director / Principal (Maharshi Dayanand College)",
    "email": "contact@inst-4.edu.in",
    "phone": "+91 9800004071",
    "aicteApprovalNo": "AICTE/NorthWestern/POLY/2013/903",
    "approvalYear": 2003,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 5,
    "activeFDRAmount": 4500000
  },
  {
    "id": "inst-5",
    "code": "AICTE-1-4920258",
    "name": "Tagore Architecture Institute",
    "type": "Architecture",
    "state": "West Bengal",
    "city": "Kolkata",
    "contactPerson": "Director / Principal (Tagore Architecture Institute)",
    "email": "contact@inst-5.edu.in",
    "phone": "+91 9800005428",
    "aicteApprovalNo": "AICTE/Eastern/ARCH/2014/904",
    "approvalYear": 2004,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 2,
    "activeFDRAmount": 5500000
  },
  {
    "id": "inst-6",
    "code": "AICTE-1-4920275",
    "name": "St. Xavier Polytechnic",
    "type": "Engineering",
    "state": "Kerala",
    "city": "Ernakulam",
    "contactPerson": "Director / Principal (St. Xavier Polytechnic)",
    "email": "contact@inst-6.edu.in",
    "phone": "+91 9800006785",
    "aicteApprovalNo": "AICTE/SouthWestern/ENGI/2015/905",
    "approvalYear": 2005,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 3,
    "activeFDRAmount": 6500000
  },
  {
    "id": "inst-7",
    "code": "AICTE-1-4920292",
    "name": "Shivaji Research Institute",
    "type": "Management",
    "state": "Maharashtra",
    "city": "Pune",
    "contactPerson": "Director / Principal (Shivaji Research Institute)",
    "email": "contact@inst-7.edu.in",
    "phone": "+91 9800008142",
    "aicteApprovalNo": "AICTE/Western/MANA/2016/906",
    "approvalYear": 2006,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 4,
    "activeFDRAmount": 1500000
  },
  {
    "id": "inst-8",
    "code": "AICTE-1-4920309",
    "name": "Aurobindo Business School",
    "type": "Pharmacy",
    "state": "Puducherry",
    "city": "Puducherry",
    "contactPerson": "Director / Principal (Aurobindo Business School)",
    "email": "contact@inst-8.edu.in",
    "phone": "+91 9800009499",
    "aicteApprovalNo": "AICTE/Southern/PHAR/2017/907",
    "approvalYear": 2007,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 5,
    "activeFDRAmount": 2500000
  },
  {
    "id": "inst-9",
    "code": "AICTE-1-4920326",
    "name": "Birsa Munda Technical College",
    "type": "Polytechnic",
    "state": "Jharkhand",
    "city": "Ranchi",
    "contactPerson": "Director / Principal (Birsa Munda Technical College)",
    "email": "contact@inst-9.edu.in",
    "phone": "+91 9800010856",
    "aicteApprovalNo": "AICTE/Eastern/POLY/2018/908",
    "approvalYear": 2008,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 2,
    "activeFDRAmount": 3500000
  },
  {
    "id": "inst-10",
    "code": "AICTE-1-4920343",
    "name": "Netaji Subhash Pharmacy College",
    "type": "Architecture",
    "state": "Odisha",
    "city": "Bhubaneswar",
    "contactPerson": "Director / Principal (Netaji Subhash Pharmacy College)",
    "email": "contact@inst-10.edu.in",
    "phone": "+91 9800012213",
    "aicteApprovalNo": "AICTE/Eastern/ARCH/2019/909",
    "approvalYear": 2009,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 3,
    "activeFDRAmount": 4500000
  },
  {
    "id": "inst-11",
    "code": "AICTE-1-4920360",
    "name": "Delhi Advanced Engineering College",
    "type": "Engineering",
    "state": "Delhi",
    "city": "New Delhi",
    "contactPerson": "Director / Principal (Delhi Advanced Engineering College)",
    "email": "contact@inst-11.edu.in",
    "phone": "+91 9800013570",
    "aicteApprovalNo": "AICTE/NorthWestern/ENGI/2020/910",
    "approvalYear": 2010,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 4,
    "activeFDRAmount": 5500000
  },
  {
    "id": "inst-12",
    "code": "AICTE-1-4920377",
    "name": "Thiruvalluvar Institute",
    "type": "Management",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "contactPerson": "Director / Principal (Thiruvalluvar Institute)",
    "email": "contact@inst-12.edu.in",
    "phone": "+91 9800014927",
    "aicteApprovalNo": "AICTE/Southern/MANA/2021/911",
    "approvalYear": 2011,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 5,
    "activeFDRAmount": 6500000
  },
  {
    "id": "inst-13",
    "code": "AICTE-1-4920394",
    "name": "Vidyasagar Technical Academy",
    "type": "Pharmacy",
    "state": "Madhya Pradesh",
    "city": "Bhopal",
    "contactPerson": "Director / Principal (Vidyasagar Technical Academy)",
    "email": "contact@inst-13.edu.in",
    "phone": "+91 9800016284",
    "aicteApprovalNo": "AICTE/Central/PHAR/2022/912",
    "approvalYear": 2012,
    "complianceStatus": "Under Review",
    "riskProfile": "Medium",
    "totalFDRCount": 2,
    "activeFDRAmount": 1500000
  },
  {
    "id": "inst-14",
    "code": "AICTE-1-4920411",
    "name": "Shastri Management Institute",
    "type": "Polytechnic",
    "state": "Telangana",
    "city": "Warangal",
    "contactPerson": "Director / Principal (Shastri Management Institute)",
    "email": "contact@inst-14.edu.in",
    "phone": "+91 9800017641",
    "aicteApprovalNo": "AICTE/SouthCentral/POLY/2023/913",
    "approvalYear": 2013,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 3,
    "activeFDRAmount": 2500000
  },
  {
    "id": "inst-15",
    "code": "AICTE-1-4920428",
    "name": "Kakatiya Pharmaceutical Institute",
    "type": "Architecture",
    "state": "Punjab",
    "city": "Ludhiana",
    "contactPerson": "Director / Principal (Kakatiya Pharmaceutical Institute)",
    "email": "contact@inst-15.edu.in",
    "phone": "+91 9800018998",
    "aicteApprovalNo": "AICTE/NorthWestern/ARCH/2000/914",
    "approvalYear": 2014,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 4,
    "activeFDRAmount": 3500000
  },
  {
    "id": "inst-16",
    "code": "AICTE-1-4920445",
    "name": "Rani Laxmibai Engineering Campus",
    "type": "Engineering",
    "state": "Goa",
    "city": "Panaji",
    "contactPerson": "Director / Principal (Rani Laxmibai Engineering Campus)",
    "email": "contact@inst-16.edu.in",
    "phone": "+91 9800020355",
    "aicteApprovalNo": "AICTE/Western/ENGI/2001/915",
    "approvalYear": 2015,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 5,
    "activeFDRAmount": 4500000
  },
  {
    "id": "inst-17",
    "code": "AICTE-1-4920462",
    "name": "Visvesvaraya School of Planning",
    "type": "Management",
    "state": "Assam",
    "city": "Guwahati",
    "contactPerson": "Director / Principal (Visvesvaraya School of Planning)",
    "email": "contact@inst-17.edu.in",
    "phone": "+91 9800021712",
    "aicteApprovalNo": "AICTE/Eastern/MANA/2002/916",
    "approvalYear": 2016,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 2,
    "activeFDRAmount": 5500000
  },
  {
    "id": "inst-18",
    "code": "AICTE-1-4920479",
    "name": "Punjab Applied Science College",
    "type": "Pharmacy",
    "state": "Rajasthan",
    "city": "Jaipur",
    "contactPerson": "Director / Principal (Punjab Applied Science College)",
    "email": "contact@inst-18.edu.in",
    "phone": "+91 9800023069",
    "aicteApprovalNo": "AICTE/NorthWestern/PHAR/2003/917",
    "approvalYear": 2017,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 3,
    "activeFDRAmount": 6500000
  },
  {
    "id": "inst-19",
    "code": "AICTE-1-4920496",
    "name": "Goa Marine & Technical College",
    "type": "Polytechnic",
    "state": "Bihar",
    "city": "Patna",
    "contactPerson": "Director / Principal (Goa Marine & Technical College)",
    "email": "contact@inst-19.edu.in",
    "phone": "+91 9800024426",
    "aicteApprovalNo": "AICTE/Northern/POLY/2004/918",
    "approvalYear": 2018,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 4,
    "activeFDRAmount": 1500000
  },
  {
    "id": "inst-20",
    "code": "AICTE-1-4920513",
    "name": "Assam Valley Management Campus",
    "type": "Architecture",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "contactPerson": "Director / Principal (Assam Valley Management Campus)",
    "email": "contact@inst-20.edu.in",
    "phone": "+91 9800025783",
    "aicteApprovalNo": "AICTE/Southern/ARCH/2005/919",
    "approvalYear": 2019,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 5,
    "activeFDRAmount": 2500000
  },
  {
    "id": "inst-21",
    "code": "AICTE-1-4920530",
    "name": "Rajasthan Institute of Technology",
    "type": "Engineering",
    "state": "Uttarakhand",
    "city": "Dehradun",
    "contactPerson": "Director / Principal (Rajasthan Institute of Technology)",
    "email": "contact@inst-21.edu.in",
    "phone": "+91 9800027140",
    "aicteApprovalNo": "AICTE/Northern/ENGI/2006/920",
    "approvalYear": 2020,
    "complianceStatus": "Compliant",
    "riskProfile": "Low",
    "totalFDRCount": 2,
    "activeFDRAmount": 3500000
  }
];

export const BENCHMARK_FDRS: FDRRecord[] = [
  {
    "id": "fdr-benchmark-1",
    "fdrNumber": "FDR-SBI-2024-81729",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "bankName": "State Bank of India",
    "branchName": "Koramangala Branch, Bengaluru",
    "ifscCode": "SBIN0007812",
    "amount": 3500000,
    "issueDate": "2024-03-15",
    "maturityDate": "2029-03-15",
    "tenureMonths": 60,
    "interestRate": 7.25,
    "beneficiary": "Aryabhata Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Mandatory Security Deposit under AICTE Approval Process Handbook (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-clean-81729",
    "documentFileName": "SBI_FDR_35L_Aryabhata_Clean.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-SBI-2024-81729",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Koramangala Branch, Bengaluru",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API Direct Connect",
      "status": "MATCH",
      "verifiedAt": "2024-03-16T10:30:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "issueDate",
        "maturityDate",
        "bankName",
        "beneficiary",
        "jointBeneficiary"
      ],
      "externalRef": "CBS-SBI-TXN-902819",
      "bankBranch": "Koramangala Branch, Bengaluru",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 98,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.98
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR clearly designates AICTE as mandatory joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets requirement: 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.98,
      "rationale": "Verification source (simulated) matches 100%. Full regulatory compliance satisfied.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "SBI API returned matching principal under lien to AICTE."
    },
    "createdAt": "2024-03-15T09:00:00Z",
    "updatedAt": "2024-03-16T11:00:00Z"
  },
  {
    "id": "fdr-benchmark-2",
    "fdrNumber": "FDR-PNB-2024-9981",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "bankName": "Punjab National Bank",
    "branchName": "Ashram Road Branch, Ahmedabad",
    "ifscCode": "PUNB0182900",
    "amount": 5000000,
    "issueDate": "2024-06-10",
    "maturityDate": "2029-06-10",
    "tenureMonths": 60,
    "interestRate": 7.1,
    "beneficiary": "Sardar Patel Management Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Management Expansion Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Review recommended",
    "verificationStatus": "MISMATCH",
    "riskScore": 78,
    "riskLevel": "Critical",
    "documentId": "doc-altered-9981",
    "documentFileName": "PNB_FDR_50L_Altered_Scan.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PNB-2024-9981",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ashram Road Branch, Ahmedabad",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-06-10",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-06-10",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS Direct API",
      "status": "MISMATCH",
      "verifiedAt": "2024-06-11T14:20:00Z",
      "discrepancies": [
        {
          "field": "amount",
          "submittedValue": 5000000,
          "authoritativeValue": 4500000,
          "severity": "CRITICAL",
          "explanation": "Verification source (simulated) shows principal amount of \u20b945,00,000, whereas submitted certificate claims \u20b950,00,000. Deficit: \u20b95,00,000."
        }
      ],
      "matchedFields": [
        "fdrNumber",
        "bankName",
        "branchName",
        "issueDate",
        "maturityDate"
      ],
      "externalRef": "CBS-PNB-MISMATCH-81920",
      "bankBranch": "Ashram Road Branch, Ahmedabad",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Review recommended",
      "fontConsistency": 74,
      "layoutIntegrity": 82,
      "alteredNumericsDetected": true,
      "metadataAnomalies": [
        "Font face mismatch detected on numeric glyph '5' in amount field"
      ],
      "sealSignatureCheck": "Needs Manual Inspection",
      "confidence": 0.91
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-AMOUNT-004",
        "ruleName": "Minimum Institutional Security Deposit Slab",
        "ruleVersion": "1.0",
        "category": "FINANCIAL_THRESHOLD",
        "status": "FAIL",
        "severity": "CRITICAL",
        "explanation": "Verification source (simulated) principal \u20b945 Lakhs leaves \u20b95 Lakh deficit."
      }
    ],
    "aiRecommendation": {
      "action": "Request Clarification",
      "confidence": 0.94,
      "rationale": "Definite cross-source discrepancy between submitted certificate (\u20b950L) and PNB Core Banking System (\u20b945L). Officer must seek bank confirmation letter or escalate.",
      "applicableRuleId": "RULE-FDR-AMOUNT-004",
      "evidenceText": "PNB CBS API account reflects \u20b945,00,000. OCR glyph anomaly on '50,00,000'."
    },
    "createdAt": "2024-06-10T08:15:00Z",
    "updatedAt": "2024-06-11T14:30:00Z"
  },
  {
    "id": "fdr-benchmark-3",
    "fdrNumber": "FDR-BOB-2019-44120",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "bankName": "Bank of Baroda",
    "branchName": "Hazratganj Branch, Lucknow",
    "ifscCode": "BARB0HAZRAT",
    "amount": 5000000,
    "issueDate": "2019-12-01",
    "maturityDate": "2026-11-25",
    "tenureMonths": 84,
    "interestRate": 6.85,
    "beneficiary": "Kalam Technical Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Security Deposit for B.Tech Expansion (Lien Marked)",
    "lifecycleStatus": "Renewal Required",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 52,
    "riskLevel": "High",
    "documentId": "doc-expiring-44120",
    "documentFileName": "BOB_FDR_50L_MaturityImminent.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BOB-2019-44120",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Hazratganj Branch, Lucknow",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2019-12-01",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-11-25",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2026-10-15T09:12:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-BOB-MAT-991204",
      "bankBranch": "Hazratganj Branch, Lucknow",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 96,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.96
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-EXP-003",
        "ruleName": "Maturity Proximity & Renewal Trigger",
        "ruleVersion": "2.0",
        "category": "LIFECYCLE_MATURITY",
        "status": "WARNING",
        "severity": "HIGH",
        "explanation": "Maturity date is within 18 days. Mandatory renewal workflow triggered."
      }
    ],
    "aiRecommendation": {
      "action": "Request Clarification",
      "confidence": 0.96,
      "rationale": "FDR approaches maturity on 25-Nov-2026 (< 20 days). Automatic renewal notice triggered.",
      "applicableRuleId": "RULE-FDR-EXP-003",
      "evidenceText": "Maturity countdown active: 18 days remaining. Replacement certificate required."
    },
    "createdAt": "2019-12-01T10:00:00Z",
    "updatedAt": "2026-11-01T08:00:00Z"
  },
  {
    "id": "fdr-benchmark-4",
    "fdrNumber": "FDR-HDFC-2024-55190",
    "institutionId": "inst-13",
    "institutionName": "Vidyasagar Technical Academy",
    "bankName": "HDFC Bank",
    "branchName": "Midnapore Main Branch",
    "ifscCode": "HDFC0001928",
    "amount": 2500000,
    "issueDate": "2024-05-18",
    "maturityDate": "2029-05-18",
    "tenureMonths": 60,
    "interestRate": 7.2,
    "beneficiary": "Vidyasagar Technical Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Diploma Polytechnic Security Deposit",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "High concern",
    "verificationStatus": "REQUIRES HUMAN REVIEW",
    "riskScore": 72,
    "riskLevel": "Critical",
    "documentId": "doc-suspicious-55190",
    "documentFileName": "HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDFC-2024-55190",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Midnapore Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-05-18",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-05-18",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Core Banking Service Node",
      "status": "REQUIRES HUMAN REVIEW",
      "verifiedAt": "2024-05-19T11:00:00Z",
      "discrepancies": [
        {
          "field": "serial_security_thread",
          "submittedValue": "Not verified",
          "authoritativeValue": "Branch confirmation required",
          "severity": "HIGH",
          "explanation": "Certificate serial number not recognized in issuing branch inventory. Branch letter verification required."
        }
      ],
      "matchedFields": [
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-HDFC-INSP-55190",
      "bankBranch": "Midnapore Main Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "High concern",
      "fontConsistency": 62,
      "layoutIntegrity": 68,
      "alteredNumericsDetected": true,
      "metadataAnomalies": [
        "Document analysis: review recommended (metadata inconsistency)",
        "Resolution mismatch: 150 DPI background canvas with 600 DPI pasted bank seal stamp"
      ],
      "sealSignatureCheck": "Anomalous",
      "confidence": 0.89
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BANK-005",
        "ruleName": "Scheduled Commercial Bank Requirement",
        "ruleVersion": "1.0",
        "category": "BANK_AUTHORIZATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "HDFC Bank is an RBI-approved Scheduled Commercial Bank."
      }
    ],
    "aiRecommendation": {
      "action": "Escalate",
      "confidence": 0.91,
      "rationale": "Document analysis: review recommended (metadata inconsistency)e serial.",
      "applicableRuleId": "RULE-FDR-BANK-005",
      "evidenceText": "Document analysis: review recommended (metadata inconsistency). Mismatched stamp DPI."
    },
    "createdAt": "2024-05-18T10:00:00Z",
    "updatedAt": "2024-05-19T12:00:00Z"
  },
  {
    "id": "fdr-benchmark-5",
    "fdrNumber": "FDR-CAN-2016-10291",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "bankName": "Canara Bank",
    "branchName": "Shivaji Nagar Branch, Pune",
    "ifscCode": "CNRB0001029",
    "amount": 10000000,
    "issueDate": "2016-08-10",
    "maturityDate": "2024-08-10",
    "tenureMonths": 96,
    "interestRate": 7.75,
    "beneficiary": "Shivaji Research Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "10-Year Permanent Approval Security Deposit (Lien Marked)",
    "lifecycleStatus": "Release Eligible",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-release-10291",
    "documentFileName": "Canara_FDR_100L_ReleaseEligible.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2016-10291",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Shivaji Nagar Branch, Pune",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2016-08-10",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2024-08-10",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-08-12T16:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "issueDate",
        "maturityDate"
      ],
      "externalRef": "CBS-CAN-REL-881920",
      "bankBranch": "Shivaji Nagar Branch, Pune",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 98,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.99
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-RELEASE-007",
        "ruleName": "Release Eligibility Prerequisite Check",
        "ruleVersion": "1.0",
        "category": "RELEASE_PREREQUISITE",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "Mandatory 8-year lock-in satisfied. Zero pending deficiencies."
      }
    ],
    "releaseEligibilityDate": "2024-08-11",
    "releaseReason": "Successful completion of 8-year mandatory security deposit tenure with continuous AICTE accreditation A++ grade.",
    "refundAmount": 10000000,
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.99,
      "rationale": "Institution meets 100% of AICTE release prerequisites. Complete tenure completed without violations.",
      "applicableRuleId": "RULE-FDR-RELEASE-007",
      "evidenceText": "Lien release prerequisites confirmed by Canara Bank and AICTE WRO."
    },
    "createdAt": "2016-08-10T11:00:00Z",
    "updatedAt": "2024-08-12T16:30:00Z"
  }
];

export const ALL_SEED_FDRS: FDRRecord[] = [
  {
    "id": "fdr-benchmark-1",
    "fdrNumber": "FDR-SBI-2024-81729",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "bankName": "State Bank of India",
    "branchName": "Koramangala Branch, Bengaluru",
    "ifscCode": "SBIN0007812",
    "amount": 3500000,
    "issueDate": "2024-03-15",
    "maturityDate": "2029-03-15",
    "tenureMonths": 60,
    "interestRate": 7.25,
    "beneficiary": "Aryabhata Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Mandatory Security Deposit under AICTE Approval Process Handbook (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-clean-81729",
    "documentFileName": "SBI_FDR_35L_Aryabhata_Clean.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-SBI-2024-81729",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Koramangala Branch, Bengaluru",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API Direct Connect",
      "status": "MATCH",
      "verifiedAt": "2024-03-16T10:30:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "issueDate",
        "maturityDate",
        "bankName",
        "beneficiary",
        "jointBeneficiary"
      ],
      "externalRef": "CBS-SBI-TXN-902819",
      "bankBranch": "Koramangala Branch, Bengaluru",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 98,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.98
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR clearly designates AICTE as mandatory joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets requirement: 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.98,
      "rationale": "Verification source (simulated) matches 100%. Full regulatory compliance satisfied.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "SBI API returned matching principal under lien to AICTE."
    },
    "createdAt": "2024-03-15T09:00:00Z",
    "updatedAt": "2024-03-16T11:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-benchmark-1-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-SBI-2024-81729",
        "normalized_value": "FDR-SBI-2024-81729",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Koramangala Branch, Bengaluru",
        "normalized_value": "Koramangala Branch, Bengaluru",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-03-15",
        "normalized_value": "2024-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-03-15",
        "normalized_value": "2029-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aryabhata Institute of Technology",
        "normalized_value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-1-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from SBI_FDR_35L_Aryabhata_Clean.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-benchmark-1-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "SBI_FDR_35L_Aryabhata_Clean.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-benchmark-2",
    "fdrNumber": "FDR-PNB-2024-9981",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "bankName": "Punjab National Bank",
    "branchName": "Ashram Road Branch, Ahmedabad",
    "ifscCode": "PUNB0182900",
    "amount": 5000000,
    "issueDate": "2024-06-10",
    "maturityDate": "2029-06-10",
    "tenureMonths": 60,
    "interestRate": 7.1,
    "beneficiary": "Sardar Patel Management Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Management Expansion Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Review recommended",
    "verificationStatus": "MISMATCH",
    "riskScore": 78,
    "riskLevel": "Critical",
    "documentId": "doc-altered-9981",
    "documentFileName": "PNB_FDR_50L_Altered_Scan.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PNB-2024-9981",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ashram Road Branch, Ahmedabad",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-06-10",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-06-10",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS Direct API",
      "status": "MISMATCH",
      "verifiedAt": "2024-06-11T14:20:00Z",
      "discrepancies": [
        {
          "field": "amount",
          "submittedValue": 5000000,
          "authoritativeValue": 4500000,
          "severity": "CRITICAL",
          "explanation": "Verification source (simulated) shows principal amount of \u20b945,00,000, whereas submitted certificate claims \u20b950,00,000. Deficit: \u20b95,00,000."
        }
      ],
      "matchedFields": [
        "fdrNumber",
        "bankName",
        "branchName",
        "issueDate",
        "maturityDate"
      ],
      "externalRef": "CBS-PNB-MISMATCH-81920",
      "bankBranch": "Ashram Road Branch, Ahmedabad",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Review recommended",
      "fontConsistency": 74,
      "layoutIntegrity": 82,
      "alteredNumericsDetected": true,
      "metadataAnomalies": [
        "Font face mismatch detected on numeric glyph '5' in amount field"
      ],
      "sealSignatureCheck": "Needs Manual Inspection",
      "confidence": 0.91
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-AMOUNT-004",
        "ruleName": "Minimum Institutional Security Deposit Slab",
        "ruleVersion": "1.0",
        "category": "FINANCIAL_THRESHOLD",
        "status": "FAIL",
        "severity": "CRITICAL",
        "explanation": "Verification source (simulated) principal \u20b945 Lakhs leaves \u20b95 Lakh deficit."
      }
    ],
    "aiRecommendation": {
      "action": "Request Clarification",
      "confidence": 0.94,
      "rationale": "Definite cross-source discrepancy between submitted certificate (\u20b950L) and PNB Core Banking System (\u20b945L). Officer must seek bank confirmation letter or escalate.",
      "applicableRuleId": "RULE-FDR-AMOUNT-004",
      "evidenceText": "PNB CBS API account reflects \u20b945,00,000. OCR glyph anomaly on '50,00,000'."
    },
    "createdAt": "2024-06-10T08:15:00Z",
    "updatedAt": "2024-06-11T14:30:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-benchmark-2-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PNB-2024-9981",
        "normalized_value": "FDR-PNB-2024-9981",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ashram Road Branch, Ahmedabad",
        "normalized_value": "Ashram Road Branch, Ahmedabad",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-06-10",
        "normalized_value": "2024-06-10",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-06-10",
        "normalized_value": "2029-06-10",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Sardar Patel Management Academy",
        "normalized_value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-2-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from PNB_FDR_50L_Altered_Scan.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-bench-2-1",
        "code": "AMOUNT_MISMATCH",
        "category": "mismatch",
        "severity": "high",
        "status": "open",
        "explanation": "Extracted certificate claim of \u20b950,00,000 conflicts with simulated bank CBS verification response of \u20b945,00,000 (Deficit: \u20b95,00,000).",
        "evidenceRefs": [
          {
            "source": "PNB_Deposit_Receipt_50L.pdf",
            "provenance": "extracted claim",
            "value": "\u20b950,00,000"
          },
          {
            "source": "PNB CBS Gateway (Simulated)",
            "provenance": "Verification source (simulated)",
            "value": "\u20b945,00,000"
          }
        ],
        "nextStep": "Request certified bank confirmation letter from issuing branch.",
        "ruleOrModelVersion": "RULE-FDR-AMOUNT-004 (v1.0.0)",
        "createdAt": "2024-06-11T14:30:00Z"
      }
    ]
  },
  {
    "id": "fdr-benchmark-3",
    "fdrNumber": "FDR-BOB-2019-44120",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "bankName": "Bank of Baroda",
    "branchName": "Hazratganj Branch, Lucknow",
    "ifscCode": "BARB0HAZRAT",
    "amount": 5000000,
    "issueDate": "2019-12-01",
    "maturityDate": "2026-11-25",
    "tenureMonths": 84,
    "interestRate": 6.85,
    "beneficiary": "Kalam Technical Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Security Deposit for B.Tech Expansion (Lien Marked)",
    "lifecycleStatus": "Renewal Required",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 52,
    "riskLevel": "High",
    "documentId": "doc-expiring-44120",
    "documentFileName": "BOB_FDR_50L_MaturityImminent.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BOB-2019-44120",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Hazratganj Branch, Lucknow",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2019-12-01",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-11-25",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2026-10-15T09:12:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-BOB-MAT-991204",
      "bankBranch": "Hazratganj Branch, Lucknow",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 96,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.96
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-EXP-003",
        "ruleName": "Maturity Proximity & Renewal Trigger",
        "ruleVersion": "2.0",
        "category": "LIFECYCLE_MATURITY",
        "status": "WARNING",
        "severity": "HIGH",
        "explanation": "Maturity date is within 18 days. Mandatory renewal workflow triggered."
      }
    ],
    "aiRecommendation": {
      "action": "Request Clarification",
      "confidence": 0.96,
      "rationale": "FDR approaches maturity on 25-Nov-2026 (< 20 days). Automatic renewal notice triggered.",
      "applicableRuleId": "RULE-FDR-EXP-003",
      "evidenceText": "Maturity countdown active: 18 days remaining. Replacement certificate required."
    },
    "createdAt": "2019-12-01T10:00:00Z",
    "updatedAt": "2026-11-01T08:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-benchmark-3-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BOB-2019-44120",
        "normalized_value": "FDR-BOB-2019-44120",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Hazratganj Branch, Lucknow",
        "normalized_value": "Hazratganj Branch, Lucknow",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2019-12-01",
        "normalized_value": "2019-12-01",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-11-25",
        "normalized_value": "2026-11-25",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kalam Technical Campus",
        "normalized_value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-3-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from BOB_FDR_50L_MaturityImminent.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-bench-3-1",
        "code": "MATURITY_APPROACHING_RENEWAL_REQUIRED",
        "category": "lifecycle",
        "severity": "medium",
        "status": "open",
        "explanation": "Maturity in 18 days: renewal required under regulatory tenure policy.",
        "evidenceRefs": [
          {
            "source": "BOB_FixedDeposit_2019.pdf",
            "provenance": "extracted claim",
            "value": "Maturity: 2026-11-25"
          }
        ],
        "nextStep": "Serve Chapter IV renewal notice to institution registrar.",
        "ruleOrModelVersion": "RULE-FDR-EXP-003 (v1.0.0)",
        "createdAt": "2026-11-01T08:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-benchmark-4",
    "fdrNumber": "FDR-HDFC-2024-55190",
    "institutionId": "inst-13",
    "institutionName": "Vidyasagar Technical Academy",
    "bankName": "HDFC Bank",
    "branchName": "Midnapore Main Branch",
    "ifscCode": "HDFC0001928",
    "amount": 2500000,
    "issueDate": "2024-05-18",
    "maturityDate": "2029-05-18",
    "tenureMonths": 60,
    "interestRate": 7.2,
    "beneficiary": "Vidyasagar Technical Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "Diploma Polytechnic Security Deposit",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "High concern",
    "verificationStatus": "REQUIRES HUMAN REVIEW",
    "riskScore": 72,
    "riskLevel": "Critical",
    "documentId": "doc-suspicious-55190",
    "documentFileName": "HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDFC-2024-55190",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Midnapore Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-05-18",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-05-18",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Core Banking Service Node",
      "status": "REQUIRES HUMAN REVIEW",
      "verifiedAt": "2024-05-19T11:00:00Z",
      "discrepancies": [
        {
          "field": "serial_security_thread",
          "submittedValue": "Not verified",
          "authoritativeValue": "Branch confirmation required",
          "severity": "HIGH",
          "explanation": "Certificate serial number not recognized in issuing branch inventory. Branch letter verification required."
        }
      ],
      "matchedFields": [
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-HDFC-INSP-55190",
      "bankBranch": "Midnapore Main Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "High concern",
      "fontConsistency": 62,
      "layoutIntegrity": 68,
      "alteredNumericsDetected": true,
      "metadataAnomalies": [
        "Document analysis: review recommended (metadata inconsistency)",
        "Resolution mismatch: 150 DPI background canvas with 600 DPI pasted bank seal stamp"
      ],
      "sealSignatureCheck": "Anomalous",
      "confidence": 0.89
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BANK-005",
        "ruleName": "Scheduled Commercial Bank Requirement",
        "ruleVersion": "1.0",
        "category": "BANK_AUTHORIZATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "HDFC Bank is an RBI-approved Scheduled Commercial Bank."
      }
    ],
    "aiRecommendation": {
      "action": "Escalate",
      "confidence": 0.91,
      "rationale": "Document analysis: review recommended (metadata inconsistency)e serial.",
      "applicableRuleId": "RULE-FDR-BANK-005",
      "evidenceText": "Document analysis: review recommended (metadata inconsistency). Mismatched stamp DPI."
    },
    "createdAt": "2024-05-18T10:00:00Z",
    "updatedAt": "2024-05-19T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-benchmark-4-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDFC-2024-55190",
        "normalized_value": "FDR-HDFC-2024-55190",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Midnapore Main Branch",
        "normalized_value": "Midnapore Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-05-18",
        "normalized_value": "2024-05-18",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-05-18",
        "normalized_value": "2029-05-18",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Vidyasagar Technical Academy",
        "normalized_value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-4-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Deposit_Vidyasagar_ScanArtifacts.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-bench-4-1",
        "code": "DOCUMENT_ANALYSIS_METADATA_INCONSISTENCY",
        "category": "risk",
        "severity": "high",
        "status": "open",
        "explanation": "Document analysis: review recommended (metadata inconsistency in PDF creation tags).",
        "evidenceRefs": [
          {
            "source": "HDFC_Deposit_Receipt_25L.pdf",
            "provenance": "official document",
            "value": "Document analysis: review recommended (metadata inconsistency)"
          }
        ],
        "nextStep": "Manual forensic inspection by Case Officer.",
        "ruleOrModelVersion": "FORENSIC-META-002 (v1.0.0)",
        "createdAt": "2024-05-19T12:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-benchmark-5",
    "fdrNumber": "FDR-CAN-2016-10291",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "bankName": "Canara Bank",
    "branchName": "Shivaji Nagar Branch, Pune",
    "ifscCode": "CNRB0001029",
    "amount": 10000000,
    "issueDate": "2016-08-10",
    "maturityDate": "2024-08-10",
    "tenureMonths": 96,
    "interestRate": 7.75,
    "beneficiary": "Shivaji Research Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "10-Year Permanent Approval Security Deposit (Lien Marked)",
    "lifecycleStatus": "Release Eligible",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-release-10291",
    "documentFileName": "Canara_FDR_100L_ReleaseEligible.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2016-10291",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Shivaji Nagar Branch, Pune",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2016-08-10",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2024-08-10",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-08-12T16:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "issueDate",
        "maturityDate"
      ],
      "externalRef": "CBS-CAN-REL-881920",
      "bankBranch": "Shivaji Nagar Branch, Pune",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 98,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.99
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-RELEASE-007",
        "ruleName": "Release Eligibility Prerequisite Check",
        "ruleVersion": "1.0",
        "category": "RELEASE_PREREQUISITE",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "Mandatory 8-year lock-in satisfied. Zero pending deficiencies."
      }
    ],
    "releaseEligibilityDate": "2024-08-11",
    "releaseReason": "Successful completion of 8-year mandatory security deposit tenure with continuous AICTE accreditation A++ grade.",
    "refundAmount": 10000000,
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.99,
      "rationale": "Institution meets 100% of AICTE release prerequisites. Complete tenure completed without violations.",
      "applicableRuleId": "RULE-FDR-RELEASE-007",
      "evidenceText": "Lien release prerequisites confirmed by Canara Bank and AICTE WRO."
    },
    "createdAt": "2016-08-10T11:00:00Z",
    "updatedAt": "2024-08-12T16:30:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-benchmark-5-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2016-10291",
        "normalized_value": "FDR-CAN-2016-10291",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Shivaji Nagar Branch, Pune",
        "normalized_value": "Shivaji Nagar Branch, Pune",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2016-08-10",
        "normalized_value": "2016-08-10",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2024-08-10",
        "normalized_value": "2024-08-10",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shivaji Research Institute",
        "normalized_value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-benchmark-5-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_FDR_100L_ReleaseEligible.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-bench-5-1",
        "code": "MISSING_JOINT_BENEFICIARY_LIEN",
        "category": "compliance",
        "severity": "medium",
        "status": "open",
        "explanation": "Mandatory second holder 'Regional Officer, AICTE' notation missing on deposit certificate.",
        "evidenceRefs": [
          {
            "source": "Canara_Deposit_Receipt.pdf",
            "provenance": "extracted claim",
            "value": "Joint Beneficiary: None"
          }
        ],
        "nextStep": "Request lien-marked endorsement certificate from institution.",
        "ruleOrModelVersion": "RULE-FDR-BENEFICIARY-001 (v1.0.0)",
        "createdAt": "2024-08-12T16:30:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-6",
    "fdrNumber": "FDR-ICI-2021-10222",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "bankName": "ICICI Bank",
    "branchName": "Bengaluru Main Commercial Branch",
    "ifscCode": "ICIC0001006",
    "amount": 1500000,
    "issueDate": "2021-07-15",
    "maturityDate": "2026-07-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Aryabhata Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Validation Pending",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-6",
    "documentFileName": "ICICI_Bank_FDR_15L_Bengaluru.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2021-10222",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100006",
      "bankBranch": "Bengaluru Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-07-15T09:00:00Z",
    "updatedAt": "2021-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-6-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2021-10222",
        "normalized_value": "FDR-ICI-2021-10222",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bengaluru Main Branch",
        "normalized_value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-07-15",
        "normalized_value": "2021-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-07-15",
        "normalized_value": "2026-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aryabhata Institute of Technology",
        "normalized_value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-6-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-6-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_15L_Bengaluru.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-7",
    "fdrNumber": "FDR-IND-2022-10259",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "bankName": "Indian Bank",
    "branchName": "Ahmedabad Main Commercial Branch",
    "ifscCode": "IDIB0001007",
    "amount": 2500000,
    "issueDate": "2022-08-15",
    "maturityDate": "2027-08-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Sardar Patel Management Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Maturity Approaching",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 38,
    "riskLevel": "Medium",
    "documentId": "doc-7",
    "documentFileName": "Indian_Bank_FDR_25L_Ahmedabad.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2022-10259",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100007",
      "bankBranch": "Ahmedabad Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-08-15T09:00:00Z",
    "updatedAt": "2022-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-7-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2022-10259",
        "normalized_value": "FDR-IND-2022-10259",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ahmedabad Main Branch",
        "normalized_value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-08-15",
        "normalized_value": "2022-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-08-15",
        "normalized_value": "2027-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Sardar Patel Management Academy",
        "normalized_value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-7-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-7-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_25L_Ahmedabad.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-8",
    "fdrNumber": "FDR-STA-2023-10296",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "bankName": "State Bank of India",
    "branchName": "Lucknow Main Commercial Branch",
    "ifscCode": "SBIN0001008",
    "amount": 3500000,
    "issueDate": "2023-01-15",
    "maturityDate": "2028-01-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Kalam Technical Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Renewal Submitted",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 22,
    "riskLevel": "Low",
    "documentId": "doc-8",
    "documentFileName": "State_Bank_of_India_FDR_35L_Lucknow.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2023-10296",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100008",
      "bankBranch": "Lucknow Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-01-15T09:00:00Z",
    "updatedAt": "2023-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-8-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2023-10296",
        "normalized_value": "FDR-STA-2023-10296",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Lucknow Main Branch",
        "normalized_value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-01-15",
        "normalized_value": "2023-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-01-15",
        "normalized_value": "2028-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kalam Technical Campus",
        "normalized_value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-8-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-8-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_35L_Lucknow.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-9",
    "fdrNumber": "FDR-PUN-2024-10333",
    "institutionId": "inst-4",
    "institutionName": "Maharshi Dayanand College",
    "bankName": "Punjab National Bank",
    "branchName": "Rohtak Main Commercial Branch",
    "ifscCode": "PUNB01009",
    "amount": 5000000,
    "issueDate": "2024-02-15",
    "maturityDate": "2029-02-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Maharshi Dayanand College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Replacement Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 28,
    "riskLevel": "Medium",
    "documentId": "doc-9",
    "documentFileName": "Punjab_National_Bank_FDR_50L_Rohtak.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2024-10333",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100009",
      "bankBranch": "Rohtak Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-02-15T09:00:00Z",
    "updatedAt": "2024-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-9-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2024-10333",
        "normalized_value": "FDR-PUN-2024-10333",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Rohtak Main Branch",
        "normalized_value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-02-15",
        "normalized_value": "2024-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-02-15",
        "normalized_value": "2029-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Maharshi Dayanand College",
        "normalized_value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-9-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-9-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_50L_Rohtak.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-10",
    "fdrNumber": "FDR-BAN-2020-10370",
    "institutionId": "inst-5",
    "institutionName": "Tagore Architecture Institute",
    "bankName": "Bank of Baroda",
    "branchName": "Kolkata Main Commercial Branch",
    "ifscCode": "BARB01010",
    "amount": 7500000,
    "issueDate": "2020-03-15",
    "maturityDate": "2025-03-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Tagore Architecture Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Refund Processing",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-10",
    "documentFileName": "Bank_of_Baroda_FDR_75L_Kolkata.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2020-10370",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100010",
      "bankBranch": "Kolkata Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-03-15T09:00:00Z",
    "updatedAt": "2020-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-10-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2020-10370",
        "normalized_value": "FDR-BAN-2020-10370",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Kolkata Main Branch",
        "normalized_value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-03-15",
        "normalized_value": "2020-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-03-15",
        "normalized_value": "2025-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Tagore Architecture Institute",
        "normalized_value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-10-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-10-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_75L_Kolkata.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-11",
    "fdrNumber": "FDR-CAN-2021-10407",
    "institutionId": "inst-6",
    "institutionName": "St. Xavier Polytechnic",
    "bankName": "Canara Bank",
    "branchName": "Ernakulam Main Commercial Branch",
    "ifscCode": "CNRB0001011",
    "amount": 10000000,
    "issueDate": "2021-04-15",
    "maturityDate": "2026-04-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "St. Xavier Polytechnic",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Released/Refunded",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-11",
    "documentFileName": "Canara_Bank_FDR_100L_Ernakulam.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2021-10407",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100011",
      "bankBranch": "Ernakulam Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-04-15T09:00:00Z",
    "updatedAt": "2021-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-11-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2021-10407",
        "normalized_value": "FDR-CAN-2021-10407",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ernakulam Main Branch",
        "normalized_value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-04-15",
        "normalized_value": "2021-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-04-15",
        "normalized_value": "2026-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "St. Xavier Polytechnic",
        "normalized_value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-11-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-11-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_100L_Ernakulam.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-12",
    "fdrNumber": "FDR-UNI-2022-10444",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "bankName": "Union Bank of India",
    "branchName": "Pune Main Commercial Branch",
    "ifscCode": "UBIN051012",
    "amount": 1500000,
    "issueDate": "2022-05-15",
    "maturityDate": "2027-05-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Shivaji Research Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Closed",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 5,
    "riskLevel": "Low",
    "documentId": "doc-12",
    "documentFileName": "Union_Bank_of_India_FDR_15L_Pune.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2022-10444",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Pune Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100012",
      "bankBranch": "Pune Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-05-15T09:00:00Z",
    "updatedAt": "2022-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-12-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2022-10444",
        "normalized_value": "FDR-UNI-2022-10444",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Pune Main Branch",
        "normalized_value": "Pune Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-05-15",
        "normalized_value": "2022-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-05-15",
        "normalized_value": "2027-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shivaji Research Institute",
        "normalized_value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-12-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-12-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_15L_Pune.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-13",
    "fdrNumber": "FDR-HDF-2023-10481",
    "institutionId": "inst-8",
    "institutionName": "Aurobindo Business School",
    "bankName": "HDFC Bank",
    "branchName": "Puducherry Main Commercial Branch",
    "ifscCode": "HDFC0001013",
    "amount": 2500000,
    "issueDate": "2023-06-15",
    "maturityDate": "2028-06-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Aurobindo Business School",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-13",
    "documentFileName": "HDFC_Bank_FDR_25L_Puducherry.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2023-10481",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aurobindo Business School",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100013",
      "bankBranch": "Puducherry Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-06-15T09:00:00Z",
    "updatedAt": "2023-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-13-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2023-10481",
        "normalized_value": "FDR-HDF-2023-10481",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Puducherry Main Branch",
        "normalized_value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-06-15",
        "normalized_value": "2023-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-06-15",
        "normalized_value": "2028-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aurobindo Business School",
        "normalized_value": "Aurobindo Business School",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-13-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-13-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_25L_Puducherry.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-14",
    "fdrNumber": "FDR-ICI-2024-10518",
    "institutionId": "inst-9",
    "institutionName": "Birsa Munda Technical College",
    "bankName": "ICICI Bank",
    "branchName": "Ranchi Main Commercial Branch",
    "ifscCode": "ICIC0001014",
    "amount": 3500000,
    "issueDate": "2024-07-15",
    "maturityDate": "2029-07-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Birsa Munda Technical College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-14",
    "documentFileName": "ICICI_Bank_FDR_35L_Ranchi.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2024-10518",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ranchi Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Birsa Munda Technical College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100014",
      "bankBranch": "Ranchi Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-07-15T09:00:00Z",
    "updatedAt": "2024-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-14-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2024-10518",
        "normalized_value": "FDR-ICI-2024-10518",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ranchi Main Branch",
        "normalized_value": "Ranchi Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-07-15",
        "normalized_value": "2024-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-07-15",
        "normalized_value": "2029-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Birsa Munda Technical College",
        "normalized_value": "Birsa Munda Technical College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-14-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-14-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_35L_Ranchi.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-15",
    "fdrNumber": "FDR-IND-2020-10555",
    "institutionId": "inst-10",
    "institutionName": "Netaji Subhash Pharmacy College",
    "bankName": "Indian Bank",
    "branchName": "Bhubaneswar Main Commercial Branch",
    "ifscCode": "IDIB0001015",
    "amount": 5000000,
    "issueDate": "2020-08-15",
    "maturityDate": "2025-08-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Netaji Subhash Pharmacy College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 18,
    "riskLevel": "Low",
    "documentId": "doc-15",
    "documentFileName": "Indian_Bank_FDR_50L_Bhubaneswar.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2020-10555",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bhubaneswar Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Netaji Subhash Pharmacy College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100015",
      "bankBranch": "Bhubaneswar Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-08-15T09:00:00Z",
    "updatedAt": "2020-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-15-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2020-10555",
        "normalized_value": "FDR-IND-2020-10555",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bhubaneswar Main Branch",
        "normalized_value": "Bhubaneswar Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-08-15",
        "normalized_value": "2020-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-08-15",
        "normalized_value": "2025-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Netaji Subhash Pharmacy College",
        "normalized_value": "Netaji Subhash Pharmacy College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-15-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-15-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_50L_Bhubaneswar.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-16",
    "fdrNumber": "FDR-STA-2021-10592",
    "institutionId": "inst-11",
    "institutionName": "Delhi Advanced Engineering College",
    "bankName": "State Bank of India",
    "branchName": "New Delhi Main Commercial Branch",
    "ifscCode": "SBIN0001016",
    "amount": 7500000,
    "issueDate": "2021-01-15",
    "maturityDate": "2026-01-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Delhi Advanced Engineering College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 32,
    "riskLevel": "Medium",
    "documentId": "doc-16",
    "documentFileName": "State_Bank_of_India_FDR_75L_New Delhi.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2021-10592",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "New Delhi Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Delhi Advanced Engineering College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100016",
      "bankBranch": "New Delhi Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-01-15T09:00:00Z",
    "updatedAt": "2021-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-16-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2021-10592",
        "normalized_value": "FDR-STA-2021-10592",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "New Delhi Main Branch",
        "normalized_value": "New Delhi Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-01-15",
        "normalized_value": "2021-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-01-15",
        "normalized_value": "2026-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Delhi Advanced Engineering College",
        "normalized_value": "Delhi Advanced Engineering College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-16-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-16-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_75L_New Delhi.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-17",
    "fdrNumber": "FDR-PUN-2022-10629",
    "institutionId": "inst-12",
    "institutionName": "Thiruvalluvar Institute",
    "bankName": "Punjab National Bank",
    "branchName": "Chennai Main Commercial Branch",
    "ifscCode": "PUNB01017",
    "amount": 10000000,
    "issueDate": "2022-02-15",
    "maturityDate": "2027-02-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Thiruvalluvar Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Compliance Checked",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 14,
    "riskLevel": "Low",
    "documentId": "doc-17",
    "documentFileName": "Punjab_National_Bank_FDR_100L_Chennai.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2022-10629",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Chennai Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Thiruvalluvar Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100017",
      "bankBranch": "Chennai Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-02-15T09:00:00Z",
    "updatedAt": "2022-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-17-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2022-10629",
        "normalized_value": "FDR-PUN-2022-10629",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Chennai Main Branch",
        "normalized_value": "Chennai Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-02-15",
        "normalized_value": "2022-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-02-15",
        "normalized_value": "2027-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Thiruvalluvar Institute",
        "normalized_value": "Thiruvalluvar Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-17-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-17-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_100L_Chennai.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-18",
    "fdrNumber": "FDR-BAN-2023-10666",
    "institutionId": "inst-13",
    "institutionName": "Vidyasagar Technical Academy",
    "bankName": "Bank of Baroda",
    "branchName": "Bhopal Main Commercial Branch",
    "ifscCode": "BARB01018",
    "amount": 1500000,
    "issueDate": "2023-03-15",
    "maturityDate": "2028-03-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Vidyasagar Technical Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Verified",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 10,
    "riskLevel": "Low",
    "documentId": "doc-18",
    "documentFileName": "Bank_of_Baroda_FDR_15L_Bhopal.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2023-10666",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bhopal Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100018",
      "bankBranch": "Bhopal Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-03-15T09:00:00Z",
    "updatedAt": "2023-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-18-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2023-10666",
        "normalized_value": "FDR-BAN-2023-10666",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bhopal Main Branch",
        "normalized_value": "Bhopal Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-03-15",
        "normalized_value": "2023-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-03-15",
        "normalized_value": "2028-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Vidyasagar Technical Academy",
        "normalized_value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-18-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-18-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_15L_Bhopal.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-19",
    "fdrNumber": "FDR-CAN-2024-10703",
    "institutionId": "inst-14",
    "institutionName": "Shastri Management Institute",
    "bankName": "Canara Bank",
    "branchName": "Warangal Main Commercial Branch",
    "ifscCode": "CNRB0001019",
    "amount": 2500000,
    "issueDate": "2024-04-15",
    "maturityDate": "2029-04-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Shastri Management Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Validation Pending",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-19",
    "documentFileName": "Canara_Bank_FDR_25L_Warangal.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2024-10703",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Warangal Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shastri Management Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100019",
      "bankBranch": "Warangal Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-04-15T09:00:00Z",
    "updatedAt": "2024-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-19-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2024-10703",
        "normalized_value": "FDR-CAN-2024-10703",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Warangal Main Branch",
        "normalized_value": "Warangal Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-04-15",
        "normalized_value": "2024-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-04-15",
        "normalized_value": "2029-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shastri Management Institute",
        "normalized_value": "Shastri Management Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-19-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-19-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_25L_Warangal.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-20",
    "fdrNumber": "FDR-UNI-2020-10740",
    "institutionId": "inst-15",
    "institutionName": "Kakatiya Pharmaceutical Institute",
    "bankName": "Union Bank of India",
    "branchName": "Ludhiana Main Commercial Branch",
    "ifscCode": "UBIN051020",
    "amount": 3500000,
    "issueDate": "2020-05-15",
    "maturityDate": "2025-05-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Kakatiya Pharmaceutical Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Maturity Approaching",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 38,
    "riskLevel": "Medium",
    "documentId": "doc-20",
    "documentFileName": "Union_Bank_of_India_FDR_35L_Ludhiana.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2020-10740",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ludhiana Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kakatiya Pharmaceutical Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100020",
      "bankBranch": "Ludhiana Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-05-15T09:00:00Z",
    "updatedAt": "2020-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-20-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2020-10740",
        "normalized_value": "FDR-UNI-2020-10740",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ludhiana Main Branch",
        "normalized_value": "Ludhiana Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-05-15",
        "normalized_value": "2020-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-05-15",
        "normalized_value": "2025-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kakatiya Pharmaceutical Institute",
        "normalized_value": "Kakatiya Pharmaceutical Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-20-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-20-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_35L_Ludhiana.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-21",
    "fdrNumber": "FDR-HDF-2021-10777",
    "institutionId": "inst-16",
    "institutionName": "Rani Laxmibai Engineering Campus",
    "bankName": "HDFC Bank",
    "branchName": "Panaji Main Commercial Branch",
    "ifscCode": "HDFC0001021",
    "amount": 5000000,
    "issueDate": "2021-06-15",
    "maturityDate": "2026-06-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Rani Laxmibai Engineering Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Renewal Submitted",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 22,
    "riskLevel": "Low",
    "documentId": "doc-21",
    "documentFileName": "HDFC_Bank_FDR_50L_Panaji.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2021-10777",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Panaji Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Rani Laxmibai Engineering Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100021",
      "bankBranch": "Panaji Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-06-15T09:00:00Z",
    "updatedAt": "2021-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-21-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2021-10777",
        "normalized_value": "FDR-HDF-2021-10777",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Panaji Main Branch",
        "normalized_value": "Panaji Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-06-15",
        "normalized_value": "2021-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-06-15",
        "normalized_value": "2026-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Rani Laxmibai Engineering Campus",
        "normalized_value": "Rani Laxmibai Engineering Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-21-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-21-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_50L_Panaji.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-22",
    "fdrNumber": "FDR-ICI-2022-10814",
    "institutionId": "inst-17",
    "institutionName": "Visvesvaraya School of Planning",
    "bankName": "ICICI Bank",
    "branchName": "Guwahati Main Commercial Branch",
    "ifscCode": "ICIC0001022",
    "amount": 7500000,
    "issueDate": "2022-07-15",
    "maturityDate": "2027-07-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Visvesvaraya School of Planning",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Replacement Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 28,
    "riskLevel": "Medium",
    "documentId": "doc-22",
    "documentFileName": "ICICI_Bank_FDR_75L_Guwahati.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2022-10814",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Guwahati Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Visvesvaraya School of Planning",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100022",
      "bankBranch": "Guwahati Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-07-15T09:00:00Z",
    "updatedAt": "2022-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-22-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2022-10814",
        "normalized_value": "FDR-ICI-2022-10814",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Guwahati Main Branch",
        "normalized_value": "Guwahati Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-07-15",
        "normalized_value": "2022-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-07-15",
        "normalized_value": "2027-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Visvesvaraya School of Planning",
        "normalized_value": "Visvesvaraya School of Planning",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-22-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-22-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_75L_Guwahati.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-23",
    "fdrNumber": "FDR-IND-2023-10851",
    "institutionId": "inst-18",
    "institutionName": "Punjab Applied Science College",
    "bankName": "Indian Bank",
    "branchName": "Jaipur Main Commercial Branch",
    "ifscCode": "IDIB0001023",
    "amount": 10000000,
    "issueDate": "2023-08-15",
    "maturityDate": "2028-08-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Punjab Applied Science College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Refund Processing",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-23",
    "documentFileName": "Indian_Bank_FDR_100L_Jaipur.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2023-10851",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Jaipur Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Punjab Applied Science College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100023",
      "bankBranch": "Jaipur Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-08-15T09:00:00Z",
    "updatedAt": "2023-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-23-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2023-10851",
        "normalized_value": "FDR-IND-2023-10851",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Jaipur Main Branch",
        "normalized_value": "Jaipur Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-08-15",
        "normalized_value": "2023-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-08-15",
        "normalized_value": "2028-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Punjab Applied Science College",
        "normalized_value": "Punjab Applied Science College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-23-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-23-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_100L_Jaipur.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-24",
    "fdrNumber": "FDR-STA-2024-10888",
    "institutionId": "inst-19",
    "institutionName": "Goa Marine & Technical College",
    "bankName": "State Bank of India",
    "branchName": "Patna Main Commercial Branch",
    "ifscCode": "SBIN0001024",
    "amount": 1500000,
    "issueDate": "2024-01-15",
    "maturityDate": "2029-01-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Goa Marine & Technical College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Released/Refunded",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-24",
    "documentFileName": "State_Bank_of_India_FDR_15L_Patna.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2024-10888",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Patna Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Goa Marine & Technical College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100024",
      "bankBranch": "Patna Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-01-15T09:00:00Z",
    "updatedAt": "2024-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-24-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2024-10888",
        "normalized_value": "FDR-STA-2024-10888",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Patna Main Branch",
        "normalized_value": "Patna Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-01-15",
        "normalized_value": "2024-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-01-15",
        "normalized_value": "2029-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Goa Marine & Technical College",
        "normalized_value": "Goa Marine & Technical College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-24-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-24-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_15L_Patna.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-25",
    "fdrNumber": "FDR-PUN-2020-10925",
    "institutionId": "inst-20",
    "institutionName": "Assam Valley Management Campus",
    "bankName": "Punjab National Bank",
    "branchName": "Vijayawada Main Commercial Branch",
    "ifscCode": "PUNB01025",
    "amount": 2500000,
    "issueDate": "2020-02-15",
    "maturityDate": "2025-02-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Assam Valley Management Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Closed",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 5,
    "riskLevel": "Low",
    "documentId": "doc-25",
    "documentFileName": "Punjab_National_Bank_FDR_25L_Vijayawada.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2020-10925",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Vijayawada Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Assam Valley Management Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100025",
      "bankBranch": "Vijayawada Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-02-15T09:00:00Z",
    "updatedAt": "2020-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-25-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2020-10925",
        "normalized_value": "FDR-PUN-2020-10925",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Vijayawada Main Branch",
        "normalized_value": "Vijayawada Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-02-15",
        "normalized_value": "2020-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-02-15",
        "normalized_value": "2025-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Assam Valley Management Campus",
        "normalized_value": "Assam Valley Management Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-25-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-25-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_25L_Vijayawada.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-26",
    "fdrNumber": "FDR-BAN-2021-10962",
    "institutionId": "inst-21",
    "institutionName": "Rajasthan Institute of Technology",
    "bankName": "Bank of Baroda",
    "branchName": "Dehradun Main Commercial Branch",
    "ifscCode": "BARB01026",
    "amount": 3500000,
    "issueDate": "2021-03-15",
    "maturityDate": "2026-03-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Rajasthan Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-26",
    "documentFileName": "Bank_of_Baroda_FDR_35L_Dehradun.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2021-10962",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Dehradun Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Rajasthan Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100026",
      "bankBranch": "Dehradun Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-03-15T09:00:00Z",
    "updatedAt": "2021-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-26-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2021-10962",
        "normalized_value": "FDR-BAN-2021-10962",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Dehradun Main Branch",
        "normalized_value": "Dehradun Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-03-15",
        "normalized_value": "2021-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-03-15",
        "normalized_value": "2026-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Rajasthan Institute of Technology",
        "normalized_value": "Rajasthan Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-26-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-26-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_35L_Dehradun.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-27",
    "fdrNumber": "FDR-CAN-2022-10999",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "bankName": "Canara Bank",
    "branchName": "Bengaluru Main Commercial Branch",
    "ifscCode": "CNRB0001027",
    "amount": 5000000,
    "issueDate": "2022-04-15",
    "maturityDate": "2027-04-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Aryabhata Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-27",
    "documentFileName": "Canara_Bank_FDR_50L_Bengaluru.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2022-10999",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100027",
      "bankBranch": "Bengaluru Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-04-15T09:00:00Z",
    "updatedAt": "2022-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-27-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2022-10999",
        "normalized_value": "FDR-CAN-2022-10999",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bengaluru Main Branch",
        "normalized_value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-04-15",
        "normalized_value": "2022-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-04-15",
        "normalized_value": "2027-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aryabhata Institute of Technology",
        "normalized_value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-27-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-27-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_50L_Bengaluru.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-28",
    "fdrNumber": "FDR-UNI-2023-11036",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "bankName": "Union Bank of India",
    "branchName": "Ahmedabad Main Commercial Branch",
    "ifscCode": "UBIN051028",
    "amount": 7500000,
    "issueDate": "2023-05-15",
    "maturityDate": "2028-05-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Sardar Patel Management Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 18,
    "riskLevel": "Low",
    "documentId": "doc-28",
    "documentFileName": "Union_Bank_of_India_FDR_75L_Ahmedabad.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2023-11036",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100028",
      "bankBranch": "Ahmedabad Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-05-15T09:00:00Z",
    "updatedAt": "2023-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-28-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2023-11036",
        "normalized_value": "FDR-UNI-2023-11036",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ahmedabad Main Branch",
        "normalized_value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-05-15",
        "normalized_value": "2023-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-05-15",
        "normalized_value": "2028-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Sardar Patel Management Academy",
        "normalized_value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-28-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-28-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_75L_Ahmedabad.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-29",
    "fdrNumber": "FDR-HDF-2024-11073",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "bankName": "HDFC Bank",
    "branchName": "Lucknow Main Commercial Branch",
    "ifscCode": "HDFC0001029",
    "amount": 10000000,
    "issueDate": "2024-06-15",
    "maturityDate": "2029-06-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Kalam Technical Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 32,
    "riskLevel": "Medium",
    "documentId": "doc-29",
    "documentFileName": "HDFC_Bank_FDR_100L_Lucknow.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2024-11073",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100029",
      "bankBranch": "Lucknow Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-06-15T09:00:00Z",
    "updatedAt": "2024-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-29-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2024-11073",
        "normalized_value": "FDR-HDF-2024-11073",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Lucknow Main Branch",
        "normalized_value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-06-15",
        "normalized_value": "2024-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-06-15",
        "normalized_value": "2029-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kalam Technical Campus",
        "normalized_value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-29-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-29-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_100L_Lucknow.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-30",
    "fdrNumber": "FDR-ICI-2020-11110",
    "institutionId": "inst-4",
    "institutionName": "Maharshi Dayanand College",
    "bankName": "ICICI Bank",
    "branchName": "Rohtak Main Commercial Branch",
    "ifscCode": "ICIC0001030",
    "amount": 1500000,
    "issueDate": "2020-07-15",
    "maturityDate": "2025-07-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Maharshi Dayanand College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Compliance Checked",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 14,
    "riskLevel": "Low",
    "documentId": "doc-30",
    "documentFileName": "ICICI_Bank_FDR_15L_Rohtak.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2020-11110",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100030",
      "bankBranch": "Rohtak Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-07-15T09:00:00Z",
    "updatedAt": "2020-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-30-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2020-11110",
        "normalized_value": "FDR-ICI-2020-11110",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Rohtak Main Branch",
        "normalized_value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-07-15",
        "normalized_value": "2020-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-07-15",
        "normalized_value": "2025-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Maharshi Dayanand College",
        "normalized_value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-30-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-30-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_15L_Rohtak.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-31",
    "fdrNumber": "FDR-IND-2021-11147",
    "institutionId": "inst-5",
    "institutionName": "Tagore Architecture Institute",
    "bankName": "Indian Bank",
    "branchName": "Kolkata Main Commercial Branch",
    "ifscCode": "IDIB0001031",
    "amount": 2500000,
    "issueDate": "2021-08-15",
    "maturityDate": "2026-08-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Tagore Architecture Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Verified",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 10,
    "riskLevel": "Low",
    "documentId": "doc-31",
    "documentFileName": "Indian_Bank_FDR_25L_Kolkata.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2021-11147",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100031",
      "bankBranch": "Kolkata Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-08-15T09:00:00Z",
    "updatedAt": "2021-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-31-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2021-11147",
        "normalized_value": "FDR-IND-2021-11147",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Kolkata Main Branch",
        "normalized_value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-08-15",
        "normalized_value": "2021-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-08-15",
        "normalized_value": "2026-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Tagore Architecture Institute",
        "normalized_value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-31-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-31-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_25L_Kolkata.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-32",
    "fdrNumber": "FDR-STA-2022-11184",
    "institutionId": "inst-6",
    "institutionName": "St. Xavier Polytechnic",
    "bankName": "State Bank of India",
    "branchName": "Ernakulam Main Commercial Branch",
    "ifscCode": "SBIN0001032",
    "amount": 3500000,
    "issueDate": "2022-01-15",
    "maturityDate": "2027-01-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "St. Xavier Polytechnic",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Validation Pending",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-32",
    "documentFileName": "State_Bank_of_India_FDR_35L_Ernakulam.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2022-11184",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100032",
      "bankBranch": "Ernakulam Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-01-15T09:00:00Z",
    "updatedAt": "2022-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-32-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2022-11184",
        "normalized_value": "FDR-STA-2022-11184",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ernakulam Main Branch",
        "normalized_value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-01-15",
        "normalized_value": "2022-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-01-15",
        "normalized_value": "2027-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "St. Xavier Polytechnic",
        "normalized_value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-32-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_35L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-32-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_35L_Ernakulam.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-33",
    "fdrNumber": "FDR-PUN-2023-11221",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "bankName": "Punjab National Bank",
    "branchName": "Pune Main Commercial Branch",
    "ifscCode": "PUNB01033",
    "amount": 5000000,
    "issueDate": "2023-02-15",
    "maturityDate": "2028-02-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Shivaji Research Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Maturity Approaching",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 38,
    "riskLevel": "Medium",
    "documentId": "doc-33",
    "documentFileName": "Punjab_National_Bank_FDR_50L_Pune.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2023-11221",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Pune Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100033",
      "bankBranch": "Pune Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-02-15T09:00:00Z",
    "updatedAt": "2023-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-33-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2023-11221",
        "normalized_value": "FDR-PUN-2023-11221",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Pune Main Branch",
        "normalized_value": "Pune Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-02-15",
        "normalized_value": "2023-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-02-15",
        "normalized_value": "2028-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shivaji Research Institute",
        "normalized_value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-33-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_50L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-33-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_50L_Pune.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-34",
    "fdrNumber": "FDR-BAN-2024-11258",
    "institutionId": "inst-8",
    "institutionName": "Aurobindo Business School",
    "bankName": "Bank of Baroda",
    "branchName": "Puducherry Main Commercial Branch",
    "ifscCode": "BARB01034",
    "amount": 7500000,
    "issueDate": "2024-03-15",
    "maturityDate": "2029-03-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Aurobindo Business School",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Renewal Submitted",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 22,
    "riskLevel": "Low",
    "documentId": "doc-34",
    "documentFileName": "Bank_of_Baroda_FDR_75L_Puducherry.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2024-11258",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aurobindo Business School",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100034",
      "bankBranch": "Puducherry Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-03-15T09:00:00Z",
    "updatedAt": "2024-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-34-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2024-11258",
        "normalized_value": "FDR-BAN-2024-11258",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Puducherry Main Branch",
        "normalized_value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-03-15",
        "normalized_value": "2024-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-03-15",
        "normalized_value": "2029-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aurobindo Business School",
        "normalized_value": "Aurobindo Business School",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-34-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_75L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-34-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_75L_Puducherry.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-35",
    "fdrNumber": "FDR-CAN-2020-11295",
    "institutionId": "inst-9",
    "institutionName": "Birsa Munda Technical College",
    "bankName": "Canara Bank",
    "branchName": "Ranchi Main Commercial Branch",
    "ifscCode": "CNRB0001035",
    "amount": 10000000,
    "issueDate": "2020-04-15",
    "maturityDate": "2025-04-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Birsa Munda Technical College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Replacement Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 28,
    "riskLevel": "Medium",
    "documentId": "doc-35",
    "documentFileName": "Canara_Bank_FDR_100L_Ranchi.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2020-11295",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ranchi Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Birsa Munda Technical College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100035",
      "bankBranch": "Ranchi Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-04-15T09:00:00Z",
    "updatedAt": "2020-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-35-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2020-11295",
        "normalized_value": "FDR-CAN-2020-11295",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ranchi Main Branch",
        "normalized_value": "Ranchi Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-04-15",
        "normalized_value": "2020-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-04-15",
        "normalized_value": "2025-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Birsa Munda Technical College",
        "normalized_value": "Birsa Munda Technical College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-35-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_100L_Ranchi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-35-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_100L_Ranchi.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-36",
    "fdrNumber": "FDR-UNI-2021-11332",
    "institutionId": "inst-10",
    "institutionName": "Netaji Subhash Pharmacy College",
    "bankName": "Union Bank of India",
    "branchName": "Bhubaneswar Main Commercial Branch",
    "ifscCode": "UBIN051036",
    "amount": 1500000,
    "issueDate": "2021-05-15",
    "maturityDate": "2026-05-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Netaji Subhash Pharmacy College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Refund Processing",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-36",
    "documentFileName": "Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2021-11332",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bhubaneswar Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Netaji Subhash Pharmacy College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100036",
      "bankBranch": "Bhubaneswar Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-05-15T09:00:00Z",
    "updatedAt": "2021-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-36-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2021-11332",
        "normalized_value": "FDR-UNI-2021-11332",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bhubaneswar Main Branch",
        "normalized_value": "Bhubaneswar Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-05-15",
        "normalized_value": "2021-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-05-15",
        "normalized_value": "2026-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Netaji Subhash Pharmacy College",
        "normalized_value": "Netaji Subhash Pharmacy College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-36-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-36-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_15L_Bhubaneswar.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-37",
    "fdrNumber": "FDR-HDF-2022-11369",
    "institutionId": "inst-11",
    "institutionName": "Delhi Advanced Engineering College",
    "bankName": "HDFC Bank",
    "branchName": "New Delhi Main Commercial Branch",
    "ifscCode": "HDFC0001037",
    "amount": 2500000,
    "issueDate": "2022-06-15",
    "maturityDate": "2027-06-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Delhi Advanced Engineering College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Released/Refunded",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-37",
    "documentFileName": "HDFC_Bank_FDR_25L_New Delhi.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2022-11369",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "New Delhi Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Delhi Advanced Engineering College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100037",
      "bankBranch": "New Delhi Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-06-15T09:00:00Z",
    "updatedAt": "2022-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-37-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2022-11369",
        "normalized_value": "FDR-HDF-2022-11369",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "New Delhi Main Branch",
        "normalized_value": "New Delhi Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-06-15",
        "normalized_value": "2022-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-06-15",
        "normalized_value": "2027-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Delhi Advanced Engineering College",
        "normalized_value": "Delhi Advanced Engineering College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-37-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_25L_New Delhi.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-37-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_25L_New Delhi.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-38",
    "fdrNumber": "FDR-ICI-2023-11406",
    "institutionId": "inst-12",
    "institutionName": "Thiruvalluvar Institute",
    "bankName": "ICICI Bank",
    "branchName": "Chennai Main Commercial Branch",
    "ifscCode": "ICIC0001038",
    "amount": 3500000,
    "issueDate": "2023-07-15",
    "maturityDate": "2028-07-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Thiruvalluvar Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Closed",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 5,
    "riskLevel": "Low",
    "documentId": "doc-38",
    "documentFileName": "ICICI_Bank_FDR_35L_Chennai.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2023-11406",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Chennai Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Thiruvalluvar Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100038",
      "bankBranch": "Chennai Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-07-15T09:00:00Z",
    "updatedAt": "2023-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-38-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2023-11406",
        "normalized_value": "FDR-ICI-2023-11406",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Chennai Main Branch",
        "normalized_value": "Chennai Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-07-15",
        "normalized_value": "2023-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-07-15",
        "normalized_value": "2028-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Thiruvalluvar Institute",
        "normalized_value": "Thiruvalluvar Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-38-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_35L_Chennai.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-38-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_35L_Chennai.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-39",
    "fdrNumber": "FDR-IND-2024-11443",
    "institutionId": "inst-13",
    "institutionName": "Vidyasagar Technical Academy",
    "bankName": "Indian Bank",
    "branchName": "Bhopal Main Commercial Branch",
    "ifscCode": "IDIB0001039",
    "amount": 5000000,
    "issueDate": "2024-08-15",
    "maturityDate": "2029-08-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Vidyasagar Technical Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-39",
    "documentFileName": "Indian_Bank_FDR_50L_Bhopal.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2024-11443",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bhopal Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100039",
      "bankBranch": "Bhopal Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-08-15T09:00:00Z",
    "updatedAt": "2024-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-39-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2024-11443",
        "normalized_value": "FDR-IND-2024-11443",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bhopal Main Branch",
        "normalized_value": "Bhopal Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-08-15",
        "normalized_value": "2024-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-08-15",
        "normalized_value": "2029-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Vidyasagar Technical Academy",
        "normalized_value": "Vidyasagar Technical Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-39-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_50L_Bhopal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-39-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_50L_Bhopal.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-40",
    "fdrNumber": "FDR-STA-2020-11480",
    "institutionId": "inst-14",
    "institutionName": "Shastri Management Institute",
    "bankName": "State Bank of India",
    "branchName": "Warangal Main Commercial Branch",
    "ifscCode": "SBIN0001040",
    "amount": 7500000,
    "issueDate": "2020-01-15",
    "maturityDate": "2025-01-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Shastri Management Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-40",
    "documentFileName": "State_Bank_of_India_FDR_75L_Warangal.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2020-11480",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Warangal Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shastri Management Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100040",
      "bankBranch": "Warangal Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-01-15T09:00:00Z",
    "updatedAt": "2020-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-40-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2020-11480",
        "normalized_value": "FDR-STA-2020-11480",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Warangal Main Branch",
        "normalized_value": "Warangal Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-01-15",
        "normalized_value": "2020-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-01-15",
        "normalized_value": "2025-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shastri Management Institute",
        "normalized_value": "Shastri Management Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-40-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_75L_Warangal.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-40-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_75L_Warangal.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-41",
    "fdrNumber": "FDR-PUN-2021-11517",
    "institutionId": "inst-15",
    "institutionName": "Kakatiya Pharmaceutical Institute",
    "bankName": "Punjab National Bank",
    "branchName": "Ludhiana Main Commercial Branch",
    "ifscCode": "PUNB01041",
    "amount": 10000000,
    "issueDate": "2021-02-15",
    "maturityDate": "2026-02-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Kakatiya Pharmaceutical Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 18,
    "riskLevel": "Low",
    "documentId": "doc-41",
    "documentFileName": "Punjab_National_Bank_FDR_100L_Ludhiana.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2021-11517",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ludhiana Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kakatiya Pharmaceutical Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100041",
      "bankBranch": "Ludhiana Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-02-15T09:00:00Z",
    "updatedAt": "2021-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-41-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2021-11517",
        "normalized_value": "FDR-PUN-2021-11517",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ludhiana Main Branch",
        "normalized_value": "Ludhiana Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-02-15",
        "normalized_value": "2021-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-02-15",
        "normalized_value": "2026-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kakatiya Pharmaceutical Institute",
        "normalized_value": "Kakatiya Pharmaceutical Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-41-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_100L_Ludhiana.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-41-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_100L_Ludhiana.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-42",
    "fdrNumber": "FDR-BAN-2022-11554",
    "institutionId": "inst-16",
    "institutionName": "Rani Laxmibai Engineering Campus",
    "bankName": "Bank of Baroda",
    "branchName": "Panaji Main Commercial Branch",
    "ifscCode": "BARB01042",
    "amount": 1500000,
    "issueDate": "2022-03-15",
    "maturityDate": "2027-03-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Rani Laxmibai Engineering Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 32,
    "riskLevel": "Medium",
    "documentId": "doc-42",
    "documentFileName": "Bank_of_Baroda_FDR_15L_Panaji.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2022-11554",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Panaji Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Rani Laxmibai Engineering Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100042",
      "bankBranch": "Panaji Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-03-15T09:00:00Z",
    "updatedAt": "2022-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-42-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2022-11554",
        "normalized_value": "FDR-BAN-2022-11554",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Panaji Main Branch",
        "normalized_value": "Panaji Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-03-15",
        "normalized_value": "2022-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-03-15",
        "normalized_value": "2027-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Rani Laxmibai Engineering Campus",
        "normalized_value": "Rani Laxmibai Engineering Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-42-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_15L_Panaji.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-42-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_15L_Panaji.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-43",
    "fdrNumber": "FDR-CAN-2023-11591",
    "institutionId": "inst-17",
    "institutionName": "Visvesvaraya School of Planning",
    "bankName": "Canara Bank",
    "branchName": "Guwahati Main Commercial Branch",
    "ifscCode": "CNRB0001043",
    "amount": 2500000,
    "issueDate": "2023-04-15",
    "maturityDate": "2028-04-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Visvesvaraya School of Planning",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Compliance Checked",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 14,
    "riskLevel": "Low",
    "documentId": "doc-43",
    "documentFileName": "Canara_Bank_FDR_25L_Guwahati.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2023-11591",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Guwahati Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Visvesvaraya School of Planning",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100043",
      "bankBranch": "Guwahati Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-04-15T09:00:00Z",
    "updatedAt": "2023-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-43-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2023-11591",
        "normalized_value": "FDR-CAN-2023-11591",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Guwahati Main Branch",
        "normalized_value": "Guwahati Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-04-15",
        "normalized_value": "2023-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-04-15",
        "normalized_value": "2028-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Visvesvaraya School of Planning",
        "normalized_value": "Visvesvaraya School of Planning",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-43-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_25L_Guwahati.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-43-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_25L_Guwahati.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-44",
    "fdrNumber": "FDR-UNI-2024-11628",
    "institutionId": "inst-18",
    "institutionName": "Punjab Applied Science College",
    "bankName": "Union Bank of India",
    "branchName": "Jaipur Main Commercial Branch",
    "ifscCode": "UBIN051044",
    "amount": 3500000,
    "issueDate": "2024-05-15",
    "maturityDate": "2029-05-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Punjab Applied Science College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Verified",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 10,
    "riskLevel": "Low",
    "documentId": "doc-44",
    "documentFileName": "Union_Bank_of_India_FDR_35L_Jaipur.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2024-11628",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Jaipur Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Punjab Applied Science College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100044",
      "bankBranch": "Jaipur Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-05-15T09:00:00Z",
    "updatedAt": "2024-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-44-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2024-11628",
        "normalized_value": "FDR-UNI-2024-11628",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Jaipur Main Branch",
        "normalized_value": "Jaipur Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-05-15",
        "normalized_value": "2024-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-05-15",
        "normalized_value": "2029-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Punjab Applied Science College",
        "normalized_value": "Punjab Applied Science College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-44-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_35L_Jaipur.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-44-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_35L_Jaipur.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-45",
    "fdrNumber": "FDR-HDF-2020-11665",
    "institutionId": "inst-19",
    "institutionName": "Goa Marine & Technical College",
    "bankName": "HDFC Bank",
    "branchName": "Patna Main Commercial Branch",
    "ifscCode": "HDFC0001045",
    "amount": 5000000,
    "issueDate": "2020-06-15",
    "maturityDate": "2025-06-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Goa Marine & Technical College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Validation Pending",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-45",
    "documentFileName": "HDFC_Bank_FDR_50L_Patna.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2020-11665",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Patna Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Goa Marine & Technical College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100045",
      "bankBranch": "Patna Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-06-15T09:00:00Z",
    "updatedAt": "2020-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-45-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2020-11665",
        "normalized_value": "FDR-HDF-2020-11665",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Patna Main Branch",
        "normalized_value": "Patna Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-06-15",
        "normalized_value": "2020-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-06-15",
        "normalized_value": "2025-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Goa Marine & Technical College",
        "normalized_value": "Goa Marine & Technical College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-45-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_50L_Patna.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-45-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_50L_Patna.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-46",
    "fdrNumber": "FDR-ICI-2021-11702",
    "institutionId": "inst-20",
    "institutionName": "Assam Valley Management Campus",
    "bankName": "ICICI Bank",
    "branchName": "Vijayawada Main Commercial Branch",
    "ifscCode": "ICIC0001046",
    "amount": 7500000,
    "issueDate": "2021-07-15",
    "maturityDate": "2026-07-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Assam Valley Management Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Maturity Approaching",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 38,
    "riskLevel": "Medium",
    "documentId": "doc-46",
    "documentFileName": "ICICI_Bank_FDR_75L_Vijayawada.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2021-11702",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Vijayawada Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Assam Valley Management Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100046",
      "bankBranch": "Vijayawada Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-07-15T09:00:00Z",
    "updatedAt": "2021-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-46-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2021-11702",
        "normalized_value": "FDR-ICI-2021-11702",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Vijayawada Main Branch",
        "normalized_value": "Vijayawada Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-07-15",
        "normalized_value": "2021-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-07-15",
        "normalized_value": "2026-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Assam Valley Management Campus",
        "normalized_value": "Assam Valley Management Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-46-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_75L_Vijayawada.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-46-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_75L_Vijayawada.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-47",
    "fdrNumber": "FDR-IND-2022-11739",
    "institutionId": "inst-21",
    "institutionName": "Rajasthan Institute of Technology",
    "bankName": "Indian Bank",
    "branchName": "Dehradun Main Commercial Branch",
    "ifscCode": "IDIB0001047",
    "amount": 10000000,
    "issueDate": "2022-08-15",
    "maturityDate": "2027-08-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "Rajasthan Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Renewal Submitted",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 22,
    "riskLevel": "Low",
    "documentId": "doc-47",
    "documentFileName": "Indian_Bank_FDR_100L_Dehradun.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2022-11739",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Dehradun Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Rajasthan Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100047",
      "bankBranch": "Dehradun Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-08-15T09:00:00Z",
    "updatedAt": "2022-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-47-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2022-11739",
        "normalized_value": "FDR-IND-2022-11739",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Dehradun Main Branch",
        "normalized_value": "Dehradun Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-08-15",
        "normalized_value": "2022-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-08-15",
        "normalized_value": "2027-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Rajasthan Institute of Technology",
        "normalized_value": "Rajasthan Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-47-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_100L_Dehradun.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-47-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_100L_Dehradun.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-08-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-48",
    "fdrNumber": "FDR-STA-2023-11776",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "bankName": "State Bank of India",
    "branchName": "Bengaluru Main Commercial Branch",
    "ifscCode": "SBIN0001048",
    "amount": 1500000,
    "issueDate": "2023-01-15",
    "maturityDate": "2028-01-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Aryabhata Institute of Technology",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Replacement Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 28,
    "riskLevel": "Medium",
    "documentId": "doc-48",
    "documentFileName": "State_Bank_of_India_FDR_15L_Bengaluru.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-STA-2023-11776",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "State Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-01-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-01-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "State Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-01-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100048",
      "bankBranch": "Bengaluru Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-01-15T09:00:00Z",
    "updatedAt": "2023-01-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-48-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-STA-2023-11776",
        "normalized_value": "FDR-STA-2023-11776",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "State Bank of India",
        "normalized_value": "State Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Bengaluru Main Branch",
        "normalized_value": "Bengaluru Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-01-15",
        "normalized_value": "2023-01-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-01-15",
        "normalized_value": "2028-01-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aryabhata Institute of Technology",
        "normalized_value": "Aryabhata Institute of Technology",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-48-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from State_Bank_of_India_FDR_15L_Bengaluru.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-48-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "State_Bank_of_India_FDR_15L_Bengaluru.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "State Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-01-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-49",
    "fdrNumber": "FDR-PUN-2024-11813",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "bankName": "Punjab National Bank",
    "branchName": "Ahmedabad Main Commercial Branch",
    "ifscCode": "PUNB01049",
    "amount": 2500000,
    "issueDate": "2024-02-15",
    "maturityDate": "2029-02-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Sardar Patel Management Academy",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Refund Processing",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-49",
    "documentFileName": "Punjab_National_Bank_FDR_25L_Ahmedabad.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-PUN-2024-11813",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Punjab National Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-02-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-02-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Punjab National Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-02-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100049",
      "bankBranch": "Ahmedabad Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-02-15T09:00:00Z",
    "updatedAt": "2024-02-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-49-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-PUN-2024-11813",
        "normalized_value": "FDR-PUN-2024-11813",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Punjab National Bank",
        "normalized_value": "Punjab National Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ahmedabad Main Branch",
        "normalized_value": "Ahmedabad Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-02-15",
        "normalized_value": "2024-02-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-02-15",
        "normalized_value": "2029-02-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Sardar Patel Management Academy",
        "normalized_value": "Sardar Patel Management Academy",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-49-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Punjab_National_Bank_FDR_25L_Ahmedabad.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-49-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Punjab_National_Bank_FDR_25L_Ahmedabad.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Punjab National Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-02-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-50",
    "fdrNumber": "FDR-BAN-2020-11850",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "bankName": "Bank of Baroda",
    "branchName": "Lucknow Main Commercial Branch",
    "ifscCode": "BARB01050",
    "amount": 3500000,
    "issueDate": "2020-03-15",
    "maturityDate": "2025-03-15",
    "tenureMonths": 60,
    "interestRate": 7.3,
    "beneficiary": "Kalam Technical Campus",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Released/Refunded",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 8,
    "riskLevel": "Low",
    "documentId": "doc-50",
    "documentFileName": "Bank_of_Baroda_FDR_35L_Lucknow.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-BAN-2020-11850",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 3500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Bank of Baroda",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-03-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-03-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Bank of Baroda CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-03-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100050",
      "bankBranch": "Lucknow Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-03-15T09:00:00Z",
    "updatedAt": "2020-03-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-50-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-BAN-2020-11850",
        "normalized_value": "FDR-BAN-2020-11850",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "3500000",
        "normalized_value": 3500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Bank of Baroda",
        "normalized_value": "Bank of Baroda",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Lucknow Main Branch",
        "normalized_value": "Lucknow Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-03-15",
        "normalized_value": "2020-03-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-03-15",
        "normalized_value": "2025-03-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Kalam Technical Campus",
        "normalized_value": "Kalam Technical Campus",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-50-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Bank_of_Baroda_FDR_35L_Lucknow.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-50-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Bank_of_Baroda_FDR_35L_Lucknow.pdf",
            "provenance": "extracted claim",
            "value": "\u20b93,500,000"
          },
          {
            "source": "Bank of Baroda Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b93,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-03-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-51",
    "fdrNumber": "FDR-CAN-2021-11887",
    "institutionId": "inst-4",
    "institutionName": "Maharshi Dayanand College",
    "bankName": "Canara Bank",
    "branchName": "Rohtak Main Commercial Branch",
    "ifscCode": "CNRB0001051",
    "amount": 5000000,
    "issueDate": "2021-04-15",
    "maturityDate": "2026-04-15",
    "tenureMonths": 60,
    "interestRate": 7.45,
    "beneficiary": "Maharshi Dayanand College",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Closed",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 5,
    "riskLevel": "Low",
    "documentId": "doc-51",
    "documentFileName": "Canara_Bank_FDR_50L_Rohtak.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-CAN-2021-11887",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 5000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Canara Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2021-04-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2026-04-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Canara Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2021-04-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100051",
      "bankBranch": "Rohtak Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-04-15T09:00:00Z",
    "updatedAt": "2021-04-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-51-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-CAN-2021-11887",
        "normalized_value": "FDR-CAN-2021-11887",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "5000000",
        "normalized_value": 5000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Canara Bank",
        "normalized_value": "Canara Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Rohtak Main Branch",
        "normalized_value": "Rohtak Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2021-04-15",
        "normalized_value": "2021-04-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2026-04-15",
        "normalized_value": "2026-04-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Maharshi Dayanand College",
        "normalized_value": "Maharshi Dayanand College",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-51-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Canara_Bank_FDR_50L_Rohtak.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-51-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Canara_Bank_FDR_50L_Rohtak.pdf",
            "provenance": "extracted claim",
            "value": "\u20b95,000,000"
          },
          {
            "source": "Canara Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b95,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2021-04-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-52",
    "fdrNumber": "FDR-UNI-2022-11924",
    "institutionId": "inst-5",
    "institutionName": "Tagore Architecture Institute",
    "bankName": "Union Bank of India",
    "branchName": "Kolkata Main Commercial Branch",
    "ifscCode": "UBIN051052",
    "amount": 7500000,
    "issueDate": "2022-05-15",
    "maturityDate": "2027-05-15",
    "tenureMonths": 60,
    "interestRate": 7.6,
    "beneficiary": "Tagore Architecture Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 12,
    "riskLevel": "Low",
    "documentId": "doc-52",
    "documentFileName": "Union_Bank_of_India_FDR_75L_Kolkata.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-UNI-2022-11924",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 7500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Union Bank of India",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2022-05-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2027-05-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Union Bank of India CBS API",
      "status": "MATCH",
      "verifiedAt": "2022-05-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100052",
      "bankBranch": "Kolkata Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 96,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-05-15T09:00:00Z",
    "updatedAt": "2022-05-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-52-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-UNI-2022-11924",
        "normalized_value": "FDR-UNI-2022-11924",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "7500000",
        "normalized_value": 7500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Union Bank of India",
        "normalized_value": "Union Bank of India",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Kolkata Main Branch",
        "normalized_value": "Kolkata Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2022-05-15",
        "normalized_value": "2022-05-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2027-05-15",
        "normalized_value": "2027-05-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Tagore Architecture Institute",
        "normalized_value": "Tagore Architecture Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-52-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Union_Bank_of_India_FDR_75L_Kolkata.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-52-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Union_Bank_of_India_FDR_75L_Kolkata.pdf",
            "provenance": "extracted claim",
            "value": "\u20b97,500,000"
          },
          {
            "source": "Union Bank of India Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b97,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2022-05-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-53",
    "fdrNumber": "FDR-HDF-2023-11961",
    "institutionId": "inst-6",
    "institutionName": "St. Xavier Polytechnic",
    "bankName": "HDFC Bank",
    "branchName": "Ernakulam Main Commercial Branch",
    "ifscCode": "HDFC0001053",
    "amount": 10000000,
    "issueDate": "2023-06-15",
    "maturityDate": "2028-06-15",
    "tenureMonths": 60,
    "interestRate": 7.75,
    "beneficiary": "St. Xavier Polytechnic",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 15,
    "riskLevel": "Low",
    "documentId": "doc-53",
    "documentFileName": "HDFC_Bank_FDR_100L_Ernakulam.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-HDF-2023-11961",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 10000000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "HDFC Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2023-06-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2028-06-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "HDFC Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2023-06-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100053",
      "bankBranch": "Ernakulam Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 97,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-06-15T09:00:00Z",
    "updatedAt": "2023-06-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-53-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-HDF-2023-11961",
        "normalized_value": "FDR-HDF-2023-11961",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "10000000",
        "normalized_value": 10000000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "HDFC Bank",
        "normalized_value": "HDFC Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Ernakulam Main Branch",
        "normalized_value": "Ernakulam Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2023-06-15",
        "normalized_value": "2023-06-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2028-06-15",
        "normalized_value": "2028-06-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "St. Xavier Polytechnic",
        "normalized_value": "St. Xavier Polytechnic",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-53-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from HDFC_Bank_FDR_100L_Ernakulam.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-53-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "HDFC_Bank_FDR_100L_Ernakulam.pdf",
            "provenance": "extracted claim",
            "value": "\u20b910,000,000"
          },
          {
            "source": "HDFC Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b910,000,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2023-06-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-54",
    "fdrNumber": "FDR-ICI-2024-11998",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "bankName": "ICICI Bank",
    "branchName": "Pune Main Commercial Branch",
    "ifscCode": "ICIC0001054",
    "amount": 1500000,
    "issueDate": "2024-07-15",
    "maturityDate": "2029-07-15",
    "tenureMonths": 60,
    "interestRate": 7.0,
    "beneficiary": "Shivaji Research Institute",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Active",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 18,
    "riskLevel": "Low",
    "documentId": "doc-54",
    "documentFileName": "ICICI_Bank_FDR_15L_Pune.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-ICI-2024-11998",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 1500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "ICICI Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Pune Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2024-07-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2029-07-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "ICICI Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2024-07-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100054",
      "bankBranch": "Pune Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 98,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-07-15T09:00:00Z",
    "updatedAt": "2024-07-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-54-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-ICI-2024-11998",
        "normalized_value": "FDR-ICI-2024-11998",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "1500000",
        "normalized_value": 1500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "ICICI Bank",
        "normalized_value": "ICICI Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Pune Main Branch",
        "normalized_value": "Pune Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2024-07-15",
        "normalized_value": "2024-07-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2029-07-15",
        "normalized_value": "2029-07-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Shivaji Research Institute",
        "normalized_value": "Shivaji Research Institute",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-54-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from ICICI_Bank_FDR_15L_Pune.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-54-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "ICICI_Bank_FDR_15L_Pune.pdf",
            "provenance": "extracted claim",
            "value": "\u20b91,500,000"
          },
          {
            "source": "ICICI Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b91,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2024-07-15T09:00:00Z"
      }
    ]
  },
  {
    "id": "fdr-extra-55",
    "fdrNumber": "FDR-IND-2020-12035",
    "institutionId": "inst-8",
    "institutionName": "Aurobindo Business School",
    "bankName": "Indian Bank",
    "branchName": "Puducherry Main Commercial Branch",
    "ifscCode": "IDIB0001055",
    "amount": 2500000,
    "issueDate": "2020-08-15",
    "maturityDate": "2025-08-15",
    "tenureMonths": 60,
    "interestRate": 7.15,
    "beneficiary": "Aurobindo Business School",
    "jointBeneficiary": "Regional Officer AICTE",
    "purpose": "AICTE Mandatory Security Deposit (Lien Marked)",
    "lifecycleStatus": "Under Review",
    "authenticityLevel": "Normal",
    "verificationStatus": "MATCH",
    "riskScore": 32,
    "riskLevel": "Medium",
    "documentId": "doc-55",
    "documentFileName": "Indian_Bank_FDR_25L_Puducherry.pdf",
    "extractedFields": [
      {
        "fieldName": "fdrNumber",
        "label": "FDR / Certificate No.",
        "value": "FDR-IND-2020-12035",
        "confidence": 0.98,
        "page": 1,
        "boundingBox": {
          "x": 55,
          "y": 18,
          "width": 35,
          "height": 4
        }
      },
      {
        "fieldName": "amount",
        "label": "Principal Deposit Amount",
        "value": 2500000,
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 50,
          "y": 32,
          "width": 28,
          "height": 5
        }
      },
      {
        "fieldName": "bankName",
        "label": "Issuing Bank Name",
        "value": "Indian Bank",
        "confidence": 0.99,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 12,
          "width": 40,
          "height": 6
        }
      },
      {
        "fieldName": "branchName",
        "label": "Branch Name",
        "value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page": 1,
        "boundingBox": {
          "x": 15,
          "y": 20,
          "width": 30,
          "height": 4
        }
      },
      {
        "fieldName": "issueDate",
        "label": "Issue / Deposit Date",
        "value": "2020-08-15",
        "confidence": 0.95,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 40,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "maturityDate",
        "label": "Maturity Date",
        "value": "2025-08-15",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 60,
          "y": 48,
          "width": 25,
          "height": 4
        }
      },
      {
        "fieldName": "beneficiary",
        "label": "Primary Account Holder",
        "value": "Aurobindo Business School",
        "confidence": 0.96,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 55,
          "width": 60,
          "height": 4
        }
      },
      {
        "fieldName": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page": 1,
        "boundingBox": {
          "x": 20,
          "y": 62,
          "width": 60,
          "height": 4
        }
      }
    ],
    "verification": {
      "source": "Indian Bank CBS API",
      "status": "MATCH",
      "verifiedAt": "2020-08-15T10:00:00Z",
      "discrepancies": [],
      "matchedFields": [
        "fdrNumber",
        "amount",
        "maturityDate"
      ],
      "externalRef": "CBS-REF-100055",
      "bankBranch": "Puducherry Main Commercial Branch",
      "isAuthorizedConnector": true
    },
    "tamperAnalysis": {
      "overallLevel": "Normal",
      "fontConsistency": 99,
      "layoutIntegrity": 97,
      "alteredNumericsDetected": false,
      "metadataAnomalies": [],
      "sealSignatureCheck": "Verified Authentic",
      "confidence": 0.97
    },
    "ruleEvaluations": [
      {
        "ruleId": "RULE-FDR-BENEFICIARY-001",
        "ruleName": "AICTE Mandatory Joint Beneficiary Requirement",
        "ruleVersion": "1.0",
        "category": "MANDATORY_FIELD",
        "status": "PASS",
        "severity": "CRITICAL",
        "explanation": "FDR designates AICTE as joint holder."
      },
      {
        "ruleId": "RULE-FDR-TENURE-002",
        "ruleName": "Minimum Mandatory Security Deposit Tenure",
        "ruleVersion": "1.0",
        "category": "TENURE_VALIDATION",
        "status": "PASS",
        "severity": "HIGH",
        "explanation": "Tenure meets 60 months."
      }
    ],
    "aiRecommendation": {
      "action": "Approve",
      "confidence": 0.97,
      "rationale": "Verification source (simulated) matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-08-15T09:00:00Z",
    "updatedAt": "2020-08-15T12:00:00Z",
    "record_version": 1,
    "claims": [
      {
        "id": "claim-fdr-extra-55-1",
        "field": "fdrNumber",
        "label": "FDR / Certificate No.",
        "extracted_value": "FDR-IND-2020-12035",
        "normalized_value": "FDR-IND-2020-12035",
        "confidence": 0.98,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-2",
        "field": "amount",
        "label": "Principal Deposit Amount",
        "extracted_value": "2500000",
        "normalized_value": 2500000,
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-3",
        "field": "bankName",
        "label": "Issuing Bank Name",
        "extracted_value": "Indian Bank",
        "normalized_value": "Indian Bank",
        "confidence": 0.99,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-4",
        "field": "branchName",
        "label": "Branch Name",
        "extracted_value": "Puducherry Main Branch",
        "normalized_value": "Puducherry Main Branch",
        "confidence": 0.94,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-5",
        "field": "issueDate",
        "label": "Issue / Deposit Date",
        "extracted_value": "2020-08-15",
        "normalized_value": "2020-08-15",
        "confidence": 0.95,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-6",
        "field": "maturityDate",
        "label": "Maturity Date",
        "extracted_value": "2025-08-15",
        "normalized_value": "2025-08-15",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-7",
        "field": "beneficiary",
        "label": "Primary Account Holder",
        "extracted_value": "Aurobindo Business School",
        "normalized_value": "Aurobindo Business School",
        "confidence": 0.96,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      },
      {
        "id": "claim-fdr-extra-55-8",
        "field": "jointBeneficiary",
        "label": "Mandatory Joint Holder",
        "extracted_value": "Regional Officer AICTE",
        "normalized_value": "Regional Officer AICTE",
        "confidence": 0.97,
        "page_number": 1,
        "source_text": "Extracted from Indian_Bank_FDR_25L_Puducherry.pdf p.1",
        "engine": "LayoutLMv3-Hybrid",
        "engine_version": "v2.1",
        "review_status": "UNREVIEWED"
      }
    ],
    "findings": [
      {
        "id": "find-fdr-extra-55-1",
        "code": "VERIFICATION_MATCH_COMPLIANT",
        "category": "compliance",
        "severity": "info",
        "status": "resolved",
        "explanation": "100% concordance between extracted certificate claims and simulated core banking verification response.",
        "evidenceRefs": [
          {
            "source": "Indian_Bank_FDR_25L_Puducherry.pdf",
            "provenance": "extracted claim",
            "value": "\u20b92,500,000"
          },
          {
            "source": "Indian Bank Gateway",
            "provenance": "Verification source (simulated)",
            "value": "\u20b92,500,000"
          }
        ],
        "nextStep": "Completed. Active in regulatory custody.",
        "ruleOrModelVersion": "RULE-FDR-BANK-005 (v1.0.0)",
        "createdAt": "2020-08-15T09:00:00Z"
      }
    ]
  }
];

export const SEED_CASES: CaseRecord[] = [
  {
    "id": "CASE-2024-CRITICAL-002",
    "caseNumber": "CASE-2024-CRITICAL-002",
    "fdrId": "fdr-benchmark-2",
    "fdrNumber": "FDR-PNB-2024-9981",
    "institutionId": "inst-2",
    "institutionName": "Sardar Patel Management Academy",
    "amount": 5000000,
    "priority": "Critical",
    "status": "Open",
    "slaDeadline": "2026-11-07T14:30:00Z",
    "isSlaBreached": false,
    "assignedReviewerId": "rev-1",
    "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)",
    "createdAt": "2024-06-11T14:30:00Z",
    "updatedAt": "2024-06-11T14:30:00Z",
    "record_version": 1
  },
  {
    "id": "CASE-2024-CRITICAL-004",
    "caseNumber": "CASE-2024-CRITICAL-004",
    "fdrId": "fdr-benchmark-4",
    "fdrNumber": "FDR-HDFC-2024-55190",
    "institutionId": "inst-13",
    "institutionName": "Vidyasagar Technical Academy",
    "amount": 2500000,
    "priority": "Critical",
    "status": "Open",
    "slaDeadline": "2026-11-07T18:00:00Z",
    "isSlaBreached": false,
    "assignedReviewerId": "rev-2",
    "assignedReviewerName": "Priya Nair (Forensic Analyst)",
    "createdAt": "2024-05-19T12:00:00Z",
    "updatedAt": "2024-05-19T12:00:00Z",
    "record_version": 1
  },
  {
    "id": "CASE-2026-HIGH-003",
    "caseNumber": "CASE-2026-HIGH-003",
    "fdrId": "fdr-benchmark-3",
    "fdrNumber": "FDR-BOB-2019-44120",
    "institutionId": "inst-3",
    "institutionName": "Kalam Technical Campus",
    "amount": 5000000,
    "priority": "High",
    "status": "In Review",
    "slaDeadline": "2026-11-08T10:00:00Z",
    "isSlaBreached": false,
    "assignedReviewerId": "rev-1",
    "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)",
    "createdAt": "2026-11-01T08:00:00Z",
    "updatedAt": "2026-11-02T10:00:00Z",
    "record_version": 1
  },
  {
    "id": "CASE-2024-MEDIUM-005",
    "caseNumber": "CASE-2024-MEDIUM-005",
    "fdrId": "fdr-benchmark-5",
    "fdrNumber": "FDR-CAN-2016-10291",
    "institutionId": "inst-7",
    "institutionName": "Shivaji Research Institute",
    "amount": 10000000,
    "priority": "Medium",
    "status": "Open",
    "slaDeadline": "2026-11-09T16:30:00Z",
    "isSlaBreached": false,
    "assignedReviewerId": "rev-3",
    "assignedReviewerName": "Anand Joshi (Officer)",
    "createdAt": "2024-08-12T16:30:00Z",
    "updatedAt": "2024-08-12T16:30:00Z",
    "record_version": 1
  },
  {
    "id": "CASE-2024-LOW-001",
    "caseNumber": "CASE-2024-LOW-001",
    "fdrId": "fdr-benchmark-1",
    "fdrNumber": "FDR-SBI-2024-81729",
    "institutionId": "inst-1",
    "institutionName": "Aryabhata Institute of Technology",
    "amount": 3500000,
    "priority": "Low",
    "status": "Resolved",
    "slaDeadline": "2024-03-20T18:00:00Z",
    "isSlaBreached": false,
    "assignedReviewerId": "rev-1",
    "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)",
    "createdAt": "2024-03-15T09:30:00Z",
    "updatedAt": "2024-03-16T11:00:00Z",
    "record_version": 1
  }
];
