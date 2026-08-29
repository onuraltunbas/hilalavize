export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "avize" | "montaj" | "elektrik" | "showroom" | "genel";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Evin tavan yüksekliğine ve oda büyüklüğüne göre avize nasıl seçilir?",
    answer:
      "Avize seçiminde odanın eni ve boyunun toplamı (metre cinsinden) yaklaşık avize çapını (cm cinsinden) verir. Örneğin 4x5 metrelik bir salon için 90 cm çapında bir avize idealdir. Standart 2.60m tavanlarda sarkıt payı ayarlanabilir modeller veya tavan göbeğine yakın tasarımlar; 3 metre ve üzeri yüksek tavanlarda ise katlı ve kollu kristal avizeler tercih edilir. Hilal Avize showroomumuzda odanızın fotoğrafına göre ücretsiz mimari danışmanlık veriyoruz.",
    category: "avize",
  },
  {
    id: "faq-2",
    question: "Kristal avizelerin kalitesi nasıl anlaşılır?",
    answer:
      "Kaliteli kristal taşlarda (K9 ve Asfour kristaller) camın içinde hava kabarcığı veya bulanıklık bulunmaz, faset kesimleri kusursuzdur ve ışığı geçirdiğinde prizma gibi gökkuşağı yansımaları üretir. Hilal Avize olarak ürünlerimizde yalnızca birinci sınıf yüksek optik berraklıkta kristaller kullanmaktayız.",
    category: "avize",
  },
  {
    id: "faq-3",
    question: "Satın aldığım avizenin nakliyesi ve montajı nasıl yapılıyor?",
    answer:
      "Tüm avizelerimiz, taşları ve kolları darbelere karşı özel korumalı ambalajlarda taşınır. Montaj aşamasında tavan yapınız (betonarme, alçıpan, asma tavan) incelenerek uygun çelik dübellerle tavana sabitlenir ve tüm ampul/LED kontrolleri yapılarak eksiksiz çalışır vaziyette teslim edilir.",
    category: "montaj",
  },
  {
    id: "faq-4",
    question: "Elektrik şubenizde hangi işlemler ve malzemeler bulunuyor?",
    answer:
      "Hilal Elektrik şubemizde (Şehit Polis Ali Mülazımoğlu Cad. Eymen Sitesi Altı No: 12) lüks temperli cam çerçeveli ve metal anahtar-priz serileri, TSE onaylı sigortalar, kaçak akım röleleri, kablo çeşitleri, spot lambalar ve tesisat aksesuarları yer almaktadır. Ayrıca priz montajı, sigorta değişimi ve tesisat uygulama hizmetleri sunmaktayız.",
    category: "elektrik",
  },
  {
    id: "faq-5",
    question: "İki şubenizin çalışma saatleri ve adresleri nedir?",
    answer:
      "Her iki şubemiz de Kahramanmaraş Onikişubat Yirmiikigün Mahallesi'ndedir. Pazar hariç haftanın 6 günü 09:00 - 17:00 saatleri arasında kesintisiz hizmet vermekteyiz. Avize & Aksesuar Showroomumuz Umut Kent Sitesi F Blok altı No: 4A'da, Elektrik Şubemiz ise Eymen Sitesi altı No: 12'dedir.",
    category: "showroom",
  },
  {
    id: "faq-6",
    question: "İnternet sitesi üzerinden doğrudan sipariş verebilir miyim?",
    answer:
      "Web sitemiz ürünlerimizi canlı incelemeniz, mekanınıza en uygun modeli danışmanlarımızla belirlemeniz ve showroom ziyareti yapmanız için vitrin niteliğindedir. Beğendiğiniz ürünlerin detay sayfasından 'WhatsApp ile Bilgi / Fiyat Al' butonuna tıklayarak veya telefonla arayarak anında iletişime geçebilirsiniz.",
    category: "genel",
  },
  {
    id: "faq-7",
    question: "Toplu konut, villa veya otel projeleri için özel fiyatlandırma var mı?",
    answer:
      "Evet! Mimarlar, inşaat firmaları ve toplu alım yapan müşterilerimiz için proje bazlı özel fiyatlandırma, teknik pafta desteği ve özel ölçü avize imalatı sunuyoruz.",
    category: "genel",
  },
];
