import React from "react";

export const PrintResume: React.FC = () => {
  return (
    <div className="w-full text-slate-900 bg-white p-0 font-sans text-[8.75pt] leading-normal border-none shadow-none">
      {/* 1. HEADER SECTION */}
      <div className="border-b-2 border-[#0f172a] pb-3 mb-3.5 block text-left">
        <div className="flex justify-between items-baseline mb-1">
          <h1 className="text-[22pt] font-black text-[#0f172a] tracking-tight leading-none">
            Janarthanan Soundararajan
          </h1>
          <span className="text-[8.5pt] font-semibold text-slate-500 font-mono">
            Thiruvarur, Tamil Nadu, India
          </span>
        </div>

        <p className="text-[10.5pt] font-bold text-[#0284c7] tracking-wider uppercase mb-2.5">
          Senior Frontend Developer / Solution Architect
        </p>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[8.5pt] text-slate-700">
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
            <strong className="text-[#0f172a]">Address:</strong> 12 A,
            Thangarasu Colony, Maanandhiyar Street, Thiruvarur - 610001
          </span>
        </div>
      </div>

      {/* 2. PROFESSIONAL SUMMARY */}
      <section className="mb-3.5">
        <div className="flex items-center gap-2 mb-1.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[10.5pt] font-bold text-[#0f172a] uppercase tracking-wider">
            Professional Summary
          </h2>
        </div>
        <p className="text-[8.5pt] text-slate-800 leading-relaxed text-justify">
          Senior Frontend Developer and Solution Architect with nearly ten years
          of experience in product development, specializing heavily in the
          TypeScript/JavaScript ecosystem for web and mobile. Brings a strong
          foundational background in backend systems and database design,
          allowing for deep practical understanding of Monolith, Modular
          Monolith (Modulith), and Microservices architectures. This
          cross-domain perspective helps in designing clean frontend-to-backend
          integrations, optimizing state boundaries, and managing data
          contracts. Experienced in configuring project-level AI rules (such as
          CLAUDE.md and .amazonq settings) to keep autonomous AI agents aligned
          with the system's exact architectural boundaries.
        </p>
      </section>

      {/* 3. TECHNICAL SKILLS */}
      <section className="mb-3.5">
        <div className="flex items-center gap-2 mb-2 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[10.5pt] font-bold text-[#0f172a] uppercase tracking-wider">
            Technical Skills & Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-[125pt_1fr] gap-x-3 gap-y-2 text-[8.25pt]">
          <div className="font-bold text-[#0f172a] self-center">
            Frontend & Mobile:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "React JS",
              "Next.js (App Router/SSR)",
              "React Native",
              "TanStack Query",
              "Jotai",
              "Redux Toolkit",
              "Tailwind CSS",
              "Turbopack",
              "Storybook",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[8pt] font-medium text-slate-800"
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
              "State Boundaries & Isolation",
              "Frontend-Backend Data Contracts",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[8pt] font-medium text-slate-800"
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
              "CLAUDE.md & .amazonq Context Rules",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[8pt] font-medium text-slate-800"
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
              "React Testing Library (RTL)",
              "Mock Service Worker (MSW)",
              "Unit & E2E Testing",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[8pt] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="font-bold text-[#0f172a] self-center">
            Backend & ORMs:
          </div>
          <div className="flex flex-wrap gap-1 text-slate-800">
            {[
              "Node.js",
              "Express",
              "Prisma ORM",
              "PostgreSQL",
              "MySQL",
              "Scala (Backend Origins)",
              "REST & GraphQL APIs",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[8pt] font-medium text-slate-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK EXPERIENCE */}
      <section className="mb-3.5">
        <div className="flex items-center gap-2 mb-2.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[10.5pt] font-bold text-[#0f172a] uppercase tracking-wider">
            Work Experience
          </h2>
        </div>

        {/* Role 1 */}
        <div className="mb-3.5 relative pl-3.5 border-l-2 border-[#0284c7]/40 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[10pt] font-bold text-[#0f172a]">
              Senior Software Engineer
            </h3>
            <span className="text-[8.5pt] font-mono text-slate-700 font-semibold">
              Jan 2020 – July 2026
            </span>
          </div>
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-[8.5pt] font-bold text-[#0284c7]">
              Functional Scope: Solution Architect & Lead Frontend Engineer
            </span>
            <span className="text-[8.5pt] font-medium text-slate-600">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3.5 text-[8.5pt] text-slate-800 space-y-1">
            <li>
              <strong>Architectural Leadership (2024 – 2026):</strong> Appointed
              to drive end-to-end technical blueprints, establish scalable
              frontend architectures, and select modern tech stacks (Next.js,
              Turbopack, TanStack Query) that cleanly interface with backend
              microservices.
            </li>
            <li>
              <strong>System Integration & Data Contracts:</strong> Leveraged
              deep background in monoliths, modular monoliths (moduliths), and
              microservices to design decoupled data contracts between frontend
              apps and backend service components.
            </li>
            <li>
              <strong>AI Workspace & Context Engineering:</strong> Configured
              project-level AI rules within CLAUDE.md and .amazonq repository
              settings, guiding autonomous AI agents (Claude Code, Amazon Q,
              Copilot) to strictly respect system boundaries and existing folder
              structures.
            </li>
            <li>
              <strong>Frontend & Mobile Engineering:</strong> Architected web
              and mobile applications using React, Next.js, and React Native.
              Implemented TanStack Query and Jotai to handle server-state
              caching cleanly and eliminate unnecessary global state overhead.
            </li>
            <li>
              <strong>Product & Client Coordination:</strong> Engineered
              solution specifications directly with client stakeholders, mapping
              business requirements into technical task breakdowns and leading
              feature delivery end-to-end.
            </li>
            <li>
              <strong>Testing & Release Stability:</strong> Established local
              test automation strategies using React Testing Library (RTL) and
              Mock Service Worker (MSW) to isolate frontend testing and mock
              backend API responses for zero-friction deployments.
            </li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="mb-2 relative pl-3.5 border-l-2 border-slate-300 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[10pt] font-bold text-[#0f172a]">
              Associate Developer
            </h3>
            <span className="text-[8.5pt] font-mono text-slate-700 font-semibold">
              Dec 2016 – Dec 2019
            </span>
          </div>
          <div className="mb-1.5">
            <span className="text-[8.5pt] font-medium text-slate-600">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3.5 text-[8.5pt] text-slate-800 space-y-1">
            <li>
              <strong>Backend & Database Foundations:</strong> Built a strong
              backend foundation by engineering server-side business logic
              (Scala, Node.js), managing database indexing, and optimizing data
              persistence schemas using MySQL.
            </li>
            <li>
              <strong>Frontend Evolution:</strong> Transitioned core technical
              focus toward interactive user interfaces, asynchronous state
              flows, and modern JavaScript/React frontend frameworks during the
              latter half of tenure.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. EDUCATION */}
      <section className="break-inside-avoid">
        <div className="flex items-center gap-2 mb-1.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[10.5pt] font-bold text-[#0f172a] uppercase tracking-wider">
            Education
          </h2>
        </div>
        <div className="space-y-1 text-[8.5pt]">
          <div className="flex justify-between items-baseline">
            <span>
              <strong>Master of Computer Applications (M.C.A.)</strong> —
              Anjalai Ammal Mahalingam Engineering College
            </span>
            <span className="font-mono text-slate-700 font-semibold">
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
            <span className="font-mono text-slate-700 font-semibold">
              2013 | Thiruvarur
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
