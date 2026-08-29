import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConsultationForm } from "@/components/ConsultationForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Showcase Banner */}
      <HeroSection />

      {/* 2. Trust Badges & Guarantee Bar */}
      <TrustBadges />

      {/* 3. Real Customer Reviews & References */}
      <TestimonialsSection />

      {/* 4. Free Lighting Consultation Form */}
      <ConsultationForm />
    </>
  );
}
