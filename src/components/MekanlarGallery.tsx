"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { INSTALLATION_PROJECTS, InstallationProject } from "@/data/aydinlattigimiz-mekanlar";
import {
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "Tüm Projeler (99)" },
  { key: "salon", label: "Salon ve Oturma Alanı" },
  { key: "yemek-odasi", label: "Yemek Masası ve Ada" },
  { key: "villa", label: "Villa ve Yüksek Tavan" },
  { key: "modern-led", label: "Modern LED Modeller" },
  { key: "klasik", label: "Klasik Kristal Modeller" },
];

export function MekanlarGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProject, setActiveProject] = useState<InstallationProject | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return INSTALLATION_PROJECTS;
    return INSTALLATION_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleNext = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[prevIndex]);
  };

  return (
    <div className="space-y-8">
      {/* Kategori Filtre Butonları */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setVisibleCount(24);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-bronze text-white shadow-md scale-105"
                  : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:bg-surface-subtle"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

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
              <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-xs text-[10px] font-extrabold text-foreground px-2 py-0.5 rounded-md border border-border/50 shadow-xs">
                {project.categoryLabel}
              </div>
            </div>

            {/* Bilgi Alanı */}
            <div className="p-3.5 space-y-1 bg-surface">
              <h3 className="text-xs sm:text-sm font-bold text-foreground line-clamp-1 group-hover:text-bronze transition-colors">
                {project.title}
              </h3>
              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3 text-bronze shrink-0" />
                <span>{project.location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Daha Fazla Göster Butonu */}
      {visibleCount < filteredProjects.length && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="px-6 py-3 rounded-xl bg-surface border border-border hover:border-bronze text-foreground text-xs sm:text-sm font-bold shadow-xs hover:bg-surface-subtle transition-all cursor-pointer"
          >
            Daha Fazla Proje Gör ({filteredProjects.length - visibleCount} proje kaldı)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-surface rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Kapatma Butonu */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Büyük Görsel */}
            <div className="relative flex-1 min-h-[350px] md:min-h-[550px] bg-black/95 flex items-center justify-center overflow-hidden">
              <Image
                src={activeProject.src}
                alt={activeProject.title}
                fill
                className="object-contain"
                priority
              />

              {/* Önceki - Sonraki Butonları */}
              <button
                onClick={handlePrev}
                className="absolute left-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Önceki Görsel"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Sonraki Görsel"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Detay ve WhatsApp İletişim Paneli */}
            <div className="w-full md:w-80 p-5 sm:p-6 flex flex-col justify-between space-y-4 bg-surface">
              <div className="space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-bronze">
                  {activeProject.categoryLabel}
                </span>
                <h3 className="text-lg font-black text-foreground leading-snug">
                  {activeProject.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-bronze shrink-0" />
                  <span>{activeProject.location}</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border">
                  {activeProject.description}
                </p>
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hilal Avize Montaj Güvencesi</span>
                  </div>
                  <div className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tavana Özel Güvenli Çelik Dübel</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <a
                  href={`https://wa.me/905053801350?text=${encodeURIComponent(
                    `Merhaba, "Aydınlattığımız Mekanlar" sayfanızdaki "${activeProject.title}" (${activeProject.location}) montajındaki avize modeli hakkında bilgi ve fiyat teklifi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Bu Model Hakkında Bilgi Al
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-full py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  Galeride Gezinmeye Devam Et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
