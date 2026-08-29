"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import {
  X,
  MessageCircle,
  Phone,
  Sparkles,
  Ruler,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B132B] border border-amber-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-white animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-xl text-xs font-bold bg-[#0B132B]/90 text-amber-400 border border-amber-500/40">
                {product.style}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                {product.categoryName}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {product.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Malzeme
                </span>
                <span className="font-semibold text-slate-200">{product.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-amber-400" /> Boyutlar
                </span>
                <span className="font-semibold text-slate-200">{product.dimensions}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Işık / Duy
                </span>
                <span className="font-semibold text-slate-200">{product.lightingType}</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Öne Çıkan Ayrıcalıklar:
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-2">
              <a
                href={`https://wa.me/905053801350?text=${encodeURIComponent(
                  `Merhaba, Hilal Avize'den "${product.name}" hakkında detaylı bilgi ve fiyat almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Fiyat & Bilgi Al
              </a>

              <a
                href="tel:+905053801350"
                className="w-full bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-amber-500/20"
              >
                <Phone className="w-4 h-4" />
                Showroomu Telefonla Ara (0505 380 13 50)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
