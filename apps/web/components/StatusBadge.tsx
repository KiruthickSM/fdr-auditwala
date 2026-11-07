"use client";
import React from "react";
import { CheckCircle2, Clock, AlertTriangle, AlertOctagon, ShieldCheck, HelpCircle } from "lucide-react";
import { LifecycleState, VerificationStatus, RiskLevel, AuthenticityLevel } from "@/lib/types";

interface StatusBadgeProps {
  status: LifecycleState | VerificationStatus | RiskLevel | AuthenticityLevel | string;
  size?: "sm" | "md" | "lg";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "md" }) => {
  let bg = "bg-slate-100 text-slate-800 border-slate-300";
  let icon = <HelpCircle className="w-3.5 h-3.5 mr-1" />;

  // Lifecycle states
  if (status === "Active" || status === "Verified" || status === "Compliant" || status === "MATCH") {
    bg = "bg-emerald-50 text-emerald-800 border-emerald-300";
    icon = <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />;
  } else if (status === "Under Review" || status === "Validation Pending" || status === "Verification Pending" || status === "In Review") {
    bg = "bg-blue-50 text-blue-800 border-blue-300";
    icon = <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />;
  } else if (status === "Maturity Approaching" || status === "Renewal Required" || status === "Review recommended" || status === "PARTIAL MATCH" || status === "Medium") {
    bg = "bg-amber-50 text-amber-800 border-amber-300";
    icon = <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-600" />;
  } else if (status === "MISMATCH" || status === "High concern" || status === "Critical" || status === "High" || status === "Action Required") {
    bg = "bg-rose-50 text-rose-800 border-rose-300";
    icon = <AlertOctagon className="w-3.5 h-3.5 mr-1 text-rose-600" />;
  } else if (status === "Release Eligible" || status === "Refund Processing" || status === "Released/Refunded") {
    bg = "bg-purple-50 text-purple-800 border-purple-300";
    icon = <ShieldCheck className="w-3.5 h-3.5 mr-1 text-purple-600" />;
  }

  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : size === "lg" ? "text-sm px-3.5 py-1.5" : "text-xs px-2.5 py-1";

  return (
    <span className={`inline-flex items-center font-medium rounded-full border ${bg} ${sizeClasses}`}>
      {icon}
      <span>{status}</span>
    </span>
  );
};
