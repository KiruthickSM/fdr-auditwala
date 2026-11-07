"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShieldAlert, ArrowLeft, Home, Lock } from "lucide-react";
import { useStore } from "@/lib/store";

function ForbiddenContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const { currentUser } = useStore();

  const isTenantMismatch = reason === "tenant_mismatch";

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center mx-auto shadow-sm">
          {isTenantMismatch ? <Lock className="w-8 h-8" /> : <ShieldAlert className="w-8 h-8" />}
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full">
            HTTP 403 Forbidden
          </span>
          <h1 className="text-2xl font-black text-slate-900 mt-3">
            {isTenantMismatch ? "Tenant Boundary Isolation" : "Restricted Regulatory Access"}
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {isTenantMismatch
              ? "Security policy strictly isolates institutional records. Your institution account cannot access another institution's FDR files or audit dossiers."
              : `Your account role (${currentUser.role}) does not have administrative clearance to access this module or workflow.`}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-left space-y-1">
          <div className="font-bold text-slate-700">Active Principal Session:</div>
          <div className="text-slate-600 truncate">{currentUser.name} ({currentUser.email})</div>
          <div className="text-slate-500 font-mono text-[11px]">Role: {currentUser.role} {currentUser.institutionId ? `| Tenant: ${currentUser.institutionId}` : ""}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href={
              currentUser.role === "INSTITUTION"
                ? "/institution"
                : currentUser.role === "ADMIN"
                ? "/admin"
                : currentUser.role === "MANAGEMENT"
                ? "/management"
                : "/reviewer"
            }
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Authorized Home</span>
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
          >
            <span>Switch Account</span>
          </Link>
        </div>
      </div>
    </main>
  );
}


export default function ForbiddenPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading Access Verification...</div>}>
      <ForbiddenContent />
    </Suspense>
  );
}
