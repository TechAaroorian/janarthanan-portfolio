import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface SkillData {
  name: string;
  category:
    | "Frontend & Mobile"
    | "Architecture & Tooling"
    | "AI Workflows"
    | "Backend Roots";
  startYear: number;
  proficiency: number;
  details: string;
}

const skills: SkillData[] = [
  {
    name: "Scala & Backend Roots",
    category: "Backend Roots",
    startYear: 2016,
    proficiency: 78,
    details:
      "Started career engineering backend services and business logic with Scala & MySQL schemas.",
  },
  {
    name: "React JS & Redux",
    category: "Frontend & Mobile",
    startYear: 2017,
    proficiency: 95,
    details:
      "Transitioned to web UIs with vanilla React JS and Redux state management.",
  },
  {
    name: "React + TypeScript",
    category: "Frontend & Mobile",
    startYear: 2018,
    proficiency: 95,
    details:
      "Adopted strict TypeScript contract design, custom hooks, and complex web applications.",
  },
  {
    name: "React Native",
    category: "Frontend & Mobile",
    startYear: 2020,
    proficiency: 85,
    details:
      "Built cross-platform mobile apps for ~2 years with shared state logic and native integrations.",
  },
  {
    name: "TanStack Query & Jotai",
    category: "Architecture & Tooling",
    startYear: 2023,
    proficiency: 92,
    details:
      "2+ years managing server-state caching, optimistic UI updates, and atomic global state.",
  },
  {
    name: "Next.js, Turbopack & Prisma",
    category: "Architecture & Tooling",
    startYear: 2024,
    proficiency: 88,
    details:
      "8 months of Turbopack build optimization, Next.js App Router, and modern Prisma ORM integrations.",
  },
  {
    name: "Agentic AI & Context Eng.",
    category: "AI Workflows",
    startYear: 2024,
    proficiency: 88,
    details:
      "Repository context engineering via CLAUDE.md & amazonq configs for autonomous AI agents.",
  },
];

export const SkillTimeline: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(
    skills[0],
  );

  useEffect(() => {
    if (!svgRef.current) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 140 };
    const width = 820 - margin.left - margin.right;
    const height = 340 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`,
      )
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear().domain([2015, 2026]).range([0, width]);

    const yScale = d3
      .scalePoint()
      .domain(skills.map((d) => d.name))
      .range([0, height])
      .padding(0.5);

    const colorScale = d3
      .scaleOrdinal<string>()
      .domain([
        "Frontend & Mobile",
        "Architecture",
        "AI Workflows",
        "Testing & Backend",
      ])
      .range(["#06b6d4", "#10b981", "#f59e0b", "#6366f1"]);

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d")).ticks(6);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .attr("class", "text-slate-400 text-xs")
      .selectAll("text")
      .attr("fill", "currentColor");

    skills.forEach((skill) => {
      const yPos = yScale(skill.name) ?? 0;
      const xStart = xScale(skill.startYear);
      const xEnd = xScale(2026);

      svg
        .append("line")
        .attr("x1", xStart)
        .attr("y1", yPos)
        .attr("x2", xEnd)
        .attr("y2", yPos)
        .attr("stroke", colorScale(skill.category))
        .attr("stroke-width", 4)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0.35);

      svg
        .append("circle")
        .attr("cx", xStart)
        .attr("cy", yPos)
        .attr("r", 6)
        .attr("fill", colorScale(skill.category))
        .attr("class", "cursor-pointer transition-transform hover:scale-125")
        .on("click", () => setSelectedSkill(skill))
        .on("mouseover", function () {
          d3.select(this).attr("r", 9);
        })
        .on("mouseout", function () {
          d3.select(this).attr("r", 6);
        });
    });

    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .call(yAxis)
      .attr("class", "text-slate-700 dark:text-slate-300 font-medium text-xs")
      .selectAll("text")
      .attr("fill", "currentColor");
  }, []);

  return (
    <section id="timeline" className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skill Evolution Timeline
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Interactive visualization tracking architecture adoption &
            technology milestones.
          </p>
        </div>
      </div>

      {/* Web Interactive Timeline */}
      <div className="no-print bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="w-full overflow-x-auto">
          <svg ref={svgRef} className="w-full h-auto min-w-[600px]"></svg>
        </div>

        {selectedSkill && (
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900 dark:text-white text-base">
                  {selectedSkill.name}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium border border-cyan-500/20">
                  {selectedSkill.category} • Adopted {selectedSkill.startYear}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                {selectedSkill.details}
              </p>
            </div>
            <div className="w-full md:w-32 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${selectedSkill.proficiency}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* ATS & Print Fallback */}
      <div className="hidden print:block sr-only print:not-sr-only mt-4">
        <h3 className="text-lg font-bold text-black border-b border-gray-400 pb-1 mb-3">
          Core Technical Capabilities
        </h3>
        <div className="grid grid-cols-2 gap-4 text-xs text-black">
          {skills.map((skill) => (
            <div key={skill.name}>
              <strong>{skill.name}</strong> ({skill.startYear}–Present):{" "}
              {skill.details}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
