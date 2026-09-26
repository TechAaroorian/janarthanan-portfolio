import React from "react";
import { Code2, Layers, Cpu, TestTube2, Database, History } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; highlight?: boolean; note?: string }[];
}

export const TechnicalSkills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Current Frontend",
      icon: <Code2 size={18} className="text-cyan-500" />,
      skills: [
        { name: "React", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Next.js", note: "SlotSyncro & SSR" },
        { name: "TanStack", highlight: true, note: "Query, Router, Start" },
        { name: "Jotai" },
        { name: "Tailwind CSS v4" },
      ],
    },
    {
      category: "Architecture & System Boundaries",
      icon: <Layers size={18} className="text-emerald-500" />,
      skills: [
        { name: "Modular Monoliths (Modulith)", highlight: true },
        { name: "Microservices Architecture" },
        { name: "State Boundaries & Isolation" },
        { name: "Frontend-Backend Data Contracts" },
      ],
    },
    {
      category: "AI Workflows & Context Eng.",
      icon: <Cpu size={18} className="text-amber-500" />,
      skills: [
        { name: "CLAUDE.md & .amazonq Configs", highlight: true },
        { name: "Claude Code" },
        { name: "Amazon Q" },
      ],
    },
    {
      category: "Testing & Stability",
      icon: <TestTube2 size={18} className="text-indigo-500" />,
      skills: [
        { name: "React Testing Library (RTL)" },
        { name: "Mock Service Worker (MSW)", highlight: true },
        { name: "Unit & E2E Testing" },
      ],
    },
    {
      category: "Languages, Databases & ORMs",
      icon: <Database size={18} className="text-purple-500" />,
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "Prisma ORM", note: "Active Build Stack" },
        { name: "JavaScript (ES6+)" },
        { name: "Python" },
      ],
    },
    {
      category: "Earlier Production Experience",
      icon: <History size={18} className="text-rose-500" />,
      skills: [
        { name: "MySQL", note: "Early Backend Persistence" },
        { name: "Scala", note: "Backend Origins" },
        { name: "Redux", note: "Earlier React projects" },
        { name: "React Native", note: "Earlier mobile projects" },
        { name: "Redux Toolkit", note: "React Native" },
        { name: "Bootstrap" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Technical Capabilities
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Categorized tech stack, modern database tooling, and architectural domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                  {group.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium transition-all ${
                      skill.highlight
                        ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {skill.name}
                    {skill.note && (
                      <span className="ml-1 text-[10px] opacity-75 font-normal">
                        ({skill.note})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
