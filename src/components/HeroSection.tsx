import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* 1. Full Video Showcase (Unobstructed) */}
      <div className="relative w-full aspect-video max-h-[75vh] bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover bg-black"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Bottom fade on video */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Slogan, Açıklama ve Buton Alanı (Siyahtan Sitenin Rengine Gradient Geçiş) */}
      <div className="relative w-full bg-gradient-to-b from-black via-[#181614] to-[#FAF9F6] text-center px-4 sm:px-8 pt-4 sm:pt-8 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4 font-heading text-white drop-shadow-md">
            Işığın En Zarif Hali.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mb-6 sm:mb-8 font-light leading-relaxed drop-shadow">
            Hilal Avize Showroom ve Elektrik Malzemesi Şubesi ile
            <br />
            lüks aydınlatma tasarımları, dekoratif aksesuarlar ve profesyonel elektrik tesisat çözümleri.
          </p>

          <Link
            href="/koleksiyonlar"
            className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-100 font-bold px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 shadow-2xl"
          >
            Koleksiyonları Keşfet
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
