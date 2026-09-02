"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenModal?: (product: Product) => void;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/905053801350?text=${encodeURIComponent(
    `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini beğendim. Fiyatı ve stok durumu hakkında bilgi alabilir miyim?`
  )}`;

  return (
    <div className="dgaraj-card overflow-hidden group flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:border-bronze/50 relative">
      {/* Clickable Card Link for Entire Product (Trendyol style) */}
      <Link
        href={`/urun/${product.slug}`}
        className="flex-1 flex flex-col justify-between"
        title={`${product.name} - Ürün Detayı`}
      >
        {/* Image Area */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-surface-subtle">
          <Image
            src={product.image}
            alt={`${product.name} - Kahramanmaraş Hilal Avize`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />

          {/* Custom badge */}
          {product.badge && (
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold bg-primary text-primary-foreground border border-border shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
          <div>
            <div className="text-[10px] sm:text-[11px] text-bronze font-semibold mb-1 uppercase tracking-wider">
              <span>{product.categoryName}</span>
            </div>

            <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground group-hover:text-bronze transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* WhatsApp Price Button */}
      <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:opacity-95"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Fiyat Sor</span>
        </a>
      </div>
    </div>
  );
}
