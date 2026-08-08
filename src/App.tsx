import { Header } from "./components/layout/Header";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Experience } from "./components/experience/Experience";
import { TechnicalSkills } from "./components/skills/TechnicalSkills";
import { SkillTimeline } from "./components/skills/SkillTimeline";
import { Education } from "./components/education/Education";
import { PrintResume } from "./components/PrintResume";

export default function App() {
  return (
    <>
      {/* 1. DEDICATED PRINT RESUME (Pure HTML/CSS layout matching your original PDF) */}
      <div id="print-resume-only" className="hidden print:block">
        <PrintResume />
      </div>

      {/* 2. INTERACTIVE WEB PORTFOLIO (Hidden strictly on print) */}
      <div
        id="web-portfolio-only"
        className="print:hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors"
      >
        <FloatingNav />
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
          <Experience />
          <TechnicalSkills />
          <SkillTimeline />
          <Education />
        </main>
      </div>
    </>
  );
}
