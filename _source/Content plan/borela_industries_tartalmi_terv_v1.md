# Borela Bt. — Industries oldal tartalmi terve

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Státusz:** Az Industries pillar oldal és 5 cluster aloldal tartalmi terve.
**Hivatkozott alapdokumentumok:** `borela_uj_tartalmi_struktura_v1-1.md` (5.2 és 6.6 fejezetek), `frontpage_borela.png` (design nyelv).

---

## 0. A dokumentum célja és felépítése

Ez a terv az Industries szekció **teljes tartalmi struktúráját** rögzíti, ami a v1.1 dokumentumban csak vázlatszinten szerepelt (lásd 5.2 és 6.6). A struktúra **pillar–cluster** mintát követ:

- 1 db **Industries pillar oldal** (`/industries/`) — összefoglaló, mind az 5 iparágra mutató hub.
- 5 db **iparág-cluster aloldal** — minden egyes iparágra dedikált landing.

A design-nyelv a frontpage-ről örökölt:
- cream/off-white háttér (§01 — SERVICES típusú szekciómarkerek),
- nagy bold, sans-serif headingek (lásd „HUNGARIAN PRECISION. GLOBAL SCALE.”),
- számokra épülő tényblokkok („1953 / 70+ / ±0.01”),
- kártyás 2-oszlopos elrendezések vékony szegéllyel,
- fekete stats-panel kontrasztszekciókhoz,
- kék CTA gomb (egy elsődleges per oldal),
- mono uppercase label-ek (§ 01 — INDUSTRIES, stb.),
- akkordeon-pattern (mint a frontpage-en az „Industries served” lista).

---

## 1. Stratégiai keret: miért külön iparági oldalak?

A v1.1 dokumentum 2.2-es szakasza („A beszerző útja”) szerint a beszerző a **„saját iparága szókincsén”** keres. Egy autóipari Tier 1 minőségbiztos nem „CNC-Drehteile”-re keres, hanem „brake caliper components Tier 2 supplier VDA 6.3”-ra. Egy szerszámgyártó beszerző nem „Lohnfertigung”-ra, hanem „precision components for power tools”-ra.

Ezért minden iparágnak **saját landing page-et** építünk a következő okokból:

1. **SEO topical authority:** ha 5 strukturált iparági oldalunk van mély tartalommal, a Google a Borelát „precision machining authority across automotive, commercial vehicle, power tools, sealing, general engineering” entitásként kezeli. Ez a long-tail keresések többségét lefedi.
2. **Buyer self-identification:** a beszerző 5 másodperc alatt látja, hogy „ezek értik az én iparágamat”. Ez a 2.2 szakasz „validáció” fázisának a kulcsa.
3. **Google Ads Quality Score:** iparág-célzott hirdetésre iparág-célzott landing — alacsonyabb CPC.
4. **AI search citálhatóság:** a ChatGPT/Perplexity strukturált, kérdés-választ szakaszokat idéz. Iparáganként saját FAQ → jobban citálható válaszforrás.

---

## 2. Industries pillar oldal — `/industries/`

### 2.1 URL-szerkezet

| Nyelv | URL |
|---|---|
| EN (gyökér) | `/industries/` |
| DE | `/de/branchen/` |
| HU | `/hu/iparagak/` |

### 2.2 Elsődleges kulcsszavak

- **EN P1:** *precision machining for automotive*, *CNC machining supplier for Tier 2 automotive*, *contract machining for OEMs*
- **DE P1:** *Zulieferer Automotive*, *CNC-Lohnfertigung für Automobilindustrie*, *Präzisionsdrehteile für Maschinenbau*
- **HU P1:** *autóipari beszállító CNC*, *fémipari beszállító autóipar*, *precíziós alkatrészgyártás iparágak*

A pillar oldal célja **nem** önmagában rangsorolni — hanem hub-ként minden iparági cluster oldalt felerősíteni a belső linkstruktúrán keresztül.

### 2.3 H1, meta title, meta description

**H1:**
- EN: *Industries we serve — precision machining for automotive, commercial vehicles, power tools, sealing and general engineering*
- DE: *Unsere Branchen — Präzisionszerspanung für Automotive, Nutzfahrzeuge, Elektrowerkzeuge, Dichtungstechnik und allgemeinen Maschinenbau*
- HU: *Iparágak, amelyeket kiszolgálunk — precíziós forgácsolás az autóipartól a gépészetig*

**Meta title (≤60 karakter):**
- EN: *Industries — Precision Machining for Automotive & More | Borela*
- DE: *Branchen — Präzisionszerspanung für Automotive & mehr | Borela*
- HU: *Iparágak — Precíziós megmunkálás autóipartól gépészetig | Borela*

**Meta description (≤155 karakter):**
- EN: *Tier 2 precision machining supplier across automotive, commercial vehicles, power tools, sealing tech and general engineering. ISO 9001 / VDA 6.3. References: Knorr-Bremse, Mercedes, Hilti.*
- DE: *Tier-2-Präzisionszulieferer für Automotive, Nutzfahrzeuge, Elektrowerkzeuge, Dichtungstechnik und Maschinenbau. ISO 9001 / VDA 6.3. Referenzen: Knorr-Bremse, Mercedes, Hilti.*
- HU: *Tier-2 precíziós beszállító az autóiparban, haszongépjárműiparban, kéziszerszámiparban, tömítéstechnikában és általános gépészetben. ISO 9001 / VDA 6.3.*

### 2.4 Tartalmi blokkok (design-stuktúrával)

A blokkok sorrendje és kód-szintű elnevezése a frontpage konvencióját követi (§-számozás).

#### § 01 — Hero szekció

Tartalom:
- **Eyebrow label (mono uppercase):** `§ 01 — INDUSTRIES`
- **H1:** lásd 2.3.
- **Alcím (1 mondat, ~25 szó):**
  - EN: *Five industries, one engineering discipline. From safety-critical brake components to high-volume power tool parts — we deliver to OEMs and Tier 1 suppliers across Europe.*
  - DE: *Fünf Branchen, eine Ingenieurdisziplin. Von sicherheitskritischen Bremskomponenten bis hin zu Elektrowerkzeug-Großserien — wir liefern an OEMs und Tier-1-Zulieferer in ganz Europa.*
  - HU: *Öt iparág, egy mérnöki tudás. Biztonságkritikus fékalkatrésztől a kéziszerszám-sorozatokig — európai OEM-eknek és Tier-1 beszállítóknak gyártunk.*
- **CTA-k:** elsődleges kék gomb („REQUEST RFQ”), másodlagos outline gomb („SEE CAPABILITIES” → `/capabilities/`).

**Design-megjegyzés:** ne legyen hero-kép itt — a frontpage hero alatt is van egy szürke diagonal-pattern blokk. Ezen az oldalon ezt a területet **iparági ikon-rácsra** (5 nagy SVG ikon, animált hoveren a számokkal: „automotive — 6 customers, 12+ year relationships”) cseréljük. Sokkal informatívabb.

