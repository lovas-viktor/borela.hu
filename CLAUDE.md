# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Borela BT. — borela.eu

Project memory, loaded at the start of every session. Keep it short and signal-dense.
Edit ruthlessly when something becomes stale.

Full website redesign + brand identity for **Borela BT.** (`borela.eu`), a Hungarian
family-owned precision CNC contract machining company (founded 1953, HQ in Izsák).

- **Audience:** B2B procurement engineers / technical leads at large Western-European and
  Japanese Tier-1 OEMs (automotive, commercial vehicles & brake systems, power tools,
  sealing technology, general engineering).
- **Positioning:** "Western-European quality at Eastern-European cost." Dynamic, modern
  automotive supplier; strong price–value ratio.

---

## Tech Stack

- **Next.js 15.5** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 3.4** (config-driven tokens, no UI framework)
- Fonts: **Public Sans** + **JetBrains Mono** via `next/font/google` — these are
  **self-hosted at build time** (the "Google Fonts API returns HTML" pitfall does not apply
  to `next/font`).
- **Static export:** `next.config.ts` → `output: "export"`, `trailingSlash: true`,
  `images.unoptimized: true`. Build output is `out/`.
- **Deployment:** Cloudflare Workers static assets — `wrangler.toml` (`[assets] directory = "out"`,
  `run_worker_first = true`) + `worker.js`. The worker currently gates the site behind a
  custom **login page** (preview password protection — see commits `bba5a3a`, `09cf885`).
- Package manager: **npm** (`package-lock.json` committed).
- Media files over 25 MiB go to **Cloudflare R2**, not Pages/Workers assets.

---

## Commands

- Dev server: `npm run dev`
- Build (static export → `out/`): `npm run build`
- Lint: `npm run lint`
- Deploy: via Cloudflare Wrangler (`wrangler.toml` present); build first, then publish `out/`.
- **No test framework is configured** — there is no test runner, no `test` script, and no spec
  files. Verify changes via `npm run build` (catches type errors) + `npm run lint`.

---

## Architecture / Layout

- `app/` — App Router routes, one `page.tsx` per route. `layout.tsx` wires fonts, Header,
  Footer, SkipLink, and root JSON-LD. `sitemap.ts`, `robots.ts`, `not-found.tsx` are present.
  Existing pages: home, `services`, `capabilities`, `industries`, `references`, `about`,
  `contact`, `rfq`.
- `components/` — layered: `primitives/` (Button, Logo, Stat, Breadcrumb, SectionLabel) →
  `blocks/` (Hero, CtaBlock, FAQAccordion, StatGrid, SpecCard, IndustryRow, TrustStrip,
  CertificationCard) → `layout/` (Header, Footer, Container, SkipLink) → `forms/`
  (ContactForm, RfqForm) → `seo/` (JsonLd, schemas.ts).
- `data/` — content as typed TS modules (`site.ts`, `services.ts`, `capabilities.ts`,
  `industries.ts`, `certifications.ts`, `faqs.ts`, `cases.ts`, `partners.ts`, `locations.ts`).
  **Edit copy here**, not inline in components.
- `lib/seo.ts` — metadata helpers. `components/seo/schemas.ts` — Schema.org JSON-LD.
- `public/` — `borela-logo.svg`, `manifest.webmanifest`.
- `_source/` — **authoritative reference, not shipped code** (see Reference Docs below).
- **Imports use the `@/*` path alias** (→ repo root, per `tsconfig.json`), e.g.
  `import { Button } from "@/components/primitives/Button"`. `_source` is excluded from the
  TS project and Tailwind `content` globs, so it never affects builds.

**Reuse and recombine existing components.** Do not invent new component patterns unless a
page genuinely requires it.

---

## Current Implementation Status (2026-05) — read before adding pages

- **English only (Phase 1).** The trilingual EN/DE/HU requirement is **not implemented**;
  there is no i18n routing and no hreflang yet.
- **Dangling nav links:** `components/layout/Header.tsx` links to routes that don't exist yet
  — `/careers/` and the `/services/<sub>/` detail pages (e.g. `/services/cnc-turning/`,
  `/services/heat-treatment/`). Building those (or fixing the links) is open work.
- **Forms are front-end stubs.** `ContactForm` and `RfqForm` `handleSubmit` only set local
  `submitted` state — **no backend, no email, nothing is actually sent.** A real submission
  path (e.g. a Cloudflare Worker endpoint + email) is required before launch.
- **Missing pages vs. spec:** dedicated **Locations** page (local SEO) and **Careers** page.

---

## Site Structure (target — trilingual)

- **EN** at root (primary), **DE** for DACH, **HU** secondary (mainly HR/careers + local SEO).
- Hreflang tags required on all pages once DE/HU land.
- Each page carries Schema.org JSON-LD (FAQPage, Service, LocalBusiness, JobPosting as applicable).

