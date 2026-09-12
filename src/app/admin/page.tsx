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
  ChevronRight,
  Lightbulb,
  Ruler,
  Tag,
  Edit3,
  Filter,
  ArrowUpDown,
  RotateCcw,
  Loader2,
} from "lucide-react";

function formatPrice(val: number | string | undefined | null): string {
  if (val === undefined || val === null || val === "") return "";
  if (typeof val === "number") {
    return new Intl.NumberFormat("tr-TR").format(val) + " ₺";
  }
  const cleanStr = String(val).trim();
  const numericOnly = parseFloat(cleanStr.replace(/[^0-9.-]+/g, ""));
  if (!isNaN(numericOnly) && numericOnly > 0 && !cleanStr.includes("₺")) {
    return new Intl.NumberFormat("tr-TR").format(numericOnly) + " ₺";
  }
  return cleanStr;
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [prices, setPrices] = useState<Record<string, string | number>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<"all" | "priced" | "unpriced">("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "code-asc">("default");

  // In-line price edit state
  const [editingPriceCode, setEditingPriceCode] = useState<string | null>(null);
  const [priceInputValue, setPriceInputValue] = useState<string>("");
  const [savingCode, setSavingCode] = useState<string | null>(null);
  const [savedFeedbackCode, setSavedFeedbackCode] = useState<string | null>(null);

  // Copy code feedback
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  // Image preview modal
  const [activePreviewImage, setActivePreviewImage] = useState<{ url: string; title: string } | null>(null);

  // 1. Fetch products & prices on mount
  useEffect(() => {
    // Ürünleri çek
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {});

    // Fiyatları çek (Sadece admin paneli erişebilir)
    fetch("/api/admin/prices")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.prices) {
          setPrices(data.prices);
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

  const startEditingPrice = (code: string, currentVal: string | number | undefined) => {
    setEditingPriceCode(code);
    setPriceInputValue(currentVal !== undefined && currentVal !== null ? String(currentVal) : "");
  };

  const cancelEditingPrice = () => {
    setEditingPriceCode(null);
    setPriceInputValue("");
  };

  const savePrice = async (code: string) => {
    setSavingCode(code);
    try {
      const res = await fetch("/api/admin/prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, price: priceInputValue.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setPrices((prev) => {
          const next = { ...prev };
          if (data.price !== null && data.price !== undefined) {
            next[code] = data.price;
          } else {
            delete next[code];
          }
          return next;
        });
        setSavedFeedbackCode(code);
        setTimeout(() => setSavedFeedbackCode(null), 2000);
      }
    } catch (err) {
      console.error("Fiyat kaydedilemedi:", err);
    } finally {
      setSavingCode(null);
      setEditingPriceCode(null);
    }
  };

  // Subcategory list for currently selected category
  const availableSubcategories = useMemo(() => {
    if (selectedCategory === "all") return [];
    const subs = new Set<string>();
    products
      .filter((p) => p.categorySlug === selectedCategory && p.subcategory)
      .forEach((p) => subs.add(p.subcategory!));
    return Array.from(subs);
  }, [products, selectedCategory]);

  // Counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    for (const p of products) {
      counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1;
    }
    return counts;
  }, [products]);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const qClean = q.replace(/[^a-z0-9]/g, "");

    let result = products.filter((item) => {
      // 1. Kategori Filtresi
      if (selectedCategory !== "all" && item.categorySlug !== selectedCategory) {
        return false;
      }

      // 2. Alt Kategori Filtresi
      if (selectedSubcategory !== "all" && item.subcategory !== selectedSubcategory) {
        return false;
      }

      // 3. Fiyat Filtresi
      const hasPrice = prices[item.code] !== undefined && prices[item.code] !== null && String(prices[item.code]).trim() !== "";
      if (priceFilter === "priced" && !hasPrice) return false;
      if (priceFilter === "unpriced" && hasPrice) return false;

      // 4. Arama Sorgusu
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

    // Sıralama
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => {
        const pA = parseFloat(String(prices[a.code] || "0").replace(/[^0-9.-]+/g, "")) || 0;
        const pB = parseFloat(String(prices[b.code] || "0").replace(/[^0-9.-]+/g, "")) || 0;
        return pA - pB;
      });
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => {
        const pA = parseFloat(String(prices[a.code] || "0").replace(/[^0-9.-]+/g, "")) || 0;
        const pB = parseFloat(String(prices[b.code] || "0").replace(/[^0-9.-]+/g, "")) || 0;
        return pB - pA;
      });
    } else if (sortBy === "code-asc") {
      result = [...result].sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }));
    }

    return result;
  }, [products, prices, searchQuery, selectedCategory, selectedSubcategory, priceFilter, sortBy]);

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedSubcategory("all");
    setPriceFilter("all");
    setSortBy("default");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "all" ||
    selectedSubcategory !== "all" ||
    priceFilter !== "all" ||
    sortBy !== "default";

  return (
    <div className="min-h-screen bg-[#0F0E0D] text-zinc-100 flex flex-col font-sans">
      {/* 1. TOP NAVBAR: Logo far left, Search exact center, Store link on far right */}
      <header className="sticky top-0 z-50 w-full bg-[#161513]/95 backdrop-blur-md border-b border-zinc-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Sol Köşe: Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Avize"
                width={935}
                height={267}
                className="h-9 sm:h-11 w-auto object-contain filter brightness-110"
                priority
              />
            </Link>
          </div>

          {/* Tam Orta: Ürün Arama Kısmı */}
          <div className="flex-1 max-w-xl mx-auto px-2 sm:px-6">
            <div className="relative group w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-amber-400/80 group-focus-within:text-amber-400 transition-colors" />
              </div>

              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ürün kodu veya isimle arayın... (Örn: HL-LED-001, Maria Theresa, 700)"
                className="w-full bg-[#201E1C] hover:bg-[#252320] focus:bg-[#272522] border border-zinc-700 focus:border-amber-500/80 rounded-xl pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner font-mono"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white transition-colors"
                  title="Aramayı Temizle"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Sağ Köşe: Mağazaya Git */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors shadow-sm"
              title="Siteyi Gör"
            >
              <Store className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Mağazayı Gör</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. BODY LAYOUT: Left Vertical Filter Sidebar + Right Products Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* SOL DİKEY FİLTRELEME SİDEBARI */}
        <aside className="w-full lg:w-72 shrink-0 bg-[#161513] border border-zinc-800 rounded-2xl p-5 space-y-6 lg:sticky lg:top-28 shadow-xl">
          {/* Başlık ve Filtre Sıfırla */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
              <Filter className="w-4 h-4 text-amber-400" />
              <span>Ürün Filtreleme</span>
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                title="Tüm Filtreleri Temizle"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Temizle</span>
              </button>
            )}
          </div>

          {/* DİKEY KATEGORİ LİSTESİ */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-amber-400" />
              <span>Kategoriler</span>
            </div>

            <div className="space-y-1">
              {/* Tümü */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubcategory("all");
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-amber-400 text-black font-bold shadow-md"
                    : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                }`}
              >
                <span>Tüm Kategoriler</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    selectedCategory === "all"
                      ? "bg-black/20 text-black"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {categoryCounts.all || 0}
                </span>
              </button>

              {/* Tek Tek Kategoriler */}
              {CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.slug] || 0;
                const isSelected = selectedCategory === cat.slug;

                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setSelectedSubcategory("all");
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                      isSelected
                        ? "bg-amber-400 text-black font-bold shadow-md"
                        : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                    }`}
                  >
                    <span className="truncate pr-2">{cat.name}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold shrink-0 ${
                        isSelected
                          ? "bg-black/20 text-black"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ALT KATEGORİLER (Varsa) */}
          {availableSubcategories.length > 0 && (
            <div className="space-y-2 pt-3 border-t border-zinc-800/80">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Alt Koleksiyonlar
              </div>
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setSelectedSubcategory("all")}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedSubcategory === "all"
                      ? "bg-zinc-800 text-amber-300 font-bold border border-amber-500/30"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  • Tümü
                </button>
                {availableSubcategories.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedSubcategory === sub
                        ? "bg-zinc-800 text-amber-300 font-bold border border-amber-500/30"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    • {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FİYAT DURUMU FİLTRESİ */}
          <div className="space-y-2 pt-3 border-t border-zinc-800/80">
            <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-3 h-3 text-amber-400" />
              <span>Fiyat Durumu</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {[
                { id: "all", label: "Tüm Ürünler" },
                { id: "priced", label: "Fiyatı Girilmiş Olanlar", dot: "bg-emerald-400" },
                { id: "unpriced", label: "Fiyatı Belirtilmemiş Olanlar", dot: "bg-zinc-600" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPriceFilter(opt.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-left transition-colors ${
                    priceFilter === opt.id
                      ? "bg-zinc-800 text-white font-bold border border-amber-500/40"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {opt.dot && <span className={`w-2 h-2 rounded-full ${opt.dot} shrink-0`} />}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SIRALAMA SEÇENEKLERİ */}
          <div className="space-y-2 pt-3 border-t border-zinc-800/80">
            <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <ArrowUpDown className="w-3 h-3 text-amber-400" />
              <span>Sıralama</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-[#201E1C] border border-zinc-700 text-xs text-zinc-200 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500"
            >
              <option value="default">Varsayılan Sıralama</option>
              <option value="price-asc">Fiyata Göre (Artan)</option>
              <option value="price-desc">Fiyata Göre (Azalan)</option>
              <option value="code-asc">Ürün Koduna Göre (A-Z)</option>
            </select>
          </div>
        </aside>

        {/* SAĞ ÜRÜN LİSTELEME ALANI */}
        <main className="flex-1 w-full min-w-0 space-y-6">
          {/* Durum & Sonuç Sayacı Çubuğu */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#161513] border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-md">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Package className="w-4 h-4 text-amber-400" />
              <span>
                {searchQuery ? (
                  <>
                    <strong className="text-white font-mono">&quot;{searchQuery}&quot;</strong> araması için{" "}
                    <strong className="text-amber-400 font-bold">{filteredProducts.length}</strong> ürün listeleniyor
                  </>
                ) : (
                  <>
                    Toplam <strong className="text-white font-bold">{filteredProducts.length}</strong> ürün listeleniyor
                  </>
                )}
              </span>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 self-start sm:self-auto"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Filtreleri Sıfırla</span>
              </button>
            )}
          </div>

          {/* Ürün Kartları Grid'i */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => {
                const currentPrice = prices[product.code];
                const isEditing = editingPriceCode === product.code;
                const isSaving = savingCode === product.code;
                const isSaved = savedFeedbackCode === product.code;

                return (
                  <div
                    key={product.id}
                    className="group bg-[#161513] hover:bg-[#1A1816] border border-zinc-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
                  >
                    {/* Üst Kısım: Fotoğraf */}
                    <div
                      className="relative aspect-square w-full bg-black overflow-hidden cursor-pointer"
                      onClick={() =>
                        setActivePreviewImage({
                          url: product.image,
                          title: product.name !== product.code ? `${product.name} (${product.code})` : product.code,
                        })
                      }
                    >
                      <Image
                        src={product.image}
                        alt={product.name || product.code}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                      {/* Kategori Etiketi */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs border border-zinc-700 text-zinc-300">
                          {product.categoryName}
                        </span>
                      </div>
                    </div>

                    {/* Bilgi Kartı */}
                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Alt Kategori */}
                        {product.subcategory && (
                          <div className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
                            {product.subcategory}
                          </div>
                        )}

                        {/* Ürün Kodu & İsim & Kopyala */}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h2 className="text-lg font-black text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                              {product.code}
                            </h2>
                            {product.name && product.name !== product.code && (
                              <div className="text-xs font-bold text-amber-300/95 mt-0.5">
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
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors shrink-0"
                            title="Ürün Kodunu Kopyala"
                          >
                            {copiedCode === product.code ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Teknik Özellikler (Boyut / Aydınlatma) */}
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

                        {/* FİYAT BÖLÜMÜ (Sadece Admin Sayfasında) */}
                        <div className="mt-3 pt-3 border-t border-zinc-800/80">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                              <Tag className="w-3.5 h-3.5 text-amber-400" />
                              <span>Fiyat:</span>
                            </span>

                            {!isEditing ? (
                              <div className="flex items-center gap-2">
                                <span
                                  className={`font-mono font-bold text-sm ${
                                    currentPrice !== undefined && currentPrice !== null && String(currentPrice).trim() !== ""
                                      ? "text-emerald-400 font-extrabold"
                                      : "text-zinc-500 italic text-xs"
                                  }`}
                                >
                                  {formatPrice(currentPrice) || "Fiyat Belirtilmedi"}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => startEditingPrice(product.code, currentPrice)}
                                  className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 hover:border-amber-500/60 transition-colors"
                                  title="Fiyatı Düzenle"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 w-full mt-1">
                                <div className="relative flex-1">
                                  <input
                                    type="text"
                                    autoFocus
                                    value={priceInputValue}
                                    onChange={(e) => setPriceInputValue(e.target.value)}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") savePrice(product.code);
                                      if (e.key === "Escape") cancelEditingPrice();
                                    }}
                                    placeholder="Örn: 15.000 ₺"
                                    className="w-full bg-[#1c1a18] border border-amber-500 rounded-lg px-2.5 py-1 text-xs text-white font-mono focus:outline-none focus:ring-1 focus:ring-amber-400"
                                  />
                                </div>
                                <button
                                  type="button"
                                  disabled={isSaving}
                                  onClick={() => savePrice(product.code)}
                                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors disabled:opacity-50"
                                  title="Kaydet"
                                >
                                  {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                                </button>
                                <button
                                  type="button"
                                  onClick={cancelEditingPrice}
                                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white text-xs transition-colors"
                                  title="İptal"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Kaydedildi Geri Bildirimi */}
                          {isSaved && (
                            <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-end gap-1 mt-1">
                              <Check className="w-3 h-3" />
                              <span>Fiyat güncellendi</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Kart Altı: Sitedeki Ürün Detayına Git */}
                      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2 mt-2">
                        <Link
                          href={`/urun/${product.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-amber-400 transition-colors"
                        >
                          <span>Sitede İncele</span>
                          <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <span className="text-[10px] font-mono text-zinc-600">
                          ID: {product.id}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#161513] border border-zinc-800 rounded-2xl p-12 text-center space-y-4">
              <Package className="w-12 h-12 text-zinc-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Eşleşen Ürün Bulunamadı</h3>
                <p className="text-xs text-zinc-400">
                  Arama kriterlerinizi veya filtrelerinizi değiştirerek tekrar deneyebilirsiniz.
                </p>
              </div>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 text-xs font-bold transition-all inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Filtreleri Temizle</span>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* 3. LIGHTBOX PREVIEW MODAL */}
      {activePreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActivePreviewImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePreviewImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              title="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={activePreviewImage.url}
                alt={activePreviewImage.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white font-mono font-bold text-sm sm:text-base mt-3 bg-black/80 px-4 py-1.5 rounded-full border border-zinc-700">
              {activePreviewImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
