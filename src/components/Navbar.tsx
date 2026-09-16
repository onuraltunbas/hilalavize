"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import {
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
  Camera,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer whenever route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
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
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

    const isHome = pathname === "/";
    const isHomeTop = isHome && !isScrolled;

    const getLinkClass = (isActive: boolean) =>
      `px-3 py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-2.5 rounded-xl border-[1.5px] transition-all duration-300 whitespace-nowrap text-[12px] xl:text-[13px] 2xl:text-[14.5px] font-bold ${
        isActive
          ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] shadow-md shadow-[#93826E]/35 font-extrabold -translate-y-0.5"
          : "bg-[#FAF9F6]/85 backdrop-blur-xs border-[#93826E]/30 text-foreground shadow-xs shadow-[#93826E]/15 hover:border-[#93826E] hover:text-foreground hover:bg-[#FAF9F6] hover:shadow-lg hover:shadow-[#93826E]/25 hover:-translate-y-0.5 active:scale-95"
      }`;

    return (
      <header className="sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none">
        {/* =========================================================================
            1. MASAÜSTÜ: SOLIDROAD TARZI YUKARIDAN SARKAN KAVİSLİ & NOTCH NAVBAR
            ========================================================================= */}
        <div className="hidden lg:block w-full relative pointer-events-auto">
          <div className="relative mx-auto w-[94%] max-w-[1260px] 2xl:max-w-[1380px]">
            {/* YAZILIMSAL SVG KAVİS & GRADİENT KATMANI (Fotoğraftaki Solidroad Kulaklı & Ortası Kavisli Şekil) */}
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-[98px] xl:h-[108px] 2xl:h-[116px] pointer-events-none drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 12px 28px rgba(0,0,0,0.38))" }}
            >
              <defs>
                {/* Navbar Renklerine Uygun ve Aşağıya Doğru Kusursuz Siyaha Dönen Gradient */}
                <linearGradient id="sculptedNavGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E6E4E1" stopOpacity="0.88" />
                  <stop offset="35%" stopColor="#D8D4CE" stopOpacity="0.80" />
                  <stop offset="70%" stopColor="#352D26" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0B0A09" stopOpacity="0.98" />
                </linearGradient>

                {/* İnce Lüks Bronz Kontur Parıltısı */}
                <linearGradient id="sculptedStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93826E" stopOpacity="0.55" />
                  <stop offset="40%" stopColor="#93826E" stopOpacity="0.30" />
                  <stop offset="85%" stopColor="#1F1B17" stopOpacity="0.50" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Kusursuz Kavis Yolu: Sol iç kavis (kulak) -> Düz gövde -> Ortada logoya özel kavisli yuva -> Sağ iç kavis (kulak) */}
              <path
                d="M 0,0 C 22,0 36,16 36,36 L 36,74 C 36,88 48,96 64,96 L 460,96 C 515,96 545,120 600,120 C 655,120 685,96 740,96 L 1136,96 C 1152,96 1164,88 1164,74 L 1164,36 C 1164,16 1178,0 1200,0 Z"
                fill="url(#sculptedNavGrad)"
                stroke="url(#sculptedStrokeGrad)"
                strokeWidth="1"
              />
            </svg>

            {/* İKİNCİ FOTODAKİ BUTON VE LOGO DÜZENİ: buton1, buton2, buton3 | LOGO | buton4, buton5, buton6 */}
            <div className="relative z-10 px-8 xl:px-12 pt-2 pb-3.5 xl:pb-4 flex items-center justify-between gap-2 xl:gap-4">
              {/* Sol 3 Buton: buton1, buton2, buton3 */}
              <div className="flex-1 flex items-center justify-end gap-1.5 xl:gap-2.5 2xl:gap-3 font-bold whitespace-nowrap">
                <Link href="/" className={getLinkClass(pathname === "/")}>
                  Anasayfa
                </Link>

                <Link
                  href="/koleksiyonlar"
                  className={getLinkClass(
                    pathname.startsWith("/koleksiyonlar") ||
                      pathname.startsWith("/kategori") ||
                      pathname.startsWith("/urun")
                  )}
                >
                  Tüm Koleksiyonlar
                </Link>

                <Link
                  href="/aydinlatma-nedir"
                  className={getLinkClass(pathname === "/aydinlatma-nedir")}
                >
                  Aydınlatma Nedir
                </Link>
              </div>

              {/* Ortada Logo (Kavisli cebe tam oturan merkez logo) */}
              <div className="shrink-0 px-2 xl:px-5 flex items-center justify-center -mt-0.5">
                <Link href="/" onClick={handleLinkClick} className="flex items-center group">
                  <Image
                    src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                    alt="Hilal Elektrik & Avize"
                    width={935}
                    height={267}
                    className="h-12 sm:h-14 lg:h-[68px] xl:h-[78px] 2xl:h-[84px] w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-md"
                    priority
                  />
                </Link>
              </div>

              {/* Sağ 3 Buton: buton4, buton5, buton6 */}
              <div className="flex-1 flex items-center justify-start gap-1.5 xl:gap-2.5 2xl:gap-3 font-bold whitespace-nowrap">
                <Link
                  href="/aydinlattigimiz-mekanlar"
                  className={getLinkClass(pathname === "/aydinlattigimiz-mekanlar")}
                >
                  Aydınlattığımız Mekanlar
                </Link>

                <Link
                  href="/hizmetler"
                  className={getLinkClass(
                    pathname.startsWith("/hizmetler") ||
                      pathname === "/subelerimiz" ||
                      pathname === "/iletisim"
                  )}
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  href="/hakkimizda"
                  className={getLinkClass(pathname === "/hakkimizda")}
                >
                  Hakkımızda
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. MOBİL: DÜZGÜN, KULLANIŞLI VE AKICI MOBİL NAVBAR
            ========================================================================= */}
        <nav className="lg:hidden w-full bg-[#E1E0DD]/90 backdrop-blur-md border-b border-border/80 px-4 py-2.5 flex items-center justify-between pointer-events-auto shadow-sm">
          <Link href="/" onClick={handleLinkClick} className="flex items-center shrink-0">
            <Image
              src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
              alt="Hilal Elektrik & Avize"
              width={935}
              height={267}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-surface-subtle transition-colors flex items-center justify-center"
            aria-label="Menüyü Aç"
          >
            <div className="flex flex-col justify-between w-5 h-3.5" aria-hidden="true">
              <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
              <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
              <span className="w-full h-0.5 bg-foreground rounded-full transition-all" />
            </div>
          </button>
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
              width={935}
              height={267}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-surface border border-border hover:bg-surface-subtle text-foreground transition-colors"
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
            className={`flex items-center justify-between p-3.5 rounded-lg font-bold text-sm transition-all border ${
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
              className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-surface-subtle ${
                pathname.startsWith("/koleksiyonlar")
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-bronze" />
                <span>Tüm Koleksiyonlar</span>
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

            {/* Aydınlatma Nedir */}
            <Link
              href="/aydinlatma-nedir"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-surface-subtle ${
                pathname === "/aydinlatma-nedir"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-bronze font-semibold">Aydınlatma Nedir?</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            {/* Aydınlattığımız Mekanlar */}
            <Link
              href="/aydinlattigimiz-mekanlar"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-lg transition-all border ${
                pathname === "/aydinlattigimiz-mekanlar"
                  ? "bg-bronze text-white border-bronze shadow-sm"
                  : "bg-surface-subtle hover:bg-bronze/10 text-foreground border-border"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${pathname === "/aydinlattigimiz-mekanlar" ? "bg-white/20 text-white" : "bg-bronze/15 text-bronze"}`}>
                  <Camera className="w-4 h-4" />
                </div>
                <span>Aydınlattığımız Mekanlar</span>
              </div>
              <ChevronRight className="w-4 h-4 text-bronze" />
            </Link>

            <Link
              href="/hizmetler"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-surface-subtle ${
                pathname.startsWith("/hizmetler") || pathname === "/subelerimiz" || pathname === "/iletisim"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-bronze" />
                <span>Hizmetlerimiz & Şubelerimiz</span>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            </Link>

            <Link
              href="/hakkimizda"
              onClick={handleLinkClick}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-surface-subtle ${
                pathname === "/hakkimizda"
                  ? "text-bronze font-bold bg-surface-subtle"
                  : "text-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-bronze" />
                <span>Hakkımızda & SSS</span>
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
                className="bg-[#059669] hover:bg-[#047857] text-white text-[11px] font-bold py-2.5 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors"
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
                className="bg-[#059669] hover:bg-[#047857] text-white text-[11px] font-bold py-2.5 px-2 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors"
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
              className="w-full bg-[#3d194f] hover:bg-[#52216b] text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 border border-purple-500/20 shadow-sm transition-colors"
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
