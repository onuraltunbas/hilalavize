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
  Sparkles,
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
            ? "bg-[#080D1A]/95 backdrop-blur-md shadow-2xl border-b border-[#F59E0B]/20 py-3"
            : "bg-[#0B132B]/90 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/512x512_hilal_logo.png"
                alt="Hilal Elektrik Avize Aksesuar Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
                HİLAL AVİZE
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                Kahramanmaraş Showroom & Tesisat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname === "/" ? "text-[#F59E0B] font-semibold" : "text-slate-200"
              }`}
            >
              Anasayfa
            </Link>

            <Link
              href="/koleksiyonlar"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname.startsWith("/koleksiyonlar") ? "text-[#F59E0B] font-semibold" : "text-slate-200"
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
                className={`flex items-center gap-1 transition-colors hover:text-[#F59E0B] py-2 ${
                  pathname.startsWith("/kategori") ? "text-[#F59E0B] font-semibold" : "text-slate-200"
                }`}
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              >
                Kategoriler
                <ChevronDown className="w-4 h-4 text-amber-400" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#0F172A] border border-[#F59E0B]/30 rounded-xl shadow-2xl p-3 grid grid-cols-1 gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 px-3 py-1 border-b border-slate-800">
                    Ürün & Dekorasyon Çeşitleri
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/kategori/${cat.slug}`}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-amber-300 hover:bg-slate-800/80 transition-colors text-xs"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                        {cat.itemCount} Model
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/hizmetler"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname.startsWith("/hizmetler") ? "text-[#F59E0B] font-semibold" : "text-slate-200"
              }`}
            >
              Hizmetlerimiz
            </Link>

            <Link
              href="/subelerimiz"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname === "/subelerimiz" || pathname === "/iletisim" ? "text-[#F59E0B] font-semibold" : "text-slate-200"
              }`}
            >
              Şubelerimiz & İletişim
            </Link>

            <Link
              href="/hakkimizda"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname === "/hakkimizda" ? "text-[#F59E0B] font-semibold" : "text-slate-200"
              }`}
            >
              Hakkımızda
            </Link>

            <Link
              href="/sss"
              className={`transition-colors hover:text-[#F59E0B] ${
                pathname === "/sss" ? "text-[#F59E0B] font-semibold" : "text-slate-200"
              }`}
            >
              SSS
            </Link>
          </div>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/randevu"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-2.5 py-2.5 rounded-xl text-xs shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              Ücretsiz Danışmanlık Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}`}
              className="p-2 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B132B] border-b border-[#F59E0B]/30 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20">
                <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mb-1">
                  <Store className="w-3.5 h-3.5" /> Avize Showroom
                </div>
                <div className="text-[10px] text-slate-400">Lütfiye & Çiğdem Hanım</div>
                <a
                  href={`tel:${showroom.contacts[0].phone}`}
                  className="text-xs text-amber-300 font-semibold block mt-1"
                >
                  {showroom.contacts[0].phoneFormatted}
                </a>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20">
                <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1 mb-1">
                  <Zap className="w-3.5 h-3.5" /> Elektrik Şube
                </div>
                <div className="text-[10px] text-slate-400">Murat Bilal</div>
                <a
                  href={`tel:${electrical.contacts[0].phone}`}
                  className="text-xs text-amber-300 font-semibold block mt-1"
                >
                  {electrical.contacts[0].phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-sm font-medium">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Anasayfa
              </Link>
              <Link
                href="/koleksiyonlar"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Tüm Koleksiyonlar & Modeller
              </Link>
              <div className="px-3 py-1 text-xs font-semibold text-amber-400/80 uppercase">Kategoriler</div>
              <div className="grid grid-cols-2 gap-1.5 pl-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/kategori/${cat.slug}`}
                    onClick={handleLinkClick}
                    className="text-xs text-slate-300 hover:text-amber-300 py-1 px-2 rounded hover:bg-slate-800"
                  >
                    • {cat.shortName}
                  </Link>
                ))}
              </div>
              <Link
                href="/hizmetler"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Hizmetlerimiz (Danışmanlık, Montaj, Elektrik)
              </Link>
              <Link
                href="/subelerimiz"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Şubelerimiz & İletişim (Yol Tarifi)
              </Link>
              <Link
                href="/hakkimizda"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Hakkımızda
              </Link>
              <Link
                href="/sss"
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 hover:text-amber-400"
              >
                Sıkça Sorulan Sorular (SSS)
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>

              <Link
                href="/randevu"
                onClick={handleLinkClick}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-4 h-4" />
                Ücretsiz Mekan Aydınlatma Danışmanlığı Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
