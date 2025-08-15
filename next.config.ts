import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // lewati lint error saat build di Vercel
  },
};

export default nextConfig;
