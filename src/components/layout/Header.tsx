import React from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { HeroCanvas } from "../ui/HeroCanvas";
import { Printer } from "lucide-react";

// Custom Brand Icons remain unchanged...

export const Header: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="relative w-full py-10 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      {/* 3D Three.js Interactive Background Canvas */}
      <HeroCanvas />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Immediately Available • 0 Days Notice Period
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Janarthanan Soundhararajan
          </h1>
          <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400 mt-1">
            Senior Software Engineer{" "}
            <span className="text-slate-500 dark:text-slate-400 font-normal text-base">
              (with Solution Architect Responsibilities)
            </span>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Architecting scalable web and mobile applications, state boundaries
            (TanStack Query, Jotai), frontend-backend data contracts, and
            agentic AI integrations with nearly 10 years of enterprise
            experience.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 no-print">
          <ThemeToggle />

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-all shadow-sm shadow-cyan-500/20 cursor-pointer"
            title="Export clean PDF resume"
          >
            <Printer size={16} />
            <span>Save PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
