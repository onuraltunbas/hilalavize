import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { ShowroomGallerySection } from "@/components/ShowroomGallerySection";
import { CampaignBannerSection } from "@/components/CampaignBannerSection";
import { BrandHeritageSection } from "@/components/BrandHeritageSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";

export default function HomePage() {
  return (
    <>
      {/* Ana Ekran: Video + Slogan (Minimal Porsche Stili) */}
      <HeroSection />

      {/* 1. Bölüm: Fotoğraf & Video (Mağaza ve Ürün Vitrini) */}
      <ShowroomGallerySection />

      {/* 2. Bölüm: Kampanya Görseli */}
      <CampaignBannerSection />

      {/* 3. Bölüm: Vizyon, Misyon, Tarihçe */}
      <BrandHeritageSection />

      {/* Aydınlatma Danışmanlığı Formu */}
      <ConsultationForm />

      {/* Alt Hızlı İletişim Bandı */}
      <HomeCtaBanner />
    </>
  );
}
