# FDR AuditWala — System Architecture

## Architecture Overview
FDR AuditWala is structured as a dual-profile, fault-tolerant platform:
1. **Presentation & Decision Support:** Next.js 14 App Router, TypeScript, Tailwind CSS, Recharts.
2. **API & Engine Tier:** Python FastAPI, Pydantic, async REST.
3. **Deterministic Rules Tier:** YAML-based declarative compliance packs (RULE-FDR-*).
4. **Authoritative Verification Tier:** Pluggable VerificationConnector supporting mock CBS and real banking gateways.
5. **Multi-Agent Orchestration:** Controlled LangGraph pipeline with persistent state checkpoints.
6. **Integrity Tier:** Append-only SHA-256 hash-chained cryptographic audit ledger.
