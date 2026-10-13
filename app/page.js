import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { METHOD_STEPS } from "@/lib/method";
import { PROJECTS } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "ThinkingHead — AI-Powered Research, Strategy & Engineering | Nigeria",
  description:
    "We turn complex challenges into working systems. AI-powered research, strategy and digital transformation from Kaduna, Nigeria.",
  path: "",
});

export default function Home() {
  return (
    <>
      {/* Hero: no scroll animation here, so the first thing a visitor reads is never delayed */}
      <section className="hero">
        <h1>We turn complex challenges into working systems.</h1>
        <p>
          AI-powered research, strategy and engineering — from Kaduna, Nigeria, for the organisations
          shaping Africa&rsquo;s future.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </Link>
          <Link href="/method" className="btn btn-secondary">
            See how we work &rarr;
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading fade-in">Consulting-grade insight. Enterprise-grade delivery.</h2>
        <p className="section-subtext fade-in">
          Every engagement meets a single standard: the strategy must be defensible, the technology must be
          production-ready, and the outcome must be measurable.
        </p>
        <div className="grid grid-3">
          <div className="card fade-in">
            <h3>Defensible strategy</h3>
            <p>
              Every recommendation backed by evidence you can examine, challenge and defend to your own
              stakeholders.
            </p>
          </div>
          <div className="card fade-in">
            <h3>Production-ready technology</h3>
            <p>
              We build to run. Secured, tested, maintainable long after launch. Not demos. Not prototypes.
              Systems.
            </p>
          </div>
          <div className="card fade-in">
            <h3>Measurable outcomes</h3>
            <p>We agree what success looks like at the start and report against it at the end.</p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading fade-in">Eight service pillars. One accountable partner.</h2>
          <div className="grid grid-2">
            {SERVICES.map((s) => (
              <div className="card fade-in" key={s.id}>
                <h3>{s.name}</h3>
                <p>{s.outcome}</p>
                <Link href={`/services#${s.id}`} className="card-link">
                  See more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading fade-in">Eight steps. One partner. Delivery you can watch.</h2>

        <ol className="method-track fade-in" style={{ listStyle: "none", padding: 0 }}>
          {METHOD_STEPS.map((step, i) => (
            <li className="method-step" key={step.name}>
              <div className="method-step-inner">
                <span className="method-step-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="method-step-label">{step.name}</span>
              </div>
              {i < METHOD_STEPS.length - 1 && <span className="method-connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <p className="section-subtext fade-in" style={{ marginTop: "2rem" }}>
          Every engagement — from a focused research sprint to a multi-phase build — runs through the same
          eight steps. The work is disciplined. You are informed at every stage.
        </p>
        <div className="fade-in" style={{ marginTop: "1rem", textAlign: "center" }}>
          <Link href="/method" className="btn btn-secondary">
            See the method in detail &rarr;
          </Link>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading fade-in">The method, made real.</h2>
          <div className="grid grid-3">
            {PROJECTS.filter((p) => p.tag).map((p) => (
              <div className="card fade-in" key={p.name}>
                <span className="card-tag">{p.tag}</span>
                <h3 style={{ marginTop: "0.5rem" }}>{p.name}</h3>
              </div>
            ))}
          </div>
          <div className="fade-in" style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/work" className="btn btn-secondary">
              See all work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* "From Our Thinking" (latest insights) will appear here once Insights has published
          content — intentionally absent now so the site never shows an empty shelf. */}

      <section className="closing-cta">
        <h2 className="fade-in">Let&rsquo;s build something that works.</h2>
        <p className="fade-in">
          Tell us what isn&rsquo;t working, what you want to achieve, and what&rsquo;s been tried before.
          We&rsquo;ll tell you honestly what we&rsquo;d do differently — and what we&rsquo;d do first.
        </p>
        <div className="btn-wrap fade-in">
          <Link href="/contact" className="btn btn-primary full-width">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
