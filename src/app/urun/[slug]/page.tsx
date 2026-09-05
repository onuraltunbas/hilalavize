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
      name: "Hilal Avize ve Elektrik",
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
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">Anasayfa</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href="/koleksiyonlar" className="hover:text-foreground">Koleksiyonlar</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href={`/kategori/${product.categorySlug}`} className="hover:text-foreground">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-bronze font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-16">
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
                <span className="text-xs font-bold uppercase tracking-wider text-bronze">
                  {product.categoryName}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground mt-1 leading-tight tracking-tight">
                  {product.name}
                </h1>
              </div>

              {/* Technical Specifications */}
              <div className="dgaraj-card p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm">
                {product.dimensions &&
                  product.dimensions.toLowerCase() !== "nope" &&
                  product.categorySlug !== "tablo" &&
                  product.categorySlug !== "aksesuar" && (
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Ruler className="w-3.5 h-3.5 text-bronze" /> Boyutlar / Ölçüler:
                      </span>
                      <span className="font-semibold text-foreground">{product.dimensions}</span>
                    </div>
                  )}
                {product.lightingType && product.lightingType.toLowerCase() !== "nope" && (
                  <div className="flex justify-between py-1 border-b border-border">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-bronze" /> Aydınlatma / Duy Tipi:
                    </span>
                    <span className="font-semibold text-foreground">{product.lightingType}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-muted-foreground flex items-center gap-2">
                    🏷️ Ürün Kodu:
                  </span>
                  <span className="font-mono text-muted-foreground tracking-wider">{product.code || product.id}</span>
                </div>
              </div>

              {/* Aydınlatma Zarafeti Notu */}
              <div className="p-4 rounded-xl bg-surface-subtle border border-border">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  {product.categorySlug === "klasik" && "Kristalin büyüleyici ışık kırma sanatı, mekana sadece aydınlık değil; tavan ve duvarlarda dans eden prizmatik ışıltılar ve asil bir saray zarafeti kazandırır. Odanızın en prestijli odak noktasıdır."}
                  {product.categorySlug === "modern" && "Modern mimari çizgiler ve homojen difüzör teknolojisiyle gözü yormayan, mekana derinlik ve çağdaş bir ferahlık katan heykelsi bir aydınlatma atmosferi sunar."}
                  {product.categorySlug === "aplikler" && "Duvar dokusunu ve mimari detayları vurgulayan yumuşak endirekt ışık yayılımı ile dinlenme saatlerinde huzurlu ve samimi bir loş atmosfer yaratır."}
                  {product.categorySlug === "ray-spot-ve-siva-ustu" && "Işığı istediğiniz tabloya, masaya veya mimari köşeye yönlendirme özgürlüğü vererek mekana dinamik gölge-ışık dengesi ve modern bir stüdyo şıklığı katar."}
                  {product.categorySlug === "tekli-ve-uclu-sarkitlar" && "Yemek masası veya ada tezgahı üzerinde odaklanmış samimi bir ışık huzmesi oluşturarak sohbetlerin ve mekanın sıcaklığını artırır."}
                  {product.categorySlug === "dekoratif-aynalar" && "Mekandaki tüm ışık huzmelerini katlayarak yansıtır; odayı olduğundan çok daha aydınlık, ferah ve derin gösteren vazgeçilmez bir ışık çoğaltıcıdır."}
                  {product.categorySlug === "duvar-ve-masa-saatleri" && "Zamanı gösterirken ışığın metal ve cam üzerindeki zarif yansımalarıyla duvarlarınıza sanatsal bir derinlik ve asalet kazandırır."}
                  {(product.categorySlug === "dekoratif-koltuk-ve-berjerler" || product.categorySlug === "dekoratif-sehpalar") && "Aydınlatma armatürlerinizin ışığı altında kadife dokusu ve pirinç/mermer hatlarıyla parıldayarak yaşam alanınızda kusursuz bir estetik köşesi oluşturur."}
                  {product.categorySlug === "cam-sus-esyalari" && "El işçiliği camın ışıkla buluştuğu an ortaya çıkan renk geçişleri ve pırıltı, evinize butik bir sanat galerisi havası katar."}
                  {product.categorySlug === "anahtar-ve-priz-serileri" && "Temperli lüks cam dokusuyla duvarlarınızda ışığın kontrolünü estetik bir zarafet ve güven deneyimine dönüştürür."}
                  {!["klasik", "modern", "aplikler", "ray-spot-ve-siva-ustu", "tekli-ve-uclu-sarkitlar", "dekoratif-aynalar", "duvar-ve-masa-saatleri", "dekoratif-koltuk-ve-berjerler", "dekoratif-sehpalar", "cam-sus-esyalari", "anahtar-ve-priz-serileri"].includes(product.categorySlug) && "Doğru ışık bir evin ruhudur. Bu özel model; mekanın enerjisini yükseltmek, mobilyalarınızın renklerini en doğal haliyle ortaya çıkarmak ve huzurlu bir yaşam alanı sunmak üzere tasarlanmıştır."}
                </p>
              </div>
            </div>

            {/* Inquiries & CTAs */}
            <div className="p-5 rounded-xl dgaraj-card space-y-3">
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-bronze" />
                <span>Kırılmaya karşı garantili ambalaj ve Uzman montaj desteği</span>
              </div>

              <div>
                <a
                  href={`https://wa.me/${activeBranch.contacts[0].whatsapp}?text=${encodeURIComponent(
                    `Merhaba, Hilal Avize web sitenizden "${product.name}" modelini inceledim. Fiyat teklifi ve detaylı bilgi alabilir miyim?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3.5 px-5 rounded-lg text-sm flex items-center justify-center gap-2.5 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Teklif Al
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
