"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import {
  Search,
  X,
  ExternalLink,
  Copy,
  Check,
  Package,
  Layers,
  Store,
  Eye,
  Sparkles,
  ChevronRight,
  Lightbulb,
  Ruler,
} from "lucide-react";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activePreviewImage, setActivePreviewImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {});
  }, []);

  const handleCopy = (code: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  // Filter products by product code and search term
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const qClean = q.replace(/[^a-z0-9]/g, "");

    return products.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.categorySlug !== selectedCategory) {
        return false;
      }

      // If no query, return based on category filter
      if (!q) return true;

      const codeMatch =
        item.code?.toLowerCase().includes(q) ||
        item.code?.toLowerCase().replace(/[^a-z0-9]/g, "").includes(qClean) ||
        item.id?.toLowerCase().includes(q) ||
        item.id?.toLowerCase().replace(/[^a-z0-9]/g, "").includes(qClean) ||
        item.legacyCode?.toLowerCase().includes(q) ||
        item.legacyCode?.toLowerCase().replace(/[^a-z0-9]/g, "").includes(qClean);

      const nameMatch = item.name?.toLowerCase().includes(q);
      const catMatch = item.categoryName?.toLowerCase().includes(q);
      const subMatch = item.subcategory?.toLowerCase().includes(q);

      return codeMatch || nameMatch || catMatch || subMatch;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#0F0E0D] text-zinc-100 flex flex-col font-sans">
      {/* 1. TOP ADMIN NAVBAR with Prominent Search */}
      <header className="sticky top-0 z-50 w-full bg-[#161513]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand & Admin Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Avize"
                width={935}
                height={267}
                className="h-10 sm:h-12 w-auto object-contain filter brightness-110"
                priority
              />
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Yönetici Paneli</span>
            </div>
          </div>

          {/* Central Prominent Search Bar */}
          <div className="flex-1 max-w-2xl mx-2 sm:mx-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-amber-400/80 group-focus-within:text-amber-400 transition-colors" />
              </div>

              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün kodu yazın... (Örn: HL-LED-001, KLS-002, 700)"
                className="w-full bg-[#201E1C] hover:bg-[#252320] focus:bg-[#272522] border border-zinc-700 focus:border-amber-500/80 rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner font-mono"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white transition-colors"
                  aria-label="Aramayı Temizle"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action: Visit Public Site */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
              title="Siteye Git"
            >
              <Store className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Mağazayı Gör</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </Link>
          </div>
        </div>

        {/* Quick Category Chips Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 border-t border-zinc-800/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
            <Layers className="w-3 h-3 text-amber-400" /> Kategori:
          </span>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-amber-400 text-black shadow-sm"
                : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            Tümü ({products.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.slug
                  ? "bg-amber-400 text-black shadow-sm"
                  : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Status Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#161513] border border-zinc-800 rounded-xl px-5 py-3.5">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Package className="w-4 h-4 text-amber-400" />
            <span>
              {searchQuery ? (
                <>
                  <strong className="text-white font-mono">&quot;{searchQuery}&quot;</strong> araması için{" "}
                  <strong className="text-amber-400 font-bold">{filteredProducts.length}</strong> ürün bulundu
                </>
              ) : (
                <>
                  Toplam <strong className="text-white">{filteredProducts.length}</strong> ürün listeleniyor
                </>
              )}
            </span>
          </div>

          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs text-amber-400 hover:underline self-start sm:self-auto font-semibold"
            >
              Aramayı Sıfırla
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#161513] hover:bg-[#1B1917] border border-zinc-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                {/* Product Image */}
                <div
                  className="relative aspect-square w-full bg-black overflow-hidden cursor-pointer"
                  onClick={() =>
                    setActivePreviewImage({
                      url: product.image,
                      title: product.code,
                    })
                  }
                >
                  <Image
                    src={product.image}
                    alt={product.code}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <Eye className="w-3.5 h-3.5 text-amber-400" /> Büyüt
                    </span>
                    {product.images && product.images.length > 1 && (
                      <span className="text-[11px] font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded-md">
                        {product.images.length} Görsel
                      </span>
                    )}
                  </div>

                  {/* Category Pill on Image */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs border border-zinc-700 text-zinc-300">
                      {product.categoryName}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Subcategory if present */}
                    {product.subcategory && (
                      <div className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
                        {product.subcategory}
                      </div>
                    )}

                    {/* Product Code Header with Copy Button */}
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h2 className="text-lg font-black text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                          {product.code}
                        </h2>
                        {product.name && product.name !== product.code && (
                          <div className="text-xs font-semibold text-amber-300/90 mt-0.5">
                            {product.name}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(product.code);
                        }}
                        className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                        title="Kodu Kopyala"
                      >
                        {copiedCode === product.code ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Specs / Details */}
                    <div className="mt-3 space-y-1.5 text-xs text-zinc-400 border-t border-zinc-800/80 pt-2.5">
                      {product.dimensions && product.dimensions !== "nope" && (
                        <div className="flex items-start gap-1.5">
                          <Ruler className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 text-[11px] text-zinc-300">{product.dimensions}</span>
                        </div>
                      )}
                      {product.lightingType && product.lightingType !== "nope" && (
                        <div className="flex items-start gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 text-[11px] text-zinc-300">{product.lightingType}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                    <Link
                      href={`/urun/${product.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-amber-400 transition-colors"
                    >
                      <span>Sitede İncele</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[10px] font-mono text-zinc-500">
                      ID: {product.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-[#161513] border border-zinc-800 rounded-2xl p-8 space-y-4 max-w-lg mx-auto shadow-xl">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-500">
              <Search className="w-6 h-6 text-zinc-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Ürün Bulunamadı</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <span className="font-mono text-amber-400">&quot;{searchQuery}&quot;</span> koduna ait herhangi bir kayıt bulunamadı. Lütfen ürün kodunu veya arama kriterini kontrol edin.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-colors"
            >
              Tüm Ürünleri Göster
            </button>
          </div>
        )}
      </main>

      {/* Lightbox Image Preview Modal */}
      {activePreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] bg-[#161513] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-sm font-bold text-white font-mono">
                {activePreviewImage.title}
              </span>
              <button
                onClick={() => setActivePreviewImage(null)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex-1 min-h-[400px] sm:min-h-[550px] bg-black">
              <Image
                src={activePreviewImage.url}
                alt={activePreviewImage.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
