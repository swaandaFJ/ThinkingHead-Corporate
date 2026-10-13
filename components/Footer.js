import Link from "next/link";
import Logo from "@/components/Logo";
import ProfileDownload from "@/components/ProfileDownload";
import { CONTACT, TAGLINE } from "@/lib/site";

export default function Footer({ links }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo light />
          <p className="footer-tagline">{TAGLINE}</p>
          <p className="footer-rc">{CONTACT.rc}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="footer-links">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <span>Kaduna, Nigeria</span>
        </div>

        <div className="footer-actions">
          <ProfileDownload />
          <Link href="/contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ThinkingHead Nigeria Limited. All rights reserved.
      </div>
    </footer>
  );
}
