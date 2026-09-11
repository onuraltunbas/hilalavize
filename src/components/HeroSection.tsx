import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {

  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* Mobile ve Tablet View: 100% Uncropped Full Video + Slogan ve Button directly below */}
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

        {/* Content Container below video - Slogan + Button */}
        <div className="px-5 pt-8 pb-12 text-center flex flex-col items-center bg-black">
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-3 font-heading text-white">
            Işığın En Zarif Hali.
          </h1>
          <p className="text-xs text-zinc-300 max-w-xs mb-5 font-light leading-relaxed">
            Hilal Avize Showroom ve Elektrik malzeme Şubesi ile lüks aydınlatma tasarımları, dekoratif aksesuarlar ve kaliteli elektrik tesisat çözümleri.
          </p>

          <Link
            href="/koleksiyonlar"
            className="w-full max-w-xs bg-white text-black hover:bg-white/90 font-bold py-3.5 px-6 rounded-lg text-xs tracking-wide transition-all shadow-xl flex items-center justify-center gap-2"
          >
            Koleksiyonları Keşfet
            <ChevronRight className="w-4 h-4" />
          </Link>
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
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5 font-heading drop-shadow-md">
            Işığın En Zarif Hali.
          </h1>
          <p className="text-base lg:text-lg text-zinc-200 max-w-2xl mb-8 font-light drop-shadow leading-relaxed">
            Hilal Avize Showroom ve Elektrik malzeme Şubesi ile lüks aydınlatma tasarımları, dekoratif aksesuarlar ve kaliteli elektrik tesisat çözümleri.
          </p>

          <Link
            href="/koleksiyonlar"
            className="bg-white text-black hover:bg-white/90 font-bold px-9 py-4 rounded-lg text-sm tracking-wide transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
          >
            Koleksiyonları Keşfet
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
