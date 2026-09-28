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
      "Functional Scope: Solution Architecture & Lead Frontend Engineering",
    company: "OneData Software Solutions Pvt. Ltd",
    period: "Jan 2020 – Jul 17, 2026 (Last Working Day: Jul 17, 2026)",
    location: "India",
    highlights: [
      {
        category: "Architectural Leadership (2024 – 2026)",
        description:
          "Defined technical blueprints, frontend architecture, stack selection, and integration boundaries for enterprise applications.",
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
          "Designed decoupled API data contracts and state boundaries across monolith, modulith, and microservice architectures.",
        tags: [
          "Modulith",
          "Microservices",
          "API Data Contracts",
          "State Boundaries",
        ],
      },
      {
        category: "AI-Assisted Engineering",
        description:
          "Guided AI-assisted development (Claude Code, Amazon Q) with repository boundary rules, maintaining full ownership of architecture, reviews, and test quality.",
        tags: ["CLAUDE.md", ".amazonq", "Claude Code", "Agentic AI Workflows"],
      },
      {
        category: "Frontend Stack Evolution",
        description:
          "Modernized legacy Redux workflows to the TanStack ecosystem (Query, Router, Start) and Next.js for server-state caching, type-safe routing, and SSR.",
        tags: [
          "React JS",
          "Next.js",
          "TanStack",
          "TanStack Query",
          "TypeScript",
          "Redux",
        ],
      },
      {
        category: "Client & Product Delivery",
        description:
          "Partnered directly with stakeholders to translate business requirements into technical task breakdowns and delivered features end-to-end.",
        tags: [
          "Technical Specifications",
          "Client Leadership",
          "Task Breakdown",
        ],
      },
      {
        category: "Testing & Release Stability",
        description:
          "Established automated testing with React Testing Library (RTL) and Mock Service Worker (MSW), isolating frontend logic and preventing regressions.",
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
          "Developed application and server-side logic using Python and Scala, managed indexing, and optimized persistence schemas using MySQL.",
        tags: ["Python", "Scala", "MySQL", "Database Indexing", "Server Logic"],
      },
      {
        category: "Frontend Evolution",
        description:
          "Transitioned focus toward modern React UI development, asynchronous state management, and reusable components.",
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
