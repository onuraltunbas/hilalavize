import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, ArrowDown } from "lucide-react";
import { INSTALLATION_PROJECTS } from "@/data/aydinlattigimiz-mekanlar";

export function HomeMekanlarSection() {
  // İlk 4 öne çıkan müşteri evi montajı
  const featured = INSTALLATION_PROJECTS.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-surface-subtle/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-14 gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-heading">
              Aydınlattığımız Mekanlar.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Kahramanmaraş ve çevre illerde montajını gerçekleştirdiğimiz gerçek müşteri evleri, villalar ve salonlar.
            </p>
          </div>
          <Link
            href="/aydinlattigimiz-mekanlar"
            className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground hover:text-bronze transition-colors group"
          >
            <span>Tüm Projeleri Gör</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grid of Featured Real Homes: Mobil 2 sütun x 2 satır (4 adet), PC 4 sütun yan yana */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featured.map((item) => (
            <Link
              key={item.id}
              href="/aydinlattigimiz-mekanlar"
              className="group dgaraj-card overflow-hidden rounded-xl sm:rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/80"
            >
              <div className="relative aspect-[3/4] w-full bg-surface-subtle overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-end p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Detayları Gör
                  </span>
                </div>
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-surface/90 backdrop-blur-xs text-[9px] sm:text-[10px] font-extrabold text-foreground px-1.5 sm:px-2 py-0.5 rounded-md border border-border/50">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-2.5 sm:p-4 space-y-1 bg-surface">
                <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-1 group-hover:text-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground flex items-center gap-1 line-clamp-1">
                  <MapPin className="w-3 h-3 text-bronze shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Alt Kısım: Sol alta yuvarlak aşağı in butonu ve mobil Tüm Projeleri Gör butonu */}
        <div className="mt-8 sm:mt-12 flex items-center justify-between gap-4">
          {/* Sol Alta Yuvarlak Aşağı İn Butonu */}
          <a
            href="#randevu"
            className="inline-flex items-center gap-3 group focus:outline-none"
            title="Ücretsiz Mimari ve Aydınlatma Desteği Formuna İn"
            aria-label="Ücretsiz Mimari ve Aydınlatma Desteği Formuna İn"
          >
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-surface border-2 border-border/90 group-hover:border-bronze shadow-md flex items-center justify-center text-foreground group-hover:text-bronze transition-all duration-300 group-hover:scale-105 active:scale-95 shrink-0">
              <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-0.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[11px] uppercase tracking-wider font-semibold text-bronze">
                Aydınlatma Danışmanlığı
              </span>
              <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-bronze transition-colors">
                Forma İn ↓
              </span>
            </div>
          </a>

          {/* Mobilde sağ tarafta Tüm Projeleri Gör */}
          <Link
            href="/aydinlattigimiz-mekanlar"
            className="md:hidden inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-foreground hover:text-bronze transition-colors py-2.5 px-3.5 rounded-lg bg-surface border border-border shadow-xs"
          >
            <span>Tüm Projeler</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
