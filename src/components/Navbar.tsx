"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import {
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Zap,
  Store,
  Home,
  Layers,
  Sparkles,
  Award,
  MapPin,
  HelpCircle,
  Info,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  }, [pathname]);

  // Lock document body scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border py-3.5"
            : "bg-background/80 backdrop-blur-sm border-b border-border/60 py-4.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between relative">
          {/* Mobile Left Spacer (Balances hamburger menu button to dead-center the logo) */}
          <div className="w-10 lg:hidden" aria-hidden="true" />

          {/* Desktop Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-wide">
            <Link
              href="/"
              className={`transition-colors hover:text-bronze ${
                pathname === "/" ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Anasayfa
            </Link>

            <Link
              href="/koleksiyonlar"
              className={`transition-colors hover:text-bronze ${
                pathname.startsWith("/koleksiyonlar") ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Tüm Koleksiyonlar
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors hover:text-bronze py-2 ${
                  pathname.startsWith("/kategori") ? "text-bronze font-semibold" : "text-foreground/80"
                }`}
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Kategoriler
                <ChevronDown className="w-3.5 h-3.5 text-bronze" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-surface border border-border rounded-xl shadow-xl p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-bronze px-3 py-1.5 border-b border-border/60">
                    Aydınlatma & Dekorasyon Kategorileri
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/kategori/${cat.slug}`}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between px-3 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-surface-subtle transition-colors text-xs"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-bronze text-xs font-bold group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/aydinlatma-nedir"
              className={`transition-colors hover:text-bronze ${
                pathname === "/aydinlatma-nedir" ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Aydınlatma Nedir
            </Link>
          </div>

          {/* Centered & Enlarged Logo */}
          <div className="flex-1 lg:flex-initial flex justify-center py-1">
            <Link href="/" onClick={handleLinkClick} className="flex items-center group">
              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Elektrik & Avize"
                width={935}
                height={267}
                className="h-13 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium tracking-wide">
            <Link
              href="/hizmetler"
              className={`transition-colors hover:text-bronze ${
                pathname.startsWith("/hizmetler") ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Hizmetlerimiz
            </Link>

            <Link
              href="/subelerimiz"
              className={`transition-colors hover:text-bronze ${
                pathname === "/subelerimiz" || pathname === "/iletisim" ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Şubelerimiz & İletişim
            </Link>

            <Link
              href="/hakkimizda"
              className={`transition-colors hover:text-bronze ${
                pathname === "/hakkimizda" ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              Hakkımızda
            </Link>

            <Link
              href="/sss"
              className={`transition-colors hover:text-bronze ${
                pathname === "/sss" ? "text-bronze font-semibold" : "text-foreground/80"
              }`}
            >
              SSS
            </Link>
          </div>

          {/* Mobile Menu Button - 3 Clean Lines */}
          <div className="w-10 flex justify-end lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl border border-border text-foreground hover:bg-surface-subtle transition-colors flex items-center justify-center"
              aria-label="Menüyü Aç"
            >
              <div className="flex flex-col justify-between w-5 h-3.5" aria-hidden="true">
                <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Over Drawer Panel */}
      <aside
        className={`fixed top-0 bottom-0 right-0 w-[86%] max-w-sm bg-surface z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden border-l border-border ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobil Gezinme Menüsü"
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="p-4 bg-surface-subtle border-b border-border flex items-center justify-between">
          <Link href="/" onClick={handleLinkClick} className="flex items-center">
            <Image
              src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
              alt="Hilal Elektrik & Avize"
              width={160}
              height={45}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-surface border border-border hover:bg-surface-subtle text-foreground transition-colors"
            aria-label="Menüyü Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* 1. ANA SAYFA BUTONU (En Başta, Vurgulu) */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className={`flex items-center justify-between p-3.5 rounded-xl font-bold text-sm transition-all border ${
              pathname === "/"
                ? "bg-bronze text-white border-bronze shadow-sm"
                : "bg-surface-subtle hover:bg-bronze/10 text-foreground border-border"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-1.5 rounded-lg ${
                  pathname === "/" ? "bg-white/20 text-white" : "bg-bronze/15 text-bronze"
                }`}
              >
                <Home className="w-4 h-4" />
              </div>
              <span>Ana Sayfa</span>
            </div>
            <ChevronRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* Menü Maddeleri */}
          <div className="space-y-1 text-sm font-medium">
            <Link
              href="/koleksiyonlar"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname.startsWith("/koleksiyonlar")
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-bronze" />
                <span>Tüm Koleksiyonlar & Modeller</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            {/* Kategoriler */}
            <div className="pt-2 pb-1">
              <div className="px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-bronze flex items-center gap-1.5">
                <span>Kategoriler</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/kategori/${cat.slug}`}
                    onClick={handleLinkClick}
                    className="text-xs text-foreground/75 hover:text-bronze py-2 px-2.5 rounded-lg hover:bg-surface-subtle transition-colors flex items-center justify-between bg-surface-subtle/50 border border-border/50"
                  >
                    <span className="truncate">{cat.shortName}</span>
                    <ChevronRight className="w-3 h-3 text-bronze/60 shrink-0 ml-1" />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/aydinlatma-nedir"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname === "/aydinlatma-nedir"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-bronze font-semibold">Aydınlatma Nedir? (Rehber)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            <Link
              href="/hizmetler"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname.startsWith("/hizmetler")
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-bronze" />
                <span>Hizmetlerimiz</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            <Link
              href="/subelerimiz"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname === "/subelerimiz" || pathname === "/iletisim"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-bronze" />
                <span>Şubelerimiz & İletişim</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            <Link
              href="/hakkimizda"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname === "/hakkimizda"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-bronze" />
                <span>Hakkımızda</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            <Link
              href="/sss"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-subtle ${
                pathname === "/sss"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4 h-4 text-bronze" />
                <span>Sıkça Sorulan Sorular (SSS)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>
          </div>

          {/* Hızlı WhatsApp İletişim (İsimler kaldırıldı, sadece şube butonları) */}
          <div className="pt-2 border-t border-border">
            <div className="text-[11px] font-bold text-muted-foreground mb-2 px-1">Hızlı İletişim:</div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, Hilal Avize Showroom ürünleri hakkında bilgi ve teklif almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] hover:bg-[#047857] text-white text-[11px] font-bold py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Store className="w-3.5 h-3.5" />
                <span>Showroom</span>
              </a>
              <a
                href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, elektrik tesisat ve malzeme konusunda teklif ve bilgi almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] hover:bg-[#047857] text-white text-[11px] font-bold py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Elektrik Şube</span>
              </a>
            </div>
          </div>

          {/* Instagram Butonu (Mat lüks mor kadife, parlaklığı alınmış) */}
          <div className="pt-1">
            <a
              href={COMPANY_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#3d194f] hover:bg-[#52216b] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-purple-500/20 shadow-sm transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
