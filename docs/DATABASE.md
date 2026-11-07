# FDR AuditWala — Data Model & Schema
PostgreSQL + pgvector schema supporting:
- Normalized institutions, drs, cases, extracted_fields, udit_ledger
- Append-only hash chaining on udit_ledger
- Old <-> New renewal linking via 
eplaced_by_fdr_id and 
eplacement_for_fdr_id
