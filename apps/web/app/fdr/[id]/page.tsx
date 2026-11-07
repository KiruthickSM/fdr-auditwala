"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { StatusBadge } from "@/components/StatusBadge";
import { RiskScoreGauge } from "@/components/RiskScoreGauge";
import { LifecycleStateMachine } from "@/lib/lifecycleFSM";
import { LifecycleState } from "@/lib/types";
import {
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Link2,
  FileText,
  History,
  GitBranch,
  ShieldCheck,
  Building,
  RotateCw,
  HelpCircle,
  ExternalLink
} from "lucide-react";

export default function FDRDetailPage() {
  const params = useParams();
  const fdrId = params.id as string;
  const { getFDRById, transitionLifecycle, auditEvents, submitReplacementFDR } = useStore();
  const fdr = getFDRById(fdrId);

  const [activeTab, setActiveTab] = useState<"overview" | "evidence" | "audit" | "renewal">("overview");
  const [transitionReason, setTransitionReason] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionError, setTransitionError] = useState<string | null>(null);

  // Renewal form
  const [replacementAmt, setReplacementAmt] = useState(5000000);
  const [replacementBank, setReplacementBank] = useState("Bank of Baroda");
  const [replacementFdrNo, setReplacementFdrNo] = useState("FDR-BOB-2026-RENEWAL-01");
  const [replacementSubmitted, setReplacementSubmitted] = useState(false);

  if (!fdr) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">FDR Record Not Found</h2>
        <Link href="/institution" className="inline-flex items-center text-xs font-bold text-blue-700">
          <ArrowLeft className="w-4 h-4 mr-1" /> Return to Institution Dashboard
        </Link>
      </div>
    );
  }

  const allStates = LifecycleStateMachine.getAllStates();
  const availableTransitions = LifecycleStateMachine.getAvailableTransitions(fdr);
  const fdrAuditEvents = auditEvents.filter(a => a.entityId === fdr.id);

  const handleExecuteTransition = async (targetState: LifecycleState) => {
    setIsTransitioning(true);
    setTransitionError(null);
    const res = await transitionLifecycle(fdr.id, targetState, transitionReason || "Officer manual transition");
    setIsTransitioning(false);
    if (!res.success) {
      setTransitionError(res.error || "Transition guard failed");
    } else {
      setTransitionReason("");
    }
  };

  const handleRenewalSubmit = async () => {
    await submitReplacementFDR(fdr.id, {
      fdrNumber: replacementFdrNo,
      amount: replacementAmt,
      bankName: replacementBank,
      institutionId: fdr.institutionId,
      institutionName: fdr.institutionName
    });
    setReplacementSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back and Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex items-center space-x-4">
          <Link
            href="/institution"
            className="p-2 rounded-lg border hover:bg-slate-50 text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-slate-900">{fdr.fdrNumber}</h1>
              <StatusBadge status={fdr.lifecycleStatus} size="md" />
              <StatusBadge status={fdr.verificationStatus} size="md" />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {fdr.institutionName} • ₹{fdr.amount.toLocaleString("en-IN")} • {fdr.bankName} ({fdr.branchName})
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <Link
            href={`/reviewer/case/${fdr.id}`}
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl shadow-sm transition-colors"
          >
            Open in Case Inspector
          </Link>
        </div>
      </div>

      {/* 16-State Lifecycle Visualizer Stepper */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Lifecycle State Machine Progress</h3>
            <p className="text-xs text-slate-500">Configurable 16-state finite transition table with strict guard checks</p>
          </div>
          <span className="text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded-full">
            Current: {fdr.lifecycleStatus}
          </span>
        </div>

        <div className="flex items-center space-x-2 min-w-[900px] text-xs font-semibold py-2">
          {allStates.map((st, index) => {
            const isCurrent = st === fdr.lifecycleStatus;
            const isPassed = allStates.indexOf(fdr.lifecycleStatus) > index;
            return (
              <React.Fragment key={st}>
                <div
                  className={`px-3 py-1.5 rounded-lg border text-center transition-all ${
                    isCurrent
                      ? "bg-blue-900 text-white font-bold ring-2 ring-blue-500 shadow"
                      : isPassed
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                >
                  <div className="text-[9px] uppercase opacity-75">Step {index + 1}</div>
                  <div className="text-[11px] truncate max-w-[100px]">{st}</div>
                </div>
                {index < allStates.length - 1 && (
                  <span className={`font-bold ${isPassed ? "text-emerald-500" : "text-slate-300"}`}>→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Transition Controls */}
        <div className="mt-4 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-700">Allowed Transitions:</span>
            {availableTransitions.length > 0 ? (
              availableTransitions.map(tr => (
                <button
                  key={tr.to}
                  onClick={() => handleExecuteTransition(tr.to)}
                  disabled={isTransitioning}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-300 px-3 py-1.5 rounded-lg font-bold transition-colors"
                >
                  Advance to: {tr.to}
                </button>
              ))
            ) : (
              <span className="text-slate-400 italic">No automated transitions available from current state.</span>
            )}
          </div>

          {transitionError && (
            <div className="text-rose-700 font-semibold bg-rose-50 border border-rose-200 px-3 py-1 rounded">
              Guard Blocked: {transitionError}
            </div>
          )}
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b text-xs font-semibold space-x-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2.5 transition-colors ${
            activeTab === "overview" ? "border-b-2 border-blue-900 text-blue-900 font-bold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Overview & Certificate Data
        </button>
        <button
          onClick={() => setActiveTab("evidence")}
          className={`pb-2.5 transition-colors ${
            activeTab === "evidence" ? "border-b-2 border-blue-900 text-blue-900 font-bold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Evidence Graph Trace (M11)
        </button>
        <button
          onClick={() => setActiveTab("renewal")}
          className={`pb-2.5 transition-colors ${
            activeTab === "renewal" ? "border-b-2 border-blue-900 text-blue-900 font-bold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Renewal & Replacement Link
        </button>
        <button
          onClick={() => setActiveTab("audit")}
          className={`pb-2.5 transition-colors ${
            activeTab === "audit" ? "border-b-2 border-blue-900 text-blue-900 font-bold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          Append-Only Audit Trail ({fdrAuditEvents.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 border-b pb-2">Security Deposit Specifications</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Principal Amount</span>
                <span className="font-extrabold text-slate-900 text-base">₹{fdr.amount.toLocaleString("en-IN")}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Issuing Bank</span>
                <span className="font-bold text-slate-900">{fdr.bankName}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Branch & IFSC</span>
                <span className="font-medium text-slate-700">{fdr.branchName} ({fdr.ifscCode})</span>
              </div>
              <div>
                <span className="text-slate-400 block">Deposit Date</span>
                <span className="font-medium text-slate-700">{fdr.issueDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Maturity Date</span>
                <span className="font-bold text-blue-900">{fdr.maturityDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Mandatory Tenure</span>
                <span className="font-medium text-slate-700">{fdr.tenureMonths} Months ({fdr.interestRate}% p.a.)</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block">Account Beneficiary</span>
                <span className="font-semibold text-slate-800">{fdr.beneficiary}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Joint Lien Holder</span>
                <span className="font-bold text-slate-900">{fdr.jointBeneficiary}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t text-xs text-slate-600">
              <span className="font-bold text-slate-700 block mb-1">Approval & Lien Purpose:</span>
              <p className="bg-slate-50 p-3 rounded-lg border font-mono text-[11px]">{fdr.purpose}</p>
            </div>
          </div>

          <div className="space-y-4">
            <RiskScoreGauge assessment={fdr.riskAssessment} score={fdr.riskScore} level={fdr.riskLevel} />
          </div>
        </div>
      )}

      {/* TAB 2: EVIDENCE GRAPH TRACE (M11) */}
      {activeTab === "evidence" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-base text-slate-900">Evidence Graph Clickable Trace (M11)</h3>
            <p className="text-xs text-slate-500">
              Complete topological evidence chain connecting Institution ↔ FDR ↔ Document ↔ Fields ↔ Bank Verification ↔ Rules ↔ Reviewer Decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Node 1 */}
            <div className="border-2 border-blue-900 rounded-xl p-4 bg-blue-50/50">
              <div className="font-bold text-blue-950 uppercase text-[10px]">Root Institution</div>
              <div className="font-extrabold text-sm text-slate-900 mt-1">{fdr.institutionName}</div>
              <div className="text-slate-500 text-[11px] mt-1">ID: {fdr.institutionId}</div>
            </div>

            {/* Node 2 */}
            <div className="border-2 border-indigo-700 rounded-xl p-4 bg-indigo-50/50">
              <div className="font-bold text-indigo-950 uppercase text-[10px]">Document Certificate</div>
              <div className="font-extrabold text-sm text-slate-900 mt-1 truncate">{fdr.documentFileName}</div>
              <div className="text-slate-500 text-[11px] mt-1">Extracted 8 fields • 0.96 avg confidence</div>
            </div>

            {/* Node 3 */}
            <div className="border-2 border-purple-700 rounded-xl p-4 bg-purple-50/50">
              <div className="font-bold text-purple-950 uppercase text-[10px]">Authoritative Core Banking</div>
              <div className="font-extrabold text-sm text-slate-900 mt-1">{fdr.verification?.source || fdr.bankName}</div>
              <div className="text-slate-500 text-[11px] mt-1">Status: {fdr.verificationStatus}</div>
            </div>

            {/* Node 4 */}
            <div className="border-2 border-emerald-700 rounded-xl p-4 bg-emerald-50/50">
              <div className="font-bold text-emerald-950 uppercase text-[10px]">Evaluated Rules Pack</div>
              <div className="font-extrabold text-sm text-slate-900 mt-1">aicte-fdr-regulatory-pack-v1</div>
              <div className="text-slate-500 text-[11px] mt-1">{fdr.ruleEvaluations.length} Rules Checked</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RENEWAL & REPLACEMENT LINK */}
      {activeTab === "renewal" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-base text-slate-900">Replacement & Renewal Association</h3>
            <p className="text-xs text-slate-500">Old FDRs are never deleted; renewals link previous ↔ new replacement deposit.</p>
          </div>

          {fdr.replacedByFdrId ? (
            <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl text-xs text-emerald-900 space-y-2">
              <div className="font-bold text-sm flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Replacement FDR Successfully Linked</span>
              </div>
              <p>Replaced by New Certificate ID: <span className="font-mono font-bold">{fdr.replacedByFdrId}</span></p>
              <Link href={`/fdr/${fdr.replacedByFdrId}`} className="font-bold text-blue-800 underline">
                View Replacement FDR Record →
              </Link>
            </div>
          ) : fdr.replacementForFdrId ? (
            <div className="bg-blue-50 border border-blue-300 p-4 rounded-xl text-xs text-blue-900 space-y-2">
              <div className="font-bold text-sm flex items-center space-x-1.5">
                <Link2 className="w-4 h-4 text-blue-700" />
                <span>This FDR is a Renewal Replacement</span>
              </div>
              <p>Replacement For Old Expired FDR ID: <span className="font-mono font-bold">{fdr.replacementForFdrId}</span></p>
            </div>
          ) : (
            <div className="space-y-4 max-w-xl">
              <p className="text-xs text-slate-600">
                If this FDR is expiring or requires renewal, upload and link the replacement FDR certificate here:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Replacement FDR No</label>
                  <input
                    type="text"
                    value={replacementFdrNo}
                    onChange={e => setReplacementFdrNo(e.target.value)}
                    className="w-full border rounded-lg p-2 bg-white"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">New Principal Amount</label>
                  <input
                    type="number"
                    value={replacementAmt}
                    onChange={e => setReplacementAmt(Number(e.target.value))}
                    className="w-full border rounded-lg p-2 bg-white font-bold"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-semibold text-slate-700 block mb-1">Issuing Bank</label>
                  <input
                    type="text"
                    value={replacementBank}
                    onChange={e => setReplacementBank(e.target.value)}
                    className="w-full border rounded-lg p-2 bg-white"
                  />
                </div>
              </div>

              <button
                onClick={handleRenewalSubmit}
                disabled={replacementSubmitted}
                className="bg-blue-900 hover:bg-blue-800 disabled:opacity-50 text-white font-bold text-xs px-4 py-2 rounded-xl shadow"
              >
                {replacementSubmitted ? "Replacement Linked!" : "Submit & Link Replacement FDR"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: AUDIT TRAIL */}
      {activeTab === "audit" && (
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-base text-slate-900">Append-Only Cryptographic Audit Log</h3>
            <p className="text-xs text-slate-500">Immutable SHA-256 hash-chained history of every state change and decision</p>
          </div>

          <div className="divide-y border rounded-xl overflow-hidden text-xs">
            {fdrAuditEvents.length > 0 ? (
              fdrAuditEvents.map((evt, idx) => (
                <div key={evt.id} className="p-3 hover:bg-slate-50 transition-colors space-y-1">
                  <div className="flex items-center justify-between text-slate-500 text-[10px]">
                    <span className="font-mono text-slate-700 font-bold">#{idx + 1} • {evt.timestamp}</span>
                    <span className="font-mono text-[9px] truncate max-w-[200px]">Hash: {evt.currHash.substring(0, 16)}...</span>
                  </div>
                  <div className="font-bold text-slate-900">{evt.action}</div>
                  <div className="text-slate-600 text-[11px]">{evt.reason}</div>
                  <div className="text-slate-400 text-[10px]">
                    Actor: <span className="font-semibold text-slate-700">{evt.actorName} ({evt.actorRole})</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-slate-400 italic">
                Initial genesis block recorded for this FDR.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
