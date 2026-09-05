export interface Review {
  id: string;
  author: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  comment: string;
  productMentioned?: string;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Mehmet K.",
    location: "Onikişubat / Kahramanmaraş",
    projectType: "Villa Salon Aydınlatması",
    rating: 5,
    date: "2026-02-15",
    comment:
      "Evimizin 6 metrelik galeri boşluğu için avize bulmakta çok zorlanıyorduk. Hilal Avize uzman ekibi salonumuzun fotoğraflarını inceleyip harika bir saray tipi kristal avize önerdiler. Taşıması ve montajı da ustaları tarafından sıfır hatayla yapıldı. Işıl ışıl bir salonumuz oldu, emeğinize sağlık!",
    productMentioned: "Padişah 24 Kollu Kristal Avize",
    verified: true,
  },
  {
    id: "r2",
    author: "Mimar Selin T.",
    location: "Dulkadiroğlu / Kahramanmaraş",
    projectType: "Rezidans Daire Projesi",
    rating: 5,
    date: "2026-01-28",
    comment:
      "Mimarlık ofisi olarak projelerimizin aydınlatma ve anahtar-priz seçiminde sürekli Hilal Elektrik Avize ile çalışıyoruz. Hem manyetik ray spotlar hem de modern LED avizeler tam vaktinde şantiyeye ulaştı. Kalite ve esnaflık 10 numara.",
    productMentioned: "Invisa Manyetik Ray Spot ve Solaris LED",
    verified: true,
  },
  {
    id: "r3",
    author: "Ahmet B.",
    location: "Yirmiikigün Mah. / Kahramanmaraş",
    projectType: "Tüm Ev Elektrik ve Avize Yenileme",
    rating: 5,
    date: "2026-02-04",
    comment:
      "Eymen Sitesi'ndeki elektrik şubelerinden Murat Bey tüm priz ve sigorta değişimlerimizi yaptı. Ardından Umut Kent'teki showroomdan cam tablalı mermer sehpa ve dokunmatik LED ayna aldık. İki mağazanın da ilgisi ve samimiyeti mükemmel.",
    productMentioned: "Prestige Cam Anahtar ve Luna LED Ayna",
    verified: true,
  },
  {
    id: "r4",
    author: "Fatma Y.",
    location: "Binevler / Kahramanmaraş",
    projectType: "Oturma Odası ve Antre",
    rating: 5,
    date: "2026-02-20",
    comment:
      "Mavi kadife berjer ve üfleme cam vazo takımı salonuma inanılmaz bir asalet kattı. Fotoğraflardan bile güzel, showroomda canlı görüp dokunarak seçmek harika bir deneyimdi.",
    productMentioned: "Majestic Berjer ve Murano Cam Vazo",
    verified: true,
  },
];
