import React from "react";
import { VisitorCounter } from "./ui/VisitorCounter";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll trigger back to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="print:hidden relative mt-20 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl text-slate-400 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                Janarthanan Soundhararajan
              </h3>
              {/* Availability Badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open for Opportunities
              </span>
            </div>
            {/* General Location Display (No Street Address) */}
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1 font-mono">
              <span>📍 Thiruvarur, Tamil Nadu, India</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">
                Available Globally (Remote / Hybrid)
              </span>
            </p>
          </div>

          {/* Back to Top Scroll Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/20 cursor-pointer"
          >
            <span>Back to Top</span>
            <svg
              className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-slate-800/60 text-sm">
          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="#summary"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Summary
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Skill Evolution
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#articles"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Technical Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Handles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/janarthanan-soundararajan-0544ab85/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span>LinkedIn Profile</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TechAaroorian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span>GitHub Repositories</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/janarthanan_soundararajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span>DEV.to Writings</span>
                  <svg
                    className="w-3.5 h-3.5 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiry */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Seeking frontend architecture consulting or lead engineering
              roles?
            </p>
            <a
              href="mailto:janarthanan1821993@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40"
            >
              janarthanan1821993@gmail.com
            </a>
          </div>

          {/* Live Custom Domain Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Live Address
            </h4>
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300">
              <span className="text-cyan-400">https://</span>
              janarthanan-dev.com
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Hosted on GitHub Pages with SSL & privacy protection.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Tech Stack, & GoatCounter Live Analytics Badge */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} Janarthanan Soundhararajan. All rights reserved.
          </p>

          {/* Live GoatCounter Visitor Badge Component */}
          <VisitorCounter />

          <p className="flex items-center gap-1.5 font-mono">
            <span>Engineered with</span>
            <span className="text-slate-300 font-semibold">React</span> +
            <span className="text-slate-300 font-semibold">TypeScript</span> +
            <span className="text-slate-300 font-semibold">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
