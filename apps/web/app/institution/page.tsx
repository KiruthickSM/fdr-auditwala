"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { StatusBadge } from "@/components/StatusBadge";
import { ControlledMultiAgentPipeline, AgentStepTrace } from "@/lib/langgraphEngine";
import {
  Building2,
  Upload,
  Plus,
  AlertCircle,
  Clock,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldAlert,
  Loader2,
  Sparkles,
  Edit2
} from "lucide-react";

export default function InstitutionPage() {
  const { fdrs, institutions, currentUser, submitNewFDR } = useStore();
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3>(1);

  // Wizard form state
  const [selectedPreset, setSelectedPreset] = useState<string>("custom");
  const [fileName, setFileName] = useState("FDR_Deposit_Certificate.pdf");
  const [fdrNumber, setFdrNumber] = useState("FDR-SBI-2026-99210");
  const [amount, setAmount] = useState(3500000);
  const [bankName, setBankName] = useState("State Bank of India");
  const [branchName, setBranchName] = useState("Bengaluru Main Branch");
  const [issueDate, setIssueDate] = useState("2026-03-01");
  const [maturityDate, setMaturityDate] = useState("2031-03-01");
  const [beneficiary, setBeneficiary] = useState("Aryabhata Institute of Technology & Engineering");
  const [jointBeneficiary, setJointBeneficiary] = useState("Regional Officer AICTE");

  // Multi-agent progress state
  const [isRunningPipeline, setIsRunningPipeline] = useState(false);
  const [agentTraces, setAgentTraces] = useState<AgentStepTrace[]>([]);
  const [createdFdrId, setCreatedFdrId] = useState<string | null>(null);

  // Tenant isolation & current institution resolution
  const targetInstId = currentUser.institutionId || "inst-2";
  const currentInstitution = institutions.find(i => i.id === targetInstId) || institutions[1];
  const myFdrs = fdrs.filter(f => f.institutionId === targetInstId);

  const totalDeposit = myFdrs.reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const activeCount = myFdrs.filter(f => f.lifecycleStatus === "Active").length;
  const pendingCount = myFdrs.filter(f => f.lifecycleStatus !== "Active" && f.lifecycleStatus !== "Closed").length;

  // Handle preset document files
  const applyPreset = (preset: string) => {
    setSelectedPreset(preset);
    if (preset === "clean_sbi") {
      setFileName("SBI_Clean_Deposit_35L.pdf");
      setFdrNumber("FDR-SBI-2026-88120");
      setAmount(3500000);
      setBankName("State Bank of India");
      setBranchName("Koramangala Branch, Bengaluru");
    } else if (preset === "mismatch_pnb") {
      setFileName("PNB_Amount_Altered_50L.pdf");
      setFdrNumber("FDR-PNB-MISMATCH-9981");
      setAmount(5000000);
      setBankName("Punjab National Bank");
      setBranchName("Ashram Road Branch, Ahmedabad");
    } else if (preset === "expiring_bob") {
      setFileName("BOB_Maturing_Within_20_Days.pdf");
      setFdrNumber("FDR-BOB-2019-44120");
      setAmount(5000000);
      setBankName("Bank of Baroda");
      setBranchName("Hazratganj Branch, Lucknow");
      setMaturityDate("2026-11-25");
    }
  };

  const handleStartExtraction = () => {
    setWizardStep(2);
  };

  const handleRunAgentPipeline = async () => {
    setWizardStep(3);
    setIsRunningPipeline(true);
    setAgentTraces([]);

    try {
      const result = await ControlledMultiAgentPipeline.runPipeline(
        {
          fdrNumber,
          amount,
          bankName,
          branchName,
          issueDate,
          maturityDate,
          beneficiary,
          jointBeneficiary,
          documentFileName: fileName,
          institutionId: currentUser.institutionId || "inst-1",
          institutionName: beneficiary
        },
        (trace) => {
          setAgentTraces(prev => [...prev, trace]);
        }
      );

      // Save to store
      const newRecord = await submitNewFDR({
        fdrNumber,
        amount,
        bankName,
        branchName,
        issueDate,
        maturityDate,
        beneficiary,
        jointBeneficiary,
        documentFileName: fileName,
        extractedFields: result.extractedFields
      });

      setCreatedFdrId(newRecord.id);
      setIsRunningPipeline(false);
    } catch (e) {
      console.error(e);
      setIsRunningPipeline(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xl">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-slate-900">{currentInstitution?.name || "Institution FDR Management"}</h1>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                AICTE Compliant
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Permanent Approval ID: AICTE-1-4920191 • South Western Regional Office (SWRO)
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setIsWizardOpen(true);
            setWizardStep(1);
            setCreatedFdrId(null);
            setAgentTraces([]);
          }}
          className="flex items-center justify-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl shadow transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Submit New FDR Certificate</span>
        </button>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Custody Value</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">
            ₹{(totalDeposit / 100000).toFixed(2)} Lakhs
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Locked under joint lien to AICTE</span>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Verified FDRs</span>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1">
            {activeCount} Records
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Compliant with Chapter IV regulations</span>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Review / Action</span>
          <div className="text-2xl font-extrabold text-amber-600 mt-1">
            {pendingCount} Items
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Under inspection or renewal processing</span>
        </div>
      </div>

      {/* My FDRs Table */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Registered Security Deposits</h3>
            <p className="text-xs text-slate-500">Official fixed deposit receipts held in trust by AICTE</p>
          </div>
          <span className="text-xs text-slate-600 font-medium">Showing {myFdrs.length} FDRs</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b text-slate-600 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">FDR / Certificate No</th>
                <th className="py-3 px-4">Issuing Bank & Branch</th>
                <th className="py-3 px-4">Principal Amount</th>
                <th className="py-3 px-4">Maturity Date</th>
                <th className="py-3 px-4">Lifecycle Status</th>
                <th className="py-3 px-4">Verification</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              {myFdrs.map(fdr => {
                const daysLeft = Math.ceil(
                  (new Date(fdr.maturityDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                return (
                  <tr key={fdr.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{fdr.fdrNumber}</div>
                      <div className="text-[11px] text-slate-400">{fdr.documentFileName}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-800">{fdr.bankName}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-[180px]">{fdr.branchName}</div>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      ₹{fdr.amount.toLocaleString("en-IN")}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{fdr.maturityDate}</div>
                      <div className={`text-[10px] font-semibold ${daysLeft <= 45 ? "text-amber-600" : "text-slate-400"}`}>
                        {daysLeft > 0 ? `${daysLeft} days remaining` : `Expired ${Math.abs(daysLeft)}d ago`}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={fdr.lifecycleStatus} size="sm" />
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={fdr.verificationStatus} size="sm" />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/fdr/${fdr.id}`}
                        className="inline-flex items-center space-x-1 text-blue-700 hover:text-blue-900 font-semibold text-xs"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3-STEP SUBMISSION WIZARD MODAL */}
      {isWizardOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">FDR Submission & Document AI Pipeline</h3>
                <p className="text-xs text-slate-400">Step {wizardStep} of 3</p>
              </div>
              <button
                onClick={() => setIsWizardOpen(false)}
                className="text-slate-400 hover:text-white text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            {/* Step Progress Bar */}
            <div className="grid grid-cols-3 bg-slate-100 text-center text-xs font-semibold py-2.5 border-b">
              <div className={wizardStep === 1 ? "text-blue-900 font-bold" : "text-slate-500"}>
                1. Upload Document
              </div>
              <div className={wizardStep === 2 ? "text-blue-900 font-bold" : "text-slate-500"}>
                2. Review Extractions
              </div>
              <div className={wizardStep === 3 ? "text-blue-900 font-bold" : "text-slate-500"}>
                3. Multi-Agent Run
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 flex-1">
              {/* STEP 1: UPLOAD */}
              {wizardStep === 1 && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors bg-slate-50">
                    <Upload className="w-8 h-8 mx-auto text-blue-900 mb-2" />
                    <p className="text-sm font-semibold text-slate-800">Drop your signed FDR Certificate PDF</p>
                    <p className="text-xs text-slate-500 mt-1">Supports PDF, TIFF, scanned images up to 25MB</p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 uppercase">
                      Or Select Sample Document Preset
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => applyPreset("clean_sbi")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPreset === "clean_sbi" ? "border-blue-700 bg-blue-50 font-bold" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-slate-900">Clean SBI ₹35L</div>
                        <div className="text-slate-500 text-[11px]">100% verified match</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => applyPreset("mismatch_pnb")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPreset === "mismatch_pnb" ? "border-rose-700 bg-rose-50 font-bold" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-slate-900">Altered PNB ₹50L</div>
                        <div className="text-rose-600 text-[11px]">Bank CBS mismatch trigger</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => applyPreset("expiring_bob")}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPreset === "expiring_bob" ? "border-amber-700 bg-amber-50 font-bold" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-slate-900">Expiring BOB ₹50L</div>
                        <div className="text-amber-600 text-[11px]">Maturity &lt; 20 days</div>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">File Name</label>
                      <input
                        type="text"
                        value={fileName}
                        onChange={e => setFileName(e.target.value)}
                        className="w-full border rounded-lg p-2 text-xs text-slate-800 bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: REVIEW EXTRACTED FIELDS */}
              {wizardStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900 flex items-start space-x-2">
                    <Sparkles className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>
                      AI Document Intelligence has pre-extracted 8 key attributes. Review and verify values before running regulatory compliance.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">FDR / Certificate No</label>
                      <input
                        type="text"
                        value={fdrNumber}
                        onChange={e => setFdrNumber(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                      <span className="text-[10px] text-emerald-600 font-semibold">OCR Confidence: 98%</span>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Principal Amount (INR)</label>
                      <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        className="w-full border rounded-lg p-2 bg-white font-bold"
                      />
                      <span className="text-[10px] text-emerald-600 font-semibold">OCR Confidence: 95%</span>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Issuing Bank</label>
                      <input
                        type="text"
                        value={bankName}
                        onChange={e => setBankName(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Branch Name</label>
                      <input
                        type="text"
                        value={branchName}
                        onChange={e => setBranchName(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Issue Date</label>
                      <input
                        type="date"
                        value={issueDate}
                        onChange={e => setIssueDate(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Maturity Date</label>
                      <input
                        type="date"
                        value={maturityDate}
                        onChange={e => setMaturityDate(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="font-semibold text-slate-700 block mb-1">Primary Beneficiary</label>
                      <input
                        type="text"
                        value={beneficiary}
                        onChange={e => setBeneficiary(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="font-semibold text-slate-700 block mb-1">Mandatory Joint Holder (AICTE)</label>
                      <input
                        type="text"
                        value={jointBeneficiary}
                        onChange={e => setJointBeneficiary(e.target.value)}
                        className="w-full border rounded-lg p-2 bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: MULTI-AGENT EXECUTION */}
              {wizardStep === 3 && (
                <div className="space-y-4">
                  <div className="text-center py-2">
                    {isRunningPipeline ? (
                      <div className="flex flex-col items-center space-y-2">
                        <Loader2 className="w-8 h-8 text-blue-900 animate-spin" />
                        <h4 className="font-bold text-sm text-slate-900">Executing Multi-Agent Decision Graph</h4>
                        <p className="text-xs text-slate-500">Running Document Intelligence, Core Banking verification & regulatory rules...</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-2">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        <h4 className="font-bold text-sm text-slate-900">Analysis Complete & Submitted</h4>
                        <p className="text-xs text-slate-500">FDR record created and routed to Reviewer Inbox.</p>
                      </div>
                    )}
                  </div>

                  {/* Step Traces Feed */}
                  <div className="bg-slate-950 text-slate-200 rounded-xl p-4 space-y-2 font-mono text-xs max-h-56 overflow-y-auto">
                    {agentTraces.map((t, i) => (
                      <div key={i} className="border-b border-slate-800 pb-2 last:border-0">
                        <div className="flex items-center justify-between text-slate-400 text-[10px]">
                          <span className="text-amber-400 font-bold">[{t.agent}]</span>
                          <span>{t.durationMs}ms</span>
                        </div>
                        <div className="text-slate-100 font-semibold mt-0.5">{t.action}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{t.outputSummary}</div>
                      </div>
                    ))}
                  </div>

                  {createdFdrId && (
                    <div className="text-center pt-2">
                      <Link
                        href={`/fdr/${createdFdrId}`}
                        onClick={() => setIsWizardOpen(false)}
                        className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs shadow"
                      >
                        <span>View Newly Created FDR Record</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-slate-50 border-t px-6 py-3 flex items-center justify-between">
              {wizardStep > 1 && wizardStep < 3 && (
                <button
                  onClick={() => setWizardStep(1)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Back to Upload
                </button>
              )}
              {wizardStep === 1 && <div />}

              {wizardStep === 1 && (
                <button
                  onClick={handleStartExtraction}
                  className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow"
                >
                  Continue to Field Extraction
                </button>
              )}

              {wizardStep === 2 && (
                <button
                  onClick={handleRunAgentPipeline}
                  className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow flex items-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run Verification & Submit</span>
                </button>
              )}

              {wizardStep === 3 && !isRunningPipeline && (
                <button
                  onClick={() => setIsWizardOpen(false)}
                  className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
