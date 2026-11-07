import "./globals.css";
import React from "react";
import { StoreProvider } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { GuidedDemoBar } from "@/components/GuidedDemoBar";
import { IdleTimeoutModal } from "@/components/IdleTimeoutModal";

export const metadata = {
  title: "FDR AuditWala",
  description: "AI-powered FDR lifecycle intelligence and decision support",
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
          <footer className="bg-slate-900 text-slate-400 text-xs py-4 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
              FDR AuditWala · AI-powered FDR lifecycle intelligence
            </div>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
