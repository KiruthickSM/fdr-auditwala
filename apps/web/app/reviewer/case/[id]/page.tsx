"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { StatusBadge } from "@/components/StatusBadge";
import { RiskScoreGauge } from "@/components/RiskScoreGauge";
import {
  FileText,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Edit2,
  Save,
  RotateCw,
  HelpCircle,
  AlertOctagon,
  Eye,
  Building,
  Scale,
  Send,
  Sparkles,
  Lock
} from "lucide-react";

export default function ReviewerCaseHeroScreen() {
  const params = useParams();
  const router = useRouter();
  const caseId = params.id as string;
  const { cases, fdrs, recordDecision, submitFeedback, triggerReVerification } = useStore();

  const c = cases.find(item => item.id === caseId || item.fdrId === caseId);
  const fdr = fdrs.find(item => item.id === c?.fdrId || item.id === caseId);

  // Active highlighted field
  const [activeField, setActiveField] = useState<string | null>("amount");
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  // Sticky Decision Bar State
  const [decisionAction, setDecisionAction] = useState<"Approve" | "Reject" | "Request Clarification" | "Escalate" | null>(null);
  const [overrideAI, setOverrideAI] = useState(false);
  const [justification, setJustification] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [decisionSubmitted, setDecisionSubmitted] = useState(false);
  const [isReVerifying, setIsReVerifying] = useState(false);

  if (!fdr) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Case Not Found</h2>
        <p className="text-xs text-slate-500">The requested FDR case reference does not exist.</p>
        <Link href="/reviewer" className="inline-flex items-center text-xs font-bold text-blue-700">
          <ArrowLeft className="w-4 h-4 mr-1" /> Return to Inbox
        </Link>
      </div>
    );
  }

  const handleEditClick = (fieldName: string, currValue: any) => {
    setEditingField(fieldName);
    setEditValue(String(currValue));
  };

  const handleSaveCorrection = async (fieldName: string, originalVal: any) => {
    // Log to feedback store for continuous improvement
    await submitFeedback({
      caseId: c?.id || fdr.id,
      fdrId: fdr.id,
      actorId: "rev-1",
      actorName: "Rajesh Sharma (Reviewer)",
      fieldName,
      modelSuggestedValue: originalVal,
      humanCorrectedValue: editValue,
      category: "Extraction Error",
      notes: `Reviewer corrected field ${fieldName} on case ${c?.caseNumber || fdr.id}`
    });

    // Update field value locally
    const fieldIndex = fdr.extractedFields.findIndex(f => f.fieldName === fieldName);
    if (fieldIndex >= 0) {
      fdr.extractedFields[fieldIndex].value = isNaN(Number(editValue)) ? editValue : Number(editValue);
      fdr.extractedFields[fieldIndex].isEdited = true;
    }

    setEditingField(null);
  };

  const handleDecisionSubmit = async () => {
    if (!decisionAction) return;
    if (!justification.trim()) {
      alert("Mandatory justification required for every consequential reviewer decision.");
      return;
    }

    setIsSubmitting(true);
    await recordDecision(
      c?.id || `case-${Date.now()}`,
      fdr.id,
      decisionAction,
      overrideAI,
      justification
    );
    setIsSubmitting(false);
    setDecisionSubmitted(true);
  };

  const handleTriggerReVerification = async () => {
    setIsReVerifying(true);
    await triggerReVerification(fdr.id);
    setIsReVerifying(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col pb-32">
      {/* Top Header Bar */}
      <div className="bg-white border-b px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <Link
              href="/reviewer"
              className="p-1.5 rounded-lg border hover:bg-slate-50 text-slate-600 transition-colors"
              title="Back to Reviewer Inbox"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-base">
                  {c?.caseNumber || "CASE-INSPECTION"} • {fdr.fdrNumber}
                </span>
                <StatusBadge status={fdr.lifecycleStatus} size="sm" />
                {fdr.verificationStatus === "MISMATCH" && (
                  <span className="text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-full animate-pulse">
                    BANK MISMATCH DETECTED
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {fdr.institutionName} • ₹{fdr.amount.toLocaleString("en-IN")} • {fdr.bankName}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={handleTriggerReVerification}
              disabled={isReVerifying}
              className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-3 py-1.5 rounded-lg border transition-colors"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isReVerifying ? "animate-spin text-blue-700" : ""}`} />
              <span>{isReVerifying ? "Querying CBS..." : "Query Bank CBS API"}</span>
            </button>
            <Link
              href={`/fdr/${fdr.id}`}
              className="bg-blue-50 text-blue-800 hover:bg-blue-100 font-bold px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
            >
              View FDR Lifecycle History
            </Link>
          </div>
        </div>
      </div>

      {/* Hero 3-Pane Reviewer Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* PANE 1: ORIGINAL DOCUMENT VISUALIZER (4 cols) */}
          <div className="lg:col-span-4 bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col h-[750px]">
            <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-blue-300" />
                <span className="font-bold text-xs truncate max-w-[200px]">{fdr.documentFileName}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Page 1 of 1</span>
            </div>

            {/* Document Interactive Canvas with Bounding Boxes */}
            <div className="flex-1 bg-slate-800 p-4 overflow-auto flex items-center justify-center relative select-none">
              <div className="relative w-full aspect-[1/1.414] bg-white rounded-lg shadow-2xl p-6 border border-slate-300 text-slate-900 font-serif text-[10px] leading-relaxed">
                
                {/* Header of Certificate */}
                <div className="text-center border-b-2 border-slate-800 pb-3 mb-4">
                  <div className="font-sans font-black text-xs uppercase tracking-wider text-slate-800">
                    {fdr.bankName}
                  </div>
                  <div className="font-sans text-[9px] text-slate-500">
                    {fdr.branchName} • IFSC: {fdr.ifscCode}
                  </div>
                  <div className="font-serif italic font-bold text-xs text-blue-950 mt-1 uppercase">
                    Term Deposit / Fixed Deposit Receipt
                  </div>
                </div>

                {/* Bounding box regions */}
                <div className="space-y-3">
                  {/* FDR Number */}
                  <div
                    onClick={() => setActiveField("fdrNumber")}
                    className={`p-1 rounded cursor-pointer transition-all border ${
                      activeField === "fdrNumber"
                        ? "bg-blue-100/80 border-blue-600 ring-2 ring-blue-400 font-bold"
                        : "hover:bg-blue-50 border-transparent"
                    }`}
                  >
                    <span className="font-sans font-semibold text-slate-500 text-[8px] uppercase block">Deposit Certificate No:</span>
                    <span className="font-mono font-bold text-slate-900">{fdr.fdrNumber}</span>
                  </div>

                  {/* Principal Amount (Highlights Altered Numerics if Mismatch) */}
                  <div
                    onClick={() => setActiveField("amount")}
                    className={`p-1.5 rounded cursor-pointer transition-all border ${
                      fdr.verificationStatus === "MISMATCH"
                        ? "bg-rose-100/90 border-rose-500 ring-2 ring-rose-400 font-bold"
                        : activeField === "amount"
                        ? "bg-blue-100/80 border-blue-600 ring-2 ring-blue-400 font-bold"
                        : "hover:bg-blue-50 border-transparent"
                    }`}
                  >
                    <span className="font-sans font-semibold text-slate-500 text-[8px] uppercase block flex justify-between">
                      <span>Principal Deposit Amount:</span>
                      {fdr.verificationStatus === "MISMATCH" && (
                        <span className="text-rose-700 text-[8px] font-bold uppercase">Glyph Alert</span>
                      )}
                    </span>
                    <span className="font-sans text-sm font-extrabold text-blue-950 block">
                      ₹{fdr.amount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() => setActiveField("issueDate")}
                      className={`p-1 rounded cursor-pointer transition-all border ${
                        activeField === "issueDate" ? "bg-blue-100/80 border-blue-600 ring-1 ring-blue-400" : ""
                      }`}
                    >
                      <span className="font-sans text-[8px] text-slate-500 uppercase block">Deposit Date:</span>
                      <span className="font-medium">{fdr.issueDate}</span>
                    </div>

                    <div
                      onClick={() => setActiveField("maturityDate")}
                      className={`p-1 rounded cursor-pointer transition-all border ${
                        activeField === "maturityDate" ? "bg-blue-100/80 border-blue-600 ring-1 ring-blue-400" : ""
                      }`}
                    >
                      <span className="font-sans text-[8px] text-slate-500 uppercase block">Maturity Date:</span>
                      <span className="font-medium">{fdr.maturityDate}</span>
                    </div>
                  </div>

                  {/* Beneficiary & Joint */}
                  <div
                    onClick={() => setActiveField("beneficiary")}
                    className={`p-1 rounded cursor-pointer transition-all border ${
                      activeField === "beneficiary" ? "bg-blue-100/80 border-blue-600 ring-1 ring-blue-400" : ""
                    }`}
                  >
                    <span className="font-sans text-[8px] text-slate-500 uppercase block">In Account Of:</span>
                    <span className="font-semibold">{fdr.beneficiary}</span>
                  </div>

                  <div
                    onClick={() => setActiveField("jointBeneficiary")}
                    className={`p-1 rounded cursor-pointer transition-all border ${
                      activeField === "jointBeneficiary" ? "bg-blue-100/80 border-blue-600 ring-1 ring-blue-400" : ""
                    }`}
                  >
                    <span className="font-sans text-[8px] text-slate-500 uppercase block">Joint Lien Holder:</span>
                    <span className="font-bold text-slate-900">{fdr.jointBeneficiary}</span>
                  </div>
                </div>

                {/* Bank Seal / Stamp Mock */}
                <div className="mt-8 pt-4 border-t flex justify-between items-center text-[8px] text-slate-500">
                  <div>
                    <div className="font-sans font-bold uppercase">Authorized Signatory</div>
                    <div>Branch Manager, {fdr.bankName}</div>
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-blue-900/40 flex items-center justify-center text-[7px] text-blue-900 font-bold uppercase text-center p-1">
                    OFFICIAL BANK EMBOSS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PANE 2: EXTRACTED FIELDS & INLINE CORRECTION (4 cols) */}
          <div className="lg:col-span-4 bg-white border rounded-2xl shadow-sm p-5 space-y-4 h-[750px] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Extracted Fields</h3>
                <p className="text-xs text-slate-500">Field-level OCR confidence with bounding coordinate tags</p>
              </div>
              <span className="text-xs font-semibold bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full">
                {fdr.extractedFields.length} Fields
              </span>
            </div>

            <div className="space-y-3">
              {fdr.extractedFields.map(field => {
                const isSelected = activeField === field.fieldName;
                const isEditing = editingField === field.fieldName;
                const isMismatchField = fdr.verificationStatus === "MISMATCH" && field.fieldName === "amount";

                return (
                  <div
                    key={field.fieldName}
                    onClick={() => setActiveField(field.fieldName)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isMismatchField
                        ? "bg-rose-50/70 border-rose-300 ring-1 ring-rose-300"
                        : isSelected
                        ? "bg-blue-50/80 border-blue-400 ring-1 ring-blue-300"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">{field.label}</span>
                      <div className="flex items-center space-x-1.5">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.2 rounded-full ${
                            field.confidence >= 0.95
                              ? "bg-emerald-100 text-emerald-800"
                              : field.confidence >= 0.85
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {(field.confidence * 100).toFixed(0)}% Conf
                        </span>
                        {!isEditing && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditClick(field.fieldName, field.value);
                            }}
                            className="text-slate-400 hover:text-blue-700 p-0.5"
                            title="Correct field value"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    {isEditing ? (
                      <div className="mt-2 flex items-center space-x-2" onClick={e => e.stopPropagation()}>
                        <input
                          type="text"
                          value={editValue}
                          onChange={e => setEditValue(e.target.value)}
                          className="w-full border rounded p-1 text-xs text-slate-900 font-bold bg-white focus:ring-1 focus:ring-blue-600"
                          autoFocus
                        />
                        <button
                          onClick={() => handleSaveCorrection(field.fieldName, field.value)}
                          className="bg-blue-900 text-white p-1 rounded hover:bg-blue-800"
                          title="Save correction"
                        >
                          <Save className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="mt-1 text-xs font-bold text-slate-900 flex items-center justify-between">
                        <span>
                          {typeof field.value === "number"
                            ? `₹${field.value.toLocaleString("en-IN")}`
                            : String(field.value)}
                        </span>
                        {field.isEdited && (
                          <span className="text-[9px] font-semibold text-blue-700 bg-blue-100 px-1.5 py-0.2 rounded">
                            Corrected by Officer
                          </span>
                        )}
                      </div>
                    )}

                    {isMismatchField && (
                      <div className="mt-2 text-[11px] font-semibold text-rose-700 bg-rose-100/70 p-2 rounded border border-rose-200">
                        Bank Core Banking System authoritative record states ₹45,00,000. (Discrepancy: -₹5,00,000).
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* PANE 3: AI INTELLIGENCE & RULES PANEL (4 cols) */}
          <div className="lg:col-span-4 space-y-4 h-[750px] overflow-y-auto pr-1">
            
            {/* AI Recommendation Banner */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-5 rounded-2xl shadow-md border border-blue-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 mr-1" />
                  AI Recommendation
                </span>
                <span className="text-xs font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                  {fdr.aiRecommendation?.action || "Review"}
                </span>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed font-medium">
                {fdr.aiRecommendation?.rationale || "Authoritative review required based on cross-source findings."}
              </p>
              <div className="mt-3 pt-2.5 border-t border-blue-800/80 flex items-center justify-between text-[11px] text-blue-300">
                <span>Confidence: {((fdr.aiRecommendation?.confidence || 0.95) * 100).toFixed(0)}%</span>
                <span className="font-mono text-amber-300">{fdr.aiRecommendation?.applicableRuleId}</span>
              </div>
            </div>

            {/* Risk Gauge */}
            <RiskScoreGauge assessment={fdr.riskAssessment} score={fdr.riskScore} level={fdr.riskLevel} />

            {/* Verification Status Card */}
            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-slate-600 flex items-center space-x-1">
                  <Building className="w-3.5 h-3.5 mr-1 text-blue-800" />
                  Bank CBS Verification
                </span>
                <StatusBadge status={fdr.verificationStatus} size="sm" />
              </div>
              <p className="text-xs text-slate-500">Source: {fdr.verification?.source || "Bank API Connector"}</p>
              
              {fdr.verification?.discrepancies && fdr.verification.discrepancies.length > 0 && (
                <div className="mt-2 bg-rose-50 border border-rose-200 rounded p-2 text-xs text-rose-800 space-y-1">
                  <span className="font-bold block text-rose-900">Discrepancies Recorded:</span>
                  {fdr.verification.discrepancies.map((d, i) => (
                    <div key={i} className="text-[11px]">• {d.explanation}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Regulatory Rules Card */}
            <div className="bg-white border rounded-xl p-4 shadow-sm space-y-2">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-bold uppercase text-slate-600 flex items-center space-x-1">
                  <Scale className="w-3.5 h-3.5 mr-1 text-indigo-800" />
                  Regulatory Rule Checks
                </span>
                <span className="text-[10px] text-slate-400">v1.0 Pack</span>
              </div>

              <div className="space-y-2">
                {fdr.ruleEvaluations.map((r) => (
                  <div key={r.ruleId} className="text-xs p-2 rounded border bg-slate-50">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[10px] text-slate-700">{r.ruleId}</span>
                      <StatusBadge status={r.status} size="sm" />
                    </div>
                    <div className="font-semibold text-slate-900 text-[11px] mt-0.5">{r.ruleName}</div>
                    <div className="text-slate-500 text-[10px] mt-0.5">{r.explanation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Authenticity / Tamper Signals */}
            {fdr.tamperAnalysis && (
              <div className="bg-white border rounded-xl p-4 shadow-sm text-xs space-y-2">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-bold uppercase text-slate-600">Tamper & Authenticity Analysis</span>
                  <StatusBadge status={fdr.authenticityLevel} size="sm" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600 text-[11px]">
                  <div>Font Consistency: <span className="font-bold text-slate-900">{fdr.tamperAnalysis.fontConsistency}%</span></div>
                  <div>Layout Integrity: <span className="font-bold text-slate-900">{fdr.tamperAnalysis.layoutIntegrity}%</span></div>
                </div>
                {fdr.tamperAnalysis.metadataAnomalies.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 text-amber-900 p-2 rounded text-[10px]">
                    <span className="font-bold block">Metadata Findings:</span>
                    {fdr.tamperAnalysis.metadataAnomalies.map((m, idx) => (
                      <div key={idx}>• {m}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM REVIEWER ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-300 shadow-2xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Consequential Justification Input */}
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-1">
                <Lock className="w-3 h-3 text-slate-500 mr-1" />
                <span>Consequential Reviewer Decision & Justification (Mandatory)</span>
              </label>
              <label className="flex items-center space-x-1.5 text-xs text-slate-600 font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={overrideAI}
                  onChange={e => setOverrideAI(e.target.checked)}
                  className="rounded text-blue-900 focus:ring-blue-600"
                />
                <span>Override AI Finding</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter formal reason for this decision (e.g. Bank confirmation letter requested on PNB deficit)..."
              value={justification}
              onChange={e => setJustification(e.target.value)}
              className="w-full border rounded-lg p-2 text-xs bg-slate-50 text-slate-900 font-medium focus:bg-white focus:ring-2 focus:ring-blue-700"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={() => {
                setDecisionAction("Approve");
                setJustification(overrideAI ? "Overridden: Certificate verified through offline branch contact." : "Verified against authoritative core banking records.");
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                decisionAction === "Approve"
                  ? "bg-emerald-700 text-white ring-2 ring-emerald-500"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
            >
              Approve Deposit
            </button>

            <button
              onClick={() => {
                setDecisionAction("Request Clarification");
                setJustification("Deficit detected between bank record and certificate. Please submit bank confirmation letter.");
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                decisionAction === "Request Clarification"
                  ? "bg-amber-600 text-white ring-2 ring-amber-400"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              Request Clarification
            </button>

            <button
              onClick={() => {
                setDecisionAction("Escalate");
                setJustification("High risk anomaly detected in certificate metadata. Escalated to Executive Committee.");
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                decisionAction === "Escalate"
                  ? "bg-purple-700 text-white ring-2 ring-purple-500"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Escalate to Committee
            </button>

            <button
              onClick={() => {
                setDecisionAction("Reject");
                setJustification("Failed mandatory AICTE regulatory requirements.");
              }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                decisionAction === "Reject"
                  ? "bg-rose-700 text-white ring-2 ring-rose-500"
                  : "bg-rose-600 hover:bg-rose-700 text-white"
              }`}
            >
              Reject
            </button>

            <button
              onClick={handleDecisionSubmit}
              disabled={isSubmitting || !decisionAction}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Recording..." : "Record Decision"}</span>
            </button>
          </div>
        </div>

        {decisionSubmitted && (
          <div className="max-w-7xl mx-auto mt-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded p-2 text-center animate-fade-in">
            ✓ Reviewer decision successfully recorded in immutable SHA-256 hash-chained audit ledger.
          </div>
        )}
      </div>
    </div>
  );
}