---

## Design System

Authoritative spec: **`_source/docs/DESIGN.md`** (full token tables). Tokens are encoded in
`tailwind.config.ts`. Key points:

- Aesthetic: "German Engineering Catalogue" — utilitarian, high-density, authoritative.
  Terse, factual copy. Forbidden marketing words: "innovative", "cutting-edge", "world-class".
- Always write the brand as **"BORELA BT."** (not just "BORELA" outside the logo lockup).
- Headlines/body: **Public Sans**. Labels/technical data/tabular numerals: **JetBrains Mono**.
- Accent: **Safety Blue `#1A48C2`** (`primary`) — the sole functional accent (CTAs, logotype
  dot, pre-labels). *(The old PRD's "Safety Orange #C24F1A" is superseded.)*
- Warm-paper surfaces (`background #fbf9f4`), `ink #0A0A0A`. 1px hairline dividers,
  **max 2px corner radius**, no shadows/gradients.

---

## HARD CONSTRAINTS (do not violate)

- **Contact ≠ RFQ separation.** Contact page = short form only (name/email/message) + one
  secondary RFQ callout. **File upload belongs EXCLUSIVELY on the RFQ page.**
- **Max one primary CTA + one secondary CTA per page.** Site-wide rule.
- **Content accuracy is paramount.** Never invent specs, testimonials, addresses, phone
  numbers, geo-coordinates, or partner data. Unconfirmed data must render as a **visible
  placeholder**.
- **Heat treatment is fully outsourced** — describe only as "coordinated via partner", never
  in-house.
- **Swiss-type turning** = one Citizen Cincom machine only — NOT a positioning pillar.
- **Precision tolerance: ±0.01 mm standard.** ±0.001 mm requires grinding, which is NOT offered.

---

## Confirmed Company Facts (must be accurate in all copy)

- Three facilities: **Jakabszállás** (primary plant, 3,000 m²), **Fülöpszállás** (secondary
  machining — NOT heat treatment), **Izsák** (HQ, Garai u. 6, 6070).
- 40 CNC lathes, 6 machining centers. Key machines: Citizen-Miyano BNE 51 MSY, Index C65,
  Goodway GLS-3300 YS, Citizen Cincom L32A-1M8, Rösler vibratory finishing.
- Certifications: ISO 9001 (since 1996), ISO 14001 (since 2005), VDA 6.3 (2016),
  Knorr-Bremse PSA (2007).
- Series sizes: 500–100,000 pieces; ships primarily to Western Europe and Japan.
- Reference customers (rendered text-only — no logos, brand-use legal risk):
  Knorr-Bremse, Mercedes-Benz Manufacturing Hungary, Hilti, Freudenberg, Sulzer,
  Phoenix Mecano, Zarges.
- Confirmed personal contact: Anita Bognár, Quality & Environmental Manager,
  +36 20 523 0769, anita.bognar@borela.hu
- Site-facing contact in use (from content plan): rfq@borela.eu · +36 76 569 122 · Izsák HQ.

---

## Pending Client Inputs (verify before treating as final)

Some were provisionally resolved in code from the content plan — re-confirm with the client:

- Full addresses + phone numbers for Jakabszállás and Fülöpszállás plants (currently
  city-level only; Fülöpszállás "2,000 m²" is unconfirmed).
- Opening hours for all three locations; geo-coordinates for LocalBusiness schema / map pins.
- **Founding-date framing inconsistency:** schema uses `1990` (legal entity) while copy says
  "70+ years / 1953" (heritage). Pick one story and align.
- Email finalization: whole site communicates `@borela.eu` — confirm the `.hu → .eu` switch.
- Centrifugal cast bronze slide bearing service status (affects service section count).
- Whether leadership is named individually or narrative-only; genuine testimonials vs. placeholder.

---

## Reference Docs (`_source/` — authoritative, do not duplicate inline)

- `_source/docs/borela_bt._project_prd.md` — project brief / PRD.
- `_source/docs/DESIGN.md` — design system (authoritative for tokens & rules).
- `_source/docs/borela_uj_tartalmi_struktura_v1-1.md` — v1.1 content + SEO strategy
  (authoritative; was a reality-correction pass — re-check any copy touching heat treatment
  or Swiss-type turning against it).
- `_source/Content plan/*.md` — per-page content plans (capabilities, industries, references,
  about/rolunk, careers/karrier, rfq).
- `_source/Claude Design/` — approved static HTML mockups (visual reference; `Borela.html` =
  homepage).
- `_source/brand/`, `_source/_archive/` — logo source + earlier prototype.

> Note: an older planning copy of these docs also lives in the sibling `../Borela v2/` folder;
> the `_source/` versions here are newer/more complete and take precedence.
