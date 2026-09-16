"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import {
  X,
  Upload,
  ImagePlus,
  Ruler,
  Lightbulb,
  Tag,
  Trash2,
  CheckCircle2,
  Loader2,
  AlertCircle,
  ShieldAlert,
  Save,
  Star,
  Layers,
  Sparkles,
  RotateCcw,
} from "lucide-react";

interface StagedNewImage {
  name: string;
  base64: string;
  previewUrl: string;
}

interface EditProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currentUsername?: string;
  currentPrice?: string | number;
  onProductUpdated: (updatedProduct: Product, newPrice?: string | number) => void;
}

const DIMENSION_PRESETS = [
  "Ayarlanabilir Yükseklik / Standart Ölçü",
  "Çap: 60 cm / Ayarlanabilir Yükseklik",
  "Çap: 80 cm / Ayarlanabilir Yükseklik",
  "Çap: 100 cm / Ayarlanabilir Yükseklik",
  "Genişlik: 100 cm | Yükseklik: 80 cm",
  "Özel Proje & Mekan Ölçüsüne Göre İmalat",
];

const LIGHTING_PRESETS = [
  "Dahili LED (Günışığı / Beyaz / Ilık Beyaz 3 Renk)",
  "E27 Standart Duy (LED Ampul Uyumlu)",
  "E14 Mum Duy (LED Ampul Uyumlu)",
  "G9 İğne Bacak Kapsül Duy (LED Uyumlu)",
  "GU10 Spot Duy",
  "Dahili Yüksek Lümenli LED Sistem",
];

const BADGE_PRESETS = [
  "Sarkıt Avize",
  "Modern LED Seri",
  "Özel Ölçü Üretim",
  "Duvar Apliği",
  "Klasik Kristal",
  "Showroom Özel Koleksiyon",
  "Çok Satan",
  "Yeni Sezon",
];

