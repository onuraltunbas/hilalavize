import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { MekanlarGallery } from "@/components/MekanlarGallery";
import { Sparkles, MessageCircle, ChevronRight, ShieldCheck, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Aydınlattığımız Mekanlar | Müşteri Evleri ve Montaj Referansları | Hilal Avize Kahramanmaraş",
  description:
    "Hilal Avize kalitesiyle aydınlatılan gerçek evler, villa ve salon projeleri. Kahramanmaraş Onikişubat ve çevre ilçelerde gerçekleştirdiğimiz kristal ve modern LED avize montajlarından kareler.",
};

export default function AydinlattigimizMekanlarPage() {
  return (
    <div className="bg-background min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Ana Sayfa</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-muted-foreground/60" />
          <span className="text-bronze font-semibold">Aydınlattığımız Mekanlar</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
            Aydınlattığımız Mekanlar
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Yüzlerce seçkin evin salonlarını, yemek odalarını ve villalarını Hilal Avize kalitesiyle buluşturduk.
          </p>
        </div>

        {/* Projeler Galerisi */}
        <MekanlarGallery />

        {/* Danışmanlık ve Çağrı Alanı */}
        <div className="dgaraj-card p-8 sm:p-12 text-center rounded-3xl space-y-6 bg-gradient-to-b from-surface to-surface-subtle border border-border mt-16 shadow-lg">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="editorial-tag inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Hilal Avize Mimari Danışmanlık ve Montaj</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Sizin Evinizi de Birlikte Aydınlatalım!
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Odanızın veya yemek masanızın fotoğrafını WhatsApp üzerinden bize gönderin; tavan yüksekliğinize, mobilya tarzınıza ve oda ölçülerinize en uygun avize modellerini birlikte belirleyelim.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/905053801350?text=Merhaba%2C%20evimin%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6nderip%20ayd%C4%B1nlatma%20ve%20avize%20se%C3%A7imi%20i%C3%A7in%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] text-white font-bold py-3.5 px-8 rounded-lg text-sm flex items-center justify-center gap-2.5 shadow-md transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile Oda Fotoğrafı Gönder
            </a>

            <Link
              href="/koleksiyonlar"
              className="w-full sm:w-auto bg-surface border border-border hover:border-bronze text-foreground font-bold py-3.5 px-8 rounded-lg text-sm transition-all"
            >
              Tüm Koleksiyonları İncele
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
