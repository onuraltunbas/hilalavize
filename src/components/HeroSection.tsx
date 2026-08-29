import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import {
  Sparkles,
  MessageCircle,
  Navigation,
  ExternalLink,
} from "lucide-react";

export function HeroSection() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#080D1A] py-16 lg:py-24">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1920x1080_hero_showroom.jpg"
          alt="Hilal Avize Lüks Showroom Kahramanmaraş"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#0B132B]/85 to-[#080D1A]/95" />
        <div className="ambient-light-glow top-1/4 left-1/2 -translate-x-1/2" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111D38]/80 border border-[#F59E0B]/40 text-[#F59E0B] text-xs sm:text-sm font-semibold mb-6 shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Kahramanmaraş&apos;ın En Kapsamlı Aydınlatma Vitrini</span>
        </div>

        {/* Semantic H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
          Evinize En Uygun Avizeyi{" "}
          <span className="gold-gradient-text block sm:inline">
            Beraber Seçelim!
          </span>
        </h1>

        {/* Subtitle & Value Proposition */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mb-10">
          Odanızın fotoğrafını WhatsApp&apos;tan bize iletin veya Onikişubat&apos;taki showroomumuza gelin; ücretsiz aydınlatma danışmanlığı ile doğru ebat, doğru ışık gücü ve tarzı belirleyelim.
        </p>

        {/* CTAs (Call to Actions) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12">
          <a
            href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
              "Merhaba, odamın fotoğrafını iletip evime en uygun avize ve aydınlatma modelleri hakkında danışmanlık almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            WhatsApp&apos;tan Fotoğraf Gönder
          </a>

          <a
            href={showroom.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-2xl text-sm sm:text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-1"
          >
            <Navigation className="w-5 h-5 fill-slate-950" />
            Showroom Yol Tarifi Al
            <ExternalLink className="w-4 h-4 opacity-75" />
          </a>
        </div>

        {/* Key Trust Stats & Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl pt-8 border-t border-slate-800/80 text-left">
          <div className="bg-[#0F172A]/70 p-4 rounded-2xl border border-amber-500/15 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">2 Ayrı</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Uzman Şube</div>
            <div className="text-[11px] text-slate-400">Showroom & Elektrik</div>
          </div>

          <div className="bg-[#0F172A]/70 p-4 rounded-2xl border border-amber-500/15 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">%100</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Kristal & Kalite</div>
            <div className="text-[11px] text-slate-400">Saf K9 Berrak Kristal</div>
          </div>

          <div className="bg-[#0F172A]/70 p-4 rounded-2xl border border-amber-500/15 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Ücretsiz</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Stil Danışmanlığı</div>
            <div className="text-[11px] text-slate-400">Evinize En Doğru Seçim</div>
          </div>

          <div className="bg-[#0F172A]/70 p-4 rounded-2xl border border-amber-500/15 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Güvenli</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Nakliye & Montaj</div>
            <div className="text-[11px] text-slate-400">Hasarsız Kurulum Sözü</div>
          </div>
        </div>
      </div>
    </section>
  );
}
