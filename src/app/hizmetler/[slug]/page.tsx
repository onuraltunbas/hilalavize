import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import {
  Sparkles,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-amber-400">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/hizmetler" className="hover:text-amber-400">Hizmetlerimiz</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">{service.title}</span>
        </nav>

        {/* Hero */}
        <div className="relative rounded-3xl bg-[#0F172A] border border-amber-500/30 p-8 sm:p-12 mb-12 shadow-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Hilal Avize & Elektrik Güvencesi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base text-amber-300 font-medium">
            {service.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Steps & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Steps */}
          <div className="bg-[#0F172A] p-8 rounded-3xl border border-amber-500/20 space-y-6">
            <h2 className="text-xl font-bold text-white">
              Hizmet Süreci Nasıl İlerler?
            </h2>
            <div className="space-y-4">
              {service.steps.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#132238] border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400">{st.title}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[#0F172A] p-8 rounded-3xl border border-amber-500/20 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">
                Bu Hizmetin Avantajları
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={`https://wa.me/905053801350?text=${encodeURIComponent(
                  `Merhaba, "${service.title}" hizmeti hakkında randevu veya bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Bu Hizmeti Talep Et
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
