# Solunar Energy — Corporate Marketing Website

A premium, fast, SEO- and AIO-optimised marketing site for **Solunar Energy Sdn Bhd**, a Malaysia‑based **Solar + Battery Energy Storage System (BESS)** technology distributor and system integration partner that supports EPCC companies, developers and asset owners.

> **Positioning:** Solunar is **not an EPCC**. It is the **technology partner behind EPCCs** — supplying battery storage, GoodWe inverters/batteries, selected BYD battery integration, EVE BESS integration, PCS/EMS coordination and O&M.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3.4** with design tokens as CSS variables
- **lucide-react** icons
- Fonts via `next/font/google`: **Space Grotesk** (display), **Inter** (body), **IBM Plex Mono** (technical labels)
- Static generation for every marketing page; one dynamic route handler for the contact form
- Deploy target: **Vercel**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static export of all pages)
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
```

## Environment variables

Create `.env.local` (none are required for local development; the contact form degrades gracefully):

```bash
# Public site origin — used for canonical URLs, sitemap, Open Graph, JSON-LD.
NEXT_PUBLIC_SITE_URL="https://www.solunar.com.my"

# Contact form email delivery (optional until launch).
CONTACT_EMAIL="enquiries@your-domain.com"   # inbox that receives enquiries
RESEND_API_KEY="re_xxxxxxxx"                # https://resend.com (or swap provider)
```

If `CONTACT_EMAIL` / `RESEND_API_KEY` are not set, the API route logs the submission server‑side and the form still returns success so the UX can be tested. No secrets are hardcoded.

## Project structure

```
src/
  app/                     # routes (one folder per page) + sitemap.ts, robots.ts, api/contact
  components/
    layout/                # Header, Footer, Breadcrumbs, PageHero, StandardPage
    ui/                    # Button, Card, ComparisonTable, FAQAccordion, CTABand, Stat, primitives…
    blocks/Blocks.tsx      # renders typed content blocks (prose/list/table/cards/faq/cta…)
    home/Hero.tsx          # bespoke homepage hero + system-architecture visual
    forms/ContactForm.tsx  # project-assessment form (client validation)
    seo/JsonLd.tsx         # JSON-LD <script> helper
  content/
    home.ts                # homepage copy (10 sections)
    pages/                 # positioning / technology / solutions / industries / knowledge / contact
    types.ts               # content block model
    index.ts               # standardPages + allPaths (used by sitemap)
  lib/                     # site config, metadata helper, JSON-LD builders, cn()
public/                    # favicon.svg, og-image.svg
```

**All page copy is the single source of truth in `src/content/`.** Edit text there — the routes are thin wrappers that feed content into the shared layout.

## SEO / AIO

- Per‑page SEO titles + meta descriptions, canonical URLs, Open Graph + Twitter cards (`src/lib/metadata.ts`).
- Exactly one keyword‑bearing `<h1>` per page; answer‑first opening paragraph; lead‑in sentence before every list.
- JSON‑LD: `Organization` + `LocalBusiness` (sitewide), `Service` (service pages), `Brand` mentions (technology pages), `FAQPage` (every FAQ block), `BreadcrumbList` (all inner pages).
- `app/sitemap.ts` (all 30 URLs) and `app/robots.ts`.

## Deployment (Vercel)

1. Push this folder to a Git repository.
2. Import the project in Vercel (framework auto‑detected as Next.js).
3. Add the environment variables above in Project → Settings → Environment Variables.
4. Deploy.

## ✅ Before launch checklist

Replace these clearly‑marked placeholders before going live:

- [ ] **Domain** — set `NEXT_PUBLIC_SITE_URL` (default placeholder is `https://www.solunar.com.my` in `src/lib/site.ts`).
- [ ] **Contact details** — real email, phone and registered address in `src/lib/site.ts` (`contact`, `address`).
- [ ] **Social links** — add real profile URLs in `src/lib/site.ts` (`social.linkedin`, …); they feed `sameAs` in schema.
- [ ] **Email provider** — set `CONTACT_EMAIL` + `RESEND_API_KEY`, and use a **verified sender domain** for the `from` address in `src/app/api/contact/route.ts`.
- [ ] **OG image** — `public/og-image.svg` is a branded placeholder; export a **1200×630 PNG** for best social‑platform compatibility and point `src/lib/metadata.ts` at it.
- [ ] **Hero visual** — `src/components/home/Hero.tsx` uses a custom technical "system architecture" graphic. Swap for real energy‑infrastructure photography (with a dark navy gradient overlay) if preferred.
- [ ] **Real photography / alt text** — add project, product and site imagery where useful, using the descriptive, keyword‑bearing alt text described in the content brief.
- [ ] **Knowledge Centre** — article routes are answer‑first **stubs** (`src/content/pages/knowledge.ts`); expand the bodies over time.
- [ ] **Validate** — run the page URLs through Google's [Rich Results Test](https://search.google.com/test/rich-results) and run Lighthouse (targets: SEO 100, Accessibility ≥ 95, Performance ≥ 90).

## Content fidelity rules (do not break)

Solunar never claims to provide full EPCC services, construct projects, be the main contractor, replace the EPCC, guarantee savings, or be "number one." Always use the careful wording already in the copy: *selected*, *where suitable*, *subject to project design*, and *savings depend on site load profile, tariff, system size and operating strategy*.

---

> Note: an earlier static HTML prototype lives in the sibling `../solunar/` folder. It is superseded by this Next.js build and left untouched.

© Solunar Energy Sdn Bhd

<!-- deploy trigger -->
