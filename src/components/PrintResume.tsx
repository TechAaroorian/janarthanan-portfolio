import React from "react";

export const PrintResume: React.FC = () => {
  return (
    <div className="w-full text-slate-900 bg-white p-0 font-sans text-[11.5px] leading-[1.25] border-none shadow-none">
      {/* 1. HEADER SECTION */}
      <div className="border-b-2 border-[#0f172a] pb-1 mb-1.5 block text-left">
        <div className="flex justify-between items-baseline mb-0.5">
          <h1 className="text-[25px] font-black text-[#0f172a] tracking-tight leading-none">
            Janarthanan Soundhararajan
          </h1>
          <span className="font-semibold text-slate-600 font-mono text-[11px]">
            Thiruvarur, Tamil Nadu, India
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-0.5">
          <p className="text-[13.5px] font-bold text-[#0284c7] tracking-wider uppercase">
            Senior Software Engineer (with Solution Architecture Responsibilities)
          </p>
          <span className="text-[10.5px] font-semibold text-slate-700 font-mono">
            Open to: Remote / Hybrid / Onsite (Chennai, Coimbatore, Trichy, Puducherry)
          </span>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11px] text-slate-700">
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
      <section className="mb-1.5">
        <div className="flex items-center gap-1.5 mb-0.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[13.5px] font-bold text-[#0f172a] uppercase tracking-wider">
            Professional Summary
          </h2>
        </div>
        <p className="text-slate-800 text-justify pt-0.5">
          Senior Software Engineer with solution architecture responsibilities and ~10 years building enterprise web products. Specializes in React, TypeScript, Next.js, and the TanStack ecosystem, designing decoupled state boundaries, modular monoliths (modulith), and microservice data contracts. Creator of open-source tooling (Yuwbrndr) and full-stack platforms (SlotSyncro). Delivers production reliability using PostgreSQL, Prisma ORM, automated testing (Vitest, RTL, MSW), and agentic AI workflows with strict code ownership.
        </p>
      </section>

      {/* 3. TECHNICAL SKILLS */}
      <section className="mb-1.5">
        <div className="flex items-center gap-1.5 mb-0.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[13.5px] font-bold text-[#0f172a] uppercase tracking-wider">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-[135px_1fr] gap-x-2 gap-y-0.5 pt-0.5 text-[11px] leading-[1.32]">
          <div className="font-bold text-[#0f172a]">Current Frontend:</div>
          <div className="text-slate-800">
            React, TypeScript, Next.js, TanStack, Jotai, Tailwind CSS
          </div>

          <div className="font-bold text-[#0f172a]">Architecture:</div>
          <div className="text-slate-800">
            Modular Monoliths (Modulith), Microservices, State Boundaries, API Data Contracts
          </div>

          <div className="font-bold text-[#0f172a]">AI Workflows:</div>
          <div className="text-slate-800">
            Claude Code, Amazon Q, Repository Context Engineering
          </div>

          <div className="font-bold text-[#0f172a]">Testing & Quality:</div>
          <div className="text-slate-800">
            Vitest, React Testing Library, Mock Service Worker (MSW)
          </div>

          <div className="font-bold text-[#0f172a]">Backend & Data:</div>
          <div className="text-slate-800">
            Python (foundational; 1+ year early-career experience), PostgreSQL, Prisma ORM
          </div>

          <div className="font-bold text-[#0f172a]">Earlier Experience:</div>
          <div className="text-slate-800">
            Python, MySQL, Redux, React Native, Redux Toolkit, Scala
          </div>
        </div>
      </section>

      {/* 4. WORK EXPERIENCE */}
      <section className="mb-1.5">
        <div className="flex items-center gap-1.5 mb-0.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[13.5px] font-bold text-[#0f172a] uppercase tracking-wider">
            Work Experience
          </h2>
        </div>

        {/* Role 1 */}
        <div className="mb-1 relative pl-2.5 border-l-2 border-[#0284c7]/40 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[13.5px] font-bold text-[#0f172a]">
              Senior Software Engineer
            </h3>
            <span className="font-mono text-slate-700 font-semibold text-[11px]">
              Jan 2020 – Jul 17, 2026 (Last Working Day: Jul 17, 2026)
            </span>
          </div>
          <div className="flex justify-between items-baseline mb-0.5">
            <span className="font-bold text-[#0284c7] text-[11.5px]">
              Functional Scope: Solution Architecture & Lead Frontend Engineering
            </span>
            <span className="font-medium text-slate-600 text-[11px]">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3 text-slate-800 space-y-0.5">
            <li>
              <strong>Architectural Leadership (2024 – 2026):</strong> Defined technical blueprints, frontend architecture, stack selection, and integration boundaries for enterprise applications.
            </li>
            <li>
              <strong>System Integration & Data Contracts:</strong> Designed decoupled API data contracts and state boundaries across monolith, modulith, and microservice architectures.
            </li>
            <li>
              <strong>AI-Assisted Engineering:</strong> Guided AI-assisted development (Claude Code, Amazon Q) with repository boundary rules, maintaining full ownership of architecture, reviews, and test quality.
            </li>
            <li>
              <strong>Frontend Stack Evolution:</strong> Modernized legacy Redux workflows to the TanStack ecosystem (Query, Router, Start) and Next.js for server-state caching, type-safe routing, and SSR.
            </li>
            <li>
              <strong>Client & Product Delivery:</strong> Partnered directly with stakeholders to translate business requirements into technical task breakdowns and delivered features end-to-end.
            </li>
            <li>
              <strong>Testing & Release Stability:</strong> Established automated testing with React Testing Library (RTL) and Mock Service Worker (MSW), isolating frontend logic and preventing regressions.
            </li>
          </ul>
        </div>

        {/* Role 2 */}
        <div className="mb-0.5 relative pl-2.5 border-l-2 border-slate-300 break-inside-avoid">
          <div className="flex justify-between items-baseline mb-0.5">
            <h3 className="text-[13.5px] font-bold text-[#0f172a]">
              Associate Developer
            </h3>
            <span className="font-mono text-slate-700 font-semibold text-[11px]">
              Dec 2016 – Dec 2019
            </span>
          </div>
          <div className="mb-0.5">
            <span className="font-medium text-slate-600 text-[11px]">
              OneData Software Solutions Pvt. Ltd | India
            </span>
          </div>
          <ul className="list-disc pl-3 text-slate-800 space-y-0.5">
            <li>
              <strong>Backend & Database Foundations:</strong> Developed application and server-side logic using Python and Scala, managed indexing, and optimized persistence schemas using MySQL.
            </li>
            <li>
              <strong>Frontend Evolution:</strong> Transitioned focus toward modern React UI development, asynchronous state management, and reusable components.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section className="mb-1 break-inside-avoid">
        <div className="flex items-center gap-1.5 mb-0.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[13.5px] font-bold text-[#0f172a] uppercase tracking-wider">
            Featured Projects
          </h2>
        </div>

        {/* Project 1: Yuwbrndr */}
        <div className="mb-0.5">
          <div className="flex justify-between items-baseline">
            <span>
              <strong>Yuwbrndr</strong> — <em>Open-Source Social Graphic & Carousel Studio</em>
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[10.5px]">
              Open Source | github.com/TechAaroorian/yuwbrndr
            </span>
          </div>
          <p className="text-slate-800">
            Open-source, browser-native studio transforming HTML, Tailwind CSS, and Rough.js into high-resolution graphics and multi-slide LinkedIn carousels. Features CodeMirror 6 live editing, client-side jsPDF/raster export, 29 Vitest tests, and zero-server URL state compression via native CompressionStream.
          </p>
        </div>

        {/* Project 2: SlotSyncro */}
        <div>
          <div className="flex justify-between items-baseline">
            <span>
              <strong>SlotSyncro</strong> — <em>Timezone-Aware Scheduling Platform</em>
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[10.5px]">
              In Progress | github.com/TechAaroorian/slotsyncro
            </span>
          </div>
          <p className="text-slate-800">
            Full-stack scheduling engine built with Next.js App Router, TypeScript, Turborepo, PostgreSQL, Prisma ORM, Auth.js, Server Actions, and Vitest. Implements timezone math, conflict resolution, booking workflows, and CI coverage.
          </p>
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section className="break-inside-avoid">
        <div className="flex items-center gap-1.5 mb-0.5 border-b border-[#0f172a] pb-0.5">
          <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-xs shrink-0" />
          <h2 className="text-[13.5px] font-bold text-[#0f172a] uppercase tracking-wider">
            Education
          </h2>
        </div>
        <div className="space-y-0.5 pt-0.5">
          <div className="flex justify-between items-baseline">
            <span>
              <strong>Master of Computer Applications (M.C.A.)</strong> — Anjalai Ammal Mahalingam Engineering College
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[11px]">
              2016 | Thiruvarur
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span>
              <strong>Bachelor of Science in Information Technology (B.Sc IT)</strong> — Nethaji Subash Chandra Bose College
            </span>
            <span className="font-mono text-slate-700 font-semibold text-[11px]">
              2013 | Thiruvarur
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
