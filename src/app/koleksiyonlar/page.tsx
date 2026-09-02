"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import {
  Sparkles,
  Search,
  Layers,
  ArrowRight,
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
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="editorial-tag">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            Seçkin Aydınlatma & Dekorasyon Vitrini
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Hilal Avize Tüm Koleksiyonlar
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Evinizin mimarisine ve zevkinize uygun kategoriyi seçerek lüks avize, modern LED sarkıt ve dekorasyon serilerimizi keşfedin.
          </p>
        </div>

        {/* 1. STACKED FULL-WIDTH CATEGORY HERO BANNERS (D'GARAJ EDITORIAL STYLE) */}
        <div className="space-y-6 sm:space-y-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategori/${cat.slug}`}
              className="group relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden block border border-border shadow-lg transition-all duration-500 hover:shadow-2xl"
              title={`${cat.name} Koleksiyonunu İncele`}
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={`${cat.name} - Hilal Avize Kahramanmaraş`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                priority={cat.slug === "tekli-avizeler" || cat.slug === "klasik"}
              />

              {/* High-End Dark Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 group-hover:via-black/40 transition-colors" />

              {/* Centered Editorial Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 text-center space-y-3 sm:space-y-4">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-bold backdrop-blur-md border border-white/30 shadow-sm">
                  {cat.itemCount}+ Seçkin Model
                </span>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
                  {cat.name}
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-3">
                  {cat.description}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm shadow-xl group-hover:bg-white/90 group-hover:scale-105 transition-all">
                    <span>Koleksiyonu Keşfet</span>
                    <ArrowRight className="w-4 h-4 text-bronze" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 2. DIRECTORY & SEARCH SECTION */}
        <div id="tum-urunler" className="pt-8 border-t border-border space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="editorial-tag">
              <Layers className="w-3.5 h-3.5 text-bronze" />
              Tüm Ürün Kataloğu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Modellere Göre Hızlı Arama & Filtreleme
            </h2>
          </div>

          {/* Search and Filters Bar */}
          <div className="dgaraj-card p-5 sm:p-6 space-y-4">
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
                <Layers className="w-3.5 h-3.5" /> Filtrele:
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
          <div className="flex items-center justify-between text-xs text-muted-foreground">
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
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
        </div>

        {/* Product Detail Modal */}
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      </div>
    </div>
  );
}
