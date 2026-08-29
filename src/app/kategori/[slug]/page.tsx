import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import {
  Sparkles,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

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

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === category.slug);

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

        {/* Compact Category Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] border border-amber-500/25 p-5 sm:p-6 mb-8 shadow-lg">
          <div className="relative z-10 space-y-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Sparkles className="w-3 h-3" />
                Showroom Koleksiyonu
              </span>
              <span className="text-slate-600 text-xs">•</span>
              <span className="text-[11px] text-amber-400 font-medium">
                {category.itemCount}+ Model Teşhirde
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              {category.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {category.description}
            </p>

            {/* Compact Subcategories Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {category.subcategories.map((sub, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-[#132238] text-amber-300/90 border border-amber-500/20 px-2.5 py-0.5 rounded-lg"
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
              Teşhirde {category.itemCount}+ Model Mevcut
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
