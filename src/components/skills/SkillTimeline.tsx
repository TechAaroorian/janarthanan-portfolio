import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface SkillData {
  name: string;
  category: "Frontend & Mobile" | "Architecture & AI" | "Backend & Testing";
  startYear: number;
  endYear: number;
  displayRange: string;
  proficiency: number;
  details: string;
}

const skills: SkillData[] = [
  {
    name: "Scala with Postgres",
    category: "Backend & Testing",
    startYear: 2016.92,
    endYear: 2017.92,
    displayRange: "Dec 2016 – Dec 2017 (Approx.)",
    proficiency: 80,
    details:
      "Managed database indexing, server-side business logic, and schema persistence in MySQL & Postgres during early backend tenure.",
  },
  {
    name: "Monolith & Services",
    category: "Architecture & AI",
    startYear: 2016.92,
    endYear: 2026,
    displayRange: "Dec 2016 – Present (Approx.)",
    proficiency: 92,
    details:
      "Designing clean domain boundaries, decoupled modular monoliths, and robust frontend-backend API contracts.",
  },
  {
    name: "React JS",
    category: "Frontend & Mobile",
    startYear: 2017.92,
    endYear: 2026,
    displayRange: "Dec 2017 – Present (Approx.)",
    proficiency: 95,
    details:
      "Architecting scalable single-page applications, SSR/SSG workflows, Next.js App Router, and component libraries.",
  },
  {
    name: "TypeScript",
    category: "Frontend & Mobile",
    startYear: 2018.0,
    endYear: 2026,
    displayRange: "2018 – Present (Approx.)",
    proficiency: 92,
    details:
      "Enforcing strict type safety, generic utility types, and runtime schema validation contracts across large codebases.",
  },
  {
    name: "React Native",
    category: "Frontend & Mobile",
    startYear: 2018.0,
    endYear: 2020.0,
    displayRange: "2018 – 2020 (Approx.)",
    proficiency: 85,
    details:
      "Built cross-platform mobile application flows, native bridge integrations, and shared state management models.",
  },
  {
    name: "Testing (RTL & MSW)",
    category: "Backend & Testing",
    startYear: 2022.0,
    endYear: 2026,
    displayRange: "2022 – Present (Approx.)",
    proficiency: 88,
    details:
      "Established automated testing strategies using React Testing Library and Mock Service Worker (MSW) for API interception.",
  },
  {
    name: "TanStack Query",
    category: "Frontend & Mobile",
    startYear: 2024.0,
    endYear: 2026,
    displayRange: "2024 – Present (Approx.)",
    proficiency: 90,
    details:
      "Implemented clean server-state caching, optimistic updates, and background cache invalidation to eliminate Redux overhead.",
  },
  {
    name: "Agentic AI & Tooling",
    category: "Architecture & AI",
    startYear: 2024.0,
    endYear: 2026,
    displayRange: "2024 – Present (Approx.)",
    proficiency: 88,
    details:
      "Repository context engineering via CLAUDE.md & .amazonq rules to guide autonomous AI agents within system boundaries.",
  },
];

