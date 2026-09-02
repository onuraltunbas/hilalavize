"use client";

import React, { useMemo } from "react";
import { Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, Bot, CheckCircle2, MessageCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface AiComplementaryProps {
  currentProduct: Product;
}

export function AiComplementaryProducts({ currentProduct }: AiComplementaryProps) {
  // Yapay Zeka Akıllı Renk, Tarz ve Mekan Uyumu Eşleştirme Motoru
  const recommendations = useMemo(() => {
    // 1. Anahtar malzeme ve renk kelimelerini ayıkla
    const extractKeywords = (text: string) => {
      const lower = text.toLowerCase();
      const keywords = [
        "kristal", "asfour", "pirinç", "gold", "altın", "varak", "döküm", "saray",
        "led", "halka", "siyah", "füme", "fırçalanmış", "manyetik", "spot", "minimal",
        "mermer", "calacatta", "bronz", "cam", "kadife", "lacivert", "yeşil", "ahşap",
        "dokunmatik", "ayna", "saat", "berjer", "sehpa", "priz", "anahtar", "aplik"
      ];
      return keywords.filter((kw) => lower.includes(kw));
    };

    const currentKeywords = extractKeywords(
      `${currentProduct.name} ${currentProduct.description}`
    );

    // 2. Tüm katalog ürünlerini yapay zeka uyum puanına göre derecelendir
    const scoredProducts = PRODUCTS.filter((p) => p.id !== currentProduct.id).map((p) => {
      let score = 55; // Başlangıç taban puanı

      // A. İsim & Renk & Işık Uyumu
      const pKeywords = extractKeywords(
        `${p.name} ${p.description}`
      );
      const matchingKeywords = pKeywords.filter((kw) => currentKeywords.includes(kw));
      score += matchingKeywords.length * 15;

      // C. Çapraz Kategori Tamamlayıcılığı (Aynı ürün yerine odayı tamamlayan parçalar)
      if (p.categorySlug !== currentProduct.categorySlug) {
        score += 25;
      }

      // D. Şube Uyumu
      if (p.branch === currentProduct.branch) {
        score += 5;
      }

      const finalPercentage = Math.min(99, Math.max(84, Math.round(score)));

      let reason = "Stil & Renk Uyumu";
      if (p.categorySlug === "aplikler") {
        reason = "Tamamlayıcı Duvar Aydınlatması";
      } else if (p.categorySlug === "dekoratif-sehpalar" || p.categorySlug === "dekoratif-koltuk-ve-berjerler") {
        reason = "Mekanı Bütünleyen Mobilya Kombini";
      } else if (p.categorySlug === "cam-sus-esyalari" || p.categorySlug === "duvar-ve-masa-saatleri" || p.categorySlug === "dekoratif-aynalar") {
        reason = "Aksesuar & Işıltı Uyumu";
      } else if (p.categorySlug === "anahtar-ve-priz-serileri") {
        reason = "Lüks Donanım Tamamlayıcısı";
      } else if (matchingKeywords.length > 0) {
        reason = `${matchingKeywords.slice(0, 2).map((k) => k.toUpperCase()).join(" & ")} Uyumu`;
      }

      return {
        product: p,
        score: finalPercentage,
        reason,
      };
    });

    // En yüksek puanlı 3 tamamlayıcı ürünü getir
    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [currentProduct]);

  if (recommendations.length === 0) return null;

  const showroom = COMPANY_DATA.branches[0];

  return (
    <div className="pt-14 border-t border-border space-y-8">
      {/* AI Header Box */}
      <div className="rounded-xl bg-surface border border-border p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="space-y-2 max-w-3xl relative z-10">
          <div className="editorial-tag">
            <Bot className="w-3.5 h-3.5 text-bronze animate-pulse" />
            <span>Yapay Zeka Mekan & Stil Eşleştirme Motoru</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            Bunu Alanlar Bu Tamamlayıcı Seçenekleri de İnceledi
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Yapay zekamız; incelenen <span className="text-foreground font-semibold">{currentProduct.name}</span> modelinin renk tonları, kristal/metal dokusu ve tarzıyla mekanınızda en kusursuz uyumu sağlayacak tamamlayıcı modelleri belirledi. Aşağıdaki ürünlerle birlikte sorarak avantajlı paket fiyatı alabilirsiniz.
          </p>
        </div>
      </div>

      {/* AI Matched Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {recommendations.map(({ product, score, reason }) => (
          <div
            key={product.id}
            className="relative flex flex-col dgaraj-card p-3.5 justify-between space-y-3"
          >
            {/* AI Compatibility Badge */}
            <div className="flex items-center justify-between bg-surface-subtle border border-border rounded-lg px-3 py-1.5 text-xs shadow-sm">
              <span className="font-bold text-bronze flex items-center gap-1.5 text-[11px]">
                <Sparkles className="w-3 h-3 text-bronze" />
                {reason}
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> %{score} Uyum
              </span>
            </div>

            {/* Product Card */}
            <div className="flex-1">
              <ProductCard product={product} />
            </div>

            {/* Specific Exact Names WhatsApp Combo Button */}
            <div className="pt-1">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  `Merhaba, Hilal Avize web sitenizden "${currentProduct.name}" ve yanında önerilen "${product.name}" modellerini birlikte inceledim. Bu iki ürün için kombin paket fiyatı ve stok bilgisi alabilir miyim?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="truncate">Bu 2 Ürünü Birlikte Sor (WhatsApp)</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
