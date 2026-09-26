import React from "react";
import { Cpu, Layers, GitBranch, Terminal } from "lucide-react";

export const Summary: React.FC = () => {
  const highlightPillars = [
    {
      icon: <Layers size={18} className="text-cyan-500" />,
      title: "Modern Frontend Engineering",
      description:
        "React, TypeScript, Next.js, TanStack (Query, Router, Start), Jotai, Tailwind CSS",
    },
    {
      icon: <GitBranch size={18} className="text-emerald-500" />,
      title: "System & State Boundaries",
      description:
        "Modular Monoliths (Modulith), Microservices, API Contracts, Decoupled State Engines",
    },
    {
      icon: <Terminal size={18} className="text-amber-500" />,
      title: "Agentic AI Alignment",
      description:
        "Repository Context Engineering (CLAUDE.md, .amazonq), Claude Code, Amazon Q",
    },
    {
      icon: <Cpu size={18} className="text-indigo-500" />,
      title: "Testing & Full-Stack Reliability",
      description:
        "React Testing Library, Mock Service Worker (MSW), PostgreSQL, Prisma ORM",
    },
  ];

  return (
    <section
      id="summary"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Professional Summary
        </h2>
        <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">
          Senior Software Engineer • Solution Architecture Responsibilities • Nearly 10 Years
          Experience
        </p>
      </div>

      {/* Narrative Summary */}
      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
        Senior Software Engineer with solution architecture responsibilities and ~10 years building enterprise web products. Specializes in React, TypeScript, Next.js, and the TanStack ecosystem, designing decoupled state boundaries, modular monoliths (modulith), and microservice data contracts. Creator of open-source developer tools (Yuwbrndr) and full-stack web platforms (SlotSyncro). Delivers production reliability using PostgreSQL, Prisma ORM, automated testing (Vitest, RTL, MSW), and agentic AI workflows with strict code ownership.
      </p>

      {/* Interactive Feature Cards for Web View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 no-print">
        {highlightPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs hover:border-cyan-500/50 transition-all"
          >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
              {pillar.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
