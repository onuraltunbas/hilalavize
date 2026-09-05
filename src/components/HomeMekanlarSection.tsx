import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Sparkles, MapPin } from "lucide-react";
import { INSTALLATION_PROJECTS } from "@/data/aydinlattigimiz-mekanlar";

export function HomeMekanlarSection() {
  // İlk 6 öne çıkan müşteri evi montajı
  const featured = INSTALLATION_PROJECTS.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-surface-subtle/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="editorial-tag inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-bronze" />
              <span>Müşteri Evlerinden Kareler</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-heading">
              Aydınlattığımız Mekanlar.
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Kahramanmaraş ve çevre illerde montajını gerçekleştirdiğimiz gerçek müşteri evleri, villalar ve salonlar.
            </p>
          </div>
          <Link
            href="/aydinlattigimiz-mekanlar"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground hover:text-bronze transition-colors group"
          >
            <span>Tüm Projeleri Gör ({INSTALLATION_PROJECTS.length} Proje)</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grid of Featured Real Homes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <Link
              key={item.id}
              href="/aydinlattigimiz-mekanlar"
              className="group dgaraj-card overflow-hidden rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/80"
            >
              <div className="relative aspect-[3/4] w-full bg-surface-subtle overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Detayları Gör
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-xs text-[10px] font-extrabold text-foreground px-2 py-0.5 rounded-md border border-border/50">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-4 space-y-1 bg-surface">
                <h3 className="text-sm font-bold text-foreground line-clamp-1 group-hover:text-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-bronze shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button on Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/aydinlattigimiz-mekanlar"
            className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg bg-surface border border-border font-bold text-xs text-foreground shadow-xs hover:bg-surface-subtle"
          >
            Tüm {INSTALLATION_PROJECTS.length} Müşteri Evi Montajını İncele →
          </Link>
        </div>
      </div>
    </section>
  );
}
