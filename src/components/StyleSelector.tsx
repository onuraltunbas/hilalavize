"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { Sparkles, Crown, Zap, Leaf, ChevronRight, MessageCircle } from "lucide-react";

export function StyleSelector() {
  const [selectedStyle, setSelectedStyle] = useState<
    "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist"
  >("İhtişamlı & Klasik");

  const styles = [
    {
      name: "İhtişamlı & Klasik" as const,
      icon: Crown,
      badge: "Saray & Asalet",
      tagline: "Ağır kollu saray avizeleri, K9 kristal prizmalar ve varaklı ihtişam",
      description:
        "Büyük salonlar, villalar ve gösterişli mekanlar için saf pirinç dökümlü kristal sarkıtlar, altın varaklı cam sanat eserleri ve asil kadife berjerler.",
      color: "from-amber-500 to-amber-700",
      accent: "text-amber-400",
    },
    {
      name: "Modern & Spor" as const,
      icon: Zap,
      badge: "Çağdaş & Dinamik",
      tagline: "Geometrik halka LED'ler, fırçalanmış gold detaylar ve tasarım sehpalar",
      description:
        "Modern yaşam alanları için kumandalı renk değiştiren LED halkalar, Calacatta mermer sehpalar ve dokunmatik buğu önleyicili akıllı aynalar.",
      color: "from-blue-500 to-indigo-600",
      accent: "text-blue-400",
    },
    {
      name: "Sade & Minimalist" as const,
      icon: Leaf,
      badge: "Sade & Fonksiyonel",
      tagline: "Manyetik ray spotlar, gizli mimari ışıklar ve temperli cam anahtarlar",
      description:
        "Gözü yormayan sakin mekanlar için mimari ray spot sistemleri, gömme tavan ışıkları ve minimalist temperli siyah cam anahtar-priz serileri.",
      color: "from-emerald-500 to-teal-700",
      accent: "text-emerald-400",
    },
  ];

  const filteredProducts = PRODUCTS.filter((p) => p.style === selectedStyle);

  return (
    <section className="py-20 bg-[#080D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Her Zevke ve Mekana Uygun
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tarzınıza Göre Aydınlatma & Dekorasyonu Keşfedin
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            İster çok ihtişamlı ve kollu ağır modeller, ister sade ve spor çizgiler... Hilal Avize&apos;de aradığınız tüm zevklere uygun özel koleksiyonlar hazır.
          </p>
        </div>

        {/* Style Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {styles.map((st) => {
            const Icon = st.icon;
            const isSelected = selectedStyle === st.name;
            return (
              <button
                key={st.name}
                onClick={() => setSelectedStyle(st.name)}
                className={`text-left p-6 rounded-3xl transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? "bg-[#111D38] border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]"
                    : "bg-[#0F172A]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0F172A]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      isSelected
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {st.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{st.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.tagline}</p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-amber-500/20 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                    Şu an inceleniyor
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid For Active Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#0F172A] rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#0B132B]/90 text-amber-400 border border-amber-500/40 backdrop-blur-md">
                    {prod.style}
                  </span>
                </div>
                {prod.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-slate-950">
                      {prod.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] text-amber-400 font-medium">{prod.categoryName}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <div className="flex justify-between">
                    <span>Malzeme:</span>
                    <span className="text-slate-200 font-medium">{prod.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ebat:</span>
                    <span className="text-slate-200 font-medium">{prod.dimensions}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/905053801350?text=${encodeURIComponent(
                      `Merhaba, Hilal Avize sitenizden "${prod.name}" modelini inceledim. Bu ürün ve fiyatı hakkında bilgi alabilir miyim?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp ile Fiyat & Bilgi Al
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/koleksiyonlar"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 hover:border-amber-400 font-bold px-8 py-3.5 rounded-2xl text-sm transition-all"
          >
            Tüm Modelleri ve Koleksiyonları İncele →
          </Link>
        </div>
      </div>
    </section>
  );
}
