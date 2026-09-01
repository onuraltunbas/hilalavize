"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  customBadge?: string;
}

export function ProductGallery({
  images,
  productName,
  customBadge,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const validImages = images && images.length > 0 ? images : ["/images/800x800_klasik_kollu_kristal_avize.jpg"];
  const activeImage = validImages[currentIndex] || validImages[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image Container */}
      <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/30 shadow-2xl group">
        <Image
          src={activeImage}
          alt={`${productName} - Görsel ${currentIndex + 1}`}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Custom Badge */}
        {customBadge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-lg">
              {customBadge}
            </span>
          </div>
        )}

        {/* Multi-photo Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Önceki Görsel"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-500/30 flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg z-10 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Sonraki Görsel"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-500/30 flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-lg z-10 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-4 right-4 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[11px] font-semibold text-amber-400">
              {currentIndex + 1} / {validImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {validImages.length > 1 && (
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${
                currentIndex === idx
                  ? "border-amber-400 scale-105 shadow-md shadow-amber-500/30"
                  : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} küçük görsel ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
