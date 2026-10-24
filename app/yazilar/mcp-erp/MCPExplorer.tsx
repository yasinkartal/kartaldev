
"use client";

import { useState } from "react";

type Layer = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  responsibility: string;
  color: string;
  border: string;
  background: string;
};

const layers: Layer[] = [
  {
    id: "01",
    title: "SAP ERP",
    subtitle: "System of Record",
    description:
      "Satın alma, finans, üretim ve stok süreçlerinin yürütüldüğü kaynak sistem. Veriler ve iş kuralları SAP tarafında yönetilir.",
    responsibility:
      "Kaynak sistem yetkileri, veri kapsamı ve iş kuralları",
    color: "text-cyan-300",
    border: "border-cyan-400/60",
    background: "bg-cyan-500/10",
  },
  {
    id: "02",
    title: "Integration",
    subtitle: "CDS / OData / API",
    description:
      "SAP verilerini kontrollü servisler üzerinden erişilebilir hale getirir. CDS View, OData veya uygun API'ler kullanılabilir.",
    responsibility:
      "Veri sözleşmeleri, giriş doğrulama ve API erişimi",
    color: "text-blue-300",
    border: "border-blue-400/60",
    background: "bg-blue-500/10",
  },
  {
    id: "03",
    title: "MCP Server",
    subtitle: "Tools / Resources",
    description:
      "Kurumsal yetenekleri MCP üzerinden sunar. Örneğin satın alma siparişi sorgulama aracı tanımlayabilir.",
    responsibility:
      "Tool tanımları, sunucu tarafı doğrulama ve erişim politikaları",
    color: "text-violet-300",
    border: "border-violet-400/60",
    background: "bg-violet-500/10",
  },
  {
    id: "04",
    title: "MCP Client",
    subtitle: "Protocol Connection",
    description:
      "AI Host uygulamasının MCP Server ile iletişim kuran bileşenidir. Tool discovery ve tool çağrıları bu bağlantı üzerinden yürür.",
    responsibility:
      "Protokol oturumu ve MCP mesajlarının taşınması",
    color: "text-fuchsia-300",
    border: "border-fuchsia-400/60",
    background: "bg-fuchsia-500/10",
  },
  {
    id: "05",
    title: "AI Host",
    subtitle: "LLM / Agent",
    description:
      "Kullanıcı isteğini yorumlar, uygun araçları seçer ve dönen sonuçları açıklar. İşlem yetkisi yalnızca modelin kararına bırakılmaz.",
    responsibility:
      "Kullanıcı etkileşimi, orchestration ve sonuçların sunumu",
    color: "text-emerald-300",
    border: "border-emerald-400/60",
    background: "bg-emerald-500/10",
  },
];

const workflow = [
  {
    title: "Tool Discovery",
    actor: "MCP Client → MCP Server",
    detail:
      "İstemci, sunucunun sunduğu araçları ve bu araçların giriş şemalarını keşfeder.",
    example: "tools/list",
  },
  {
    title: "Tool Selection",
    actor: "AI Host / Agent",
    detail:
      "Kullanıcı isteğine uygun araç, host uygulamasının kontrolü altında seçilir.",
    example: "purchasing.list_pending_orders",
  },
  {
    title: "Authorization",
    actor: "MCP Server / Integration / SAP",
    detail:
      "Kimlik, erişim kapsamı, araç izinleri ve SAP kaynak sistem yetkileri kontrol edilir.",
    example: "User scope → Company scope → SAP permissions",
  },
  {
    title: "Tool Execution",
    actor: "MCP Server → SAP API",
    detail:
      "Sunucu doğrulanan parametrelerle ilgili entegrasyon servisini çağırır.",
    example: "tools/call → OData / API",
  },
  {
    title: "Response",
    actor: "SAP → MCP Server → AI Host",
    detail:
      "Yetkili veri kapsamındaki sonuç, MCP üzerinden host uygulamasına döner ve kullanıcıya açıklanır.",
    example: "Structured result → User answer",
  },
];

