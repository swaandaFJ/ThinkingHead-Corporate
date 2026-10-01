# ThinkingHead — Corporate Website

## What this is

The public website for **ThinkingHead Nigeria Limited** (RC 8611016), an
AI-powered research, strategy, and digital transformation firm
headquartered in Kaduna, Nigeria. ThinkingHead partners with governments,
enterprises, development organisations, and mission-led institutions to
turn complex challenges into working systems — through research, systems
thinking, artificial intelligence, and disciplined engineering.

The site exists to do three things for a visitor:

1. **Prove ThinkingHead thinks before it builds** — through the depth of
   its methodology, case studies, and point of view, not just a list of
   services.
2. **Make it easy to start a real conversation** — every page leads,
   without friction, to a genuine discovery conversation rather than a
   sales funnel.
3. **Establish institutional credibility fast** — registration details,
   leadership background, delivery track record, and partnership model
   are all surfaced clearly, so a procurement officer or executive can
   find what they need in under a minute.

## Who it's for

- **Executives and decision-makers** at Nigerian enterprises, government
  agencies, and development organisations, evaluating whether
  ThinkingHead is a credible partner for a transformation effort.
- **Procurement and vendor-assessment teams** who need company
  registration, capability statements, and track record on hand.
- **Prospective hires and technical partners** assessing whether the
  work and the culture are worth joining.

## Pages

| Page | Purpose |
|---|---|
| **Home** (`index.html`) | The opening statement — who ThinkingHead is, what it believes, and why it matters, in one pass through all four layers below. |
| **About** (`about.html`) | ThinkingHead's worldview — how it thinks about systems, technology, AI, Africa, and accountability — plus vision, mission, and company registration. |
| **Services** (`services.html`) | The eight service pillars, from research and strategy through to production systems, automation, and capability transfer. |
| **Method** (`method.html`) | The eight-step delivery methodology every engagement runs through, from Discover to Scale. |
| **Work** (`work.html`) | Signature projects and the industries ThinkingHead serves — the method, made real. |
| **Leadership** (`leadership.html`) | The two founders, their backgrounds, and what each leads at ThinkingHead. |
| **Let's Talk** (`contact.html`) | The path to a discovery conversation — contact details, office location, and an enquiry form. |

Two pages aren't live yet — **Insights** (original research, frameworks,
and perspectives) is waiting on real published content, and the gated
**Corporate Profile** download is still to be built.

## The four layers

Every page maps to one of four things the site is built to make visible:

1. **What we believe** — worldview and principles (About)
2. **How we think** — methodology and reasoning (Method)
3. **What we've built** — case studies and outcomes (Work)
4. **What we know** — original research and perspectives (Insights)

If a piece of content on the site doesn't serve one of these, it doesn't
belong.

## URLs, domain, and clean paths — please confirm before launch

Every canonical/OG URL, the sitemap, and `robots.txt` assume:

- **Production domain**: `https://www.thinkinghead.ng` — this is a
  placeholder based on the `hello@thinkinghead.ng` email address already
  in the footer. Confirm the real domain before launch and replace every
  occurrence (search for `thinkinghead.ng` across the project — it's the
  `SITE_URL` constant in `/build/gen.py` if you're regenerating pages,
  otherwise find-and-replace directly in the HTML/XML/txt files).
- **Clean URLs** (`/about` instead of `/about.html`) — Netlify and Vercel
  both do this automatically for a static folder like this one; GitHub
  Pages does not. If you deploy anywhere that doesn't strip `.html`
  automatically, either configure redirects on your host or add `.html`
  back into the sitemap, `robots.txt`, and the canonical/OG tags.

## Wiring the contact form

The "Let's Talk" form submits to [Formspree](https://formspree.io) — a
service that emails form submissions to an inbox, with no backend code to
write or host. To activate it:

1. Create a free account at formspree.io and add a new form.
2. Formspree gives you an endpoint like `https://formspree.io/f/abc1234`.
3. In `contact.html`, find the `<form>` tag and replace
   `YOUR_FORM_ID` in its `action` attribute with your real ID.
4. Confirm the notification email Formspree sends the first time someone
   submits — until you confirm it, submissions won't be delivered.

That's it — no server, no API key in the code, nothing else to deploy.
The honeypot field (`_gotcha`) is Formspree's own spam convention, so bot
submissions are discarded automatically on their end.

## Running it

No install, no build step. Open `index.html` directly in a browser, or
use a local live-reload tool (e.g. VS Code's "Live Server" extension) for
convenience while editing.

## Brand

| Token | Hex | Use |
|---|---|---|
| Teal | `#2E6B5C` | Headings, navigation, primary CTAs, logo |
| Gold | `#D2AB67` | Taglines, secondary CTAs, outcome statements |
| Cream | `#F5EDDA` | Page background |
| Ink | `#2D2D2D` | Body text |

Typefaces: **Playfair Display** (headings), **Inter** (body),
**JetBrains Mono** (step numbers, labels, reference codes).

Tagline: *Improving Systems. Enabling Possibilities.*
