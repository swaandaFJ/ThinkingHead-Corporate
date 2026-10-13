import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import ProfileDownload from "@/components/ProfileDownload";
import { pageMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About — ThinkingHead | Africa’s Trusted Partner in Transformation",
  description:
    "An AI-powered research, strategy and engineering firm. We are researchers who build, strategists who ship, engineers who stay.",
  path: "/about",
});

const BELIEFS = [
  [
    "On systems",
    "Every organisation is a system. When something isn’t working, the cause is almost never where the symptom appears. We trace problems to their roots — across processes, people, incentives and technology — before we touch a single line of code.",
  ],
  [
    "On technology",
    "Technology is a tool, not a strategy. The right system, deployed into the right process, with the right people trained on it, changes outcomes. Technology deployed into chaos just digitises the chaos.",
  ],
  [
    "On AI",
    "AI is engineering, not magic. We use it where it changes outcomes — and skip where it doesn’t. When you hear a number from us, it comes from analysis you can check.",
  ],
  [
    "On Africa",
    "The operating conditions here — variable power, evolving regulation, cash and mobile money side by side, users on three-year-old phones — are not limitations. They are the design constraints that make our systems more resilient, more practical, and more honest than systems designed for ideal conditions.",
  ],
  [
    "On accountability",
    "We do not write reports that sit on shelves. We do not hand off to strangers mid-project. The person who scopes the work is the person who owns the outcome. That is the only model that keeps everyone honest.",
  ],
];

// TO ADD REAL COPY: add a `body` string to each entry (Corporate Profile pp.5–6).
const DIFFERENTIATORS = [
  { name: "AI-First Consulting", page: "p.5" },
  { name: "Systems Thinking", page: "p.5" },
  { name: "Deep Research", page: "p.5" },
  { name: "Product Strategy", page: "p.6" },
  { name: "Enterprise Technology", page: "p.6" },
  { name: "African Context", page: "p.6" },
  { name: "Global Standards", page: "p.6" },
  { name: "Practical Delivery", page: "p.6" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layer 1 — What We Believe</span>
        <h1>An AI-powered partner for the organisations shaping Africa&rsquo;s future.</h1>
        <p>
          ThinkingHead is an AI-powered research, strategy and digital transformation company headquartered
          in Kaduna, Nigeria. We help governments, enterprises, development partners and mission-led
          organisations turn complex challenges into working systems — through deep research, systems
          thinking, artificial intelligence and disciplined engineering.
        </p>
      </section>

      <section className="section">
        <div className="prose fade-in">
          <h2>We are researchers who build. Strategists who ship. Engineers who stay until the system works.</h2>
          <p>
            Most firms stop at the recommendation. We arrive with the plan and the capacity to ship it. We
            don&rsquo;t call an engagement done until the system is live, your people are trained, and you can
            run it yourself. That is the difference between a vendor and a partner.
          </p>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading fade-in">What We Believe</h2>
          <div className="prose" style={{ marginTop: "2.5rem" }}>
            {BELIEFS.map(([heading, body]) => (
              <div className="fade-in" key={heading}>
                <h3>{heading}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2" style={{ marginTop: 0 }}>
          <div className="card fade-in">
            <span className="card-tag">Our Vision</span>
            <h3 style={{ marginTop: "0.5rem" }}>Africa&rsquo;s trusted partner in transformation.</h3>
            <p>
              To become Africa&rsquo;s trusted partner for transforming ideas, organisations and societies
              through research, innovation and intelligent technologies that create lasting impact.
            </p>
          </div>
          <div className="card fade-in">
            <span className="card-tag">Our Mission</span>
            <h3 style={{ marginTop: "0.5rem" }}>Enabling sustainable growth, deliberately.</h3>
            <p>
              We partner with governments, businesses, development organisations and communities to solve
              complex challenges through strategic research, systems thinking, AI and digital innovation —
              enabling sustainable growth and empowering possibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading fade-in">Why ThinkingHead</h2>
          <p className="section-intro fade-in">Eight differentiators — the full detail lives in the Corporate Profile.</p>
          <div className="grid grid-2">
            {DIFFERENTIATORS.map((d) => (
              <div className="card fade-in" key={d.name}>
                <h3>{d.name}</h3>
                {d.body ? <p>{d.body}</p> : <Placeholder>full paragraph from Corporate Profile, {d.page}</Placeholder>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section center-block">
        <p className="fade-in" style={{ maxWidth: "42.5rem", margin: "0 auto", color: "rgba(45,45,45,0.85)" }}>
          ThinkingHead Nigeria Limited &middot; {CONTACT.rc} &middot; Incorporated under CAMA 2020 &middot;
          Corporate Affairs Commission, Nigeria &middot; Kaduna, Nigeria
        </p>
        <div className="fade-in" style={{ marginTop: "1.5rem" }}>
          <ProfileDownload />
        </div>
      </section>
    </>
  );
}
