import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Inline Tailwind's small stylesheet to remove the render-blocking CSS request (better LCP).
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
