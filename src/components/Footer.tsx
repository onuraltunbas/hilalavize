import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import {
  MapPin,
  Clock,
  Zap,
  Store,
  ChevronRight,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  return (
    <footer className="bg-[#050811] text-slate-300 border-t border-[#F59E0B]/20 pt-16 pb-8">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src="/images/hilal_logo.png"
                alt="Hilal Elektrik Avize Aksesuar"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">HİLAL ELEKTRİK AVİZE</h3>
              <p className="text-xs text-amber-400">Aksesuar & Aydınlatma</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Kahramanmaraş Onikişubat&apos;ta 2 uzman şubemizle hizmetinizdeyiz. Klasik saray tipi kristal avizelerden modern spor sarkıtlara, dekoratif mobilyalardan tam donanımlı elektrik malzemelerine ve montajına kadar güvenin adresi.
          </p>
          <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
            <span className="flex items-center gap-2 text-amber-400 font-semibold">
              <Clock className="w-4 h-4" />
              Pzt - Cmt: 09:00 - 17:00 (Pazar Kapalı)
            </span>
            <span className="text-[11px] text-slate-500">
              *Pazar günleri özel randevu ile showroomumuz açılabilmektedir.
            </span>
            <div className="pt-1">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs shadow-lg shadow-pink-500/20 transition-all hover:scale-105"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Branch 1 (Showroom) */}
        <div className="space-y-3 bg-slate-900/40 p-4 rounded-2xl border border-amber-500/20">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Store className="w-4 h-4" />
            Avize & Aksesuar Showroom
          </div>
          <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            {showroom.address.full}
          </p>
          <div className="space-y-1 text-xs pt-1">
            <div className="text-slate-400 font-medium">İletişim & Danışmanlık:</div>
            {showroom.contacts.map((c, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-0.5">
                <span className="text-slate-300">{c.name}:</span>
                <a
                  href={`tel:${c.phone}`}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  {c.phoneFormatted}
                </a>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={showroom.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 underline font-medium"
            >
              Google Haritalarda Aç & Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 3: Branch 2 (Elektrik & Tesisat) */}
        <div className="space-y-3 bg-slate-900/40 p-4 rounded-2xl border border-amber-500/20">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Zap className="w-4 h-4" />
            Elektrik & Tesisat Şubesi
          </div>
          <p className="text-xs text-slate-300 leading-relaxed flex items-start gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            {electrical.address.full}
          </p>
          <div className="space-y-1 text-xs pt-1">
            <div className="text-slate-400 font-medium">Yetkili Sorumlu:</div>
            {electrical.contacts.map((c, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-0.5">
                <span className="text-slate-300">{c.name}:</span>
                <a
                  href={`tel:${c.phone}`}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  {c.phoneFormatted}
                </a>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            Elektrik malzemeleri, cam anahtar-prizler, sigorta değişimi ve montaj hizmetleri.
          </p>
          <div className="pt-1">
            <a
              href={electrical.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 underline font-medium"
            >
              Google Haritalarda Aç & Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 4: Quick Categories & SEO Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm tracking-wide">Koleksiyonlar & Sayfalar</h4>
          <div className="grid grid-cols-1 gap-1.5 text-xs">
            {CATEGORIES.slice(0, 7).map((c) => (
              <Link
                key={c.slug}
                href={`/kategori/${c.slug}`}
                className="text-slate-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-amber-500/50" />
                {c.name}
              </Link>
            ))}
            <Link
              href="/koleksiyonlar"
              className="text-amber-400 hover:text-amber-300 font-medium pt-1"
            >
              Tüm Ürünleri Gör ({CATEGORIES.length} Kategori) →
            </Link>
          </div>
        </div>
      </div>



      {/* Bottom Bar & Legal Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Hilal Elektrik Avize Aksesuar. Tüm Hakları Saklıdır. Onikişubat / Kahramanmaraş.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="/gizlilik-politikasi" className="hover:text-slate-300 transition-colors">
            Gizlilik Politikası
          </Link>
          <span>•</span>
          <Link href="/kvkk-aydinlatma-metni" className="hover:text-slate-300 transition-colors">
            KVKK Metni
          </Link>
          <span>•</span>
          <Link href="/kullanim-sartlari" className="hover:text-slate-300 transition-colors">
            Kullanım Şartları
          </Link>
          <span>•</span>
          <Link href="/cerez-politikasi" className="hover:text-slate-300 transition-colors">
            Çerez Politikası
          </Link>
          <span>•</span>
          <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
            XML Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
