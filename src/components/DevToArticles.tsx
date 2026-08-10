import React, { useState, useEffect } from "react";

// TypeScript interface for DEV.to API article response
interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string | null;
  readable_publish_date: string;
  reading_time_minutes: number;
  tag_list: string[];
  public_reactions_count: number;
}

interface DevToArticlesProps {
  username: string; // Your DEV.to username
  limit?: number; // Number of articles to fetch (Default: 3)
}

export const DevToArticles: React.FC<DevToArticlesProps> = ({
  username,
  limit = 3,
}) => {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // DEV.to public REST endpoint (CORS-enabled, no auth needed)
        const response = await fetch(
          `https://dev.to/api/articles?username=${username}&per_page=${limit}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles from DEV.to");
        }

        const data: DevToArticle[] = await response.json();
        setArticles(data);
      } catch (err: any) {
        setError(err.message || "Error loading articles");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchArticles();
    }
  }, [username, limit]);

  return (
    <section id="articles" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Technical Writing & Thought Leadership
          </h2>
          <p className="text-slate-400 mt-1">
            Articles on architecture patterns, performance optimization, and
            modern React state boundaries.
          </p>
        </div>
        <a
          href={`https://dev.to/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-200 border border-slate-700 transition-colors"
        >
          View DEV.to Profile
          <svg
            className="w-4 h-4"
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
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(limit)].map((_, index) => (
            <div
              key={index}
              className="h-64 rounded-xl bg-slate-800/50 border border-slate-700/50 animate-pulse p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                <div className="h-6 bg-slate-700 rounded w-5/6"></div>
                <div className="h-4 bg-slate-700 rounded w-full"></div>
              </div>
              <div className="h-4 bg-slate-700 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error / Fallback State */}
      {error && !loading && (
        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm text-center">
          Unable to load articles live from DEV.to. You can view them directly
          on{" "}
          <a
            href={`https://dev.to/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            dev.to/{username}
          </a>
          .
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && articles.length === 0 && (
        <div className="text-center py-8 text-slate-400 bg-slate-800/30 rounded-xl border border-slate-800">
          No published articles found for @{username} yet.
        </div>
      )}

      {/* Articles Card Grid */}
      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-xl p-6 bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>{article.readable_publish_date}</span>
                  <span>{article.reading_time_minutes} min read</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 line-clamp-3 mb-4">
                  {article.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tag_list.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-indigo-300 border border-slate-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-medium text-slate-400 group-hover:text-slate-200">
                  <span className="flex items-center gap-1">
                    ❤️ {article.public_reactions_count} Reactions
                  </span>
                  <span className="inline-flex items-center gap-1 text-indigo-400 group-hover:translate-x-1 transition-transform">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
