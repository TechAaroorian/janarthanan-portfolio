import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const VisitorCounter: React.FC = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Replace 'janarthanan-dev' with your exact GoatCounter subdomain
    fetch("https://janarthanan-dev.goatcounter.com/counter/TOTAL.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch pageview count");
        return res.json();
      })
      .then((data) => {
        // GoatCounter returns count as a formatted string (e.g. "1,245")
        const parsedCount = parseInt(data.count.replace(/,/g, ""), 10);
        if (!isNaN(parsedCount)) {
          setViews(parsedCount);
        }
      })
      .catch((err) => {
        console.error("GoatCounter fetch error:", err);
      });
  }, []);

  // Return null if loading or failed so it fails gracefully without breaking the layout
  if (views === null) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/50 text-xs font-mono text-slate-400 shadow-sm">
      <Eye size={14} className="text-cyan-400 animate-pulse" />
      <span>
        Visits:{" "}
        <strong className="text-cyan-400">{views.toLocaleString()}</strong>
      </span>
    </div>
  );
};
