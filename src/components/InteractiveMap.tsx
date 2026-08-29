"use client";

import React, { useState } from "react";
import { COMPANY_DATA } from "@/data/company";
import {
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Clock,
  Store,
  Zap,
  ExternalLink,
} from "lucide-react";

export function InteractiveMap() {
  const [activeBranchId, setActiveBranchId] = useState<string>("avize-showroom");

  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];
  const activeBranch =
    activeBranchId === "avize-showroom" ? showroom : electrical;
  const isShowroom = activeBranch.type === "showroom";

  return (
    <section className="py-16 bg-[#0B132B] relative overflow-hidden" id="harita">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <MapPin className="w-3.5 h-3.5" />
            Canlı Konum ve Navigasyon
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            İnteraktif Şube Haritası & Canlı Yol Tarifi
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Harita üzerinden şubelerimizi seçebilir, konumlarını canlı olarak inceleyebilir ve tek tıkla doğrudan Google Haritalar navigasyonu başlatabilirsiniz.
          </p>
        </div>

        {/* Şube Seçim Butonları (Tabs) */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setActiveBranchId("avize-showroom")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeBranchId === "avize-showroom"
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                : "bg-[#0F172A] text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Avize Showroom (Umut Kent)</span>
          </button>

          <button
            onClick={() => setActiveBranchId("elektrik-sube")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeBranchId === "elektrik-sube"
                ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                : "bg-[#0F172A] text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Elektrik Şubesi (Eymen Sitesi)</span>
          </button>
        </div>

        {/* Harita ve Detay Kartı Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Canlı İnteraktif Google Maps Iframe (8 Kolon) */}
          <div className="lg:col-span-8 bg-[#0F172A] rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative min-h-[420px] lg:min-h-[500px]">
            <iframe
              title={`${activeBranch.name} Canlı Harita`}
              src={activeBranch.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />
            {/* Canlı GPS Badge */}
            <div className="absolute top-4 left-4 bg-[#0B132B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/40 text-[11px] font-bold text-amber-400 flex items-center gap-1.5 shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>GPS: {activeBranch.coordinates.formatted}</span>
            </div>
          </div>

          {/* Aktif Şube Detay Paneli (4 Kolon) */}
          <div className="lg:col-span-4 bg-[#0F172A] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  {isShowroom ? <Store className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Seçili Şube
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {activeBranch.name}
                  </h3>
                </div>
              </div>

              {/* Adres Kutusu */}
              <div className="bg-[#132238] p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Tam Adres:</span>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      {activeBranch.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-200 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Çalışma Saatleri: </span>
                    <span className="text-slate-300">
                      {activeBranch.workingHours.days} ({activeBranch.workingHours.hours})
                    </span>
                  </div>
                </div>
              </div>

              {/* İletişim Yetkilileri */}
              <div className="space-y-1.5 text-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Şube İletişim:
                </div>
                {activeBranch.contacts.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800"
                  >
                    <div>
                      <div className="font-bold text-white">{c.name}</div>
                      <div className="text-[10px] text-slate-400">{c.role}</div>
                    </div>
                    <a
                      href={`tel:${c.phone}`}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      {c.phoneFormatted}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Eylem Butonları */}
            <div className="space-y-2.5 pt-2">
              <a
                href={activeBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                Google Maps ile Canlı Yol Tarifi Al
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${activeBranch.contacts[0].whatsapp}?text=${encodeURIComponent(
                  `Merhaba, ${activeBranch.name} şubenize gelmek istiyorum. Konum ve danışmanlık hakkında bilgi alabilir miyim?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Şubeye WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
