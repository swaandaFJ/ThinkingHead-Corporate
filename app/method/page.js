import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { pageMetadata } from "@/lib/seo";
import { METHOD_STEPS } from "@/lib/method";

export const metadata = pageMetadata({
  title: "Method — ThinkingHead | Eight Steps from Insight to Scale",
  description: "Discover, Research, Analyse, Design, Build, Deploy, Measure, Scale. One method, every engagement.",
  path: "/method",
});

export default function MethodPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layer 2 — How We Think</span>
        <h1>An eight-step methodology from insight to scale.</h1>
        <p>
          Every engagement runs through the same eight steps. It keeps the work disciplined and keeps you
          informed at every stage. One accountable partner carries the engagement from start to finish.
        </p>
      </section>

      <section className="section">
        <ol className="timeline" style={{ listStyle: "none", padding: 0 }}>
          {METHOD_STEPS.map((step, i) => (
            <li className="timeline-item fade-in" key={step.name}>
              <span className="timeline-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="timeline-body">
                <h3>{step.name}</h3>
                {step.description ? (
                  <p>{step.description}</p>
                ) : (
                  <Placeholder>description paragraph from Corporate Profile, pp.8–9</Placeholder>
                )}
                {step.receive ? (
                  <span className="timeline-receive">You receive: {step.receive}</span>
                ) : (
                  <span className="timeline-receive placeholder-note">You receive: [Placeholder]</span>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="section-subtext fade-in" style={{ marginTop: "3rem" }}>
          Eight steps. One partner. Delivery you can watch.
        </p>
      </section>

      <section className="closing-cta">
        <h2 className="fade-in">Ready to start?</h2>
        <div className="fade-in" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Let&rsquo;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
