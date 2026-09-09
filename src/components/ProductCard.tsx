"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onOpenModal?: (product: Product) => void;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/urun/${product.slug}`}
      className="dgaraj-card overflow-hidden group flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:border-bronze/50 cursor-pointer"
      title={`${product.name} - Ürün Detayı`}
    >
      {/* Image Area */}
      <div className="relative w-full overflow-hidden bg-surface-subtle flex items-center justify-center p-2">
        <Image
          src={product.image}
          alt={`${product.name} - Kahramanmaraş Hilal Avize`}
          width={800}
          height={800}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-30 pointer-events-none" />

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
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
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
  );
}
