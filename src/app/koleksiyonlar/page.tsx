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
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Seçkin Aydınlatma & Dekorasyon Vitrini
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hilal Avize Tüm Koleksiyonlar
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Kahramanmaraş Showroomumuzda sergilenen lüks saray tipi kristal avizeler, modern LED sarkıtlar, aynalar, saatler, cam sanat eserleri ve lüks anahtar-prizler.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-[#0F172A] p-6 rounded-3xl border border-amber-500/25 mb-10 shadow-xl space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Ürün adı, kristal, pirinç, mermer veya ölçü ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Categories Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800 pt-3">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1 shrink-0 mr-2">
              <Layers className="w-3.5 h-3.5" /> Kategori:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200"
              }`}
            >
              Hepsi ({productsList.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
        <span>
          Toplam <strong className="text-amber-400">{filteredProducts.length}</strong> model listeleniyor
        </span>
        {(selectedCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-amber-400 hover:underline font-medium"
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
          <div className="text-center py-16 bg-[#0F172A] rounded-3xl border border-slate-800 space-y-3">
            <p className="text-slate-300 font-semibold">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <p className="text-xs text-slate-500">
              Farklı bir arama terimi deneyebilir veya showroomumuzdaki tüm modelleri görmek için bizimle iletişime geçebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-2 bg-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-bold"
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
