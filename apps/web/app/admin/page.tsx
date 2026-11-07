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
  const { auditEvents } = useStore();
  const [integrityStatus, setIntegrityStatus] = useState<{ valid: boolean; details?: string } | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [selectedRulePack, setSelectedRulePack] = useState<"v1.0.0" | "v1.1.0-draft">("v1.0.0");
  const [searchTerm, setSearchTerm] = useState("");
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REGULATORY_RULES.map(rule => (
            <div key={rule.id} className="p-4 rounded-xl border bg-slate-50 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-blue-900">{rule.id}</span>
                <span className="font-semibold text-slate-500 text-[10px]">v{rule.version}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{rule.name}</h4>
              <p className="text-slate-600 text-[11px]">{rule.description}</p>
              <div className="flex items-center justify-between pt-2 border-t text-[10px] text-slate-400 font-semibold">
                <span>Category: {rule.category}</span>
                <span className="text-rose-700 font-bold uppercase">{rule.severity}</span>
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
