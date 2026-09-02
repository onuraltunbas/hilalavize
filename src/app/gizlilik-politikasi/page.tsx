import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Hilal Elektrik Avize Aksesuar",
  description: "Hilal Elektrik Avize Aksesuar gizlilik politikası ve kişisel verilerin korunması ilkeleri.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-muted-foreground text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Gizlilik Politikası
        </h1>
        <p className="text-xs text-muted-foreground">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">1. Genel Bilgilendirme</h2>
          <p>
            Hilal Elektrik Avize Aksesuar (&ldquo;İşletme&rdquo;) olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine ve kişisel verilerinin güvenliğine en üst düzeyde önem veriyoruz. Bu politika, sitemizi ziyaret ettiğinizde toplanabilecek verilerin kapsamını ve kullanım amaçlarını açıklamaktadır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">2. Toplanan Bilgiler ve Kullanım Amacı</h2>
          <p>
            Web sitemiz üzerinden doldurduğunuz danışmanlık veya iletişim formları vasıtasıyla paylaştığınız isim, telefon ve mekan tercihleri gibi bilgiler; yalnızca sizlere doğru avize ve aydınlatma danışmanlığı sunmak, taleplerinizi yanıtlamak ve mağaza randevularınızı organize etmek amacıyla kullanılır.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">3. Üçüncü Taraflarla Paylaşım</h2>
          <p>
            Kişisel verileriniz, yasal zorunluluklar haricinde hiçbir üçüncü taraf kişi veya kurumla ticari amaçla paylaşılmaz, satılmaz veya kiralanmaz.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">4. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili her türlü soru ve talebiniz için Onikişubat Kahramanmaraş şubelerimizden veya telefon hatlarımızdan bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
