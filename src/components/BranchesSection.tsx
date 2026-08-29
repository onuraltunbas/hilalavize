"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import {
  Store,
  Zap,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  Navigation,
  ExternalLink,
  Camera,
  Compass,
} from "lucide-react";

export function BranchesSection() {
  // Her şube için bağımsız Fotoğraf / Harita görünümü kontrolü
  const [viewModes, setViewModes] = useState<Record<string, "image" | "map">>({
    "avize-showroom": "image",
    "elektrik-sube": "image",
  });

  const toggleViewMode = (branchId: string, mode: "image" | "map") => {
    setViewModes((prev) => ({ ...prev, [branchId]: mode }));
  };

  return (
    <section className="py-20 bg-[#0B132B] relative overflow-hidden" id="subelerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Store className="w-3.5 h-3.5" />
            İki Uzman Mağaza, Tek Güvenilir Adres
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Kahramanmaraş Onikişubat&apos;taki Şubelerimiz
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hem seçkin ev dekorasyonu ve avize showroomumuzda yüzlerce modeli canlı inceleyebilir, hem de elektrik şubemizden profesyonel malzeme tedariği ve montaj desteği alabilirsiniz.
          </p>
        </div>

        {/* 2 Branches Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMPANY_DATA.branches.map((branch) => {
            const isShowroom = branch.type === "showroom";
            const currentMode = viewModes[branch.id] || "image";

            return (
              <div
                key={branch.id}
                className="group relative rounded-3xl overflow-hidden bg-[#0F172A] border border-amber-500/25 hover:border-amber-500/60 transition-all duration-300 shadow-2xl flex flex-col"
              >
                {/* Header: Fotoğraf veya İnteraktif Canlı Harita */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                  {currentMode === "image" ? (
                    <>
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full relative">
                      <iframe
                        title={`${branch.name} Canlı Harita`}
                        src={branch.embedMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full filter contrast-105"
                      />
                    </div>
                  )}

                  {/* Sol Üst Şube Rozeti */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#0B132B]/90 text-amber-400 border border-amber-500/40 backdrop-blur-md shadow-lg">
                      {isShowroom ? <Store className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                      {branch.shortName}
                    </span>
                  </div>

                  {/* Sağ Üst Görünüm Değiştirici Butonlar (Fotoğraf / İnteraktif Harita) */}
                  <div className="absolute top-4 right-4 z-10 flex items-center bg-[#0B132B]/90 p-1 rounded-xl border border-amber-500/30 backdrop-blur-md shadow-lg">
                    <button
                      type="button"
                      onClick={() => toggleViewMode(branch.id, "image")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                        currentMode === "image"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <Camera className="w-3 h-3" />
                      Fotoğraf
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleViewMode(branch.id, "map")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                        currentMode === "map"
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <Compass className="w-3 h-3" />
                      Canlı Harita
                    </button>
                  </div>

                  {/* Alt Başlık Bilgisi (Sadece görsel modunda) */}
                  {currentMode === "image" && (
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-md">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-amber-300 font-medium drop-shadow">
                        {branch.headline}
                      </p>
                    </div>
                  )}

                  {/* GPS Koordinat Rozeti (Harita modunda) */}
                  {currentMode === "map" && (
                    <div className="absolute bottom-3 left-3 z-10 bg-[#0B132B]/95 px-3 py-1 rounded-lg border border-amber-500/40 text-[10px] font-bold text-amber-400 flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>GPS: {branch.coordinates.formatted}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {branch.description}
                  </p>

                  {/* Address & Hours */}
                  <div className="space-y-3 bg-[#132238] p-4 rounded-2xl border border-slate-800">
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">Adres:</div>
                        <div className="text-slate-300 mt-0.5 leading-relaxed">{branch.address.full}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-slate-200 pt-2 border-t border-slate-800">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-semibold text-white">Çalışma Saatleri: </span>
                        <span className="text-slate-300">{branch.workingHours.days} ({branch.workingHours.hours})</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Bu Şubemizde Öne Çıkanlar:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
                      {branch.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contacts & CTAs */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-semibold text-slate-400">İletişim & Yetkililer:</span>
                      <div className="flex items-center gap-2 flex-wrap">
                        {branch.contacts.map((c, i) => (
                          <a
                            key={i}
                            href={`tel:${c.phone}`}
                            className="text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-500/20 flex items-center gap-1 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            {c.name}: {c.phoneFormatted}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <a
                        href={`https://wa.me/${branch.contacts[0].whatsapp}?text=${encodeURIComponent(
                          `Merhaba, ${branch.name} hakkında bilgi almak istiyorum.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp&apos;tan Yaz
                      </a>

                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
                      >
                        <Navigation className="w-4 h-4 fill-slate-950" />
                        Yol Tarifi Al (Google Maps)
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
