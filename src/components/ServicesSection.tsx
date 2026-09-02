import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import {
  Compass,
  Truck,
  Zap,
  Building,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Truck,
    Zap,
    Building,
  };

  return (
    <section className="py-20 bg-background relative border-b border-border" id="hizmetlerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="editorial-tag">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            Satış Öncesi ve Sonrası Tam Destek
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Özel Hizmetlerimiz ve Uzmanlık Alanlarımız
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Sadece ürün sunmuyor; evinize en yakışan modeli birlikte belirliyor, kapınıza kadar güvenle taşıyıp uzman ustalarımızla kusursuz şekilde monte ediyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.iconName] || Sparkles;
            return (
              <div
                key={srv.slug}
                className="dgaraj-card p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-bronze shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-surface-subtle text-bronze border border-border">
                      {srv.branch === "showroom"
                        ? "Avize Showroom"
                        : srv.branch === "electrical"
                        ? "Elektrik Şube"
                        : "Her İki Şube"}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{srv.title}</h3>
                    <p className="text-xs text-bronze font-medium mb-2.5">
                      {srv.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-bold text-bronze uppercase tracking-wider">
                      Hizmet Avantajları:
                    </div>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-muted-foreground">
                      {srv.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/hizmetler/${srv.slug}`}
                    className="text-xs font-bold text-foreground hover:text-bronze flex items-center gap-1 transition-colors"
                  >
                    Detaylı Bilgi & Adımlar
                    <ChevronRight className="w-3.5 h-3.5 text-bronze" />
                  </Link>

                  <a
                    href={`https://wa.me/905053801350?text=${encodeURIComponent(
                      `Merhaba, "${srv.title}" hizmetiniz hakkında bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#059669] hover:bg-[#047857] text-white font-semibold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    Bilgi Al
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
