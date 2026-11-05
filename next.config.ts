import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    unoptimized: true,
  },
  staticPageGenerationTimeout: 520,
  poweredByHeader: false,
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    // Media in /public is not content-hashed, so cache for a week rather than forever:
    // a replaced file under the same name reaches visitors within 7 days.
    const mediaCache = [
      { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
    ];
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:file((?!_next/).+\\.(?:jpg|jpeg|png|webp|avif|svg|mp4|webm))",
        headers: mediaCache,
      },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
