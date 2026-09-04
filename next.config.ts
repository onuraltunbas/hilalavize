import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/kategori/klasik-kristal-avize",
        destination: "/kategori/klasik",
      },
      {
        source: "/kategori/modern-led-avize",
        destination: "/kategori/ledli-grup",
      },
    ];
  },
};

export default nextConfig;
