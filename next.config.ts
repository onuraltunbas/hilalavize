import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kategori/klasik-kristal-avize",
        destination: "/kategori/klasik",
        permanent: true,
      },
      {
        source: "/kategori/modern-led-avize",
        destination: "/kategori/ledli-grup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
