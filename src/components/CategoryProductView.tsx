"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Sparkles, MessageCircle, Layers } from "lucide-react";

interface CategoryProductViewProps {
  category: Category;
  products: Product[];
}

export function CategoryProductView({ category, products }: CategoryProductViewProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Determine active background image
  const activeBgImage = useMemo(() => {
    if (category.slug === "klasik") {
      if (selectedSubcategory === "Maria Theresa" || selectedSubcategory === "Maria Theresa Ailesi") {
        return "/images/theresa_kapak.jpeg";
      }
      if (selectedSubcategory === "Baccarat" || selectedSubcategory === "Baccarat Ailesi") {
        return "/images/bacarat_kapak.jpeg";
      }
    }
    return category.coverImage || category.image;
  }, [category, selectedSubcategory]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") return products;

    return products.filter((p) => {
      const sub = p.subcategory?.toLowerCase() || "";
      const badge = p.badge?.toLowerCase() || "";
      const target = selectedSubcategory.toLowerCase();

      return (
        sub.includes(target) ||
        target.includes(sub) ||
        badge.includes(target) ||
        target.includes(badge) ||
        p.name.toLowerCase().includes(target)
      );
    });
  }, [products, selectedSubcategory]);

  return (
    <div>
      {/* Category Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0F172A] border border-amber-500/25 p-6 sm:p-10 mb-10 shadow-2xl min-h-[220px] flex flex-col justify-center transition-all duration-500">
        {/* Dynamic Background Image */}
        {activeBgImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={activeBgImage}
              alt={category.name}
              fill
              className="object-cover object-center opacity-35 filter brightness-75 scale-105 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A] via-[#080D1A]/90 to-[#080D1A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent" />
          </div>
        )}

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              Showroom Özel Koleksiyonu
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-amber-400 font-semibold">
              {products.length} Model Teşhirde
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow">
            {category.description}
          </p>

          {/* Subcategory Interactive Filter Tabs */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center gap-2 mb-2 text-xs text-amber-400 font-medium">
                <Layers className="w-3.5 h-3.5" />
                <span>Alt Kategoriler & Seriler:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory("all")}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all duration-200 ${
                    selectedSubcategory === "all"
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                      : "bg-[#132238]/90 text-slate-300 hover:text-white border border-slate-700/60 hover:border-amber-500/40 backdrop-blur-md"
                  }`}
                >
                  Tüm Modeller ({products.length})
                </button>

                {category.subcategories.map((sub, i) => {
                  const count = products.filter((p) => {
                    const s = p.subcategory?.toLowerCase() || "";
                    const b = p.badge?.toLowerCase() || "";
                    const target = sub.toLowerCase();
                    return (
                      s.includes(target) ||
                      target.includes(s) ||
                      b.includes(target) ||
                      target.includes(b) ||
                      p.name.toLowerCase().includes(target)
                    );
                  }).length;

                  const isSelected = selectedSubcategory === sub;

                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105"
                          : "bg-[#132238]/90 text-amber-300/90 hover:text-white border border-amber-500/30 hover:border-amber-500/60 backdrop-blur-md"
                      }`}
                    >
                      <span>{sub}</span>
                      {count > 0 && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isSelected
                              ? "bg-slate-950/20 text-slate-950"
                              : "bg-amber-500/20 text-amber-300"
                          }`}
                        >
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>{category.name} Modellerimiz</span>
            {selectedSubcategory !== "all" && (
              <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 font-normal">
                {selectedSubcategory}
              </span>
            )}
          </h2>
          <span className="text-xs text-amber-400 font-semibold">
            Gösterilen: {filteredProducts.length} Model
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenModal={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="p-10 text-center bg-[#0F172A] rounded-3xl border border-slate-800 space-y-4">
            <p className="text-sm text-slate-300">
              Bu filtrede ürün bulunamadı. Showroomumuzda bu seriye ait zengin model seçeneklerimiz mevcuttur.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedSubcategory("all")}
                className="bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold px-4 py-2 rounded-xl border border-amber-500/30"
              >
                Tüm Modelleri Göster
              </button>
              <a
                href="https://wa.me/905053801350"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Bilgi Al
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
