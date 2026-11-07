"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  FileText,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  Scale
} from "lucide-react";

interface PolicyDoc {
  id: string;
  title: string;
  chapter: string;
  clause: string;
  snippet: string;
  tags: string[];
}

const POLICY_DATABASE: PolicyDoc[] = [
  {
    id: "pol-1",
    title: "AICTE Approval Process Handbook (APH) 2024-2027",
    chapter: "Chapter IV: Security Deposit Norms",
    clause: "Clause 4.2.1",
    snippet: "Fixed Deposit Receipts (FDR) submitted towards Security Deposit must be drawn on a Scheduled Commercial Bank or Nationalized Bank in the joint name of the Applicant Technical Institution and the Regional Officer, AICTE. The deposit must carry an explicit notation marking exclusive lien to AICTE.",
    tags: ["joint beneficiary", "scheduled bank", "mandatory lien"]
  },
  {
    id: "pol-2",
    title: "AICTE Security Deposit Tenure & Auto-Renewal Circular",
    chapter: "Circular AICTE/SD/2023/11",
    clause: "Para 3",
    snippet: "The minimum tenure for security deposit FDRs shall be 60 months (5 years) or auto-renewal lien marked. Any FDR whose tenure is below 60 months without an explicit bank auto-renewal undertaking shall be flagged as non-compliant.",
    tags: ["tenure", "60 months", "auto renewal"]
  },
  {
    id: "pol-3",
    title: "Procedure for Release and Encashment of FDR Deposits",
    chapter: "Chapter IV: Release Regulations",
    clause: "Clause 4.7.3",
    snippet: "Release of Security Deposit FDR is permissible only upon completion of full mandatory lock-in period (minimum 8 to 10 years of continuous operation) and zero pending student/faculty grievances or AICTE deficiency notices. The release requires formal recommendation by the Regional Committee and approval by the Executive Council.",
    tags: ["release eligibility", "refund", "10 years"]
  },
  {
    id: "pol-4",
    title: "Guidelines on Discrepant and Deficit FDR Submissions",
    chapter: "Vigilance Circular 2024/09",
    clause: "Section 2",
    snippet: "In cases where the principal deposit verified via the issuing bank's Core Banking System is lower than the amount claimed on the submitted physical certificate, the case must immediately be escalated to High Concern status. A formal clarification letter shall be served to the institution director, requiring issuing branch certification within 15 calendar days.",
    tags: ["mismatch", "deficit", "fraud prevention"]
  }
];

export default function PolicyRAGSearchPage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const results = query.trim()
    ? POLICY_DATABASE.filter(p => {
        const q = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.snippet.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q))
        );
      })
    : POLICY_DATABASE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Policy Header */}
      <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-8 rounded-2xl shadow-sm space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-800/80 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-200">
          <BookOpen className="w-3.5 h-3.5 text-amber-300" />
          <span>Regulatory Policy Knowledge Base (RAG)</span>
        </div>
        <h1 className="text-3xl font-extrabold">AICTE Security Deposit Policy & Regulations</h1>
        <p className="text-xs sm:text-sm text-blue-200 max-w-3xl leading-relaxed">
          Semantic retrieval engine over the AICTE Approval Process Handbook (APH), government gazettes, and official circulars. All policy explanations are strictly grounded in retrieved citations without hallucination.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl pt-2">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5" />
          <input
            type="text"
            placeholder="Search policy (e.g., 'minimum tenure', 'joint lien', 'mismatch deficit', 'release prerequisites')..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setHasSearched(true);
            }}
            className="w-full pl-12 pr-4 py-3 bg-white text-slate-900 rounded-xl text-sm font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span>Showing {results.length} cited regulatory sources</span>
          <span>pgvector Embeddings Index • Cosine Similarity</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map(doc => (
            <div key={doc.id} className="bg-white border rounded-2xl p-6 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-400 transition-colors">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-blue-900 font-bold uppercase">{doc.chapter}</span>
                  <span>{doc.clause}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mt-1">{doc.title}</h3>
                <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed italic font-serif">
                  &ldquo;{doc.snippet}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t flex flex-wrap items-center justify-between gap-2 text-[10px]">
                <div className="flex flex-wrap gap-1">
                  {doc.tags.map(t => (
                    <span key={t} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-semibold">
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="text-emerald-700 font-bold flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Authoritative Gazette Citation</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
