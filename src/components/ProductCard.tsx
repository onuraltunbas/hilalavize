"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Sparkles, MessageCircle, Eye, Ruler } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onOpenModal?: (product: Product) => void;
}

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
  return (
    <div className="dgaraj-card overflow-hidden group flex flex-col justify-between h-full">
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
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <span className="px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold bg-primary text-primary-foreground border border-border shadow-sm">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
        <div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-bronze font-semibold mb-1 uppercase tracking-wider">
            <span className="truncate max-w-[100px] sm:max-w-none">{product.categoryName}</span>
            <span className="text-muted-foreground font-normal lowercase text-[9px] sm:text-[10px]">
              {product.branch === "showroom" ? "showroom" : "elektrik"}
            </span>
          </div>

          <h3 className="text-xs sm:text-base font-bold text-foreground group-hover:text-bronze transition-colors leading-snug line-clamp-1 sm:line-clamp-2">
            {product.name}
          </h3>

          <p className="hidden sm:block text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Specs snippet */}
        <div className="space-y-1 pt-2 sm:pt-3 border-t border-border text-[10px] sm:text-xs text-muted-foreground">
          {product.dimensions && product.dimensions.toLowerCase() !== "nope" && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 shrink-0">
                <Ruler className="w-3 h-3 text-bronze" /> <span className="hidden sm:inline">Ölçü:</span>
              </span>
              <span className="text-foreground font-medium truncate max-w-[90px] sm:max-w-[170px]" title={product.dimensions}>
                {product.dimensions}
              </span>
            </div>
          )}

          {product.lightingType && product.lightingType.toLowerCase() !== "nope" && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 shrink-0">
                <Sparkles className="w-3 h-3 text-bronze" /> <span className="hidden sm:inline">Duy/Işık:</span>
              </span>
              <span className="text-foreground font-medium truncate max-w-[90px] sm:max-w-[170px]" title={product.lightingType}>
                {product.lightingType}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-0.5 sm:pt-1 border-t border-border/60 text-[9px] sm:text-[11px]">
            <span>Kod:</span>
            <span className="font-mono text-muted-foreground truncate max-w-[80px] sm:max-w-none">
              {product.code || product.id}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-1 sm:pt-2 grid grid-cols-2 gap-1.5 sm:gap-2">
          {onOpenModal ? (
            <button
              onClick={() => onOpenModal(product)}
              className="bg-surface-subtle hover:bg-border text-foreground font-semibold py-1.5 sm:py-2.5 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors border border-border"
            >
              <Eye className="w-3 h-3 text-bronze shrink-0" />
              <span>İncele</span>
            </button>
          ) : (
            <Link
              href={`/urun/${product.slug}`}
              className="bg-surface-subtle hover:bg-border text-foreground font-semibold py-1.5 sm:py-2.5 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors border border-border"
            >
              <Eye className="w-3 h-3 text-bronze shrink-0" />
              <span>İncele</span>
            </Link>
          )}

          <a
            href={`https://wa.me/905053801350?text=${encodeURIComponent(
              `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini beğendim. Fiyatı ve stok durumu hakkında bilgi alabilir miyim?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-1.5 sm:py-2.5 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors shadow-sm truncate"
          >
            <MessageCircle className="w-3 h-3 shrink-0" />
            <span>Fiyat</span>
          </a>
        </div>
      </div>
    </div>
  );
}
