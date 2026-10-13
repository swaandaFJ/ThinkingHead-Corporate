import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { pageMetadata } from "@/lib/seo";
import { PROJECTS, INDUSTRY_CLUSTERS } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "Work — ThinkingHead | Signature Projects",
  description: "LinguaRoots, ChurchFlow, enterprise transformation — systems researched, built, deployed and measured.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layer 3 — What We Have Built</span>
        <h1>Signature projects — the method, made real.</h1>
        <p>
          Every project went through our eight-step method: research first, then design, then a working
          system — delivered, deployed and measured.
        </p>
      </section>

      <section className="section">
        <div className="grid grid-3">
          {PROJECTS.map((p) => (
            <div className="card fade-in" key={p.name}>
              {p.tag ? (
                <span className="card-tag">{p.tag}</span>
              ) : (
                <span className="card-tag placeholder-note">[Placeholder — sector tag, Corporate Profile]</span>
              )}
              <h3 style={{ marginTop: "0.5rem" }}>{p.name}</h3>
              {p.description ? <p>{p.description}</p> : <Placeholder>description from Corporate Profile, p.12</Placeholder>}
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading fade-in">Industries Served</h2>
          <div className="grid grid-3">
            {INDUSTRY_CLUSTERS.map((c) => (
              <div className="card fade-in" key={c.name}>
                <h3>{c.name}</h3>
                {c.sectors ? (
                  <div className="tag-list">
                    {c.sectors.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                ) : (
                  <Placeholder>sectors, Corporate Profile p.13</Placeholder>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section center-block">
        <p className="fade-in" style={{ maxWidth: "42.5rem", margin: "0 auto", color: "rgba(45,45,45,0.85)" }}>
          If you&rsquo;d like to discuss any of this work in more depth, we&rsquo;d welcome the conversation —
          subject to the confidentiality we keep for our clients.
        </p>
        <div className="fade-in" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Let&rsquo;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
