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
    <div className="bg-[#0F172A] rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between shadow-xl">
      {/* Image Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <Image
          src={product.image}
          alt={`${product.name} - Kahramanmaraş Hilal Avize`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />

        {/* Style Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-[#0B132B]/90 text-amber-400 border border-amber-500/40 backdrop-blur-md">
            {product.style}
          </span>
        </div>

        {/* Custom badge */}
        {product.badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-amber-500 text-slate-950 shadow-md">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <div className="flex items-center justify-between text-[11px] text-amber-400 font-medium mb-2">
            <span>{product.categoryName}</span>
            <span className="text-slate-400">
              {product.branch === "showroom" ? "Showroom" : "Elektrik Şube"}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-sm text-slate-300 mt-3 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Specs snippet */}
        <div className="space-y-2 pt-4 border-t border-slate-800 text-sm text-slate-400">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500/70" /> Malzeme:
            </span>
            <span className="text-slate-200 font-medium truncate max-w-[170px]">
              {product.material}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4 text-amber-500/70" /> Ölçü:
            </span>
            <span className="text-slate-200 font-medium truncate max-w-[170px]">
              {product.dimensions}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 grid grid-cols-2 gap-3">
          {onOpenModal ? (
            <button
              onClick={() => onOpenModal(product)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              Detay Gör
            </button>
          ) : (
            <Link
              href={`/urun/${product.slug}`}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              Detay Gör
            </Link>
          )}

          <a
            href={`https://wa.me/905053801350?text=${encodeURIComponent(
              `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini beğendim. Fiyatı ve stok durumu hakkında bilgi alabilir miyim?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Fiyat Sor
          </a>
        </div>
      </div>
    </div>
  );
}
