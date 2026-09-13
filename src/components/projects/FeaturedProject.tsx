import React from "react";
import { CalendarDays, ExternalLink, GitBranch, TestTube2 } from "lucide-react";

export const FeaturedProject: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-6"
    >
      <div className="mb-6">
        <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
          Portfolio project • In progress
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              SlotSyncro
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
              A timezone-aware scheduling and group-availability platform built
              as an independent portfolio product.
            </p>
          </div>
          <a
            href="https://github.com/TechAaroorian/slotsyncro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
          >
            View source <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <CalendarDays size={19} className="mb-3 text-cyan-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Scheduling domain
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Implements recurring availability, event types, timezone-aware slot
            calculation, conflict checks, and direct booking workflows.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <GitBranch size={19} className="mb-3 text-emerald-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Product architecture
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Uses Next.js App Router, TypeScript, Turborepo, PostgreSQL, Prisma,
            Auth.js, Server Actions, and documented modular boundaries.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <TestTube2 size={19} className="mb-3 text-indigo-500" />
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            Engineering quality
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Covers domain logic with Vitest and React Testing Library, supported
            by GitHub Actions coverage reporting and architecture records.
          </p>
        </article>
      </div>
    </section>
  );
};
