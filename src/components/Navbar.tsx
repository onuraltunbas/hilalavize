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

    const getLinkClass = (isActive: boolean) =>
      `px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full transition-all duration-300 whitespace-nowrap text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold tracking-wide ${
        isActive
          ? "bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#B8860B] text-[#12100C] font-bold border border-[#FFF2CC] shadow-[0_0_18px_rgba(212,175,55,0.45)] -translate-y-0.5"
          : "text-[#F5E2A8] bg-black/35 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/45 hover:border-[#D4AF37] hover:text-white shadow-xs hover:shadow-[0_0_14px_rgba(212,175,55,0.30)] transition-all -translate-y-0.5 active:scale-95"
      }`;

    return (
      <header className="sticky top-0 z-50 w-full transition-all duration-300 relative">
        {/* =========================================================================
            1. MASAÜSTÜ NAVBAR: YUMUŞAK GRADIENT + ALTIN ÇİZGİ + GENİŞLETİLMİŞ BUTONLAR
            ========================================================================= */}
        <nav className="hidden lg:block w-full relative backdrop-blur-md backdrop-saturate-150">
          {/* YAZILIMSAL SVG KATMANI: Koleksiyonları Keşfet gradienti gibi yumuşak beyazdan siyaha geçiş */}
          <div className="absolute inset-0 w-full h-[96px] xl:h-[105px] 2xl:h-[114px] pointer-events-none overflow-visible">
            <svg
              viewBox="0 0 1440 115"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <defs>
                {/* Koleksiyonları Keşfet arkasındaki gibi ipeksi, yumuşak beyazdan siyaha gradient */}
                <linearGradient id="chatgptNavGrad" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.90" />
                  <stop offset="18%" stopColor="#E2DDD7" stopOpacity="0.88" />
                  <stop offset="42%" stopColor="#8A7D70" stopOpacity="0.92" />
                  <stop offset="68%" stopColor="#302820" stopOpacity="0.96" />
                  <stop offset="88%" stopColor="#120F0C" stopOpacity="0.98" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1.0" />
                </linearGradient>

                {/* Alt kenardaki parıldayan lüks altın hat */}
                <linearGradient id="chatgptGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9E7D3B" stopOpacity="0.35" />
                  <stop offset="32%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="50%" stopColor="#FBE9B5" stopOpacity="1.0" />
                  <stop offset="68%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.35" />
                </linearGradient>

                {/* Altın Işık Halesi (Glow Efekti) */}
                <filter id="chatgptGlow" x="-5%" y="-150%" width="110%" height="400%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Arka Plan Dolgusu: Yukarıdan aşağıya akıcı ipeksi gradient */}
              <rect
                x="0"
                y="0"
                width="1440"
                height="115"
                fill="url(#chatgptNavGrad)"
              />

              {/* Altın Parlayan Kavisli Sınır Çizgisi */}
              <path
                d="M 0,75 L 540,75 C 565,75 565,108 590,108 L 850,108 C 875,108 875,75 900,75 L 1440,75"
                fill="none"
                stroke="url(#chatgptGoldLine)"
                strokeWidth="2.2"
                filter="url(#chatgptGlow)"
              />
            </svg>
          </div>

          {/* İÇERİK: Sol ve Sağ Eşit Uzaklıkta, Butonlar Eşit Aralıklı ve Logodan Dengeli Uzaklaştırılmış */}
          <div className="relative z-10 w-full max-w-[1520px] 2xl:max-w-[1650px] mx-auto px-6 sm:px-10 xl:px-14 h-[96px] xl:h-[105px] 2xl:h-[114px] grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Sol 3 Buton: Araları eşit açılmış, logodan yatayda uzaklaştırılmış */}
            <div className="flex items-center justify-between xl:justify-evenly gap-2 xl:gap-5 pr-8 xl:pr-14 -mt-2">
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

            {/* Ortada Logo (Kavisli yuvanın tam ortasında & arkasında sıcak altın ışık halesi) */}
            <div className="relative shrink-0 px-6 xl:px-10 flex items-center justify-center">
              {/* Logonun altındaki sıcak altın aydınlatma halesi */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 xl:w-72 h-16 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.28)_0%,transparent_75%)] pointer-events-none blur-sm" />

              <Link href="/" onClick={handleLinkClick} className="relative z-10 flex items-center group">
                <Image
                  src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                  alt="Hilal Elektrik & Avize"
                  width={935}
                  height={267}
                  className="h-14 sm:h-16 lg:h-[74px] xl:h-[82px] 2xl:h-[88px] w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                  priority
                />
              </Link>
            </div>

            {/* Sağ 3 Buton: Araları eşit açılmış, logodan yatayda uzaklaştırılmış, sağ kenara eşit mesafe */}
            <div className="flex items-center justify-between xl:justify-evenly gap-2 xl:gap-5 pl-8 xl:pl-14 -mt-2">
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
        </nav>

        {/* =========================================================================
            2. MOBİL VE TABLET NAVBAR: MASAÜSTÜ GİBİ GENİŞ KAVİSLİ, SAĞINDA SOLUNDA BUTONSUZ,
               LOGONUN ÜSTÜNE BASINCA AŞAĞI AÇILAN MENÜ TETİKLEYİCİLİ
            ========================================================================= */}
        <nav className="lg:hidden w-full relative backdrop-blur-md backdrop-saturate-150">
          {/* Mobil/Tablet SVG Katmanı: Logoya tam sığacak genişlikte kavisli çentik */}
          <div className="absolute inset-0 w-full h-[80px] sm:h-[88px] pointer-events-none overflow-visible">
            <svg
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <defs>
                <linearGradient id="mobileNavGrad" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.90" />
                  <stop offset="18%" stopColor="#E2DDD7" stopOpacity="0.88" />
                  <stop offset="42%" stopColor="#8A7D70" stopOpacity="0.92" />
                  <stop offset="68%" stopColor="#302820" stopOpacity="0.96" />
                  <stop offset="88%" stopColor="#120F0C" stopOpacity="0.98" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1.0" />
                </linearGradient>

                <linearGradient id="mobileGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9E7D3B" stopOpacity="0.35" />
                  <stop offset="32%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="50%" stopColor="#FBE9B5" stopOpacity="1.0" />
                  <stop offset="68%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              <rect
                x="0"
                y="0"
                width="500"
                height="100"
                fill="url(#mobileNavGrad)"
              />

              {/* Genişletilmiş Çentik Hattı: Masaüstündeki gibi logonun rahatça içine oturduğu geniş altın hat */}
              <path
                d="M 0,55 L 45,55 C 75,55 75,85 105,85 L 395,85 C 425,85 425,55 455,55 L 500,55"
                fill="none"
                stroke="url(#mobileGoldLine)"
                strokeWidth="2.2"
                filter="url(#chatgptGlow)"
              />
            </svg>
          </div>

          {/* Merkez Logo: Sağında/solunda buton yok, menü yazısı yok, doğrudan logoya basınca menü açılır */}
          <div className="relative z-10 w-full px-4 h-[80px] sm:h-[88px] flex items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex items-center justify-center group cursor-pointer active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {/* Logonun arkasındaki sıcak altın aydınlatma halesi */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-12 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.30)_0%,transparent_75%)] pointer-events-none blur-sm" />

              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Elektrik & Avize - Menüyü Aç"
                width={935}
                height={267}
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                priority
              />
            </button>
          </div>
        </nav>

        {/* =========================================================================
            3. LOGODAN AŞAĞI DOĞRU AÇILAN ANİMASYONLU BEYAZ MOBİL & TABLET MENÜSÜ
            ========================================================================= */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[80px] sm:top-[88px] bottom-0 z-50 transition-all duration-500 ease-out overflow-hidden ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none -translate-y-6"
          }`}
        >
          {/* Yarı Saydam Arka Plan Karartması */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Logodan Aşağı Kayan Şık Beyaz Menü Paneli (Sitenin renkleriyle tam uyumlu) */}
          <div
            className={`relative mx-auto w-[94%] sm:w-[88%] max-w-md max-h-[calc(100vh-100px)] overflow-y-auto bg-[#FAF9F6] border border-[#E1E0DD] rounded-2xl shadow-2xl p-4 sm:p-5 space-y-4 transition-all duration-500 ease-out mt-2 ${
              mobileMenuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-8 scale-95 opacity-0"
            }`}
          >
            {/* 1. ANASAYFA BUTONU */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`w-full p-3.5 rounded-xl font-bold text-sm transition-all border flex items-center justify-between shadow-xs ${
                pathname === "/"
                  ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] shadow-sm"
                  : "bg-white hover:bg-surface-subtle text-foreground border-border hover:border-bronze"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Home className="w-4 h-4 text-bronze" />
                <span>Anasayfa</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-70" />
            </Link>

            {/* 2. TÜM KOLEKSİYONLAR BAŞLIĞI (TUŞ DEĞİL!) VE ALTINDA 2 SÜTUN KARE FOTOĞRAFLI KARTLAR */}
            <div className="pt-1">
              <div className="flex items-center justify-between pb-2.5 px-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-bronze" />
                  Tüm Koleksiyonlar
                </span>
                <Link
                  href="/koleksiyonlar"
                  onClick={handleLinkClick}
                  className="text-[11px] font-bold text-bronze hover:underline transition-colors"
                >
                  Tümünü Gör →
                </Link>
              </div>

              {/* 2 Sütun Kare Fotoğraflı Kategori Kartları */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/kategori/${cat.slug}`}
                    onClick={handleLinkClick}
                    className="group relative aspect-square rounded-xl overflow-hidden block border border-border/80 shadow-sm hover:border-bronze hover:shadow-md transition-all"
                  >
                    {/* Kategori Arka Plan Fotoğrafı */}
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 220px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Karartma Gradienti */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent group-hover:from-black/95 transition-colors" />

                    {/* Kategori Başlığı ve Ürün Sayısı */}
                    <div className="absolute inset-x-0 bottom-0 p-2 text-center">
                      <span className="text-[12px] sm:text-[13px] font-bold text-white tracking-wide leading-tight drop-shadow-md block">
                        {cat.shortName}
                      </span>
                      <span className="text-[10px] text-zinc-300 font-medium block mt-0.5">
                        {cat.itemCount} Ürün
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. MASAÜSTÜYLE BİREBİR AYNI DİĞER BUTONLAR */}
            <div className="space-y-2 pt-1">
              {/* Aydınlatma Nedir */}
              <Link
                href="/aydinlatma-nedir"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all border flex items-center justify-between shadow-xs ${
                  pathname === "/aydinlatma-nedir"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-sm"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border hover:border-bronze"
                }`}
              >
                <span>Aydınlatma Nedir</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Aydınlattığımız Mekanlar */}
              <Link
                href="/aydinlattigimiz-mekanlar"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all border flex items-center justify-between shadow-xs ${
                  pathname === "/aydinlattigimiz-mekanlar"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-sm"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border hover:border-bronze"
                }`}
              >
                <span>Aydınlattığımız Mekanlar</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Hizmetlerimiz */}
              <Link
                href="/hizmetler"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all border flex items-center justify-between shadow-xs ${
                  pathname.startsWith("/hizmetler") || pathname === "/subelerimiz" || pathname === "/iletisim"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-sm"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border hover:border-bronze"
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Hakkımızda */}
              <Link
                href="/hakkimizda"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all border flex items-center justify-between shadow-xs ${
                  pathname === "/hakkimizda"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-sm"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border hover:border-bronze"
                }`}
              >
                <span>Hakkımızda</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>
            </div>

            {/* Hızlı WhatsApp İletişim */}
            <div className="pt-2 border-t border-border/80">
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

            {/* Instagram Butonu */}
            <div className="pt-1">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#3d194f] hover:bg-[#52216b] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-purple-400/30 shadow-sm transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
