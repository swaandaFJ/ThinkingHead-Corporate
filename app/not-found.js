import Link from "next/link";

export const metadata = { title: "Page not found — ThinkingHead" };

export default function NotFound() {
  return (
    <section className="page-hero">
      <span className="eyebrow">404</span>
      <h1>That page doesn&rsquo;t exist.</h1>
      <p>It may have moved, or the address may have a typo.</p>
      <div className="hero-actions" style={{ marginTop: "2rem" }}>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact us &rarr;
        </Link>
      </div>
    </section>
  );
}
