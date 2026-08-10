import React, { useEffect, useState } from "react";
import {
  User,
  Briefcase,
  Code2,
  LineChart,
  GraduationCap,
  BookOpen,
  AtSign,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("summary");

  const navItems: NavItem[] = [
    { id: "summary", label: "Summary", icon: <User size={18} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
    { id: "skills", label: "Technical Skills", icon: <Code2 size={18} /> },
    { id: "timeline", label: "Skill Evolution", icon: <LineChart size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "articles", label: "Articles", icon: <BookOpen size={18} /> },
    { id: "contact", label: "Contact", icon: <AtSign size={18} /> },
  ];

  useEffect(() => {
    // 1. Bottom of page detector (Forces last section selection when scrolled to bottom)
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. IntersectionObserver with optimized thresholds for section tracking
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0.2, 0.5, 0.8],
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      // Ignore observer overrides if user is at the very bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;
      if (isAtBottom) return;

      // Find section with highest visible ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const bestMatch = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current,
        );
        setActiveSection(bestMatch.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const totalItems = navItems.length;
  const radius = 85; // Slightly increased for 7 items
  const arcAngle = 130; // Expanded arc angle for smooth vertical spread

  return (
    <>
      {/* 1. DESKTOP & TABLET: Glassmorphic Semi-Circular Floating Menu */}
      <nav
        aria-label="Semi-circular arc side menu"
        className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 no-print hidden md:flex flex-col gap-3 select-none"
      >
        <svg
          className="absolute -left-6 top-1/2 -translate-y-1/2 w-32 h-95 pointer-events-none opacity-25 dark:opacity-35"
          viewBox="0 0 100 300"
          fill="none"
        >
          <path
            d="M 10,10 Q 90,150 10,290"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="text-cyan-500"
          />
        </svg>

        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;

          const normalizedPos =
            totalItems > 1 ? (index / (totalItems - 1)) * 2 - 1 : 0;
          const angleDeg = normalizedPos * (arcAngle / 2);
          const angleRad = (angleDeg * Math.PI) / 180;

          const translateX =
            Math.cos(angleRad) * radius - radius * 0.2 + (isActive ? 14 : 0);
          const rotateZ = angleDeg * 0.25;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                transform: `translateX(${translateX}px) rotate(${rotateZ}deg)`,
              }}
              className={`flex items-center gap-2.5 transition-all duration-300 ease-out cursor-pointer origin-left group ${
                isActive
                  ? "scale-105"
                  : "hover:scale-102 opacity-75 hover:opacity-100"
              }`}
            >
              <div
                className={`transition-all duration-300 flex items-center shrink-0 ${
                  isActive
                    ? "text-cyan-500 opacity-100 scale-110"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                <ChevronRight size={16} className="animate-pulse" />
              </div>

              <div
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-cyan-500/10 dark:bg-cyan-500/20 border-cyan-500/50 text-cyan-600 dark:text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/40"
                    : "bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 group-hover:border-cyan-500/40 group-hover:text-cyan-500 group-hover:shadow-sm"
                }`}
              >
                <span
                  className={`p-1 rounded-full transition-colors ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-500"
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`tracking-tight whitespace-nowrap font-mono ${
                    isActive
                      ? "font-bold text-cyan-600 dark:text-cyan-300 text-xs sm:text-sm"
                      : "font-medium text-slate-600 dark:text-slate-300 text-xs group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* 2. MOBILE ONLY: Glassmorphic Floating Bottom Dock */}
      <nav
        aria-label="Mobile floating action menu"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 no-print md:hidden flex items-center gap-1.5 p-2 rounded-full bg-slate-900/85 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl max-w-[92vw] overflow-x-auto scrollbar-none"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              title={item.label}
              className={`relative p-2.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? "bg-cyan-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)] scale-110"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              {item.icon}

              {isActive && (
                <span className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-cyan-300 animate-ping" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
