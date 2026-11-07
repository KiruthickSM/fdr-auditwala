# FDR AuditWala — REST API Specification
All endpoints adhere to OpenAPI 3.0 specification:
- POST /auth/login — Authentication & JWT session issuance
- GET /institutions — List AICTE technical institutions
- GET /fdrs — Retrieve FDR portfolio
- POST /fdrs/{id}/verify — Trigger Core Banking verification
- POST /cases/{id}/decision — Record reviewer consequential decision
- POST /rag/query — Semantic search over regulatory handbooks
