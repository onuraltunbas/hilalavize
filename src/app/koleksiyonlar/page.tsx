"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import {
  Sparkles,
  Search,
  Layers,
} from "lucide-react";

export default function CollectionsPage() {
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products) && data.products.length > 0) {
          setProductsList(data.products);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dimensions.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.lightingType.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [productsList, selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="editorial-tag">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            Seçkin Aydınlatma & Dekorasyon Vitrini
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Hilal Avize Tüm Koleksiyonlar
          </h1>
        </div>

        {/* Search and Filters Bar */}
        <div className="dgaraj-card p-5 sm:p-6 mb-10 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ürün adı, kristal, pirinç, mermer veya ölçü ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors"
            />
          </div>

          {/* Categories Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-border pt-3">
            <span className="text-xs font-semibold text-bronze flex items-center gap-1 shrink-0 mr-1 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" /> Kategori:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-surface-subtle text-foreground/80 hover:text-foreground border border-border"
              }`}
            >
              Hepsi ({productsList.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-surface-subtle text-foreground/80 hover:text-foreground border border-border"
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
          <span>
            Toplam <strong className="text-foreground">{filteredProducts.length}</strong> model listeleniyor
          </span>
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-bronze hover:underline font-medium"
            >
              Filtreleri Temizle
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 dgaraj-card space-y-3">
            <p className="text-foreground font-semibold">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <p className="text-xs text-muted-foreground">
              Farklı bir arama terimi deneyebilir veya showroomumuzdaki tüm modelleri görmek için bizimle iletişime geçebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-bold"
            >
              Tüm Ürünleri Göster
            </button>
          </div>
        )}

        {/* Product Detail Modal */}
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      </div>
    </div>
  );
}
