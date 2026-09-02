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
  Sun,
  Moon,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDarkMode;
    setIsDarkMode(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

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
          <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/hilal_logo.png"
                alt="Hilal Elektrik Avize Aksesuar Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground group-hover:text-bronze transition-colors">
                HİLAL AVİZE
              </span>
              <span className="text-[11px] text-muted-foreground font-medium tracking-wide">
                Kahramanmaraş Showroom & Tesisat
              </span>
            </div>
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

          {/* Desktop Right Actions: Theme Toggle & Direct Contact */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border text-foreground/70 hover:text-foreground hover:bg-surface-subtle transition-colors"
              title={isDarkMode ? "Açık Temaya Geç" : "Koyu Temaya Geç"}
              aria-label="Tema Değiştir"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border text-foreground/70 hover:bg-surface-subtle transition-colors"
              aria-label="Tema Değiştir"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}`}
              className="p-2 rounded-xl bg-[#059669] text-white text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-border text-foreground hover:bg-surface-subtle transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-border px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-border">
              <div className="p-3 rounded-xl bg-surface-subtle border border-border">
                <div className="text-[11px] font-bold text-bronze flex items-center gap-1 mb-1">
                  <Store className="w-3.5 h-3.5" /> Avize Showroom
                </div>
                <div className="text-[10px] text-muted-foreground">Lütfiye & Çiğdem Hanım</div>
                <a
                  href={`tel:${showroom.contacts[0].phone}`}
                  className="text-xs text-foreground font-semibold block mt-1 hover:text-bronze"
                >
                  {showroom.contacts[0].phoneFormatted}
                </a>
              </div>
              <div className="p-3 rounded-xl bg-surface-subtle border border-border">
                <div className="text-[11px] font-bold text-bronze flex items-center gap-1 mb-1">
                  <Zap className="w-3.5 h-3.5" /> Elektrik Şube
                </div>
                <div className="text-[10px] text-muted-foreground">Murat Bilal</div>
                <a
                  href={`tel:${electrical.contacts[0].phone}`}
                  className="text-xs text-foreground font-semibold block mt-1 hover:text-bronze"
                >
                  {electrical.contacts[0].phoneFormatted}
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
