import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import { getAllProductsAsync } from "@/lib/products-store";
import { ProductCard } from "@/components/ProductCard";
import {
  Sparkles,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Kategori Bulunamadı",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      images: [
        {
          url: category.image,
          alt: category.name,
        },
      ],
    },
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const allProducts = await getAllProductsAsync();
  const categoryProducts = allProducts.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-400">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/koleksiyonlar" className="hover:text-amber-400">Koleksiyonlar</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner with Background Image */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0F172A] border border-amber-500/25 p-6 sm:p-10 mb-10 shadow-2xl min-h-[200px] flex flex-col justify-center">
          {/* Background Image */}
          {(category.coverImage || category.image) && (
            <div className="absolute inset-0 z-0">
              <Image
                src={category.coverImage || category.image}
                alt={category.name}
                fill
                className="object-cover object-center opacity-30 filter brightness-75 scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A] via-[#080D1A]/90 to-[#080D1A]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent" />
            </div>
          )}

          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Showroom Özel Koleksiyonu
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-xs text-amber-400 font-semibold">
                {categoryProducts.length} Model Teşhirde
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl drop-shadow">
              {category.description}
            </p>

            {/* Subcategories Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.subcategories.map((sub, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#132238]/90 backdrop-blur-md text-amber-300 border border-amber-500/30 px-3 py-1 rounded-xl shadow-sm"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Products in this Category */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {category.name} Modellerimiz
            </h2>
            <span className="text-xs text-amber-400 font-semibold">
              Teşhirde {categoryProducts.length} Model Mevcut
            </span>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-[#0F172A] rounded-3xl border border-slate-800 space-y-3">
              <p className="text-sm text-slate-300">
                Bu kategoride yüzlerce güncel model showroomumuzda teşhir edilmektedir.
              </p>
              <a
                href="https://wa.me/905053801350"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Güncel Kataloğu İsteyin
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
