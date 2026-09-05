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
          <Link href="/" className="inline-block py-1">
            <Image
              src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
              alt="Hilal Elektrik • Avize"
              width={935}
              height={267}
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Kahramanmaraş Onikişubat&apos;ta avize mağazamız ve elektrik malzemesi şubemiz ile hizmetinizdeyiz. Klasik saray tipi kristal avizelerden modern spor sarkıtlara, toptan ve perakende elektrik malzemelerinden profesyonel montaj ve usta işçiliğine kadar güvenin adresi.
          </p>
          <div className="pt-2 flex flex-col gap-2.5 text-xs text-foreground/80">
            <span className="flex items-center gap-2 text-bronze font-semibold">
              <Clock className="w-3.5 h-3.5" />
              Pzt - Cmt: 09:00 - 18:30 (Pazar Kapalı)
            </span>
            <span className="text-[11px] text-muted-foreground">
              *Pazar günleri özel randevu ile showroomumuz açılabilmektedir.
            </span>
            <div className="pt-2 w-full">
              <a
                href={COMPANY_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#3d194f] hover:bg-[#52216b] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2.5 border border-purple-500/20"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Branch 1 (Showroom) */}
        <div className="space-y-3.5 dgaraj-card p-5 flex flex-col justify-between border-2 hover:border-bronze/60 transition-colors">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-foreground font-black text-sm sm:text-base tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-bronze/15 flex items-center justify-center text-bronze shrink-0">
                <Store className="w-4 h-4 text-bronze" />
              </div>
              <span className="text-foreground font-extrabold">Avize ve Aksesuar Showroom</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-bronze shrink-0 mt-0.5" />
              {showroom.address.full}
            </p>
          </div>
          <div className="space-y-2 pt-2 border-t border-border">
            <a
              href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent("Merhaba, Hilal Avize Showroom ürünleri için bilgi ve teklif almak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm w-full"
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
              Google Haritalarda Aç ve Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 3: Branch 2 (Elektrik & Tesisat) */}
        <div className="space-y-3.5 dgaraj-card p-5 flex flex-col justify-between border-2 hover:border-amber-500/60 transition-colors">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-foreground font-black text-sm sm:text-base tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-600 shrink-0">
                <Zap className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-foreground font-extrabold">Elektrik ve Tesisat Şubesi</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5 pt-1">
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
              Google Haritalarda Aç ve Yol Tarifi →
            </a>
          </div>
        </div>

        {/* Column 4: Quick Categories & SEO Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">Koleksiyonlar</h4>
          <div className="grid grid-cols-1 gap-1.5 text-xs">
            <Link
              href="/aydinlattigimiz-mekanlar"
              className="text-foreground hover:text-bronze font-bold flex items-center gap-1 transition-colors pb-0.5"
            >
              <ChevronRight className="w-3 h-3 text-bronze" />
              Aydınlattığımız Mekanlar
            </Link>
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