#### § 02 — Trust strip

A frontpage logo-sávjának replikálása: Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer, Phoenix Mecano, Zarges. **Jogi figyelmeztetés a v1.1 17.2 (A) pontból:** ha a logók márkahasználati engedélye nincs meg, **szöveges említés** kerül ide — három soros felsorolás, szürke, mono font:
> *Trusted by: Knorr-Bremse · Mercedes-Benz Manufacturing Hungary · Hilti · Freudenberg · Sulzer · Phoenix Mecano · Zarges*

#### § 03 — Iparági kártya-rács (5 kártya)

A frontpage „SERVICES” kártyarácsának analógiája, de 5 kártya, 2+2+1 vagy 3+2 elrendezésben (responsive).

Minden kártya egységes szerkezete:

```
┌─────────────────────────────────┐
│  [piktogram]    01              │
│                                  │
│  AUTOMOTIVE                      │
│  Tier 2 supplier · 12+ years    │
│                                  │
│  Brake system components,        │
│  cardan parts, precision shafts. │
│  Heat-treated and ready-to-      │
│  install via partner.            │
│                                  │
│  ─────────────────────────       │
│  CUSTOMERS    Knorr-Bremse, MB   │
│  CERTIF.      VDA 6.3, PSA       │
│                                  │
│  SEE DETAILS →                   │
└─────────────────────────────────┘
```

A 5 kártya:

| # | Iparág | 1-mondatos hook | Kulcs-customer | Kulcs-tanúsítvány |
|---|---|---|---|---|
| 01 | Automotive | Tier-2 brake & drivetrain components, heat-treated, VDA-audited | Knorr-Bremse, Mercedes-Benz | VDA 6.3, PSA |
| 02 | Commercial Vehicles & Brake Systems | Safety-critical brake parts for trucks and rail | Knorr-Bremse | PSA 2007 |
| 03 | Power Tools | High-volume precision components for handheld tools | Hilti | ISO 9001 |
| 04 | Sealing Technology | Tight-tolerance turned parts for industrial seals | Freudenberg | ISO 9001 |
| 05 | General Mechanical Engineering | Pumps, fluid power, industrial machinery | Sulzer, Phoenix Mecano, Zarges | ISO 9001 / 14001 |

#### § 04 — „How we serve every industry” (cross-industry capabilities)

A frontpage fekete „Key numbers” paneljének logikája, de itt **kompetenciákra** alkalmazva. Fekete háttér, fehér typográfia, 4-6 cella egy rácsban:

| Capability | Number / Fact |
|---|---|
| Series sizes | **500 – 100,000** pcs/order |
| Typical tolerance | **±0.01 mm** on CNC turning & milling |
| Materials | **8+** material families (steel, stainless, aluminium, brass, bronze, plastics, castings) |
| Lead time | **3–4 weeks** machined / **5–7 weeks** with heat treatment |
| Quality docs | **FAI + CMM reports** on every new PN |
| Audit status | **VDA 6.3 audited**, ISO 9001 since 1996 |

Ez a blokk azt kommunikálja: **mindegy melyik iparág, ugyanaz a mérnöki minőség**. És pszichológiailag is fontos: a fekete kontrasztpanel pont középre kerül, mint a frontpage-en — vizuális ritmus.

#### § 05 — Certifications relevant for industries

Visszahivatkozás a frontpage „Certifications” szakaszára, de itt iparáganként mappolva:

```
ISO 9001    →  required by all
ISO 14001   →  required for Tier 1 automotive
VDA 6.3     →  prerequisite for automotive supply
Knorr-Bremse PSA  →  brake system supplier qualification
```

Egy egyszerű táblázat „certification → industry mapping” formában. Link a `/capabilities/certifications/` oldalra.

#### § 06 — Featured case study

Egyetlen kiemelt eset (a frontpage „Brake System Components” szekciójának klónja):

**Knorr-Bremse: Supplier of the Year 2009**
- 3 mondatos összefoglaló: mit gyártottunk, milyen sorozatban, milyen elismerést kaptunk.
- „READ FULL CASE →” link a `/references/case-studies/knorr-bremse-supplier-of-the-year/`-ra.

A v1.1 17.2 (B) pontja szerint **a Knorr-Bremse-re külön dedikált landing page nem készül** — de mint esettanulmány a referenciák között, ez teljesen rendben van.

#### § 07 — FAQ blokk

Az iparági pillar oldal FAQ-jának a célja a *cross-industry* kérdéseket lefedni, nem azokat, amik egy konkrét iparágra szólnak (azok az aloldalakra mennek).

**FAQ — Industries (5 kérdés):**

*EN:*
1. **Which industries does Borela serve and which are your main expertise?** — *Five core industries: automotive (Tier 2, mostly drivetrain and brake-adjacent), commercial vehicles and brake systems (our deepest expertise, Knorr-Bremse partner since 2007), power tools (Hilti), sealing technology (Freudenberg), and general mechanical engineering (Sulzer, Phoenix Mecano, Zarges). Automotive and commercial vehicles together represent the majority of our turnover.*
2. **Can you handle new-industry projects outside this list?** — *Yes, if the work falls within our machining capabilities (CNC turning, CNC milling, series 500–100,000 pcs, tolerances at ±0.01 mm). We have served medical, aerospace-adjacent and energy projects on a case-by-case basis. RFQ first, we'll be straightforward about fit.*
3. **What's the difference between Tier 1 and Tier 2 supply, and what is Borela's typical role?** — *Tier 1 suppliers deliver finished modules directly to the OEM. Tier 2 suppliers deliver components to Tier 1 suppliers. Borela operates predominantly as Tier 2, with full traceability and documentation expected at that level.*
4. **Do industry certifications transfer across customers, or do we need to re-audit you?** — *Our ISO 9001, ISO 14001 and VDA 6.3 status is recognized industry-wide. The Knorr-Bremse Product Safety Audit is a customer-specific qualification. New customers in regulated industries typically still run their own supplier audit — we welcome and are routinely prepared for them.*
5. **Which industry do most of your engineers come from?** — *Most of our engineering team is general precision-machining trained, with hands-on automotive and brake-system experience accumulated since the Knorr-Bremse partnership began. We are not industry-specific consultants; we are a process-deep machining shop with industry-aware quality discipline.*

*DE és HU verziók ugyanezen tartalommal, fordítva.*

#### § 08 — Záró CTA

A frontpage záró „READY TO DISCUSS YOUR PROJECT?” szekciójának replikálása. Egyetlen kék gomb, „REQUEST QUOTE”.

### 2.5 Schema.org az Industries pillar oldalon

- `WebPage` típus, `about` mezőben Service-listával az 5 iparágra.
- `BreadcrumbList`: Home → Industries.
- `FAQPage` a § 07 blokkhoz, kérdés–válasz formában.

