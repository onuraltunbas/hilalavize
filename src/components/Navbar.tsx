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
  const [scrollRatio, setScrollRatio] = useState(0);
  const prevRatioRef = React.useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sitede aşağı indikçe (Işığın En Zarif Hali'ne geldikçe) gradientin siyah kısmı beyaza döner
  // Yukarı çıktıkça tekrar eski haline (siyaha) yumuşakça döner
  useEffect(() => {
    if (pathname !== "/") {
      // Alt sayfalarda hero video olmadığı için navbar direkt açık/beyaz uyumlu tondadır
      setScrollRatio(1);
      prevRatioRef.current = 1;
      return;
    }

    let ticking = false;

    const updateScrollRatio = () => {
      const scrollY = window.scrollY;
      const heroHeading = document.getElementById("hero-heading");
      let targetRatio = 0;

      if (heroHeading) {
        const headingRect = heroHeading.getBoundingClientRect();
        const navHeight = 94;
        const headingPageY = headingRect.top + scrollY;
        const arrivalScrollY = Math.max(100, headingPageY - navHeight);
        const startScrollY = Math.max(30, arrivalScrollY * 0.25);

        if (scrollY <= startScrollY) {
          targetRatio = 0;
        } else if (scrollY >= arrivalScrollY) {
          targetRatio = 1;
        } else {
          const raw = (scrollY - startScrollY) / (arrivalScrollY - startScrollY);
          targetRatio = raw * raw * (3 - 2 * raw); // Yumuşak akıcı geçiş (smoothstep)
        }
      } else {
        const startScrollY = 60;
        const arrivalScrollY = 420;
        if (scrollY <= startScrollY) {
          targetRatio = 0;
        } else if (scrollY >= arrivalScrollY) {
          targetRatio = 1;
        } else {
          const raw = (scrollY - startScrollY) / (arrivalScrollY - startScrollY);
          targetRatio = raw * raw * (3 - 2 * raw);
        }
      }

      const roundedRatio = Math.round(targetRatio * 100) / 100;
      if (Math.abs(prevRatioRef.current - roundedRatio) >= 0.008) {
        prevRatioRef.current = roundedRatio;
        setScrollRatio(roundedRatio);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollRatio);
        ticking = true;
      }
    };

    updateScrollRatio();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

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
    const isLightNav = scrollRatio > 0.55;

    const getLinkClass = (isActive: boolean) =>
      `px-3.5 py-1.5 xl:px-4.5 xl:py-2 rounded-full transition-all duration-300 whitespace-nowrap text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] font-semibold tracking-wide ${
        isActive
          ? "bg-gradient-to-r from-[#D4AF37] via-[#E8C872] to-[#B8860B] text-[#12100C] font-bold border border-[#FFF2CC] shadow-[0_0_18px_rgba(212,175,55,0.45)] -translate-y-0.5"
          : isLightNav
          ? "text-[#32281E] bg-white/75 hover:bg-[#D4AF37]/20 border border-[#B89647]/50 hover:border-[#9E7D3B] hover:text-[#12100C] shadow-xs hover:shadow-[0_0_14px_rgba(212,175,55,0.30)] transition-all -translate-y-0.5 active:scale-95"
          : "text-[#F5E2A8] bg-black/35 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/45 hover:border-[#D4AF37] hover:text-white shadow-xs hover:shadow-[0_0_14px_rgba(212,175,55,0.30)] transition-all -translate-y-0.5 active:scale-95"
      }`;

    return (
      <header className="sticky top-0 z-50 w-full transition-all duration-300 relative">
        {/* =========================================================================
            1. MASAÜSTÜ NAVBAR: YUMUŞAK GRADIENT + ALTIN ÇİZGİ + GENİŞLETİLMİŞ BUTONLAR
            ========================================================================= */}
        <nav className="hidden lg:block w-full relative backdrop-blur-md backdrop-saturate-150">
          {/* YAZILIMSAL SVG KATMANI: Koleksiyonları Keşfet gradienti gibi yumuşak beyazdan siyaha geçiş */}
          <div className="absolute inset-0 w-full h-[114px] xl:h-[123px] 2xl:h-[132px] pointer-events-none overflow-visible">
            <svg
              viewBox="0 0 1440 115"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <defs>
                {/* 1. Koyu Gradient: Referans görseldeki gibi saf monokrom akıcı geçiş ve alt kısımda tam katı siyah (#000000) */}
                <linearGradient id="chatgptNavGradDark" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.82" />
                  <stop offset="12%" stopColor="#DDDDDD" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#BCBCBC" stopOpacity="0.88" />
                  <stop offset="38%" stopColor="#929292" stopOpacity="0.92" />
                  <stop offset="52%" stopColor="#585858" stopOpacity="0.96" />
                  <stop offset="65%" stopColor="#2A2A2A" stopOpacity="0.99" />
                  <stop offset="78%" stopColor="#000000" stopOpacity="1.0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1.0" />
                </linearGradient>

                {/* 2. Açık Gradient: Aşağı indikçe siyah kısım beyaza döner */}
                <linearGradient id="chatgptNavGradLight" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.80" />
                  <stop offset="22%" stopColor="#F5F2EC" stopOpacity="0.83" />
                  <stop offset="50%" stopColor="#EFECE5" stopOpacity="0.87" />
                  <stop offset="78%" stopColor="#E8E3DA" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#FAF9F6" stopOpacity="0.95" />
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

              {/* Arka Plan: Koyu Gradient (Sayfa en üstündeyken tam görünür, aşağı indikçe söner) */}
              <rect
                x="0"
                y="0"
                width="1440"
                height="115"
                fill="url(#chatgptNavGradDark)"
                opacity={Math.max(0, Math.min(1, 1 - scrollRatio))}
              />

              {/* Arka Plan: Açık Beyaz Gradient (Aşağı indikçe yavaşça belirir, yukarı çıktıkça söner) */}
              <rect
                x="0"
                y="0"
                width="1440"
                height="115"
                fill="url(#chatgptNavGradLight)"
                opacity={Math.max(0, Math.min(1, scrollRatio))}
              />

              {/* Altın Parlayan Kavisli Sınır Çizgisi: Butonların üstünden geçer ve logoyu alttan kucaklar */}
              <path
                d="M 0,32 L 530,32 C 560,32 560,108 590,108 L 850,108 C 880,108 880,32 910,32 L 1440,32"
                fill="none"
                stroke="url(#chatgptGoldLine)"
                strokeWidth="2.2"
                filter="url(#chatgptGlow)"
              />
            </svg>
          </div>

          {/* İÇERİK: Sol ve Sağ Eşit Uzaklıkta, Butonlar Çizginin Altında Eşit Aralıklı */}
          <div className="relative z-10 w-full max-w-[1520px] 2xl:max-w-[1650px] mx-auto px-6 sm:px-10 xl:px-14 h-[114px] xl:h-[123px] 2xl:h-[132px] grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Sol 3 Buton: Çizginin altında, araları eşit açılmış, logodan yatayda uzaklaştırılmış */}
            <div className="flex items-center justify-between xl:justify-evenly gap-2 xl:gap-5 pr-8 xl:pr-14 mt-4 xl:mt-5">
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
            <div className="relative shrink-0 px-6 xl:px-10 flex items-center justify-center -translate-y-[16px]">
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

            {/* Sağ 3 Buton: Çizginin altında, araları eşit açılmış, logodan yatayda uzaklaştırılmış, sağ kenara eşit mesafe */}
            <div className="flex items-center justify-between xl:justify-evenly gap-2 xl:gap-5 pl-8 xl:pl-14 mt-4 xl:mt-5">
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
          <div className="absolute inset-0 w-full h-[94px] sm:h-[104px] pointer-events-none overflow-visible">
            <svg
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <defs>
                {/* 1. Koyu Gradient (Mobil): Referans görseldeki gibi saf monokrom akıcı geçiş ve alt kısımda tam katı siyah (#000000) */}
                <linearGradient id="mobileNavGradDark" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.82" />
                  <stop offset="12%" stopColor="#DDDDDD" stopOpacity="0.85" />
                  <stop offset="25%" stopColor="#BCBCBC" stopOpacity="0.88" />
                  <stop offset="38%" stopColor="#929292" stopOpacity="0.92" />
                  <stop offset="52%" stopColor="#585858" stopOpacity="0.96" />
                  <stop offset="65%" stopColor="#2A2A2A" stopOpacity="0.99" />
                  <stop offset="78%" stopColor="#000000" stopOpacity="1.0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="1.0" />
                </linearGradient>

                {/* 2. Açık Gradient (Mobil): Aşağı indikçe siyah kısım beyaza döner */}
                <linearGradient id="mobileNavGradLight" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" stopOpacity="0.80" />
                  <stop offset="22%" stopColor="#F5F2EC" stopOpacity="0.83" />
                  <stop offset="50%" stopColor="#EFECE5" stopOpacity="0.87" />
                  <stop offset="78%" stopColor="#E8E3DA" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#FAF9F6" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="mobileGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9E7D3B" stopOpacity="0.35" />
                  <stop offset="32%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="50%" stopColor="#FBE9B5" stopOpacity="1.0" />
                  <stop offset="68%" stopColor="#D4AF37" stopOpacity="0.80" />
                  <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              {/* Mobil Arka Plan: Koyu Gradient (Yukarıdayken görünür) */}
              <rect
                x="0"
                y="0"
                width="500"
                height="100"
                fill="url(#mobileNavGradDark)"
                opacity={Math.max(0, Math.min(1, 1 - scrollRatio))}
              />

              {/* Mobil Arka Plan: Açık Gradient (Aşağı inildikçe yavaşça belirir) */}
              <rect
                x="0"
                y="0"
                width="500"
                height="100"
                fill="url(#mobileNavGradLight)"
                opacity={Math.max(0, Math.min(1, scrollRatio))}
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
          <div className="relative z-10 w-full px-4 h-[94px] sm:h-[104px] flex items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex items-center justify-center group cursor-pointer active:scale-95 transition-transform -translate-y-[10px]"
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {/* Logonun arkasındaki sıcak altın aydınlatma halesi */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 h-14 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.30)_0%,transparent_75%)] pointer-events-none blur-sm" />

              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Elektrik & Avize - Menüyü Aç"
                width={935}
                height={267}
                className="h-[58px] sm:h-[68px] w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                priority
              />
            </button>
          </div>
        </nav>

        {/* =========================================================================
            3. LOGODAN AŞAĞI DOĞRU AÇILAN ANİMASYONLU BEYAZ MOBİL & TABLET MENÜSÜ
            ========================================================================= */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[94px] sm:top-[104px] bottom-0 z-50 transition-all duration-500 ease-out overflow-hidden ${
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
            className={`relative mx-auto w-[94%] sm:w-[88%] max-w-md max-h-[calc(100vh-114px)] overflow-y-auto bg-[#FAF9F6] border border-[#E1E0DD] rounded-2xl shadow-2xl p-4 sm:p-5 space-y-4 transition-all duration-500 ease-out mt-2 ${
              mobileMenuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-8 scale-95 opacity-0"
            }`}
          >
            {/* 1. ANASAYFA BUTONU */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`w-full p-3.5 rounded-xl font-bold text-sm transition-all duration-300 border flex items-center justify-between shadow-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/20 active:translate-y-0 active:scale-[0.98] ${
                pathname === "/"
                  ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] shadow-md shadow-bronze/25"
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
                  className="text-[11px] font-bold text-bronze hover:underline transition-colors hover:-translate-y-0.5 inline-block"
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
                    className="group relative aspect-square rounded-xl overflow-hidden block border border-border/80 shadow-sm hover:border-bronze hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1.5 active:translate-y-0 active:scale-[0.97] transition-all duration-300"
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
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border flex items-center justify-between shadow-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/20 hover:border-bronze active:translate-y-0 active:scale-[0.98] ${
                  pathname === "/aydinlatma-nedir"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-md shadow-bronze/25"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border"
                }`}
              >
                <span>Aydınlatma Nedir</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Aydınlattığımız Mekanlar */}
              <Link
                href="/aydinlattigimiz-mekanlar"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border flex items-center justify-between shadow-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/20 hover:border-bronze active:translate-y-0 active:scale-[0.98] ${
                  pathname === "/aydinlattigimiz-mekanlar"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-md shadow-bronze/25"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border"
                }`}
              >
                <span>Aydınlattığımız Mekanlar</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Hizmetlerimiz */}
              <Link
                href="/hizmetler"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border flex items-center justify-between shadow-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/20 hover:border-bronze active:translate-y-0 active:scale-[0.98] ${
                  pathname.startsWith("/hizmetler") || pathname === "/subelerimiz" || pathname === "/iletisim"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-md shadow-bronze/25"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border"
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Hakkımızda */}
              <Link
                href="/hakkimizda"
                onClick={handleLinkClick}
                className={`w-full p-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border flex items-center justify-between shadow-xs hover:-translate-y-1 hover:shadow-lg hover:shadow-bronze/20 hover:border-bronze active:translate-y-0 active:scale-[0.98] ${
                  pathname === "/hakkimizda"
                    ? "bg-gradient-to-r from-[#93826E] to-[#7A6956] text-white border-[#7A6956] font-bold shadow-md shadow-bronze/25"
                    : "bg-white hover:bg-surface-subtle text-foreground border-border"
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
                  className="bg-[#00880E] hover:bg-[#00730c] text-white text-[11px] font-bold py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
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
                  className="bg-[#00880E] hover:bg-[#00730c] text-white text-[11px] font-bold py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
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
                className="w-full bg-[#3d194f] hover:bg-[#52216b] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-purple-400/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
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
