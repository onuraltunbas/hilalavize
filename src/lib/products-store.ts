import { PRODUCTS as INITIAL_PRODUCTS, Product } from "@/data/products";

// Bellek içi ve dinamik ürün deposu
const dynamicProducts: Product[] = [...INITIAL_PRODUCTS];

export function getAllProducts(): Product[] {
  return dynamicProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  const cleanSlug = slug.toLowerCase().trim();
  return dynamicProducts.find((p) => p.slug.toLowerCase() === cleanSlug || p.id.toLowerCase() === cleanSlug);
}

export function getProductById(id: string): Product | undefined {
  const cleanId = id.toUpperCase().trim();
  return dynamicProducts.find((p) => p.id.toUpperCase() === cleanId);
}

export function addDynamicProduct(product: Product): void {
  const existingIndex = dynamicProducts.findIndex((p) => p.id === product.id || p.slug === product.slug);
  if (existingIndex !== -1) {
    dynamicProducts[existingIndex] = product;
  } else {
    dynamicProducts.unshift(product);
  }
}

export function removeDynamicProduct(idOrSlug: string): Product | null {
  const clean = idOrSlug.toLowerCase().trim();
  const index = dynamicProducts.findIndex(
    (p) => p.id.toLowerCase() === clean || p.slug.toLowerCase() === clean
  );
  if (index !== -1) {
    const removed = dynamicProducts.splice(index, 1);
    return removed[0];
  }
  return null;
}
