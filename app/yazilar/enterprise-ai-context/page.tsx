
import type { Metadata } from "next";
import Link from "next/link";
import ArchitectureExplorer from "./ArchitectureExplorer";

export const metadata: Metadata = {
  title: "Why Enterprise AI Is a Context Problem | Yasin Kartal",
  description:
    "Enterprise AI neden yalnızca bir LLM veya veri problemi değildir? SAP ERP, Business Context, Context Engineering, MCP ve Governance üzerinden Türkçe teknik analiz.",
  alternates: {
    canonical:
      "https://www.kartal.dev/yazilar/enterprise-ai-context",
  },
  openGraph: {
    title: "Why Enterprise AI Is a Context Problem",
    description:
      "ERP verisinden güvenilir Enterprise AI sistemlerine: Context Engineering, MCP ve Governance mimarisi.",
    url: "https://www.kartal.dev/yazilar/enterprise-ai-context",
    type: "article",
    locale: "tr_TR",
  },
};

const stages = [
  {
    number: "01",
    title: "Data",
    subtitle: "Systems of Record",
    color: "text-slate-300",
    border: "border-slate-500/40",
    description:
      "ERP sistemleri işlemleri, hareketleri ve iş süreçlerini kaydeder. Ancak bir kayıt, tek başına iş kararının anlamını açıklamaz.",
  },
  {
    number: "02",
    title: "Connection",
    subtitle: "Integration & APIs",
    color: "text-cyan-300",
    border: "border-cyan-500/40",
    description:
      "CDS View, API ve entegrasyon servisleri veriyi erişilebilir hale getirir. Erişilebilirlik, verinin doğru yorumlandığını garanti etmez.",
  },
  {
    number: "03",
    title: "Context",
    subtitle: "Business Semantics",
    color: "text-violet-300",
    border: "border-violet-500/40",
    description:
      "Business Context; alanların anlamını, hesaplama kurallarını, yetkileri, zaman boyutunu ve süreç ilişkilerini tanımlar.",
  },
  {
    number: "04",
    title: "Intelligence",
    subtitle: "LLMs & Reasoning",
    color: "text-blue-300",
    border: "border-blue-500/40",
    description:
      "LLM, kendisine sağlanan veri ve bağlam üzerinde yorumlama, açıklama ve akıl yürütme yapar. Sonuçların doğrulanması gerekir.",
  },
  {
    number: "05",
    title: "Agency",
    subtitle: "Tools & Actions",
    color: "text-emerald-300",
    border: "border-emerald-500/40",
    description:
      "Agent, yetkilendirilmiş araçlarla sorgulama ve kontrollü işlem akışlarına katılabilir. Her aksiyon ayrı doğrulama gerektirir.",
  },
  {
    number: "06",
    title: "Control",
    subtitle: "Governance & Audit",
    color: "text-amber-300",
    border: "border-amber-500/40",
    description:
      "Authorization, Human-in-the-Loop, Audit ve Evaluation katmanları sistemin güvenilir çalışmasını destekler.",
  },
];

