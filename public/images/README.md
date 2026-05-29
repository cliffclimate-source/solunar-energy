# Image slots & AI-generation prompts

The site is wired for images but ships with on-brand **placeholders** (no photos were
auto-generated). To add a photo: generate it (Midjourney / DALL·E / Adobe Firefly /
Google Imagen), save it into this folder with the filename below, and set its `src`.

**General specs:** JPG or WebP, landscape **4:3** (≈1200×900) unless noted, < 350 KB.
`next/image` handles optimisation. Keep the descriptive `alt` text (it's SEO/AIO copy).

For people shots, the brief asks for a **Malaysian context** — e.g. *Malaysian Chinese
engineers* in a Kuala Lumpur setting (noted in the relevant prompts).

| Filename | Where to set `src` | Prompt |
|---|---|---|
| `home-bess-containers.jpg` (16:7, ≈1600×700) | `src/app/page.tsx` → Technology section `<Figure src=…>` | Battery energy storage containers integrated with PCS and EMS at a site in Malaysia; rows of containers, transformers, clear sky, wide angle, photorealistic. |
| `about-team.jpg` | `src/content/pages/positioning.ts` → `about.image.src` | Team of Malaysian Chinese engineers (mixed gender, business-casual) reviewing battery storage project plans in a modern Kuala Lumpur office, city view, natural light, candid, professional. |
| `byd-battery.jpg` | `src/content/pages/technology.ts` → `bydBattery.image.src` | BYD Battery-Box LFP storage cabinets in a clean electrical room at a commercial facility in Malaysia, neat cabling, safety signage, bright lighting. |
| `goodwe-inverter.jpg` | `technology.ts` → `goodweInverter.image.src` | GoodWe hybrid solar inverter wall-mounted in a tidy plant room at a Malaysian commercial building, neat conduits, daytime. |
| `eve-bess.jpg` | `technology.ts` → `eveBess.image.src` | EVE LFP battery modules and racks inside a containerised BESS with cooling and BMS units, clean industrial interior, Southeast Asia. |
| `multi-brand-integration.jpg` | `technology.ts` → `multiBrand.image.src` | Mixed-brand BESS integration — battery racks, PCS cabinet and EMS controller wired together, a Malaysian Chinese engineer reviewing on a tablet, Malaysia. |
| `pcs-ems.jpg` | `technology.ts` → `pcsEms.image.src` | PCS power-conversion cabinets and an EMS control panel with a SCADA screen in a tidy BESS electrical room, Malaysia. |
| `commercial-industrial-bess.jpg` | `src/content/pages/solutions.ts` → `commercialIndustrial.image.src` | Commercial & industrial battery storage cabinets beside a Malaysian factory, rooftop solar visible, daytime, wide angle. |
| `utility-scale-ess.jpg` | `solutions.ts` → `utilityScale.image.src` | Rows of utility-scale BESS containers at a large solar farm in Malaysia / Southeast Asia, transformers, wide aerial perspective, blue sky. |
| `bess-om.jpg` | `solutions.ts` → `bessOm.image.src` | Malaysian Chinese engineer in PPE inspecting a BESS container with a tablet, checking racks and cooling, O&M context, daytime. |
| `bess-safety.jpg` | `solutions.ts` → `bessSafety.image.src` | Interior of a BESS container showing fire detection sensors, suppression nozzles and thermal-management ducting, safety-focused, well-lit. |
| `peak-shaving.jpg` | `solutions.ts` → `peakShaving.image.src` | Malaysian factory exterior with rooftop solar and a battery storage cabinet, daytime, peak-demand context, modern. |
| `industries.jpg` | `src/app/industries/page.tsx` → `industriesPage.image.src` | Malaysian industrial estate — factory, data centre and cold-storage buildings with rooftop solar and battery storage, daytime, wide shot. |

## Optional

- `og-image.png` (1200×630) — replace the placeholder `public/og-image.svg` with a branded
  PNG for best social-platform compatibility, then point `src/lib/metadata.ts` at it.
- `brands/byd.svg`, `brands/goodwe.svg`, `brands/eve.svg` — official partner logo SVGs to
  replace the text tiles in `src/components/home/BrandStrip.tsx` (use official brand assets only).

> Tip: once a file is in place, set `src: '/images/<file>.jpg'` on that slot and it appears
> automatically — no other code changes needed. For remote image URLs instead of local files,
> add the host to `images.remotePatterns` in `next.config.mjs`.