Nem teszünk `Service` schemát az iparágakra — azok a *szolgáltatások* oldalakra valók. Iparágakat **Audience**-ként kezeljük: minden iparág-aloldalon `Service.audience` mezőben szerepel az adott BusinessAudience.

### 2.6 Belső linkstruktúra

**Innen kifelé (a pillar mit linkel):**
- Mind az 5 iparági cluster aloldal (kártyákról).
- `/capabilities/certifications/` (a § 05-ből).
- `/references/case-studies/knorr-bremse-supplier-of-the-year/` (a § 06-ből).
- `/rfq/` (3 helyen: hero, § 04 után, § 08).

**Idefelé (honnan jön ide link):**
- Főmenü „Industries” dropdown root.
- Minden iparág-aloldal breadcrumb-ja.
- Minden szolgáltatás-cluster oldal („Industries served” szekció a végén).
- Kezdőlap § 04 „Industries” kártya-rácsa.

---

## 3. Iparági cluster aloldalak — közös sablon

Mind az 5 aloldal **ugyanazt a 9-blokkos szerkezetet** követi a tartalom-újrahasznosíthatóság és a felismerhető oldalstruktúra miatt. Ez a sablon:

```
§ 01  Hero (industry-specific H1, USP, RFQ CTA)
§ 02  Numbers strip (3-4 industry-specific fact)
§ 03  "Who we serve" — named customers, with context
§ 04  "What we make" — typical components (visual grid)
§ 05  Industry-specific capabilities & materials
§ 06  Certifications relevant to this industry
§ 07  Case study (1 featured)
§ 08  FAQ (4-5 industry-specific questions)
§ 09  CTA
```

Minden aloldalra az alábbiakat dolgozom ki a következő szakaszokban:
- URL-ek (3 nyelven)
- Elsődleges kulcsszavak
- H1, meta title, meta description (3 nyelven)
- A 9 blokk konkrét tartalma
- FAQ (3-5 kérdés, mindegyik 3 nyelven)
- Schema.org
- Belső linkek

---

## 4. Cluster #1 — Automotive

### 4.1 URL

| Nyelv | URL |
|---|---|
| EN | `/industries/automotive/` |
| DE | `/de/branchen/automotive/` |
| HU | `/hu/iparagak/autoipar/` |

### 4.2 Kulcsszavak

- **EN P1:** *automotive precision machining supplier*, *Tier 2 automotive CNC supplier*
- **EN P2/P3:** *automotive parts supplier Hungary*, *VDA 6.3 audited CNC supplier*, *automotive drivetrain components supplier*
- **DE P1:** *Automotive Zulieferer Ungarn*, *Tier 2 Automotive CNC*, *Lohnfertigung Automotive*
- **DE P2/P3:** *VDA 6.3 zertifizierter Zulieferer*, *Antriebskomponenten Zulieferer*
- **HU P1/P2:** *autóipari beszállító*, *autóipari CNC megmunkálás*, *Tier 2 autóipari beszállító*

### 4.3 H1, meta

**H1:**
- EN: *Precision machining for the automotive industry — Tier 2 supplier with VDA 6.3 discipline*
- DE: *Präzisionszerspanung für die Automobilindustrie — Tier-2-Zulieferer mit VDA-6.3-Disziplin*
- HU: *Precíziós megmunkálás az autóipar számára — Tier-2 beszállító VDA 6.3 fegyelemmel*

**Meta title:**
- EN: *Automotive Precision Machining — Tier 2 Supplier | Borela*
- DE: *Automotive-Lohnfertigung — Tier-2-Zulieferer | Borela*
- HU: *Autóipari precíziós megmunkálás — Tier-2 beszállító | Borela*

**Meta description:**
- EN: *Tier 2 precision machining for European automotive OEMs and Tier 1 suppliers. Knorr-Bremse partner since 2007, Mercedes-Benz engineering reference 2019. VDA 6.3, ISO 9001/14001.*
- DE: *Tier-2-Präzisionszerspanung für europäische Automobil-OEMs und Tier-1-Zulieferer. Knorr-Bremse Partner seit 2007, Mercedes-Benz-Referenz 2019. VDA 6.3.*
- HU: *Tier-2 precíziós megmunkálás európai autóipari OEM-eknek és Tier-1 beszállítóknak. Knorr-Bremse partner 2007 óta, Mercedes-Benz referencia 2019. VDA 6.3.*

### 4.4 A 9 blokk tartalma

**§ 01 — Hero:**
H1 + 1 alcím (~25 szó): „A Knorr-Bremse Év Beszállítója 2009-ben, Mercedes-Benz mérnöki partner 2019 óta. VDA 6.3 auditált fegyelem 500–100 000 darabos sorozatokra.” Kék CTA: „REQUEST RFQ”.

**§ 02 — Numbers strip (fekete vagy halvány):**
- **2007** — Knorr-Bremse partnership start
- **2009** — Supplier of the Year award
- **2016** — VDA 6.3 audit passed
- **±0.01 mm** — typical tolerance on safety-critical parts

**§ 03 — Who we serve:**
3 névvel + kontextus minden ügyfélhez (1-2 mondat, mit szállítunk neki, mióta):
- **Knorr-Bremse Fékrendszerek Kft.** — Brake system components for commercial vehicles since 2007. Awarded *Supplier of the Year* in 2009.
- **Mercedes-Benz Manufacturing Hungary Kft.** — Engineering services partner since 2019, supporting the Kecskemét plant.
- **Freudenberg** — Sealing components with automotive applications.

**§ 04 — What we make:**
Vizuális kártyarács, kategóriánként (3-4 kategória, mindegyik 3-4 példa):
- *Brake system components* — calipers parts, retainers, pistons.
- *Drivetrain & cardan components* — cardán-csapok, perselyek, tengelyek.
- *Precision shafts & axles* — hardened, ground-tolerance shafts (heat treatment via partner).
- *Sensor housings & fluid components* — case-hardened, fluid-tight.

Mindegyik kártyán „Heat-treated via partner — single point of contact” jelzés, ahol releváns.

**§ 05 — Capabilities for automotive:**
- CNC turning: Ø1–90 mm, 40 lathes, multi-axis with Y-axis (link a `/services/cnc-turning/`-ra).
- CNC milling: 6 machining centers, link a `/services/cnc-milling/`-re.
- Heat treatment: coordinated via certified partner — case hardening, hardening + tempering, stress relieving (link a `/services/heat-treatment/`-re).
- Measurement: in-house CMM, contour, microhardness (link a `/capabilities/measurement-room/`-ra).

**§ 06 — Certifications for automotive:**
4 ikonos kártya:
- **ISO 9001:2015** — quality management
- **ISO 14001:2015** — environmental
- **VDA 6.3** — automotive process audit (passed)
- **Knorr-Bremse PSA** — Product Safety Audit (passed 2007)

