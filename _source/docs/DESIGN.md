# Borela BT. — Design System

## Brand Identity

**Company name:** BORELA BT. (always include "BT." — never just "BORELA" in brand contexts outside the logo lockup)  
**Aesthetic:** German Engineering Catalogue — utilitarian, high-density, authoritative. No decorative elements.  
**Copy tone:** Terse, factual, engineering-centric. Zero marketing adjectives ("innovative", "cutting-edge", "world-class" are forbidden).  
**Copyright:** © 2026 BORELA BT.

---

## Color System

### Primary — Safety Blue
The sole functional accent color. Use ONLY for: primary CTA buttons, critical data highlights, the logotype dot, section pre-labels.

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#1A48C2` | Primary CTA buttons, active states, logotype dot, pre-labels |
| `primary-hover` | `#1338A0` | Hover / pressed state on primary buttons |
| `primary-dark` | `#0D2570` | Deep blue for dark-section accents |
| `primary-light` | `#E4EEFF` | Subtle highlight backgrounds |
| `on-primary` | `#FFFFFF` | Text and icons placed on `#1A48C2` backgrounds |

### Neutral Surface — Warm Paper Tones
Not cold white or grey. The background palette evokes matte, off-white engineering paper.

| Token | Hex | Usage |
|---|---|---|
| `background` | `#fbf9f4` | Page background |
| `surface` | `#F4F2ED` | Card backgrounds, section fills |
| `surface-alt` | `#EAE7DF` | Alternate section fills, table row alternates |
| `surface-dark` | `#141414` | Dark inverse sections (KPI panel, footer) |
| `on-surface-dark` | `#F4F2ED` | All text on dark (`#141414`) sections |

### Ink / Text

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0A0A0A` | Primary body text, all headlines |
| `ink-secondary` | `#4A4A4A` | Secondary text, taglines, captions |
| `ink-tertiary` | `#6E716E` | Helper text, footnotes, disabled states |

### Borders

| Token | Hex | Usage |
|---|---|---|
| `border` | `#C8C5BE` | 1px hairline dividers — use liberally throughout |
| `border-strong` | `#A8A5A0` | Section separators, heavier dividers |
| `border-dark` | `#2A2A2A` | 1px borders inside dark (`#141414`) sections |

---

## Typography

Exactly two font families. No others.

### Public Sans
Used for: all headlines (H1–H4), navigation, body text, CTA button labels.
Import: `https://fonts.google.com/specimen/Public+Sans`

| Style | Weight | Size (desktop) | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display / H1 | 900 Black | 56–72px | 1.0 | -0.03em |
| H2 | 700 Bold | 32–40px | 1.1 | -0.02em |
| H3 | 600 SemiBold | 22–26px | 1.2 | -0.01em |
| Body | 400 Regular | 15–16px | 1.65 | 0 |
| CTA Label | 700 Bold | 13px | 1 | +0.02em UPPERCASE |
| Navigation | 600 SemiBold | 13px | 1 | +0.01em |

### JetBrains Mono
Used for: KPI numbers, technical labels, tabular data values, footer text. Never for body copy.
Import: `https://fonts.google.com/specimen/JetBrains+Mono`

| Style | Weight | Size (desktop) | Letter Spacing | Case |
|---|---|---|---|---|
| KPI Number | 700 Bold | 52–64px | -0.02em | Mixed |
| Technical Label | 500 Medium | 11px | +0.06em | UPPERCASE |
| Data / Footer | 400 Regular | 13px | +0.02em | Mixed |

---

## Layout & Spacing

- **Max width:** 1440px (content), full-bleed background sections allowed
- **Grid:** 12 columns, 32px gutters (desktop) / 24px (mobile)
- **Section vertical padding:** 96px (desktop) / 56px (mobile)
- **Component padding:** multiples of 8px (8 / 16 / 24 / 32 / 48px)
- **Border radius:** **2px maximum — everywhere**. No exceptions. No pills, no circles on UI elements.
- **Shadows:** None.
- **Gradients:** None. Flat color only.
- **Transparency:** Only allowed as dark photography scrim overlays (e.g., hero image tint).

---

## Visual Language Rules

1. **1px hairline borders** (`#C8C5BE`) used as primary visual separators between sections and components.
2. **Dark inverse sections** use `#141414` background — text switches to `#F4F2ED`. Used for KPI/metrics panels and the footer.
3. **Monochrome documentary photography** — factory floor, CNC machines, metal components. Black-and-white or heavily desaturated. No lifestyle photography.
4. **Technical pre-labels** in JetBrains Mono 500 UPPERCASE with `#1A48C2` color, +0.06em tracking. Format: `§01 — CAPABILITIES`
5. **Dense information layout** — data-forward, numbers-led. Pack content with purpose; decorative whitespace is forbidden.
6. **Section numbering** — all major sections get a `§XX` prefix label.

---

## Component Specifications

### Primary CTA Button — "GET QUOTE" / "REQUEST QUOTE" / "SUBMIT RFQ"
```
Background:     #1A48C2
Text:           #FFFFFF, Public Sans 700, 13px, UPPERCASE, +0.02em tracking
Padding:        12px 24px
Border radius:  2px
Border:         none
Hover state:    background #1338A0
Active state:   background #0D2570
```

### Secondary / Ghost Button
```
Background:     transparent
Text:           #0A0A0A, Public Sans 600, 13px
Border:         1px solid #C8C5BE
Padding:        12px 24px
Border radius:  2px
Hover state:    background #EAE7DF
```

