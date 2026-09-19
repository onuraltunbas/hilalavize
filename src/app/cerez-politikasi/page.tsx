import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, Cookie, BarChart3, Settings, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Çerez Politikası | Hilal Elektrik & Avize Kahramanmaraş",
  description: "Web sitemizde kullanılan teknik ve analitik çerezler hakkında 6698 sayılı KVKK uyumlu bilgilendirme.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 sm:py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed">
        
        {/* Başlık */}
        <div className="space-y-4 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-border text-xs font-semibold text-bronze">
            <Shield className="w-3.5 h-3.5" /> KVKK & Yasal Mevzuat Uyumlu
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-heading">
            Çerez (Cookie) Politikası
          </h1>
          <p className="text-sm text-muted-foreground">
            Son Güncelleme: 19 Eylül 2026 | Hilal Elektrik & Avize
          </p>
        </div>

        {/* Giriş */}
        <section className="space-y-3">
          <p>
            Hilal Elektrik & Avize (&ldquo;Şirket&rdquo;) olarak web sitemizi ziyaret eden kullanıcılarımızın gizliliğine ve kişisel verilerinin korunmasına büyük önem vermekteyiz. Bu Çerez Politikası; web sitemizde (<strong>hilalelektrikavize.com</strong>) hangi çerezlerin kullanıldığını, bunların hangi amaçlarla işlendiğini ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklamak amacıyla 6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) kapsamında hazırlanmıştır.
          </p>
        </section>

        {/* Çerez Nedir */}
        <section className="space-y-3 p-5 rounded-2xl bg-surface border border-border">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Cookie className="w-5 h-5 text-bronze" /> 1. Çerez (Cookie) Nedir?
          </h2>
          <p className="text-sm">
            Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler web sitemizin daha verimli çalışmasını sağlamak, sayfalar arası gezinmeyi kolaylaştırmak ve ziyaretçi istatistiklerini anonim olarak analiz etmek amacıyla kullanılmaktadır.
          </p>
        </section>

        {/* Sitemizde Kullanılan Çerez Türleri */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            2. Web Sitemizde Kullanılan Çerezler ve Amaçları
          </h2>

          <div className="grid gap-4">
            {/* Zorunlu Çerezler */}
            <div className="p-5 rounded-xl bg-surface border border-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground flex items-center gap-2 text-base">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> A. Zorunlu ve Teknik Çerezler
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                  Her Zaman Aktif
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sitenin temel işlevlerini güvenli ve kesintisiz şekilde yerine getirebilmesi için zorunludur. Sayfa geçişleri, form güvenliği ve çerez onay tercihinizin hatırlanması bu çerezlerle sağlanır. Bu çerezlerin kapatılması sitenin bazı bölümlerinin çalışmamasına neden olabilir.
              </p>
            </div>

            {/* Performans ve Analitik Çerezleri */}
            <div className="p-5 rounded-xl bg-surface border border-border space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground flex items-center gap-2 text-base">
                  <BarChart3 className="w-4 h-4 text-bronze" /> B. Performans ve Analitik Çerezleri (Vercel & Google Analytics)
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-bronze/10 text-bronze">
                  İstatistik & İyileştirme
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ziyaretçilerimizin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. En çok ziyaret edilen avize sayfaları, sitede geçirilen süre, ziyaretçi yoğunluğunun olduğu genel şehirler ve kullanılan cihaz türleri (mobil/masaüstü) tamamen <strong>anonim ve toplu (aggregated)</strong> olarak ölçümlenir. Hiçbir ziyaretçinin kimliği doğrudan tespit edilmez, IP adresleri maskelenir.
              </p>
            </div>
          </div>
        </section>

        {/* Çerezlerin Yönetimi */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Settings className="w-5 h-5 text-bronze" /> 3. Çerez Tercihlerini Nasıl Yönetebilirsiniz?
          </h2>
          <p>
            Web sitemize ilk giriş yaptığınızda karşınıza çıkan çerez bilgilendirme paneli üzerinden dilediğiniz zaman tercihlerinizi belirleyebilirsiniz. Ayrıca kullandığınız internet tarayıcısının (Google Chrome, Safari, Edge, Firefox vb.) ayarlar menüsünden çerezleri silebilir, engelleyebilir veya her çerez öncesinde uyarı verilmesini sağlayabilirsiniz.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
            <li><strong>Google Chrome:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve diğer site verileri</li>
            <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Tüm Çerezleri Engelle / Yönet</li>
            <li><strong>Mozilla Firefox:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</li>
          </ul>
        </section>

        {/* İletişim ve Haklar */}
        <section className="space-y-3 pt-6 border-t border-border">
          <h2 className="text-lg font-bold text-foreground">4. İletişim ve Haklarınız</h2>
          <p>
            Kişisel verilerinizin işlenmesiyle ilgili detaylı bilgiye{" "}
            <Link href="/kvkk-aydinlatma-metni" className="text-bronze underline font-medium hover:text-foreground">
              KVKK Aydınlatma Metnimizden
            </Link>{" "}
            ulaşabilir; çerezler ve gizlilik konusundaki tüm sorularınız için bizimle doğrudan{" "}
            <Link href="/iletisim" className="text-bronze underline font-medium hover:text-foreground">
              iletişim sayfamız
            </Link>{" "}
            veya <span className="text-foreground font-semibold">0505 380 13 50</span> üzerinden irtibata geçebilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}
