import Link from "next/link";
import ServicesList from "@/components/ServicesList";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

export const metadata = pageMetadata({
  title: "Services — ThinkingHead | Eight Pillars from Research to Scale",
  description:
    "Research, AI, digital transformation, custom software, automation and capability development — under one accountable partner.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layers 1&ndash;2</span>
        <h1>Eight service pillars. One accountable partner.</h1>
        <p>
          Our service architecture covers the full journey — from research and strategy to production
          systems, automation and capability transfer. Start where it hurts. We&rsquo;ll show you how the
          other pillars connect.
        </p>
      </section>

      <section className="section">
        <ServicesList services={SERVICES} />
      </section>

      <section className="closing-cta">
        <h2 className="fade-in">The pillars work together. Let&rsquo;s find where to start.</h2>
        <div className="fade-in" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
