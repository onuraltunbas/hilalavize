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
      <div className="relative rounded-2xl overflow-hidden dgaraj-card p-6 sm:p-10 mb-10 min-h-[220px] flex flex-col justify-center transition-all duration-500">
        {/* Dynamic Background Image */}
        {activeBgImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={activeBgImage}
              alt={category.name}
              fill
              className="object-cover object-center opacity-25 dark:opacity-35 filter brightness-90 scale-105 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/40" />
          </div>
        )}

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="editorial-tag">
              <Sparkles className="w-3.5 h-3.5 text-bronze" />
              Showroom Özel Koleksiyonu
            </span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-xs text-bronze font-semibold">
              {products.length} Model Teşhirde
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {category.description}
          </p>

          {/* Subcategory Interactive Filter Tabs */}
          {category.subcategories && category.subcategories.length > 0 && (
            <div className="pt-3">
              <div className="flex items-center gap-2 mb-2 text-xs text-bronze font-semibold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Seriler & Alt Kategoriler:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory("all")}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 ${
                    selectedSubcategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-surface-subtle text-foreground/80 hover:text-foreground border border-border"
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
                      className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-surface-subtle text-foreground/80 hover:text-foreground border border-border"
                      }`}
                    >
                      <span>{sub}</span>
                      {count > 0 && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                            isSelected
                              ? "bg-surface text-primary"
                              : "bg-border text-foreground"
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
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <span>{category.name} Modellerimiz</span>
            {selectedSubcategory !== "all" && (
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-surface-subtle text-bronze border border-border font-medium">
                {selectedSubcategory}
              </span>
            )}
          </h2>
          <span className="text-xs text-muted-foreground font-semibold">
            Gösterilen: <strong className="text-foreground">{filteredProducts.length}</strong> Model
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
          <div className="p-10 text-center dgaraj-card space-y-4">
            <p className="text-sm text-muted-foreground">
              Bu filtrede ürün bulunamadı. Showroomumuzda bu seriye ait zengin model seçeneklerimiz mevcuttur.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedSubcategory("all")}
                className="bg-surface-subtle hover:bg-border text-foreground text-xs font-semibold px-4 py-2 rounded-lg border border-border"
              >
                Tüm Modelleri Göster
              </button>
              <a
                href="https://wa.me/905053801350"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-bold px-5 py-2 rounded-lg text-xs shadow-sm"
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
