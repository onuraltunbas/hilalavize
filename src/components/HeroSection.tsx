import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { ChevronRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Mobile & Tablet View: 100% Uncropped Full Video + Content below */}
      <div className="block md:hidden">
        {/* Full Uncropped Video */}
        <div className="relative w-full aspect-video bg-black overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain bg-black"
          >
            <source src="/videos/hero_video.mp4" type="video/mp4" />
          </video>
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Content Container below video */}
        <div className="px-5 pt-5 pb-10 text-center flex flex-col items-center bg-black">
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-2.5 font-heading text-white">
            Işığın En Zarif Hali.
          </h1>

          <p className="text-xs text-white/80 max-w-md font-light leading-relaxed mb-6">
            Kahramanmaraş Onikişubat&apos;ta el işçiliği saray tipi kristallerden modern mimari aydınlatmaya uzanan seçkin bir vitrin.
          </p>

          <div className="flex flex-col gap-2.5 w-full max-w-xs">
            <Link
              href="/koleksiyonlar"
              className="w-full bg-white text-black hover:bg-white/90 font-bold py-3.5 px-6 rounded-full text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Koleksiyonları Keşfet
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                "Merhaba, Hilal Avize showroom modelleri ve aydınlatma danışmanlığı hakkında bilgi almak istiyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-medium py-3 px-6 rounded-full text-xs tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Showroom Danışma
            </a>
          </div>
        </div>
      </div>

      {/* Desktop View (md and up): Full-Bleed Cinematic Hero */}
      <div className="hidden md:flex relative min-h-[85vh] lg:min-h-[90vh] items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/hero_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
        </div>

        {/* Desktop Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center flex flex-col items-center py-24">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 font-heading drop-shadow-md">
            Işığın En Zarif Hali.
          </h1>

          <p className="text-base lg:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-9 drop-shadow">
            Kahramanmaraş Onikişubat&apos;ta el işçiliği saray tipi kristallerden modern mimari aydınlatmaya uzanan seçkin bir vitrin.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/koleksiyonlar"
              className="bg-white text-black hover:bg-white/90 font-bold px-8 py-3.5 rounded-full text-sm tracking-wide transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Koleksiyonları Keşfet
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                "Merhaba, Hilal Avize showroom modelleri ve aydınlatma danışmanlığı hakkında bilgi almak istiyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 font-medium px-7 py-3.5 rounded-full text-sm tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Showroom Danışma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
