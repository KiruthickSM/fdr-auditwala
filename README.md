# FDR AuditWala (FDRGuard) 🛡️
### Intelligent Security Deposit & FDR Lifecycle Management Platform
*Smart India Hackathon 2026 — Problem Statement: "Streamline of security deposit / FDR portal" (AICTE Context)*

> **One-line identity:**
> *"This is not an FDR database. It is an AI-powered FDR lifecycle intelligence and decision-support platform."*

---

## 🚀 5-Minute Quick Start

### Option A: Direct Web / Vercel Run
`ash
cd apps/web
npm install --legacy-peer-deps
npm run dev
`
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option B: Docker Compose (Lite Profile)
`ash
docker compose --profile lite up -d
`
- **Web Portal:** http://localhost:3000
- **FastAPI OpenAPI Docs:** http://localhost:8000/docs
- **MinIO S3 Console:** http://localhost:9001

### Option C: Vercel Cloud Deployment
Deploy directly to Vercel via CLI:
`ash
vercel deploy
`
or connect your GitHub repository directly to Vercel (root configuration ercel.json included).

---

## 🏛️ Core Principles & Guardrails

| Component | Strict Role | Guardrail / Non-Negotiable |
|---|---|---|
| **AI** | Suggests, detects anomalies, explains | Never invents rules, never silently modifies records, never approves releases |
| **Rules Engine** | Decides deterministic compliance | Versioned YAML (
ules/packs), every result cites rule code (e.g. RULE-FDR-EXP-003) |
| **Verification** | Checks authoritative bank sources | Fail-safe: SOURCE UNAVAILABLE is never treated as verified |
| **Human Reviewer** | Makes every consequential decision | Mandatory justification required when overriding AI recommendations |
| **Audit Ledger** | Records immutable history | Append-only, SHA-256 hash-chained cryptographic ledger |
| **Improvement Loop**| Learns only from validated feedback | Zero uncontrolled self-learning; changes require versioned rule deployment |

**Core Loop:** DOCUMENT → VERIFY → UNDERSTAND → SCORE → PRIORITIZE → REVIEW → ACT → AUDIT → IMPROVE

---

## 🧪 5 Scripted Benchmark Scenarios (One-Click Reproducible)

1. **Clean Normal FDR** (FDR-SBI-2024-81729) → ₹35 Lakhs, State Bank of India. 100% Core Banking Match → **LOW RISK / VERIFIED**.
2. **Amount Mismatch** (FDR-PNB-2024-9981) → ₹50 Lakhs claimed in PDF vs ₹45 Lakhs recorded in PNB CBS (₹5 Lakh deficit) → **CRITICAL RISK / HUMAN REVIEW**.
3. **Approaching Maturity** (FDR-BOB-2019-44120) → Bank of Baroda deposit maturing within 18 days → **RENEWAL REQUIRED**.
4. **Suspicious Scan** (FDR-HDFC-2024-55190) → Photoshop metadata tags, resolution mismatch on seal stamp → **REVIEW RECOMMENDED / HIGH CONCERN**.
5. **Release / Refund Authorization** (FDR-CAN-2016-10291) → 8-year mandatory security deposit lock-in completed with continuous A++ accreditation → **RELEASE ELIGIBLE**.

---

## 📁 Repository Layout

`
fdr-auditwala/
├── apps/
│   ├── api/                    # FastAPI backend (REST, OpenAPI, lifespan)
│   └── web/                    # Next.js 14 App Router, shadcn/tailwind UI
├── agents/                     # LangGraph controlled multi-agent system
├── workflows/                  # 16-State FSM & durable workflows
├── rules/                      # Versioned regulatory rule packs (YAML)
├── rag/                        # AICTE regulatory handbook knowledge base
├── database/                   # Migrations, schemas, seed generators
├── integrations/               # VerificationConnector & Mock Bank API
├── infrastructure/             # Docker compose, Kubernetes manifests, OTel
├── tests/                      # Unit, integration, and E2E suites
├── docs/                       # Architecture, API, Security, Demo scripts
├── vercel.json                 # Vercel deployment configuration
└── docker-compose.yml          # Lite & Full execution profiles
`
