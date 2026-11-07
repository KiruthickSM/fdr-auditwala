from fastapi import FastAPI, HTTPException, Query, UploadFile, File, Form, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
import hashlib
import json

app = FastAPI(
    title="FDR AuditWala (FDRGuard) API",
    description="AICTE Security Deposit & FDR Lifecycle Management & Decision-Support Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory stores
INSTITUTIONS = [
    {
        "id": "inst-1",
        "code": "AICTE-1-4920191",
        "name": "Aryabhata Institute of Technology & Engineering",
        "type": "Engineering",
        "state": "Karnataka",
        "city": "Bengaluru",
        "contactPerson": "Dr. K. S. Venkatesh (Principal)",
        "email": "principal@aryabhata-tech.edu.in",
        "phone": "+91 80 2847 9100",
        "aicteApprovalNo": "AICTE/SRO/ENGG/2004/781",
        "approvalYear": 2004,
        "complianceStatus": "Compliant",
        "riskProfile": "Low",
        "totalFDRCount": 4,
        "activeFDRAmount": 12000000
    },
    {
        "id": "inst-2",
        "code": "AICTE-1-8930211",
        "name": "Sardar Vallabhbhai National Management Academy",
        "type": "Management",
        "state": "Gujarat",
        "city": "Ahmedabad",
        "contactPerson": "Prof. Ananya Desai (Director)",
        "email": "director@sv-mgmt.ac.in",
        "phone": "+91 79 2630 1199",
        "aicteApprovalNo": "AICTE/WRO/MGMT/2010/342",
        "approvalYear": 2010,
        "complianceStatus": "Action Required",
        "riskProfile": "High",
        "totalFDRCount": 3,
        "activeFDRAmount": 8500000
    }
]

FDRS = [
    {
        "id": "fdr-benchmark-1",
        "fdrNumber": "FDR-SBI-2024-81729",
        "institutionId": "inst-1",
        "institutionName": "Aryabhata Institute of Technology & Engineering",
        "bankName": "State Bank of India",
        "branchName": "Koramangala Branch, Bengaluru",
        "ifscCode": "SBIN0007812",
        "amount": 3500000,
        "issueDate": "2024-03-15",
        "maturityDate": "2029-03-15",
        "tenureMonths": 60,
        "interestRate": 7.25,
        "beneficiary": "Aryabhata Institute of Technology & Engineering",
        "jointBeneficiary": "Regional Officer, South Western Regional Office, AICTE",
        "purpose": "Mandatory Security Deposit under AICTE Approval Process Handbook (Lien Marked)",
        "lifecycleStatus": "Active",
        "authenticityLevel": "Normal",
        "verificationStatus": "MATCH",
        "riskScore": 8,
        "riskLevel": "Low"
    },
    {
        "id": "fdr-benchmark-2",
        "fdrNumber": "FDR-PNB-2024-9981",
        "institutionId": "inst-2",
        "institutionName": "Sardar Vallabhbhai National Management Academy",
        "bankName": "Punjab National Bank",
        "branchName": "Ashram Road Branch, Ahmedabad",
        "ifscCode": "PUNB0182900",
        "amount": 5000000,
        "issueDate": "2024-06-10",
        "maturityDate": "2029-06-10",
        "tenureMonths": 60,
        "interestRate": 7.10,
        "beneficiary": "Sardar Vallabhbhai National Management Academy",
        "jointBeneficiary": "Regional Officer AICTE",
        "purpose": "Management Program Expansion Security Deposit (Lien Marked)",
        "lifecycleStatus": "Under Review",
        "authenticityLevel": "Review recommended",
        "verificationStatus": "MISMATCH",
        "riskScore": 78,
        "riskLevel": "Critical"
    }
]

CASES = [
    {
        "id": "case-bench-2",
        "caseNumber": "CASE-2024-CRIT-002",
        "fdrId": "fdr-benchmark-2",
        "fdrNumber": "FDR-PNB-2024-9981",
        "institutionId": "inst-2",
        "institutionName": "Sardar Vallabhbhai National Management Academy",
        "amount": 5000000,
        "priority": "Critical",
        "status": "Open",
        "slaDeadline": "2026-11-07T14:30:00Z",
        "isSlaBreached": False,
        "assignedReviewerId": "rev-1",
        "assignedReviewerName": "Rajesh Sharma (Senior Reviewer)"
    }
]

AUDIT_EVENTS = []

# Schemas
class LoginRequest(BaseModel):
    email: str
    role: str = "REVIEWER"

class DecisionRequest(BaseModel):
    action: str
    overrideAI: bool = False
    justification: str

class RAGQuery(BaseModel):
    query: str

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0",
        "profile": "lite",
        "services": {
            "rules_engine": "online (v1.0.0)",
            "bank_connector": "online (Mock CBS)",
            "audit_ledger": "cryptographically verified"
        }
    }

