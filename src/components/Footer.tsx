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
  MessageCircle,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  return (
    <footer className="bg-surface text-muted-foreground border-t border-border pt-16 pb-8">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-border">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/images/hilal_logo.png"
                alt="Hilal Elektrik Avize Aksesuar"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-extrabold text-foreground text-sm tracking-tight">HİLAL ELEKTRİK AVİZE</h3>
              <p className="text-xs text-bronze font-medium">Aksesuar & Aydınlatma</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Kahramanmaraş Onikişubat&apos;ta avize mağazamız ve elektrik malzemesi şubemiz ile hizmetinizdeyiz. Klasik saray tipi kristal avizelerden modern spor sarkıtlara, toptan ve perakende elektrik malzemelerinden profesyonel montaj ve usta işçiliğine kadar güvenin adresi.
          </p>
          <div className="pt-2 flex flex-col gap-2 text-xs text-foreground/80">
            <span className="flex items-center gap-2 text-bronze font-semibold">
              <Clock className="w-3.5 h-3.5" />
              Pzt - Cmt: 09:00 - 18:30 (Pazar Kapalı)
            </span>
            <span className="text-[11px] text-muted-foreground">
              *Pazar günleri özel randevu ile showroomumuz açılabilmektedir.
            </span>
            <div className="pt-1">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-sm transition-all hover:opacity-90"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Branch 1 (Showroom) */}
        <div className="space-y-3 dgaraj-card p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-bronze font-bold text-xs uppercase tracking-wider">
              <Store className="w-3.5 h-3.5" />
              Avize & Aksesuar Showroom
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" />
              {showroom.address.full}
            </p>
          </div>
          <div className="space-y-2 pt-2 border-t border-border">
            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent("Merhaba, Hilal Avize Showroom ürünleri için bilgi ve teklif almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm w-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp&apos;tan Teklif Al
            </a>
            <a
              href={showroom.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-bronze hover:underline font-medium"
            >
              Google Haritalarda Aç & Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 3: Branch 2 (Elektrik & Tesisat) */}
        <div className="space-y-3 dgaraj-card p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-bronze font-bold text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              Elektrik & Tesisat Şubesi
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" />
              {electrical.address.full}
            </p>
          </div>
          <div className="space-y-2 pt-2 border-t border-border">
            <a
              href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent("Merhaba, elektrik tesisat ve malzeme için teklif ve bilgi almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm w-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp&apos;tan Teklif Al
            </a>
            <a
              href={electrical.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-bronze hover:underline font-medium"
            >
              Google Haritalarda Aç & Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 4: Quick Categories & SEO Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">Koleksiyonlar</h4>
          <div className="grid grid-cols-1 gap-1.5 text-xs">
            {CATEGORIES.slice(0, 7).map((c) => (
              <Link
                key={c.slug}
                href={`/kategori/${c.slug}`}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-bronze/60" />
                {c.name}
              </Link>
            ))}
            <Link
              href="/aydinlatma-nedir"
              className="text-foreground hover:text-bronze font-semibold flex items-center gap-1 transition-colors pt-1"
            >
              <ChevronRight className="w-3 h-3 text-bronze" />
              Aydınlatma Nedir? (Rehber)
            </Link>
            <Link
              href="/koleksiyonlar"
              className="text-bronze hover:underline font-medium pt-0.5 block text-xs"
            >
              Tüm Ürünleri Gör ({CATEGORIES.length} Kategori) →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Legal Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Hilal Elektrik Avize Aksesuar. Tüm Hakları Saklıdır. Onikişubat / Kahramanmaraş.
        </p>
        <div className="flex items-center gap-3 flex-wrap justify-center text-[11px]">
          <Link href="/gizlilik-politikasi" className="hover:text-foreground transition-colors">
            Gizlilik Politikası
          </Link>
          <span>•</span>
          <Link href="/kvkk-aydinlatma-metni" className="hover:text-foreground transition-colors">
            KVKK Metni
          </Link>
          <span>•</span>
          <Link href="/kullanim-sartlari" className="hover:text-foreground transition-colors">
            Kullanım Şartları
          </Link>
          <span>•</span>
          <Link href="/cerez-politikasi" className="hover:text-foreground transition-colors">
            Çerez Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
}
