import React from "react";
import Image from "next/image";
import Link from "next/link";
import { History, Eye, Target, CheckCircle2, ArrowRight } from "lucide-react";

export function BrandHeritageSection() {
  const pillars = [
    {
      icon: History,
      title: "Köklü Tarihçe ve Tecrübe",
      description:
        "Kahramanmaraş'ta elektrik tesisatı ve aydınlatma sektöründe yıllar önce attığımız adımlar; bugün Onikişubat'ta avize mağazamız ve elektrik malzemesi şubemiz ile toptanda, perakendede ve her türlü proje işlerinde bölgenin en güvenilir çözüm ortağına dönüştü. Dürüst esnaflık, profesyonel usta ve işçilik hizmeti ile kaliteli malzeme anlayışını nesiller boyu yaşatıyoruz.",
      highlight: "Toptan, Perakende ve Proje İşleri",
    },
    {
      icon: Eye,
      title: "Vizyonumuz",
      description:
        "Aydınlatmayı yalnızca karanlığı aydınlatan bir araç değil; yaşam alanlarına ruh, derinlik ve asalet katan mimari bir sanat eseri olarak görüyoruz. Dokunduğumuz her mekanda zamansız zarafeti ve üst düzey ışık konforunu standart kılmayı hedefliyoruz.",
      highlight: "Zamansız Mimari Zarafet",
    },
    {
      icon: Target,
      title: "Misyonumuz",
      description:
        "Kararmayan birinci sınıf kaplamalar, ışığı kusursuz kıran saf K9 kristaller ve kaliteli elektrik malzemeleri ile ömürlük ürünler sunmak. Ücretsiz yerinde keşiften anahtar teslim güvenli montaja kadar her aşamada koşulsuz memnuniyet sağlamak.",
      highlight: "%100 Müşteri Memnuniyeti",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight font-heading">
            Aydınlatmanın Sanata Dönüştüğü Mekanlar.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="dgaraj-card p-7 sm:p-9 flex flex-col justify-between relative group hover:border-bronze transition-all duration-300"
              >
                <div>
                  {/* Top Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-border flex items-center justify-center text-bronze group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 font-heading">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Editorial Showcase Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-surface-subtle border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png"
                alt="Hilal Elektrik & Avize"
                width={935}
                height={267}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-foreground font-heading max-w-2xl">
              Bir Kahve Eşliğinde Hayalinizdeki Aydınlatmayı Seçebilirsiniz
            </h4>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/hakkimizda"
              className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              Hikayemizi İnceleyin
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
