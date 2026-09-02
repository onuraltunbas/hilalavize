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
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href="/hizmetler" className="hover:text-foreground">Hizmetlerimiz</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-bronze font-semibold">{service.title}</span>
        </nav>

        {/* Hero */}
        <div className="relative rounded-2xl dgaraj-card p-6 sm:p-10 mb-10 space-y-3">
          <span className="editorial-tag">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            Hilal Avize & Elektrik Güvencesi
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base text-bronze font-medium">
            {service.tagline}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>

        {/* Steps & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Steps */}
          <div className="dgaraj-card p-6 sm:p-8 space-y-5">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Hizmet Süreci Nasıl İlerler?
            </h2>
            <div className="space-y-3">
              {service.steps.map((st, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-surface-subtle border border-border space-y-1">
                  <div className="text-xs font-bold text-bronze uppercase tracking-wider">{st.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{st.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="dgaraj-card p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Bu Hizmetin Avantajları
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <a
                href={`https://wa.me/905053801350?text=${encodeURIComponent(
                  `Merhaba, "${service.title}" hizmeti hakkında randevu veya bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
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
