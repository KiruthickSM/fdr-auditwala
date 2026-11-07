from integrations.connector import VerificationConnector
from typing import Dict, Any
from datetime import datetime

class MockBankVerificationService(VerificationConnector):
    async def verify_fdr(self, fdr_data: Dict[str, Any]) -> Dict[str, Any]:
        fdr_num = fdr_data.get("fdrNumber", "")
        if "MISMATCH" in fdr_num or fdr_num == "FDR-PNB-2024-9981":
            return {
                "source": "Punjab National Bank CBS Direct Connect",
                "status": "MISMATCH",
                "discrepancies": [{
                    "field": "amount",
                    "submittedValue": 5000000,
                    "authoritativeValue": 4500000,
                    "severity": "CRITICAL",
                    "explanation": "Bank CBS records principal ₹45 Lakhs. Certificate claims ₹50 Lakhs. Deficit: ₹5 Lakhs."
                }],
                "verifiedAt": datetime.utcnow().isoformat(),
                "externalRef": "CBS-PNB-MISMATCH-81920"
            }
        return {
            "source": f"{fdr_data.get('bankName', 'Bank')} CBS Direct Connect",
            "status": "MATCH",
            "discrepancies": [],
            "verifiedAt": datetime.utcnow().isoformat(),
            "externalRef": f"CBS-AUTH-{datetime.utcnow().timestamp()}"
        }
