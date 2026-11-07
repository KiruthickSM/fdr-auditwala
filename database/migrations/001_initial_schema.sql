-- FDRGuard PostgreSQL Schema (pgvector enabled)
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE institutions (
    id VARCHAR(64) PRIMARY KEY,
    code VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(64) NOT NULL,
    state VARCHAR(64) NOT NULL,
    city VARCHAR(64) NOT NULL,
    contact_person VARCHAR(128) NOT NULL,
    email VARCHAR(128) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    aicte_approval_no VARCHAR(128) NOT NULL,
    approval_year INT NOT NULL,
    compliance_status VARCHAR(32) NOT NULL,
    risk_profile VARCHAR(32) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE fdrs (
    id VARCHAR(64) PRIMARY KEY,
    fdr_number VARCHAR(128) NOT NULL,
    institution_id VARCHAR(64) REFERENCES institutions(id),
    bank_name VARCHAR(128) NOT NULL,
    branch_name VARCHAR(128) NOT NULL,
    ifsc_code VARCHAR(32) NOT NULL,
    amount NUMERIC(15, 2) NOT NULL,
    issue_date DATE NOT NULL,
    maturity_date DATE NOT NULL,
    tenure_months INT NOT NULL,
    interest_rate NUMERIC(5, 2) NOT NULL,
    beneficiary VARCHAR(255) NOT NULL,
    joint_beneficiary VARCHAR(255) NOT NULL,
    purpose TEXT NOT NULL,
    lifecycle_status VARCHAR(64) NOT NULL,
    authenticity_level VARCHAR(64) NOT NULL,
    verification_status VARCHAR(64) NOT NULL,
    risk_score INT NOT NULL,
    risk_level VARCHAR(32) NOT NULL,
    replaced_by_fdr_id VARCHAR(64),
    replacement_for_fdr_id VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE audit_ledger (
    id VARCHAR(64) PRIMARY KEY,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    actor_id VARCHAR(64) NOT NULL,
    actor_name VARCHAR(128) NOT NULL,
    actor_role VARCHAR(64) NOT NULL,
    action VARCHAR(255) NOT NULL,
    entity_type VARCHAR(64) NOT NULL,
    entity_id VARCHAR(64) NOT NULL,
    previous_state VARCHAR(64),
    new_state VARCHAR(64),
    reason TEXT,
    correlation_id VARCHAR(128) NOT NULL,
    prev_hash CHAR(64) NOT NULL,
    curr_hash CHAR(64) NOT NULL
);
CREATE INDEX idx_audit_entity ON audit_ledger(entity_id);