Mindegyikhez 1 mondat („mit jelent ez egy beszerző számára”).

**§ 07 — Case study:**
*Knorr-Bremse — Supplier of the Year 2009*
3-4 mondat összefoglaló, kép, „READ FULL →” link.

**§ 08 — FAQ (5 kérdés):**

*EN:*
1. **Are you IATF 16949 certified?** — *We are ISO 9001 certified and VDA 6.3 audited, which together cover the process-discipline requirements most Tier 1 and Tier 2 automotive customers ask for. We do not currently hold IATF 16949, and we are transparent about this in supplier qualification. For customers where IATF 16949 is a non-negotiable, we are not the right supplier; for the much larger group where VDA 6.3 + ISO 9001 is acceptable, we are.*
2. **What's the typical lead time for an automotive series part?** — *3–4 weeks from RFQ approval for purely machined parts, 5–7 weeks if heat treatment is required. After PPAP and series approval, repeat orders run on a 4–6 week rolling schedule, adjusted to customer call-offs.*
3. **Do you support PPAP submissions?** — *Yes, we have submitted PPAPs for Tier 1 automotive customers including Knorr-Bremse. We support PPAP levels 1–3 typically; level 4–5 on agreement.*
4. **Can you produce safety-critical brake components?** — *Yes — this is one of our deepest areas of experience. We passed the Knorr-Bremse Product Safety Audit in 2007 and have been producing brake-related components continuously since.*
5. **What automotive-relevant materials do you regularly machine?** — *Case-hardenable steels (e.g. 16MnCr5, 20MnCr5), heat-treatable steels (e.g. 42CrMo4), stainless steels (1.4301, 1.4404), free-cutting steels, and aluminium alloys (e.g. EN AW-6082). Heat treatment via our partner.*

*DE és HU: ugyanezek fordítva, anyagjelölések DIN/EN szerint.*

**§ 09 — CTA:** „REQUEST RFQ”.

