import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/our-team", destination: "/team", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/portfolio-tag/highlights", destination: "/gallery", permanent: true },
      // Old WordPress URLs that Search Console still reports as 404.
      { source: "/services/cut-style", destination: "/services/precision-haircut-coquitlam", permanent: true },
      { source: "/services/cut-style/feed", destination: "/services/precision-haircut-coquitlam", permanent: true },
      { source: "/services/hair-scalp-treatments", destination: "/services/restorative-treatment-coquitlam", permanent: true },
      // No brow service on the new site, so the services index is the closest page.
      { source: "/services/brow-services", destination: "/services", permanent: true },
      { source: "/portfolio-category/haistyle", destination: "/gallery", permanent: true },
      { source: "/portfolio-tag/hairstyle", destination: "/gallery", permanent: true },
      { source: "/portfolio-tag/trends", destination: "/gallery", permanent: true },
      { source: "/portfolio-tag/gloss", destination: "/gallery", permanent: true },
      {
        source: "/2025-hair-color-trends-whats-hot-this-year-at-megas-hair-salon",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
    // Placeholder art is SVG. Remove this once real photography lands.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
