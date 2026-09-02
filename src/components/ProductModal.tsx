"use client";

import { Product } from "@/data/products";
import { ProductGallery } from "@/components/ProductGallery";
import {
  X,
  MessageCircle,
  Phone,
  Ruler,
  Lightbulb,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl p-6 sm:p-8 text-foreground animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-surface-subtle text-muted-foreground hover:text-foreground hover:bg-border transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image Gallery */}
          <div>
            <ProductGallery
              images={product.images || [product.image]}
              productName={product.name}
              customBadge={product.badge}
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs text-bronze font-semibold uppercase tracking-wider">
                {product.categoryName}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mt-1">
                {product.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-surface-subtle p-3.5 rounded-xl border border-border space-y-2 text-xs">
              {product.dimensions && product.dimensions.toLowerCase() !== "nope" && (
                <div className="flex justify-between py-1 border-b border-border">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-bronze" /> Boyutlar / Ölçüler
                  </span>
                  <span className="font-semibold text-foreground">{product.dimensions}</span>
                </div>
              )}
              {product.lightingType && product.lightingType.toLowerCase() !== "nope" && (
                <div className="flex justify-between py-1 border-b border-border">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-bronze" /> Işık / Duy
                  </span>
                  <span className="font-semibold text-foreground">{product.lightingType}</span>
                </div>
              )}
              <div className="flex justify-between py-1 text-xs">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  🏷️ Ürün Kodu
                </span>
                <span className="font-mono text-muted-foreground">{product.code || product.id}</span>
              </div>
            </div>

            {/* Ürün Notu - Aydınlatmanın Güzelliği & Mekan Uyumu */}
            <div className="p-3.5 rounded-xl bg-surface-subtle border border-border space-y-1.5">
              <div className="text-xs font-bold text-bronze flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-bronze" /> Ürün Notu & Aydınlatma Zarafeti
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
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

            {/* Features */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-bronze uppercase tracking-wider">
                Öne Çıkan Ayrıcalıklar:
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/905053801350?text=${encodeURIComponent(
                  `Merhaba, Hilal Avize'den "${product.name}" hakkında detaylı bilgi ve fiyat almak istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Fiyat & Bilgi Al
              </a>

              <a
                href="tel:+905053801350"
                className="w-full bg-surface-subtle hover:bg-border text-foreground font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-border"
              >
                <Phone className="w-3.5 h-3.5 text-bronze" />
                Showroomu Telefonla Ara (0505 380 13 50)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
