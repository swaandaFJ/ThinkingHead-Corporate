# ThinkingHead — Corporate Website

The public website for **ThinkingHead Nigeria Limited** (RC 8611016), an AI-powered research, strategy and
digital transformation firm in Kaduna, Nigeria. It exists to do three things for a visitor:

1. **Show that ThinkingHead thinks before it builds** — through its method, its work and its point of view.
2. **Make starting a real conversation easy** — from the contact page, or straight from any service.
3. **Establish credibility fast** — registration, leadership background and track record, in under a minute.

**Audience:** executives and procurement teams at Nigerian enterprises, government agencies and development
organisations; prospective hires and technical partners. Many visit on mid-range phones over 3G, so the site is
built to be light and fast.

## What it does

| Page | Purpose |
|---|---|
| **Home** `/` | Who ThinkingHead is, what it believes, and why it matters. |
| **About** `/about` | Worldview, vision, mission, registration, the eight differentiators. |
| **Services** `/services` | The eight service pillars. **Every pillar has an "Ask about this service" button** that opens an enquiry form in a pop-up, so visitors never leave the page. The enquiry records which service it came from. |
| **Method** `/method` | The eight-step delivery method, Discover to Scale. |
| **Work** `/work` | Signature projects and industries served. |
| **Leadership** `/leadership` | The two founders. |
| **Let's Talk** `/contact` | Contact details, map and the discovery-conversation form. |
| **Insights** `/insights` | Research, frameworks and perspectives (Markdown articles). Hidden until at least one article is published. |
| **Corporate Profile** | The footer's "Download Corporate Profile" opens a short form (name, email, organisation), then offers the PDF. |

Every page maps to one of four layers: what we **believe** → how we **think** → what we've **built** → what we **know**.

## Getting started

You need **Node.js 20.9 or newer** (Node 18 will not work).

```bash
node -v                      # must print v20.9.0 or higher (v22 is fine)
npm install                  # downloads dependencies (first time only)
cp .env.example .env.local   # on Windows: copy .env.example .env.local
npm run dev                  # then open http://localhost:3000
```

If `node -v` is older or "not found", install the current LTS from nodejs.org first.

`.env.local` ships in **test mode** (`NEXT_PUBLIC_FORM_DRY_RUN=true`): forms show the success message and print what
*would* have been sent in the browser console (press F12 → Console), but send nothing. Restart `npm run dev` after
changing `.env.local`.

Other commands: `npm run build` (production build) · `npm start` (serve it) · `npm run lint` (check code).

## Connecting the forms

Every form (service enquiry, contact, profile download) is sent by one file: `lib/submitForm.js`.

1. Create a free account at [formspree.io](https://formspree.io), add a form, copy its endpoint
   (looks like `https://formspree.io/f/abc1234`).
2. Put it in `.env.local` as `NEXT_PUBLIC_FORM_ENDPOINT=...` and **remove** the `DRY_RUN` line.
3. Confirm the notification email Formspree sends. Until you do, submissions are not delivered.

Each submission arrives by email with a subject such as *"Service enquiry: AI Strategy & Transformation"* and
fields for `service` and `source`, so the team always knows where it came from.
To switch form service later (or to a small serverless function), edit only `lib/submitForm.js`.

**Limits to know about**
- Spam protection is a hidden honeypot field plus whatever the form service enforces. Rate limiting cannot be done
  in the browser; it has to live on the service or a server function. Free plans have a monthly submission cap, so
  check the service's current limits.
- The WhatsApp notification in the BRD is **not** included; notification is by email. WhatsApp needs an automation
  tool or a small serverless function.
- The Corporate Profile download captures leads but is not true access control: on a static site the PDF sits at
  a public address.

## Where to change things

| To change… | Edit |
|---|---|
| Service names, descriptions, bullet lists | `lib/services.js` |
| Method step descriptions | `lib/method.js` |
| Projects and industries | `lib/projects.js` |
| Phone, email, address, domain, PDF path, success message | `lib/site.js` |
| Colours, fonts, spacing, the modal and form styles | `app/globals.css` (colour tokens at the top) |
| Logo mark | `components/Logo.js` and `app/icon.svg` |
| Share-preview image | `public/images/og-image.jpg` (1200×630) |

**Placeholders.** Copy that must come from the Corporate Profile is marked `[Placeholder — …]` on the page. In the
`lib/` files it is a `null` value: replace `null` with real text and the placeholder disappears. Search the
project for `Placeholder` to find every remaining spot.

**Corporate Profile PDF.** Save it as `public/downloads/ThinkingHead-Corporate-Profile.pdf` (or change
`PROFILE_PDF_PATH` in `lib/site.js`). Until the file exists, the download button leads to a 404.

## Publishing an Insight

1. Copy `content/insights/_template.md`, rename the copy (the file name becomes the web address,
   e.g. `payroll-handovers.md` → `/insights/payroll-handovers`).
2. Fill in the details at the top, write the article in Markdown, and set `draft: false`.
3. Commit and deploy. The Insights link, list page, article page and sitemap entry all appear automatically.
   With no published articles, the Insights link and page do not exist.

## Deploying

The site is statically generated, so it is fast and cheap to host. **Vercel** is the most direct route:

1. Push the project to GitHub.
2. In Vercel, import the repository (no settings to change).
3. Add environment variables: `NEXT_PUBLIC_SITE_URL` (the real domain, no trailing slash) and
   `NEXT_PUBLIC_FORM_ENDPOINT`. Do **not** set `NEXT_PUBLIC_FORM_DRY_RUN`.
4. Add the domain in Vercel and point DNS at it.

Security headers (HSTS, frame protection, a Content-Security-Policy) are set in `next.config.mjs`. The CSP allows
inline scripts because Next.js uses a few; a stricter nonce-based policy is a possible later hardening.
Analytics (GA4, Microsoft Clarity) load only if `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` are set.
Cloudflare Pages needs an extra adapter for Next.js; check Cloudflare's current guide before choosing it.

## Brand

Teal `#2E6B5C` (headings, nav, buttons) · Gold `#D2AB67` (borders and decoration only) · Dark gold `#7F5F18` (all gold-coloured text) · Cream `#F5EDDD` (background; also the text colour on teal buttons) · Ink `#2D2D2D` (body text).
Fonts: Playfair Display (headings), Inter (body), JetBrains Mono (labels), all self-hosted in `app/fonts`.
Tagline: *Improving Systems. Enabling Possibilities.*
