import { getAllInsights } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const pages = [
    ["", 1.0],
    ["/about", 0.8],
    ["/services", 0.8],
    ["/method", 0.7],
    ["/work", 0.7],
    ["/leadership", 0.5],
    ["/contact", 0.9],
  ].map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: now, priority }));

  const insights = getAllInsights();
  const insightPages = insights.length
    ? [
        { url: `${SITE_URL}/insights`, lastModified: now, priority: 0.7 },
        ...insights.map((i) => ({
          url: `${SITE_URL}/insights/${i.slug}`,
          lastModified: i.date ? new Date(i.date) : now,
          priority: 0.6,
        })),
      ]
    : [];

  return [...pages, ...insightPages];
}