### 4.5 Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Automotive Precision Machining",
  "provider": {"@id": "https://borela.eu/#organization"},
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "automotive OEMs and Tier 1 suppliers"
  },
  "areaServed": [
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "Austria"},
    {"@type": "Country", "name": "Hungary"},
    {"@type": "Place", "name": "European Union"}
  ],
  "description": "Tier 2 precision CNC machining for automotive customers, with VDA 6.3 audit and Knorr-Bremse PSA qualification. Brake system, drivetrain, and precision shaft components, with coordinated heat treatment.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive component types",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Brake system components"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drivetrain and cardan components"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Precision shafts and axles"}}
    ]
  }
}
```

Plusz `FAQPage` és `BreadcrumbList`.

### 4.6 Belső linkek

**Innen:** `/services/cnc-turning/`, `/services/cnc-milling/`, `/services/heat-treatment/`, `/capabilities/certifications/`, `/capabilities/measurement-room/`, `/references/case-studies/knorr-bremse-supplier-of-the-year/`, `/rfq/`.

**Idefelé:** Industries pillar (kártyáról), main menu „Industries → Automotive”, kezdőlap iparági kártya, minden olyan szolgáltatás-oldal „industries served” szekciója, ahol az automotive releváns.

---

## 5. Cluster #2 — Commercial Vehicles & Brake Systems

### 5.1 URL

| Nyelv | URL |
|---|---|
| EN | `/industries/commercial-vehicles/` |
| DE | `/de/branchen/nutzfahrzeuge/` |
| HU | `/hu/iparagak/haszongepjarmu/` |

### 5.2 Kulcsszavak

- **EN P1:** *commercial vehicle parts supplier*, *brake system component supplier*
- **EN P2/P3:** *Knorr-Bremse approved supplier*, *truck brake parts manufacturer Europe*
- **DE P1:** *Nutzfahrzeug Zulieferer*, *Bremssystem Zulieferer*, *Bremsenkomponenten Lohnfertigung*
- **DE P2/P3:** *Knorr-Bremse Zulieferer*, *LKW Bremsteile Hersteller*
- **HU:** *haszongépjármű beszállító*, *fékrendszer alkatrész beszállító*

### 5.3 H1, meta

**H1:**
- EN: *Precision components for commercial vehicles and brake systems — supplier to Knorr-Bremse since 2007*
- DE: *Präzisionskomponenten für Nutzfahrzeuge und Bremssysteme — Knorr-Bremse-Zulieferer seit 2007*
- HU: *Precíziós alkatrészek haszongépjárművekhez és fékrendszerekhez — Knorr-Bremse beszállító 2007 óta*

**Meta title:**
- EN: *Commercial Vehicle & Brake System Parts | Borela*
- DE: *Nutzfahrzeug- & Bremssystem-Komponenten | Borela*
- HU: *Haszongépjármű és fékrendszer alkatrészek | Borela*

**Meta description:**
- EN: *Safety-critical precision components for commercial vehicles and brake systems. Knorr-Bremse Supplier of the Year 2009, PSA qualified, VDA 6.3 audited.*
- DE: *Sicherheitskritische Präzisionskomponenten für Nutzfahrzeuge und Bremssysteme. Knorr-Bremse Lieferant des Jahres 2009, PSA qualifiziert, VDA 6.3 auditiert.*
- HU: *Biztonságkritikus precíziós alkatrészek haszongépjárműhöz és fékrendszerhez. Knorr-Bremse Év Beszállítója 2009, PSA, VDA 6.3.*

### 5.4 Tartalmi blokkok (rövidített, mert sok mező az automotive-éhoz nagyon hasonlít)

**§ 01 — Hero:** „A safety-critical machining for commercial vehicles. Knorr-Bremse partner since 2007 — over 18 years of continuous brake-component delivery.”

**§ 02 — Numbers strip:**
- **2007** — Knorr-Bremse PSA pass
- **2009** — Supplier of the Year
- **18+** — years of continuous brake system delivery
- **100%** — first-pass yield target on safety-critical PNs

**§ 03 — Who we serve:**
- **Knorr-Bremse Fékrendszerek Kft.** — fő partner; brake system components for heavy commercial vehicles and rail systems.
- (Opcionálisan: bármilyen másik haszongépjármű-vonatkozású ügyfél, ha van.)

**§ 04 — What we make:**
- *Brake system components* — caliper parts, retainers, pistons, valve bodies.
- *Pneumatic & hydraulic brake components* — fluid-tight precision parts.
- *Linkage and adjustment mechanisms* — kardáncsapok, linkage rúd, állítócsavarok.
- *Hardened safety-critical shafts* — heat-treated via partner.

**§ 05 — Capabilities relevant for CV/brake:**
- Safety-critical traceability — minden part-number lot-szintű nyomonkövethetőséggel, FAI és CMM dokumentációval.
- Heat treatment koordináció a partneren keresztül (case hardening, hardening + tempering — leggyakoribb fékkomponens-eljárások).
- Tight series control: 500–25 000 db tipikus sorozat haszongépjármű-projektekben.
- 100% inspection minden új PN-en, AQL 0,4 vagy szigorúbb a sorozaton.

**§ 06 — Certifications:**
- ISO 9001, ISO 14001, VDA 6.3, **Knorr-Bremse Product Safety Audit (passed 2007)** — utóbbi külön kiemelt kártya, mert ez ezen az oldalon a fő trust-anchor.

**§ 07 — Case study:** *Knorr-Bremse — Supplier of the Year 2009*. Itt részletesebb a leírás, mint az automotive oldalon, mert ez a fő iparág.

**§ 08 — FAQ (4 kérdés):**

*EN:*
1. **What does Knorr-Bremse PSA qualification actually require?** — *The Product Safety Audit is Knorr-Bremse's own supplier qualification, focused on traceability, change management, and safety-critical part handling. We passed it in 2007 and have maintained it through the partnership.*
2. **Can you produce parts to railway industry specifications (e.g. EN 15085, IRIS)?** — *We work to general ISO 9001 and VDA 6.3 standards. For railway-specific welding certifications (EN 15085) or IRIS, we are not currently audited; please discuss in RFQ.*
3. **How do you handle Production Part Approval Processes for safety-critical brake parts?** — *Full PPAP support (typically level 3), with first-article inspection on CMM, material certificates, capability studies (Cp/Cpk), and process flow documentation.*
4. **Do you maintain a separate documentation track for safety-critical PNs?** — *Yes — safety-critical part numbers are flagged in our ERP and follow stricter inspection and change-control discipline, independent of the rest of the production schedule.*

**§ 09 — CTA**

### 5.5 Schema.org

`Service`, `audienceType: "commercial vehicle and brake system OEMs and Tier 1 suppliers"`. Plusz `FAQPage`, `BreadcrumbList`.

### 5.6 Belső linkek

Hasonló az automotive-éhoz, plusz erős link a *Knorr-Bremse case study*-ra.

---

## 6. Cluster #3 — Power Tools

### 6.1 URL

| Nyelv | URL |
|---|---|
| EN | `/industries/power-tools/` |
| DE | `/de/branchen/elektrowerkzeuge/` |
| HU | `/hu/iparagak/keziszerszamok/` |

### 6.2 Kulcsszavak

- **EN P1:** *power tool components supplier*, *precision parts for handheld tools*
- **DE P1:** *Elektrowerkzeug Zulieferer*, *Präzisionsteile Handwerkzeuge*
- **HU:** *kéziszerszám alkatrész beszállító*, *elektromos szerszám alkatrész*

### 6.3 H1, meta

**H1:**
- EN: *Precision components for power tools — high-volume series for Hilti and engineering-grade brands*
- DE: *Präzisionskomponenten für Elektrowerkzeuge — Großserien für Hilti und ingenieurorientierte Marken*
- HU: *Precíziós alkatrészek elektromos kéziszerszámokhoz — Hilti és mérnöki minőségű márkák sorozatgyártása*

**Meta title:**
- EN: *Power Tool Components — Hilti Supplier | Borela*
- DE: *Elektrowerkzeug-Komponenten — Hilti-Zulieferer | Borela*
- HU: *Kéziszerszám alkatrészek — Hilti beszállító | Borela*

**Meta description:**
- EN: *High-volume precision turning and milling for power tool OEMs. Hilti supplier with proven high-volume series capability. ISO 9001 / 14001.*
- DE: *Großserien-Präzisionsbearbeitung für Elektrowerkzeug-OEMs. Hilti-Zulieferer mit Großserien-Kompetenz. ISO 9001 / 14001.*
- HU: *Nagy szériás precíziós forgácsolás kéziszerszám-OEM-eknek. Hilti beszállító, igazolt nagyszériás kompetenciával.*

### 6.4 Tartalmi blokkok

**§ 01 — Hero:** „Power tool OEMs need parts that fail neither at the bench nor on a construction site. We deliver — at scale, on schedule, with engineering documentation that survives a Tier 1 audit.”

**§ 02 — Numbers strip:**
- **Up to 100,000** pcs/series, repeatable
- **20,000 rpm** spindle speed on milling centers
- **30,000 rpm** on vertical centers — fine-finish capability
- **±0.01 mm** typical tolerance

**§ 03 — Who we serve:**
- **Hilti** — high-volume precision components for handheld power tools.

**§ 04 — What we make:**
- *Drive shaft and gear components* — heat-treated and ground tolerance.
- *Housing inserts and metal mountings* — milled, sometimes deburred with our Rösler vibratory finishing setup.
- *Chuck and clamping components* — turned, with secondary milling operations.
- *High-cycle bearings interfaces* — bronze and steel.

**§ 05 — Capabilities for power tools:**
- Magas mennyiségű, ismétlődő gyártás — a 40 esztergánk fele dedikálható sorozat-projektekre.
- Fast set-up: short changeover times támogatják a vegyes szériát.
- Felülettisztítás Rösler-rel post-machining.
- Anyagok: heat-treatable steels, brass, stainless, alumínium.

**§ 06 — Certifications:** ISO 9001, ISO 14001. (Itt **NEM** kiemelt a VDA 6.3 vagy PSA, mert a power tools nem regulált biztonsági-kritikus iparág a haszongépjárműhöz hasonló módon.)

**§ 07 — Case study:** *Hilti high-volume program* (ha nyilvános formában elmondható; ha nem, akkor szöveges referencia).

**§ 08 — FAQ (4 kérdés):**

*EN:*
1. **What series sizes are economical for power tool components?** — *Our sweet spot is 5,000–100,000 pieces per order. Below 5,000, we are still competitive; above 100,000 we typically split into release-based scheduling.*
2. **Can you handle both metal and composite/plastic parts?** — *Primarily metal — steel, stainless, aluminium, brass, bronze. We also machine plastics on a project basis, but composites and FRP/CFRP are not in our portfolio.*
3. **Do you do post-machining surface finishing in-house?** — *We have Rösler vibratory finishing for deburring and surface polishing. For more specialized coatings (anodizing, plating, PVD), we coordinate with external partners.*
4. **What's your repeat-order reliability on high-volume power tool series?** — *Repeat customer relationships (such as with Hilti) span multiple years on the same part numbers, with rolling forecasts and call-offs. On-time delivery rate is monitored as a top-level KPI per customer.*

**§ 09 — CTA**

### 6.5 Schema.org

`Service`, `audienceType: "power tool OEMs"`. Plusz `FAQPage`, `BreadcrumbList`.

---

## 7. Cluster #4 — Sealing Technology

### 7.1 URL

| Nyelv | URL |
|---|---|
| EN | `/industries/sealing-technology/` |
| DE | `/de/branchen/dichtungstechnik/` |
| HU | `/hu/iparagak/tomitestechnika/` |

### 7.2 Kulcsszavak

- **EN P1:** *sealing technology components supplier*, *precision parts for industrial seals*
- **DE P1:** *Dichtungstechnik Zulieferer*, *Präzisionsteile für Dichtungen*
- **HU:** *tömítéstechnikai beszállító*, *ipari tömítés alkatrész*

### 7.3 H1, meta

**H1:**
- EN: *Precision metal components for sealing technology — Freudenberg partner*
- DE: *Präzisions-Metallkomponenten für die Dichtungstechnik — Freudenberg-Partner*
- HU: *Precíziós fém alkatrészek tömítéstechnikához — Freudenberg-partner*

**Meta title:**
- EN: *Sealing Technology Components — Freudenberg Supplier | Borela*
- DE: *Dichtungstechnik-Komponenten — Freudenberg-Zulieferer | Borela*
- HU: *Tömítéstechnikai alkatrészek — Freudenberg beszállító | Borela*

**Meta description:**
- EN: *Tight-tolerance turned metal components for industrial and automotive sealing systems. Freudenberg supplier. Stainless, brass, bronze on demand.*
- DE: *Engpassgenaue Drehteile für industrielle und automobile Dichtungssysteme. Freudenberg-Zulieferer. Edelstahl, Messing, Bronze auf Anfrage.*
- HU: *Szoros tűrésű esztergált fém alkatrészek ipari és autóipari tömítésrendszerekhez. Freudenberg beszállító.*

### 7.4 Tartalmi blokkok

**§ 01 — Hero:** „Sealing systems live or die by the metal interface. We machine the rings, sleeves, and housings that make Freudenberg-grade seals possible.”

**§ 02 — Numbers strip:**
- **±0.01 mm** typical tolerance, **±0.005 mm** on critical seal interfaces
- **Ra 0.8 µm** surface finish standard
- **3** material families primarily — stainless, bronze, brass

**§ 03 — Who we serve:**
- **Freudenberg** — metal components for sealing system production.

**§ 04 — What we make:**
- *Sealing rings & retainers* — turned, tight ID/OD tolerances.
- *Sleeve and bushing components* — bronze, brass, stainless.
- *Housing inserts for radial seals* — milled and turned combinations.
- *Pressure-bearing seal interfaces* — tested for leak-tight geometry.

**§ 05 — Capabilities for sealing technology:**
- Szoros tűrés és kontrollált felületi minőség.
- Tisztaság-érzékeny gyártás — bizonyos PN-ekre dedikált gyártósor cleanliness controlra.
- Anyagok: rozsdamentes acél (1.4301, 1.4404), bronz (centrifugál öntésű is, ha aktív — lásd v1.1 17.1), sárgaréz, alumínium.
- Mérőszoba: kontúrmérő különösen fontos a sealing geometriához.

**§ 06 — Certifications:** ISO 9001, ISO 14001. VDA 6.3 ha az adott projektnek autóipari oldala van.

**§ 07 — Case study:** *Freudenberg sealing component program* (ha publikálható).

**§ 08 — FAQ (4 kérdés):**

*EN:*
1. **What surface finish can you achieve on sealing surfaces?** — *Standard Ra 0.8 µm on turned sealing diameters. Tighter finish (Ra 0.4 µm or better) typically requires grinding, which we coordinate via partner.*
2. **Do you have cleanliness-controlled production for sealing parts?** — *We can dedicate production runs to cleanliness requirements (e.g., particle limits, no cross-contamination from machining oils). Specific cleanliness class (e.g. VDA 19) — please specify in RFQ.*
3. **Can you machine bronze components for sliding/sealing applications?** — *Yes. Whether we centrifugally cast our own bronze blanks depends on current capability status; please ask. We do machine externally sourced bronze blanks.*
4. **What's typical lead time for sealing components?** — *3–4 weeks machined; 5–7 weeks if heat treatment is required (less common on sealing parts).*

**§ 09 — CTA**

### 7.5 Schema.org

`Service`, `audienceType: "sealing technology and fluid system manufacturers"`. Plusz `FAQPage`, `BreadcrumbList`.

---

## 8. Cluster #5 — General Mechanical Engineering

### 8.1 URL

| Nyelv | URL |
|---|---|
| EN | `/industries/general-engineering/` |
| DE | `/de/branchen/maschinenbau/` |
| HU | `/hu/iparagak/gepipar/` |

### 8.2 Kulcsszavak

- **EN P1:** *contract machining for general engineering*, *precision parts for industrial machinery*
- **DE P1:** *Maschinenbau Zulieferer*, *Lohnfertigung Maschinenbau*
- **HU:** *gépipari beszállító*, *ipari gép alkatrész gyártás*

### 8.3 H1, meta

**H1:**
- EN: *Precision components for general mechanical engineering — pumps, fluid power, industrial machinery*
- DE: *Präzisionskomponenten für den allgemeinen Maschinenbau — Pumpen, Fluidtechnik, Industriemaschinen*
- HU: *Precíziós alkatrészek általános gépészetnek — szivattyúk, fluidtechnika, ipari gépek*

**Meta title:**
- EN: *General Engineering Precision Machining | Borela*
- DE: *Maschinenbau-Lohnfertigung | Borela*
- HU: *Gépipari precíziós megmunkálás | Borela*

**Meta description:**
- EN: *Precision CNC machining for pumps, fluid power, and industrial machinery OEMs. Long-term partners include Sulzer, Phoenix Mecano, Zarges.*
- DE: *Präzisions-CNC-Bearbeitung für Pumpen-, Fluidtechnik- und Industriemaschinen-OEMs. Langfristige Partner: Sulzer, Phoenix Mecano, Zarges.*
- HU: *Precíziós CNC megmunkálás szivattyú-, fluidtechnikai és ipari gép OEM-eknek. Hosszú távú partnerek: Sulzer, Phoenix Mecano, Zarges.*

### 8.4 Tartalmi blokkok

**§ 01 — Hero:** „From pump impellers to housing parts for industrial enclosures — we machine the precision components that European engineering brands rely on.”

**§ 02 — Numbers strip:**
- **3** flagship long-term partners — Sulzer, Phoenix Mecano, Zarges
- **8+** material families
- **500–50,000** pcs typical series

**§ 03 — Who we serve:**
- **Sulzer** — precision components for pump and fluid handling systems.
- **Phoenix Mecano** — enclosure and mechanical components.
- **Zarges** — precision metal parts for industrial product lines.

**§ 04 — What we make:**
- *Pump and fluid handling components* — impellers (where machinable), housings, shafts.
- *Enclosure and housing inserts* — milled and turned, aluminium and steel.
- *Industrial machinery shafts and bushings* — heat-treated where required (via partner).
- *Custom precision components* — to drawing, no fixed catalog.

**§ 05 — Capabilities for general engineering:**
- Széles material- és sorozatszám-tartomány: ez az iparág jellemzően „mixed-mix” jellegű.
- Prototype-to-series útvonal: prototípus-szolgáltatás + sorozat-felfutás.
- Welding (TIG) támogatás, ahol az alkatrész complex assembly része.

**§ 06 — Certifications:** ISO 9001, ISO 14001.

**§ 07 — Case study:** Egy konkrét Sulzer / Phoenix Mecano / Zarges projekt rövid leírása (publikálási engedély után).

**§ 08 — FAQ (4 kérdés):**

*EN:*
1. **What if my industry isn't on your list?** — *General mechanical engineering is intentionally broad. If your project involves precision turned or milled metal components in series of 500 to 100,000 pcs at ±0.01 mm tolerances, we are almost certainly a fit — RFQ first, we'll be straightforward about whether it's right for us.*
2. **Do you support prototype-to-series transitions?** — *Yes. We have a dedicated prototyping setup that can flow seamlessly into series production using the same equipment and the same engineering team.*
3. **Can you handle assemblies, not just individual parts?** — *Yes — basic assembly is a service we offer. For complex multi-component assemblies, please specify scope in the RFQ.*
4. **Do you machine cast or forged blanks supplied by us?** — *Yes — we routinely machine customer-supplied castings (steel and aluminum) and forgings. Material certificates passed through with FAI documentation.*

**§ 09 — CTA**

### 8.5 Schema.org

`Service`, `audienceType: "mechanical engineering OEMs and industrial machinery manufacturers"`. Plusz `FAQPage`, `BreadcrumbList`.

---

## 9. Vizuális design-irányelvek az Industries szekcióra

A frontpage_borela.png alapján a következő design-elemek **kötelezően konzisztensek** maradjanak az Industries pillar + 5 aloldalon:

### 9.1 Általános

- Cream/off-white háttér (a frontpage `#F0EBE0` vagy hasonló warm beige tónusa).
- Fekete tipográfia, kék (`#1E40AF` típusú) CTA gombokra.
- Mono uppercase eyebrow labelek (§ 01 — INDUSTRIES stb.).
- Vékony, 1px szegélyes kártyák, **nincs box-shadow**.
- Bal felső §-számozás minden szekcióblokkon.

