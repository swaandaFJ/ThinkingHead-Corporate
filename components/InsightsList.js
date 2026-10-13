"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/format";

// `insights` arrives as plain objects (no article body), `categories` as a list of names.
export default function InsightsList({ insights, categories }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter by category">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" className="tab" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-2">
        {shown.map((i) => (
          <article className="card insight-card" key={i.slug}>
            <span className="card-tag">{i.category}</span>
            <h3 style={{ marginTop: "0.5rem" }}>
              <Link href={`/insights/${i.slug}`}>{i.title}</Link>
            </h3>
            <p>{i.summary}</p>
            <p className="insight-meta" style={{ marginTop: "0.75rem" }}>
              {i.author} &middot; {formatDate(i.date)} &middot; {i.minutes} min read
            </p>
          </article>
        ))}
        {shown.length === 0 && <p>Nothing in this category yet.</p>}
      </div>
    </>
  );
}
