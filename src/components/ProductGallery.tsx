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
      <div className="relative h-80 sm:h-[450px] w-full rounded-lg overflow-hidden bg-surface-subtle border border-border shadow-sm group">
        <Image
          src={activeImage}
          alt={`${productName} - Görsel ${currentIndex + 1}`}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border transition-all ${
                currentIndex === idx
                  ? "border-bronze shadow-sm"
                  : "border-border opacity-60 hover:opacity-100"
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
