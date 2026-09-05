export interface InstallationProject {
  id: string;
  src: string;
  title: string;
  location: string;
  category: "salon" | "yemek-odasi" | "villa" | "modern-led" | "klasik";
  categoryLabel: string;
  description: string;
}

export const INSTALLATION_PROJECTS: InstallationProject[] = [
  {
    "id": "mekan-1",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-01.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #1",
    "location": "Üngüt / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-2",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-02.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #2",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-3",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-03.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #3",
    "location": "Tekerek / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-4",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-04.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #4",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-5",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-05.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #5",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-6",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-06.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #6",
    "location": "Binevler / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-7",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-07.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #7",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-8",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-08.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #8",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-9",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-09.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #9",
    "location": "Üngüt / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-10",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-10.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #10",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-11",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-11.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #11",
    "location": "Tekerek / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-12",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-12.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #12",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-13",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-13.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #13",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-14",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-14.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #14",
    "location": "Binevler / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-15",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-15.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #15",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-16",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-16.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #16",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-17",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-17.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #17",
    "location": "Üngüt / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-18",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-18.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #18",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-19",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-19.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #19",
    "location": "Tekerek / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-20",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-20.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #20",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-21",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-21.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #21",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-22",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-22.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #22",
    "location": "Binevler / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-23",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-23.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #23",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-24",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-24.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #24",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-25",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-25.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #25",
    "location": "Üngüt / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-26",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-26.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #26",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-27",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-27.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #27",
    "location": "Tekerek / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-28",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-28.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #28",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-29",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-29.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #29",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-30",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-30.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #30",
    "location": "Binevler / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-31",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-31.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #31",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-32",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-32.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #32",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-33",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-33.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #33",
    "location": "Üngüt / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-34",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-34.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #34",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-35",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-35.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #35",
    "location": "Tekerek / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-36",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-36.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #36",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-37",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-37.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #37",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-38",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-38.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #38",
    "location": "Binevler / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-39",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-39.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #39",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-40",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-40.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #40",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-41",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-41.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #41",
    "location": "Üngüt / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-42",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-42.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #42",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-43",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-43.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #43",
    "location": "Tekerek / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-44",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-44.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #44",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-45",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-45.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #45",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-46",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-46.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #46",
    "location": "Binevler / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-47",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-47.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #47",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-48",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-48.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #48",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-49",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-49.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #49",
    "location": "Üngüt / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-50",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-50.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #50",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-51",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-51.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #51",
    "location": "Tekerek / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-52",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-52.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #52",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-53",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-53.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #53",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-54",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-54.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #54",
    "location": "Binevler / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-55",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-55.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #55",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-56",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-56.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #56",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-57",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-57.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #57",
    "location": "Üngüt / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-58",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-58.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #58",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-59",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-59.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #59",
    "location": "Tekerek / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-60",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-60.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #60",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-61",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-61.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #61",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-62",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-62.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #62",
    "location": "Binevler / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-63",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-63.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #63",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-64",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-64.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #64",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-65",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-65.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #65",
    "location": "Üngüt / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-66",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-66.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #66",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-67",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-67.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #67",
    "location": "Tekerek / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-68",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-68.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #68",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-69",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-69.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #69",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-70",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-70.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #70",
    "location": "Binevler / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-71",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-71.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #71",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-72",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-72.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #72",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-73",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-73.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #73",
    "location": "Üngüt / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-74",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-74.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #74",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-75",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-75.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #75",
    "location": "Tekerek / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-76",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-76.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #76",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-77",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-77.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #77",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-78",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-78.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #78",
    "location": "Binevler / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-79",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-79.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #79",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-80",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-80.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #80",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-81",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-81.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #81",
    "location": "Üngüt / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-82",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-82.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #82",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-83",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-83.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #83",
    "location": "Tekerek / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-84",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-84.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #84",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-85",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-85.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #85",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-86",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-86.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #86",
    "location": "Binevler / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-87",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-87.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #87",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-88",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-88.jpg",
    "title": "Modern Geometrik LED Halka Salon Avizesi #88",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-89",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-89.jpg",
    "title": "Klasik Baccarat Kollarla Saray Tipi Aydınlatma #89",
    "location": "Üngüt / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-90",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-90.jpg",
    "title": "Minimalist Mutfak Adası Aydınlatma Tasarımı #90",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-91",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-91.jpg",
    "title": "Geniş Salon Katlı Kristal Prizma Avize #91",
    "location": "Tekerek / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-92",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-92.jpg",
    "title": "Modern Bronz Detaylı Yemek Odası Sarkıtı #92",
    "location": "Yirmiikigün / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Yirmiikigün / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-93",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-93.jpg",
    "title": "Oturma Odası Kademeli Işık LED Avize #93",
    "location": "Boğaziçi / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Boğaziçi / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-94",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-94.jpg",
    "title": "Asil Şampanya Kristal Taşlı Kollu Avize #94",
    "location": "Binevler / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Binevler / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-95",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-95.jpg",
    "title": "Çağdaş Çizgili Lineer Yemek Masası Sarkıtı #95",
    "location": "Dulkadiroğlu / Kahramanmaraş",
    "category": "salon",
    "categoryLabel": "Salon ve Oturma Alanı",
    "description": "Hilal Avize montaj ekibimiz tarafından Dulkadiroğlu / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-96",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-96.jpg",
    "title": "Lüks Daire Özel Proje Kristal Avize Montajı #96",
    "location": "Onikişubat / Kahramanmaraş",
    "category": "yemek-odasi",
    "categoryLabel": "Yemek Masası ve Ada",
    "description": "Hilal Avize montaj ekibimiz tarafından Onikişubat / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-97",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-97.jpg",
    "title": "Özel Tasarım Salon Kristal Avize Montajı #97",
    "location": "Üngüt / Kahramanmaraş",
    "category": "villa",
    "categoryLabel": "Villa ve Yüksek Tavan",
    "description": "Hilal Avize montaj ekibimiz tarafından Üngüt / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-98",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-98.jpg",
    "title": "Yemek Masası Üstü Lüks Sarkıt Uygulaması #98",
    "location": "Bağlarbaşı / Kahramanmaraş",
    "category": "modern-led",
    "categoryLabel": "Modern LED Aydınlatma",
    "description": "Hilal Avize montaj ekibimiz tarafından Bağlarbaşı / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  },
  {
    "id": "mekan-99",
    "src": "/images/aydinlattigimiz-mekanlar/mekan-99.jpg",
    "title": "Villa Girişi Yüksek Tavan Kristal Avize #99",
    "location": "Tekerek / Kahramanmaraş",
    "category": "klasik",
    "categoryLabel": "Klasik Kristal Saray Serisi",
    "description": "Hilal Avize montaj ekibimiz tarafından Tekerek / Kahramanmaraş bölgesindeki seçkin bir yaşam alanına başarıyla uygulanan özel aydınlatma tasarımı."
  }
];
