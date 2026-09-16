"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Upload,
  ImagePlus,
  Ruler,
  Lightbulb,
  Tag,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Trash2,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ShieldAlert,
  ArrowRight,
  Eye,
  Check,
} from "lucide-react";

interface UploadedImage {
  name: string;
  base64: string;
  previewUrl: string;
}

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsername?: string;
  onProductAdded: (newProduct: any) => void;
}

const CATEGORIES_DATA = [
  {
    slug: "tekli-avizeler",
    name: "Cam Sarkıt Avizeler",
    shortName: "Sarkıtlar",
    prefix: "TKL",
    description: "Mutfak adası, yemek masası ve modern sarkıt modelleri",
    icon: "🏮",
  },
  {
    slug: "aplik-ve-spotlar",
    name: "Aplik ve Spot Aydınlatma",
    shortName: "Aplik & Spot",
    prefix: "ASP",
    description: "Duvar aplikleri, tavan spotları ve mimari ray sistemleri",
    icon: "💡",
  },
  {
    slug: "yerli-urunler",
    name: "Özel İmalat Avizeler",
    shortName: "Özel İmalat",
    prefix: "YRL",
    description: "Özel ölçü galeri boşluğu, merdiven ve şamdan avizeler",
    icon: "🏛️",
  },
  {
    slug: "ledli-grup",
    name: "Modern LED Avizeler",
    shortName: "Modern LED",
    prefix: "LED",
    description: "Modern halka, geometrik ve mimari LED sarkıtlar",
    icon: "✨",
  },
  {
    slug: "klasik",
    name: "Klasik Kristal Avizeler",
    shortName: "Klasik Kristal",
    prefix: "KLS",
    description: "Saray tipi Baccarat, Maria Theresa ve kollu kristaller",
    icon: "👑",
  },
  {
    slug: "aksesuar",
    name: "Aksesuarlar",
    shortName: "Aksesuarlar",
    prefix: "AKS",
    description: "Lüks konsol objeleri, el yapımı çini sanatı ve aynalar",
    icon: "🏺",
  },
];

