"use client";

import React, { useState } from "react";

export default function KnowledgeMap() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const exploringTopics = [
    { name: "CONTEXT ENGINEERING", trName: "Bağlam Mühendisliği", status: "ACTIVE", count: "7 YAZI • 4 LAB" },
    { name: "MCP & TOOLS", trName: "Model Bağlam Protokolü", status: "ACTIVE", count: "3 YAZI • 2 LAB" },
    { name: "AGENT EVALUATION", trName: "Ajan Değerlendirme", status: "EXPLORING", count: "2 YAZI • 1 LAB" },
    { name: "A2A PROTOCOLS", trName: "Ajanlar Arası İletişim", status: "MONITORING", count: "1 SİNYAL" },
    { name: "MULTI-AGENT SYSTEMS", trName: "Çoklu Ajan Sistemleri", status: "MONITORING", count: "1 SİNYAL" },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Currently Exploring Live Panel */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            CURRENTLY EXPLORING <span className="text-slate-500 font-normal">/ Aktif Araştırdıklarım</span>
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
                  {tab === "ALL" ? "HEPSİ" : tab === "ACTIVE" ? "AKTİF" : "İNCELEMEDE"}
                </button>
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-500">DURUM: EYLÜL 2026</span>
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
                <div>
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
                  <span className="text-[10px] font-mono text-slate-400 block pl-3.5 mb-2">{item.trName}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">{item.count}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Enterprise AI Knowledge Map Tree */}
      <div className="space-y-6">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-white tracking-wide font-mono">
            ENTERPRISE AI KNOWLEDGE MAP <span className="text-xs font-normal text-slate-500 ml-2">/ Kurumsal Yapay Zekâ Bilgi Haritası</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Stage 01 - Data */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-xs font-mono text-slate-500 block mb-1">01 / DATA <span className="text-slate-600">· Veri Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Enterprise Systems & Data</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Kurumsal Sistemler & Veri Yapıları</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                ├─ ERP & SAP Transactions <span className="text-slate-600">· İşlem Kayıtları</span>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                ├─ Data Platforms & Warehouses <span className="text-slate-600">· Veri Ambarları</span>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                └─ Document Stores <span className="text-slate-600">· Doküman Depoları</span>
              </li>
            </ul>
          </div>

          {/* Stage 02 - Connection */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <span className="text-xs font-mono text-cyan-400 block mb-1">02 / CONNECTION <span className="text-cyan-600">· Bağlantı Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Integration & APIs</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Entegrasyon & API Mimarileri</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                ├─ Enterprise Integration <span className="text-slate-600">· Kurumsal Entegrasyon</span>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                ├─ REST / OData Services <span className="text-slate-600">· Veri Servisleri</span>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                └─ Real-time Streaming <span className="text-slate-600">· Anlık Veri Akışı</span>
              </li>
            </ul>
          </div>

          {/* Stage 03 - Context */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <span className="text-xs font-mono text-purple-400 block mb-1">03 / CONTEXT <span className="text-purple-600">· Bağlam Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Context Engineering</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Bağlam Mühendisliği & Anlam</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                ├─ Semantic Layers <span className="text-slate-600">· Semantik Katmanlar</span>
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                ├─ Business Rules & Logic <span className="text-slate-600">· İş Kuralları & Mantık</span>
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">
                └─ Enterprise RAG <span className="text-slate-600">· Kurumsal Bilgi Erişimi</span>
              </li>
            </ul>
          </div>

          {/* Stage 04 - Intelligence */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 transition-colors">
            <span className="text-xs font-mono text-blue-400 block mb-1">04 / INTELLIGENCE <span className="text-blue-600">· Zekâ Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Models & Reasoning</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Modeller & Akıl Yürütme</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                ├─ Enterprise LLMs <span className="text-slate-600">· Kurumsal Dil Modelleri</span>
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                ├─ Reasoning Architectures <span className="text-slate-600">· Mantık Yürütme</span>
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">
                └─ Context Windows <span className="text-slate-600">· Bağlam Pencereleri</span>
              </li>
            </ul>
          </div>

          {/* Stage 05 - Agency */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <span className="text-xs font-mono text-emerald-400 block mb-1">05 / AGENCY <span className="text-emerald-600">· Ajan Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Tools & Agents</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Araçlar & Otonom Ajanlar</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                ├─ MCP (Model Context Protocol) <span className="text-slate-600">· Araç Protokolü</span>
              </li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                ├─ Agentic Workflows <span className="text-slate-600">· Ajan Süreçleri</span>
              </li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                └─ Multi-Agent Systems (A2A) <span className="text-slate-600">· Çoklu Ajan Ağı</span>
              </li>
            </ul>
          </div>

          {/* Stage 06 - Control */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 transition-colors">
            <span className="text-xs font-mono text-amber-400 block mb-1">06 / CONTROL <span className="text-amber-600">· Denetim Katmanı</span></span>
            <h4 className="text-base font-bold text-white mb-1">Trust & Governance</h4>
            <span className="text-[11px] font-mono text-slate-500 block mb-3">Güven, Yönetişim & İzleme</span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">
                ├─ Human-in-the-Loop (HITL) <span className="text-slate-600">· İnsan Onay/Denetimi</span>
              </li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">
                ├─ Agent Evaluation & Guardrails <span className="text-slate-600">· Ajan Güvenliği</span>
              </li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">
                └─ System Observability <span className="text-slate-600">· Sistem İzlenebilirliği</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}