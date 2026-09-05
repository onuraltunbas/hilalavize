import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";
import { COMPANY_DATA } from "@/data/company";
import {
  MapPin,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Lokasyon Bulunamadı",
    };
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const showroom = COMPANY_DATA.branches[0];

  return (
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span>Lokasyonlar</span>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-bronze font-semibold">{location.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-2xl dgaraj-card p-6 sm:p-10 mb-10 space-y-3">
          <span className="editorial-tag">
            <MapPin className="w-3.5 h-3.5 text-bronze" />
            {location.district}, {location.city}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {location.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {location.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <div className="dgaraj-card p-6 sm:p-8 space-y-5">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              {location.name} Bölgesi Hizmetlerimiz
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {location.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dgaraj-card p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Hizmet Verilen Yakın Bölgeler
              </h2>
              <div className="flex flex-wrap gap-2">
                {location.nearbyDistricts.map((d, i) => (
                  <span
                    key={i}
                    className="text-xs bg-surface-subtle text-foreground/90 border border-border px-3 py-1 rounded-lg"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  `Merhaba, ${location.name} bölgesinden yazıyorum. Avize ve aydınlatma modelleriniz hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-4 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                {location.name} İçin WhatsApp Danışma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
