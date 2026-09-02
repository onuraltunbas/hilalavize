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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background py-16 lg:py-24 border-b border-border">
      {/* Background Image with Adaptive Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1920x1080_hero_showroom.jpeg"
          alt="Hilal Avize Lüks Showroom Kahramanmaraş"
          fill
          priority
          className="object-cover object-center scale-100 transition-transform duration-1000 opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="editorial-tag mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-bronze" />
          <span>Kahramanmaraş&apos;ın En Kapsamlı Aydınlatma Vitrini</span>
        </div>

        {/* Semantic H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.15] max-w-4xl mb-5">
          Evinize En Uygun Avizeyi{" "}
          <span className="gold-gradient-text block sm:inline">
            Beraber Seçelim!
          </span>
        </h1>

        {/* D'GARAJ Style Editorial Note */}
        <div className="text-xs sm:text-sm font-medium text-bronze tracking-wider uppercase mb-3">
          * El işçiliği kristaller, ömürlük kaplama, eksiksiz montaj ve teslimat.
        </div>

        {/* Subtitle & Value Proposition */}
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl font-normal leading-relaxed mb-10">
          Odanızın fotoğrafını WhatsApp&apos;tan bize iletin veya Onikişubat&apos;taki showroomumuza gelin; ücretsiz aydınlatma danışmanlığı ile doğru ebat, doğru ışık gücü ve tarzı belirleyelim.
        </p>

        {/* CTAs (Call to Actions) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-14">
          <a
            href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
              "Merhaba, odamın fotoğrafını iletip evime en uygun avize ve aydınlatma modelleri hakkında danışmanlık almak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-md flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#059669]" />
            WhatsApp&apos;tan Fotoğraf Gönder
          </a>

          <a
            href={showroom.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-90 font-bold px-7 py-3.5 rounded-xl text-sm border border-border shadow-sm flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
          >
            <Navigation className="w-4 h-4 text-bronze" />
            Showroom Yol Tarifi Al
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Key Trust Stats & Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-5xl pt-8 border-t border-border/80 text-left">
          <div className="dgaraj-card p-4">
            <div className="text-xl sm:text-2xl font-extrabold text-bronze">2 Ayrı</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Uzman Şube</div>
            <div className="text-[11px] text-muted-foreground">Showroom & Elektrik</div>
          </div>

          <div className="dgaraj-card p-4">
            <div className="text-xl sm:text-2xl font-extrabold text-bronze">%100</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Kristal & Kalite</div>
            <div className="text-[11px] text-muted-foreground">Saf K9 Berrak Kristal</div>
          </div>

          <div className="dgaraj-card p-4">
            <div className="text-xl sm:text-2xl font-extrabold text-bronze">Ücretsiz</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Stil Danışmanlığı</div>
            <div className="text-[11px] text-muted-foreground">Evinize En Doğru Seçim</div>
          </div>

          <div className="dgaraj-card p-4">
            <div className="text-xl sm:text-2xl font-extrabold text-bronze">Güvenli</div>
            <div className="text-xs sm:text-sm font-semibold text-foreground">Nakliye & Montaj</div>
            <div className="text-[11px] text-muted-foreground">Hasarsız Kurulum Sözü</div>
          </div>
        </div>
      </div>
    </section>
  );
}