export default function AddProductModal({
  isOpen,
  onClose,
  currentUsername,
  onProductAdded,
}: AddProductModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [dimensions, setDimensions] = useState<string>("");
  const [lightingType, setLightingType] = useState<string>("");
  const [badge, setBadge] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isGeneratingCode, setIsGeneratingCode] = useState<boolean>(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [createdProduct, setCreatedProduct] = useState<any | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAuthorized = currentUsername?.toLowerCase().trim() === "onur";

  // Modal kapandığında sıfırla
  const handleResetAndClose = () => {
    setCurrentStep(1);
    setImages([]);
    setDimensions("");
    setLightingType("");
    setBadge("");
    setSelectedCategory("");
    setGeneratedCode("");
    setIsSubmitting(false);
    setErrorMsg("");
    setCreatedProduct(null);
    onClose();
  };

  // Yeni ürün ekleme formunu temizle (modalı açık tutarak)
  const handleResetForNew = () => {
    setCurrentStep(1);
    setImages([]);
    setDimensions("");
    setLightingType("");
    setBadge("");
    setSelectedCategory("");
    setGeneratedCode("");
    setIsSubmitting(false);
    setErrorMsg("");
    setCreatedProduct(null);
  };

  // Kategori seçildiğinde veya 4. adıma geçildiğinde kodu üret
  useEffect(() => {
    if (currentStep === 4 && selectedCategory) {
      setIsGeneratingCode(true);
      setErrorMsg("");
      fetch(`/api/admin/products/add?categorySlug=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.code) {
            setGeneratedCode(data.code);
          } else {
            setErrorMsg(data.error || "Kod üretilemedi.");
          }
        })
        .catch((err) => {
          console.error("Kod üretme hatası:", err);
          setErrorMsg("Kod üretilirken bağlantı hatası oluştu.");
        })
        .finally(() => {
          setIsGeneratingCode(false);
        });
    }
  }, [currentStep, selectedCategory]);

  // Dosya Yükleme İşleyicisi
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setImages((prev) => [
          ...prev,
          {
            name: file.name,
            base64,
            previewUrl: base64,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Görsel Silme
  const removeImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Görseli Kapak (İlk sıraya) Yapma
  const makeCoverImage = (indexToCover: number) => {
    setImages((prev) => {
      const target = prev[indexToCover];
      const rest = prev.filter((_, idx) => idx !== indexToCover);
      return [target, ...rest];
    });
  };

  // Ürünü Onayla ve Kaydet
  const handleSubmitProduct = async () => {
    if (!isAuthorized) {
      setErrorMsg("Bu işlemi yapmaya yetkiniz bulunmamaktadır.");
      return;
    }

    if (images.length === 0) {
      setErrorMsg("Lütfen en az bir görsel yükleyin.");
      return;
    }

    if (!selectedCategory) {
      setErrorMsg("Lütfen bir kategori seçin.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: currentUsername,
          categorySlug: selectedCategory,
          dimensions: dimensions.trim(),
          lightingType: lightingType.trim(),
          badge: badge.trim(),
          images: images.map((img) => ({
            name: img.name,
            base64: img.base64,
          })),
        }),
      });

      const data = await res.json();
      if (data.success && data.product) {
        setCreatedProduct(data.product);
        onProductAdded(data.product);
      } else {
        setErrorMsg(data.error || "Ürün kaydedilirken bir hata oluştu.");
      }
    } catch (err) {
      console.error("Ürün ekleme hatası:", err);
      setErrorMsg("Sunucuyla bağlantı kurulamadı.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Yetkisiz Giriş Engeli
  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl border border-red-100 space-y-4">
          <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Yetkisiz Erişim</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Ürün ekleme yetkisi yalnızca <strong>onur</strong> kullanıcı adına tanımlıdır.
          </p>
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E6E5E0] overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* ÜST BAŞLIK & ADIMLAR */}
        <div className="bg-[#FAF9F6] border-b border-[#E6E5E0] px-5 sm:px-8 py-4 sm:py-5 shrink-0">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#93826E] text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#141414]">
                  Yeni Ürün Ekleme Sihirbazı
                </h2>
                <p className="text-[11px] text-[#8C8B87]">
                  Adım adım ürün özelliklerini tanımlayın ve sisteme aktarın
                </p>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              disabled={isSubmitting}
              className="p-2 rounded-xl text-[#8C8B87] hover:text-[#141414] hover:bg-[#EAE9E4] transition-colors cursor-pointer"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* İLERLEME ADIMLARI (1 - 4) */}
          {!createdProduct && (
            <div className="grid grid-cols-4 gap-2 pt-1">
              {[
                { step: 1, label: "Görseller", icon: ImagePlus },
                { step: 2, label: "Boyut & Duy", icon: Ruler },
                { step: 3, label: "Kategori", icon: Layers },
                { step: 4, label: "Kod & Onay", icon: CheckCircle2 },
              ].map((item) => {
                const isCurrent = currentStep === item.step;
                const isPassed = currentStep > item.step;
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.step}
                    className={`flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl transition-all ${
                      isCurrent
                        ? "bg-white border border-[#93826E] text-[#93826E] shadow-xs font-bold"
                        : isPassed
                        ? "bg-[#EAE9E4]/60 text-emerald-700 font-semibold"
                        : "text-[#8C8B87]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs shrink-0 ${
                        isCurrent
                          ? "bg-[#93826E] text-white"
                          : isPassed
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isPassed ? <Check className="w-3.5 h-3.5" /> : item.step}
                    </div>
                    <span className="text-[11px] sm:text-xs truncate hidden sm:inline">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ORTA İÇERİK BÖLÜMÜ */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {/* HATA BİLDİRİMİ */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ========================================================= */}
          {/* BAŞARI EKRANI (Ürün Eklendiğinde) */}
          {/* ========================================================= */}
          {createdProduct ? (
            <div className="text-center py-6 sm:py-10 space-y-6 max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#93826E]/10 text-[#93826E] uppercase tracking-wider">
                  {createdProduct.categoryName}
                </span>
                <h3 className="text-2xl font-extrabold text-[#141414] mt-2 font-mono">
                  {createdProduct.code}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C8B87] mt-1">
                  Ürün başarıyla oluşturuldu ve site kataloğuna eklendi!
                </p>
              </div>

              {/* Eklenen Ürün Kart Özeti */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E6E5E0] text-left flex gap-4 items-center">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white border border-[#E6E5E0] shrink-0">
                  <Image
                    src={createdProduct.image || "/images/theresa_kapak.jpeg"}
                    alt={createdProduct.code}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="text-xs font-bold text-[#141414] truncate">
                    {createdProduct.name}
                  </div>
                  <div className="text-[11px] text-[#8C8B87] truncate">
                    📏 {createdProduct.dimensions}
                  </div>
                  <div className="text-[11px] text-[#8C8B87] truncate">
                    💡 {createdProduct.lightingType}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold">
                    ✓ {createdProduct.images?.length || 1} görsel kaydedildi
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleResetForNew}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#FAF9F6] hover:bg-[#EAE9E4] text-[#141414] text-xs font-bold border border-[#E6E5E0] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#93826E]" />
                  <span>Başka Ürün Ekle</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#93826E] hover:bg-[#7A6956] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Tamam, Panele Dön</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ========================================================= */}
              {/* ADIM 1: GÖRSELLERİ YÜKLE */}
              {/* ========================================================= */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-[#141414] flex items-center gap-2">
                      <ImagePlus className="w-5 h-5 text-[#93826E]" />
                      <span>Adım 1: Ürün Görsellerini Yükleyin</span>
                    </h3>
                    <p className="text-xs text-[#8C8B87] mt-1">
                      İlk sıradaki fotoğraf ürünün <strong>Kapak (Ana) Görseli</strong> olarak
                      kullanılacaktır. Sonrakiler detay ve uygulama fotoğraflarıdır.
                    </p>
                  </div>

                  {/* Yükleme Alanı */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[#93826E]/40 hover:border-[#93826E] bg-[#FAF9F6] hover:bg-[#F4F4F1] rounded-3xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E6E5E0] group-hover:scale-105 shadow-sm text-[#93826E] flex items-center justify-center transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#141414]">
                        Fotoğraf seçmek için tıklayın veya sürükleyip bırakın
                      </span>
                      <p className="text-[11px] text-[#8C8B87] mt-0.5">
                        JPEG, PNG, WEBP formatları desteklenir. Birden fazla fotoğraf seçebilirsiniz.
                      </p>
                    </div>
                  </div>

                  {/* Yüklenen Görseller Önizleme Listesi */}
                  {images.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#141414]">
                          Yüklenen Fotoğraflar ({images.length})
                        </span>
                        <span className="text-[11px] text-[#8C8B87]">
                          Kapak fotoğrafını değiştirmek için karta tıklayın
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images.map((img, idx) => (
                          <div
                            key={idx}
                            className={`relative rounded-2xl overflow-hidden border transition-all bg-white group ${
                              idx === 0
                                ? "border-2 border-[#93826E] shadow-md ring-2 ring-[#93826E]/20"
                                : "border-[#E6E5E0] hover:border-gray-400"
                            }`}
                          >
                            <div className="aspect-square relative w-full bg-gray-50">
                              <Image
                                src={img.previewUrl}
                                alt={`Yüklenen görsel ${idx + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>

                            {/* Sıra Rozeti */}
                            <div className="absolute top-2 left-2">
                              {idx === 0 ? (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#93826E] text-white shadow-xs flex items-center gap-1">
                                  ★ Kapak
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                                  #{idx + 1}
                                </span>
                              )}
                            </div>

                            {/* Silme & Kapak Yap Butonları */}
                            <div className="p-2 bg-white flex items-center justify-between border-t border-[#E6E5E0]">
                              {idx !== 0 ? (
                                <button
                                  type="button"
                                  onClick={() => makeCoverImage(idx)}
                                  className="text-[11px] text-[#93826E] hover:underline font-semibold cursor-pointer"
                                >
                                  Kapak Yap
                                </button>
                              ) : (
                                <span className="text-[11px] text-[#8C8B87] font-medium">Ana Görsel</span>
                              )}
                              <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="p-1 rounded-lg text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                                title="Görseli Sil"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ========================================================= */}
              {/* ADIM 2: ÜRÜN BOYUTU VE DUY ÖZELLİKLERİ */}
              {/* ========================================================= */}
              {currentStep === 2 && (
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-base font-bold text-[#141414] flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-[#93826E]" />
                      <span>Adım 2: Ürün Boyutu ve Duy Özelliklerini Girin</span>
                    </h3>
                    <p className="text-xs text-[#8C8B87] mt-1">
                      Müşterilerin karar vermesini kolaylaştıran teknik ölçü ve aydınlatma tipini belirtin.
                    </p>
                  </div>

                  {/* 1. ÜRÜN BOYUTU */}
                  <div className="space-y-2 bg-[#FAF9F6] p-5 rounded-2xl border border-[#E6E5E0]">
                    <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#93826E]" />
                      <span>Ürün Boyutu / Ölçüler</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      placeholder="Örn: Çap: 70 cm / Ayarlanabilir Yükseklik"
                      className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
                    />

                    {/* Hızlı Ölçü Önerileri */}
                    <div className="pt-2">
                      <span className="text-[10px] text-[#8C8B87] block mb-1.5 font-medium">
                        Hızlı Şablonlar:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Ayarlanabilir Yükseklik / Standart Ölçü",
                          "Çap: 60 cm / Ayarlanabilir Yükseklik",
                          "Çap: 80 cm / Ayarlanabilir Yükseklik",
                          "Genişlik: 100 cm | Yükseklik: 80 cm",
                          "Standart Ölçü / Duvar Tipi",
                          "Tavan Yüksekliğinize Göre Özel İmalat",
                        ].map((sug, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setDimensions(sug)}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#EAE9E4] border border-[#E6E5E0] text-[11px] text-[#141414] transition-colors cursor-pointer"
                          >
                            + {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2. DUY ÖZELLİĞİ */}
                  <div className="space-y-2 bg-[#FAF9F6] p-5 rounded-2xl border border-[#E6E5E0]">
                    <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-[#93826E]" />
                      <span>Duy Özellikleri / Aydınlatma Tipi</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={lightingType}
                      onChange={(e) => setLightingType(e.target.value)}
                      placeholder="Örn: E27 Standart Duy (LED Ampul Uyumlu) veya Dahili LED Modülü"
                      className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
                    />

                    {/* Hızlı Duy Önerileri */}
                    <div className="pt-2">
                      <span className="text-[10px] text-[#8C8B87] block mb-1.5 font-medium">
                        Hızlı Şablonlar:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "E27 Standart Duy (LED Ampul Uyumlu)",
                          "Dahili LED Modülü (3 Renk Kademeli)",
                          "GU10 Spot + E27 Küre Duy",
                          "G9 Duy (Kristal / Bal Cam Küreli)",
                          "E14 Mum Ampul Duy (Kandil)",
                          "Dahili 3000K Günışığı LED Modülü",
                        ].map((sug, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setLightingType(sug)}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#EAE9E4] border border-[#E6E5E0] text-[11px] text-[#141414] transition-colors cursor-pointer"
                          >
                            + {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3. İSTEĞE BAĞLI ROZET */}
                  <div className="space-y-2 bg-[#FAF9F6] p-5 rounded-2xl border border-[#E6E5E0]">
                    <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#93826E]" />
                      <span>Özel Vurgu Rozeti (İsteğe Bağlı)</span>
                    </label>
                    <input
                      type="text"
                      value={badge}
                      onChange={(e) => setBadge(e.target.value)}
                      placeholder="Örn: Yeni Tasarım, Ada Üstü Sarkıt, Özel Tasarım (Boş bırakılırsa standart rozet atanır)"
                      className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ADIM 3: KATEGORİ SEÇİMİ */}
              {/* ========================================================= */}
              {currentStep === 3 && (
                <div className="space-y-6 max-w-3xl mx-auto">
                  <div>
                    <h3 className="text-base font-bold text-[#141414] flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#93826E]" />
                      <span>Adım 3: Ürünün Kategorisini Seçin</span>
                    </h3>
                    <p className="text-xs text-[#8C8B87] mt-1">
                      Kategori seçiminize göre bir sonraki adımda uygun ürün kodu otomatik üretilecektir.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {CATEGORIES_DATA.map((cat) => {
                      const isSelected = selectedCategory === cat.slug;

                      return (
                        <div
                          key={cat.slug}
                          onClick={() => setSelectedCategory(cat.slug)}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between text-left group ${
                            isSelected
                              ? "border-[#93826E] bg-[#FAF9F6] shadow-md ring-2 ring-[#93826E]/20 scale-[1.02]"
                              : "border-[#E6E5E0] hover:border-gray-300 bg-white hover:bg-[#FAF9F6]/50"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-2xl">{cat.icon}</span>
                              <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                                  isSelected
                                    ? "bg-[#93826E] text-white"
                                    : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
                                }`}
                              >
                                HL-{cat.prefix}-...
                              </span>
                            </div>

                            <h4 className="text-xs sm:text-sm font-bold text-[#141414] group-hover:text-[#93826E] transition-colors">
                              {cat.name}
                            </h4>
                            <p className="text-[11px] text-[#8C8B87] mt-1 leading-relaxed">
                              {cat.description}
                            </p>
                          </div>

                          <div className="pt-4 mt-3 border-t border-[#E6E5E0]/60 flex items-center justify-between text-[11px] font-semibold">
                            <span className={isSelected ? "text-[#93826E]" : "text-[#8C8B87]"}>
                              {isSelected ? "✓ Seçildi" : "Seç"}
                            </span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                isSelected ? "text-[#93826E] translate-x-1" : "text-gray-300"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* ADIM 4: KOD ÜRETİMİ VE CANLI ÖNİZLEME */}
              {/* ========================================================= */}
              {currentStep === 4 && (
                <div className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <h3 className="text-base font-bold text-[#141414] flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#93826E]" />
                      <span>Adım 4: Ürün Kodu Üretildi ve Önizleme</span>
                    </h3>
                    <p className="text-xs text-[#8C8B87] mt-1">
                      Sitenin kodlama mimarisine uygun yeni ürün kodu otomatik üretildi. Onaylayarak ekleyebilirsiniz.
                    </p>
                  </div>

                  {/* KOD ROZETİ */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF9F6] to-[#F4F4F1] border-2 border-[#93826E]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#93826E] text-white flex items-center justify-center font-mono font-extrabold text-xl shadow-sm">
                        #
                      </div>
                      <div>
                        <span className="text-[11px] text-[#8C8B87] font-semibold uppercase tracking-wider block">
                          Sistemin Belirlediği Kod
                        </span>
                        {isGeneratingCode ? (
                          <div className="flex items-center gap-2 text-sm text-[#93826E] font-bold">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Kod hesaplanıyor...</span>
                          </div>
                        ) : (
                          <h4 className="text-xl sm:text-2xl font-black text-[#141414] font-mono tracking-wide">
                            {generatedCode || "HL-PRD-..."}
                          </h4>
                        )}
                      </div>
                    </div>

                    <div className="text-center sm:text-right">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 inline-block">
                        ✓ Sıradaki Kod
                      </span>
                    </div>
                  </div>

                  {/* CANLI ÜRÜN KARTI ÖNİZLEMESİ */}
                  <div className="border border-[#E6E5E0] rounded-3xl overflow-hidden bg-white shadow-md">
                    <div className="p-3 bg-[#FAF9F6] border-b border-[#E6E5E0] flex items-center justify-between text-xs font-bold text-[#8C8B87]">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#93826E]" />
                        <span>Sitedeki Canlı Görünüm Önizlemesi</span>
                      </span>
                      <span className="font-mono text-[11px]">{generatedCode}</span>
                    </div>

                    <div className="p-5 flex flex-col sm:flex-row gap-5 items-start">
                      {/* Kapak Fotoğrafı */}
                      <div className="w-full sm:w-48 aspect-square relative rounded-2xl overflow-hidden border border-[#E6E5E0] bg-gray-50 shrink-0">
                        {images[0] ? (
                          <Image
                            src={images[0].previewUrl}
                            alt="Önizleme"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Görsel Yok
                          </div>
                        )}
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#93826E] text-white">
                          {badge || "Yeni Tasarım"}
                        </span>
                      </div>

                      {/* Bilgiler */}
                      <div className="flex-1 space-y-3 min-w-0">
                        <div>
                          <span className="text-[11px] font-bold text-[#93826E] uppercase tracking-wider block">
                            {CATEGORIES_DATA.find((c) => c.slug === selectedCategory)?.name}
                          </span>
                          <h4 className="text-lg font-bold text-[#141414] font-mono">
                            {generatedCode}
                          </h4>
                        </div>

                        <div className="space-y-1.5 text-xs text-[#141414]">
                          <div className="flex items-center gap-2">
                            <Ruler className="w-3.5 h-3.5 text-[#93826E] shrink-0" />
                            <span className="font-medium text-[#8C8B87]">Boyut:</span>
                            <span className="font-bold truncate">
                              {dimensions || "Ayarlanabilir Yükseklik"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-[#93826E] shrink-0" />
                            <span className="font-medium text-[#8C8B87]">Duy:</span>
                            <span className="font-bold truncate">
                              {lightingType || "LED Uyumlu"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ImagePlus className="w-3.5 h-3.5 text-[#93826E] shrink-0" />
                            <span className="font-medium text-[#8C8B87]">Görsel Sayısı:</span>
                            <span className="font-bold">{images.length} Adet</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E6E5E0] text-[11px] text-[#8C8B87] leading-relaxed">
                          {generatedCode}; {dimensions || "Standart ölçüleri"} ve{" "}
                          {lightingType || "yüksek verimli ışık kalitesi"} ile yaşam alanlarınıza
                          seçkin bir zarafet katar.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* ALT AKSİYON BAR (Geri & İleri Butonları) */}
        {!createdProduct && (
          <div className="bg-[#FAF9F6] border-t border-[#E6E5E0] px-5 sm:px-8 py-4 shrink-0 flex items-center justify-between gap-3">
            {/* Geri Butonu */}
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
                disabled={isSubmitting}
                className="py-2.5 sm:py-3 px-4 rounded-xl border border-[#E6E5E0] hover:bg-[#EAE9E4] text-[#141414] text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Geri</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetAndClose}
                disabled={isSubmitting}
                className="py-2.5 sm:py-3 px-4 rounded-xl border border-transparent hover:bg-gray-200 text-[#8C8B87] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Vazgeç
              </button>
            )}

            {/* İleri / Onayla Butonları */}
            <div className="flex items-center gap-2">
              {currentStep === 1 && (
                <button
                  type="button"
                  disabled={images.length === 0}
                  onClick={() => setCurrentStep(2)}
                  className="py-2.5 sm:py-3 px-5 rounded-xl bg-[#93826E] hover:bg-[#7A6956] disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Boyut ve Duy Gir →</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 2 && (
                <button
                  type="button"
                  disabled={!dimensions.trim() && !lightingType.trim()}
                  onClick={() => setCurrentStep(3)}
                  className="py-2.5 sm:py-3 px-5 rounded-xl bg-[#93826E] hover:bg-[#7A6956] disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Kategori Seçimine Geç →</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 3 && (
                <button
                  type="button"
                  disabled={!selectedCategory}
                  onClick={() => setCurrentStep(4)}
                  className="py-2.5 sm:py-3 px-5 rounded-xl bg-[#93826E] hover:bg-[#7A6956] disabled:opacity-50 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>Kodu Üret ve İncele →</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 4 && (
                <button
                  type="button"
                  disabled={isSubmitting || isGeneratingCode}
                  onClick={handleSubmitProduct}
                  className="py-3 px-6 rounded-xl bg-[#93826E] hover:bg-[#7A6956] disabled:opacity-60 text-white text-xs sm:text-sm font-black transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Kaydediliyor...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Onayla ve Ürünü Ekle</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
