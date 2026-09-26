import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-slate-900 bg-slate-950/90 backdrop-blur-md relative z-10 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-bold text-white tracking-widest">KARTAL.DEV</span> — ERP • DATA • CONTEXT • AGENTS
        </div>
        <div className="flex gap-6 text-xs font-medium">
          <a
            href="https://tr.linkedin.com/in/yasinkartal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yasin.kartal@outlook.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
        <div className="text-[10px] text-slate-600">
          Buradaki görüşler ve içerikler kişiseldir. <br />
          © {new Date().getFullYear()} Yasin Kartal
        </div>
      </div>
    </footer>
  );
}