# Solunar CMS (Sanity Studio) — setup

The site now ships with an embedded **Sanity Studio** — a friendly, form-based dashboard for
editing content (closest thing to a Wix-style editor for this stack). It lives at **`/studio`**.

## 1. Create a free Sanity project

1. Sign up / log in at <https://www.sanity.io>.
2. Create a project, and create a dataset named **`production`** (public is fine to start).
3. Copy the **Project ID**.
4. In **Manage → API → CORS origins**, add `http://localhost:3000` and your production domain
   (e.g. `https://www.solunar.my`), with credentials allowed.

## 2. Configure the site

Create `.env.local` (copy from `.env.local.example`) and set:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Open the Studio

```bash
npm run dev
```

Visit **http://localhost:3000/studio**, log in with your Sanity account, and you'll see editable
document types: **Site Settings**, **Page**, **Product** and **Knowledge Article** — each with
text fields and image uploads.

## Pre-fill Site Settings (optional, one command)

After step 2, create an API token (Sanity → **Manage → API → Tokens**, with **Editor**
permission), then run:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id \
NEXT_PUBLIC_SANITY_DATASET=production \
SANITY_WRITE_TOKEN=sk_xxx \
npm run seed:sanity
```

This creates the **Site Settings** document with Solunar's current details. Edit it anytime
in `/studio`.

## What works now vs. next

- ✅ The Studio shell + content **schemas** are installed and build cleanly. The header/footer
  are hidden on `/studio`.
- ✅ **Site Settings is live-wired.** Once a project id is set, the footer and contact page read
  brand/contact details (phone, email, enquiry inbox, address, company no., LinkedIn) from Sanity —
  with a safe fallback to the in-code values in `src/lib/site.ts` if Sanity is empty or unreachable.
- ✅ **Products** and **Knowledge articles** have CMS schemas ready to populate.
- ⏭️ The rich marketing pages (home, solutions, technology) keep their premium typed layout
  (cards, steps, comparison tables, FAQ, image bands) in `src/content/` for design quality.

> Until a real `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, the Studio runs against a placeholder and
> the public site runs entirely on the in-code content — zero network calls, nothing breaks.
