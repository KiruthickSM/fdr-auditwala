import "./globals.css";
import React from "react";
import { StoreProvider } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { GuidedDemoBar } from "@/components/GuidedDemoBar";
import { IdleTimeoutModal } from "@/components/IdleTimeoutModal";

export const metadata = {
  title: "FDR AuditWala (FDRGuard) — AI-Powered FDR Lifecycle Platform",
  description: "AICTE Security Deposit and FDR Lifecycle Management & Decision-Support Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <StoreProvider>
          <Navbar />
          <GuidedDemoBar />
          <IdleTimeoutModal />
          <main className="flex-1">{children}</main>
          <footer className="bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-200">FDR AuditWala (FDRGuard)</span>
                <span>•</span>
                <span>Smart India Hackathon 2026</span>
                <span>•</span>
                <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold">AICTE CONTEXT</span>
              </div>
              <p className="text-center md:text-right text-slate-500">
                Core Principle: AI suggests & explains • Rules engine decides compliance • Human makes every consequential decision.
              </p>
            </div>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