### 9.2 Iparági aloldal-specifikus

- **Hero:** ugyanaz a struktúra mint a frontpage hero — bal oldalt typográfia + CTA-k, jobb oldalt nincs hero-image; helyette §02 numbers strip a hero alatt közvetlenül.
- **Numbers strip:** halvány cream sávon, 3-4 number cella, számok nagy bold, label szürke mono. Ez **nem fekete háttéren** van az aloldalakon (azt csak a frontpage „§ 03 — KEY NUMBERS” használja egyedi vizuális ritmust adva).
- **Customer cards:** három-soros kártyák minden ügyfélhez. Hover-ben enyhe kiemelés.
- **Component grid (§ 04):** 2x2 vagy 4x1 grid, minden kártyán: ikon + cím + 1 mondatos leírás. Konzisztens kártyaméret, nem ragozott szöveg.
- **Capabilities (§ 05):** linkelt sorlista (nem újabb kártya — vizuális ritmust megtörné). Inkább mint a frontpage „WHY BORELA” szekciója: számozott bekezdések.
- **Certifications (§ 06):** vízszintes 4 oszlopos rács, mindegyikben pipa-ikon + cert név + 1 sor leírás. Ez ugyanaz mint a frontpage certifications blokk.
- **Case study (§ 07):** ugyanaz a layout mint a frontpage „§ 06 — FEATURED PROJECT” blokk — bal oldalt kép (vagy placeholder szürke diagonal), jobb oldalt szöveg + „READ FULL CASE →” link.
- **FAQ (§ 08):** akkordeon-pattern, mint a frontpage „§ 07” iparági lista akkordeonja. Minden kérdés egy + ikonnal kibontható.
- **CTA (§ 09):** ugyanaz a teljes szélességű kék CTA-blokk, mint a frontpage „READY TO DISCUSS YOUR PROJECT?”.

