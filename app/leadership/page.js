import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership — ThinkingHead | Ben Shekari & Ayodeji Olaniyan",
  description:
    "Two founders. A combined 25 years in enterprise systems, banking technology, and frontier product development.",
  path: "/leadership",
});

const LEADERS = [
  {
    role: "Founder & CEO",
    name: "Ben Shekari",
    bio: "Ben brings almost a decade of frontier product and technology experience from Marco Focus Nigeria Limited — one of Northern Nigeria’s pioneering software development companies — where he led the design and delivery of enterprise systems across multiple sectors. At ThinkingHead he leads strategy, AI product direction, executive research and client engagement. His practice combines systems thinking, deep research and AI engineering — helping clients move from ambition to defensible, working systems. He leads client engagement personally, from first question to final handover.",
  },
  {
    role: "CTO",
    name: "Ayodeji Olaniyan",
    bio: "Ayo brings 15+ years of enterprise technology leadership from three of Nigeria’s tier-one financial institutions — Zenith Bank, UBA and Wema Bank — where he delivered mission-critical systems at national scale. At ThinkingHead he leads the engineering practice across enterprise architecture, cloud, cybersecurity, DevOps and digital transformation. His standard is the one regulated industries demand: reliability, security and governance, built in from the start.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Layers 1&ndash;2</span>
        <h1>Two founders. One standard: build it properly.</h1>
      </section>

      <section className="section">
        {LEADERS.map((l, i) => (
          <div className="leader fade-in" key={l.name} style={i > 0 ? { marginTop: "3.5rem" } : undefined}>
            <div className="leader-photo">Photo placeholder &mdash; professional headshot to be taken</div>
            <div>
              <span className="leader-role">{l.role}</span>
              <h2>{l.name}</h2>
              <p>{l.bio}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="closing-cta">
        <h2 className="fade-in">We do the thinking and the building — and we stand behind both.</h2>
        <div className="fade-in" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Let&rsquo;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
