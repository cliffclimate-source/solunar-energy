# Deploying solunar.my

The site is a Next.js app with a server-side contact form, so it needs a Node-capable
host. We use **Vercel** (free tier) + **ServerFreak** (DNS for the domain) + **Resend**
(contact-form email).

---

## Step 1 — Push to GitHub

Create an empty repo named `solunar-energy` (no README/license) under the GitHub
account `solunar-energy`, then from this folder:

```bash
cd solunar-energy            # this directory (the Next.js app)
git branch -M main
git remote add origin https://github.com/solunar-energy/solunar-energy.git
git push -u origin main
```

After this, every `git push` auto-deploys to Vercel.

---

## Step 2 — Import on Vercel

1. Sign up at https://vercel.com → **Continue with GitHub**.
2. **Add New → Project** → import `solunar-energy`.
3. Framework auto-detects **Next.js**. Leave **Root Directory** as the default (`./`).
4. Add **Environment Variables** (Settings → Environment Variables):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://solunar.my` |
   | `CONTACT_EMAIL` | `jimmy@solunar.my` |
   | `RESEND_API_KEY` | _(from Step 3)_ |

5. **Deploy** → you get a live `…vercel.app` URL.

---

## Step 3 — Contact-form email (Resend)

1. Sign up at https://resend.com (free tier).
2. **Domains → Add Domain** → `solunar.my`. Resend shows DNS records (SPF + DKIM,
   usually TXT/CNAME). Add them at ServerFreak (Step 4).
3. **API Keys → Create** → copy the key → paste as `RESEND_API_KEY` in Vercel.
4. Once `solunar.my` is verified in Resend, update the sender in
   `src/app/api/contact/route.ts` from `onboarding@resend.dev` to
   `Solunar Website <noreply@solunar.my>`, commit and push.

Until this is configured, the form still works — it returns success and logs the
enquiry server-side (visible in Vercel → Logs), it just doesn't email yet.

---

## Step 4 — Connect solunar.my (DNS at ServerFreak)

1. In Vercel: **Project → Settings → Domains → Add** `solunar.my`, then add
   `www.solunar.my`. Vercel shows the exact records to create.
2. Log in to the **ServerFreak Client Area** (https://www.serverfreak.com → Client
   Login). Find DNS management:
   - If the domain uses ServerFreak hosting/nameservers: **Services → your hosting →
     login to DirectAdmin → DNS Management** (or **Account Manager → DNS Management**).
   - If it's a domain-only registration: **Domains → Manage → DNS / Nameservers →
     DNS Management**.
3. Add these records (use the exact values Vercel shows — defaults below):

   | Type | Host / Name | Value | TTL |
   |------|-------------|-------|-----|
   | A | `@` (root / solunar.my) | `76.76.21.21` | default |
   | CNAME | `www` | `cname.vercel-dns.com` | default |

   Plus the **Resend** TXT/CNAME records from Step 3 (these are separate — they
   authorize email; they don't conflict with the Vercel website records).

4. Save. DNS can take a few minutes to a few hours. Vercel auto-issues the SSL
   certificate once it sees the records → site live at **https://solunar.my**.

> Note: a root/apex domain (`solunar.my`) must use an **A record**, not a CNAME — that
> is why `@` points to an IP and only `www` uses a CNAME.

---

## Updating the site later

Edit content in `src/content/`, commit, and `git push` — Vercel rebuilds and deploys
automatically. No manual steps.
