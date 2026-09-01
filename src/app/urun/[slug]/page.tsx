import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { getProductBySlugAsync, getAllProductsAsync } from "@/lib/products-store";
import { COMPANY_DATA } from "@/data/company";
import { AiComplementaryProducts } from "@/components/AiComplementaryProducts";
import { ProductGallery } from "@/components/ProductGallery";
import {
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Ruler,
  Lightbulb,
} from "lucide-react";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const all = await getAllProductsAsync();
  return all.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = (await getProductBySlugAsync(slug)) || PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = (await getProductBySlugAsync(slug)) || PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];
  const activeBranch = product.branch === "showroom" ? showroom : electrical;

  // Schema.org Product JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${COMPANY_DATA.siteUrl}${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Hilal Avize & Elektrik",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "HomeGoodsStore",
        name: COMPANY_DATA.name,
      },
    },
  };

  return (
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-amber-400">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/koleksiyonlar" className="hover:text-amber-400">Koleksiyonlar</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href={`/kategori/${product.categorySlug}`} className="hover:text-amber-400">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Product Image Gallery */}
          <div>
            <ProductGallery
              images={product.images || [product.image]}
              productName={product.name}
              customBadge={product.badge}
            />
          </div>

          {/* Product Info & Inquiries */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {product.categoryName}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Technical Specifications */}
              <div className="bg-[#0F172A] p-5 rounded-2xl border border-amber-500/20 space-y-3 text-xs sm:text-sm">
                {product.dimensions && product.dimensions.toLowerCase() !== "nope" && (
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-amber-400" /> Boyutlar / Ölçüler:
                    </span>
                    <span className="font-semibold text-white">{product.dimensions}</span>
                  </div>
                )}
                {product.lightingType && product.lightingType.toLowerCase() !== "nope" && (
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-400" /> Aydınlatma / Duy Tipi:
                    </span>
                    <span className="font-semibold text-white">{product.lightingType}</span>
                  </div>
                )}
                <div className="flex justify-between py-1.5 text-xs">
                  <span className="text-slate-400 flex items-center gap-2">
                    🏷️ Ürün Kodu:
                  </span>
                  <span className="font-mono font-bold text-amber-400 tracking-wider">{product.code || product.id}</span>
                </div>
              </div>
            </div>

            {/* Inquiries & CTAs */}
            <div className="p-5 rounded-2xl bg-[#0F172A] border border-amber-500/30 space-y-3">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Kırılmaya karşı garantili ambalaj & Uzman montaj desteği</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/${activeBranch.contacts[0].whatsapp}?text=${encodeURIComponent(
                    `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini inceledim. Fiyat ve stok bilgisi rica ediyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Fiyat & Bilgi Al
                </a>

                <a
                  href={`tel:${activeBranch.contacts[0].phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara ({activeBranch.contacts[0].phoneFormatted})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Smart Complementary & Matching Recommendations */}
        <AiComplementaryProducts currentProduct={product} />
      </div>
    </div>
  );
}