### 9.3 Vizuális ritmus a pillar oldalon (különleges)

Az Industries pillar oldalon **engedhetjük meg** a frontpage „fekete numbers panel” használatát a § 04 „How we serve every industry” blokknál — ez vizuálisan megtöri a sok cream szekciót, és ugyanazt a kontraszt-funkciót szolgálja, mint a frontpage-en. **Az aloldalakon nem ismételjük** (azokon a fekete panel nem szükséges — kevesebb a szekció, és nem kell ennyi vizuális ritmus).

---

## 10. Belső linkstruktúra-mátrix az Industries szekción

A pillar–cluster modell csak akkor működik, ha a belső linkek **strukturáltak és kétirányúak**. Az alábbi mátrix azt mutatja, melyik oldal hová linkel és honnan kap linket.

### 10.1 Industries pillar belső linkjei

| Cél | Honnan a pillar oldalon | Miért |
|---|---|---|
| Mind az 5 cluster aloldal | § 03 iparági kártya-rács | A pillar fő funkciója — disztribúció. |
| `/capabilities/certifications/` | § 05 certifications-mapping táblázat | Beszerző „át fog kattintani”, hogy ellenőrizze. |
| `/references/case-studies/knorr-bremse-supplier-of-the-year/` | § 06 featured case | Trust deepening. |
| `/rfq/` | § 01 hero CTA, § 09 záró CTA | Konverzió. |
| `/services/cnc-turning/`, `/services/cnc-milling/`, `/services/heat-treatment/` | § 04 capability rácsban szöveges említés | Pillar-to-pillar cross-link, topical authority erősítés. |

### 10.2 Cluster aloldalak közös belső linkjei

Minden cluster aloldal **legalább** az alábbi 6 linket tartalmazza:

1. Industries pillar (breadcrumb).
2. `/services/cnc-turning/` — § 05-ben.
3. `/services/cnc-milling/` — § 05-ben.
4. `/services/heat-treatment/` — § 05-ben, ahol releváns (mindenhol releváns).
5. `/capabilities/certifications/` — § 06-ban.
6. `/rfq/` — § 01 hero és § 09 záró.

### 10.3 Inbound linkek az Industries szekcióra (más oldalakról)

| Honnan | Hová | Miért |
|---|---|---|
| Főmenü | Industries pillar (dropdown root) + minden 5 cluster (dropdown elem) | Globális navigáció. |
| Kezdőlap § 05 iparági kártyák | Mind az 5 cluster közvetlenül | Felfedezés a homepage-en. |
| Minden szolgáltatás-oldal („Industries served” szekció) | Releváns iparágra link | A szolgáltatás → iparág kontextus. Pl. heat-treatment oldal → automotive, commercial vehicles. |
| Esettanulmányok | Releváns iparág | Pl. Knorr-Bremse case → commercial vehicles + automotive. |
| Blog/tudásbázis cikkek | Iparág-relevanciával | Pl. „VDA 6.3 guide” → automotive + commercial vehicles. |

