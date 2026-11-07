import { CaseRecord, FDRRecord } from "./types";
import { calculateSla } from "./formatters";

export interface PriorityBreakdown {
  totalScore: number;
  riskFactor: { score: number; weight: number; points: number };
  urgencyFactor: { score: number; weight: number; points: number; label: string };
  complianceFactor: { score: number; weight: number; points: number; label: string };
  exposureFactor: { score: number; weight: number; points: number; label: string };
  verificationFactor: { score: number; weight: number; points: number; label: string };
  formula: string;
}

export function computePriorityScore(c: CaseRecord, fdr?: FDRRecord): PriorityBreakdown {
  if (c.status === "Resolved") {
    return {
      totalScore: 10,
      riskFactor: { score: 8, weight: 0.35, points: 2.8 },
      urgencyFactor: { score: 0, weight: 0.25, points: 0, label: "Resolved" },
      complianceFactor: { score: 10, weight: 0.15, points: 1.5, label: "All Pass" },
      exposureFactor: { score: 30, weight: 0.15, points: 4.5, label: "Standard Slab" },
      verificationFactor: { score: 10, weight: 0.10, points: 1.0, label: "Match" },
      formula: "Resolved case (Low priority)"
    };
  }

  // 1. Risk Factor (0.35)
  const rawRisk = fdr?.riskScore || (c.priority === "Critical" ? 75 : c.priority === "High" ? 50 : 20);
  const riskPoints = rawRisk * 0.35;

  // 2. Urgency Factor (0.25) based on live SLA countdown
  const sla = calculateSla(c.slaDeadline, false);
  let urgencyRaw = 30;
  if (sla.state === "breached") urgencyRaw = 100;
  else if (sla.state === "due-soon") urgencyRaw = 95;
  else if (sla.totalMinutesLeft < 24 * 60) urgencyRaw = 65;
  const urgencyPoints = urgencyRaw * 0.25;

  // 3. Compliance Impact Factor (0.15)
  let complianceRaw = 20;
  let complianceLabel = "Compliant";
  if (fdr?.verificationStatus === "MISMATCH" || fdr?.riskLevel === "Critical") {
    complianceRaw = 100;
    complianceLabel = "Critical Rule Deficit";
  } else if (fdr?.lifecycleStatus === "Renewal Required") {
    complianceRaw = 75;
    complianceLabel = "Maturity <= 45d (RULE-FDR-EXP-003)";
  }
  const compliancePoints = complianceRaw * 0.15;

  // 4. Financial Exposure Factor (0.15)
  const amt = c.amount || fdr?.amount || 0;
  let exposureRaw = 40;
  let exposureLabel = "₹15L-₹25L";
  if (amt >= 10000000) {
    exposureRaw = 100;
    exposureLabel = ">= ₹1 Cr";
  } else if (amt >= 5000000) {
    exposureRaw = 85;
    exposureLabel = "₹50 Lakhs";
  } else if (amt >= 3500000) {
    exposureRaw = 65;
    exposureLabel = "₹35 Lakhs";
  }
  const exposurePoints = exposureRaw * 0.15;

  // 5. Verification Status Factor (0.10)
  let verifRaw = 10;
  let verifLabel = "MATCH";
  const vStat = fdr?.verificationStatus || "MATCH";
  if (vStat === "MISMATCH") {
    verifRaw = 100;
    verifLabel = "Bank CBS Mismatch";
  } else if (vStat === "REQUIRES HUMAN REVIEW") {
    verifRaw = 85;
    verifLabel = "Inspection Needed";
  } else if (vStat === "SOURCE UNAVAILABLE") {
    verifRaw = 70;
    verifLabel = "Gateway Offline";
  }
  const verifPoints = verifRaw * 0.10;

  const total = Math.min(100, Math.max(0, Math.round(
    riskPoints + urgencyPoints + compliancePoints + exposurePoints + verifPoints
  )));

  return {
    totalScore: total,
    riskFactor: { score: rawRisk, weight: 0.35, points: Math.round(riskPoints * 10) / 10 },
    urgencyFactor: { score: urgencyRaw, weight: 0.25, points: Math.round(urgencyPoints * 10) / 10, label: sla.label },
    complianceFactor: { score: complianceRaw, weight: 0.15, points: Math.round(compliancePoints * 10) / 10, label: complianceLabel },
    exposureFactor: { score: exposureRaw, weight: 0.15, points: Math.round(exposurePoints * 10) / 10, label: exposureLabel },
    verificationFactor: { score: verifRaw, weight: 0.10, points: Math.round(verifPoints * 10) / 10, label: verifLabel },
    formula: "Risk (35%) + Urgency (25%) + Compliance (15%) + Exposure (15%) + Verification (10%)"
  };
}