export default function EditProductModal({
  product,
  isOpen,
  onClose,
  currentUsername,
  currentPrice,
  onProductUpdated,
}: EditProductModalProps) {
  const [name, setName] = useState<string>("");
  const [dimensions, setDimensions] = useState<string>("");
  const [lightingType, setLightingType] = useState<string>("");
  const [badge, setBadge] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [priceInput, setPriceInput] = useState<string>("");

  // Fotoğraf yönetimi
  // Mevcut tutulan görseller (sırası kapak belirler)
  const [keptImages, setKeptImages] = useState<string[]>([]);
  // Yeni eklenen fotoğraflar
  const [newImages, setNewImages] = useState<StagedNewImage[]>([]);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAuthorized = currentUsername?.toLowerCase().trim() === "onur";

  // Ürün değiştiğinde formu doldur
  useEffect(() => {
    if (product && isOpen) {
      setName(product.name || product.code);
      setDimensions(product.dimensions || "");
      setLightingType(product.lightingType || "");
      setBadge(product.badge || "");
      setShortDescription(product.shortDescription || "");
      setPriceInput(currentPrice !== undefined && currentPrice !== null ? String(currentPrice) : "");

      // Mevcut fotoğraflar
      const initialImages = product.images && product.images.length > 0
        ? [...product.images]
        : product.image
        ? [product.image]
        : [];
      setKeptImages(initialImages);
      setNewImages([]);
      setErrorMsg("");
      setSuccessMsg("");
    }
  }, [product, isOpen, currentPrice]);

  if (!isOpen || !product) return null;

  // Yetkisiz Kullanıcı Uyarısı
  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl border border-red-100 space-y-4">
          <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Yetkisiz Erişim</h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Ürün ve fotoğraf düzenleme yetkisi yalnızca <strong>onur</strong> kullanıcı adına tanımlıdır.
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

  // Yeni fotoğraf seçildiğinde
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setNewImages((prev) => [
          ...prev,
          {
            name: file.name,
            base64,
            previewUrl: URL.createObjectURL(file),
          },
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Mevcut görseli sil (kept listesinden çıkar)
  const removeKeptImage = (indexToRemove: number) => {
    if (keptImages.length + newImages.length <= 1) {
      setErrorMsg("Ürünün en az 1 adet fotoğrafı kalmalıdır. Önce yeni bir fotoğraf yükleyin veya bu fotoğrafı silmeyin.");
      return;
    }
    setErrorMsg("");
    setKeptImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Yeni yüklenen görseli listeden kaldır
  const removeNewImage = (indexToRemove: number) => {
    if (keptImages.length + newImages.length <= 1) {
      setErrorMsg("Ürünün en az 1 adet fotoğrafı kalmalıdır.");
      return;
    }
    setErrorMsg("");
    setNewImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Mevcut görseli kapak (1. sıra) yap
  const makeKeptImageCover = (indexToCover: number) => {
    setKeptImages((prev) => {
      const target = prev[indexToCover];
      const rest = prev.filter((_, idx) => idx !== indexToCover);
      return [target, ...rest];
    });
  };

  // Değişiklikleri Kaydet
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthorized) return;

    const totalImages = keptImages.length + newImages.length;
    if (totalImages === 0) {
      setErrorMsg("Lütfen ürün için en az 1 adet fotoğraf bırakın veya yeni fotoğraf ekleyin.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/admin/products/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: currentUsername,
          code: product.code,
          categorySlug: product.categorySlug,
          name: name.trim() || product.code,
          dimensions: dimensions.trim(),
          lightingType: lightingType.trim(),
          badge: badge.trim(),
          shortDescription: shortDescription.trim(),
          price: priceInput.trim() !== "" ? priceInput.trim() : null,
          keptImages,
          newImages: newImages.map((img) => ({
            name: img.name,
            base64: img.base64,
          })),
        }),
      });

      const data = await res.json();
      if (data.success && data.product) {
        setSuccessMsg("Ürün özellikleri ve fotoğrafları başarıyla güncellendi!");
        
        // Birleştirilmiş güncel ürün
        const updatedFullProduct: Product = {
          ...product,
          ...data.product,
          image: data.product.image || keptImages[0] || product.image,
          images: data.product.images || keptImages,
        };

        onProductUpdated(updatedFullProduct, data.price);

        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        setErrorMsg(data.error || "Ürün güncellenirken bir hata oluştu.");
      }
    } catch (err: any) {
      console.error("Ürün güncelleme hatası:", err);
      setErrorMsg("Sunucuyla iletişim kurulurken hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E6E5E0] overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* ÜST BAŞLIK */}
        <div className="bg-[#FAF9F6] border-b border-[#E6E5E0] px-5 sm:px-8 py-4 sm:py-5 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#93826E] text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-black text-[#141414] font-mono">
                    {product.code}
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#93826E]/10 text-[#7A6956] border border-[#93826E]/20">
                    {product.categoryName}
                  </span>
                </div>
                <p className="text-xs text-[#8C8B87]">
                  Özellikleri, ölçüleri, fiyatı ve ürün fotoğraflarını anında düzenleyin.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="p-2 rounded-xl text-[#8C8B87] hover:text-[#141414] hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ORTA İÇERİK - SCROLL EDİLEBİLİR */}
        <form onSubmit={handleSave} className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">
          {/* HATA VEYA BAŞARI MESAJI */}
          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span className="font-semibold">{successMsg}</span>
            </div>
          )}

          {/* ========================================================= */}
          {/* FOTOĞRAF YÖNETİMİ (MEVCUTLARI SİL, YENİSİNİ YÜKLE, KAPAK YAP) */}
          {/* ========================================================= */}
          <div className="space-y-4 bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-[#E6E5E0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
                  <ImagePlus className="w-4 h-4 text-[#93826E]" />
                  <span>Ürün Fotoğrafları ({keptImages.length + newImages.length})</span>
                </label>
                <p className="text-[11px] text-[#8C8B87] mt-0.5">
                  İlk sıradaki görsel vitrin kapak fotoğrafıdır. İstenmeyenleri silebilir veya yenilerini ekleyebilirsiniz.
                </p>
              </div>

              {/* Yeni Fotoğraf Ekle Butonu */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F4F4F1] border border-[#93826E] text-[#7A6956] hover:text-[#141414] text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#93826E]" />
                  <span>+ Yeni Fotoğraf Yükle</span>
                </button>
              </div>
            </div>

            {/* Fotoğraf Grid'i */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              {/* 1. Mevcut Fotoğraflar */}
              {keptImages.map((imgUrl, idx) => (
                <div
                  key={`kept-${idx}`}
                  className={`relative rounded-2xl overflow-hidden border transition-all bg-white group ${
                    idx === 0
                      ? "border-2 border-[#93826E] shadow-sm ring-2 ring-[#93826E]/20"
                      : "border-[#E6E5E0] hover:border-gray-400"
                  }`}
                >
                  <div className="aspect-square relative w-full bg-[#EAE9E4]">
                    <Image
                      src={imgUrl}
                      alt={`${product.code} fotoğraf ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>

                  {/* Sıra & Kapak Rozeti */}
                  <div className="absolute top-2 left-2">
                    {idx === 0 ? (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#93826E] text-white shadow-xs flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" /> Kapak
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                        #{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Alt Kontrol Butonları */}
                  <div className="p-2 bg-white flex items-center justify-between border-t border-[#E6E5E0]">
                    {idx !== 0 ? (
                      <button
                        type="button"
                        onClick={() => makeKeptImageCover(idx)}
                        className="text-[11px] text-[#93826E] hover:underline font-semibold cursor-pointer"
                      >
                        Kapak Yap
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#8C8B87] font-medium">Ana Görsel</span>
                    )}

                    <button
                      type="button"
                      onClick={() => removeKeptImage(idx)}
                      className="p-1 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                      title="Bu fotoğrafı sil"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* 2. Yeni Yüklenen Fotoğraflar (Staged) */}
              {newImages.map((newImg, idx) => (
                <div
                  key={`new-${idx}`}
                  className="relative rounded-2xl overflow-hidden border-2 border-dashed border-emerald-500 bg-white group shadow-sm"
                >
                  <div className="aspect-square relative w-full bg-emerald-50/50">
                    <Image
                      src={newImg.previewUrl}
                      alt={`Yeni fotoğraf ${idx + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Yeni Rozeti */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                      + Yeni
                    </span>
                  </div>

                  {/* Sil Butonu */}
                  <div className="p-2 bg-white flex items-center justify-between border-t border-[#E6E5E0]">
                    <span className="text-[10px] text-emerald-700 font-semibold truncate max-w-[90px]">
                      {newImg.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeNewImage(idx)}
                      className="p-1 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                      title="Bu yeni fotoğrafı kaldır"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* ÖZELLİKLER FORMU (ÖLÇÜLER, DUY, ETİKET, İSİM, FİYAT) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1. ÜRÜN BOYUTU / ÖLÇÜLER */}
            <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
              <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
                <Ruler className="w-3.5 h-3.5 text-[#93826E]" />
                <span>Ürün Ölçüleri / Boyut</span>
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                placeholder="Örn: Çap: 70 cm / Ayarlanabilir Yükseklik"
                className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
              />
              {/* Şablon Butonları */}
              <div className="pt-1.5">
                <span className="text-[10px] text-[#8C8B87] block mb-1 font-medium">Hızlı Şablonlar:</span>
                <div className="flex flex-wrap gap-1">
                  {DIMENSION_PRESETS.slice(0, 4).map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setDimensions(preset)}
                      className={`text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                        dimensions === preset
                          ? "bg-[#93826E] text-white border-[#93826E] font-bold"
                          : "bg-white text-[#4A4945] border-[#E6E5E0] hover:border-[#93826E]"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. DUY VE AYDINLATMA TİPİ */}
            <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
              <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5 text-[#93826E]" />
                <span>Duy / Aydınlatma Tipi</span>
              </label>
              <input
                type="text"
                value={lightingType}
                onChange={(e) => setLightingType(e.target.value)}
                placeholder="Örn: Dahili LED (3 Renk Kademeli)"
                className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
              />
              {/* Şablon Butonları */}
              <div className="pt-1.5">
                <span className="text-[10px] text-[#8C8B87] block mb-1 font-medium">Hızlı Şablonlar:</span>
                <div className="flex flex-wrap gap-1">
                  {LIGHTING_PRESETS.slice(0, 4).map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setLightingType(preset)}
                      className={`text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                        lightingType === preset
                          ? "bg-[#93826E] text-white border-[#93826E] font-bold"
                          : "bg-white text-[#4A4945] border-[#E6E5E0] hover:border-[#93826E]"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. ROZET / ETİKET */}
            <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
              <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-[#93826E]" />
                <span>Etiket / Rozet</span>
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                placeholder="Örn: Sarkıt Avize, Çok Satan"
                className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
              />
              <div className="pt-1.5">
                <span className="text-[10px] text-[#8C8B87] block mb-1 font-medium">Hızlı Etiketler:</span>
                <div className="flex flex-wrap gap-1">
                  {BADGE_PRESETS.slice(0, 5).map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBadge(preset)}
                      className={`text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                        badge === preset
                          ? "bg-[#93826E] text-white border-[#93826E] font-bold"
                          : "bg-white text-[#4A4945] border-[#E6E5E0] hover:border-[#93826E]"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. FİYAT DÜZENLEME (fiyat belirler gibi) */}
            <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
              <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ürün Fiyatı (İsteğe Bağlı)</span>
              </label>
              <input
                type="text"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                placeholder="Örn: 15.000 ₺ (Boş bırakılırsa fiyatsız kalır)"
                className="w-full bg-white border border-[#E6E5E0] focus:border-emerald-600 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141414] font-mono focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all"
              />
              <p className="text-[11px] text-[#8C8B87]">
                Fiyat girerseniz admin listesinde ve sistemde hemen güncellenir.
              </p>
            </div>
          </div>

          {/* 5. ÜRÜN İSMİ (İSTEĞE BAĞLI ÖZEL İSİM) */}
          <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
            <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
              <span>Ürün İsim Başlığı</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`Varsayılan: ${product.code}`}
              className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all"
            />
          </div>

          {/* 6. KISA AÇIKLAMA */}
          <div className="space-y-2 bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E6E5E0]">
            <label className="text-xs font-bold text-[#141414] flex items-center gap-1.5 uppercase tracking-wider">
              <span>Ürün Açıklaması</span>
            </label>
            <textarea
              rows={3}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Ürünün tasarımı, kullanım alanları hakkında kısa tanıtım cümlesi..."
              className="w-full bg-white border border-[#E6E5E0] focus:border-[#93826E] rounded-xl p-3 text-xs sm:text-sm text-[#141414] focus:outline-none focus:ring-2 focus:ring-[#93826E]/20 transition-all resize-none"
            />
          </div>
        </form>

        {/* ALT BUTONLAR */}
        <div className="bg-[#FAF9F6] border-t border-[#E6E5E0] px-5 sm:px-8 py-4 shrink-0 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl border border-[#E6E5E0] bg-white text-xs font-bold text-[#6B6A66] hover:bg-gray-50 transition-all cursor-pointer disabled:opacity-50"
          >
            İptal
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-xl bg-[#93826E] hover:bg-[#7A6956] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Kaydediliyor...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Değişiklikleri Kaydet</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
