
"use client";

import { useState } from "react";

const steps = [
  {
    title: "User Request",
    actor: "USER → PURCHASING AGENT",
    detail:
      "Kullanıcı, bekleyen bir satın alma talebinin bütçe açısından değerlendirilmesini ister.",
    message:
      "Bu satın alma talebinin bütçe uygunluğunu değerlendir.",
  },
  {
    title: "Agent Discovery",
    actor: "PURCHASING AGENT",
    detail:
      "Purchasing Agent, bütçe değerlendirmesi yapabilecek Finance Agent'ın sunduğu yetenekleri keşfeder. A2A mimarisinde bu bilgiler Agent Card üzerinden sunulabilir.",
    message:
      "Capability: budget-assessment",
  },
  {
    title: "Task Delegation",
    actor: "PURCHASING → FINANCE AGENT",
    detail:
      "Purchasing Agent, Finance Agent'a tanımlı kapsamda bir değerlendirme görevi gönderir. Kimlik doğrulama ve yetkilendirme kontrolleri uygulanmalıdır.",
    message:
      "Task: Evaluate budget availability",
  },
  {
    title: "Investigation",
    actor: "FINANCE AGENT",
    detail:
      "Finance Agent, izin verilen veri kaynaklarını ve araçları kullanarak değerlendirme yapar. ERP erişimi gerektiğinde MCP veya başka kontrollü API entegrasyonları kullanılabilir.",
    message:
      "Budget check: illustrative result",
  },
  {
    title: "Result Exchange",
    actor: "FINANCE → PURCHASING AGENT",
    detail:
      "Finance Agent, görevin sonucunu yapılandırılmış bir çıktı olarak iletir. Purchasing Agent sonucu bağlamıyla birlikte değerlendirir.",
    message:
      "Result: Review required before approval",
  },
  {
    title: "Human Decision",
    actor: "PURCHASING AGENT → USER",
    detail:
      "Agent, bulguları kullanıcıya sunar. Satın alma siparişi oluşturma veya değiştirme gibi işlemler otomatik olarak gerçekleştirilmez.",
    message:
      "Decision: Awaiting human approval",
  },
];

const agents = [
  {
    name: "Purchasing Agent",
    role: "Task Coordinator",
    color: "text-cyan-300",
    border: "border-cyan-500/40",
    description:
      "Kullanıcı talebini yorumlar, gerekli alt görevleri belirler ve diğer agent'lardan gelen sonuçları birleştirir.",
  },
  {
    name: "Finance Agent",
    role: "Specialist Agent",
    color: "text-amber-300",
    border: "border-amber-500/40",
    description:
      "Bütçe uygunluğu ve finansal değerlendirme görevlerini kendi yetki kapsamı içinde yerine getirir.",
  },
  {
    name: "ERP Tools",
    role: "Controlled Integration",
    color: "text-violet-300",
    border: "border-violet-500/40",
    description:
      "Agent'ların ihtiyaç duyduğu kurumsal verileri kaynak sistem yetkilerine uygun şekilde sunan araçlar ve API'lerdir.",
  },
];

export default function A2AExplorer() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeAgent, setActiveAgent] = useState(0);

  const step = steps[activeStep];
  const agent = agents[activeAgent];

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-amber-300">
            AGENT NETWORK
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            SELECT A COMPONENT
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {agents.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={activeAgent === index}
              onClick={() => setActiveAgent(index)}
              className={`rounded-xl border p-5 text-left transition-all ${
                activeAgent === index
                  ? `${item.border} bg-amber-500/10`
                  : "border-slate-800 bg-slate-950/70 hover:border-slate-600"
              }`}
            >
              <span className="font-mono text-[10px] text-slate-500">
                NODE {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`mt-4 font-bold ${item.color}`}>
                {item.name}
              </h3>
              <p className="mt-2 font-mono text-[10px] text-slate-400">
                {item.role}
              </p>
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-4 rounded-xl border border-amber-500/20 bg-slate-950/80 p-6"
        >
          <h3 className={`mb-3 font-bold ${agent.color}`}>
            {agent.name}
          </h3>
          <p className="text-sm leading-7 text-slate-300">
            {agent.description}
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8">
        <span className="font-mono text-[10px] tracking-[0.2em] text-amber-300">
          TASK FLOW SIMULATOR
        </span>
        <h3 className="mt-2 text-xl font-bold text-white">
          Bir agent başka bir agent ile nasıl çalışır?
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Satın alma ve finans agent'ları arasındaki
          örnek görev akışını adım adım incele.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
          {steps.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={activeStep === index}
              onClick={() => setActiveStep(index)}
              className={`rounded-lg border p-3 text-left transition-all ${
                activeStep === index
                  ? "border-amber-400/60 bg-amber-500/10 text-amber-200"
                  : "border-slate-800 bg-slate-950/70 text-slate-400 hover:border-slate-600"
              }`}
            >
              <span className="block font-mono text-[10px] opacity-60">
                STEP {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-xs font-semibold">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-4 rounded-xl border border-amber-500/20 bg-[#0b1220] p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 className="font-bold text-white">
              {step.title}
            </h4>
            <span className="font-mono text-[10px] text-amber-300">
              {activeStep + 1} / {steps.length}
            </span>
          </div>

          <p className="mt-4 font-mono text-xs text-cyan-300">
            {step.actor}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            {step.detail}
          </p>

          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4">
            <code className="block whitespace-pre-wrap break-words text-xs text-emerald-300">
              {step.message}
            </code>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() =>
                setActiveStep((current) => Math.max(0, current - 1))
              }
              className="rounded-lg border border-slate-700 px-4 py-2 font-mono text-xs text-slate-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← ÖNCEKİ
            </button>

            <button
              type="button"
              disabled={activeStep === steps.length - 1}
              onClick={() =>
                setActiveStep((current) =>
                  Math.min(steps.length - 1, current + 1)
                )
              }
              className="rounded-lg border border-amber-500/40 bg-amber-950/30 px-4 py-2 font-mono text-xs text-amber-200 disabled:cursor-not-allowed disabled:opacity-30"
            >
              SONRAKİ →
            </button>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] leading-6 text-slate-500">
        Kavramsal simülasyon. Gerçek agent bağlantısı,
        SAP erişimi veya canlı işlem içermez.
      </p>
    </div>
  );
}

