// App.tsx
import { Header } from "./components/layout/Header";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Experience } from "./components/experience/Experience";
import { TechnicalSkills } from "./components/skills/TechnicalSkills";
import { SkillTimeline } from "./components/skills/SkillTimeline";
import { Education } from "./components/education/Education";
import { PrintResume } from "./components/PrintResume";
import { DevToArticles } from "./components/DevToArticles";
import { Footer } from "./components/Footer";
import { Summary } from "./components/profile/Summary";

export default function App() {
  return (
    <>
      {/* 1. DEDICATED PRINT RESUME (Pure HTML/CSS layout matching your original PDF) */}
      <div id="print-resume-only" className="hidden print:block">
        <PrintResume />
      </div>

      {/* 2. INTERACTIVE WEB PORTFOLIO (Hidden strictly when printing) */}
      <div
        id="web-portfolio-only"
        className="print:hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors flex flex-col justify-between"
      >
        <div>
          <FloatingNav />
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <Summary />
            <Experience />
            <TechnicalSkills />
            <SkillTimeline />
            <Education />
            {/* DEV.to Dynamic Articles Section */}
            <DevToArticles username="janarthanan_soundararajan" limit={3} />
          </main>
        </div>

        {/* Footer MUST be inside print:hidden so it never renders in print mode */}
        <Footer />
      </div>
    </>
  );
}
