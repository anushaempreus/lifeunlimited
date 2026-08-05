import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires inline scripts for hydration; JSON-LD is inline too.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://www.instagram.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      // http→https upgrade breaks plain-http localhost dev; prod is HTTPS.
      ...(isProd ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  // 301s for URLs that existed on the old WordPress site but have no
  // direct equivalent in the new structure — preserves indexed rankings
  // and any external links after the domain cutover.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/counselling-psychology", destination: "/resource/counselling-psychology", permanent: true },
      { source: "/organisational-solutions-2", destination: "/organisational-solutions", permanent: true },
      { source: "/organisational-solutions/bootcamp-for-the-brain-2", destination: "/organisational-solutions/bootcamp-for-the-brain", permanent: true },
      { source: "/resource/counselling-psychology/resources", destination: "/resource", permanent: true },
      { source: "/resources", destination: "/resource", permanent: true },
      // Old fact-sheet URLs under /resources/ (also linked, broken, from the old site itself)
      { source: "/resources/depression", destination: "/resource/depression", permanent: true },
      { source: "/resources/stres", destination: "/resource/stres", permanent: true },
      { source: "/resources/what-is-anxiety", destination: "/resource/what-is-anxiety", permanent: true },
      { source: "/resources/what-is-trauma", destination: "/resource/what-is-trauma", permanent: true },
      { source: "/people", destination: "/our-people", permanent: true },
      // Junk pages that were indexed on the old site
      { source: "/test-popup", destination: "/", permanent: true },
      { source: "/lifestream", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
