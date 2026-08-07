import React, { useEffect, useState } from "react";
import { User, Briefcase, Code2, LineChart, ChevronRight } from "lucide-react";

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
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);

  return (
    <nav
      aria-label="Dial scroll side menu"
      className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 no-print hidden md:flex flex-col gap-4 perspective-1000"
    >
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;

        // Calculate relative distance from currently selected index (-2, -1, 0, 1, 2)
        const offset = index - (activeIndex >= 0 ? activeIndex : 0);

        // Arc Math: Create a curved "Dial Wheel" projection
        // Items further from center bow inward (translateX) and tilt away (rotateX)
        const translateX =
          Math.abs(offset) === 0 ? 18 : Math.abs(offset) === 1 ? 6 : 0;
        const rotateX = offset * -18; // Angles away like a 3D wheel
        const scale = isActive
          ? 1.15
          : Math.max(0.85, 1 - Math.abs(offset) * 0.12);
        const opacity = isActive
          ? 1
          : Math.max(0.35, 1 - Math.abs(offset) * 0.25);

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              transform: `perspective(600px) rotateX(${rotateX}deg) translateX(${translateX}px) scale(${scale})`,
              opacity: opacity,
            }}
            className={`flex items-center gap-3 transition-all duration-300 ease-out cursor-pointer origin-left text-left group select-none`}
          >
            {/* Active Wheel Selector Pin */}
            <div
              className={`transition-all duration-300 flex items-center shrink-0 ${
                isActive
                  ? "text-cyan-500 opacity-100 scale-125"
                  : "opacity-0 -translate-x-3"
              }`}
            >
              <ChevronRight size={16} className="animate-pulse" />
            </div>

            {/* Icon */}
            <span
              className={`p-1 rounded-md transition-colors ${
                isActive
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-slate-500 dark:text-slate-400 group-hover:text-cyan-500"
              }`}
            >
              {item.icon}
            </span>

            {/* Label */}
            <span
              className={`tracking-tight whitespace-nowrap font-mono ${
                isActive
                  ? "font-bold text-cyan-600 dark:text-cyan-400 text-base"
                  : "font-medium text-slate-500 dark:text-slate-400 text-sm group-hover:text-slate-900 dark:group-hover:text-slate-100"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
