export function formatCurrencyFull(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return "₹0";
  return "₹" + amount.toLocaleString("en-IN");
}

export function formatCurrencyCompact(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return "₹0";
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2).replace(/\.00$/, "");
    return `₹${cr} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2).replace(/\.00$/, "");
    return `₹${lakh}L`;
  }
  return "₹" + amount.toLocaleString("en-IN");
}

export interface SlaInfo {
  label: string;
  state: "on-track" | "due-soon" | "breached" | "resolved";
  colorClass: string;
  totalMinutesLeft: number;
}

export function calculateSla(deadlineIso: string, isResolved = false): SlaInfo {
  if (isResolved) {
    return {
      label: "Closed in 2d 4h",
      state: "resolved",
      colorClass: "bg-slate-100 text-slate-700 border-slate-300",
      totalMinutesLeft: 999999
    };
  }

  const now = Date.now();
  const deadline = new Date(deadlineIso).getTime();
  const diffMs = deadline - now;
  const totalMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMs <= 0) {
    const overdueMinutes = Math.abs(totalMinutes);
    const days = Math.floor(overdueMinutes / (60 * 24));
    const hours = Math.floor((overdueMinutes % (60 * 24)) / 60);
    const label = days > 0 ? `Overdue by ${days}d ${hours}h` : `Overdue by ${hours}h`;
    return {
      label,
      state: "breached",
      colorClass: "bg-rose-50 text-rose-700 border-rose-300 font-semibold",
      totalMinutesLeft: totalMinutes
    };
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const days = Math.floor(hours / 24);

  // Due soon: < 6 hours remaining
  if (hours < 6) {
    const label = hours > 0 ? `Due in ${hours}h ${minutes}m` : `Due in ${minutes}m`;
    return {
      label,
      state: "due-soon",
      colorClass: "bg-amber-50 text-amber-700 border-amber-300 font-semibold",
      totalMinutesLeft: totalMinutes
    };
  }

  const label = days > 0 ? `Due in ${days}d ${hours}h` : `Due in ${hours}h ${minutes}m`;
  return {
    label,
    state: "on-track",
    colorClass: "bg-blue-50 text-blue-700 border-blue-200 font-medium",
    totalMinutesLeft: totalMinutes
  };
}
