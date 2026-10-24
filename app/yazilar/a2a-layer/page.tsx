
import type { Metadata } from "next";
import Link from "next/link";
import A2AExplorer from "./A2AExplorer";

export const metadata: Metadata = {
  title: "Agent-to-Agent (A2A) Layer | Yasin Kartal",
  description:
    "Agent-to-Agent (A2A) protokolü, çoklu AI Agent mimarileri, MCP ile farkları ve kurumsal ERP sistemlerindeki kullanım senaryoları üzerine teknik analiz.",
  alternates: {
    canonical: "https://www.kartal.dev/yazilar/a2a-layer",
  },
  openGraph: {
    title: "Agent-to-Agent (A2A) Layer",
    description:
      "AI Agent sistemleri birbirleriyle nasıl iletişim kurar? A2A, MCP ve kurumsal iş akışları.",
    url: "https://www.kartal.dev/yazilar/a2a-layer",
    type: "article",
    locale: "tr_TR",
  },
};

const differences = [
  {
    property: "Temel amaç",
    mcp: "Agent uygulamalarının araçlara ve kaynaklara erişimi",
    a2a: "Farklı agent sistemleri arasında görev ve sonuç alışverişi",
  },
  {
    property: "İletişim",
    mcp: "MCP Client ↔ MCP Server",
    a2a: "A2A Client ↔ A2A Server / Remote Agent",
  },
  {
    property: "Yetenek keşfi",
    mcp: "Tools, Resources ve Prompts",
    a2a: "Agent Card ve tanımlanan agent yetenekleri",
  },
  {
    property: "Çalışma modeli",
    mcp: "Araç çağrıları ve kaynak erişimi",
    a2a: "Görev yaşam döngüsü, mesajlar ve sonuçlar",
  },
  {
    property: "ERP örneği",
    mcp: "Satın alma siparişi sorgulama aracını çağırma",
    a2a: "Purchasing Agent'ın Finance Agent'a bütçe değerlendirmesi görevi vermesi",
  },
];

const principles = [
  {
    number: "01",
    title: "Agent Identity",
    description:
      "Agent sistemlerinin kimlikleri doğrulanmalı ve birbirleriyle hangi kapsamda iletişim kurabilecekleri belirlenmelidir.",
  },
  {
    number: "02",
    title: "Scoped Delegation",
    description:
      "Bir agent'ın başka bir agent'a görev vermesi, sınırsız yetki devri anlamına gelmemelidir.",
  },
  {
    number: "03",
    title: "Human Approval",
    description:
      "Satın alma, finans veya ana veri değişiklikleri gibi etkili işlemler için uygun insan onayı uygulanmalıdır.",
  },
  {
    number: "04",
    title: "Traceability",
    description:
      "Görevi başlatan kullanıcı, görevi devreden agent, çağrılan araçlar ve üretilen sonuçlar izlenebilir olmalıdır.",
  },
];

