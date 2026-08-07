import { Header } from "./components/layout/Header";
import { Summary } from "./components/profile/Summary";
import { TechnicalSkills } from "./components/skills/TechnicalSkills";
import { SkillTimeline } from "./components/skills/SkillTimeline";
import { Experience } from "./components/experience/Experience";
import { FloatingNav } from "./components/ui/FloatingNav";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors relative">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <Summary />
        <Experience />
        <TechnicalSkills />
        <SkillTimeline />
      </main>

      {/* Floating Section Navigation */}
      <FloatingNav />
    </div>
  );
}

export default App;
