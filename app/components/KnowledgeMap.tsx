"use client";

import React, { useState } from "react";

export default function KnowledgeMap() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const exploringTopics = [
    { name: "CONTEXT ENGINEERING", status: "ACTIVE", count: "7 WRITINGS • 4 LABS" },
    { name: "MCP & TOOLS", status: "ACTIVE", count: "3 WRITINGS • 2 LABS" },
    { name: "AGENT EVALUATION", status: "EXPLORING", count: "2 WRITINGS • 1 LAB" },
    { name: "A2A PROTOCOLS", status: "MONITORING", count: "1 SIGNAL" },
    { name: "MULTI-AGENT SYSTEMS", status: "MONITORING", count: "1 SIGNAL" },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Currently Exploring Live Panel */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            CURRENTLY EXPLORING
          </span>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2 text-[10px] font-mono text-slate-400">
              {["ALL", "ACTIVE", "EXPLORING"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeTab === tab
                      ? "bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold"
                      : "hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-500">SEP 2026 STATUS</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {exploringTopics
            .filter((item) => activeTab === "ALL" || item.status === activeTab)
            .map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.status === "ACTIVE"
                        ? "bg-emerald-400"
                        : item.status === "EXPLORING"
                        ? "bg-cyan-400"
                        : "bg-amber-400"
                    }`}
                  />
                  <span className="text-xs font-mono text-white font-medium">{item.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">{item.count}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Enterprise AI Knowledge Map Tree */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white tracking-wide font-mono">
          ENTERPRISE AI KNOWLEDGE MAP
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stage 01 - Data */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-xs font-mono text-slate-500 block mb-1">01 / DATA</span>
            <h4 className="text-base font-bold text-white mb-3">Enterprise Systems & Data</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">├─ ERP & SAP Transactions</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">├─ Data Platforms & Warehouses</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">└─ Document Stores</li>
            </ul>
          </div>

          {/* Stage 02 - Connection */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <span className="text-xs font-mono text-cyan-400 block mb-1">02 / CONNECTION</span>
            <h4 className="text-base font-bold text-white mb-3">Integration & APIs</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">├─ Enterprise Integration</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">├─ REST / OData Services</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">└─ Real-time Streaming</li>
            </ul>
          </div>

          {/* Stage 03 - Context */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <span className="text-xs font-mono text-purple-400 block mb-1">03 / CONTEXT</span>
            <h4 className="text-base font-bold text-white mb-3">Context Engineering</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">├─ Semantic Layers</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">├─ Business Rules & Logic</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">└─ Enterprise RAG</li>
            </ul>
          </div>

          {/* Stage 04 - Intelligence */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <span className="text-xs font-mono text-blue-400 block mb-1">04 / INTELLIGENCE</span>
            <h4 className="text-base font-bold text-white mb-3">Models & Reasoning</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">├─ Enterprise LLMs</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">├─ Reasoning Architectures</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">└─ Context Windows</li>
            </ul>
          </div>

          {/* Stage 05 - Agency */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <span className="text-xs font-mono text-emerald-400 block mb-1">05 / AGENCY</span>
            <h4 className="text-base font-bold text-white mb-3">Tools & Agents</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">├─ MCP (Model Context Protocol)</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">├─ Agentic Workflows</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">└─ Multi-Agent Systems (A2A)</li>
            </ul>
          </div>

          {/* Stage 06 - Control */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 transition-colors">
            <span className="text-xs font-mono text-amber-400 block mb-1">06 / CONTROL</span>
            <h4 className="text-base font-bold text-white mb-3">Trust & Governance</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">├─ Human-in-the-Loop (HITL)</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">├─ Agent Evaluation & Guardrails</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">└─ System Observability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}