export const SkillTimeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(
    skills[2],
  );

  useEffect(() => {
    if (!svgRef.current) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 25, right: 35, bottom: 45, left: 180 };
    const width = 860 - margin.left - margin.right;
    const height = 380 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`,
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([2016, 2026]).range([0, width]);

    const yScale = d3
      .scalePoint()
      .domain(skills.map((d) => d.name))
      .range([0, height])
      .padding(0.6);

    const colorScale = d3
      .scaleOrdinal<string>()
      .domain(["Frontend & Mobile", "Architecture & AI", "Backend & Testing"])
      .range(["#06b6d4", "#10b981", "#6366f1"]);

    // Year X-Axis ticks
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d")).ticks(10);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .attr("class", "text-slate-400 text-xs font-mono")
      .selectAll("text")
      .attr("fill", "currentColor")
      .attr("dy", "1.2em");

    // Render Timeline Tracks and Nodes
    skills.forEach((skill) => {
      const yPos = yScale(skill.name) ?? 0;
      const xStart = xScale(skill.startYear);
      const xEnd = xScale(skill.endYear);

      // 1. Background dashed track
      svg
        .append("line")
        .attr("x1", 0)
        .attr("y1", yPos)
        .attr("x2", width)
        .attr("y2", yPos)
        .attr("stroke", "#334155")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "2,4")
        .attr("opacity", 0.2);

      // 2. Active duration track line
      svg
        .append("line")
        .attr("x1", xStart)
        .attr("y1", yPos)
        .attr("x2", xEnd)
        .attr("y2", yPos)
        .attr("stroke", colorScale(skill.category))
        .attr("stroke-width", 6)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0.85);

      // 3. Helper function to append rock-solid interactive nodes
      const addInteractiveNode = (cx: number, cy: number) => {
        const group = svg
          .append("g")
          .attr("class", "cursor-pointer")
          .on("click", () => setSelectedSkill(skill));

        // Invisible hit target
        group
          .append("circle")
          .attr("cx", cx)
          .attr("cy", cy)
          .attr("r", 12)
          .attr("fill", "transparent");

        // Visible node circle with explicit SVG transform-box properties
        const node = group
          .append("circle")
          .attr("cx", cx)
          .attr("cy", cy)
          .attr("r", 5)
          .attr("fill", colorScale(skill.category))
          .style("transform-box", "fill-box")
          .style("transform-origin", "center")
          .style("transition", "transform 0.2s ease-out");

        // Mouse hover interactions anchoring r & scale
        group
          .on("mouseenter", () => {
            node.style("transform", "scale(1.6)");
          })
          .on("mouseleave", () => {
            node.style("transform", "scale(1)");
          });
      };

      // Add start node
      addInteractiveNode(xStart, yPos);

      // Add end node if timeframe completed
      if (skill.endYear < 2026) {
        addInteractiveNode(xEnd, yPos);
      }
    });

    // Y Axis Labels
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .call(yAxis)
      .attr("class", "text-slate-700 dark:text-slate-300 font-semibold text-xs")
      .selectAll("text")
      .attr("fill", "currentColor")
      .attr("dx", "-0.5em");
  }, []);

  return (
    <section
      id="timeline"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-6"
    >
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Technical Skill Evolution Timeline
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              Approximate Timeline
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Chronological adoption of core technologies, architectures, and
            engineering tooling (2016 – Present).{" "}
            <span className="italic text-slate-400 dark:text-slate-500">
              *Note: Dates and duration metrics shown are approximate estimates
              representing primary usage periods.
            </span>
          </p>
        </div>
      </div>

      {/* 1. DESKTOP / TABLET: D3 Interactive SVG Chart */}
      <div className="hidden md:block no-print bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="w-full">
          <svg ref={svgRef} className="w-full h-auto overflow-visible"></svg>
        </div>

        {selectedSkill && (
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  {selectedSkill.name}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono border border-cyan-500/20">
                  {selectedSkill.category} • {selectedSkill.displayRange}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                {selectedSkill.details}
              </p>
            </div>
            <div className="w-full md:w-32 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden shrink-0">
              <div
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${selectedSkill.proficiency}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* 2. MOBILE ONLY: Clean Card List */}
      <div className="md:hidden no-print space-y-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                {skill.displayRange}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              {skill.details}
            </p>
          </div>
        ))}
      </div>

      {/* 3. PRINT FALLBACK VIEW */}
      <div className="hidden print:block mt-4">
        <h3 className="text-sm font-bold text-black border-b border-gray-400 pb-1 mb-2">
          Technical Evolution & Timeline (Approximate Dates)
        </h3>
        <div className="grid grid-cols-2 gap-3 text-xs text-black">
          {skills.map((skill) => (
            <div key={skill.name}>
              <strong>{skill.name}</strong> ({skill.displayRange}):{" "}
              {skill.details}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
