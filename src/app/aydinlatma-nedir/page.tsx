import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Lightbulb,
  Sparkles,
  Layers,
  Sun,
  Ruler,
  CheckCircle2,
  MessageCircle,
  Eye,
  Compass,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Aydınlatma Nedir? Yaşam Alanlarında Işığın Önemi | Hilal Avize",
  description:
    "Aydınlatma nedir, neden önemlidir? Ev dekorasyonunda doğru ışık rengi (Kelvin), avize seçimi, lümen hesabı ve aydınlatma katmanları hakkında uzman rehberi.",
};

export default function LightingGuidePage() {
  const showroom = COMPANY_DATA.branches[0];

  const lightingLayers = [
    {
      title: "1. Genel (Ortam) Aydınlatması",
      icon: Sun,
      desc: "Mekanın genelini dengeli ve homojen bir şekilde aydınlatan temel ışık kaynağıdır. Salonların merkezinde yer alan kristal veya modern avizeler bu katmanın ana aktörüdür.",
    },
    {
      title: "2. Görev (Çalışma) Aydınlatması",
      icon: Lightbulb,
      desc: "Yemek masası üstü, mutfak tezgahı veya okuma köşesi gibi spesifik alanlara odaklanan fonksiyonel sarkıtlar ve yönlendirilebilir spotlardır.",
    },
    {
      title: "3. Vurgu ve Derinlik Aydınlatması",
      icon: Layers,
      desc: "Tabloları, duvar dokularını, nişleri veya mimari detayları öne çıkaran şık duvar aplikleri ve ray spot sistemleridir.",
    },
    {
      title: "4. Dekoratif Aydınlatma",
      icon: Sparkles,
      desc: "Işık kapalıyken dahi birer sanat eseri gibi duran K9 kristal taşlar, el üfleme camlar ve pirinç döküm detaylarla mekana prestij katan armatürlerdir.",
    },
  ];

  const kelvinGuides = [
    {
      kelvin: "2700K - 3000K",
      name: "Sıcak Sarı / Günışığı",
      atmosphere: "Huzurlu, Dinlendirici, Sıcak",
      rooms: "Salon, Oturma Odası, Yatak Odası, Dinlenme Alanları",
      colorBadge: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    },
    {
      kelvin: "4000K",
      name: "Doğal Beyaz (Ilık Işık)",
      atmosphere: "Ferah, Net, Canlandırıcı",
      rooms: "Mutfak, Banyo, Çalışma Odası, Giyinme Odası",
      colorBadge: "bg-blue-500/15 text-blue-500 border-blue-500/30",
    },
    {
      kelvin: "6500K",
      name: "Soğuk Beyaz",
      atmosphere: "Yüksek Odaklanma, Teknik",
      rooms: "Ofis, Atölye, Garaj, Teknik Odalar",
      colorBadge: "bg-slate-500/20 text-slate-500 border-slate-500/30",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Aydınlatma Nedir ve Neden Bu Kadar Önemlidir?
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Işık sadece karanlığı gidermek için bir araç değildir; bir mekanın ruhunu, mimari hatlarını, renklerini ve orada yaşayan insanların enerjisini belirleyen en güçlü dekorasyon unsurudur.
          </p>
        </div>

        {/* Section 1: Visual ve Core Definition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-surface-subtle border border-border shadow-sm">
            <Image
              src="/images/1920x1080_hero_showroom.jpg"
              alt="Hilal Avize Showroom Doğru Aydınlatma"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-5 text-muted-foreground text-sm leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Evinizin En Pahalı Mobilyası Bile Yanlış Işıkta Sönük Kalır
            </h2>
            <p>
              İç mimaride sıkça söylenen altın bir kural vardır: <strong className="text-foreground">&ldquo;Bir mekanı gösteren eşyalar değil, o eşyaların üzerine düşen ışığın kalitesidir.&rdquo;</strong>
            </p>
            <p>
              Yanlış konumlandırılmış, aşırı parlak veya yetersiz bir aydınlatma; en şık salonları soğuk ve rahatsız hissettirebilirken, doğru hesaplanmış bir aydınlatma planı en mütevazı odaları bile ferah, lüks ve huzur verici bir yaşam alanına dönüştürür.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl dgaraj-card space-y-1">
                <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze" /> Derinlik ve Hacim
                </div>
                <p className="text-[11px] text-muted-foreground">Odanızı olduğundan daha geniş ve ferah gösterir.</p>
              </div>

              <div className="p-3.5 rounded-xl dgaraj-card space-y-1">
                <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze" /> Doğru Renk Algısı (CRI)
                </div>
                <p className="text-[11px] text-muted-foreground">Koltuk, halı ve duvar renklerini en canlı haliyle yansıtır.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 4 Layers of Lighting */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Kusursuz Bir Mekan İçin 4 Aydınlatma Katmanı
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Tek bir tavan lambası yerine katmanlı aydınlatma kullanarak mekana derinlik ve şıklık kazandırın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lightingLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div key={idx} className="dgaraj-card p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-bronze">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{layer.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Kelvin ve Color Temperature Guide */}
        <div className="dgaraj-card p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Kelvin (Işık Rengi) Nedir? Hangi Odaya Hangi Işık?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Kelvin (K), ışığın rengini ve sıcaklığını ifade eder. Doğru odada doğru Kelvin derecesini seçmek hem göz sağlığı hem de mekan konforu için kritik öneme sahiptir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {kelvinGuides.map((guide, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-surface-subtle border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${guide.colorBadge}`}>
                    {guide.kelvin}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{guide.name}</h3>
                  <div className="text-xs text-bronze font-medium mt-0.5">{guide.atmosphere}</div>
                </div>
                <div className="pt-2 border-t border-border text-xs space-y-1">
                  <span className="text-muted-foreground font-semibold">Tavsiye Edilen Alanlar:</span>
                  <p className="text-foreground/90">{guide.rooms}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Chandelier Sizing Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="editorial-tag">
              <Ruler className="w-3.5 h-3.5 text-bronze" />
              Pratik Seçim Formülü
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Odanıza Göre Doğru Avize Boyutu Nasıl Hesaplanır?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Küçük bir odaya dev bir avize takmak basık bir his yaratırken, geniş bir salona küçük bir avize takmak yetersiz kalır.
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl dgaraj-card space-y-1.5">
                <div className="font-bold text-foreground">💡 Pratik Avize Çapı Formülü:</div>
                <p className="text-muted-foreground leading-relaxed">
                  Odanızın eni ve boyunu metre cinsinden toplayın, çıkan sayıyı <strong className="text-foreground">6 ile çarpın</strong>. Çıkan sonuç (cm) ideal avize çapınızı verir.
                </p>
                <div className="text-[11px] text-bronze font-medium">
                  Örn: 4m x 5m oda = 4 + 5 = 9 → 9 x 6 = İdeal avize çapı yaklaşık 54 cm&apos;dir. (Geniş salonlarda 50-60 cm arası modeller tercih edilebilir).
                </div>
              </div>

              <div className="p-4 rounded-xl dgaraj-card space-y-1.5">
                <div className="font-bold text-foreground">💡 Yerden Yükseklik Kuralı:</div>
                <p className="text-muted-foreground leading-relaxed">
                  Standart tavanlarda avizenin en alt noktası ile zemin arasında en az <strong className="text-foreground">200-210 cm</strong> mesafe olmalıdır. Yemek masası üzerinde ise masadan <strong className="text-foreground">75-85 cm</strong> yukarıda olmalıdır.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation CTA Box */}
          <div className="dgaraj-card p-6 sm:p-8 space-y-5 bg-surface">
            <div className="space-y-2">
              <span className="editorial-tag">
                <Compass className="w-3.5 h-3.5 text-bronze" />
                Ücretsiz Aydınlatma Danışmanlığı
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Evinizin Fotoğrafını Gönderin, Doğru Avizeyi Beraber Belirleyelim!
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hilal Avize Kahramanmaraş uzmanları olarak; tavan yüksekliğinize, mobilya tarzınıza ve oda metrekaresine en uygun aydınlatma önerilerini ücretsiz sunuyoruz.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, salonum/odam için aydınlatma ve avize seçimi konusunda danışmanlık almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp&apos;tan Oda Fotoğrafı Gönder
              </a>

              <Link
                href="/koleksiyonlar"
                className="w-full bg-primary text-primary-foreground hover:opacity-90 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-border shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 text-bronze" />
                Tüm Koleksiyonlarımızı İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}