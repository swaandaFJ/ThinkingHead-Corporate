import { notFound } from "next/navigation";
import InsightsList from "@/components/InsightsList";
import { CATEGORIES, getAllInsights } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights — ThinkingHead | Research, Frameworks & Perspectives",
  description: "Original research, frameworks and perspectives from the ThinkingHead team.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getAllInsights();
  // Never show an empty shelf: with no published insights this page does not exist.
  if (insights.length === 0) notFound();

  // Only the fields the list needs go to the browser (not the full article text)
  const items = insights.map(({ slug, title, date, author, category, summary, minutes }) => ({
    slug, title, date, author, category, summary, minutes,
  }));

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layer 4 — What We Know</span>
        <h1>Research, frameworks and perspectives.</h1>
        <p>What we&rsquo;re learning from the work, shared in the open.</p>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <InsightsList insights={items} categories={CATEGORIES} />
      </section>
    </>
  );
}
