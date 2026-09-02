import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import { getAllProductsAsync } from "@/lib/products-store";
import { CategoryProductView } from "@/components/CategoryProductView";
import { ChevronRight } from "lucide-react";

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
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href="/koleksiyonlar" className="hover:text-foreground">Koleksiyonlar</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-bronze font-semibold">{category.name}</span>
        </nav>

        {/* Category Product View with Subcategories Filter and Dynamic Banners */}
        <CategoryProductView category={category} products={categoryProducts} />
      </div>
    </div>
  );
}
