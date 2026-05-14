# Borela Bt. — „Rólunk" (About) oldal — részletes tartalmi terv

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Kapcsolódás:** A `borela_uj_tartalmi_struktura_v1-1.md` 5. és 6.9 fejezetének kibontása. A Design (Claude Design) fázis bemeneti dokumentuma a Rólunk oldalhoz.
**Bemenet:** a struktúra-dokumentum v1.1 + a `frontpage_borela.png` designnyelve.

---

## 1. A terv alapja — mit elemeztem

### 1.1 Designnyelv a frontpage_borela.png-ből

A Rólunk oldalnak vizuálisan illeszkednie kell a már megtervezett kezdőlaphoz. A kezdőlapból kiolvasott rendszer:

- **Színpaletta:** krém/törtfehér alap; világosabb bézs sávok a váltakozó szekciókhoz; egy közel fekete „számok" szekció; élénk királykék elsődleges CTA; körvonalas (csak keretes) másodlagos gomb; fekete szöveg, szürkés törzsszöveg.
- **Tipográfia:** vastag, nagybetűs, kondenzált grotesk főcímek; kisebb, szürkés sans-serif törzsszöveg; apró, nagybetűs, számozott mikro-címkék a szekciók előtt (a kezdőlapon `1.01 — IN PRODUCTION`, `1.02 — SERVICES` formátumban).
- **Komponensek:**
  - **Kártya** vékony kerettel, ikon balra fent, cím, leírás, majd a kártya alján **pontozott vezérvonalas spec-sorok** (kulcs ........ érték) — adatlap-karakter.
  - **Statisztika-blokk:** óriás szám + apró felirat + vékony aláhúzás-vonal; a kezdőlapon fekete háttéren, rácsba rendezve.
  - **Akkordion-sorok:** vastag cím + apró alcím + plusz/chevron ikon, vékony elválasztó vonalak.
  - **Esettanulmány-blokk:** csíkos placeholder kép balra, szöveg jobbra, apró „FEATURED" címkével.
  - **Számozott rács** („Why Borela"): 2×2, minden cella számozva (01–04), vastag cím + törzsszöveg, vékony belső vonalak.
  - **Hero:** mikro-címke, óriás kétsoros főcím, törzsbekezdés, elsődleges (kék) + másodlagos (körvonalas) gomb; alatta keskeny statisztika-szalag.
  - **Záró CTA:** középre zárt nagy főcím + alcím + kék gomb.
- **Layout:** középre zárt tartalmi oszlop, bőséges fehér tér, két- és négyoszlopos rácsok.

**Következmény a Rólunk oldalra:** a tervet úgy építem fel, hogy **a lehető legtöbb meglévő komponenst újrahasznosítsa** (hero, fekete statisztika-blokk, számozott rács, akkordion FAQ, csíkos kép-blokk, záró CTA), és csak egyetlen valóban új komponenst igényeljen: az **idővonalat**. Lásd a 11. fejezetet.

### 1.2 Stratégiai bemenet a struktúra-dokumentumból

- A Rólunk oldal **brand-építő, nem SEO-fókuszú** (6.9). A feladata a bizalom és a hitelesség, nem a kulcsszó-rangsor.
- A pozicionálás egyetlen mondata (2.1) az oldal gerince: *„Családi tulajdonú magyar precíziós forgácsoló partner az EU szívében, nyugat-európai minőséggel, kelet-európai költségszinten — 70+ éves mérnöki háttérrel."*
- A történet **1953-tól** indul (Bognár Lajos gépműhelye); a hőkezelés kiszervezése **átlátható mérföldkőként**, nem visszalépésként jelenik meg (6.9).
- A Mercedes-Benz mérnöki projekt (2019) erős, új bizalom-jelző mérföldkő.
- Hangvétel: tömör, számokkal alátámasztott, mérnöki — nem mézes marketing (2.3).

---

## 2. Strukturális javaslat — egy gazdag hub-oldal

A struktúra-dokumentum a Rólunk-at dropdownként kezeli (5.1 Történet / 5.2 Telephelyek / 5.3 Vezetés aloldalakkal). **Javaslom ezt felülírni:**

| Eredeti terv (v1.1) | Javasolt megoldás | Indok |
|---|---|---|
| 5.1 Történetünk — külön aloldal | A Rólunk hub-oldal **idővonal-szekciója** | A történet önmagában vékony oldal; szekcióként erősebb, és a hub fő narratíváját adja. |
| 5.2 Telephelyeink — külön aloldal + 3 al-aloldal | **Marad külön dedikált oldal** (`/about/locations/`), a hub-on csak rövid telephely-szekció vezet rá | Valódi külön funkció: lokális SEO („fémmegmunkálás Kecskemét"), és telephelyenként `LocalBusiness` schema kell. |
| 5.3 Vezetés — opcionális aloldal | A Rólunk hub **„A csapat / vezetés" szekciója** | Önmagában túl vékony aloldalnak; szekcióként viszont értékes bizalom-jelző. |

**A javasolt végeredmény:**
- **`/about/`** — gazdag, görgethető hub-oldal (történet + értékek + vezetés + telephely-előnézet) — ez a dokumentum fő tárgya.
- **`/about/locations/`** — dedikált Telephelyek oldal (külön rövid terv a 6.6 szekcióban).

Ha a cég mégis ragaszkodik a külön Történet-aloldalhoz: az idővonal-szekció ugyanezzel a tartalommal kiemelhető `/about/history/`-ra, és a hub-on egy rövidített „kivonat + átvezető link" marad. A schema és a belső linkelés ettől nem változik érdemben.

---

## 3. URL, nyelvi verziók, hreflang

### 3.1 URL-szerkezet

| Oldal | EN (gyökér) | DE | HU |
|---|---|---|---|
| Rólunk hub | `/about/` | `/de/ueber-uns/` | `/hu/rolunk/` |
| Telephelyek | `/about/locations/` | `/de/ueber-uns/standorte/` | `/hu/rolunk/telephelyeink/` |

(Ha külön Történet-aloldal készül: `/about/history/`, `/de/ueber-uns/geschichte/`, `/hu/rolunk/tortenetunk/`.)

### 3.2 hreflang

Minden nyelvi verzió `<head>`-jébe a teljes hreflang-blokk, `x-default` az angol verzió:

```html
<link rel="alternate" hreflang="en" href="https://borela.eu/about/" />
<link rel="alternate" hreflang="de" href="https://borela.eu/de/ueber-uns/" />
<link rel="alternate" hreflang="hu" href="https://borela.eu/hu/rolunk/" />
<link rel="alternate" hreflang="x-default" href="https://borela.eu/about/" />
```

---

## 4. Elsődleges kulcsszó és az oldal valódi feladata

A Rólunk oldal **nem** P1/P2 kulcsszavakra optimalizál. A valódi feladata háromrétegű:

1. **Bizalom (a buyer journey 2. fázisa):** a beszerző, miután a szolgáltatási oldalról ideér, itt győződik meg arról, hogy a Borela valódi, stabil, hosszú múltú cég — nem egy alkalmi műhely.
2. **Entitás-építés (AI-keresők, Knowledge Graph):** a `Organization` + `Event` + `AboutPage` schema, a konzisztens cégadatok és a `sameAs` hivatkozások a Google és az LLM-ek „fejében" megerősítik a Borela mint entitás létezését és attribútumait.
3. **Könnyű, releváns kulcsszavak melléktermékként:** branded queryk („Borela Bt.", „Borela history", „Borela Kecskemét"), és a Telephelyek aloldalon keresztül a lokális kifejezések.

**Kapcsolódó kulcsszó-kör (nem fő cél, csak természetes lefedés):** EN *family-owned CNC machining company*, *Hungarian precision machining family business*; DE *Familienunternehmen Zerspanung*, *CNC-Lohnfertiger aus Ungarn*; HU *családi tulajdonú fémmegmunkáló cég*, *precíziós alkatrészgyártó Kecskemét*.

---

## 5. H1 / Meta title / Meta description

### 5.1 H1

- **EN:** *Seven decades of precision — a Hungarian engineering family business*
- **DE:** *Sieben Jahrzehnte Präzision — ein ungarisches Familienunternehmen im Maschinenbau*
- **HU:** *Hét évtized precízió — egy magyar mérnöki családi vállalkozás*

### 5.2 Meta title (60 karakter alatt)

- **EN:** *About Borela — Family-Owned Precision Machining | Hungary*
- **DE:** *Über Borela — Familienunternehmen für Präzisionszerspanung*
- **HU:** *A Borela Bt.-ről — családi precíziós fémmegmunkálás*

### 5.3 Meta description (155 karakter alatt)

- **EN:** *Borela is a family-owned Hungarian precision machining company — engineering heritage since 1953, 50 people, 3 sites, serving Knorr-Bremse, Mercedes-Benz and Hilti.*
- **DE:** *Borela ist ein ungarisches Familienunternehmen für Präzisionszerspanung — Ingenieurstradition seit 1953, 50 Mitarbeiter, 3 Standorte, Zulieferer für Knorr-Bremse und Mercedes-Benz.*
- **HU:** *A Borela családi tulajdonú magyar precíziós fémmegmunkáló cég — 1953-ig visszanyúló mérnöki múlt, 50 fő, 3 telephely, referenciák: Knorr-Bremse, Mercedes-Benz, Hilti.*

> **Megjegyzés a „1953" vs „70+ év" kérdéshez:** lásd a 12.1 nyitott kérdést. A meta- és H1-szövegek a „mérnöki örökség / heritage 1953 óta" keretezést használják, ami akkor is tényszerű, ha a Borela Bt. mint jogi entitás később (a schema szerint 1990-ben) jött létre. A Design fázis előtt ezt a megfogalmazást a céggel jóvá kell hagyatni.

---

## 6. Oldalfelépítés — kötelező tartalmi blokkok

A blokkok H2-szinten, sorrendben. Minden blokknál megadom: **cél**, **tartalom**, **design-komponens megfeleltetés**, **copy-irány** (a kulcsblokkoknál EN/DE/HU mintaszöveggel).

### 6.0 Hero szekció

- **Cél:** azonnal közvetíteni, hogy a Borela egy hosszú múltú, családi, mérnöki cég.
- **Komponens:** a kezdőlapi **hero** újrahasznosítva — mikro-címke + óriás kétsoros H1 + törzsbekezdés + egyetlen másodlagos CTA. Háttérben **valós fotó**: a jakabszállási új csarnok vagy egy archív műhelyfotó (lásd 12.4). RFQ-gomb a heroban itt **nem** kell — a Rólunk oldal nem konverziós, csak a záró CTA visz az RFQ-ra.
- **Mikro-címke:** `01 — ABOUT BORELA` / `01 — ÜBER BORELA` / `01 — A BORELÁRÓL`
- **H1:** lásd 5.1.
- **Hero törzsbekezdés (kb. 25–30 szó):**
  - **EN:** *From a single machine workshop founded in 1953 to a precision contract manufacturer trusted by European OEMs — Borela has stayed family-owned, engineering-led and grounded in central Hungary.*
  - **DE:** *Von einer 1953 gegründeten Werkstatt zum Präzisions-Zulieferer für europäische OEMs — Borela ist familiengeführt geblieben, ingenieurgetrieben und fest in Zentralungarn verwurzelt.*
  - **HU:** *Egy 1953-ban alapított gépműhelytől az európai OEM-ek által megbízott precíziós beszállítóig — a Borela családi tulajdonban, mérnöki szemlélettel, Magyarország közepén maradt.*
- **Másodlagos CTA:** „See our timeline" / „Unsere Geschichte" / „Az idővonalunk" → ugorjon a 6.3 idővonal-szekcióra (anchor link).

### 6.1 Örökség-állítás (intro)

- **Cél:** egy tömör, emberi hangú bevezető, ami megalapozza a narratívát; nem ismétli a heroot.
- **Komponens:** egyszerű, középre zárt szövegblokk + egy **kiemelt idézet (pull-quote)** — a pozicionáló mondat (2.1) tipográfiailag kiemelve.
- **Mikro-címke:** `02 — WHO WE ARE`
- **Copy-irány:** 2–3 rövid bekezdés. (a) Kik vagyunk egy mondatban. (b) Mi a folytonosság értéke: ugyanaz a család, ugyanaz a mérnöki kultúra évtizedeken át — a beszerzőnek ez kiszámíthatóságot jelent. (c) Hol vagyunk és miért előny: az EU szívében, vámhatár nélkül, nyugat-európai minőséggel, kelet-európai költségszinten. A bekezdések **rövidek**, számokkal hivatkozva (50 fő, 3 telephely, 1953), de a részletes számok a következő blokkba kerülnek.
- **Pull-quote (mindhárom nyelven):** a 2.1 pozicionáló mondat.

### 6.2 „Számokban" — sötét statisztika-szekció

- **Cél:** a hitelesség számszerű lehorgonyzása, egyetlen letapogatható blokkban.
- **Komponens:** a kezdőlapi **fekete statisztika-blokk** újrahasznosítva — óriás számok rácsban, apró feliratokkal, vékony aláhúzásokkal.
- **Mikro-címke:** `03 — BY THE NUMBERS`
- **Statisztikák (8 cella, 4×2 vagy 3+3+2 rács):**

  | Szám | Felirat EN | Felirat DE | Felirat HU |
  |---|---|---|---|
  | 1953 | Engineering heritage since | Ingenieurstradition seit | Mérnöki örökség |
  | 70+ | Years of know-how | Jahre Know-how | Év szaktudás |
  | 50 | People | Mitarbeiter | Munkatárs |
  | 3 | Production & HQ sites | Standorte | Telephely |
  | 40 | CNC lathes | CNC-Drehmaschinen | CNC eszterga |
  | 6 | Machining centers | Bearbeitungszentren | Megmunkáló központ |
  | 500–100K | Series size per order | Stück pro Serie | Db / sorozat |
  | ±0.01 mm | Typical tolerance | Typische Toleranz | Tipikus tűrés |

- **Copy-irány:** csak a számok és feliratok; semmi törzsszöveg. Ez a blokk vizuálisan, nem szövegesen kommunikál.

### 6.3 Idővonal — „Az utunk"

- **Cél:** a brand-építés magja. A családi történet 1953-tól napjainkig, elegáns, adatlap-szerű idővonalon. Ez az oldal leghosszabb és érzelmileg legfontosabb szekciója.
- **Komponens:** **ÚJ komponens** — lásd a 11.2 designer-briefet. Függőleges idővonal javasolt (mobilbarát), évszám-jelölőkkel, minden mérföldkőnél: év (nagy, kondenzált), rövid cím, 1–2 mondatos leírás, opcionálisan apró ikon vagy csíkos mini-kép.
- **Mikro-címke:** `04 — OUR STORY`
- **Szekció-H2:**
  - EN: *Seven decades, one family, one workshop floor that never stopped growing*
  - DE: *Sieben Jahrzehnte, eine Familie, eine Werkstatt, die nie aufgehört hat zu wachsen*
  - HU: *Hét évtized, egy család, egy műhely, amely sosem állt meg a növekedésben*
- **Mérföldkövek:** a teljes lista a 7. fejezetben, EN/DE/HU mintaszöveggel.
- **Copy-irány:** minden bejegyzés tárgyilagos, mérnöki, 1–2 mondat. A hőkezelés kiszervezése (2020-as évek) **nem mentegetőzve**, hanem ésszerű szakmai döntésként: a Borela a forgácsolási szakértelmére fókuszál, a hőkezelést specializált, modernebb berendezésű partner végzi. A 2008-as Fülöpszállás-mérföldkő a történet része marad.

### 6.4 „Ami meghatároz minket" — értékek

- **Cél:** a cég karakterét megfogalmazni — nem általános marketing-értékek, hanem amiért egy beszerző egy közepes méretű családi céggel akar dolgozni.
- **Komponens:** a kezdőlapi **számozott 2×2 rács** („Why Borela") újrahasznosítva — 4 cella, mindegyik számozva, vastag cím + 2–3 mondatos törzsszöveg.
- **Mikro-címke:** `05 — WHAT DEFINES US`
- **A 4 érték (cím + copy-irány):**
  1. **Folytonosság / Continuity** — Ugyanaz a család, ugyanaz a mérnöki kultúra évtizedeken át. A beszerzőnek ez azt jelenti: a kapcsolat nem egy negyedéves stratégia függvénye.
  2. **Mérnöki vezetés / Engineering-led** — A döntéseket mérnökök hozzák, nem értékesítők. Ezért a Borela őszintén megmondja, mit tud és mit nem (pl. a köszörülést és a hőkezelést partnerrel szervezi — lásd a struktúra-dokumentum 6.5 és 6.7).
  3. **Átláthatóság / Transparency** — Reális tűrések, reális határidők, reális képességek. A „±0,01 mm tipikus, szorosabbra partnerrel" megközelítés bizalmat épít, nem gyengeséget mutat.
  4. **Egyetlen kontakt / Single point of contact** — A Borela viszi a teljes projektmenedzsmentet, beleértve a kiszervezett hőkezelés koordinációját — a beszerzőnek egy szerződése és egy kapcsolattartója van.
- **Mintaszöveg (1. érték, mindhárom nyelven):**
  - EN: *Continuity — The same family, the same engineering culture, decade after decade. For a buyer, that means a supplier relationship that does not depend on a quarterly strategy.*
  - DE: *Kontinuität — Dieselbe Familie, dieselbe Ingenieurskultur, Jahrzehnt für Jahrzehnt. Für den Einkäufer bedeutet das eine Lieferantenbeziehung, die nicht von einer Quartalsstrategie abhängt.*
  - HU: *Folytonosság — Ugyanaz a család, ugyanaz a mérnöki kultúra, évtizedről évtizedre. A beszerzőnek ez olyan beszállítói kapcsolatot jelent, amely nem egy negyedéves stratégia függvénye.*

### 6.5 A csapat / vezetés

- **Cél:** emberi arcot adni a cégnek; a családi folytonosságot vizuálisan is megerősíteni. **Opcionális** — a cég jóváhagyásától függ (12.3 nyitott kérdés).
- **Komponens:** egyszerű portré-rács (2–4 fő) vagy — ha a cég nem akar egyéni szerepeltetést — egy **csíkos kép-blokk + narratív szövegblokk** a kezdőlapi esettanulmány-komponens mintájára.
- **Mikro-címke:** `06 — THE PEOPLE`
- **Copy-irány (két forgatókönyv):**
  - **Ha vállalják a nevesítést:** 2–4 vezető, portréfotóval, névvel, szereppel, 1 mondatos háttérrel. A családi szálat kiemelni (generációk).
  - **Ha nem:** egyetlen narratív bekezdés a családi vezetésről és a 70+ év mérnöki tapasztalatról + egy csapatfotó a műhelyben. Konkrét nevek nélkül is működik: *„A Borelát ma is alapító család vezeti, a műhelyben szerzett mérnöki tapasztalatra építve."*
- **Megjegyzés:** ha ez a szekció kimarad, a 6.4 és 6.6 közvetlenül kapcsolódik, a számozás eggyel csúszik.

### 6.6 Telephelyeink — előnézet + átvezetés

- **Cél:** röviden bemutatni a 3 telephelyet, és átvezetni a dedikált Telephelyek oldalra.
- **Komponens:** 3 db **adatlap-kártya** a kezdőlapi szolgáltatás-kártyák mintájára — ikon, telephely neve, 1 mondatos funkció, majd **pontozott vezérvonalas spec-sorok**.
- **Mikro-címke:** `07 — WHERE WE WORK`
- **A 3 kártya:**

  | Telephely | Funkció | Spec-sorok |
  |---|---|---|
  | **Izsák** | Központ / Headquarters | Szerep: HQ · Cím: Garai u. 6, 6070 Izsák |
  | **Jakabszállás** | Elsődleges forgácsoló és sajtoló üzem | Alapterület: 3000 m² · Szerep: CNC forgácsolás + présmunka |
  | **Fülöpszállás** | Másodlagos forgácsoló üzem | Alapterület: 2000 m² · Szerep: CNC forgácsolás, kapacitás-redundancia |

- **Copy-irány:** minimális szöveg, a spec-sorok hordozzák az információt. A kártyák alatt egyetlen szöveges link/gomb: „See all locations & maps" / „Alle Standorte & Karten" / „Telephelyeink és térképek" → `/about/locations/`.

> **A dedikált Telephelyek oldal (`/about/locations/`) rövid terve:**
> - **H1:** EN *Our locations — three sites in central Hungary* / DE *Unsere Standorte — drei Werke in Zentralungarn* / HU *Telephelyeink — három üzem Magyarország közepén*
> - **Blokkok:** (1) intro; (2) telephelyenként egy szekció — fotók, pontos cím, megközelítés, alapterület, funkció, beszélt nyelvek, nyitvatartás; (3) közös térkép mindhárom helyszínnel; (4) záró CTA (Kapcsolat / RFQ).
> - **Schema:** 3 db `LocalBusiness` — az Izsáki a `parentOrganization`, Jakabszállás és Fülöpszállás `subOrganization`; mindegyiknél cím, koordináta, nyitvatartás. Ez a lokális SEO és az AI-keresők szempontjából a legfontosabb a Rólunk-blokkon belül.
> - **Lokális kulcsszavak (természetes lefedés):** „fémmegmunkálás Kecskemét / Bács-Kiskun", „CNC bérforgácsolás Jakabszállás", „precíziós alkatrészgyártás Kecskemét környéke".

### 6.7 Tanúsítványok és elismerések

- **Cél:** a hitelességet hivatalos pecsétekkel és díjakkal lezárni; átvezetni a Képességek/Tanúsítványok oldalra.
- **Komponens:** a kezdőlapi **tanúsítvány-kártyák** rövidített újrahasznosítása (4 kártya: ISO 9001, ISO 14001, VDA 6.3, Knorr-Bremse PSA) + egy keskeny „díjak" sáv.
- **Mikro-címke:** `08 — CREDENTIALS & RECOGNITION`
- **Tartalom:**
  - **Tanúsítványok (kártyák, dátummal):** ISO 9001 (1996 óta), ISO 14001 (2005 óta), VDA 6.3 audit (2016), Knorr-Bremse Product Safety Audit (2007).
  - **Díjak (szöveges sáv vagy mini-kártyák):** Knorr-Bremse Év Beszállítója 2009; Az Év Vállalkozója 2010.
- **Copy-irány:** minimális — a kártya-cím, a dátum, és egy fél mondat. A részletek a dedikált Tanúsítványok oldalon. Egyetlen link: „Full certification details" → `/capabilities/certifications/`.

### 6.8 Akiknek dolgozunk — bizalom-sáv

- **Cél:** a nagyvállalati referenciákat mint tényt megjeleníteni, és átvezetni a Referenciák oldalra.
- **Komponens:** keskeny szöveges bizalom-sáv. **Fontos jogi megkötés:** a struktúra-dokumentum 17.2 (A) pontja szerint **logók helyett szöveges említést** használunk, amíg a partnerek írásbeli márkahasználati engedélye meg nem érkezik (12.5 nyitott kérdés).
- **Mikro-címke:** `09 — WHO TRUSTS US`
- **Copy-irány:** egyetlen mondat + partnerlista szövegesen:
  - EN: *Borela supplies precision components to Knorr-Bremse, Mercedes-Benz Manufacturing Hungary, Hilti, Freudenberg, Sulzer, Phoenix Mecano and Zarges.*
  - DE: *Borela liefert Präzisionskomponenten an Knorr-Bremse, Mercedes-Benz Manufacturing Hungary, Hilti, Freudenberg, Sulzer, Phoenix Mecano und Zarges.*
  - HU: *A Borela precíziós alkatrészeket szállít a Knorr-Bremse, a Mercedes-Benz Manufacturing Hungary, a Hilti, a Freudenberg, a Sulzer, a Phoenix Mecano és a Zarges számára.*
  - Egyetlen link: „See references & case studies" → `/references/`.

### 6.9 FAQ blokk

- **Cél:** AEO/GEO láthatóság (AI-keresők) + a beszerző gyors kérdéseinek megválaszolása.
- **Komponens:** a kezdőlapi **akkordion** újrahasznosítva.
- **Mikro-címke:** `10 — COMMON QUESTIONS`
- **Tartalom:** lásd a 8. fejezetet (4 kérdés, mindhárom nyelven).

### 6.10 Záró CTA szekció

- **Cél:** a brand-építő oldalt is konverzióba vezetni — a beszerző, aki most már „elhitte" a céget, tegyen egy lépést.
- **Komponens:** a kezdőlapi **záró CTA** újrahasznosítva — középre zárt nagy főcím + alcím + kék RFQ-gomb.
- **Copy-irány:**
  - EN: *Working with a supplier you can rely on for years — that's the point. Send us your drawing.* → „Request a Quote"
  - DE: *Ein Lieferant, auf den Sie sich über Jahre verlassen können — darum geht es. Senden Sie uns Ihre Zeichnung.* → „Angebot anfordern"
  - HU: *Olyan beszállító, akire évekig számíthat — erről szól az egész. Küldje el a rajzát.* → „Ajánlatkérés"

### 6.11 Lábléc

Teljes, a kezdőlapival azonos lábléc.

---

## 7. Idővonal — a mérföldkövek

A 6.3 szekció tartalma. Minden bejegyzés: **év — cím — 1–2 mondatos leírás**. A leírások itt magyarul a copy-irányt adják; a Design fázisban mindhárom nyelven véglegesítendők, anyanyelvi lektorral (a struktúra-dokumentum 12.5 szerint).

| Év | Cím (EN / DE / HU) | Leírás — copy-irány |
|---|---|---|
| **1953** | The first workshop / Die erste Werkstatt / Az első műhely | Bognár Lajos megalapítja gépműhelyét — innen ered a 70+ éves mérnöki örökség. |
| **1990** | Borela Bt. is founded / Gründung der Borela Bt. / Megalakul a Borela Bt. | A családi műhely tevékenysége önálló vállalkozásként folytatódik Izsákon. *(Évszám megerősítendő — lásd 12.1.)* |
| **1996** | ISO 9001 / ISO 9001 / ISO 9001 | A Borela minőségirányítási rendszere tanúsítottá válik — a sorozatgyártói pozícionálás alapja. |
| **2005** | ISO 14001 / ISO 14001 / ISO 14001 | Környezetirányítási tanúsítás — egyre fontosabb a nyugat-európai beszerzőknél. |
| **2007** | Knorr-Bremse Product Safety Audit / Knorr-Bremse Produktsicherheitsaudit / Knorr-Bremse termékbiztonsági audit | A Borela megfelel a Knorr-Bremse szigorú termékbiztonsági auditjának — belépő a fékrendszer-beszállításhoz. |
| **2008** | Fülöpszállás site / Standort Fülöpszállás / A fülöpszállási telephely | Második telephely a kapacitás bővítésére. *(Akkoriban hőkezelési képességgel — lásd a 2020-as évek mérföldkövét.)* |
| **2009** | Supplier of the Year / Lieferant des Jahres / Az Év Beszállítója | A Knorr-Bremse Év Beszállítója elismerés. |
| **2010** | Entrepreneur of the Year / Unternehmer des Jahres / Az Év Vállalkozója | Országos vállalkozói elismerés. |
| **2016** | VDA 6.3 audit / VDA-6.3-Audit / VDA 6.3 audit | A Borela folyamatauditja megfelel a VDA 6.3 autóipari szabványnak. |
| **2019** | Mercedes-Benz engineering project / Mercedes-Benz Ingenieurprojekt / Mercedes-Benz mérnöki projekt | Mérnöki együttműködés indul a Mercedes-Benz Manufacturing Hungary-vel. |
| **2020s** | New hall & focused production / Neue Halle & fokussierte Fertigung / Új csarnok és fókuszált gyártás | Új gyártócsarnok Jakabszálláson; a hőkezelést a Borela specializált partnerre bízza, hogy a forgácsolási szakértelmére koncentrálhasson. |
| **Ma** | Today / Heute / Ma | 50 fő, 3 telephely, 40 CNC eszterga, 6 megmunkáló központ — európai OEM-ek megbízott precíziós partnere. |

> **Pontosítandó az idővonalhoz a Design fázis előtt:** az 1990-es Bt.-alapítás évszáma; a Fülöpszállás-telephely és a hőkezelési képesség pontos évei; a centrifugál öntés / bronz siklócsapágy szerepel-e a történetben (12.2 nyitott kérdés — ha aktív szolgáltatás volt/van, kaphat egy saját mérföldkövet).

---

## 8. FAQ — Rólunk oldal (4 kérdés)

A látható akkordion-tartalom és a `FAQPage` JSON-LD **egy az egyben** egyezzen (a struktúra-dokumentum 8.4 szerint, különben schema-büntetés).

**EN:**
1. **How long has Borela been operating?** — *Borela's engineering heritage goes back to a machine workshop founded in 1953. The company has held ISO 9001 certification since 1996 and has served automotive and engineering OEMs across Europe for decades.*
2. **Is Borela a family business?** — *Yes. Borela is family-owned and engineering-led — the same family and the same engineering culture have run the company throughout its history.*
3. **Where is Borela located?** — *Borela operates three sites in central Hungary: headquarters in Izsák, the primary machining and pressing plant in Jakabszállás (3,000 m²), and a secondary machining plant in Fülöpszállás (2,000 m²).*
4. **How many people work at Borela?** — *Around 50 people across three sites, operating 40 CNC lathes and 6 machining centers.*

**DE:**
1. **Wie lange ist Borela schon tätig?** — *Die Ingenieurstradition von Borela reicht bis zu einer 1953 gegründeten Werkstatt zurück. Das Unternehmen ist seit 1996 nach ISO 9001 zertifiziert und beliefert seit Jahrzehnten Automotive- und Maschinenbau-OEMs in ganz Europa.*
2. **Ist Borela ein Familienunternehmen?** — *Ja. Borela ist familiengeführt und ingenieurgetrieben — dieselbe Familie und dieselbe Ingenieurskultur prägen das Unternehmen seit jeher.*
3. **Wo befindet sich Borela?** — *Borela betreibt drei Standorte in Zentralungarn: den Hauptsitz in Izsák, das Hauptwerk für Zerspanung und Pressbearbeitung in Jakabszállás (3.000 m²) und ein zweites Zerspanungswerk in Fülöpszállás (2.000 m²).*
4. **Wie viele Mitarbeiter hat Borela?** — *Rund 50 Mitarbeiter an drei Standorten, mit 40 CNC-Drehmaschinen und 6 Bearbeitungszentren.*

**HU:**
1. **Mióta működik a Borela?** — *A Borela mérnöki öröksége egy 1953-ban alapított gépműhelyig nyúlik vissza. A cég 1996 óta ISO 9001 tanúsítvánnyal rendelkezik, és évtizedek óta szállít autóipari és gépipari OEM-eknek Európa-szerte.*
2. **Családi vállalkozás a Borela?** — *Igen. A Borela családi tulajdonú, mérnöki szemléletű cég — ugyanaz a család és ugyanaz a mérnöki kultúra vezeti a kezdetektől.*
3. **Hol található a Borela?** — *A Borela három telephelyen működik Magyarország közepén: a központ Izsákon, az elsődleges forgácsoló és sajtoló üzem Jakabszálláson (3000 m²), a másodlagos forgácsoló üzem Fülöpszálláson (2000 m²).*
4. **Hány ember dolgozik a Borelánál?** — *Körülbelül 50 fő három telephelyen, 40 CNC esztergával és 6 megmunkáló központtal.*

---

## 9. Schema.org markup

Minden sablon JSON-LD formában, a `<head>`-ben.

### 9.1 `AboutPage` + a globális `Organization` referencia

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://borela.eu/about/#aboutpage",
  "url": "https://borela.eu/about/",
  "name": "About Borela — Family-Owned Precision Machining",
  "inLanguage": "en",
  "mainEntity": { "@id": "https://borela.eu/#organization" },
  "breadcrumb": { "@id": "https://borela.eu/about/#breadcrumb" }
}
```

A `mainEntity` a kezdőlapon definiált globális `Organization` entitásra (`https://borela.eu/#organization`) hivatkozik — a Rólunk oldal **nem** definiálja újra az Organizationt, csak hivatkozza, hogy egyetlen konzisztens entitás legyen.

### 9.2 `Event` objektumok a mérföldkövekhez

A 7. fejezet minden mérföldköve egy-egy `Event` (vagy `Organization` `event` tömbjeként). Példa:

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Borela passes the Knorr-Bremse Product Safety Audit",
  "startDate": "2007",
  "about": { "@id": "https://borela.eu/#organization" }
}
```

A díjakat a globális `Organization` `award` tömbje már tartalmazza (struktúra-dokumentum 8.1) — itt nem duplikáljuk, csak az események.

### 9.3 `Person` (opcionális — csak ha a 6.5 vezetés-szekció nevesít)

Ha a cég vállalja a vezetők nevesítését, minden vezető egy `Person`, az `Organization` `founder` / `employee` kapcsolatával. Ha nem nevesítünk, ez a blokk kimarad.

### 9.4 `LocalBusiness` — a dedikált Telephelyek oldalon

A 3 telephely `LocalBusiness` schemája a `/about/locations/` oldalra kerül (nem a hub-ra), a struktúra-dokumentum 8.2 szerint.

### 9.5 `BreadcrumbList`

`Home › About` a hub-on; `Home › About › Locations` a Telephelyek oldalon.

### 9.6 `FAQPage`

A 8. fejezet 4 kérdése, a látható tartalommal egyezően.

---

## 10. Belső linkelés

**Linkek a Rólunk hub-ról kifelé:**
- `/about/locations/` — a 6.6 telephely-blokkból (kártyák alatti gomb).
- `/capabilities/certifications/` — a 6.7 tanúsítvány-blokkból.
- `/references/` — a 6.8 bizalom-sávból.
- `/rfq/` — a 6.10 záró CTA-ból.
- Opcionálisan: `/services/` — az örökség-introból vagy az értékek-blokkból, ahol a „mit tudunk" természetesen felmerül.

**Linkek a Rólunk hub-ra befelé (honnan jöjjön link):**
- Főmenü („Rólunk" dropdown szülő-link).
- Lábléc.
- Kezdőlap „Miért a Borela" szekció — a „70+ éves családi háttér" USP-ből egy „Read our story" link.
- Kezdőlap „Számok magunkról" blokk — opcionálisan a háttér-történethez.
- Minden iparági oldal — a „kik vagyunk" bizalmi szakaszból.

---

## 11. Designer-brief — komponensek

### 11.1 Újrahasznosított komponensek (a kezdőlapról, változtatás nélkül vagy minimális adaptációval)

| Rólunk blokk | Kezdőlapi komponens |
|---|---|
| 6.0 Hero | Hero (RFQ-gomb nélkül, csak másodlagos CTA-val) |
| 6.2 Számokban | Fekete statisztika-blokk |
| 6.4 Ami meghatároz minket | Számozott 2×2 rács („Why Borela") |
| 6.6 Telephely-előnézet | Adatlap-kártya (pontozott vezérvonalas spec-sorokkal) |
| 6.7 Tanúsítványok | Tanúsítvány-kártyák |
| 6.9 FAQ | Akkordion |
| 6.10 Záró CTA | Záró CTA-blokk |
| 6.5 Vezetés (ha narratív verzió) | Esettanulmány-blokk (csíkos kép + szöveg) |

### 11.2 Új komponens — Idővonal

Az egyetlen valóban új komponens. Designjavaslat, hogy illeszkedjen a designnyelvbe:

- **Elrendezés:** függőleges idővonal (mobilbarát; vízszintes változat nehezen működik 12 mérföldkővel mobilon). Bal oldalon vékony függőleges vonal évszám-jelölő pontokkal, jobbra a tartalom.
- **Mérföldkő-egység:** **év** nagy, kondenzált, nagybetűs számokkal (a statisztika-blokk tipográfiájával rokon); alatta rövid cím vastagon; alatta 1–2 mondatos leírás szürkés törzsszöveggel.
- **Adatlap-karakter:** a vonal és a pontok vékonyak, mérnöki rajz-szerűek; opcionálisan minden mérföldkőhöz egy apró ikon vagy egy kis csíkos placeholder-kép (később valós archív fotó).
- **Színek:** krém alap; a vonal és a pontok feketék; a „Ma" mérföldkő kiemelhető kék jelölővel.
- **Mobil:** a vonal balra szorul, a tartalom teljes szélességben alá.

### 11.3 Szekció-ritmus (háttérszínek)

A kezdőlap váltakozó krém / bézs / fekete ritmusát követve, javaslat:

| Blokk | Háttér |
|---|---|
| 6.0 Hero | krém + háttérfotó |
| 6.1 Intro | krém |
| 6.2 Számokban | **fekete** |
| 6.3 Idővonal | krém |
| 6.4 Értékek | bézs |
| 6.5 Vezetés | krém |
| 6.6 Telephelyek | bézs |
| 6.7 Tanúsítványok | krém |
| 6.8 Bizalom-sáv | bézs (keskeny) |
| 6.9 FAQ | krém |
| 6.10 Záró CTA | krém |

### 11.4 Mikro-címke számozás

A kezdőlap `1.0x` rendszerét követve a Rólunk oldal javasolt számozása `01`–`10` (vagy ha a kezdőlap szigorúan `1.xx`, akkor a Rólunk lehet `2.01 — ABOUT BORELA` … `2.10 — COMMON QUESTIONS`). A pontos prefixet a Design fázisban kell egységesíteni az összes oldal között.

### 11.5 Fotóigény (a Design fázishoz)

- Hero: a jakabszállási új csarnok **vagy** egy archív műhelyfotó (az 1953-as örökséghez — ha van archív anyag, az érzelmileg erős).
- Idővonal: opcionálisan archív fotók a korábbi évtizedekből + mai üzemi fotók.
- Vezetés: portréfotók (ha nevesítenek) vagy egy csapatfotó a műhelyben.
- Telephely-előnézet: 1-1 fotó telephelyenként (a dedikált Telephelyek oldalon több).
- A struktúra-dokumentum 15. pontja szerint a régi oldal képei alacsony felbontásúak — **új fotókra lesz szükség**.

---

## 12. Nyitott kérdések — amik a Rólunk oldalt érintik

Ezek nem blokkolják a Design fázis indítását, de a véglegesítés előtt eldöntendők. (Részben átfedés a struktúra-dokumentum 16. fejezetével, itt csak a Rólunk-releváns részük.)

1. **„1953" vs. „1990" — az alapítás keretezése.** A struktúra-dokumentum több helyen 1953-at ír alapítási évként és „70+ év"-et, a 8.1 schema viszont `foundingDate: 1990`. A Rólunk oldal jelenlegi terve ezt úgy oldja fel, hogy **1953 = a mérnöki örökség kezdete (Bognár Lajos gépműhelye)**, **1990 = a Borela Bt. mint jogi entitás megalakulása**. Ez a keretezés tényszerű és védhető — de a pontos évszámokat és a műhely→Bt. viszonyt a céggel meg kell erősíttetni, mert ez a teljes idővonal és a `foundingDate` schema alapja.
2. **Centrifugál öntés / bronz siklócsapágy az idővonalban.** Ha ez aktív (volt) szolgáltatás, kaphat egy mérföldkövet az idővonalon. Ha megszűnt/inaktív, a történetből és a Rólunk oldalról teljesen kihagyjuk (összhangban a struktúra-dokumentum 16/1 pontjával).
3. **Vezetés-szekció (6.5) — nevesítenek-e?** A cégnek kell eldöntenie, vállalja-e a vezetők névvel-fotóval való szerepeltetését. Ettől függ, hogy portré-rács vagy narratív blokk készül, és hogy kell-e `Person` schema. Javaslat: a családi folytonosság miatt **érdemes** legalább narratív formában szerepeltetni.
4. **Hero-fotó: archív vagy mai?** Ha van használható archív műhelyfotó az 1950-60-as évekből, az a hero-ban érzelmileg sokkal erősebb, mint egy mai csarnokfotó. Ezt a fotóanyag rendelkezésre állása dönti el.
5. **Hőkezelő partner nevesítése (a 6.4 átláthatóság-érték és a 6.3 idővonal kontextusában).** Ha a partner nevesíthető, az növeli a hitelességet az idővonal 2020-as mérföldkövénél és az értékek-blokkban. Ha nem, általánosan írjuk le („specializált, tanúsított hőkezelő partner"). Összhangban a struktúra-dokumentum 16/5 pontjával.
6. **Partnerlogók a 6.8 bizalom-sávban.** A jelenlegi terv **szöveges említést** használ (a struktúra-dokumentum 17.2/A jogi óvatossága miatt). Ha időközben megérkezik a partnerek írásbeli márkahasználati engedélye, a sáv logós verzióra cserélhető — de ez a Design fázisban más elrendezést igényel, ezért a döntést a designmunka előtt érdemes meghozni.
7. **Telephelyek: külön oldal vagy a hub része?** A jelen terv külön `/about/locations/` oldalt javasol (lokális SEO + `LocalBusiness` schema miatt). Ha a cég mégis mindent egy oldalon akar, a 6.6 blokk kibővíthető teljes telephely-szekcióvá — de akkor a lokális SEO gyengébb lesz.

---

## 13. Összefoglaló — a Rólunk oldal egy mondatban

A Rólunk oldal **nem kulcsszóért, hanem bizalomért dolgozik**: egyetlen gazdag, görgethető oldalon — a kezdőlap meglévő komponenseire építve, egyetlen új idővonal-komponenssel — elmeséli az 1953-tól induló családi mérnöki történetet, számszerűsíti a hitelességet, megfogalmazza a cég karakterét, és átláthatóan kezeli azt is, amit a cég kiszervez — majd a végén egyetlen lépéssel (RFQ) konverzióba vezeti a beszerzőt.
