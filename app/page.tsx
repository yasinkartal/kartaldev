"use client";

import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import EnterpriseCore from "./components/EnterpriseCore";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#03050c] text-slate-100 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Sticky 3D Canvas */}
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-full h-full max-w-7xl mx-auto pointer-events-auto">
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
          
          {/* Konsept Tanıtım Cümlesi */}
          <div className="mb-12 max-w-3xl border-l-2 border-cyan-500/50 pl-4 py-1">
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
                <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block mb-2">RAW DATA</span>
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
            <div className="hidden lg:block max-w-[200px] text-right font-mono text-xs text-slate-500 uppercase leading-relaxed">
              KAYDETMEK YETERLİYDİ. <br />
              <span className="text-slate-400 font-bold">ARTIK DEĞİL.</span>
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
                <span className="text-xs uppercase font-mono tracking-widest text-cyan-400 block mb-2">NETWORKS & PLATFORMS</span>
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
            <div className="hidden lg:block max-w-[200px] text-right font-mono text-xs text-cyan-400/80 uppercase leading-relaxed">
              SİSTEMLER BAĞLANDI. <br />
              <span className="text-white font-bold">VERİ HAREKET ETMEYE BAŞLADI.</span>
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
                <span className="text-xs uppercase font-mono tracking-widest text-purple-400 block mb-2">BUSINESS RULES</span>
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
            <div className="hidden lg:block max-w-[220px] text-right font-mono text-xs text-purple-300/80 uppercase leading-relaxed">
              VERİYİ GÖRMEK DEĞİL, <br />
              <span className="text-white font-bold">NE ANLAMA GELDİĞİNİ BİLMEK.</span>
            </div>
          </section>

          {/* 04 / INTELLIGENCE */}
          <section data-stage="intelligence" className="min-h-screen flex items-center justify-between py-20">
            <div className="flex items-start gap-6 max-w-md">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-emerald-400 font-mono">04</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-500 rotate-90 my-8">INTELLIGENCE</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-emerald-500 to-transparent" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block mb-2">ENTERPRISE AGENTS</span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                  Sistemler artık yalnızca göstermiyor.
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  Yapay zekâ; veri, kurumsal bağlam, iş kuralları ve araçlarla bir araya geldiğinde yalnızca soruları cevaplayan bir arayüz olmaktan çıkıyor.
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Araştırabilen, doğrulayabilen, öneri üretebilen ve insan kontrolü altında aksiyona ilerleyebilen sistemler ortaya çıkıyor.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-emerald-300">
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Agents</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Tools</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Business Rules</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Human-in-the-Loop</span>
                  <span className="px-2 py-1 bg-emerald-950/60 border border-emerald-800/80 rounded">Evaluation</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block max-w-[220px] text-right font-mono text-xs text-emerald-300/80 uppercase leading-relaxed">
              READ → REASON → ACT <br />
              <span className="text-white font-bold">VERİDEN, AKSİYONA.</span>
            </div>
          </section>

          {/* 05 / OBSERVATION */}
          <section id="lab" data-stage="lab" className="min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 block mb-2">05 / OBSERVATION</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Peki bundan sonra?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light max-w-xl mx-auto">
                Teknoloji hızla değişiyor. Yeni modeller, yeni agent mimarileri, yeni protokoller, yeni araçlar ve yeni sorular... Hangileri kalıcı? Hangileri gerçekten işe yarıyor? Ve hangileri kurumsal sistemlerin çalışma biçimini değiştirecek?
              </p>

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
                  <p className="text-xs text-slate-400">Teknoloji haberleri, gelişmeler, analizler ve notlar.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">→</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 backdrop-blur-xl flex justify-between items-end group transition-all">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">LAB</h3>
                  <p className="text-xs text-slate-400">Yeni teknolojiler, küçük deneyler ve prototipler.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">→</span>
              </div>

              <div id="konular" className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-xl flex justify-between items-end group transition-all">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">KONULAR</h3>
                  <p className="text-xs text-slate-400">ERP, Data, AI, Agents ve Automation.</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">→</span>
              </div>
            </div>
          </section>

          {/* HAKKINDA BÖLÜMÜ */}
          <section id="hakkinda" className="py-24 border-t border-slate-900">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">HAKKINDA</span>
              <h2 className="text-2xl font-bold text-white">KARTAL.DEV Nedir?</h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                KARTAL.DEV, Yasin Kartal'ın ERP sistemleri, kurumsal veri, yapay zekâ ve agent mimarileri üzerine araştırmalarını, deneylerini ve teknik notlarını paylaştığı bağımsız teknoloji laboratuvarıdır.
              </p>
              <p className="text-slate-500 text-[11px] leading-relaxed font-light italic">
                Buradaki görüşler ve içerikler kişiseldir; mevcut veya geçmiş işverenleri temsil etmez.
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