@app.post("/auth/login")
def login(req: LoginRequest):
    return {
        "token": "jwt-synthetic-demo-token-fdrguard",
        "user": {
            "id": f"usr-{req.role.lower()}-1",
            "name": "Rajesh Sharma" if req.role == "REVIEWER" else "Dr. K. S. Venkatesh",
            "email": req.email,
            "role": req.role
        }
    }

@app.get("/institutions")
def get_institutions():
    return INSTITUTIONS

@app.get("/institutions/{inst_id}")
def get_institution(inst_id: str):
    for i in INSTITUTIONS:
        if i["id"] == inst_id:
            return i
    raise HTTPException(status_code=404, detail="Institution not found")

@app.get("/fdrs")
def get_fdrs():
    return FDRS

@app.get("/fdrs/{fdr_id}")
def get_fdr(fdr_id: str):
    for f in FDRS:
        if f["id"] == fdr_id:
            return f
    raise HTTPException(status_code=404, detail="FDR record not found")

@app.post("/fdrs/{fdr_id}/verify")
def verify_fdr(fdr_id: str):
    fdr = get_fdr(fdr_id)
    if fdr["fdrNumber"] == "FDR-PNB-2024-9981":
        return {
            "status": "MISMATCH",
            "source": "Punjab National Bank CBS Direct API",
            "discrepancies": [{
                "field": "amount",
                "submittedValue": 5000000,
                "authoritativeValue": 4500000,
                "severity": "CRITICAL",
                "explanation": "Bank CBS record reflects principal ₹45 Lakhs. Submitted claim is ₹50 Lakhs."
            }],
            "externalRef": "CBS-PNB-MISMATCH-81920"
        }
    return {
        "status": "MATCH",
        "source": f"{fdr['bankName']} CBS Direct API",
        "discrepancies": [],
        "externalRef": f"CBS-AUTH-{fdr_id}"
    }

@app.post("/fdrs/{fdr_id}/assess-risk")
def assess_risk(fdr_id: str):
    fdr = get_fdr(fdr_id)
    score = fdr.get("riskScore", 10)
    level = "Critical" if score >= 65 else "High" if score >= 45 else "Low"
    return {
        "fdrId": fdr_id,
        "score": score,
        "level": level,
        "summary": f"Calculated 0-100 explainable score: {score}"
    }

@app.get("/cases")
def get_cases():
    return CASES

@app.post("/cases/{case_id}/decision")
def record_decision(case_id: str, req: DecisionRequest):
    return {
        "status": "success",
        "caseId": case_id,
        "decision": req.action,
        "overrideAI": req.overrideAI,
        "recordedAt": datetime.utcnow().isoformat()
    }

@app.get("/evidence-graph/{fdr_id}")
def get_evidence_graph(fdr_id: str):
    fdr = get_fdr(fdr_id)
    return {
        "fdrId": fdr_id,
        "nodes": [
            {"id": "inst", "type": "Institution", "label": fdr["institutionName"]},
            {"id": "fdr", "type": "FDR", "label": fdr["fdrNumber"]},
            {"id": "bank", "type": "BankCBS", "label": fdr["bankName"]},
            {"id": "rules", "type": "RulesEngine", "label": "aicte-fdr-regulatory-pack-v1"}
        ]
    }

@app.post("/rag/query")
def rag_search(req: RAGQuery):
    return {
        "query": req.query,
        "results": [
            {
                "citation": "AICTE APH 2024 Chapter IV Clause 4.2.1",
                "snippet": "FDRs submitted towards Security Deposit must be drawn on a Scheduled Commercial Bank in the joint name of Applicant Institution and Regional Officer, AICTE."
            }
        ]
    }

@app.get("/rules")
def get_rules():
    return {
        "version": "1.0.0",
        "pack_id": "aicte-fdr-regulatory-pack-v1",
        "effective_date": "2026-01-01",
        "rule_count": 7
    }