export default function A2ALayerArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Agent-to-Agent (A2A) Layer",
    description:
      "A2A protokolü ve kurumsal çoklu agent mimarileri üzerine teknik analiz.",
    inLanguage: "tr-TR",
    author: {
      "@type": "Person",
      name: "Yasin Kartal",
      url: "https://www.kartal.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Yasin Kartal",
    },
    mainEntityOfPage:
      "https://www.kartal.dev/yazilar/a2a-layer",
  };

  return (
    <main className="min-h-screen bg-[#03050c] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-10 md:px-8">
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <Link
            href="/"
            className="text-xl font-black tracking-widest text-amber-400"
          >
            KARTAL<span className="text-white">.DEV</span>
          </Link>

          <Link
            href="/#yazilar"
            className="font-mono text-xs text-slate-400 transition-colors hover:text-amber-300"
          >
            ← YAZILARA DÖN
          </Link>
        </header>

        <article>
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest">
              <span className="rounded border border-amber-700/50 bg-amber-950/30 px-3 py-1 text-amber-300">
                SIGNAL / 001
              </span>

              <span className="py-1 text-slate-500">
                A2A · MULTI-AGENT · ERP
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Agent-to-Agent{" "}
              <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                (A2A) Layer
              </span>
            </h1>

            <p className="mb-7 text-base leading-8 text-slate-300 md:text-lg">
              Bir AI Agent'ın kurumsal araçları kullanması
              ile başka bir AI Agent'a görev devretmesi
              farklı mimari problemlerdir. Agent-to-Agent
              (A2A), farklı agent sistemlerinin birlikte
              çalışabilmesi için standart bir iletişim
              yaklaşımı sunar.
            </p>

            <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-5 font-mono text-xs text-slate-500">
              <span>YASIN KARTAL</span>
              <span>·</span>
              <span>TEKNİK SIGNAL</span>
              <span>·</span>
              <span>A2A / MCP / AGENTS</span>
            </div>
          </div>

          <section className="relative mb-16 overflow-hidden rounded-3xl border border-amber-500/20 bg-[#10101c] p-6 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

            <div className="relative mb-8">
              <span className="font-mono text-[10px] tracking-[0.3em] text-amber-300">
                INTERACTIVE AGENT ARCHITECTURE
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Agent Network & Task Delegation
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Purchasing Agent, Finance Agent ve ERP
                araçlarının rollerini keşfet. Ardından
                bir satın alma değerlendirmesinin agent'lar
                arasında nasıl ilerlediğini incele.
              </p>
            </div>

            <div className="relative">
              <A2AExplorer />
            </div>
          </section>

          <div className="mx-auto max-w-3xl space-y-14">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                01 — Agent-to-Agent neden gerekli?
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  Kurumsal AI sistemleri geliştikçe
                  her iş sürecinin tek bir agent
                  tarafından yönetilmesi her zaman
                  uygun olmayabilir. Satın alma,
                  finans, üretim ve lojistik gibi
                  alanlarda farklı uzmanlaşmış
                  agent sistemleri bulunabilir.
                </p>

                <p>
                  Bu agent'ların birbirlerinin
                  iç mimarisini bilmeden yeteneklerini
                  keşfedebilmesi, görev iletebilmesi
                  ve sonuç paylaşabilmesi önemli
                  bir entegrasyon ihtiyacıdır.
                </p>

                <p>
                  A2A, farklı agent uygulamaları
                  arasında birlikte çalışabilirliği
                  destekleyen standart bir protokol
                  yaklaşımı sunar.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                02 — MCP ile A2A arasındaki fark
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                MCP ve A2A birbirinin alternatifi
                olarak düşünülmemelidir. Farklı
                iletişim problemlerine odaklanırlar
                ve aynı kurumsal mimaride birlikte
                kullanılabilirler.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full min-w-[540px] border-collapse text-left text-xs">
                  <thead className="bg-slate-900/90">
                    <tr>
                      <th className="p-4 font-semibold text-slate-300">
                        BOYUT
                      </th>
                      <th className="p-4 font-semibold text-violet-300">
                        MCP
                      </th>
                      <th className="p-4 font-semibold text-amber-300">
                        A2A
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {differences.map((item) => (
                      <tr
                        key={item.property}
                        className="border-t border-slate-800"
                      >
                        <td className="p-4 font-semibold text-slate-200">
                          {item.property}
                        </td>
                        <td className="p-4 leading-6 text-slate-400">
                          {item.mcp}
                        </td>
                        <td className="p-4 leading-6 text-slate-400">
                          {item.a2a}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Örneğin Finance Agent, Purchasing Agent
                tarafından A2A üzerinden görevlendirilebilir.
                Finance Agent da gerekli finansal verileri
                MCP üzerinden sunulan kontrollü araçlarla
                sorgulayabilir.
              </p>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                03 — Agent Card ve yetenek keşfi
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  A2A mimarisinde Agent Card, bir agent
                  sisteminin kimliğini, erişim bilgilerini
                  ve sunduğu yetenekleri açıklayan
                  yapılandırılmış bir tanımdır.
                </p>

                <p>
                  Böylece başka bir agent sistemi,
                  uygun erişim kontrolleri çerçevesinde
                  hangi görevlerin desteklendiğini
                  keşfedebilir.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] p-5 md:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-widest text-amber-300">
                  CONCEPTUAL AGENT CARD
                </div>

                <pre className="overflow-x-auto font-mono text-xs leading-7 text-cyan-300">
                  <code>{`{
  "name": "Finance Agent",
  "description": "Budget assessment",
  "skills": [
    {
      "id": "budget-assessment",
      "name": "Budget Assessment"
    }
  ]
}`}</code>
                </pre>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Kavramsal ve kısaltılmış örnek.
                  Tam Agent Card şeması veya
                  çalıştırılabilir yapılandırma değildir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                04 — Kurumsal ERP senaryosu
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Bir kullanıcının satın alma talebi
                hakkında bütçe değerlendirmesi
                istediğini düşünelim. Purchasing Agent
                talebi yorumlar ve Finance Agent'ın
                uzmanlık alanına giren bir alt görev
                belirler.
              </p>

              <div className="space-y-3">
                {[
                  {
                    label: "UNDERSTAND",
                    text: "Purchasing Agent kullanıcı talebini yorumlar.",
                  },
                  {
                    label: "DISCOVER",
                    text: "Finance Agent'ın uygun yeteneği keşfedilir.",
                  },
                  {
                    label: "DELEGATE",
                    text: "Yetkilendirilmiş değerlendirme görevi iletilir.",
                  },
                  {
                    label: "INVESTIGATE",
                    text: "Finance Agent kontrollü veri kaynaklarını inceler.",
                  },
                  {
                    label: "REPORT",
                    text: "Değerlendirme sonucu Purchasing Agent'a döner.",
                  },
                  {
                    label: "APPROVE",
                    text: "Gerekli insan onayı alınmadan etkili ERP işlemi yapılmaz.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <span className="font-mono text-xs text-amber-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-mono text-xs font-semibold text-white">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                05 — Governance ve güven sınırları
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Agent'ların birbirleriyle iletişim
                kurabilmesi, otomatik olarak güvenilir
                veya yetkili oldukları anlamına gelmez.
                Kurumsal mimaride yetki devri, işlem
                sınırları ve denetlenebilirlik ayrıca
                tasarlanmalıdır.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-5"
                  >
                    <span className="font-mono text-[10px] text-amber-400">
                      {item.number} / CONTROL
                    </span>

                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                06 — Sonuç
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  A2A, farklı AI Agent sistemleri
                  arasında görev koordinasyonu
                  için ortak bir iletişim yaklaşımı
                  sunar. Ancak protokolün varlığı
                  tek başına güvenli bir kurumsal
                  otomasyon mimarisi oluşturmaz.
                </p>

                <p>
                  ERP ortamlarında asıl değer,
                  uzmanlaşmış agent'ların kontrollü
                  biçimde birlikte çalışabilmesi,
                  kaynak sistem yetkilerinin
                  korunması ve kritik kararların
                  denetlenebilir olmasıdır.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
                <p className="text-lg font-semibold leading-8 text-white">
                  MCP connects agents to capabilities.
                  A2A connects agents to other agents.
                  Governance makes both enterprise-ready.
                </p>
              </div>
            </section>
          </div>
        </article>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <span className="font-mono text-xs text-slate-500">
            © KARTAL.DEV — YASIN KARTAL
          </span>

          <Link
            href="/#yazilar"
            className="font-mono text-xs text-amber-400 transition-colors hover:text-amber-200"
          >
            ← TÜM YAZILAR
          </Link>
        </footer>
      </div>
    </main>
  );
}

