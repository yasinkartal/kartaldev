import MCPExplorer from "./MCPExplorer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why MCP Matters for ERP Systems | Yasin Kartal",
  description:
    "Model Context Protocol (MCP), SAP ERP sistemleri ve AI Agent mimarisi. Tool discovery, authorization, business context ve güvenli entegrasyon üzerine Türkçe teknik analiz.",
  alternates: {
    canonical: "https://www.kartal.dev/yazilar/mcp-erp",
  },
  openGraph: {
    title: "Why MCP Matters for ERP Systems",
    description:
      "SAP ERP ile AI Agent sistemleri arasında MCP'nin rolü, mimari sınırları ve güvenlik gereksinimleri.",
    url: "https://www.kartal.dev/yazilar/mcp-erp",
    type: "article",
    locale: "tr_TR",
  },
};

const controls = [
  {
    title: "Authorization",
    text: "MCP üzerinden sunulan araçların erişim kuralları, kullanıcı kimliği ve kaynak sistem yetkileriyle uyumlu olmalıdır.",
  },
  {
    title: "Tool Validation",
    text: "Araç parametreleri, izin verilen işlemler ve dönen sonuçlar sunucu tarafında doğrulanmalıdır.",
  },
  {
    title: "Human Approval",
    text: "Finansal kayıt oluşturma veya satın alma siparişi değiştirme gibi etkili işlemler için uygun onay mekanizmaları gerekir.",
  },
  {
    title: "Audit & Observability",
    text: "Kim, hangi aracı, hangi parametrelerle ve hangi sonuçla çalıştırdı soruları izlenebilir olmalıdır.",
  },
];

