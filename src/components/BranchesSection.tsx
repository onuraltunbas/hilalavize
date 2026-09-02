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
    <section className="py-20 bg-background relative overflow-hidden border-b border-border" id="subelerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="editorial-tag">
            <Store className="w-3.5 h-3.5 text-bronze" />
            İki Uzman Mağaza, Tek Güvenilir Adres
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Kahramanmaraş Onikişubat&apos;taki Şubelerimiz
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hem seçkin ev dekorasyonu ve avize showroomumuzda yüzlerce modeli canlı inceleyebilir, hem de elektrik şubemizden profesyonel malzeme tedariği ve montaj desteği alabilirsiniz.
          </p>
        </div>

        {/* 2 Branches Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {COMPANY_DATA.branches.map((branch) => {
            const isShowroom = branch.type === "showroom";
            const currentMode = viewModes[branch.id] || "image";

            return (
              <div
                key={branch.id}
                className="group relative dgaraj-card overflow-hidden flex flex-col"
              >
                {/* Header: Fotoğraf veya İnteraktif Canlı Harita */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-subtle">
                  {currentMode === "image" ? (
                    <>
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-surface/90 text-foreground border border-border backdrop-blur-md shadow-sm">
                      {isShowroom ? <Store className="w-3.5 h-3.5 text-bronze" /> : <Zap className="w-3.5 h-3.5 text-bronze" />}
                      {branch.shortName}
                    </span>
                  </div>

                  {/* Sağ Üst Görünüm Değiştirici Butonlar (Fotoğraf / İnteraktif Harita) */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center bg-surface/90 p-0.5 rounded-lg border border-border backdrop-blur-md shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleViewMode(branch.id, "image")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors ${
                        currentMode === "image"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Camera className="w-3 h-3" />
                      Fotoğraf
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleViewMode(branch.id, "map")}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors ${
                        currentMode === "map"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Compass className="w-3 h-3" />
                      Harita
                    </button>
                  </div>

                  {/* Alt Başlık Bilgisi (Sadece görsel modunda) */}
                  {currentMode === "image" && (
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 drop-shadow-md">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-amber-200 font-medium drop-shadow">
                        {branch.headline}
                      </p>
                    </div>
                  )}

                  {/* GPS Koordinat Rozeti (Harita modunda) */}
                  {currentMode === "map" && (
                    <div className="absolute bottom-3 left-3 z-10 bg-surface/95 px-2.5 py-0.5 rounded-md border border-border text-[10px] font-bold text-foreground flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>GPS: {branch.coordinates.formatted}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {branch.description}
                  </p>

                  {/* Address & Hours */}
                  <div className="space-y-2 bg-surface-subtle p-3.5 rounded-xl border border-border">
                    <div className="flex items-start gap-2 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Adres:</div>
                        <div className="text-muted-foreground mt-0.5 leading-relaxed">{branch.address.full}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs pt-1.5 border-t border-border">
                      <Clock className="w-3.5 h-3.5 text-bronze shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">Çalışma Saatleri: </span>
                        <span className="text-muted-foreground">{branch.workingHours.days} ({branch.workingHours.hours})</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-bronze">
                      Bu Şubemizde Öne Çıkanlar:
                    </div>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                      {branch.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contacts & CTAs */}
                  <div className="pt-3 border-t border-border space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">Yetkililer:</span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {branch.contacts.map((c, i) => (
                          <a
                            key={i}
                            href={`tel:${c.phone}`}
                            className="text-xs font-bold text-foreground hover:text-bronze bg-surface-subtle px-2.5 py-1 rounded-md border border-border flex items-center gap-1 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-bronze" />
                            {c.name}: {c.phoneFormatted}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <a
                        href={`https://wa.me/${branch.contacts[0].whatsapp}?text=${encodeURIComponent(
                          `Merhaba, ${branch.name} hakkında bilgi almak istiyorum.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp&apos;tan Yaz
                      </a>

                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:opacity-90 font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 border border-border shadow-sm transition-transform hover:-translate-y-0.5"
                      >
                        <Navigation className="w-3.5 h-3.5 text-bronze" />
                        Yol Tarifi Al
                        <ExternalLink className="w-3 h-3 opacity-60" />
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
