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
  Zap,
  Store,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center group">
            <Image
              src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
              alt="Hilal Elektrik & Avize"
              width={935}
              height={267}
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
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

          {/* Desktop Right Actions: Theme Toggle */}
          {/* Mobile Menu Button - 3 Clean Lines */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-border text-foreground hover:bg-surface-subtle transition-colors flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <div className="flex flex-col justify-between w-5 h-3.5" aria-hidden="true">
                  <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                  <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                  <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-border px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-border">
              <div className="p-3 rounded-xl bg-surface-subtle border border-border flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-bronze flex items-center gap-1 mb-1">
                    <Store className="w-3.5 h-3.5" /> Avize Showroom
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2">Lütfiye & Çiğdem Hanım</div>
                </div>
                <a
                  href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent("Merhaba, Hilal Avize Showroom ürünleri hakkında bilgi ve teklif almak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#059669] text-white text-[11px] font-bold py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 mt-1 shadow-sm"
                >
                  <MessageCircle className="w-3 h-3" /> WhatsApp
                </a>
              </div>
              <div className="p-3 rounded-xl bg-surface-subtle border border-border flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-bronze flex items-center gap-1 mb-1">
                    <Zap className="w-3.5 h-3.5" /> Elektrik Şube
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2">Murat Bilal</div>
                </div>
                <a
                  href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent("Merhaba, elektrik tesisat ve malzeme konusunda teklif ve bilgi almak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#059669] text-white text-[11px] font-bold py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 mt-1 shadow-sm"
                >
                  <MessageCircle className="w-3 h-3" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 text-sm font-medium">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Anasayfa
              </Link>
              <Link
                href="/koleksiyonlar"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Tüm Koleksiyonlar & Modeller
              </Link>
              <div className="px-3 py-1 text-xs font-bold text-bronze uppercase">Kategoriler</div>
              <div className="grid grid-cols-2 gap-1.5 pl-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/kategori/${cat.slug}`}
                    onClick={handleLinkClick}
                    className="text-xs text-foreground/70 hover:text-bronze py-1 px-2 rounded hover:bg-surface-subtle"
                  >
                    • {cat.shortName}
                  </Link>
                ))}
              </div>
              <Link
                href="/aydinlatma-nedir"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground font-semibold text-bronze"
              >
                💡 Aydınlatma Nedir? (Işık Rehberi)
              </Link>
              <Link
                href="/hizmetler"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Hizmetlerimiz (Danışmanlık, Montaj, Elektrik)
              </Link>
              <Link
                href="/subelerimiz"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Şubelerimiz & İletişim (Yol Tarifi)
              </Link>
              <Link
                href="/hakkimizda"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Hakkımızda
              </Link>
              <Link
                href="/sss"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-surface-subtle text-foreground/80 hover:text-foreground"
              >
                Sıkça Sorulan Sorular (SSS)
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
