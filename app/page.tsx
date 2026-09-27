"use client";

import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import EnterpriseCore from "./components/EnterpriseCore";
import KnowledgeMap from "./components/KnowledgeMap";
import { Post, LabExperiment } from "./app/types/content";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#03050c] text-slate-100 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Sticky 3D Canvas */}
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center lg:justify-end lg:pr-12">
          <div className="w-full h-full max-w-4xl pointer-events-auto">
            <EnterpriseCore />
          </div>
        </div>

        {/* Arka Plan Grid & Glow */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* Header Nav */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl p-4 flex justify-between items-center z-50 backdrop-blur-xl bg-slate-950/40 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-950/20">
          <div className="text-xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-white pl-2">
            KARTAL<span className="text-cyan-500">.DEV</span>
          </div>
          <div className="flex items-center gap-6 text-xs tracking-wider uppercase font-medium">
            <a href="#yazilar" className="text-slate-400 hover:text-cyan-400 transition-colors">YAZILAR</a>
            <a href="#lab" className="text-slate-400 hover:text-cyan-400 transition-colors">LAB</a>
            <a href="#konular" className="text-slate-400 hover:text-cyan-400 transition-colors">KONULAR</a>
            <a href="#hakkinda" className="text-slate-400 hover:text-cyan-400 transition-colors">HAKKINDA</a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <span>ERP</span> • <span>DATA</span> • <span>CONTEXT</span> • <span>AGENTS</span>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-8 relative z-10 pt-28">
          
          {/* Slogan & Konsept Cümlesi */}
          <div className="mb-16 max-w-3xl border-l-2 border-cyan-500/60 pl-6 py-2 bg-gradient-to-r from-cyan-950/20 to-transparent rounded-r-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold block mb-2">
              VERİDEN BAĞLAMA, BAĞLAMDAN ZEKÂYA.
            </span>
            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
              Kurumsal sistemlerin veriden bağlama, bağlamdan zekâya dönüşümünü araştıran bağımsız teknoloji laboratuvarı.
            </p>
          </div>

          {/* 01 / DATA */}
          <section data-stage="data" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-slate-500 font-mono">01</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-600 rotate-90 my-8">DATA</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-slate-600 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block mb-2">RAW DATA LAYER</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Veri hep vardı.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                  ERP sistemleri onlarca yıl boyunca şirketlerin işlemlerini, hareketlerini ve süreçlerini kayıt altına aldı.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  Muazzam miktarda veri oluştu. Ama verinin var olması, tek başına onu anlamak için yeterli değildi.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Transactions</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Tables</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Documents</span>
                </div>
              </div>
            </div>
          </section>

          {/* 02 / CONNECTION */}
          <section data-stage="connection" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-cyan-400 font-mono">02</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-500 rotate-90 my-8">CONNECTION</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-cyan-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 block mb-2">NETWORKS & INTEGRATION</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Veri bağlandı.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Sistemler birbirine açıldıkça veri yalnızca bulunduğu yerde yaşayan bir kayıt olmaktan çıktı.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Platformlar, API'ler ve entegrasyon katmanları farklı sistemlerdeki verilerin birlikte hareket edebilmesini sağladı.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-cyan-400">
                  <span className="px-2 py-1 bg-cyan-950/60 border border-cyan-800/80 rounded">ERP</span>
                  <span className="px-2 py-1 bg-cyan-950/60 border border-cyan-800/80 rounded">Data Platforms</span>
                  <span className="px-2 py-1 bg-cyan-950/60 border border-cyan-800/80 rounded">APIs</span>
                  <span className="px-2 py-1 bg-cyan-950/60 border border-cyan-800/80 rounded">Integration</span>
                </div>
              </div>
            </div>
          </section>

          {/* 03 / CONTEXT */}
          <section data-stage="context" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-purple-400 font-mono">03</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-500 rotate-90 my-8">CONTEXT</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-purple-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-purple-400 block mb-2">SEMANTIC & BUSINESS RULES</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Veri anlam kazandı.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Bir sayının ne olduğunu bilmek yetmez. Nereden geldiği, hangi süreçte oluştuğu, hangi kurala tabi olduğu ve diğer verilerle nasıl ilişkilendiği de gerekir.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Verinin yanına bağlam eklendi.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-purple-300">
                  <span className="px-2 py-1 bg-purple-950/60 border border-purple-800/80 rounded">Business Logic</span>
                  <span className="px-2 py-1 bg-purple-950/60 border border-purple-800/80 rounded">Business Context</span>
                  <span className="px-2 py-1 bg-purple-950/60 border border-purple-800/80 rounded">Context Engineering</span>
                </div>
              </div>
            </div>
          </section>

          {/* 04 / INTELLIGENCE */}
          <section data-stage="intelligence" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-blue-400 font-mono">04</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-500 rotate-90 my-8">INTELLIGENCE</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-blue-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-blue-400 block mb-2">MODELS & REASONING</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Sistemler anlamaya başladı.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Modeller kurumsal veriler, belgeler ve kurallar arasında ilişkiler kurarak akıl yürütme (reasoning) kapasitesine ulaştı.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Sadece veriyi sorgulamak değil, verinin arkasındaki mantığı kavramak mümkün hale geldi.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-blue-300">
                  <span className="px-2 py-1 bg-blue-950/60 border border-blue-800/80 rounded">LLMs</span>
                  <span className="px-2 py-1 bg-blue-950/60 border border-blue-800/80 rounded">Reasoning</span>
                  <span className="px-2 py-1 bg-blue-950/60 border border-blue-800/80 rounded">Context Engineering</span>
                  <span className="px-2 py-1 bg-blue-950/60 border border-blue-800/80 rounded">RAG</span>
                </div>
              </div>
            </div>
          </section>

          {/* 05 / AGENCY */}
          <section data-stage="agency" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-emerald-400 font-mono">05</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500 rotate-90 my-8">AGENCY</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-emerald-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block mb-2">TOOLS & ACTIONS</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Sistemler artık yalnızca cevaplamıyor.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Modeller araçlara, API'lere ve kurumsal sistemlere bağlandığında bilgi üretmenin ötesine geçiyor. Araştırabiliyor, doğrulayabiliyor, planlayabiliyor ve kontrollü biçimde aksiyon alabiliyor.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-emerald-300">
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Agents</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Tools</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">MCP</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">APIs</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Skills</span>
                </div>
              </div>
            </div>
          </section>

          {/* 06 / CONTROL */}
          <section data-stage="control" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-amber-400 font-mono">06</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 rotate-90 my-8">CONTROL</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-amber-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-2">TRUST & GOVERNANCE</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Aksiyon, kontrol gerektirir.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Kurumsal sistemlerde zekâ tek başına yeterli değildir. Yetki, doğrulama, izlenebilirlik ve insan kararı; agent'ı bir demodan güvenilir bir kurumsal sisteme dönüştürür.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-amber-300">
                  <span className="px-2 py-1 bg-amber-950/60 border border-amber-800/80 rounded">Human-in-the-Loop</span>
                  <span className="px-2 py-1 bg-amber-950/60 border border-amber-800/80 rounded">Evaluation</span>
                  <span className="px-2 py-1 bg-amber-950/60 border border-amber-800/80 rounded">Guardrails</span>
                  <span className="px-2 py-1 bg-amber-950/60 border border-amber-800/80 rounded">Observability</span>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Manifesto Banner */}
          <div className="my-16 p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/30 text-center relative overflow-hidden backdrop-blur-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 block mb-2">
              ENTERPRISE AGENT ARCHITECTURE
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white mb-2">
              THIS IS NOT A CHATBOT. THIS IS AN ENTERPRISE AGENT SYSTEM.
            </h3>
            <p className="text-slate-400 text-xs font-light max-w-xl mx-auto">
              Veriyi sadece gösteren değil, bağlamı anlayan, reasoning yapan ve denetim altında aksiyona geçen bütünleşik kurumsal mimari.
            </p>
          </div>

          {/* YAZILAR SECTION */}
          <section id="yazilar" className="py-20 border-t border-slate-900">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-1">THINK</span>
                <h2 className="text-2xl font-bold text-white">YAZILAR</h2>
              </div>
              <div className="flex gap-3 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-bold border-b border-cyan-400 pb-0.5 cursor-pointer">ALL</span>
                <span className="hover:text-white cursor-pointer transition-colors">ESSAYS</span>
                <span className="hover:text-white cursor-pointer transition-colors">NOTES</span>
                <span className="hover:text-white cursor-pointer transition-colors">SIGNALS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ESSAY / 001 */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-950 border border-cyan-800 text-cyan-400 rounded">ESSAY / 001</span>
                    <span className="text-[10px] font-mono text-slate-500">12 MIN READ • SEP 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    Why Enterprise AI Is a Context Problem
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                    ERP verileri tek başına modeller için anlamsızdır. Gerçek dönüşüm, verinin etrafındaki iş kurallarının ve semantik bağlamın modele aktarılmasıyla başlar.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                  <span>TOPICS: CONTEXT, ERP, AGENTS</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">READ ESSAY →</span>
                </div>
              </div>

              {/* NOTE / 018 */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-purple-950 border border-purple-800 text-purple-400 rounded">NOTE / 018</span>
                    <span className="text-[10px] font-mono text-slate-500">3 MIN READ • 27 SEP 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                    Why MCP Matters for ERP Systems
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                    MCP is interesting not because it lets an LLM call a tool. The interesting question is what happens when enterprise capabilities become discoverable by agents.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                  <span>TOPICS: MCP, INTEGRATION</span>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">READ NOTE →</span>
                </div>
              </div>
            </div>
          </section>

          {/* LAB SECTION */}
          <section id="lab" className="py-20 border-t border-slate-900">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-1">BUILD</span>
                <h2 className="text-2xl font-bold text-white">LAB & DENEYLER</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">PROTOTYPES & EXPERIMENTS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LAB / 001 */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-400 rounded">LAB / 001</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">COMPLETED</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  SAP CDS → MCP → LLM Integration
                </h3>
                <p className="text-slate-400 text-xs font-light mb-4">
                  SAP CDS View metadatalarını MCP arayüzü üzerinden agent'lara dinamik tool olarak sunan entegrasyon prototipi.
                </p>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4 text-[11px] font-mono text-slate-400">
                  <span className="text-slate-500 block mb-0.5">RELATED WRITING:</span>
                  <span className="text-cyan-400 hover:underline cursor-pointer">NOTE / 018 — Why MCP Matters for ERP Systems</span>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">SAP CDS</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">MCP</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Python</span>
                </div>
              </div>

              {/* LAB / 002 */}
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-950 border border-emerald-800 text-emerald-400 rounded">LAB / 002</span>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">IN PROGRESS</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Procurement Context Agent
                </h3>
                <p className="text-slate-400 text-xs font-light mb-4">
                  Satın alma siparişi blokajlarını, tedarikçi risk skorlarını ve onay kurallarını otonom inceleyen insan denetimli agent.
                </p>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4 text-[11px] font-mono text-slate-400">
                  <span className="text-slate-500 block mb-0.5">RELATED WRITING:</span>
                  <span className="text-cyan-400 hover:underline cursor-pointer">ESSAY / 001 — Why Enterprise AI Is a Context Problem</span>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-500">
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Agents</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">Governance</span>
                  <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded">ERP Context</span>
                </div>
              </div>
            </div>
          </section>

          {/* KONULAR / KNOWLEDGE MAP SECTION */}
          <section id="konular" className="py-20 border-t border-slate-900">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-1">MAP</span>
                <h2 className="text-2xl font-bold text-white">KONULAR & KNOWLEDGE MAP</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">INTERACTIVE TAXONOMY</span>
            </div>

            <KnowledgeMap />
          </section>

          {/* Hakkında & Final Manifesto */}
          <section id="hakkinda" className="py-24 border-t border-slate-900">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 block">
                FROM SYSTEMS OF RECORD TO SYSTEMS OF ACTION.
              </span>
              <h2 className="text-2xl font-bold text-white">KARTAL.DEV Nedir?</h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                Teknolojinin nasıl değiştiğini anlamaya çalışan bağımsız bir teknoloji laboratuvarı. Buradaki görüşler ve içerikler kişiseldir.
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <Footer />

      </main>
    </SmoothScroll>
  );
}