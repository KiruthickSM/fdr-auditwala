"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { StatusBadge } from "@/components/StatusBadge";
import { maskFdrNumber } from "@/lib/formatters";
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
  EyeOff,
  Building,
  Scale,
  Send,
  Sparkles,
  Lock,
  X
} from "lucide-react";

export default function ReviewerCaseHeroScreen() {
  const params = useParams();
  const router = useRouter();
  const caseId = params.id as string;
  const { cases, fdrs, currentUser, recordDecision, recordFdrReveal, submitFeedback, triggerReVerification } = useStore();

  const c = cases.find(item => item.id === caseId || item.caseNumber === caseId || item.fdrId === caseId);
  const fdr = fdrs.find(item => item.id === c?.fdrId || item.id === caseId);

  // Active highlighted field
  const [activeField, setActiveField] = useState<string | null>("amount");
  const [isFdrRevealed, setIsFdrRevealed] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"twin" | "extracted">("twin");
  const [selectedFinding, setSelectedFinding] = useState<any>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [concurrencyError, setConcurrencyError] = useState<string | null>(null);
  const [decisionMessage, setDecisionMessage] = useState<string>("");

  // Sticky Decision Bar State
  const [decisionAction, setDecisionAction] = useState<string | null>(null);
  const [overrideAI, setOverrideAI] = useState(false);
  const [justification, setJustification] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [decisionSubmitted, setDecisionSubmitted] = useState(false);
  const [isReVerifying, setIsReVerifying] = useState(false);

  if (!fdr) {
    const findingsList = fdr.findings && fdr.findings.length > 0 ? fdr.findings : [
    {
      id: "fnd-1",
      code: fdr.verificationStatus === "MISMATCH" ? "AMOUNT_MISMATCH" : "REGULATORY_COMPLIANCE_VERIFIED",
      category: fdr.verificationStatus === "MISMATCH" ? "VERIFICATION" : "REGULATORY_COMPLIANCE",
      severity: fdr.verificationStatus === "MISMATCH" ? "CRITICAL" : "LOW",
      status: "OPEN",
      ruleId: "AICTE-APH-CH4-v2026.1",
      ruleVersion: "2026.1",
      title: fdr.verificationStatus === "MISMATCH" ? "Verification Source (Simulated) Amount Discrepancy (-₹5,00,000)" : "Lien & Tenure Compliance Verified",
      explanation: fdr.verificationStatus === "MISMATCH"
        ? "Verification source (simulated) response reported ₹45,00,000 balance against ₹50,00,000 claimed."
        : "FDR tenor exceeds mandatory 60-month threshold and includes AICTE joint lien endorsement.",
      evidenceRefs: [
        {
          pageNumber: 1,
          fieldName: "amount",
          sourceText: `Extracted Claim: ₹${fdr.amount.toLocaleString("en-IN")} vs Gateway: ₹45,00,000`
        }
      ],
      nextRecommendedStep: fdr.verificationStatus === "MISMATCH"
        ? "Issue clarification notice to institution requesting reconciliation certificate."
        : "Proceed with scheduled compliance review."
    }
  ];

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

  const isApprovingAuthority = currentUser?.role === "APPROVING_AUTHORITY";
  const isCaseOfficer = currentUser?.role === "CASE_OFFICER" || currentUser?.role === "REVIEWER";

  const handleRevealToggle = async () => {
    const nextState = !isFdrRevealed;
    setIsFdrRevealed(nextState);
    if (nextState) {
      await recordFdrReveal(fdr.id, fdr.fdrNumber, "Officer unmasked FDR identifier for audit inspection");
    }
  };

  const handleDecisionSubmit = async () => {
    if (!decisionAction) return;
    if (!justification.trim()) {
      alert("Mandatory justification required for every consequential decision.");
      return;
    }

    if (isApprovingAuthority && (decisionAction === "Approve" || decisionAction === "Reject") && !showApprovalModal) {
      setShowApprovalModal(true);
      return;
    }

    setConcurrencyError(null);
    setIsSubmitting(true);
    const res = await recordDecision(
      c?.id || `case-${Date.now()}`,
      fdr.id,
      decisionAction,
      overrideAI,
      justification,
      fdr.record_version
    );
    setIsSubmitting(false);
    setShowApprovalModal(false);

    if (res?.error) {
      setConcurrencyError(res.error);
    } else {
      setDecisionSubmitted(true);
      setDecisionMessage(
        isApprovingAuthority
          ? `Statutory Decision recorded (${decisionAction}). Sealed in SHA-256 audit ledger.`
          : `Case recommendation submitted (${decisionAction}) for Approving Authority review.`
      );
    }
  };

  const handleTriggerReVerification = async () => {
    setIsReVerifying(true);
    await triggerReVerification(fdr.id);
    setIsReVerifying(false);
  };

  const findingsList = fdr.findings && fdr.findings.length > 0 ? fdr.findings : [
    {
      id: "fnd-1",
      code: fdr.verificationStatus === "MISMATCH" ? "AMOUNT_MISMATCH" : "REGULATORY_COMPLIANCE_VERIFIED",
      category: fdr.verificationStatus === "MISMATCH" ? "VERIFICATION" : "REGULATORY_COMPLIANCE",
      severity: fdr.verificationStatus === "MISMATCH" ? "CRITICAL" : "LOW",
      status: "OPEN",
      ruleId: "AICTE-APH-CH4-v2026.1",
      ruleVersion: "2026.1",
      title: fdr.verificationStatus === "MISMATCH" ? "Verification Source (Simulated) Amount Discrepancy (-₹5,00,000)" : "Lien & Tenure Compliance Verified",
      explanation: fdr.verificationStatus === "MISMATCH"
        ? "Verification source (simulated) response reported ₹45,00,000 balance against ₹50,00,000 claimed."
        : "FDR tenor exceeds mandatory 60-month threshold and includes AICTE joint lien endorsement.",
      evidenceRefs: [
        {
          pageNumber: 1,
          fieldName: "amount",
          sourceText: `Extracted Claim: ₹${fdr.amount.toLocaleString("en-IN")} vs Gateway: ₹45,00,000`
        }
      ],
      nextRecommendedStep: fdr.verificationStatus === "MISMATCH"
        ? "Issue clarification notice to institution requesting reconciliation certificate."
        : "Proceed with scheduled compliance review."
    }
  ];

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
                <span className="font-bold text-slate-900 text-base flex items-center space-x-1.5">
                  <span>{c?.caseNumber || "CASE-INSPECTION"} • {maskFdrNumber(fdr.fdrNumber, isFdrRevealed)}</span>
                  <button
                    type="button"
                    onClick={handleRevealToggle}
                    className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
                    title={isFdrRevealed ? "Mask FDR number" : "Reveal full FDR number (audit logged)"}
                  >
                    {isFdrRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
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
              <span>{isReVerifying ? "Querying Verification Source (Simulated)..." : "Query Verification Source API (Simulated)"}</span>
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
        {concurrencyError && (
          <div className="mb-4 p-3.5 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs font-bold flex items-center justify-between shadow-xs">
            <span>{concurrencyError}</span>
            <button type="button" onClick={() => window.location.reload()} className="underline text-blue-700 hover:text-blue-900 ml-4">
              Reload Latest Record
            </button>
          </div>
        )}
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
                    <span className="font-mono font-bold text-slate-900">{maskFdrNumber(fdr.fdrNumber, isFdrRevealed)}</span>
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

                {/* Bank Seal / Branch Stamp */}
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

          {/* PANE 2: DIGITAL TWIN (CLAIMS VS AUTHORITATIVE FACTS) (4 cols) */}
          <div className="lg:col-span-4 bg-white border rounded-2xl shadow-sm p-5 space-y-4 h-[750px] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-bold text-sm text-slate-900">FDR Digital Twin</h3>
                <p className="text-xs text-slate-500">Claims vs Verification Facts (Simulated)</p>
              </div>
              <div className="flex rounded-lg border bg-slate-100 p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("twin")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${activeTab === "twin" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                >
                  Twin
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("extracted")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${activeTab === "extracted" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                >
                  Fields ({fdr.extractedFields.length})
                </button>
              </div>
            </div>

            {activeTab === "twin" ? (
              <div className="space-y-3">
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 leading-relaxed">
                  <strong>Digital Twin Invariant:</strong> Extracted document values remain claims until verified. Discrepancies preserve both values side by side.
                </div>

                {[
                  { field: "amount", label: "Principal Amount", extracted: `₹${fdr.amount.toLocaleString("en-IN")}`, auth: fdr.verificationStatus === "MISMATCH" ? "₹45,00,000" : `₹${fdr.amount.toLocaleString("en-IN")}`, conflict: fdr.verificationStatus === "MISMATCH" },
                  { field: "fdrNumber", label: "FDR Number", extracted: maskFdrNumber(fdr.fdrNumber, isFdrRevealed), auth: maskFdrNumber(fdr.fdrNumber, isFdrRevealed), conflict: false },
                  { field: "maturityDate", label: "Maturity Date", extracted: fdr.maturityDate, auth: fdr.maturityDate, conflict: false },
                  { field: "jointBeneficiary", label: "Lien Holder", extracted: fdr.jointBeneficiary, auth: "Secretary AICTE", conflict: !fdr.jointBeneficiary.toLowerCase().includes("aicte") },
                  { field: "bankName", label: "Issuing Bank", extracted: fdr.bankName, auth: fdr.bankName, conflict: false }
                ].map(item => (
                  <div
                    key={item.field}
                    onClick={() => setActiveField(item.field)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      item.conflict
                        ? "bg-rose-50/70 border-rose-300 ring-1 ring-rose-300"
                        : activeField === item.field
                        ? "bg-blue-50/70 border-blue-400 ring-1 ring-blue-300"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-800">{item.label}</span>
                      {item.conflict ? (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 border border-rose-300 px-2 py-0.5 rounded-full">
                          Unresolved Conflict
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          Verification Match (Simulated)
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-between">
                          <span>Document Claim</span>
                          <span className="text-[8px] bg-slate-200 text-slate-700 px-1 rounded">Claim</span>
                        </div>
                        <div className="font-bold text-slate-900 truncate">{item.extracted}</div>
                      </div>
                      <div className={`p-2 rounded-lg border ${item.conflict ? "bg-rose-100/50 border-rose-200" : "bg-blue-50/50 border-blue-200"}`}>
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-between">
                          <span>Verification Fact (Simulated)</span>
                          <span className="text-[8px] bg-blue-100 text-blue-800 px-1 rounded">Gateway</span>
                        </div>
                        <div className={`font-bold truncate ${item.conflict ? "text-rose-900" : "text-slate-900"}`}>{item.auth}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
              {fdr.extractedFields.map(field => {
                const isSelected = activeField === field.fieldName;
                const isEditing = editingField === field.fieldName;
                const isMismatchField = fdr.verificationStatus === "MISMATCH" && field.fieldName === "amount";

                const findingsList = fdr.findings && fdr.findings.length > 0 ? fdr.findings : [
    {
      id: "fnd-1",
      code: fdr.verificationStatus === "MISMATCH" ? "AMOUNT_MISMATCH" : "REGULATORY_COMPLIANCE_VERIFIED",
      category: fdr.verificationStatus === "MISMATCH" ? "VERIFICATION" : "REGULATORY_COMPLIANCE",
      severity: fdr.verificationStatus === "MISMATCH" ? "CRITICAL" : "LOW",
      status: "OPEN",
      ruleId: "AICTE-APH-CH4-v2026.1",
      ruleVersion: "2026.1",
      title: fdr.verificationStatus === "MISMATCH" ? "Verification Source (Simulated) Amount Discrepancy (-₹5,00,000)" : "Lien & Tenure Compliance Verified",
      explanation: fdr.verificationStatus === "MISMATCH"
        ? "Verification source (simulated) response reported ₹45,00,000 balance against ₹50,00,000 claimed."
        : "FDR tenor exceeds mandatory 60-month threshold and includes AICTE joint lien endorsement.",
      evidenceRefs: [
        {
          pageNumber: 1,
          fieldName: "amount",
          sourceText: `Extracted Claim: ₹${fdr.amount.toLocaleString("en-IN")} vs Gateway: ₹45,00,000`
        }
      ],
      nextRecommendedStep: fdr.verificationStatus === "MISMATCH"
        ? "Issue clarification notice to institution requesting reconciliation certificate."
        : "Proceed with scheduled compliance review."
    }
  ];

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
                        Verification source (simulated) record states ₹45,00,000. (Discrepancy: -₹5,00,000).
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            )}
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
                {fdr.aiRecommendation?.rationale || "Review recommended based on verification source (simulated) findings."}
              </p>
              <div className="mt-3 pt-2.5 border-t border-blue-800/80 flex items-center justify-between text-[11px] text-blue-300">
                <span>Confidence: {((fdr.aiRecommendation?.confidence || 0.95) * 100).toFixed(0)}%</span>
                <span className="font-mono text-amber-300">{fdr.aiRecommendation?.applicableRuleId}</span>
              </div>
            </div>

            {/* Findings & Explainability Trace Card */}
            <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-xs font-bold uppercase text-slate-700 flex items-center space-x-1">
                  <ShieldAlert className="w-3.5 h-3.5 mr-1 text-rose-600" />
                  Findings & Trace ({findingsList.length})
                </span>
                <span className="text-[10px] text-slate-400">Click Why? for trace</span>
              </div>
              <div className="space-y-2">
                {findingsList.map((fnd) => (
                  <div key={fnd.id} className="p-3 rounded-xl border bg-slate-50 hover:bg-slate-100/80 transition-colors text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[10px] text-slate-700">{fnd.code}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                        fnd.severity === "CRITICAL" ? "bg-rose-100 text-rose-800" :
                        fnd.severity === "HIGH" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {fnd.severity}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-900 text-xs mt-1">{fnd.title}</div>
                    <p className="text-slate-600 text-[11px] mt-0.5 line-clamp-2">{fnd.explanation}</p>
                    <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono">Rule: {fnd.ruleId || "APH-2026"}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedFinding(fnd)}
                        className="text-[10px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 flex items-center space-x-1"
                      >
                        <HelpCircle className="w-3 h-3" />
                        <span>Why?</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Gauge */}
            <RiskScoreGauge assessment={fdr.riskAssessment} score={fdr.riskScore} level={fdr.riskLevel} />

            {/* Verification Status Card */}
            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-slate-600 flex items-center space-x-1">
                  <Building className="w-3.5 h-3.5 mr-1 text-blue-800" />
                  Verification Source (Simulated)
                </span>
                <StatusBadge status={fdr.verificationStatus} size="sm" />
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-xs text-slate-500">Source: {fdr.verification?.source || "Bank API Connector"}</p>
                {process.env.NEXT_PUBLIC_SHOW_DEMO_LABELS === "true" && (
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border">
                    Simulated source
                  </span>
                )}
              </div>
              {process.env.NEXT_PUBLIC_SHOW_DEMO_LABELS === "true" && (fdr.lifecycleStatus === "Release Eligible" || fdr.lifecycleStatus === "Refund Processing" || fdr.lifecycleStatus === "Released/Refunded") && (
                <div className="text-[11px] text-slate-500 italic mt-1.5 bg-slate-50 p-2 rounded border border-slate-200">
                  Notice: No funds are moved by this system. Review and regulatory clearance only.
                </div>
              )}
              
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

          {/* Action Buttons: Gated by Separation of Duties */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {isApprovingAuthority ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("Approve");
                    setJustification("Statutory approval granted: Deposit satisfies AICTE Chapter IV regulatory requirements.");
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
                  type="button"
                  onClick={() => {
                    setDecisionAction("Reject");
                    setJustification("Statutory rejection: Deposit non-compliant with regulatory norms.");
                  }}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "Reject"
                      ? "bg-rose-700 text-white ring-2 ring-rose-500"
                      : "bg-rose-600 hover:bg-rose-700 text-white"
                  }`}
                >
                  Reject Deposit
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("RECOMMEND_APPROVAL");
                    setJustification("Case Officer recommends approval: Verified against verification source (simulated).");
                  }}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "RECOMMEND_APPROVAL"
                      ? "bg-emerald-700 text-white ring-2 ring-emerald-500"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  Recommend Approval
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("REQUEST_INFORMATION");
                    setJustification("Clarification notice: Please provide bank certificate resolving discrepancy.");
                  }}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "REQUEST_INFORMATION"
                      ? "bg-amber-600 text-white ring-2 ring-amber-400"
                      : "bg-amber-500 hover:bg-amber-600 text-white"
                  }`}
                >
                  Request Info
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("MARK_EVIDENCE_INCORRECT");
                    setJustification("Scanned document glyph anomaly detected on numeric denomination.");
                  }}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "MARK_EVIDENCE_INCORRECT"
                      ? "bg-slate-700 text-white ring-2 ring-slate-500"
                      : "bg-slate-600 hover:bg-slate-700 text-white"
                  }`}
                >
                  Evidence Incorrect
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("ESCALATE");
                    setJustification("Case escalated to Vigilance Committee for in-depth inspection.");
                  }}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "ESCALATE"
                      ? "bg-purple-700 text-white ring-2 ring-purple-500"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  Escalate
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDecisionAction("RECOMMEND_REJECTION");
                    setJustification("Case Officer recommends rejection: Critical shortfall on security deposit requirement.");
                  }}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                    decisionAction === "RECOMMEND_REJECTION"
                      ? "bg-rose-700 text-white ring-2 ring-rose-500"
                      : "bg-rose-600 hover:bg-rose-700 text-white"
                  }`}
                >
                  Recommend Rejection
                </button>
              </>
            )}

            <button
              type="button"
              onClick={handleDecisionSubmit}
              disabled={isSubmitting || !decisionAction}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Recording..." : isApprovingAuthority ? "Confirm Decision" : "Submit Recommendation"}</span>
            </button>
          </div>
        </div>

        {decisionSubmitted && (
          <div className="max-w-7xl mx-auto mt-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded p-2 text-center animate-fade-in">
            ✓ {decisionMessage || "Decision successfully recorded in immutable SHA-256 hash-chained audit ledger."}
          </div>
        )}
      </div>

      {/* WHY? EXPLAINABILITY MODAL */}
      {selectedFinding && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-scale-in">
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="font-bold text-sm">Explainability Trace</h3>
                  <p className="text-[10px] text-slate-400 font-mono">Code: {selectedFinding.code}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFinding(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Finding Title</span>
                <p className="font-bold text-slate-900 text-sm">{selectedFinding.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-0.5">Severity</span>
                  <span className="font-bold text-slate-800">{selectedFinding.severity}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-0.5">Category</span>
                  <span className="font-bold text-slate-800">{selectedFinding.category}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Plain-Language Explanation</span>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {selectedFinding.explanation}
                </p>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5">
                <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider block">Regulatory Rule Reference</span>
                <div className="flex items-center justify-between text-blue-950 font-mono text-[11px]">
                  <span>Rule ID: {selectedFinding.ruleId || "AICTE-APH-CH4"}</span>
                  <span>Version: {selectedFinding.ruleVersion || "2026.1"}</span>
                </div>
              </div>

              {selectedFinding.evidenceRefs && selectedFinding.evidenceRefs.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Evidence Reference</span>
                  <div className="space-y-1.5">
                    {selectedFinding.evidenceRefs.map((ref: any, i: number) => (
                      <div key={i} className="p-2.5 bg-amber-50/60 border border-amber-200 rounded-lg text-amber-950 font-mono text-[11px]">
                        <div>Page: {ref.pageNumber || 1} • Field: {ref.fieldName || "N/A"}</div>
                        {ref.sourceText && <div className="mt-1 text-[10px] text-amber-900 font-sans">Snippet: &ldquo;{ref.sourceText}&rdquo;</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedFinding.nextRecommendedStep && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">Next Recommended Step</span>
                  <p className="text-emerald-800 text-xs font-medium">{selectedFinding.nextRecommendedStep}</p>
                </div>
              )}
            </div>

            <div className="px-5 py-3 bg-slate-50 border-t flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFinding(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Close Trace
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APPROVING AUTHORITY CONFIRMATION MODAL */}
      {showApprovalModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 p-6 space-y-4 animate-scale-in">
            <div className="flex items-center space-x-3 text-slate-900">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-900 font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Confirm Statutory Decision</h3>
                <p className="text-xs text-slate-500">Approving Authority Formal Adjudication</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5 text-slate-700">
              <div><strong>Action:</strong> {decisionAction} Deposit</div>
              <div><strong>FDR Reference:</strong> {fdr.fdrNumber}</div>
              <div><strong>Institution:</strong> {fdr.institutionName}</div>
              <div><strong>Mandatory Justification:</strong> {justification}</div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              By confirming, this decision is permanently sealed into the immutable cryptographic audit ledger under your statutory credentials ({currentUser.name}).
            </p>

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setShowApprovalModal(false)}
                className="px-4 py-2 border rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDecisionSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-950 text-white rounded-xl text-xs font-bold hover:bg-blue-900 shadow"
              >
                {isSubmitting ? "Sealing Decision..." : "Confirm & Seal Decision"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
