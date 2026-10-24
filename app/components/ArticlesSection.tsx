
"use client";

import { useState } from "react";
import Link from "next/link";

type Category = "ALL" | "ESSAY" | "NOTE" | "SIGNAL";
type VisualVariant = "context" | "mcp" | "agents";

type Article = {
  id: string;
  category: Exclude<Category, "ALL">;
  title: string;
  description: string;
  tags: string[];
  readingTime: string;
  color: string;
  visual: VisualVariant;
  href?: string;
};

const articles: Article[] = [
  {
    id: "001",
    category: "ESSAY",
    title: "Why Enterprise AI Is a Context Problem",
    description:
      "Kurumsal yapay zekâ neden yalnızca bir model veya veri problemi değildir? ERP verisi, Business Context ve Context Engineering arasındaki ilişki.",
    tags: ["ERP", "CONTEXT", "AGENTS"],
    readingTime: "12 DAKİKA",
    color: "cyan",
    visual: "context",
    href: "/yazilar/enterprise-ai-context",
  },
  {
    id: "018",
    category: "NOTE",
    title: "Why MCP Matters for ERP Systems",
    description:
      "MCP yalnızca bir LLM'in tool çağırması değildir. Kurumsal yeteneklerin agent'lar tarafından keşfedilebilir hale gelmesini sağlayan mimari yaklaşım.",
    tags: ["MCP", "INTEGRATION"],
    readingTime: "3 DAKİKA",
    color: "purple",
    visual: "mcp",
    href: "/yazilar/mcp-erp",
  },
  {
    id: "001",
    category: "SIGNAL",
    title: "Agent-to-Agent (A2A) Layer",
    description:
      "AI Agent sistemlerinin birbirleriyle iletişim kurmasını sağlayan protokoller ve kurumsal sistemlere olası etkileri.",
    tags: ["A2A", "MULTI-AGENT"],
    readingTime: "2 DAKİKA",
    color: "amber",
    visual: "agents",
  },
];

function ArticleVisual({
  variant,
}: {
  variant: VisualVariant;
}) {
  const palette = {
    context: {
      primary: "#22d3ee",
      secondary: "#818cf8",
    },
    mcp: {
      primary: "#a78bfa",
      secondary: "#22d3ee",
    },
    agents: {
      primary: "#fbbf24",
      secondary: "#fb7185",
    },
  };

  const colors = palette[variant];

  return (
    <div className="relative h-44 overflow-hidden bg-[#080e1b]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px]" />

      <svg
        viewBox="0 0 400 180"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Teknoloji mimarisi illüstrasyonu"
      >
        <defs>
          <radialGradient id={`glow-${variant}`}>
            <stop
              offset="0%"
              stopColor={colors.primary}
              stopOpacity="0.25"
            />
            <stop
              offset="100%"
              stopColor={colors.primary}
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        <circle
          cx="200"
          cy="90"
          r="125"
          fill={`url(#glow-${variant})`}
        />

        {[
          [80, 90],
          [145, 45],
          [145, 135],
          [255, 45],
          [255, 135],
          [320, 90],
        ].map(([x, y], index) => (
          <g key={index}>
            <line
              x1={200}
              y1={90}
              x2={x}
              y2={y}
              stroke={colors.primary}
              strokeOpacity="0.35"
              strokeWidth="1"
              strokeDasharray="4 5"
            />

            <circle
              cx={x}
              cy={y}
              r="7"
              fill="#0f172a"
              stroke={
                index % 2 === 0
                  ? colors.primary
                  : colors.secondary
              }
              strokeWidth="1.5"
            />

            <circle
              cx={x}
              cy={y}
              r="2"
              fill={colors.primary}
            />
          </g>
        ))}

        <circle
          cx="200"
          cy="90"
          r="33"
          fill="#0b1220"
          stroke={colors.primary}
          strokeWidth="1.5"
        />

        <circle
          cx="200"
          cy="90"
          r="24"
          fill="none"
          stroke={colors.secondary}
          strokeOpacity="0.5"
          strokeDasharray="3 5"
        />

        <text
          x="200"
          y="95"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="11"
          fontWeight="bold"
        >
          {variant === "context"
            ? "CONTEXT"
            : variant === "mcp"
              ? "MCP"
              : "A2A"}
        </text>
      </svg>

      <div className="absolute bottom-3 left-4 font-mono text-[9px] tracking-widest text-slate-500">
        KARTAL.DEV / KNOWLEDGE SYSTEM
      </div>
    </div>
  );
}

export default function ArticlesSection() {
  const [category, setCategory] = useState<Category>("ALL");

  const filters: { label: string; value: Category }[] = [
    { label: "TÜMÜ", value: "ALL" },
    { label: "ESSAYS", value: "ESSAY" },
    { label: "NOTES", value: "NOTE" },
    { label: "SIGNALS", value: "SIGNAL" },
  ];

  const filteredArticles =
    category === "ALL"
      ? articles
      : articles.filter((article) => article.category === category);

  return (
    <section
      id="yazilar"
      className="border-t border-slate-900 py-20"
    >
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-cyan-400">
            01 / THINK
          </span>

          <h2 className="mb-1 text-2xl font-bold text-white">
            YAZILAR
          </h2>

          <p className="text-xs font-light text-slate-400">
            Fikirler, analizler ve teknik notlar.
            Teknolojiyi yalnızca takip etmek değil,
            ne değiştirdiğini anlamak.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setCategory(filter.value)}
              aria-pressed={category === filter.value}
              className={`border-b pb-1 font-mono text-xs transition-colors ${
                category === filter.value
                  ? "border-cyan-400 font-bold text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filteredArticles.map((article) => (
          <article
            key={`${article.category}-${article.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/20"
          >
            {article.href ? (
              <Link
                href={article.href}
                aria-label={`${article.title} makalesini oku`}
                className="block"
              >
                <ArticleVisual variant={article.visual} />
              </Link>
            ) : (
              <ArticleVisual variant={article.visual} />
            )}

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded border border-slate-700 bg-slate-900 px-2 py-1 font-mono text-[10px] text-cyan-300">
                  {article.category} / {article.id}
                </span>

                <span className="font-mono text-[10px] text-slate-500">
                  {article.readingTime}
                </span>
              </div>

              <h3 className="mb-3 text-base font-bold leading-snug text-white transition-colors group-hover:text-cyan-300">
                {article.href ? (
                  <Link
                    href={article.href}
                    className="focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                  >
                    {article.title}
                  </Link>
                ) : (
                  article.title
                )}
              </h3>

              <p className="mb-6 flex-1 text-xs font-light leading-relaxed text-slate-400">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-slate-900 px-2 py-1 font-mono text-[9px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {article.href ? (
                <Link
                  href={article.href}
                  className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-[11px] font-bold text-cyan-400 transition-colors hover:text-cyan-200 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  MAKALEYİ OKU
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <span className="mt-4 font-mono text-[10px] text-slate-500">
                  YAKINDA
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
