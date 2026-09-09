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
    <div className="space-y-3">
      {/* Main Image Container */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-surface-subtle border border-border shadow-sm group flex items-center justify-center p-3 sm:p-6 min-h-[300px]">
        <Image
          src={activeImage}
          alt={`${productName} - Görsel ${currentIndex + 1}`}
          width={1200}
          height={1200}
          priority
          unoptimized
          className="w-full h-auto max-h-[600px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Custom Badge */}
        {customBadge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1 rounded-md text-[11px] font-bold bg-primary text-primary-foreground border border-border shadow-sm">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-surface/80 hover:bg-primary hover:text-primary-foreground text-foreground border border-border flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-sm z-10 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Sonraki Görsel"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-surface/80 hover:bg-primary hover:text-primary-foreground text-foreground border border-border flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-sm z-10 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-3 right-3 z-10 bg-surface/90 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-border text-[10px] font-semibold text-foreground">
              {currentIndex + 1} / {validImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {validImages.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border p-1 bg-surface-subtle flex items-center justify-center transition-all ${
                currentIndex === idx
                  ? "border-bronze shadow-sm ring-1 ring-bronze"
                  : "border-border opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} küçük görsel ${idx + 1}`}
                width={64}
                height={64}
                unoptimized
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
