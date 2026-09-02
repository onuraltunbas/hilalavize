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
      {/* Header Box */}
      <div className="rounded-xl bg-surface border border-border p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="space-y-2 max-w-3xl relative z-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            Bunu Alanlar Bu Tamamlayıcı Seçenekleri de İnceledi
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            İncelenen <span className="text-foreground font-semibold">{currentProduct.name}</span> modelinin renk tonları, kristal/metal dokusu ve tarzıyla mekanınızda en kusursuz uyumu sağlayacak tamamlayıcı modeller. Birlikte sorarak avantajlı teklif alabilirsiniz.
          </p>
        </div>
      </div>

      {/* Matched Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {recommendations.map(({ product, score, reason }) => (
          <div
            key={product.id}
            className="relative flex flex-col dgaraj-card p-3.5 justify-between space-y-3"
          >
            {/* Match Badge */}
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-border">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                %{score} Uyum
              </span>
              <span className="text-muted-foreground truncate max-w-[150px]">{reason}</span>
            </div>

            {/* Product Card */}
            <div className="flex-1">
              <ProductCard product={product} />
            </div>

            {/* Combined Inquiry CTA */}
            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                `Merhaba, Hilal Avize'den "${currentProduct.name}" ve tamamlayıcı model "${product.name}" hakkında birlikte fiyat teklifi almak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Birlikte Teklif Al
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
