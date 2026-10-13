import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import ShareLinks from "@/components/ShareLinks";
import { getAllInsights, getInsight } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Only slugs that exist at build time are valid; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

// In Next 15+, `params` arrives as a Promise and must be awaited.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  const url = `/insights/${insight.slug}`;
  return {
    title: { absolute: `${insight.title} — ${SITE_NAME}` },
    description: insight.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.summary,
      url,
      publishedTime: insight.date || undefined,
      authors: [insight.author],
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: insight.title, description: insight.summary },
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const url = `${SITE_URL}/insights/${insight.slug}`;
  // Article text is written by the team in the repo (trusted), so rendering it as HTML is safe.
  const html = marked.parse(insight.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.summary,
    datePublished: insight.date || undefined,
    author: { "@type": "Person", name: insight.author },
    publisher: { "@type": "Organization", name: "ThinkingHead Nigeria Limited", url: SITE_URL },
    mainEntityOfPage: url,
  };

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">{insight.category}</span>
        <h1>{insight.title}</h1>
        <p className="insight-meta">
          {insight.author} &middot; {formatDate(insight.date)} &middot; {insight.minutes} min read
        </p>
      </section>

      <article className="article">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ShareLinks url={url} title={insight.title} />
        <p style={{ marginTop: "2rem" }}>
          <Link href="/insights" className="btn btn-secondary">
            &larr; All insights
          </Link>
        </p>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
