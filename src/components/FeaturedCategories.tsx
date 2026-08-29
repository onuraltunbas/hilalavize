import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-[#0B132B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Geniş Ürün Yelpazesi
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Aydınlatma & Dekorasyon Kategorilerimiz
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Evinizin ve iş yerinizin ihtiyacı olan tüm lüks avize, aplik, ray spot, ayna, saat ve elektrik donanımları tek çatı altında.
            </p>
          </div>

          <Link
            href="/koleksiyonlar"
            className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0"
          >
            Tüm Kataloğu Gör ({CATEGORIES.length} Kategori) →
          </Link>
        </div>

        {/* Compact Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-[#0F172A] border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Image Area */}
              <div className="relative h-36 w-full overflow-hidden bg-slate-950">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                
                {/* Arrow Icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#0B132B]/80 text-amber-400 border border-amber-500/40 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] text-amber-300 font-bold bg-[#0B132B]/90 px-2 py-0.5 rounded-md border border-amber-500/30 backdrop-blur-sm">
                    {cat.itemCount}+ Model
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Koleksiyonu Gör</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform text-xs">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
