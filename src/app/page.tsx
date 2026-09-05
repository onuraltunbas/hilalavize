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

      {/* Aydınlatma Danışmanlığı (Videonun hemen altında) */}
      <CampaignBannerSection />

      {/* Showroom & Mağaza Deneyimi Vitrini (Aydınlatmanın Sanata Dönüştüğü Mekanlar'ın hemen üstünde) */}
      <ShowroomGallerySection />

      {/* Aydınlatmanın Sanata Dönüştüğü Mekanlar: Vizyon, Misyon, Tarihçe */}
      <BrandHeritageSection />

      {/* Aydınlatma Danışmanlığı Formu */}
      <ConsultationForm />

      {/* Alt Hızlı İletişim Bandı */}
      <HomeCtaBanner />
    </>
  );
}
