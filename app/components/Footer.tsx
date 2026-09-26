import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Yasin Kartal. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://tr.linkedin.com/in/yasinkartal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yasin.kartal@outlook.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}