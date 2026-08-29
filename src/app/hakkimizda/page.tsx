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
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            25+ Yıllık Tecrübe & Güven
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Işığın ve Zarafetin Hikayesi
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hilal Elektrik Avize Aksesuar olarak, Kahramanmaraş&apos;ta yaşam alanlarını sadece aydınlatmıyor; zarafet, konfor ve estetikle donatıyoruz.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/30 shadow-2xl">
            <Image
              src="/images/1920x1080_hero_showroom.jpg"
              alt="Hilal Avize Showroom Kahramanmaraş"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Kahramanmaraş&apos;ta 2 Uzman Şube ile Kesintisiz Hizmet
            </h2>
            <p>
              Kurulduğumuz günden bu yana temel felsefemiz, müşterilerimizin evlerine ve projelerine en doğru, en kaliteli ve en estetik aydınlatma çözümlerini sunmaktır.
            </p>
            <p>
              <strong>Avize & Aksesuar Showroomumuzda;</strong> saf K9 kristal saray avizelerinden modern geometrik LED sarkıtlara, el üfleme cam sanat ürünlerinden lüks dokunmatik LED aynalara, kadife berjerlerden doğal mermer sehpalara kadar seçkin bir koleksiyon sergiliyoruz.
            </p>
            <p>
              <strong>Elektrik & Tesisat Şubemizde ise;</strong> TSE ve CE standartlarında elektrik malzemeleri, lüks temperli cam anahtar-priz serileri ve profesyonel montaj desteği sunuyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-amber-500/20">
                <div className="text-2xl font-extrabold text-amber-400">500+</div>
                <div className="text-xs text-slate-300 font-semibold">Aktif Ürün Çeşidi</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0F172A] border border-amber-500/20">
                <div className="text-2xl font-extrabold text-amber-400">%100</div>
                <div className="text-xs text-slate-300 font-semibold">Müşteri Memnuniyeti</div>
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
