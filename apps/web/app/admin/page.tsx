"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/lib/store";
import { AuditLedgerService } from "@/lib/auditLedger";
import { SEEDED_DEMO_ACCOUNTS, DemoUserAccount } from "@/lib/auth";
import { Users, KeyRound, Check, X, UserCheck } from "lucide-react";
import { REGULATORY_RULES } from "@/lib/rulesEngine";
import {
  Sliders,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  History,
  FileCode,
  RotateCcw,
  Activity,
  Lock,
  Search
} from "lucide-react";

export default function AdminConsolePage() {
  const { auditEvents, currentUser } = useStore();
  const [integrityStatus, setIntegrityStatus] = useState<{ valid: boolean; details?: string } | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedRulePack, setSelectedRulePack] = useState<"v1.0.0" | "v1.1.0-draft">("v1.0.0");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAdminTab, setActiveAdminTab] = useState<"governance" | "appendix_a">("governance");
  const [policyAdminNotice, setPolicyAdminNotice] = useState<string | null>(null);
  const [usersList, setUsersList] = useState(SEEDED_DEMO_ACCOUNTS);
  const [selectedUserForReset, setSelectedUserForReset] = useState<DemoUserAccount | null>(null);
  const [resetSuccessMessage, setResetSuccessMessage] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  const handleResetPassword = async (email: string) => {
    setIsResetting(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setResetSuccessMessage(data.message || `Password reset link & temporary credentials issued for ${email}`);
        setTimeout(() => setResetSuccessMessage(null), 5000);
      }
    } catch {
      // ignore
    } finally {
      setIsResetting(false);
      setSelectedUserForReset(null);
    }
  };

  const handleVerifyLedger = async () => {
    setIsVerifying(true);
    const result = await AuditLedgerService.verifyChainIntegrity();
    setIntegrityStatus(result);
    setIsVerifying(false);
  };

  useEffect(() => {
    handleVerifyLedger();
  }, []);

  const filteredEvents = auditEvents.filter(e => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      e.action.toLowerCase().includes(q) ||
      e.entityId.toLowerCase().includes(q) ||
      e.actorName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900">System Administration & Governance</h1>
            <span className="text-xs font-semibold bg-slate-900 text-white px-2.5 py-0.5 rounded-full">
              Security & Rules Registry
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Versioned regulatory rule packs, cryptographic audit chain explorer, and connector health.
          </p>
        </div>

        {/* Cryptographic Ledger Integrity Badge */}
        <div className="bg-slate-50 border rounded-xl p-3 text-xs flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-slate-900 flex items-center space-x-1">
              <span>Audit Chain Integrity:</span>
              <span className={integrityStatus?.valid ? "text-emerald-700" : "text-rose-700"}>
                {integrityStatus?.valid ? "VALID (100% UNTAMPERED)" : "ALERT: TAMPER DETECTED"}
              </span>
            </div>
            <div className="text-slate-500 text-[10px]">
              Verified {auditEvents.length} SHA-256 hash-chained blocks
            </div>
          </div>
        </div>
      </div>

      {/* Admin Subnav */}
      <div className="flex items-center space-x-2 border-b pb-1 text-xs font-bold">
        <button
          type="button"
          onClick={() => setActiveAdminTab("governance")}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeAdminTab === "governance"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-white text-slate-600 hover:bg-slate-100 border"
          }`}
        >
          Rules, Audit & Security Registry
        </button>
        <button
          type="button"
          onClick={() => setActiveAdminTab("appendix_a")}
          className={`px-4 py-2 rounded-xl transition-all ${
            activeAdminTab === "appendix_a"
              ? "bg-slate-900 text-white shadow-xs"
              : "bg-white text-slate-600 hover:bg-slate-100 border"
          }`}
        >
          Assumptions & Placeholders to Confirm (Appendix A)
        </button>
      </div>

      {policyAdminNotice && (
        <div className="p-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold flex items-center justify-between">
          <span>{policyAdminNotice}</span>
          <button type="button" onClick={() => setPolicyAdminNotice(null)} className="text-amber-700 hover:text-amber-900 font-bold ml-4">
            Dismiss
          </button>
        </div>
      )}

      {/* System Health Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-white border rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-500 uppercase">Bank Core Banking (CBS) Connector</span>
            <span className="flex items-center text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse" /> ONLINE
            </span>
          </div>
          <div className="text-slate-800 font-bold text-sm">VerificationConnector Interface</div>
          <div className="text-slate-500 text-[11px]">Authorized bank CBS integration online</div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-500 uppercase">Deterministic Rules Engine</span>
            <span className="flex items-center text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" /> ACTIVE
            </span>
          </div>
          <div className="text-slate-800 font-bold text-sm">aicte-fdr-regulatory-pack-v1</div>
          <div className="text-slate-500 text-[11px]">7 Active Regulatory Rules</div>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-500 uppercase">Audit Ledger Storage</span>
            <span className="flex items-center text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" /> SECURE
            </span>
          </div>
          <div className="text-slate-800 font-bold text-sm">Append-Only WebCrypto SHA-256</div>
          <div className="text-slate-500 text-[11px]">Immutable state tracking</div>
        </div>
      </div>

      {/* Versioned Rules Engine Section */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <FileCode className="w-4 h-4 text-blue-900" />
              <span>Versioned Regulatory Rule Pack</span>
            </h3>
            <p className="text-xs text-slate-500">
              Version-controlled compliance rules. Changes are strictly versioned, approved, and reversible.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={() => setSelectedRulePack("v1.0.0")}
              className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                selectedRulePack === "v1.0.0" ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              v1.0.0 (Production Active)
            </button>
            <button
              onClick={() => setSelectedRulePack("v1.1.0-draft")}
              className={`px-3 py-1.5 rounded-lg font-bold border transition-all ${
                selectedRulePack === "v1.1.0-draft" ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              v1.1.0-draft (Staged Diff)
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border text-xs">
          <div className="text-slate-600">
            <strong>Rule Authority:</strong> Current actor: <span className="font-bold text-slate-900">{currentUser?.name}</span> ({currentUser?.role})
          </div>
          <button
            type="button"
            onClick={() => {
              if (currentUser?.role !== "POLICY_ADMIN") {
                setPolicyAdminNotice("Action Blocked: Publishing new regulatory rules is strictly restricted to POLICY_ADMIN (Dr. H. C. Nagaraj). System Admins cannot modify rules.");
              } else {
                setPolicyAdminNotice("Regulatory Pack v1.1.0 published successfully under statutory policy authority.");
              }
            }}
            className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-bold text-xs shadow-xs"
          >
            Publish New Rule Pack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REGULATORY_RULES.map(rule => (
            <div key={rule.id} className="p-4 rounded-xl border bg-slate-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-blue-900">{rule.id}</span>
                <div className="flex items-center space-x-1.5">
                  <span className="font-mono text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">v{rule.version}</span>
                  <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">APPROVED</span>
                </div>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{rule.name}</h4>
              <p className="text-slate-600 text-[11px]">{rule.description}</p>
              <div className="grid grid-cols-2 gap-1 pt-2 border-t text-[10px] text-slate-500 font-mono">
                <div>Effective: 2026-01-01 to 2027-12-31</div>
                <div className="text-right">Approved by: POLICY_ADMIN</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptographic Audit Ledger Explorer */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden space-y-4">
        <div className="p-6 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
              <History className="w-4 h-4 text-blue-900" />
              <span>Immutable Audit Ledger Explorer</span>
            </h3>
            <p className="text-xs text-slate-500">
              Cryptographically verified append-only block ledger capturing all actor decisions and transitions
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter audit events..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-4">Block #</th>
                <th className="py-2.5 px-4">Timestamp</th>
                <th className="py-2.5 px-4">Actor</th>
                <th className="py-2.5 px-4">Action & Entity</th>
                <th className="py-2.5 px-4">Reason / Details</th>
                <th className="py-2.5 px-4">SHA-256 Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              {filteredEvents.map((evt, idx) => (
                <tr key={evt.id} className="hover:bg-slate-50 transition-colors font-mono text-[11px]">
                  <td className="py-2.5 px-4 font-bold text-slate-900">#{idx + 1}</td>
                  <td className="py-2.5 px-4 font-sans text-slate-500">{evt.timestamp}</td>
                  <td className="py-2.5 px-4 font-sans">
                    <div className="font-bold text-slate-800">{evt.actorName}</div>
                    <div className="text-[10px] text-slate-400">{evt.actorRole}</div>
                  </td>
                  <td className="py-2.5 px-4 font-sans">
                    <div className="font-bold text-blue-900">{evt.action}</div>
                    <div className="text-[10px] text-slate-400">{evt.entityType}: {evt.entityId}</div>
                  </td>
                  <td className="py-2.5 px-4 font-sans text-slate-600 max-w-xs truncate">
                    {evt.reason || "Standard system transition"}
                  </td>
                  <td className="py-2.5 px-4 text-slate-500 font-mono text-[10px]">
                    <span className="text-slate-900 font-bold">{evt.currHash.substring(0, 14)}...</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Management & Demo Accounts */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-100 text-blue-900 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">User Management & Seeded Demo Personas</h2>
              <p className="text-xs text-slate-500">
                Governance of authenticated regulatory actors, RBAC clearances, and password resets.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border">
            7 Active Demo Identities
          </span>
        </div>

        {resetSuccessMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3.5 rounded-xl flex items-center space-x-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold">{resetSuccessMessage}</span>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">User / Principal</th>
                <th className="py-3 px-4">Role Clearance</th>
                <th className="py-3 px-4">Department / Institution</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Active</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              {usersList.map(u => (
                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">{u.name}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{u.email}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`font-bold text-[10px] uppercase px-2 py-0.5 rounded-full border ${
                        u.role === "ADMIN"
                          ? "bg-purple-50 text-purple-800 border-purple-200"
                          : u.role === "REVIEWER"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : u.role === "INSTITUTION"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-indigo-50 text-indigo-800 border-indigo-200"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">{u.title}</div>
                    <div className="text-[11px] text-slate-400">{u.department}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center space-x-1 text-emerald-700 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Active</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-500 text-[11px] whitespace-nowrap">
                    {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" }) : "Today"}
                  </td>
                  <td className="py-3 px-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => setSelectedUserForReset(u)}
                      className="inline-flex items-center space-x-1 border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-lg text-[11px] transition-colors"
                    >
                      <KeyRound className="w-3 h-3 text-slate-500" />
                      <span>Reset Password</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

            {/* APPENDIX A: ASSUMPTIONS & PLACEHOLDERS TO CONFIRM */}
      {activeAdminTab === "appendix_a" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-lg font-bold text-slate-900">Appendix A: Assumptions & Placeholders to Confirm</h2>
            <p className="text-xs text-slate-500 mt-1">
              Statutory and operational design baseline aligned with SIH26265 Technical Implementation Guidebook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Pillar 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">1</span>
                <span>Document Formats & Intake Constraints</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Primary format: Searchable PDF or high-resolution scan (minimum 300 DPI recommended).</li>
                <li>Maximum intake payload size: 15 MB per certificate upload.</li>
                <li>Supported image fallback: TIFF, JPEG/PNG with minimum 1024×768 resolution.</li>
                <li>Pre-processing pipeline: Grayscale conversion, adaptive binarization, deskewing & OCR bounding extraction.</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">2</span>
                <span>Mandatory Regulatory Fields</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Fixed Deposit Receipt (FDR) number (retains leading zeros, exact matching only).</li>
                <li>Principal deposit amount (stored as NUMERIC/Decimal in Indian Rupees ₹).</li>
                <li>Issuing scheduled commercial bank name and branch IFSC code.</li>
                <li>Joint lien endorsement explicitly naming &ldquo;Member Secretary, AICTE&rdquo;.</li>
                <li>Maturity date and issuance date with explicit ISO 8601 parsing.</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">3</span>
                <span>Official Regulatory Rules (AICTE Chapter IV)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Mandatory deposit tenure: Minimum 60 months (5 years) or 96 months (8 years) per programme category.</li>
                <li>Security deposit amount thresholds: ₹15L, ₹35L, ₹50L, ₹1Cr based on institution tier.</li>
                <li>Maturity Sentinel: Automated 45-day pre-expiry renewal alert trigger.</li>
                <li>Deterministic rules engine: Hard regulatory checks evaluated strictly without probabilistic hallucination.</li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">4</span>
                <span>Bank Verification Mechanisms</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Primary tier: Real-time Core Banking System (CBS) API integration via encrypted Gateway.</li>
                <li>Secondary tier: Scheduled daily SFTP batch reconciliation using PGP encrypted envelopes.</li>
                <li>Fallback tier: Simulated verification gateway returning standard Guidebook response states.</li>
                <li>SOURCE_UNAVAILABLE status is treated as a temporary network issue, never as a fraud signal.</li>
              </ul>
            </div>

            {/* Pillar 5 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">5</span>
                <span>Approval Hierarchy & Separation of Duties</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Case Officer (Reviewer): Conducts inspection, recommends approval/rejection, requests clarifications.</li>
                <li>Approving Authority (Member Secretary): Holds sole statutory power to issue final approval or rejection.</li>
                <li>System Admin: Maintains infrastructure and user accounts; strictly blocked from altering case decisions.</li>
                <li>Policy Admin: Authors and publishes regulatory rule packs; cannot adjudicate live cases.</li>
              </ul>
            </div>

            {/* Pillar 6 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-slate-900 text-sm">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center text-xs">6</span>
                <span>Retention & Cryptographic Audit Requirements</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                <li>Minimum retention period: 10 years beyond deposit release/refund.</li>
                <li>SHA-256 hash chaining: Every lifecycle transition, review decision, and unmask action is cryptographically sealed.</li>
                <li>Independent Auditor role: Full read-only ledger traversal and tamper verification capability.</li>
                <li>Zero automated funds transfer: Release and refund workflows are strictly review-only advisory trails.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {selectedUserForReset && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full p-6 text-center space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto">
              <KeyRound className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">Reset Password Credentials</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Clear lockout counters and restore default access credentials for:
              </p>
              <div className="mt-2 p-2 bg-slate-50 border rounded-lg text-xs font-mono text-slate-800">
                {selectedUserForReset.name} ({selectedUserForReset.email})
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Default password will be restored: <strong className="font-mono text-slate-700">Demo@12345</strong>
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                disabled={isResetting}
                onClick={() => handleResetPassword(selectedUserForReset.email)}
                className="flex-1 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-300 text-white font-bold text-xs py-2.5 rounded-lg shadow-sm transition-colors"
              >
                {isResetting ? "Resetting..." : "Confirm Reset"}
              </button>
              <button
                disabled={isResetting}
                onClick={() => setSelectedUserForReset(null)}
                className="flex-1 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
