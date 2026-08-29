import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { StyleSelector } from "@/components/StyleSelector";
import { BranchesSection } from "@/components/BranchesSection";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqSection } from "@/components/FaqSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Showcase Banner */}
      <HeroSection />

      {/* 2. Trust Badges & Guarantee Bar */}
      <TrustBadges />

      {/* 3. Style Selector (İhtişamlı/Klasik vs Modern/Spor vs Sade/Minimalist) */}
      <StyleSelector />

      {/* 4. 2 Physical Branches Comparison (Showroom vs Elektrik with integrated Live Maps) */}
      <BranchesSection />

      {/* 5. 10 Product Categories Grid */}
      <FeaturedCategories />

      {/* 6. Professional Services (Danışmanlık, Montaj, Elektrik İşi) */}
      <ServicesSection />

      {/* 7. Real Customer Reviews & References */}
      <TestimonialsSection />

      {/* 8. Free Lighting Consultation Form */}
      <ConsultationForm />

      {/* 9. FAQ Section */}
      <FaqSection />
    </>
  );
}
