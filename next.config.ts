import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
    ],
  },
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
