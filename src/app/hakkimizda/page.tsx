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
            25+ Yıllık Tecrübe & Güven
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
              Kahramanmaraş&apos;ta 2 Uzman Şube ile Kesintisiz Hizmet
            </h2>
            <p>
              Kurulduğumuz günden bu yana temel felsefemiz, müşterilerimizin evlerine ve projelerine en doğru, en kaliteli ve en estetik aydınlatma çözümlerini sunmaktır.
            </p>
            <p>
              <strong className="text-foreground">Avize & Aksesuar Showroomumuzda;</strong> saf K9 kristal saray avizelerinden modern geometrik LED sarkıtlara, el üfleme cam sanat ürünlerinden lüks dokunmatik LED aynalara, kadife berjerlerden doğal mermer sehpalara kadar seçkin bir koleksiyon sergiliyoruz.
            </p>
            <p>
              <strong className="text-foreground">Elektrik & Tesisat Şubemizde ise;</strong> TSE ve CE standartlarında elektrik malzemeleri, lüks temperli cam anahtar-priz serileri ve profesyonel montaj desteği sunuyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border">
              <div className="p-4 rounded-xl dgaraj-card">
                <div className="text-2xl font-extrabold text-bronze">500+</div>
                <div className="text-xs text-foreground font-semibold">Aktif Ürün Çeşidi</div>
              </div>
              <div className="p-4 rounded-xl dgaraj-card">
                <div className="text-2xl font-extrabold text-bronze">%100</div>
                <div className="text-xs text-foreground font-semibold">Müşteri Memnuniyeti</div>
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
