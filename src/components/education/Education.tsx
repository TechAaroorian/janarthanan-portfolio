import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface Degree {
  degree: string;
  institution: string;
  year: string;
  location: string;
  note?: string;
}

const degrees: Degree[] = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Anjalai Ammal Mahalingam Engineering College",
    year: "2016",
    location: "Thiruvarur, Tamil Nadu",
    note: "Software Engineering, Database Systems, and Computer Science Foundations.",
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc IT)",
    institution: "Nethaji Subash Chandra Bose College",
    year: "2013",
    location: "Thiruvarur, Tamil Nadu",
    note: "Information Technology Fundamentals, Programming Logic, and Web Basics.",
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-6 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-6"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Education & Academic Background
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Academic degree details and computer science foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {degrees.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-cyan-500/40 transition-all"
          >
            <div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              {item.note && (
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {item.note}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {item.year}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
