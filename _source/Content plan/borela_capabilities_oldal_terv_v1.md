# Borela Bt. — Capabilities pillar oldal tartalmi terve

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Fázis:** Tartalmi terv → Design fázis bemenete
**Kapcsolódik:** `borela_uj_tartalmi_struktura_v1-1.md` (6.7 fejezet), `frontpage_borela.png`

---

## 0. A terv keretezése

A Capabilities oldal a borela.eu **harmadik főmenü-pontja** (Services és Industries után). A 6.7 fejezet kulcsmondata: *„Ezek nem self-centered oldalak, hanem válaszok a beszerző kérdéseire.”* Az oldal célja egyetlen mondatban: **48 órán belül egy német vagy angol nyelvű beszerző el tudja dönteni, hogy a Borela műszakilag, kapacitásban és tanúsítványban alkalmas-e az ő projektjére** — anélkül, hogy emailt kellene írnia.

A pillar oldal **nem helyettesíti** az 5 alterület saját aloldalát (Machine Park, Materials, Tolerances, Measurement Room, Certifications). Ez egy **belépő-szintű, áttekintő oldal**, amely a fontosabb tényeket azonnal megmutatja, és minden szekciónál mély-link visz a részletes aloldalra.

**Vizuális nyelv (homepage-konzisztens):**
- Krémszín háttér (#EFEAE0 körüli), fekete tipográfia, királykék (#1A47E5) CTA, fekete negatív számblokk
- Szekció-prefixek: `→ 02 — MACHINE PARK`, `→ 03 — MATERIALS` stb. (a főoldal mintájára)
- Kártya-grid 2 oszlopos a kapacitás-blokkokhoz
- Statisztika-mátrix fekete blokkban negatívban, középre helyezve (mint a homepage-on)
- Tipográfia: bold sans-serif címek, vékony alszövegek

**URL-ek:**
- EN (gyökér): `/capabilities/`
- DE: `/de/kompetenzen/`
- HU: `/hu/kepessegek/`

---

## 1. SEO alapadatok

### 1.1 Elsődleges kulcsszó

| Nyelv | Elsődleges | Másodlagos |
|---|---|---|
| EN | *CNC machining capabilities* | *precision machining capacity*, *contract manufacturing capabilities* |
| DE | *CNC-Fertigungskompetenzen* | *Zerspanungskapazität*, *Maschinenpark CNC-Lohnfertigung* |
| HU | *CNC megmunkálási képességek* | *gépipari kapacitás*, *forgácsoló képesség* |

A pillar oldal nem licitál a fő szolgáltatás-kulcsszavakra (azt a Services pillar viszi), hanem **kapacitás- és tanúsítvány-orientált** keresésekre célzunk: *„CNC machining capacity Hungary”*, *„VDA 6.3 audited supplier CNC”*, *„CMM inspection capability Eastern Europe”*.

### 1.2 Meta title (≤ 60 karakter)

- **EN:** *CNC Machining Capabilities — Machines, Materials, Tolerances | Borela*
- **DE:** *CNC-Fertigungskompetenzen — Maschinen, Werkstoffe, Toleranzen | Borela*
- **HU:** *CNC megmunkálási képességek — Gépek, anyagok, tűrések | Borela*

### 1.3 Meta description (≤ 155 karakter)

- **EN:** *40 CNC lathes, 6 machining centers, in-house CMM inspection, ±0.01 mm typical tolerance. ISO 9001 / ISO 14001 / VDA 6.3 audited. Materials from steel to bronze.*
- **DE:** *40 CNC-Drehmaschinen, 6 Bearbeitungszentren, eigener Messraum, ±0,01 mm typische Toleranz. ISO 9001 / ISO 14001 / VDA 6.3. Stahl bis Bronze.*
- **HU:** *40 CNC eszterga, 6 megmunkáló központ, saját mérőszoba, ±0,01 mm tipikus tűrés. ISO 9001 / ISO 14001 / VDA 6.3 auditált. Acéltól bronzig.*

---

## 2. H1 és intro

### 2.1 H1

- **EN:** *What we can build for you — the machines, materials and measurements behind every part*
- **DE:** *Was wir für Sie fertigen können — Maschinen, Werkstoffe und Messtechnik hinter jedem Teil*
- **HU:** *Amit Önnek gyártani tudunk — a gépek, anyagok és mérőeszközök minden alkatrész mögött*

### 2.2 Hero alszöveg (~40 szó)

- **EN:** *40 CNC lathes. 6 machining centers. A measurement room built around a 3D CMM. Five material families, hundreds of grades, ±0.01 mm typical tolerance. Audited to VDA 6.3. This is the capacity OEMs across Europe rely on.*
- **DE:** *40 CNC-Drehmaschinen. 6 Bearbeitungszentren. Ein eigener Messraum mit 3D-Koordinatenmessgerät. Fünf Werkstoff­familien, Hunderte Güten, typische Toleranz ±0,01 mm. VDA 6.3-auditiert. Auf diese Kapazität verlassen sich OEMs in ganz Europa.*
- **HU:** *40 CNC eszterga. 6 megmunkáló központ. Mérőszoba 3D koordináta-mérőgépre építve. Öt anyagcsalád, több száz minőség, ±0,01 mm tipikus tűrés. VDA 6.3 szerint auditált. Erre a kapacitásra támaszkodnak OEM-ek Európa-szerte.*

### 2.3 Hero számblokk (5 mini-stat, közvetlenül a hero alatt — a homepage mintájára)

| Szám | Címke (EN) | Címke (DE) | Címke (HU) |
|---|---|---|---|
| **40** | CNC LATHES | CNC-DREHMASCHINEN | CNC ESZTERGA |
| **6** | MACHINING CENTERS | BEARBEITUNGSZENTREN | MEGMUNKÁLÓ KÖZPONT |
| **±0.01** | mm TYPICAL TOLERANCE | mm TYPISCHE TOLERANZ | mm TIPIKUS TŰRÉS |
| **5000 m²** | PRODUCTION AREA | PRODUKTIONSFLÄCHE | GYÁRTÓTERÜLET |
| **4** | KEY CERTIFICATIONS | SCHLÜSSEL-ZERTIFIZIERUNGEN | KULCS-TANÚSÍTVÁNY |

> **Design megjegyzés:** A homepage hero alatt 3 stat van (1953 / 70+ / ±0.01). Itt 5 kell, mert 5 alterületet vezet fel az oldal — de tartsa meg a 3 vs. 5 közötti vizuális ritmust (pl. 3 fent, 2 alatta, vagy egyetlen 5-elemű sor reszponzívan 5→3+2 mobilon).

---

## 3. Oldalstruktúra — H2 szekciók sorrendben

A Capabilities pillar oldal **9 fő szekcióból** áll, a homepage szekciórend ritmusát követve.

```
HERO + STAT-SZALAG
    ↓
→ 01  CAPABILITIES OVERVIEW         (5 kártya, mind a 5 alterületre)
    ↓
→ 02  MACHINE PARK                  (összegző táblázat + CTA aloldalra)
    ↓
→ 03  MATERIALS                     (5 anyagcsalád kártyán + CTA)
    ↓
→ 04  TOLERANCES & PRECISION        (transzparens tűrés-mátrix + CTA)
    ↓
→ 05  MEASUREMENT ROOM              (4 eszköz kártyán + CTA)
    ↓
→ 06  CERTIFICATIONS                (4 tanúsítvány kártyán, homepage-stílusban)
    ↓
→ 07  CAPACITY BY THE NUMBERS       (fekete negatív blokk — homepage-stílus)
    ↓
→ 08  FREQUENTLY ASKED QUESTIONS    (5 kérdés, akkordeon)
    ↓
→ 09  CTA                           (RFQ upload + másodlagos: Kapcsolat)
```

---

## 4. Szekciónkénti tartalom

### 4.1 → 01  CAPABILITIES OVERVIEW

**Cél:** A buyer 5 másodperc alatt lássa az 5 alterületet, és kattintson tovább a számára releváns aloldalra.

**Layout:** 2 oszlopos kártya-grid (5 kártya, 3+2 elrendezés vagy 2+2+1), mint a homepage SERVICES blokkja.

**Kártya-tartalom (kártyánként):** ikon | cím | 2 soros leírás | 1-2 metrika | „Explore →” link

| # | Cím (EN) | Leírás-csíra (EN) | Metrika |
|---|---|---|---|
| 1 | **Machine park** | 40 CNC lathes & 6 machining centers configured for series production from 500 to 100,000 pieces. | Ø 1–90 mm bar capacity |
| 2 | **Materials** | Carbon and alloy steels, stainless, aluminum, brass, bronze, cast parts and engineering plastics. | 5 material families |
| 3 | **Tolerances** | Typical ±0.01 mm on turned and milled parts. Tighter tolerances coordinated with grinding partners. | ±0.01 mm typical |
| 4 | **Measurement room** | Zeiss-class CMM, contour meter, micro-hardness tester. Every series shipped with documented FAI. | In-house CMM |
| 5 | **Certifications** | ISO 9001 since 1996, ISO 14001 since 2005, VDA 6.3 audited, Knorr-Bremse PSA passed. | 4 certifications |

**Link cél:** mind az 5 kártya a megfelelő `/capabilities/{slug}/` aloldalra megy.

---

### 4.2 → 02  MACHINE PARK

**Cél:** Megválaszolja: *„Van-e elég kapacitásuk és megfelelő gépük?”*

**Copy (EN, ~80 szó):**

> Our production runs on **40 CNC lathes** across three diameter classes — 15 up to Ø45 mm, 14 between Ø46–55 mm, and 11 above Ø56 mm — plus **6 machining centers**, three horizontal and three vertical. The fleet includes Goodway GLS-3300 YS (Ø90 mm, high-speed), Citizen-Miyano BNE 51 MSY (Ø51 mm, twin-spindle Y-axis), Index C65, and Citizen Cincom L32A-1M8. Every machine is tooled for series production from 500 to 100,000 pieces.

**Vizuális blokk:** kompakt táblázat 3 oszloppal, a homepage számblokk-tipográfiájában:

| Category | Count | Key specs |
|---|---|---|
| CNC turning, Ø ≤ 45 mm | 15 | bar feeders, sub-spindle on select |
| CNC turning, Ø 46–55 mm | 14 | Y-axis on most, twin-spindle |
| CNC turning, Ø 56+ mm | 11 | up to Ø 90 mm bar capacity |
| Horizontal machining centers | 3 | table up to 500×500 mm, 40-tool magazine, 20,000 rpm |
| Vertical machining centers | 3 | table up to 800×450 mm, 24 tools, 30,000 rpm |
| Long-turn (Swiss-type) | 1 | Citizen Cincom L32A-1M8, Ø32 mm |

**CTA:** *„See the full machine list →”* link a `/capabilities/machine-park/` aloldalra.

> **Design megjegyzés:** A táblázat **ne** sima HTML table legyen — a homepage SERVICES kártya-stílusát kövesse: vékony osztóvonalakkal, baseline-igazítással, számok jobbra. A homepage „1953 / 70+ / 40 / 6 / 500–100K” mintázata itt tovább folytatódik.

---

### 4.3 → 03  MATERIALS

**Cél:** Megválaszolja: *„Tudnak-e dolgozni az én anyagomon?”*

**Copy (EN, ~60 szó):**

> We machine across five material families — every grade we process comes with certified traceability and is verified against the customer's drawing specification. If your part calls for a grade not listed here, ask: we have likely run it for another customer.

**Vizuális blokk:** 5 kártyás grid, kártyánként anyagcsalád + tipikus minőségek + tipikus alkalmazás.

| Family | Typical grades | Typical applications |
|---|---|---|
| **Carbon & alloy steels** | C45, 16MnCr5, 42CrMo4, 100Cr6 | brake components, shafts, pins |
| **Stainless steels** | 1.4301, 1.4305, 1.4404, 1.4571 | sealing components, food-grade parts |
| **Aluminum** | EN AW-6082, 6060, 7075, 2007 | housings, lightweight structural parts |
| **Brass & bronze** | CuZn39Pb3, CuSn8, CuSn12 | bushings, slide bearings, hydraulic fittings |
| **Cast & plastics** | steel and aluminum castings, POM, PA, PEEK | complex geometries, low-friction parts |

**CTA:** *„See full material list & traceability process →”* link a `/capabilities/materials/`-re.

> **Nyitott kérdés a tartalmi tervből (17.4):** ha a centrifugál öntésű bronz siklócsapágy még aktív, az itt kap egy **6. családot** — *„Centrifugally cast bronze”* — saját kártyával.

---

### 4.4 → 04  TOLERANCES & PRECISION

**Cél:** Megválaszolja: *„Megfelelnek a rajzomnak?”* — és **transzparensen** kezeli a v1.1-ben javított ±0,01 vs. ±0,001 mm kérdést.

**Copy (EN, ~90 szó):**

> Most customer drawings sit comfortably inside our standard window. Where they don't, we say so up front — and we have grinding and EDM partners on retainer for the dimensions that need them. **You don't need to disqualify a project because of a single tight feature: send the drawing, and we will tell you within 48 business hours which features we hold ourselves, and which we coordinate.**

**Vizuális blokk:** transzparens tűrés-mátrix — ez az oldal **bizalom-építő hangsúlya**.

| Capability | What we hold in-house | When we coordinate externally |
|---|---|---|
| Turning, general tolerance | ±0.01 mm typical | — |
| Turning, best-case (selected machines, controlled features) | ±0.005 mm | — |
| Milling, general tolerance | ±0.01 mm typical | — |
| Surface roughness, turned | Ra 0.8 typical, Ra 0.4 selected | Ra < 0.4 via grinding partner |
| Grinding tolerances (≤ ±0.001 mm) | not in-house | **coordinated with grinding partner** |
| Heat treatment | not in-house | **coordinated with heat treatment partner** |
| EDM features | not in-house | coordinated on request |

**A blokk alá kiemelt mondat (kvótaszerű, nagyobb tipográfia):**
- **EN:** *„One drawing, one supplier, one contract — even when grinding or heat treatment is on the print.”*
- **DE:** *„Eine Zeichnung, ein Lieferant, ein Vertrag — auch wenn Schleifen oder Wärmebehandlung gefordert sind.”*
- **HU:** *„Egy rajz, egy beszállító, egy szerződés — akkor is, ha köszörülés vagy hőkezelés van a rajzon.”*

**CTA:** *„Read our tolerance philosophy →”* link a `/capabilities/tolerances/`-re.

> **Design megjegyzés:** Ez a szekció pszichológiailag a legfontosabb az oldalon. A 17.2.D pont kritikája szerint a transzparencia ellophat vevőket, akik nem akarnak külső köszörűshöz menni — a kiemelt kvóta ezt fordítja meg: *te nem mész külső köszörűshöz, mi megyünk*. Vizuálisan ez **nem** lehet egy lapos táblázat — a „what we hold / when we coordinate” oszlopok közötti kontraszt vizuális is legyen (pl. bal oszlop tele jelölve, jobb oszlop áthúzott vagy árnyékolt).

---

### 4.5 → 05  MEASUREMENT ROOM

**Cél:** Megválaszolja: *„Bízhatok a minőségükben?”*

**Copy (EN, ~70 szó):**

> Every series leaves the shop with documented dimensional evidence. The measurement room operates independently of the production floor and houses our 3D coordinate measuring machine, contour profilometer, micro-hardness tester, and roundness gauge. First Article Inspection reports are standard on every new part number; statistical process control reports are available on request for series production.

**Vizuális blokk:** 4 kártyás grid (mérőeszközönként egy kártya), kártyánként ikon + eszköz neve + 1 soros leírás + 1 metrika.

| Eszköz | Funkció | Metrika |
|---|---|---|
| **3D Coordinate Measuring Machine (CMM)** | dimensional verification, FAI reporting | climate-controlled, traceable calibration |
| **Contour profilometer** | profile and form verification | per-feature reporting |
| **Micro-hardness tester** | post-heat-treatment hardness verification | HV scale, surface and core |
| **Roundness gauge** | cylindrical and circular geometry | sub-micron resolution |

**CTA:** *„See our measurement workflow →"* link a `/capabilities/measurement-room/`-re.

> **Design megjegyzés:** ehhez a szekcióhoz **fotó kell** a mérőszobából — a régi oldalon nincs jó kép, ezt a 15. fejezet (Design fázis briefje) inputjai között kell forszírozni. Ha még nincs fotó a launch-ig, akkor egy elegáns „technical illustration” mockup-ot használunk átmenetileg.

---

### 4.6 → 06  CERTIFICATIONS

**Cél:** Megválaszolja: *„Átmennek a supplier auditon?”*

**Layout:** 4 kártyás grid, **pontosan ugyanaz a vizuális, mint a homepage „CERTIFICATIONS” szekciója** (4 kártya 2×2 elrendezésben).

| Tanúsítvány | Óta | Mit jelent (1 soros, EN) |
|---|---|---|
| **ISO 9001** | 1996 | Quality management system audited every three years. |
| **ISO 14001** | 2005 | Environmental management system covering both production sites. |
| **VDA 6.3 audit** | 2016 | Automotive process audit — required by Tier 1 OEMs. |
| **Knorr-Bremse Product Safety Audit** | 2007 | Brake system supplier qualification — passed and maintained. |

**Záró mondat a blokk alatt:**
- **EN:** *„All certificates are available on request as part of the supplier qualification process. Audit reports can be shared under NDA.”*
- **DE:** *„Alle Zertifikate stehen im Rahmen der Lieferantenqualifizierung auf Anfrage zur Verfügung. Auditberichte teilen wir unter NDA.”*
- **HU:** *„Minden tanúsítvány a beszállítói kvalifikáció keretében kérésre rendelkezésre áll. Audit-riportokat NDA mellett megosztunk.”*

**CTA:** *„Request certification documents →"* link a `/capabilities/certifications/`-re.

> **Konzisztencia:** ez a blokk **egy az egyben** a homepage Certifications blokkjának klónja — szándékosan, hogy a buyer felismerje a vizuális mintát és tudja, „ugyanaz a négy, csak részletesebben”.

---

### 4.7 → 07  CAPACITY BY THE NUMBERS

**Cél:** Sűrített „audit-pre-check” a buyer számára. Egyetlen képernyő alatt áttekinthető legyen, hogy a Borela a méretkategóriájának megfelel-e.

**Layout:** **fekete háttér, negatív tipográfia, számok nagyon nagyok** — a homepage „1953 / 70+ / 40 / 6 / 500-100K / ±0.01" blokkjának klónja, de **9 számmal** (3×3 grid).

| Szám | Címke (EN) |
|---|---|
| **40** | CNC lathes |
| **6** | machining centers |
| **5,000 m²** | total production area |
| **3** | production sites |
| **50+** | employees |
| **500–100,000** | series size range |
| **±0.01 mm** | typical tolerance |
| **5** | material families |
| **4** | key certifications |

> **Design megjegyzés:** ez a szekció a homepage „NUMBERS” blokkjához képest **bővebb** (9 vs. 6 stat), és a homepage-ot követi, de **nem ismétli pontosan**, hogy a buyer érezze: *ez az oldal a homepage „mély” verziója*. Tartani kell a nagy, bold, sans-serif tipográfiát és a kis betűs sub-label-eket.

---

### 4.8 → 08  FREQUENTLY ASKED QUESTIONS

**Cél:** A buyer legfontosabb 5 specifikus kérdésére válasz, schema.org FAQPage-dzsel + GEO/AEO (LLM-citation) optimalizálva.

**Layout:** akkordeon, ugyanaz, mint a homepage FAQ blokkja.

**EN változat (a HU/DE fordítás csak labelszinten említve):**

**1. Can you handle our production volume?**
> Our sweet spot is 500 to 100,000 pieces per order, with repeat production relationships often spanning multiple years. Above 100,000 pieces we evaluate case by case — we have run larger runs, but our 40-machine fleet is configured for high-mix mid-volume work, not pure mass production.

**2. Do you machine [specific material we use]?**
> We routinely machine carbon and alloy steels, stainless, aluminum, brass, bronze, steel and aluminum castings, and engineering plastics including POM, PA, PEEK. If your grade is unusual, send the drawing — we have likely run it before. Material traceability and 3.1 certificates are standard.

**3. What tolerances can you actually hold on a production run?**
> Typical ±0.01 mm on CNC turned and milled parts, measured across the full series, not just the first article. We hold ±0.005 mm on selected machines for controlled features. Tolerances below ±0.005 mm require grinding — we coordinate this with our grinding partner so you still receive finished parts from one supplier.

**4. Are you certified for Tier 1 / Tier 2 automotive supply?**
> Yes. ISO 9001 since 1996, ISO 14001 since 2005, audited to VDA 6.3 in 2016, and passed the Knorr-Bremse Product Safety Audit in 2007 — maintained since. Audit reports available under NDA as part of supplier qualification.

**5. Do you offer first article inspection (FAI) and SPC reports?**
> FAI reports with full dimensional and material documentation are standard on every new part number. SPC reports for series production are available on request and are routine for automotive customers.

**Schema:** `FAQPage` JSON-LD pontos egyezéssel a látható szöveghez.

---

### 4.9 → 09  CTA

**Cél:** A teljes oldal egyetlen kimenete — egy RFQ indítása.

**Layout:** ugyanaz, mint a homepage záró CTA — krémszín háttér, középre zárt, nagy headline + alszöveg + két gomb.

**Copy:**
- **EN headline:** *„Have a drawing? We'll tell you in 48 hours which features we hold, which we coordinate, and what the part will cost in series."*
- **DE headline:** *„Sie haben eine Zeichnung? Wir sagen Ihnen innerhalb von 48 Stunden, welche Maße wir selbst halten, welche wir koordinieren — und was das Teil in Serie kostet.”*
- **HU headline:** *„Van rajza? 48 órán belül megmondjuk, melyik méretet tartjuk mi, melyiket koordináljuk — és mennyibe kerül sorozatban.”*

**Gombok:**
- Elsődleges (kék): *„Request a Quote / Angebot anfordern / Ajánlatkérés"* → `/rfq/`
- Másodlagos (outline): *„Talk to engineering / Mit dem Engineering sprechen / Mérnökséggel egyeztetni"* → `/contact/`

> **Design megjegyzés:** a homepage „READY TO DISCUSS YOUR PROJECT?” CTA-ja a templát. Itt ugyanaz, csak konkrétabb headline-nal.

---

## 5. Schema.org markup

A `<head>`-ben elhelyezendő JSON-LD blokkok:

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://borela.eu/capabilities/#webpage",
      "url": "https://borela.eu/capabilities/",
      "name": "CNC Machining Capabilities — Machines, Materials, Tolerances | Borela",
      "isPartOf": {"@id": "https://borela.eu/#website"},
      "about": {"@id": "https://borela.eu/#organization"},
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://borela.eu/"},
        {"@type": "ListItem", "position": 2, "name": "Capabilities", "item": "https://borela.eu/capabilities/"}
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Precision CNC Machining Capabilities",
      "provider": {"@id": "https://borela.eu/#organization"},
      "areaServed": [
        {"@type": "Country", "name": "Germany"},
        {"@type": "Country", "name": "Austria"},
        {"@type": "Country", "name": "Switzerland"},
        {"@type": "Country", "name": "Hungary"},
        {"@type": "Place", "name": "European Union"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Machining capabilities",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CNC turning, Ø 1–90 mm bar capacity"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CNC milling on horizontal and vertical machining centers"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "In-house CMM inspection with FAI reporting"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Coordinated heat treatment via partner"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Coordinated grinding via partner"}}
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Can you handle our production volume?", "acceptedAnswer": {"@type": "Answer", "text": "..."}},
        {"@type": "Question", "name": "Do you machine [specific material we use]?", "acceptedAnswer": {"@type": "Answer", "text": "..."}},
        {"@type": "Question", "name": "What tolerances can you actually hold on a production run?", "acceptedAnswer": {"@type": "Answer", "text": "..."}},
        {"@type": "Question", "name": "Are you certified for Tier 1 / Tier 2 automotive supply?", "acceptedAnswer": {"@type": "Answer", "text": "..."}},
        {"@type": "Question", "name": "Do you offer first article inspection (FAI) and SPC reports?", "acceptedAnswer": {"@type": "Answer", "text": "..."}}
      ]
    }
  ]
}
```

A `Question`/`Answer` szövege **szó szerint** egyezzen a látható FAQ-blokkal (Google rich-results szabály).

---

## 6. Belső linkek

### 6.1 Az oldalról kifelé mutató linkek

| Honnan | Hová | Anchor szöveg (EN) |
|---|---|---|
| Capabilities Overview (4.1) — 1. kártya | `/capabilities/machine-park/` | „Explore the machine park" |
| Capabilities Overview — 2. kártya | `/capabilities/materials/` | „See materials & traceability" |
| Capabilities Overview — 3. kártya | `/capabilities/tolerances/` | „Read our tolerance philosophy" |
| Capabilities Overview — 4. kártya | `/capabilities/measurement-room/` | „See our measurement workflow" |
| Capabilities Overview — 5. kártya | `/capabilities/certifications/` | „Request certification documents" |
| Machine Park (4.2) végén | `/capabilities/machine-park/` | „See the full machine list" |
| Materials (4.3) végén | `/capabilities/materials/` | „See full material list" |
| Tolerances (4.4) végén | `/capabilities/tolerances/` | „Read our tolerance philosophy" |
| Tolerances (4.4) blokkban | `/services/heat-treatment/` | „heat treatment partner" |
| Measurement (4.5) végén | `/capabilities/measurement-room/` | „See our measurement workflow" |
| Certifications (4.6) végén | `/capabilities/certifications/` | „Request certification documents" |
| CTA (4.9) | `/rfq/` | „Request a Quote" |
| CTA (4.9) | `/contact/` | „Talk to engineering" |

### 6.2 Az oldalra mutató linkek (a többi oldalról)

- **Homepage** → Capabilities a főmenü ponton + a SERVICES kártyák alatt mint „See our capabilities".
- **Minden Service pillar oldal** (`/services/cnc-turning/`, `/services/cnc-milling/`, `/services/heat-treatment/` stb.) → a tűrés/anyag/mérőszoba említésekor link a megfelelő Capabilities aloldalra.
- **Minden Industry oldal** (`/industries/automotive/` stb.) → a tanúsítványok említésekor link `/capabilities/certifications/`-re.

---

## 7. Hreflang és kanonikus

```html
<link rel="canonical" href="https://borela.eu/capabilities/" />
<link rel="alternate" hreflang="en" href="https://borela.eu/capabilities/" />
<link rel="alternate" hreflang="de" href="https://borela.eu/de/kompetenzen/" />
<link rel="alternate" hreflang="hu" href="https://borela.eu/hu/kepessegek/" />
<link rel="alternate" hreflang="x-default" href="https://borela.eu/capabilities/" />
```

---

## 8. Design fázisra átadandó nyitott kérdések

1. **A homepage CERTIFICATIONS blokk vizuálisan azonos vagy hasonló legyen-e** itt is? Javaslat: **azonos** — buyer felismeri a mintát, és tudja, hogy az aloldalakon a részletek vannak.
2. **A „Tolerances & Precision” szekció (4.4) mátrixa** — vizuálisan ez nem lehet sima táblázat. Kell egy unique designelem (pl. „in-house" oszlop teljesen kitöltött, „coordinated" oszlop áthúzott vagy másfajta jelöléssel). A Design fázisban ezt külön mockup-ra kell tervezni.
3. **Fotó-igények a launch-ig:** (a) mérőszoba CMM-mel, (b) megmunkáló központ Y-tengelyes esztergagéppel, (c) sokféle anyag-darab közeli fotója. Ha bármelyik hiányzik a launch-ig, „technical illustration" mockup helyettesíti.
4. **A „Capacity by the Numbers" blokk (4.7) 9-elemű grid lesz** — a homepage 6-elemű variánsának kibővítése. A Design fázisban dönteni kell: 3×3 vagy 4+5 vagy más reszponzív törés.
5. **Centrifugál öntés (17. fejezet 1. nyitott kérdés):** ha aktív, a Materials blokkba (4.3) bekerül egy 6. anyagcsalád. Ez most a tervben **nincs benne**, mert a státusza nyitott.

---

## 9. Mit nem fed le ez a terv (a Code fázis dolga)

- Az 5 aloldal (Machine Park, Materials, Tolerances, Measurement Room, Certifications) saját **teljes tartalmi terve** — ez következő dokumentumokban készül el.
- Az anyagok és gépek **pontos műszaki adatlapjai** (PDF-letöltés a Machine Park aloldalon) — a Borela szolgáltatja a Code fázisra.
- Auditreport PDF-ek tárolása + NDA-kérő flow — Code fázis backend feladat.
- A „Capacity by the Numbers" blokk **CMS-ből szerkeszthetősége** — ha az 50+ alkalmazotti szám változik, a marketing tudja frissíteni admin felületen, ne fejlesztői ticket kelljen hozzá.
