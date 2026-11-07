"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const IdleTimeoutModal: React.FC = () => {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(120);

  // 28 minutes = 1,680,000 ms
  // 30 minutes = 1,800,000 ms
  const WARNING_MS = 28 * 60 * 1000;
  const TIMEOUT_MS = 30 * 60 * 1000;

  const handleLogout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignore
    }
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      new BroadcastChannel("fdrguard_auth").postMessage({ type: "LOGOUT" });
    }
    router.push("/login?reason=session_expired");
  }, [router]);

  const extendSession = useCallback(async () => {
    setShowWarning(false);
    setSecondsRemaining(120);
    try {
      await fetch("/api/auth/session");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    let lastActivity = Date.now();
    let warningTimer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    const resetTimer = () => {
      lastActivity = Date.now();
      if (showWarning) {
        setShowWarning(false);
      }
    };

    const checkIdle = () => {
      const now = Date.now();
      const elapsed = now - lastActivity;

      if (elapsed >= TIMEOUT_MS) {
        handleLogout();
      } else if (elapsed >= WARNING_MS && !showWarning) {
        setShowWarning(true);
        const msLeft = TIMEOUT_MS - elapsed;
        setSecondsRemaining(Math.max(1, Math.floor(msLeft / 1000)));
      }
    };

    const interval = setInterval(checkIdle, 5000);

    // Activity listeners
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    events.forEach(e => window.addEventListener(e, resetTimer));

    // Multi-tab logout listener
    let bc: BroadcastChannel | null = null;
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      bc = new BroadcastChannel("fdrguard_auth");
      bc.onmessage = (event) => {
        if (event.data?.type === "LOGOUT") {
          router.push("/login");
        }
      };
    }

    return () => {
      clearInterval(interval);
      events.forEach(e => window.removeEventListener(e, resetTimer));
      if (bc) bc.close();
    };
  }, [handleLogout, showWarning, router]);

  // Countdown timer when warning modal is active
  useEffect(() => {
    if (!showWarning) return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          handleLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showWarning, handleLogout]);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-6 text-center space-y-4 animate-scaleUp">
        <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Clock className="w-6 h-6 animate-pulse" />
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900">Regulatory Session Expiring</h2>
          <p className="text-xs text-slate-600 mt-1">
            For compliance, inactive regulatory sessions automatically lock. Your session will close in:
          </p>
          <div className="text-3xl font-black text-rose-700 font-mono mt-2">
            {Math.floor(secondsRemaining / 60)}:{(secondsRemaining % 60).toString().padStart(2, "0")}
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <button
            onClick={extendSession}
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs py-2.5 rounded-lg shadow-sm transition-colors"
          >
            Stay Signed In
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-lg transition-colors"
          >
            Sign Out Now
          </button>
        </div>
      </div>
    </div>
  );
};
