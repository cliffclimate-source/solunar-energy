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

## What works now vs. next

- ✅ The Studio shell + content **schemas** are installed and build cleanly. The site header/footer
  are hidden on `/studio`.
- ⏭️ **Content migration is the next phase.** Today the live pages render from typed content in
  `src/content/`. To make edits in the Studio update the live site, the content is migrated into
  Sanity and the pages are switched to read from it (with a safe fallback to the in‑code content).
  This is done incrementally — starting with **Site Settings** (contact, address) and the
  **Products / Knowledge** collections — so the site never breaks during the transition.

> Until a real `NEXT_PUBLIC_SANITY_PROJECT_ID` is set, the Studio runs against a placeholder and
> the public site simply uses the in‑code content — so nothing breaks.
