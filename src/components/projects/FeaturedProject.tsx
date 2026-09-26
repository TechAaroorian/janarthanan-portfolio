import React from "react";
import {
  CalendarDays,
  ExternalLink,
  GitBranch,
  TestTube2,
  Sparkles,
  Share2,
  Layers,
} from "lucide-react";

export const FeaturedProject: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-6"
    >
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Open-source developer tooling and scalable full-stack web applications.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Project 1: Yuwbrndr (Open Source) */}
        <div className="p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-white via-cyan-50/20 to-white dark:from-slate-900 dark:via-cyan-950/10 dark:to-slate-900 shadow-xs hover:border-cyan-500/40 transition-all">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open Source (MIT)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Live Studio
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  29 Vitest Tests
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>Yuwbrndr</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-mono">
                  — Design by Code · Design to All
                </span>
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Open-source, browser-native studio transforming HTML, Tailwind CSS, and Rough.js into high-resolution social graphics and multi-slide LinkedIn carousels with zero backend dependencies.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://techaaroorian.github.io/yuwbrndr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-700 text-white transition-all shadow-xs cursor-pointer"
              >
                <span>Live Studio</span>
                <ExternalLink size={13} />
              </a>
              <a
                href="https://github.com/TechAaroorian/yuwbrndr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-3 mt-4">
            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900/80">
              <Sparkles size={18} className="mb-2 text-cyan-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Browser-Native Engine
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Live CodeMirror 6 editor with Tailwind CSS and Rough.js hand-drawn whiteboard art with 16ms canvas renders.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900/80">
              <Layers size={18} className="mb-2 text-indigo-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Multi-Slide PDF Carousels
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Direct export to high-DPI multi-page PDF documents for LinkedIn and numbered PNG zip archives for X/Twitter.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900/80">
              <Share2 size={18} className="mb-2 text-emerald-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Zero-Server URL Sharing
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                100% client-side state compression into URL hashes using native <code className="text-[11px] font-mono">CompressionStream</code> for private, database-free sharing.
              </p>
            </article>
          </div>
        </div>

        {/* Project 2: SlotSyncro */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                  Portfolio Project • In Progress
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  Full-Stack Architecture
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>SlotSyncro</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400 font-mono">
                  — Timezone-Aware Scheduling Platform
                </span>
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Timezone-aware scheduling and availability platform built with Next.js App Router, PostgreSQL, Prisma ORM, and domain-isolated testing.
              </p>
            </div>

            <a
              href="https://github.com/TechAaroorian/slotsyncro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0 cursor-pointer"
            >
              <span>View source</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-3 mt-4">
            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
              <CalendarDays size={18} className="mb-2 text-cyan-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Scheduling Domain
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Implements recurring availability, event types, timezone-aware slot calculation, conflict checks, and direct booking workflows.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
              <GitBranch size={18} className="mb-2 text-emerald-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Product Architecture
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Uses Next.js App Router, TypeScript, Turborepo, PostgreSQL, Prisma, Auth.js, Server Actions, and modular boundaries.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-3.5 dark:border-slate-800 dark:bg-slate-900">
              <TestTube2 size={18} className="mb-2 text-indigo-500" />
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                Engineering Quality
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Covers domain logic with Vitest and React Testing Library, supported by GitHub Actions coverage reporting.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