export default function MCPERPArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why MCP Matters for ERP Systems",
    description:
      "Model Context Protocol ve SAP ERP entegrasyon mimarisi üzerine teknik analiz.",
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
      "https://www.kartal.dev/yazilar/mcp-erp",
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
            className="text-xl font-black tracking-widest text-violet-400"
          >
            KARTAL<span className="text-white">.DEV</span>
          </Link>

          <Link
            href="/#yazilar"
            className="font-mono text-xs text-slate-400 transition-colors hover:text-violet-300"
          >
            ← YAZILARA DÖN
          </Link>
        </header>

        <article>
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest">
              <span className="rounded border border-violet-800 bg-violet-950/50 px-3 py-1 text-violet-300">
                NOTE / 018
              </span>

              <span className="py-1 text-slate-500">
                MCP · SAP ERP · INTEGRATION
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Why MCP Matters for{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                ERP Systems
              </span>
            </h1>

            <p className="mb-7 text-base leading-8 text-slate-300 md:text-lg">
              Model Context Protocol (MCP), AI uygulamaları
              ile kurumsal sistemlerin sunduğu araçlar
              arasında standart bir iletişim modeli sağlar.
              Ancak MCP kullanmak, ERP entegrasyonunu
              kendiliğinden güvenli veya doğru hale getirmez.
            </p>

            <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-5 font-mono text-xs text-slate-500">
              <span>YASIN KARTAL</span>
              <span>·</span>
              <span>TEKNİK NOT</span>
              <span>·</span>
              <span>MCP / ERP / AGENTS</span>
            </div>
          </div>

          <section className="relative mb-16 overflow-hidden rounded-3xl border border-violet-500/20 bg-[#0b0c20] p-6 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mb-8">
              <span className="font-mono text-[10px] tracking-[0.3em] text-violet-400">
                REFERENCE ARCHITECTURE
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white">
                SAP ERP → MCP → AI Agent
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                MCP, ERP ile LLM arasında doğrudan bir
                veritabanı bağlantısı değildir. Kontrollü
                araçlar üzerinden kurulan bir entegrasyon
                yaklaşımıdır.
              </p>
            </div>

            <div className="relative">
              <MCPExplorer />
            </div>

            <p className="relative mt-5 font-mono text-[10px] leading-6 text-slate-500">
              Kavramsal referans mimari. Gerçek uygulamada
              host, MCP client ve server arasındaki
              güven sınırları ayrıca değerlendirilmelidir.
            </p>
          </section>

          <div className="mx-auto max-w-3xl space-y-14">
            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                01 — MCP tam olarak neyi çözüyor?
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  Geleneksel AI entegrasyonlarında her
                  uygulama, farklı veri kaynakları ve
                  servisler için kendine özgü bağlantılar
                  geliştirebilir. Bu durum entegrasyon
                  maliyetini ve bakım yükünü artırır.
                </p>

                <p>
                  MCP, AI uygulamalarının araçları ve
                  diğer sunucu yeteneklerini standart
                  bir protokol üzerinden keşfetmesine
                  ve kullanmasına olanak tanır.
                </p>

                <p>
                  Böylece farklı AI host uygulamaları,
                  uygun şekilde geliştirilen MCP
                  Server&apos;ların sunduğu yeteneklerle
                  ortak bir iletişim modeli kullanabilir.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                02 — SAP ERP için neden önemli?
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                SAP ERP sistemleri yalnızca veri
                tablolarından oluşmaz. Satın alma,
                finans, üretim, satış ve stok yönetimi
                gibi süreçlerin iş kurallarını da içerir.
                Bir AI Agent'ın bu sistemlerle çalışması,
                yalnızca tablo sorgulamasından daha
                kontrollü bir entegrasyon gerektirir.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Purchasing",
                    detail:
                      "Satın alma siparişlerinin durumunu ve ilgili iş kurallarını kontrollü araçlarla sorgulama.",
                  },
                  {
                    title: "Finance",
                    detail:
                      "Açık kalem, tahsilat ve mutabakat verilerinin yetkili kapsamda analiz edilmesi.",
                  },
                  {
                    title: "Production",
                    detail:
                      "Üretim emirleri, malzeme ihtiyaçları ve operasyon durumlarının yorumlanması.",
                  },
                  {
                    title: "Inventory",
                    detail:
                      "Stok durumunun depo, üretim yeri ve kullanılabilirlik bağlamında değerlendirilmesi.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-800 bg-slate-950/80 p-5"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-violet-300">
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
                03 — MCP ne değildir?
              </h2>

              <div className="space-y-4">
                {[
                  "MCP, tek başına bir authorization sistemi değildir.",
                  "MCP, SAP iş kurallarını otomatik olarak öğrenmez.",
                  "MCP, dönen verinin doğruluğunu garanti etmez.",
                  "MCP, agent tarafından verilen her kararı güvenilir hale getirmez.",
                  "MCP, insan onayı ve audit gereksinimlerini ortadan kaldırmaz.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <span className="font-bold text-amber-400">!</span>
                    <p className="text-sm leading-7 text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                04 — Güvenlik ve kontrol mimarisi
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Kurumsal bir MCP Server, yalnızca
                teknik bağlantı sağlayan bir adaptör
                olarak düşünülmemelidir. Sunulan
                yeteneklerin erişim ve işlem
                sınırları açıkça tanımlanmalıdır.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {controls.map((control) => (
                  <div
                    key={control.title}
                    className="rounded-xl border border-violet-500/20 bg-violet-950/10 p-5"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-violet-300">
                      {control.title}
                    </h3>

                    <p className="text-xs leading-6 text-slate-400">
                      {control.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                05 — Örnek: Satın alma verisi sorgulama
              </h2>

              <p className="mb-6 text-sm leading-8 text-slate-300 md:text-base">
                Aşağıdaki örnek, gerçek SAP verisi
                içermeyen kavramsal bir senaryodur.
                Amaç, bir kullanıcının sorusunun
                kontrollü araç çağrısına nasıl
                dönüştürülebileceğini göstermektir.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] p-5 md:p-7">
                <div className="mb-4 font-mono text-[10px] tracking-widest text-violet-400">
                  EXAMPLE / READ-ONLY TOOL
                </div>

                <div className="space-y-4 font-mono text-xs leading-7">
                  <div>
                    <span className="text-slate-500">USER REQUEST</span>
                    <p className="mt-1 text-slate-200">
                      &quot;Onay bekleyen satın alma
                      siparişlerini göster.&quot;
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-4">
                    <span className="text-slate-500">MCP TOOL</span>
                    <p className="mt-1 text-cyan-300">
                      purchasing.list_pending_orders
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-4">
                    <span className="text-slate-500">
                      SERVER-SIDE CHECKS
                    </span>
                    <p className="mt-1 text-slate-200">
                      User authorization → Company scope
                      → Input validation → SAP API
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-4">
                    <span className="text-slate-500">RESULT</span>
                    <p className="mt-1 text-emerald-300">
                      Yetkili kapsamda bulunan siparişlerin
                      durum özeti
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-bold text-white">
                06 — Sonuç
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-300 md:text-base">
                <p>
                  MCP'nin ERP sistemleri açısından
                  önemi, LLM'e sınırsız sistem erişimi
                  vermesi değildir. Kurumsal
                  yetenekleri standart ve kontrollü
                  arayüzler üzerinden sunabilmesidir.
                </p>

                <p>
                  Kalıcı değer, MCP'nin Business
                  Context, Authorization, Validation
                  ve Governance ile birlikte
                  tasarlanmasıyla ortaya çıkar.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6">
                <p className="text-lg font-semibold leading-8 text-white">
                  MCP standardizes the connection.
                  Enterprise architecture determines
                  whether that connection is useful,
                  secure and trustworthy.
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
            className="font-mono text-xs text-violet-400 transition-colors hover:text-violet-200"
          >
            ← TÜM YAZILAR
          </Link>
        </footer>
      </div>
    </main>
  );
}
