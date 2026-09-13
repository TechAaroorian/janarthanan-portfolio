import React from "react";

export const PrintResume: React.FC = () => {
  return (
    <div className="w-full text-slate-900 bg-white p-0 font-sans text-[12.5px] leading-[1.3] border-none shadow-none">
      {/* 1. HEADER SECTION */}
      <div className="border-b-2 border-[#0f172a] pb-2 mb-2.5 block text-left">
        <div className="flex justify-between items-baseline mb-1">
          <h1 className="text-[28px] font-black text-[#0f172a] tracking-tight leading-none">
            Janarthanan Soundhararajan
          </h1>
          <span className="font-semibold text-slate-600 font-mono text-[12.5px]">
            Thiruvarur, Tamil Nadu, India
          </span>
        </div>

        <p className="text-[15px] font-bold text-[#0284c7] tracking-wider uppercase mb-1.5">
          Senior Software Engineer (with Solution Architecture Responsibilities)
        </p>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-slate-700">
          <span className="flex items-center gap-1">
            <strong className="text-[#0f172a]">Phone:</strong> +91 8610945115
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-[#0f172a]">Email:</strong>{" "}
            janarthanan1821993@gmail.com
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-[#0f172a]">Domain:</strong>{" "}
            <a href="https://janarthanan-dev.com">janarthanan-dev.com</a>
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-[#0f172a]">GitHub:</strong>{" "}
            <a href="https://github.com/TechAaroorian">
              github.com/TechAaroorian
            </a>
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <strong className="text-[#0f172a]">LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/janarthanan-soundararajan-0544ab85/">
              linkedin.com/in/janarthanan-soundararajan-0544ab85
            </a>
          </span>
        </div>
      </div>

      {/* 2. PROFESSIONAL SUMMARY */}
      <section className="mb-2.5">
        <div className="flex items-center gap-1.5 mb-1 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[15px] font-bold text-[#0f172a] uppercase tracking-wider">
            Professional Summary
          </h2>
        </div>
        <p className="text-slate-800 text-justify pt-0.5">
          Senior Software Engineer with solution architecture responsibilities
          and nearly 10 years of product-development experience. Specializes in
          React and TypeScript, with recent production experience using TanStack
          Query and the wider TanStack ecosystem. Backend and database experience
          supports practical work across monolith, modular monolith, and
          microservices architectures. Uses AI-assisted workflows while retaining
          responsibility for architecture, review, testing, and code quality.
        </p>
      </section>

      {/* 3. TECHNICAL SKILLS */}
      <section className="mb-2.5">
        <div className="flex items-center gap-1.5 mb-1.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[15px] font-bold text-[#0f172a] uppercase tracking-wider">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-[145px_1fr] gap-x-2 gap-y-1.5 pt-0.5">
          <div className="font-bold text-[#0f172a] self-center">
            Current Frontend:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Next.js",
              "TanStack Query",
              "TanStack Router",
              "TanStack Start",
              "Jotai",
              "Tailwind CSS",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            Architecture:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "Modular Monoliths (Modulith)",
              "Microservices",
              "State Boundaries",
              "API Data Contracts",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            AI Workflows:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "Claude Code",
              "Amazon Q",
              "GitHub Copilot",
              "Repository Context Engineering",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            Testing & Quality:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "Vitest",
              "React Testing Library",
              "Mock Service Worker (MSW)",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            Backend & Data:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {["Node.js", "PostgreSQL", "MySQL", "Prisma"].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            Earlier Experience:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {["Redux", "React Native", "Redux Toolkit", "Scala"].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1 py-0 rounded text-[12px] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK EXPERIENCE */}
      <section className="mb-2.5">
        <div className="flex items-center gap-1.5 mb-1.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[15px] font-bold text-[#0f172a] uppercase tracking-wider">
            Work Experience
          </h2>
        </div>

        {/* Role 1 */}
        <div className="mb-2 relative pl-3 border-l-2 border-[#0284c7]/40 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[15px] font-bold text-[#0f172a]">
              Senior Software Engineer
            </h3>
            <span className="font-mono text-slate-700 font-semibold text-[12.5px]">
              Jan 2020 – Jul 2026
            </span>
          </div>
          <div className="flex justify-between items-baseline mb-1">
            <span className="font-bold text-[#0284c7] text-[13px]">
              Functional Scope: Solution Architecture & Lead Frontend
              Engineering
            </span>
            <span className="font-medium text-slate-600 text-[12.5px]">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3.5 text-slate-800 space-y-1">
            <li>
              <strong>Architectural Leadership (2024 – 2026):</strong> Led
              technical blueprints, frontend architecture, stack selection, and
              integration boundaries for enterprise applications.
            </li>
            <li>
              <strong>System Integration & Data Contracts:</strong> Designed
              decoupled data contracts between frontend applications and backend
              service components across monolith, modulith, and microservice
              architectures.
            </li>
            <li>
              <strong>AI-Assisted Engineering:</strong> Used AI-assisted
              development on the final project while retaining responsibility
              for architecture, implementation review, testing, and code quality;
              configured repository guidance for established boundaries.
            </li>
            <li>
              <strong>Frontend Stack Evolution:</strong> Built earlier React
              applications with Redux; adopted TanStack Query with Vite during
              the last two-plus years and used Query, Router, and Start together
              on the final eight-month project. Used Next.js on one project.
            </li>
            <li>
              <strong>Client & Product Coordination:</strong> Met directly with
              client stakeholders to gather requirements, translate business
              needs into frontend specifications, and drive feature delivery
              end-to-end.
            </li>
            <li>
              <strong>Testing & Release Stability:</strong> Established local
              test automation using React Testing Library (RTL) and Mock Service
              Worker (MSW) to isolate frontend behavior and improve release
              confidence.
            </li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="mb-1 relative pl-3 border-l-2 border-slate-300 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[15px] font-bold text-[#0f172a]">
              Associate Developer
            </h3>
            <span className="font-mono text-slate-700 font-semibold text-[12.5px]">
              Dec 2016 – Dec 2019
            </span>
          </div>
          <div className="mb-1">
            <span className="font-medium text-slate-600 text-[12.5px]">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3.5 text-slate-800 space-y-1">
            <li>
              <strong>Backend & Database Foundations:</strong> Engineered
              server-side business logic, managed database indexing, and
              optimized data persistence schemas using MySQL.
            </li>
            <li>
              <strong>Frontend Evolution:</strong> Transitioned focus toward
              interactive user interfaces, asynchronous state flows, and modern
              React frontend frameworks during latter tenure.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. PORTFOLIO PROJECT */}
      <section className="mb-2 break-inside-avoid">
        <div className="flex items-center gap-1.5 mb-1 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[15px] font-bold text-[#0f172a] uppercase tracking-wider">
            Portfolio Project
          </h2>
        </div>
        <div className="flex justify-between items-baseline">
          <strong>SlotSyncro — Scheduling Platform</strong>
          <span className="font-mono text-slate-700 font-semibold text-[12px]">
            In Progress | github.com/TechAaroorian/slotsyncro
          </span>
        </div>
        <p className="text-slate-800">
          Building a timezone-aware scheduling platform with Next.js App Router,
          TypeScript, Turborepo, PostgreSQL, Prisma, Auth.js, Server Actions, and
          Vitest. Implemented recurring availability, event types, slot
          calculation, conflict checks, direct booking, and CI coverage reporting.
        </p>
      </section>

      {/* 6. EDUCATION */}
      <section className="break-inside-avoid">
        <div className="flex items-center gap-1.5 mb-1 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[15px] font-bold text-[#0f172a] uppercase tracking-wider">
            Education
          </h2>
        </div>
        <div className="space-y-1 pt-0.5">
          <div className="flex justify-between items-baseline">
            <span>
              <strong>Master of Computer Applications (M.C.A.)</strong> —
              Anjalai Ammal Mahalingam Engineering College
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[12.5px]">
              2016 | Thiruvarur
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span>
              <strong>
                Bachelor of Science in Information Technology (B.Sc IT)
              </strong>{" "}
              — Nethaji Subash Chandra Bose College
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[12.5px]">
              2013 | Thiruvarur
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
