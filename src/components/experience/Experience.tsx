import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

interface Role {
  title: string;
  officialTitleNote?: string;
  company: string;
  period: string;
  location: string;
  highlights: {
    category: string;
    description: string;
    tags?: string[];
  }[];
}

const experiences: Role[] = [
  {
    title: "Senior Software Engineer",
    officialTitleNote:
      "Functional Scope: Solution Architect & Lead Frontend Engineer",
    company: "OneData Software Solutions Pvt. Ltd",
    period: "Jan 2020 – July 2026",
    location: "India",
    highlights: [
      {
        category: "Architectural Leadership (2024 – 2026)",
        description:
          "Appointed to drive end-to-end technical blueprints, establish scalable frontend architectures, and select modern tech stacks (Next.js, Turbopack, TanStack Query) that cleanly interface with backend microservices.",
        tags: [
          "Solution Architecture",
          "Next.js",
          "Turbopack",
          "Tech Stack Selection",
        ],
      },
      {
        category: "System Integration & Data Contracts",
        description:
          "Leveraged deep background in monoliths, modular monoliths (moduliths), and microservices to design decoupled data contracts between frontend apps and backend service components.",
        tags: [
          "Modulith",
          "Microservices",
          "API Data Contracts",
          "State Boundaries",
        ],
      },
      {
        category: "AI Workspace & Context Engineering",
        description:
          "Configured project-level AI rules within CLAUDE.md and .amazonq repository settings, guiding autonomous AI agents (Claude Code, Amazon Q, Copilot) to strictly respect system boundaries and existing folder structures.",
        tags: ["CLAUDE.md", ".amazonq", "Claude Code", "Agentic AI Workflows"],
      },
      {
        category: "Frontend & Mobile Engineering",
        description:
          "Architected web and mobile applications using React, Next.js, and React Native. Implemented TanStack Query and Jotai to handle server-state caching cleanly and eliminate unnecessary global state overhead.",
        tags: [
          "React JS",
          "Next.js",
          "React Native",
          "TanStack Query",
          "Jotai",
        ],
      },
      {
        category: "Product & Client Coordination",
        description:
          "Engineered solution specifications directly with client stakeholders, mapping business requirements into technical task breakdowns and leading feature delivery end-to-end.",
        tags: [
          "Technical Specifications",
          "Client Leadership",
          "Task Breakdown",
        ],
      },
      {
        category: "Testing & Release Stability",
        description:
          "Established local test automation strategies using React Testing Library (RTL) and Mock Service Worker (MSW) to isolate frontend testing and mock backend API responses for zero-friction deployments.",
        tags: ["React Testing Library", "MSW", "E2E Testing", "Mock Services"],
      },
    ],
  },
  {
    title: "Associate Developer",
    company: "OneData Software Solutions Pvt. Ltd",
    period: "Dec 2016 – Dec 2019",
    location: "India",
    highlights: [
      {
        category: "Backend & Database Foundations",
        description:
          "Built a strong backend foundation by engineering server-side business logic (Scala, Node.js), managing database indexing, and optimizing data persistence schemas using MySQL.",
        tags: ["Scala", "MySQL", "Database Indexing", "Server Logic"],
      },
      {
        category: "Frontend Evolution",
        description:
          "Transitioned core technical focus toward interactive user interfaces, asynchronous state flows, and modern JavaScript/React frontend frameworks during the latter half of tenure.",
        tags: ["React JS", "JavaScript (ES6+)", "Redux", "UI Logic"],
      },
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Enterprise achievements, system design milestones, and engineering
            impact.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((role, idx) => (
          <div
            key={idx}
            className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 bg-cyan-500" />

            {/* Header / Role Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {role.title}
                </h3>

                {role.officialTitleNote && (
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 flex items-center gap-1">
                    <ShieldCheck size={13} className="shrink-0" />
                    <span>{role.officialTitleNote}</span>
                  </p>
                )}

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5 flex items-center gap-1.5">
                  <Briefcase size={14} className="text-slate-400" />
                  <span>{role.company}</span>
                </p>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {role.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} />
                  {role.location}
                </span>
              </div>
            </div>

            {/* Detailed Bullet Points */}
            <div className="space-y-3 mt-3">
              {role.highlights.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="text-xs md:text-sm text-slate-700 dark:text-slate-300"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      size={15}
                      className="text-cyan-500 shrink-0 mt-0.5"
                    />
                    <div>
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        {item.category}:
                      </strong>{" "}
                      <span className="leading-relaxed">
                        {item.description}
                      </span>
                      {/* Tech Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 no-print">
                          {item.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
