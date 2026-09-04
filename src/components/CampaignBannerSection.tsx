import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function CampaignBannerSection() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="py-20 lg:py-28 bg-surface-subtle border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Large Porsche Style Campaign Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-border bg-black text-white shadow-2xl min-h-[500px] lg:min-h-[580px] flex items-center">
          {/* Background Campaign Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/theresa_kapak.jpeg"
              alt="Hilal Avize Özel Showroom Kampanyası"
              fill
              className="object-cover object-center scale-100 transition-transform duration-1000 ease-out hover:scale-105"
              sizes="100vw"
              priority
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 lg:to-transparent" />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Content Block */}
          <div className="relative z-10 max-w-2xl p-8 sm:p-12 lg:p-16 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. Bölüm • Özel Kampanya & Fırsat</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5 font-heading text-white">
              Evinizin Havasını Değiştirecek <br />
              <span className="text-amber-200">Showroom Kampanyası.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
              Odanızın fotoğrafını veya planını bize iletin; uzman ekibimizle en doğru çap, doğru lümen ve dekoratif stili belirleyelim. Kampanya kapsamında ücretsiz keşif, profesyonel montaj ve ömürlük kaplama güvencesi sizi bekliyor.
            </p>

            {/* Campaign Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-10 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-white/90">Ücretsiz Aydınlatma Danışmanlığı</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-white/90">Eksiksiz & Güvenli Montaj</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-white/90">Saf K9 Berrak Kristal Garantisi</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-white/90">Showrooma Özel Teklifler</span>
              </div>
            </div>

            {/* Campaign Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, web sitenizdeki Showroom Kampanyası hakkında bilgi ve teklif almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#059669] hover:bg-[#047857] text-white font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#059669]" />
                Kampanya Teklifi Al (WhatsApp)
              </a>

              <a
                href={showroom.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-medium px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                Showroom Yol Tarifi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
