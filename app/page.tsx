"use client";

import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import EnterpriseCore from "./components/EnterpriseCore";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#03050c] text-slate-100 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Sticky 3D Canvas (Scroll ile Katman Katman İnşa Edilen Mimari Obje) */}
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

          {/* 07 / OBSERVATION */}
          <section id="lab" data-stage="lab" className="min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 block mb-2">07 / OBSERVATION</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Peki bundan sonra?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light max-w-xl mx-auto">
                Teknoloji hızla değişiyor. Yeni modeller, yeni agent mimarileri, yeni protokoller, yeni araçlar ve yeni sorular... Hangileri kalıcı? Hangileri gerçekten işe yarıyor? Ve hangileri kurumsal sistemlerin çalışma biçimini değiştirecek?
              </p>

              {/* Signals Flow Bandı */}
              <div className="my-8 py-4 px-6 bg-slate-950/90 rounded-2xl border border-slate-800/80 overflow-x-auto">
                <div className="flex items-center justify-center gap-3 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                  <span className="text-cyan-400">CONTEXT ENGINEERING</span>
                  <span>↓</span>
                  <span className="text-purple-400">TOOL USE</span>
                  <span>↓</span>
                  <span className="text-blue-400">AGENTIC WORKFLOWS</span>
                  <span>↓</span>
                  <span className="text-emerald-400">MULTI-AGENT SYSTEMS</span>
                  <span>↓</span>
                  <span className="text-amber-400">HUMAN GOVERNANCE</span>
                  <span>↓</span>
                  <span className="text-white font-bold">SYSTEMS OF ACTION</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-6 font-mono text-xs text-cyan-300 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 mb-12">
                <span>OBSERVE</span>
                <span>•</span>
                <span>UNDERSTAND</span>
                <span>•</span>
                <span>EXPERIMENT</span>
              </div>
            </div>

            {/* Alt Kart Yönlendirmeleri */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div id="yazilar" className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl flex justify-between items-end group transition-all">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">YAZILAR</h3>
                  <p className="text-xs text-slate-400 font-light">Teknoloji haberleri, gelişmeler, analizler ve notlar.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">→</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 backdrop-blur-xl flex justify-between items-end group transition-all">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">LAB</h3>
                  <p className="text-xs text-slate-400 font-light">Yeni teknolojiler, küçük deneyler ve prototipler.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">→</span>
              </div>

              <div id="konular" className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-xl flex justify-between items-end group transition-all">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">KONULAR</h3>
                  <p className="text-xs text-slate-400 font-light">ERP, Data, AI, Agents ve Automation.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">→</span>
              </div>
            </div>
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