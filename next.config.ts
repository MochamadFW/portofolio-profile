import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}, // Disable Turbopack
  },
};

export default nextConfig;
