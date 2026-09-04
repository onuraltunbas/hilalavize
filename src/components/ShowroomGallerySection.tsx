import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ShowroomGallerySection() {
  const showcases = [
    {
      title: "Lüks Kristal Saray Koleksiyonu",
      subtitle: "Saf K9 Berrak Kristaller & El İşçiliği İskelet",
      image: "/images/categories/banner_klasik.jpg",
      link: "/kategori/klasik",
      colSpan: "lg:col-span-8",
      tag: "Öne Çıkan Seri",
    },
    {
      title: "Modern LED & Mimari Sarkıtlar",
      subtitle: "Akıllı Aydınlatma & Geometrik Zarafet",
      image: "/images/categories/banner_led.jpg",
      link: "/kategori/ledli-grup",
      colSpan: "lg:col-span-4",
      tag: "Trend Tasarımlar",
    },
    {
      title: "Showroom & Mağaza Deneyimi",
      subtitle: "Kahramanmaraş Onikişubat'ta 2 Katlı Canlı Vitrin",
      image: "/images/1920x1080_hero_showroom.jpeg",
      link: "/subelerimiz",
      colSpan: "lg:col-span-4",
      tag: "Canlı Deneyim",
    },
    {
      title: "Tasarım Duvar Aplikleri & Ray Spotlar",
      subtitle: "Mekanlara Derinlik Katan Mimari Vurgu Işıkları",
      image: "/images/categories/banner_aplikler.jpg",
      link: "/kategori/aplik-ve-spotlar",
      colSpan: "lg:col-span-4",
      tag: "Mimari Vurgu",
    },
    {
      title: "Dekoratif Aynalar & Özel Berjerler",
      subtitle: "Işığınızla Bütünleşen Prestijli Yaşam Alanları",
      image: "/images/categories/banner_aksesuarlar.jpg",
      link: "/kategori/aksesuar",
      colSpan: "lg:col-span-4",
      tag: "Lüks Tamamlayıcılar",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header - Porsche Minimal Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-heading">
              Göz Alıcı Modeller, <br className="hidden sm:inline" />
              Canlı Mağaza Deneyimi.
            </h2>
          </div>
          <Link
            href="/koleksiyonlar"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground hover:text-bronze transition-colors group"
          >
            Tüm Koleksiyonları İncele
            <ArrowUpRight className="w-4 h-4 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {showcases.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`group relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] border border-border/80 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-bronze/60 flex flex-col justify-end p-6 sm:p-8 ${item.colSpan}`}
            >
              {/* Image Asset with Smooth Zoom */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlays for Porsche-like depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-85" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase mb-3 border border-white/20">
                  {item.tag}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2 font-heading group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light max-w-lg mb-4 line-clamp-2">
                  {item.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-200 tracking-wide">
                  Modeli İncele
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
