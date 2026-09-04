import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { ChevronRight, MessageCircle } from "lucide-react";

export function HeroSection() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="relative min-h-[75vh] sm:min-h-[82vh] lg:min-h-[90vh] flex items-end sm:items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video with Subtle Overlay */}
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
        {/* Porsche Style Subtle Vignette - Keeps video vivid and showroom bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      </div>

      {/* Content Container - Minimal & High Impact */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pb-12 sm:pb-16 pt-20 sm:py-24">
        {/* Slogan */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mb-3 sm:mb-4 font-heading drop-shadow-md">
          Işığın En Zarif Hali.
        </h1>

        {/* Minimal Sub-slogan */}
        <p className="text-xs sm:text-base lg:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-6 sm:mb-9 drop-shadow">
          Kahramanmaraş Onikişubat&apos;ta el işçiliği saray tipi kristallerden modern mimari aydınlatmaya uzanan seçkin bir vitrin.
        </p>

        {/* Minimal Porsche Style Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none">
          <Link
            href="/koleksiyonlar"
            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-bold px-7 py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
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
            className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/30 font-medium px-6 py-3 rounded-full text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            WhatsApp Showroom Danışma
          </a>
        </div>
      </div>
    </section>
  );
}
