const isProd = process.env.NODE_ENV === "production";

// Content-Security-Policy — production only (Next's dev server needs 'unsafe-eval').
// Known compromise: 'unsafe-inline' for scripts/styles because Next injects small inline
// scripts. Moving to nonce-based CSP is a later hardening step (see README).
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com https://*.clarity.ms https://c.bing.com",
  "font-src 'self'",
  "connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.analytics.google.com https://*.clarity.ms",
  "frame-src https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formspree.io",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
