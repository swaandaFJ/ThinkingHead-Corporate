"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

// `links` is decided on the server (the Insights link only appears once there is
// published content), then handed to this client component.
export default function Nav({ links }) {
  const pathname = usePathname();
  const closeRef = useRef(null);

  // The menu remembers WHICH page it was opened on. It counts as open only while we are
  // still on that page, so it closes by itself the moment the page changes (link tap,
  // browser Back button, anything) with no extra code needed.
  const [openAt, setOpenAt] = useState(null);
  const open = openAt === pathname;
  const close = () => setOpenAt(null);

  // While the menu is open: lock page scroll, move focus into it, allow Escape to close
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpenAt(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isCurrent = (href) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary">
              Let&rsquo;s Talk
            </Link>
          </nav>

          <button
            className="nav-toggle"
            onClick={() => setOpenAt(pathname)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu is-open" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu-header">
            <Logo />
            <button
              ref={closeRef}
              className="mobile-menu-close"
              onClick={close}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <nav className="mobile-menu-links" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={close} aria-current={isCurrent(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary" onClick={close}>
              Let&rsquo;s Talk
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
