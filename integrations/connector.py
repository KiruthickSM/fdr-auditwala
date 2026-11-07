from abc import ABC, abstractmethod
from typing import Dict, Any

class VerificationConnector(ABC):
    @abstractmethod
    async def verify_fdr(self, fdr_data: Dict[str, Any]) -> Dict[str, Any]:
        pass
