import { SITE_NAME } from "@/lib/site";

// Builds the full metadata object for a page: title, description, canonical URL,
// Open Graph + Twitter card, and the Nigerian-English hreflang (BRD FR-06).
// `path` is the page's address on the site, e.g. "/about" ("" for Home).
export function pageMetadata({ title, description, path = "" }) {
  const url = path || "/";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: { "en-NG": url } },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_NG",
      title,
      description,
      url,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "ThinkingHead" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}