---

## 11. SEO és AI-search optimalizáció — Industries-specifikus megjegyzések

A v1.1 dokumentum 17.3 (H) pontja külön kiemelte, hogy a *Generative Engine Optimization* (GEO) az Industries szekción különösen fontos: a beszerzők egyre gyakrabban ChatGPT-vel vagy Perplexityvel kérdeznek, hogy „who are the best automotive precision machining suppliers in Eastern Europe?” típusú queryket tesznek fel. Ezekre az LLM-ek strukturált, idézhető szakaszokat keresnek.

Ezért minden cluster aloldal **kvázi-definíciós első bekezdést** kap a hero alatt, közvetlenül a § 02 előtt. Ez egy ~80 szavas „TL;DR” jellegű szakasz, ami **önmagában is megválaszolja** a „mit csinál a Borela az iparág X számára?” kérdést.

**Példa (Automotive):**
> *Borela is a Hungarian Tier 2 precision machining supplier serving European automotive OEMs and Tier 1 suppliers. Founded in 1953, the company specializes in CNC turning and milling of brake system components, drivetrain parts, and precision shafts in series of 500 to 100,000 pieces, with typical tolerances of ±0.01 mm. Audited to ISO 9001, ISO 14001 and VDA 6.3, and qualified by the Knorr-Bremse Product Safety Audit since 2007.*

Ez a bekezdés **nem H2, nem H3**, csak egy `<p>` elem, de lexikailag teljes mondat. Az LLM-ek pontosan ezt szeretik citálni.

Minden cluster aloldal kap egy ilyen bekezdést, iparág-specifikusan. **Ezek lesznek azok a szövegek, amiket a Perplexity és a ChatGPT-Browse 1:1-ben szó szerint vissza fog idézni.**

---

## 12. Nyitott kérdések — az Industries szekcióhoz specifikusan

A v1.1 dokumentum 16. fejezetében már szerepelnek általános nyitott kérdések. Az Industries szekcióra ezekből kettő különösen aktuális, plusz három új:

### 12.1 Visszahozott (v1.1-ből)

1. **Logók a kezdőlapon — és így az Industries pillar trust strip-en is** (v1.1 16. pont, 4. kérdés). Az iparági aloldalak Customer cards (§ 03) szekciói azt is megkövetelik, hogy az ügyfél neve **legalább szövegesen** szerepeljen. Ez szintén jogilag óvatosan kezelendő: a *név említése* mint partnerreferencia általában megengedett (ha a kapcsolat valós), de a *logó használata* külön engedélyköteles. Javaslat: **az iparági oldalakon csak nevek szerepeljenek, ne logók**, hacsak nincs explicit engedély.

2. **Mercedes-Benz mérnöki szolgáltatás** (v1.1 16. pont, 3. kérdés). Az Automotive aloldalon (§ 03) szerepel mint partner. Ha visszatérő szolgáltatás, akkor azt a komponens-rácsban (§ 04) is meg kell jeleníteni („engineering services for OEM production”). Ha egyszeri 2019-es projekt volt, akkor csak partner-említésként szerepel.

### 12.2 Új, csak az Industries szekcióra

3. **Mennyire részletesen említjük a *competitor* vagy *unserved* iparágakat?** Például: medical, aerospace, defense — ezek nem a fő iparágaink, de elszórt projektek lehettek. Az „§ 08 FAQ — General Engineering” oldalra tettünk egy „what if my industry isn't on your list?” kérdést. **Javaslat:** ez a megközelítés helyes — nem hozunk létre 6-7. iparági aloldalt, hanem a General Engineering aloldal abszorbálja a maradékot.

4. **Kvantitatív iparági adatok publikálhatók?** Az aloldalakon számokat ígértünk („18+ years”, „2007 PSA pass”, „Supplier of the Year 2009”). Ezek mind nyilvános adatok. **De**: pl. „% of revenue from automotive” vagy „number of part numbers supplied to Knorr-Bremse” — érzékeny. **Javaslat:** ezeket **nem** publikáljuk az oldalon. A relatív említések („deepest expertise”, „longest-running partnership”) elegendőek és nem érzékenyek.

5. **A „certifications matrix per industry” (§ 05 a pillar oldalon) prioritási sorrendje.** A jelenlegi terv szerint az automotive oldalon mind a 4 cert (ISO 9001, ISO 14001, VDA 6.3, PSA) szerepel; a power tools oldalon csak ISO 9001 + ISO 14001. Ez akarva-akaratlanul azt sugallja, hogy a power tools-ra nem készülünk olyan komolyan, mint az automotive-ra. **Javaslat:** minden iparági oldalon **mind a 4 certet feltüntessük**, de visuálisan az ott releváns 1-2 cert kapjon kiemelést („primary qualification for this industry”), a többi „also held” kategóriában.

---

## 13. Lezárás és tovább a Design fázis felé

Ez a dokumentum az Industries szekció **tartalmi tervét** rögzíti. A Claude Design fázis innen veszi a következő inputokat:

1. **Az 6 oldal teljes szövegét** (a pillar + 5 cluster — 3 nyelven, copywriting nyelv-rétegenként).
2. **A 9 közös blokk-sablont**, ami minden iparági aloldalon ugyanaz.
3. **A vizuális design-irányelveket** (9. fejezet) — ezek a frontpage_borela.png-ből vannak deriválva, így konzisztencia garantált.
4. **A schema.org JSON-LD sablonokat**, amik a Code fázisban implementálhatók.
5. **A belső linkstruktúra-mátrixot**, ami a Code fázisban a navigáció + cross-link automatizálható elemeit definiálja.

**A Design fázis indítása előtt eldöntendő (Industries-specifikus):**
- Logók vs csak szöveges customer-említés (lásd 12.1).
- Mercedes-Benz mint visszatérő vagy egyszeri partner (lásd 12.1).
- Az iparági ikonkészlet stílusa (5 vagy 6 ikon — utóbbi, ha General Engineering külön +1-et kap).
- Hero alatti SVG/kép vs. csak typográfia + numbers strip.

**Ami már most stabilan beépíthető a designba:**
- 9-blokkos közös sablon.
- §-számozott eyebrow label rendszer.
- Cream + black + blue színpaletta.
- A pillar oldal fekete kontraszt-paneljének helye (csak ott, nem aloldalakon).
- A 4-cell certifications-rács minden aloldalon.
- Az akkordeon-pattern a FAQ-hoz.
- A „READY TO DISCUSS YOUR PROJECT?” típusú záró CTA-blokk minden oldalon.

A pillar + 5 cluster aloldal együtt egy **koherens SEO-aktor entitást** alkot, amit a Google és az LLM-ek egységesen tudnak feldolgozni — pontosan azt a topical authority pozíciót, amit a v1.1 dokumentum stratégiai célként kitűzött.
