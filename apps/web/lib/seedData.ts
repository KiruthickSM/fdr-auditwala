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
      "rationale": "Authoritative bank records match 100%. Full regulatory compliance satisfied.",
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
      "source": "Punjab National Bank CBS Direct API (Mock)",
      "status": "MISMATCH",
      "verifiedAt": "2024-06-11T14:20:00Z",
      "discrepancies": [
        {
          "field": "amount",
          "submittedValue": 5000000,
          "authoritativeValue": 4500000,
          "severity": "CRITICAL",
          "explanation": "Bank CBS record shows principal amount of \u20b945,00,000, whereas submitted certificate claims \u20b950,00,000. Deficit: \u20b95,00,000."
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
        "explanation": "Verified authoritative principal \u20b945 Lakhs leaves \u20b95 Lakh deficit."
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
        "PDF modified with Adobe Photoshop 24.1 (Windows)",
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
      "rationale": "High-concern tampering signals detected: Photoshop modification tag and unverified branch certificate serial.",
      "applicableRuleId": "RULE-FDR-BANK-005",
      "evidenceText": "Metadata contains software signature 'Photoshop 24.1'; stamp DPI is 4x background scan DPI."
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
      "rationale": "Authoritative bank records match 100%. Full regulatory compliance satisfied.",
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
      "source": "Punjab National Bank CBS Direct API (Mock)",
      "status": "MISMATCH",
      "verifiedAt": "2024-06-11T14:20:00Z",
      "discrepancies": [
        {
          "field": "amount",
          "submittedValue": 5000000,
          "authoritativeValue": 4500000,
          "severity": "CRITICAL",
          "explanation": "Bank CBS record shows principal amount of \u20b945,00,000, whereas submitted certificate claims \u20b950,00,000. Deficit: \u20b95,00,000."
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
        "explanation": "Verified authoritative principal \u20b945 Lakhs leaves \u20b95 Lakh deficit."
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
        "PDF modified with Adobe Photoshop 24.1 (Windows)",
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
      "rationale": "High-concern tampering signals detected: Photoshop modification tag and unverified branch certificate serial.",
      "applicableRuleId": "RULE-FDR-BANK-005",
      "evidenceText": "Metadata contains software signature 'Photoshop 24.1'; stamp DPI is 4x background scan DPI."
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-07-15T09:00:00Z",
    "updatedAt": "2021-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-08-15T09:00:00Z",
    "updatedAt": "2022-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-01-15T09:00:00Z",
    "updatedAt": "2023-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-02-15T09:00:00Z",
    "updatedAt": "2024-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-03-15T09:00:00Z",
    "updatedAt": "2020-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-04-15T09:00:00Z",
    "updatedAt": "2021-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-05-15T09:00:00Z",
    "updatedAt": "2022-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-06-15T09:00:00Z",
    "updatedAt": "2023-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-07-15T09:00:00Z",
    "updatedAt": "2024-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-08-15T09:00:00Z",
    "updatedAt": "2020-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-01-15T09:00:00Z",
    "updatedAt": "2021-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-02-15T09:00:00Z",
    "updatedAt": "2022-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-03-15T09:00:00Z",
    "updatedAt": "2023-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-04-15T09:00:00Z",
    "updatedAt": "2024-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-05-15T09:00:00Z",
    "updatedAt": "2020-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-06-15T09:00:00Z",
    "updatedAt": "2021-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-07-15T09:00:00Z",
    "updatedAt": "2022-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-08-15T09:00:00Z",
    "updatedAt": "2023-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-01-15T09:00:00Z",
    "updatedAt": "2024-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-02-15T09:00:00Z",
    "updatedAt": "2020-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-03-15T09:00:00Z",
    "updatedAt": "2021-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-04-15T09:00:00Z",
    "updatedAt": "2022-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-05-15T09:00:00Z",
    "updatedAt": "2023-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-06-15T09:00:00Z",
    "updatedAt": "2024-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-07-15T09:00:00Z",
    "updatedAt": "2020-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-08-15T09:00:00Z",
    "updatedAt": "2021-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-01-15T09:00:00Z",
    "updatedAt": "2022-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-02-15T09:00:00Z",
    "updatedAt": "2023-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-03-15T09:00:00Z",
    "updatedAt": "2024-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-04-15T09:00:00Z",
    "updatedAt": "2020-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-05-15T09:00:00Z",
    "updatedAt": "2021-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-06-15T09:00:00Z",
    "updatedAt": "2022-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-07-15T09:00:00Z",
    "updatedAt": "2023-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-08-15T09:00:00Z",
    "updatedAt": "2024-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-01-15T09:00:00Z",
    "updatedAt": "2020-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-02-15T09:00:00Z",
    "updatedAt": "2021-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-03-15T09:00:00Z",
    "updatedAt": "2022-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-04-15T09:00:00Z",
    "updatedAt": "2023-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-05-15T09:00:00Z",
    "updatedAt": "2024-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-06-15T09:00:00Z",
    "updatedAt": "2020-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-07-15T09:00:00Z",
    "updatedAt": "2021-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-08-15T09:00:00Z",
    "updatedAt": "2022-08-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-01-15T09:00:00Z",
    "updatedAt": "2023-01-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-02-15T09:00:00Z",
    "updatedAt": "2024-02-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-03-15T09:00:00Z",
    "updatedAt": "2020-03-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2021-04-15T09:00:00Z",
    "updatedAt": "2021-04-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2022-05-15T09:00:00Z",
    "updatedAt": "2022-05-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2023-06-15T09:00:00Z",
    "updatedAt": "2023-06-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2024-07-15T09:00:00Z",
    "updatedAt": "2024-07-15T12:00:00Z"
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
      "rationale": "Authoritative bank record matches submitted certificate details perfectly.",
      "applicableRuleId": "RULE-FDR-BENEFICIARY-001",
      "evidenceText": "Core banking verification confirmed."
    },
    "createdAt": "2020-08-15T09:00:00Z",
    "updatedAt": "2020-08-15T12:00:00Z"
  }
];

export const SEED_CASES: CaseRecord[] = [
  {
    "id": "case-bench-2",
    "caseNumber": "CASE-2024-CRIT-002",
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
    "updatedAt": "2024-06-11T14:30:00Z"
  },
  {
    "id": "case-bench-4",
    "caseNumber": "CASE-2024-CRIT-004",
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
    "updatedAt": "2024-05-19T12:00:00Z"
  },
  {
    "id": "case-bench-3",
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
    "updatedAt": "2026-11-02T10:00:00Z"
  },
  {
    "id": "case-bench-5",
    "caseNumber": "CASE-2024-MED-005",
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
    "updatedAt": "2024-08-12T16:30:00Z"
  },
  {
    "id": "case-bench-1",
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
    "updatedAt": "2024-03-16T11:00:00Z"
  }
];
