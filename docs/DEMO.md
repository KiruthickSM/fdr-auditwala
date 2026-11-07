# FDR AuditWala — Official Evaluator Demo Script (SIH 2026)

Follow this step-by-step walkthrough to test the platform end-to-end:

### Step 1: Landing Page & Identity Check
1. Open the landing screen.
2. Verify the verbatim banner:
   > *"This is not an FDR database. It is an AI-powered FDR lifecycle intelligence and decision-support platform."*
3. Click **"Start Evaluator Guided Demo"** in the top bar.

### Step 2: Institution FDR Submission (3-Step Wizard)
1. Switch role to **Institution** in the top navigation bar.
2. Click **"Submit New FDR Certificate"**.
3. In Step 1, select preset **"Altered PNB ₹50L"** or drop any test certificate.
4. Advance to Step 2 to inspect field-level OCR confidence badges (95%+).
5. Advance to Step 3 to watch the live Multi-Agent Graph execute (Ingestion → Verification → Rules → Risk → Case Prioritization).

### Step 3: Reviewer Case Hero Screen (Case #2: Amount Mismatch)
1. Switch role to **Reviewer** and open the **Reviewer Case Queue**.
2. Notice Case #2 under the **Critical Queue** (4-hour SLA window).
3. Click **"Inspect"** to open the 3-Pane Hero Case Screen:
   - **Left Pane:** Original certificate viewer highlighting the Principal Amount glyph.
   - **Center Pane:** Extracted fields with inline edit capability.
   - **Right Pane:** AI Recommendation, 0-100 Explainable Risk Breakdown (+25 pts for PNB deficit), and Bank CBS confirmation.
4. Test human correction: Edit any field to observe validated feedback logged to the Continuous Improvement Loop.
5. In the sticky bottom decision bar, select **"Request Clarification"** or **"Approve"**, enter a mandatory justification, and click **"Record Decision"**.

### Step 4: FDR Lifecycle & Evidence Graph Trace
1. Open **FDR Detail** for Case #3 or Case #5.
2. Observe the **16-State Lifecycle Machine** with transition guard validations.
3. Switch to the **Evidence Graph Trace** tab to see topological citations linking Institution ↔ FDR ↔ Document ↔ Bank CBS ↔ Rules ↔ Reviewer.
4. Switch to the **Renewal & Replacement** tab to see linked old ↔ new replacement deposits.

### Step 5: Administration & Immutable Audit Ledger
1. Switch role to **Admin**.
2. View **Versioned Rule Packs** (icte-fdr-regulatory-pack-v1).
3. Inspect the **Cryptographic Audit Chain Explorer**:
   - Verify SHA-256 hash chaining from Genesis Block to current action.
   - Check the **"VALID (100% UNTAMPERED)"** integrity seal.

### Step 6: Executive Portfolio Management
1. Switch role to **Management**.
2. Review the macro dashboard: ₹78.4 Cr total custody value, risk distribution chart, bank exposure breakdown, and 97.8% AI verification precision.