export default function EnterpriseAIContextPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Enterprise AI Is a Context Problem",
    description:
      "SAP ERP, Context Engineering, MCP ve Governance üzerinden Enterprise AI mimarisinin incelenmesi.",
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
      "https://www.kartal.dev/yazilar/enterprise-ai-context",
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
            className="text-xl font-black tracking-widest text-cyan-400"
          >
            KARTAL<span className="text-white">.DEV</span>
          </Link>

          <Link
            href="/#yazilar"
            className="text-xs font-mono text-slate-400 transition-colors hover:text-cyan-300"
          >
            ← YAZILARA DÖN
          </Link>
        </header>

        <article>
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest">
              <span className="rounded border border-cyan-800 bg-cyan-950/50 px-3 py-1 text-cyan-300">
                ESSAY / 001
              </span>
              <span className="py-1 text-slate-500">
                ENTERPRISE AI · CONTEXT ENGINEERING
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Why Enterprise AI Is a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Context Problem
              </span>
            </h1>

            <p className="mb-7 text-base leading-8 text-slate-300 md:text-lg">
              Kurumsal yapay zekânın en büyük zorluklarından
              biri, modele daha fazla veri vermek değil;
              verinin hangi iş sürecinde, hangi kurallarla
              ve hangi yetkiler altında anlam kazandığını
              doğru şekilde aktarmaktır.
            </p>

            <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-5 font-mono text-xs text-slate-500">
              <span>YASIN KARTAL</span>
              <span>·</span>
              <span>TEKNİK ANALİZ</span>
              <span>·</span>
              <span>ERP / AI / GOVERNANCE</span>
            </div>
          </div>

          <div className="relative mb-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#071120] p-6 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative mb-8">
              <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                ENTERPRISE AI ARCHITECTURE
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Veriden bağlama, bağlamdan zekâya
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                Aşağıdaki mimaride bir katman seçerek
                kurumsal AI sistemindeki rolünü inceleyebilirsin.
              </p>
            </div>

            <ArchitectureExplorer stages={stages} />
          </div>

          <div className="mx-auto max-w-3xl space-y-14">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                01 — Veri neden tek başına yeterli değil?
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  SAP ERP gibi kurumsal sistemler satın alma
                  siparişlerini, finansal belgeleri, stok
                  hareketlerini, üretim emirlerini ve daha
                  birçok işlemi kaydeder.
                </p>

                <p>
                  Örneğin bir satın alma siparişinde miktar,
                  fiyat, para birimi ve tedarikçi bilgileri
                  bulunabilir. Ancak bu alanların varlığı,
                  siparişin neden blokajda olduğunu veya
                  hangi koşullarda onaylanabileceğini
                  açıklamak için yeterli değildir.
                </p>

                <p>
                  Bunun için ilgili iş kuralları, belge
                  durumu, organizasyon yapısı, yetkiler
                  ve süreç geçmişi de gerekir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                02 — Connection, Context değildir
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  CDS View, OData API ve MCP gibi
                  teknolojiler kurumsal sistemlerdeki
                  verilerin ve yeteneklerin erişilebilir
                  olmasına yardımcı olur.
                </p>

                <p>
                  Fakat bir LLM&apos;in bir API&apos;ye
                  bağlanabiliyor olması, dönen verinin
                  iş anlamını otomatik olarak bildiği
                  anlamına gelmez.
                </p>

                <p>
                  Örneğin bir tutarın belge para biriminde
                  mi, şirket kodu para biriminde mi
                  gösterildiği; vergilerin veya ek
                  maliyetlerin dahil olup olmadığı
                  açıkça tanımlanmalıdır.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                03 — Context Engineering ne sağlar?
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Context Engineering, modele sunulan
                bilginin seçilmesi, yapılandırılması
                ve görev için uygun hale getirilmesi
                yaklaşımıdır. Kurumsal kullanımda bu,
                yalnızca belge parçalarını bir prompt
                içine yerleştirmekten daha kapsamlıdır.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Business Semantics",
                    detail:
                      "Alanların iş anlamı, hesaplama kuralları ve süreç tanımları.",
                  },
                  {
                    title: "Data Provenance",
                    detail:
                      "Bilginin hangi sistemden, kaynaktan ve tarihten geldiği.",
                  },
                  {
                    title: "Authorization",
                    detail:
                      "Kullanıcının ve agent'ın hangi veriye veya işleme erişebileceği.",
                  },
                  {
                    title: "Validation",
                    detail:
                      "Çıktının deterministik kontrollerle doğrulanması.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-800 bg-slate-950/80 p-5"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-cyan-300">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-6 text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                04 — Bir ERP Agent nasıl çalışmalı?
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Güvenilir bir kurumsal agent mimarisinde
                LLM, bütün kararları tek başına veren
                bir otorite değildir. İş kuralları,
                kaynak sistem yetkileri ve insan onayı
                ayrı kontrol katmanları olarak çalışır.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] p-5 md:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-widest text-cyan-400">
                  CONTROLLED AGENT WORKFLOW
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "Understand",
                    "Validate",
                    "Investigate",
                    "Decide",
                    "Approve",
                    "Act",
                    "Prove",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-2"
                    >
                      <span
                        className={`rounded-lg border px-3 py-2 font-mono text-[11px] ${
                          step === "Approve"
                            ? "border-amber-500/50 bg-amber-950/30 text-amber-300"
                            : "border-cyan-900 bg-cyan-950/20 text-cyan-200"
                        }`}
                      >
                        {step}
                      </span>
                      {index < 6 && (
                        <span className="text-slate-600">→</span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-6 text-slate-400">
                  Bu akış örnek bir mimari modeldir.
                  Özellikle veri değiştiren işlemlerde
                  yetki kontrolü, onay ve audit
                  mekanizmaları sistem tarafından
                  uygulanmalıdır.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                05 — Sonuç: Model değil, sistem tasarımı
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  Enterprise AI başarısı yalnızca
                  kullanılan LLM&apos;in kapasitesine
                  bağlı değildir. Veri kalitesi,
                  Business Context, Integration,
                  Governance ve Evaluation
                  birlikte tasarlanmalıdır.
                </p>

                <p>
                  Bir kurumsal agent'ın değerini
                  belirleyen şey yalnızca iyi cevap
                  vermesi değil; doğru veriyi
                  kullanması, yetki sınırlarına
                  uyması ve gerektiğinde
                  denetlenebilir aksiyon
                  üretebilmesidir.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6">
                <p className="text-lg font-semibold leading-8 text-white">
                  Enterprise AI is not just a model problem.
                  It is a context, integration and
                  governance problem.
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
            className="font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-200"
          >
            ← TÜM YAZILAR
          </Link>
        </footer>
      </div>
    </main>
  );
}
