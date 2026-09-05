import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { TrustBadges } from "@/components/TrustBadges";
import { BranchesSection } from "@/components/BranchesSection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | Hilal Elektrik Avize Aksesuar Kahramanmaraş",
  description:
    "Hilal Elektrik Avize Aksesuar kurumsal hikayesi, kalite vizyonumuz, Onikişubat showroom deneyimimiz ve müşteri memnuniyeti anlayışımız.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="editorial-tag">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            25+ Yıllık Tecrübe ve Güven
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Işığın ve Zarafetin Hikayesi
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hilal Elektrik Avize Aksesuar olarak, Kahramanmaraş&apos;ta yaşam alanlarını sadece aydınlatmıyor; zarafet, konfor ve estetikle donatıyoruz.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-surface-subtle border border-border shadow-sm">
            <Image
              src="/images/1920x1080_hero_showroom.jpg"
              alt="Hilal Avize Showroom Kahramanmaraş"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Hilal Avize ve Hilal Elektrik ile Kesintisiz Hizmet
            </h2>
            <p>
              Kurulduğumuz günden bu yana temel felsefemiz, müşterilerimizin evlerine ve projelerine en doğru, en kaliteli ve en estetik aydınlatma çözümlerini sunmaktır.
            </p>
            <p>
              <strong className="text-foreground">Avize ve Aksesuar Showroomumuzda;</strong> saf K9 kristal saray avizelerinden modern geometrik LED sarkıtlara, el üfleme cam sanat ürünlerinden lüks dokunmatik LED aynalara, kadife berjerlerden doğal mermer sehpalara kadar seçkin bir koleksiyon sergiliyoruz.
            </p>
            <p>
              <strong className="text-foreground">Elektrik ve Tesisat Şubemizde ise;</strong> TSE ve CE standartlarında elektrik malzemeleri, lüks temperli cam anahtar-priz serileri ve profesyonel usta ve işçilik hizmeti sunuyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
              <div className="p-4 rounded-xl dgaraj-card">
                <div className="text-2xl font-extrabold text-bronze">1000+</div>
                <div className="text-xs text-foreground font-semibold">Aktif Ürün Çeşidi</div>
              </div>
              <div className="p-4 rounded-xl dgaraj-card">
                <div className="text-2xl font-extrabold text-bronze">%100</div>
                <div className="text-xs text-foreground font-semibold">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mağaza ve Showroom Fotoğraf Vitrini */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading">
              Mağazalarımızdan Kareler
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Onikişubat&apos;ta yer alan 2 katlı avize showroomumuz ve elektrik şubemizden canlı vitrin detayları.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-border group shadow-sm">
              <Image
                src="/images/1920x1080_hero_showroom.jpeg"
                alt="Hilal Avize Showroom Cephe ve Vitrin"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-bold text-white tracking-wide">Avize ve Aksesuar Showroom</span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-border group shadow-sm">
              <Image
                src="/images/categories/theresa_kapak.jpeg"
                alt="Maria Theresa Saray Koleksiyonu"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-bold text-white tracking-wide">Klasik ve Kristal Saray Serisi</span>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-border group shadow-sm sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/1920x1080_elektrik_sube.jpg"
                alt="Hilal Elektrik ve Tesisat Şubesi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-bold text-white tracking-wide">Elektrik Malzemeleri ve Uygulama Şubesi</span>
              </div>
            </div>
          </div>
        </div>

        <TrustBadges />
        <BranchesSection />
      </div>
    </div>
  );
}
