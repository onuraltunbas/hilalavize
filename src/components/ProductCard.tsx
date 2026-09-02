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
    <div className="dgaraj-card overflow-hidden group flex flex-col justify-between">
      {/* Image Area */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-surface-subtle">
        <Image
          src={product.image}
          alt={`${product.name} - Kahramanmaraş Hilal Avize`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />

        {/* Custom badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-primary text-primary-foreground border border-border shadow-sm">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-[11px] text-bronze font-semibold mb-1.5 uppercase tracking-wider">
            <span>{product.categoryName}</span>
            <span className="text-muted-foreground font-normal lowercase">
              {product.branch === "showroom" ? "showroom" : "elektrik"}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-bronze transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Specs snippet */}
        <div className="space-y-1.5 pt-3 border-t border-border text-xs text-muted-foreground">
          {product.dimensions && product.dimensions.toLowerCase() !== "nope" && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-bronze" /> Ölçü:
              </span>
              <span className="text-foreground font-medium truncate max-w-[170px]" title={product.dimensions}>
                {product.dimensions}
              </span>
            </div>
          )}

          {product.lightingType && product.lightingType.toLowerCase() !== "nope" && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-bronze" /> Işık / Duy:
              </span>
              <span className="text-foreground font-medium truncate max-w-[170px]" title={product.lightingType}>
                {product.lightingType}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-1 border-t border-border/60 text-[11px]">
            <span>Kod:</span>
            <span className="font-mono text-muted-foreground">
              {product.code || product.id}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 grid grid-cols-2 gap-2">
          {onOpenModal ? (
            <button
              onClick={() => onOpenModal(product)}
              className="bg-surface-subtle hover:bg-border text-foreground font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors border border-border"
            >
              <Eye className="w-3.5 h-3.5 text-bronze" />
              Detay Gör
            </button>
          ) : (
            <Link
              href={`/urun/${product.slug}`}
              className="bg-surface-subtle hover:bg-border text-foreground font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors border border-border"
            >
              <Eye className="w-3.5 h-3.5 text-bronze" />
              Detay Gör
            </Link>
          )}

          <a
            href={`https://wa.me/905053801350?text=${encodeURIComponent(
              `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini beğendim. Fiyatı ve stok durumu hakkında bilgi alabilir miyim?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Fiyat Sor
          </a>
        </div>
      </div>
    </div>
  );
}
