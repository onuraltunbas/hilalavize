import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-background relative border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="editorial-tag">
              <Sparkles className="w-3.5 h-3.5 text-bronze" />
              Geniş Ürün Yelpazesi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Aydınlatma & Dekorasyon Kategorilerimiz
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Evinizin ve iş yerinizin ihtiyacı olan tüm lüks avize, aplik, ray spot, ayna, saat ve elektrik donanımları tek çatı altında.
            </p>
          </div>

          <Link
            href="/koleksiyonlar"
            className="text-xs sm:text-sm font-bold text-bronze hover:underline flex items-center gap-1 shrink-0"
          >
            Tüm Kataloğu Gör ({CATEGORIES.length} Kategori) →
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="group dgaraj-card overflow-hidden flex flex-col justify-between"
            >
              {/* Image Area */}
              <div className="relative h-40 w-full overflow-hidden bg-surface-subtle">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Arrow Icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-surface/90 text-foreground border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-2.5 left-3">
                  <span className="text-[10px] text-foreground font-bold bg-surface/90 px-2 py-0.5 rounded-md border border-border backdrop-blur-sm shadow-sm">
                    {cat.itemCount}+ Model
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-bronze transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Koleksiyonu İncele</span>
                  <span className="text-bronze font-bold group-hover:translate-x-1 transition-transform text-xs">
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
