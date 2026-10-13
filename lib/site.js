// One place for facts that appear all over the site. Change them here, not in 20 files.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://thinkinghead.ng").replace(/\/$/, "");
export const SITE_NAME = "ThinkingHead";
export const TAGLINE = "Improving Systems. Enabling Possibilities.";

export const CONTACT = {
  email: "hello@thinkinghead.ng",
  phone: "+234 706 834 9172",
  phoneHref: "tel:+2347068349172",
  addressLines: ["5 Pipeline Road, Bayan Dutse", "Kaduna, Nigeria"],
  rc: "RC 8611016",
};

// Put the real 16-page Corporate Profile PDF at public/downloads/ with exactly this file
// name (or change the path here). Until the file exists the download link will 404.
export const PROFILE_PDF_PATH = "/downloads/ThinkingHead-Corporate-Profile.pdf";

// Wording is specified by the BRD (FR-01).
export const FORM_SUCCESS_MESSAGE =
  "We've received your message. You'll hear from Ben within 24 hours.";

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/method", label: "Method" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights", requiresInsights: true },
  { href: "/leadership", label: "Leadership" },
];