export default function MCPExplorer() {
  const [activeLayer, setActiveLayer] = useState(2);
  const [activeStep, setActiveStep] = useState(0);

  const selectedLayer = layers[activeLayer];
  const selectedStep = workflow[activeStep];

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300">
            INTERACTIVE ARCHITECTURE
          </span>
          <span className="font-mono text-[10px] text-slate-500">
            SELECT A LAYER
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer, index) => {
            const selected = index === activeLayer;

            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayer(index)}
                aria-pressed={selected}
                className={`relative min-h-36 rounded-xl border p-4 text-left transition-all duration-300 ${
                  selected
                    ? `${layer.border} ${layer.background} shadow-lg shadow-violet-950/30`
                    : "border-slate-800 bg-slate-950/70 hover:border-slate-600"
                }`}
              >
                <span className="font-mono text-[10px] text-slate-500">
                  {layer.id} / 05
                </span>

                <h3 className={`mt-5 text-sm font-bold ${layer.color}`}>
                  {layer.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-400">
                  {layer.subtitle}
                </p>

                {index < layers.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-violet-400 lg:block"
                  >
                    →
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-4 rounded-xl border border-violet-500/20 bg-slate-950/80 p-6"
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h3 className={`text-lg font-bold ${selectedLayer.color}`}>
              {selectedLayer.title}
            </h3>
            <span className="font-mono text-[10px] text-slate-500">
              ARCHITECTURE LAYER {selectedLayer.id}
            </span>
          </div>

          <p className="text-sm leading-7 text-slate-300">
            {selectedLayer.description}
          </p>

          <div className="mt-5 border-t border-slate-800 pt-4">
            <span className="font-mono text-[10px] text-violet-300">
              RESPONSIBILITY
            </span>
            <p className="mt-2 text-xs leading-6 text-slate-400">
              {selectedLayer.responsibility}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8">
        <div className="mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-violet-300">
            PROTOCOL EXPLORER
          </span>

          <h3 className="mt-2 text-xl font-bold text-white">
            Bir MCP Tool çağrısı nasıl ilerler?
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Örnek senaryo: Kullanıcı, SAP ERP üzerinde
            onay bekleyen satın alma siparişlerini
            sorgulamak istiyor.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-5">
          {workflow.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
              className={`rounded-lg border px-3 py-4 text-left transition-all ${
                activeStep === index
                  ? "border-violet-400/60 bg-violet-500/10 text-violet-200"
                  : "border-slate-800 bg-slate-950/70 text-slate-400 hover:border-slate-600"
              }`}
            >
              <span className="block font-mono text-[10px] opacity-60">
                STEP {String(index + 1).padStart(2, "0")}
              </span>

              <span className="mt-2 block text-xs font-semibold">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-4 rounded-xl border border-violet-500/20 bg-[#080e1b] p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-base font-bold text-white">
              {selectedStep.title}
            </h4>
            <span className="font-mono text-[10px] text-violet-300">
              {activeStep + 1} / {workflow.length}
            </span>
          </div>

          <p className="mb-4 font-mono text-xs text-cyan-300">
            {selectedStep.actor}
          </p>

          <p className="text-sm leading-7 text-slate-300">
            {selectedStep.detail}
          </p>

          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4">
            <code className="block whitespace-pre-wrap break-words font-mono text-xs text-emerald-300">
              {selectedStep.example}
            </code>
          </div>

          <div className="mt-5 flex flex-wrap justify-between gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveStep((current) => Math.max(0, current - 1))
              }
              disabled={activeStep === 0}
              className="rounded-lg border border-slate-700 px-4 py-2 font-mono text-xs text-slate-300 transition-colors hover:border-violet-400 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← ÖNCEKİ
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveStep((current) =>
                  Math.min(workflow.length - 1, current + 1)
                )
              }
              disabled={activeStep === workflow.length - 1}
              className="rounded-lg border border-violet-500/40 bg-violet-950/30 px-4 py-2 font-mono text-xs text-violet-200 transition-colors hover:border-violet-400 disabled:cursor-not-allowed disabled:opacity-30"
            >
              SONRAKİ →
            </button>
          </div>
        </div>
      </div>

      <p className="font-mono text-[10px] leading-6 text-slate-500">
        Bu etkileşimli gösterim kavramsal bir simülasyondur.
        Gerçek SAP bağlantısı veya canlı veri erişimi içermez.
      </p>
    </div>
  );
}

