import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { LOCATIONS } from "@/data/locations";
import { COMPANY_DATA } from "@/data/company";
import { ConsultationForm } from "@/components/ConsultationForm";
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
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-amber-400">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span>Lokasyonlar</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">{location.name}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-[#0F172A] border border-amber-500/30 p-8 sm:p-12 mb-12 shadow-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <MapPin className="w-3.5 h-3.5" />
            {location.district}, {location.city}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {location.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {location.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0F172A] p-8 rounded-3xl border border-amber-500/20 space-y-6">
            <h2 className="text-xl font-bold text-white">
              {location.name} Bölgesi Hizmetlerimiz
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {location.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F172A] p-8 rounded-3xl border border-amber-500/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                Hizmet Verilen Yakın Bölgeler
              </h2>
              <div className="flex flex-wrap gap-2">
                {location.nearbyDistricts.map((d, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#132238] text-amber-300 border border-amber-500/20 px-3 py-1.5 rounded-xl"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  `Merhaba, ${location.name} bölgesinden yazıyorum. Avize ve aydınlatma modelleriniz hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                {location.name} İçin WhatsApp Danışma
              </a>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <ConsultationForm />
      </div>
    </div>
  );
}
