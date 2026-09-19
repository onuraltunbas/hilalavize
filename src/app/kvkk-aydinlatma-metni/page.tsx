import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Hilal Elektrik & Avize Kahramanmaraş",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <div className="py-16 sm:py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed">
        
        {/* Başlık */}
        <div className="space-y-4 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-border text-xs font-semibold text-bronze">
            <ShieldCheck className="w-3.5 h-3.5" /> 6698 Sayılı Kanun Kapsamında
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-heading">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-sm text-muted-foreground">
            Hilal Elektrik & Avize | Yürürlük Tarihi: 2026
          </p>
        </div>

        <section className="space-y-3">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, veri sorumlusu sıfatıyla <strong>Hilal Elektrik & Avize</strong> (&ldquo;Şirket&rdquo;) olarak web sitemizi (<strong>hilalelektrikavize.com</strong>) ziyaret eden ve hizmetlerimizden yararlanan tüm değerli müşterilerimizin ve ziyaretçilerimizin kişisel verilerinin gizliliğine ve güvenliğine en üst düzeyde önem vermekteyiz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Veri Sorumlusunun Kimliği</h2>
          <p className="p-4 rounded-xl bg-surface border border-border text-sm">
            <strong>Unvan:</strong> Hilal Elektrik & Avize (Hilal Avize Showroom)<br />
            <strong>Adres:</strong> Yirmiikigün Mah. 91056. Sok. Umut Kent Sitesi F Blok No: 4A Onikişubat / Kahramanmaraş<br />
            <strong>Telefon:</strong> 0505 380 13 50 / 0344 215 54 54<br />
            <strong>E-posta:</strong> info@hilalelektrikavize.com
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. İşlenen Kişisel Veriler ve İşlenme Amaçları</h2>
          <p>
            Web sitemiz üzerinden toplanan veriler şunlardır:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm">
            <li><strong>İletişim ve Talep Verileri:</strong> WhatsApp veya iletişim butonları üzerinden ilettiğiniz ad, telefon numarası ve ürün talepleriniz (yalnızca talebinize yanıt vermek ve sipariş/fiyat teklifi hazırlamak amacıyla).</li>
            <li><strong>Dijital Trafik ve Analitik Verileri:</strong> Ziyaret edilen sayfalar, sitede geçirilen süre, tarayıcı türü, genel konum (şehir/ülke) ve yönlendiren site bilgileri (Google Analytics ve Vercel Analytics aracılığıyla tamamen anonimleştirilmiş ve istatistiki amaçlarla).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz hiçbir surette üçüncü taraf ticari şirketlere pazarlama veya reklam amacıyla satılmaz ya da devredilmez. Analitik verileri anonim şekilde ilgili altyapı sağlayıcıları (Google / Vercel) sunucularında yasal sınırlar dahilinde işlenmektedir.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">4. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
          <p>
            Kanun kapsamında veri sahibi olarak dilediğiniz zaman Şirketimize başvurarak:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
            <li>Verilerin silinmesini veya yok edilmesini talep etme haklarına sahipsiniz.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Çerez kullanımı ve tercihlerinizin yönetimiyle ilgili ayrıntılı bilgi için{" "}
            <Link href="/cerez-politikasi" className="text-bronze underline font-medium hover:text-foreground">
              Çerez Politikamızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}
