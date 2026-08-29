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
    <section className="py-20 bg-[#080D1A] relative" id="hizmetlerimiz">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Satış Öncesi ve Sonrası Tam Destek
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Özel Hizmetlerimiz ve Uzmanlık Alanlarımız
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sadece ürün sunmuyor; evinize en yakışan modeli birlikte belirliyor, kapınıza kadar güvenle taşıyıp uzman ustalarımızla kusursuz şekilde monte ediyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.iconName] || Sparkles;
            return (
              <div
                key={srv.slug}
                className="bg-[#0F172A] rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#111D38] border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {srv.branch === "showroom"
                        ? "Avize Showroom"
                        : srv.branch === "electrical"
                        ? "Elektrik Şube"
                        : "Her İki Şube"}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                    <p className="text-xs text-amber-300/90 font-medium mb-3">
                      {srv.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Hizmet Avantajları:
                    </div>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
                      {srv.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/hizmetler/${srv.slug}`}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    Detaylı Bilgi & Adımlar
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/905053801350?text=${encodeURIComponent(
                      `Merhaba, "${srv.title}" hizmetiniz hakkında bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
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
