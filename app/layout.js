import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Analytics from "@/components/Analytics";
import { getAllInsights } from "@/lib/insights";
import { CONTACT, NAV_LINKS, SITE_NAME, SITE_URL } from "@/lib/site";

// Fonts are self-hosted (files in app/fonts, subset to Latin): no request to Google,
// which keeps page weight down on 3G and keeps the Content-Security-Policy strict.
const playfair = localFont({
  src: "./fonts/PlayfairDisplay-var.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});
const inter = localFont({
  src: "./fonts/Inter-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-var.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ThinkingHead — AI-Powered Research, Strategy & Engineering | Nigeria",
  description:
    "We turn complex challenges into working systems. AI-powered research, strategy and digital transformation from Kaduna, Nigeria.",
  openGraph: { siteName: SITE_NAME, locale: "en_NG", type: "website" },
};

export const viewport = { themeColor: "#2E6B5C" };

// Structured data for search engines (BRD FR-06): who the company is and where it is.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ThinkingHead Nigeria Limited",
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      identifier: CONTACT.rc,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "ThinkingHead Nigeria Limited",
      url: SITE_URL,
      image: `${SITE_URL}/images/og-image.jpg`,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5 Pipeline Road, Bayan Dutse",
        addressLocality: "Kaduna",
        addressCountry: "NG",
      },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  // The Insights link only appears once there is published content (BRD: never show an empty shelf).
  const hasInsights = getAllInsights().length > 0;
  const links = NAV_LINKS.filter((l) => !l.requiresInsights || hasInsights);

  return (
    <html lang="en-NG" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Nav links={links} />
        <main id="main">{children}</main>
        <Footer links={links} />
        <Reveal />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