### Navigation Header
```
Background:     #fbf9f4
Bottom border:  1px solid #C8C5BE
Height:         56px (desktop) / 52px (mobile)
Logo:           BORELA. logotype, left-aligned (see logo spec below)
Right side:     Primary CTA button "GET QUOTE"
Mobile:         Hamburger menu replaces nav links; sticky CTA remains visible
```

### Hero Section
```
Layout:         Full viewport height (desktop), 80vh (mobile)
Background:     Monochrome factory photography + #141414 scrim at 60% opacity
H1:             Public Sans 900, 64px, #FFFFFF, -0.03em tracking
Subheading:     JetBrains Mono 400, 14px, #C8C5BE, +0.04em tracking, UPPERCASE
CTA pair:       Primary button + Ghost button side by side
```

### KPI / Metric Block (dark section §02 SCALE & CAPACITY)
```
Section bg:     #141414
Number:         JetBrains Mono 700, 52px, #F4F2ED
Unit suffix:    JetBrains Mono 500, 24px, #1A48C2 (e.g., "+", "m²", "%")
Label:          JetBrains Mono 500, 11px UPPERCASE, #6E716E, +0.06em
Item border:    1px solid #2A2A2A (vertical separators)
Layout:         6 KPIs in a single row (desktop) / 2-column grid (mobile)
```

KPI values: **1953** (founded) · **70+** (years experience) · **±0.01mm** (tolerance) · **45+** (machines) · **3,500m²** (floor area) · **99.8%** (on-time delivery)

### Capability Card
```
Background:     #F4F2ED
Border:         1px solid #C8C5BE
Border radius:  2px
Padding:        24px
Pre-label:      JetBrains Mono 500, 11px UPPERCASE, #1A48C2, +0.06em
Title:          Public Sans 700, 18px, #0A0A0A
Body:           Public Sans 400, 14px, #4A4A4A, 1.6 line height
Grid:           2×3 (mobile) / 3×2 (desktop)
```

### Section Header Pattern (used for all §XX sections)
```
Pre-label:      JetBrains Mono 500, 11px, #1A48C2, UPPERCASE, +0.06em — e.g. "§01 — CAPABILITIES"
Hairline above: 1px solid #C8C5BE, full width
H2:             Public Sans 900, 36px (desktop) / 28px (mobile), #0A0A0A, -0.02em tracking
Gap pre→H2:     12px
```

### Trust Strip (partner logos)
```
Background:     #fbf9f4 or #F4F2ED
Border-top/bottom: 1px solid #C8C5BE
Padding:        24px vertical
Content:        Horizontally scrollable row of grayscale partner logos
Label above:    JetBrains Mono 500, 11px, #6E716E — "TRUSTED BY TIER-1 OEMs"
Logo style:     Grayscale, opacity 60%, hover: opacity 100%
```

### Footer
```
Background:     #141414
Text:           #F4F2ED (primary), #6E716E (secondary)
Font:           JetBrains Mono 400, 13px
Layout:         4 columns (Company / Services / Industries / Contact)
Border-top:     1px solid #2A2A2A
Copyright:      © 2026 BORELA BT. — bottom row, centered
```

---

## Logo Specification

The official logotype lockup consists of three elements:

1. **"BORELA"** — Public Sans Black (900), `#0A0A0A`, letter-spacing -0.05em
2. **"."** (period/dot accent) — same font, **`#1A48C2`** (Safety Blue — primary accent color)
3. **"PRECISION CNC / EST. 1953"** — JetBrains Mono 400, `#4A4A4A`, 13px, +0.04em tracking, below the wordmark

The SVG source is in `brand/Borela_logo_01.svg`.

**Usage rules:**
- Minimum clear space: equal to the cap height of "B" on all sides
- Minimum size: 120px width (digital)
- Do not recolor, stretch, or apply effects
- On dark backgrounds: "BORELA" and tagline use `#F4F2ED`, dot retains `#1A48C2`

---

## Page Structure — Homepage (11 Sections)

1. **Header** — sticky navigation with logo + GET QUOTE CTA
2. **Hero** — `§01 INTRODUCTION` — full-bleed factory photo, H1, dual CTA
3. **Trust Strip** — Tier-1 OEM partner logos (Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer)
4. **Capabilities** — `§02 CAPABILITIES` — 6-card grid (CNC Turning, CNC Milling, Assembly, Surface Treatment, Welding, Quality Control)
5. **Scale & Capacity** — `§03 SCALE & CAPACITY` — dark section, 6 KPIs
6. **Industries** — `§04 INDUSTRIES SERVED` — Automotive, Haszongépjármű, Electric Tools, Sealing Tech, General Engineering
7. **Certifications** — `§05 CERTIFICATIONS` — ISO 9001, ISO 14001, VDA 6.3, Knorr-Bremse PSA
8. **Why Borela** — `§06 WHY BORELA` — core competitive advantages
9. **Case Study** — `§07 CASE STUDY` — featured project
10. **FAQ** — `§08 TECHNICAL FAQ` — collapsible engineering specifications
11. **Closing CTA** — "Ready to discuss your project?" + drawing upload
12. **Footer** — 4-column + copyright

---

## Anti-patterns (strictly forbidden)

- No border radius > 2px
- No drop shadows or box shadows
- No gradients
- No colors outside the defined palette
- No fonts other than Public Sans and JetBrains Mono
- No body text in JetBrains Mono (labels and data only)
- No decorative use of `#1A48C2` — functional CTAs and accents only
- No marketing adjectives in copy
- No centered body text (only H1 hero can be centered)
- No stock photography or lifestyle imagery
