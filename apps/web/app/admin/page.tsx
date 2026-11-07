"use client";

import React, { useState, useEffect } from "react";
import { useStore } from "@/lib/store";
import { AuditLedgerService } from "@/lib/auditLedger";
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
            <span className="font-semibold text-slate-500 uppercase">Mock Bank CBS Connector</span>
            <span className="flex items-center text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1 animate-pulse" /> ONLINE
            </span>
          </div>
          <div className="text-slate-800 font-bold text-sm">VerificationConnector Interface</div>
          <div className="text-slate-500 text-[11px]">Authorized bank CBS simulation active</div>
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
    </div>
  );
}
