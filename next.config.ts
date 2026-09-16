import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 clamps the `quality` prop to whatever's allowlisted here (default: [75]).
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
