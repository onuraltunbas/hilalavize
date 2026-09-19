"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { INSTALLATION_PROJECTS, InstallationProject } from "@/data/aydinlattigimiz-mekanlar";
import {
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

export function MekanlarGallery() {
  const [activeProject, setActiveProject] = useState<InstallationProject | null>(null);
  const [visibleCount, setVisibleCount] = useState(36);

  const displayedProjects = useMemo(() => {
    return INSTALLATION_PROJECTS.slice(0, visibleCount);
  }, [visibleCount]);

  const handleNext = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = INSTALLATION_PROJECTS.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % INSTALLATION_PROJECTS.length;
    setActiveProject(INSTALLATION_PROJECTS[nextIndex]);
  }, [activeProject]);

  const handlePrev = useCallback(() => {
    if (!activeProject) return;
    const currentIndex = INSTALLATION_PROJECTS.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + INSTALLATION_PROJECTS.length) % INSTALLATION_PROJECTS.length;
    setActiveProject(INSTALLATION_PROJECTS[prevIndex]);
  }, [activeProject]);

  // Klavye ok tuşları ve ESC ile kontrol
  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, handleNext, handlePrev]);

  // Modal açıkken arkadaki sayfanın kaymasını engelle
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <div className="space-y-8">

      {/* Projeler Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group dgaraj-card overflow-hidden rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between border border-border/70"
          >
            {/* Fotoğraf Alanı */}
            <div className="relative aspect-[3/4] w-full bg-surface-subtle overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                  <ZoomIn className="w-3.5 h-3.5 text-amber-300" /> Büyüt ve İncele
                </span>
              </div>
            </div>

            {/* Bilgi Alanı */}
            <div className="p-3 bg-surface">
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" />
                <span className="truncate">{project.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Daha Fazla Göster Butonu */}
      {visibleCount < INSTALLATION_PROJECTS.length && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-8 py-3 rounded-lg bg-surface border border-border hover:border-bronze text-foreground text-xs sm:text-sm font-bold shadow-xs hover:bg-surface-subtle transition-all cursor-pointer"
          >
            Daha Fazla
          </button>
        </div>
      )}

      {/* Lightbox Modal - Sadece Görsel */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 select-none"
          onClick={() => setActiveProject(null)}
        >
          {/* Modal Kapatma Butonu */}
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black text-white transition-all backdrop-blur-xs cursor-pointer shadow-lg hover:scale-105 border border-white/20"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Önceki Buton */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black text-white transition-all backdrop-blur-xs cursor-pointer shadow-lg hover:scale-105 border border-white/20"
            aria-label="Önceki Görsel"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Sonraki Buton */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-black text-white transition-all backdrop-blur-xs cursor-pointer shadow-lg hover:scale-105 border border-white/20"
            aria-label="Sonraki Görsel"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Büyük Görsel Alanı */}
          <div
            className="relative w-full max-w-5xl h-[80vh] sm:h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeProject.src}
              alt={activeProject.title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 1200px) 95vw, 1200px"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
