import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { ChevronRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-end sm:items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center brightness-90"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Porsche Style Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container - Minimal & High Impact */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pb-16 pt-24 sm:py-24">
        {/* Minimal Sub-Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-5 text-amber-200/90 animate-in fade-in slide-in-from-top-3 duration-700">
          Hilal Elektrik & Avize • Showroom
        </div>

        {/* Slogan */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] max-w-4xl mb-4 font-heading drop-shadow-lg">
          Işığın En Zarif Hali.
        </h1>

        {/* Minimal Sub-slogan */}
        <p className="text-sm sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 drop-shadow">
          Kahramanmaraş Onikişubat&apos;ta el işçiliği saray tipi kristallerden modern mimari aydınlatmaya uzanan seçkin bir vitrin.
        </p>

        {/* Minimal Porsche Style Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none">
          <Link
            href="/koleksiyonlar"
            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
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
            className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 font-medium px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            WhatsApp Showroom Danışma
          </a>
        </div>
      </div>
    </section>
  );
}
