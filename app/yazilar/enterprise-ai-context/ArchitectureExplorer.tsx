
"use client";

import { useState } from "react";

type Stage = {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  border: string;
  description: string;
};

export default function ArchitectureExplorer({
  stages,
}: {
  stages: Stage[];
}) {
  const [activeIndex, setActiveIndex] = useState(2);

  const active = stages[activeIndex];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {stages.map((stage, index) => {
          const selected = activeIndex === index;

          return (
            <button
              key={stage.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={selected}
              className={`group rounded-xl border p-4 text-left transition-all duration-300 ${
                selected
                  ? `${stage.border} bg-slate-800/80 shadow-lg shadow-cyan-950/20`
                  : "border-slate-800 bg-slate-950/70 hover:border-slate-600"
              }`}
            >
              <span className="mb-4 block font-mono text-[10px] text-slate-500">
                {stage.number} / 06
              </span>

              <span
                className={`block text-base font-bold ${stage.color}`}
              >
                {stage.title}
              </span>

              <span className="mt-1 block text-[10px] text-slate-400">
                {stage.subtitle}
              </span>

              <div
                className={`mt-4 h-1 rounded-full transition-all ${
                  selected ? "bg-cyan-400" : "bg-slate-800"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="mt-5 rounded-xl border border-cyan-500/20 bg-slate-950/80 p-6"
      >
        <span className="font-mono text-[10px] tracking-widest text-cyan-400">
          SELECTED ARCHITECTURE LAYER
        </span>

        <h3 className="mt-3 text-xl font-bold text-white">
          {active.number} — {active.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {active.description}
        </p>
      </div>

      <p className="mt-4 text-center font-mono text-[10px] text-slate-500">
        BİR KATMAN SEÇEREK MİMARİYİ KEŞFET
      </p>
    </div>
  );
}
