import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Let’s Talk — ThinkingHead | Start a Discovery Conversation",
  description: "Tell us the challenge. We’ll tell you what we’d do differently and what we’d do first.",
  path: "/contact",
});

const STEPS = [
  "You tell us what isn’t working, what you want to achieve, and what’s been tried before.",
  "We’ll tell you honestly what we’d do differently — and what we’d do first.",
  "If the challenge is a fit, we scope it properly. If it isn’t, we’ll tell you that too.",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Conversion</span>
        <h1>Let&rsquo;s talk.</h1>
        <p>
          Tell us what isn&rsquo;t working, what you want to achieve, and what&rsquo;s been tried before.
          We&rsquo;ll tell you honestly what we&rsquo;d do differently — and what we&rsquo;d do first. If the
          challenge is a fit, we scope it properly. If it isn&rsquo;t, we&rsquo;ll tell you that too.
        </p>
      </section>

      <section className="section">
        <h2 className="section-heading fade-in">How our first conversation goes</h2>
        <div className="process-steps">
          {STEPS.map((text, i) => (
            <div className="card fade-in" key={i}>
              <span className="card-tag">{String(i + 1).padStart(2, "0")}</span>
              <p style={{ marginTop: "0.5rem" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="contact-layout">
          <div className="fade-in">
            <ContactForm />
          </div>

          <aside className="info-panel fade-in">
            <h3>Contact details</h3>
            <div className="info-row">
              <span>Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="info-row">
              <span>Phone</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </div>
            <div className="info-row">
              <span>Address</span>
              {CONTACT.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <div className="map-embed">
              <iframe
                title="ThinkingHead office location"
                src="https://www.google.com/maps?q=5+Pipeline+Road,+Bayan+Dutse,+Kaduna,+Nigeria&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
