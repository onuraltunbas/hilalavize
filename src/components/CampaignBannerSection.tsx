import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { MessageCircle, MapPin, Check } from "lucide-react";

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
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-5 font-heading text-white uppercase">
              Aydınlatma <span className="text-amber-200">Danışmanlığı</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
              Odanızın fotoğrafını veya planını bize iletin; uzman ekibimizle en doğru çap, doğru lümen ve dekoratif stili belirleyelim. Kampanya kapsamında ücretsiz keşif, profesyonel montaj ve ömürlük kaplama güvencesi sizi bekliyor.
            </p>

            {/* Campaign Highlights - Özellik Listesi (Buton formatında değil, belirgin liste maddeleri) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 w-full mb-9 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-300 stroke-[2.5]" />
                </div>
                <span className="font-medium tracking-wide">Ücretsiz Aydınlatma Danışmanlığı</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-300 stroke-[2.5]" />
                </div>
                <span className="font-medium tracking-wide">Eksiksiz ve Güvenli Montaj</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-300 stroke-[2.5]" />
                </div>
                <span className="font-medium tracking-wide">Saf K9 Berrak Kristal Garantisi</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-amber-300 stroke-[2.5]" />
                </div>
                <span className="font-medium tracking-wide">Showrooma Özel Teklifler</span>
              </div>
            </div>

            {/* Campaign Actions - Belirgin Butonlar */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, web sitenizdeki Showroom Kampanyası hakkında bilgi ve teklif almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-3.5 rounded-lg text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                Kampanya Teklifi Al (WhatsApp)
              </a>

              <a
                href={showroom.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-900 font-bold px-7 py-3.5 rounded-lg text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 active:scale-98"
              >
                <MapPin className="w-4 h-4 text-amber-600" />
                Showroom Yol Tarifi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
