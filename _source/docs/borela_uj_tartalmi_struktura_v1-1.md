# Borela Bt. — Új weboldal: tartalmi struktúra és SEO stratégia

**Dokumentum verzió:** 1.1 (kritikus korrekciókkal)
**Dátum:** 2026. április
**Státusz:** Fázis 1 — tartalmi struktúra. A következő fázis a webdesign (Claude Design), majd a backend (Claude Code).

**A v1.0-hoz képest megváltozott:**
- Új domain: **borela.eu** (a .hu marad 301-es átirányításként)
- Swiss-type pillar page törölve (nem ezek a célgépek, csak normál CNC eszterga van)
- Hőkezelés mint szolgáltatás átpozicionálva: **kiszervezett szolgáltatás**, nem saját üzem
- Fülöpszállás mint másodlagos forgácsoló telephely, nem hőkezelő üzem
- Pontossági tűrés korrigálva: ±0,01 mm (CNC megmunkáláson), ±0,001 mm csak köszörüléssel érhető el — amit nem csinálunk
- Alapértelmezett nyelv angol a gyökéren (a domain `borela.eu`, a nemzetközi fókusz megkívánja)
- A blog első körös célja 6–8 cikk (nem 12)
- Új kritikai áttekintés a 17. fejezetben

---

## 1. Vezetői összefoglaló

A jelenlegi borela.hu egy 2017-es, PHP-alapú, 3 nyelvű tájékoztató oldal, amely a céget mutatja be, de gyakorlatilag nem vesz részt sem a keresőoptimalizálásban, sem a lead-generálásban. A technológiai kulcsszavak ugyan benne vannak a szövegben, de:

- az oldalakat nem kulcsszó-célzásra szervezték, hanem a cég belső struktúrájára (Telephelyek, Pályázatok stb. mint főmenü pontok),
- az angol és német verzió egyes technikai adatokat nem is tartalmaz, pedig a célközönség ott van,
- hiányzik az ajánlatkérő/RFQ funkció, esettanulmány, referencia-leírás, blog/tudásbázis,
- nincs schema.org jelölés, így az AI-keresők (ChatGPT, Perplexity, Google AI Overview) lényegében nem „látják” a céget.

**Az új struktúra alapja három tézis:**

1. **A weboldal elsődlegesen angol és német nyelvű,** mert az ügyfelek többsége is az. A magyar verzió másodlagos, és főleg HR-célú (karrier, szakiskolai együttműködés) és lokális SEO-célú.
2. **A struktúrát a szolgáltatások köré építjük, nem a cég belső felépítése köré.** A nagyvállalati beszerzők nem a telephelyeket keresik, hanem a képességeket: „Lohndreherei Ungarn”, „CNC turning supplier Hungary”, „Lohnhärterei Einsatzhärten”.
3. **Minden fő szolgáltatási oldalhoz tartozik egy pillar-cluster architektúra:** egy „nagy” oldal a főkifejezésre, alatta 2–4 specifikusabb aloldal a long-tail kulcsszavakra. Ez a jelenlegi SEO „topical authority” modell, amit a Google és az LLM-ek is díjaznak.

**A reálisan várható eredmény 1 éves távlatban,** ha a tartalmat a dokumentumban leírt minőségben és mennyiségben kivitelezzük, a technikai SEO (sebesség, mobil, schema) kifogástalan, és havi szinten megjelenik néhány új blog-/tudásbázis-cikk: a fő kulcsszavak első oldalra kerülése valószerű a kis és közepes nehézségű long-tail kifejezésekre (pl. „Lohnfertigung Ungarn”, „contract machining Hungary Swiss type”), a legfontosabb generikus kifejezéseken („Lohnfertigung”, „CNC-Drehteile”) pedig stabil 2. oldali pozíció várható. A Google Ads CPC-k érdemben csökkenni fognak a jól célzott, releváns landing page-eknek köszönhetően (Quality Score javulás).

---

## 2. Stratégiai alapelvek

### 2.1 Pozicionálás

Egyetlen mondat, amit a weboldal minden oldala közvetít:

> **EN:** *A family-owned Hungarian precision machining partner in the heart of the EU, delivering Western-European quality at Eastern-European cost — with 70+ years of engineering heritage and a track record serving Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg and Sulzer.*

> **DE:** *Ein ungarisches Familienunternehmen für Präzisionszerspanung im Herzen der EU — westeuropäische Qualität zu osteuropäischen Kosten, mit 70+ Jahren Ingenieurstradition und Referenzen wie Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg und Sulzer.*

> **HU:** *Családi tulajdonú magyar precíziós forgácsoló partner az EU szívében, nyugat-európai minőséggel, kelet-európai költségszinten — 70+ éves mérnöki háttérrel és olyan referenciákkal, mint a Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg és Sulzer.*

### 2.2 A beszerző útja (buyer journey) — mit akarunk, hogy a beszerző megéljen

**1. fázis — felfedezés (SEO / Ads):** a beszerző rákeres arra, hogy „Lohndreherei Ungarn” vagy „contract CNC machining Eastern Europe tier 2 automotive” — Borela megjelenik a top 5 között, vagy az AI Overview-ben mint forrás.

**2. fázis — validáció (a weboldal meggyőzi):** a beszerző rákattint, és 10 másodperc alatt látja: (a) konkrét szolgáltatási paraméterek (tűrés, anyagok, sorozatméretek), (b) neves multinacionális referenciák, (c) tanúsítványok (ISO 9001, ISO 14001, VDA 6.3, Knorr-Bremse PSA).

**3. fázis — akció (RFQ):** a beszerző egy gombnyomásra rajzot tölthet fel és ajánlatot kérhet, nem kell email címet keresnie, nem kell felhívnia senkit.

Minden oldal designját és szövegét ehhez a három fázishoz szabjuk.

### 2.3 Formázási és hangvételi elvek

- Tömör, számokkal alátámasztott, mérnöki hangvétel. Nem marketing-mézes.
- Az angol verzió amerikai + nemzetközi szakmai szótárt használ (pl. „contract machining”, nem „job shop”).
- A német verzió DACH-szokású ipari terminológiát (Lohnfertigung, Zerspanung, Drehteile — nem „Drehstücke”).
- A magyar verzió magyar szakmai terminológiát használ (bérforgácsolás, nem „outsourced machining”).
- Egy oldalon max. 1 fő CTA (ajánlatkérés / RFQ), esetleg egy másodlagos (kapcsolatfelvétel).

---

## 3. Nyelvi stratégia és URL-szerkezet

### 3.1 Ajánlott URL-szerkezet

Új domain: **borela.eu** — a nemzetközi pozicionálást ez sokkal inkább támogatja, mint a `.hu` országkód. A `borela.hu` domain megmarad és 301-es átirányítással minden URL-je a `borela.eu` megfelelő URL-jére mutat (a régi SEO-erő átmentéséhez). A `.eu` domain plusz előnye: a DACH piacon kevésbé teszi azonnal nyilvánvalóvá, hogy magyar beszállítóval van dolga a beszerző — a cégnév és a történet már maga is elég ehhez, de a tld pszichológiailag neutrálisabb.

Mivel a **fő piac angol és német nyelvterület**, a nyelvi prioritást az URL-struktúra is tükrözze:

```
https://borela.eu/          → angol (alapértelmezett, nem /en/ — ez a fő piaca a cégnek)
https://borela.eu/de/       → német
https://borela.eu/hu/       → magyar (másodlagos)
```

Ez eltér a v1.0-tól: ott a magyart tettem a gyökérre a magyar domain miatt, de ha `borela.eu`-ra váltunk, és a főpiac angol-német, akkor az angol a logikus gyökér. A régi `borela.hu/hu/...` URL-ek 301-ben átirányítódnak a `borela.eu/hu/...` új URL-ekre; a régi `borela.hu/en/...` a `borela.eu/...`-ra; a régi `borela.hu/de/...` a `borela.eu/de/...`-ra.

### 3.2 URL-formátum az aloldalakra

Az aloldalak URL-jeiben **kulcsszó-alapú slugot** használunk, nyelv szerint fordítva. Az angol a gyökér alatt van (`/services/...`), a német `/de/leistungen/...`, a magyar `/hu/szolgaltatasok/...`:

| Téma | EN slug | DE slug | HU slug |
|---|---|---|---|
| CNC esztergálás | `/services/cnc-turning/` | `/de/leistungen/cnc-drehen/` | `/hu/szolgaltatasok/cnc-esztergalas/` |
| CNC marás | `/services/cnc-milling/` | `/de/leistungen/cnc-fraesen/` | `/hu/szolgaltatasok/cnc-marasss/` |
| Hőkezelés (kiszervezett) | `/services/heat-treatment/` | `/de/leistungen/waermebehandlung/` | `/hu/szolgaltatasok/hokezeles/` |
| Présmunka | `/services/press-work/` | `/de/leistungen/pressbearbeitung/` | `/hu/szolgaltatasok/sajtolas/` |
| 3D mérés | `/services/measurement/` | `/de/leistungen/messtechnik/` | `/hu/szolgaltatasok/3d-meres/` |
| Prototípus | `/services/prototyping/` | `/de/leistungen/prototypenbau/` | `/hu/szolgaltatasok/prototipus-gyartas/` |
| Összeszerelés | `/services/assembly/` | `/de/leistungen/baugruppenmontage/` | `/hu/szolgaltatasok/osszeszereles/` |
| Hegesztés (TIG) | `/services/welding/` | `/de/leistungen/schweissen/` | `/hu/szolgaltatasok/hegesztes/` |

A Swiss-type (Langdreh) aloldal **törölve** a v1.1-ben — nem a mi fő képességünk, csak egy gépünk van ilyen (Citizen Cincom), és nem pozicionáljuk specialistaként. A Cincom mint gép szerepel a géppark oldalon, de nem épít köré SEO-stratégiát.

### 3.3 hreflang

Minden oldal `<head>` részébe bekerül a teljes hreflang-blokk. Példa a CNC esztergálás oldalra:

```html
<link rel="alternate" hreflang="en" href="https://borela.eu/services/cnc-turning/" />
<link rel="alternate" hreflang="de" href="https://borela.eu/de/leistungen/cnc-drehen/" />
<link rel="alternate" hreflang="hu" href="https://borela.eu/hu/szolgaltatasok/cnc-esztergalas/" />
<link rel="alternate" hreflang="x-default" href="https://borela.eu/services/cnc-turning/" />
```

Az `x-default` az angol verzió, mert ez a legáltalánosabb nemzetközi célközönséghez megy.

---

## 4. Kulcsszó-térkép

### 4.1 Általános megjegyzés

Az alábbi listák valós, Google-ön és B2B ipari portálokon (industrystock.com, wlw.de, europages.de, europages.co.uk) rendszeresen előforduló, a DACH és angolszász piacon ténylegesen használt kifejezésekre épülnek. **Nem becsült keresési volumeneket adok meg** (ahhoz Keyword Planner / Ahrefs / Semrush kellene), hanem a kifejezéseket **stratégiai prioritás szerint csoportosítom**:

- **P1 — Fő kulcsszavak (pillar oldalak):** magas volumen, magas verseny, magas intent. Minden erőnket ide fókuszáljuk.
- **P2 — Speciális kulcsszavak (cluster oldalak):** közepes volumen, közepes verseny, még mindig jó intent. Itt lehet reálisan első oldalra kerülni.
- **P3 — Long-tail + földrajz (landing page-ek + blog):** kis volumen, alacsony verseny, nagyon magas intent. **Itt fogjuk a legtöbb reális lead-et szerezni** és itt lesz a legolcsóbb a Google Ads.

### 4.2 Német nyelvterület (DACH — Németország, Ausztria, Svájc)

**P1 — Fő kulcsszavak:**

- Lohnfertigung
- CNC-Lohnfertigung
- Lohnzerspanung
- Zerspanung
- CNC-Drehteile
- Drehteile
- CNC-Frästeile
- Frästeile
- Präzisionsdrehteile
- Präzisionsteile

**Kiemelten NEM cél:** ~~Lohnhärterei~~, ~~Wärmebehandlung~~ mint fő kulcsszó — mivel ezt kiszervezzük (lásd 6.5 és 17.1). A hőkezelés mint opció említve van az oldalon, de nem erre épül SEO-kampány.

**P2 — Speciális kulcsszavak:**

- Lohndrehen / Lohndreherei
- Lohnfräsen
- CNC-Drehen
- CNC-Fräsen
- Bearbeitungszentren (horizontal / vertikal)
- Einbaufertige Drehteile
- Drehteile nach Zeichnung
- Serienfertigung (Kleinserien / Mittelserien / Großserien)
- Automotive Zulieferer
- Zerspanungstechnik
- Präzisionszerspanung
- Gleitlager (a Borela bronz siklócsapágyakat is gyárt centrifugál öntéssel — ha ez még aktív szolgáltatás! lásd kritikai megjegyzés)

**Kihúzva a v1.0-ból, amit nem tudunk valósan kiszolgálni:**
- ~~CNC-Langdrehen / CNC-Langdrehautomaten~~ (csak egy gépünk van, nem fő képesség)
- ~~Lohnhärterei kiemelt kulcsszóként~~ (mivel a hőkezelést kiszervezzük, nem tudunk nyerni ezen a szegmenseken — de részletes okokat lásd 6.6-ban)
- ~~Einsatzhärten Dienstleister~~, ~~Gasaufkohlen Lohnfertigung~~ (ugyanaz)
- ~~Schleudergussverfahren~~ (csak ha még aktív szolgáltatás — tisztázandó)

**P3 — Long-tail (ez a legértékesebb a Google Ads-hez!):**

- Lohnfertigung Ungarn
- CNC-Drehteile Ungarn
- Zerspanung Osteuropa
- Lohndrehen Ungarn
- Automotive Zulieferer Ungarn
- Präzisionsdrehteile nach Zeichnung
- CNC-Drehteile Edelstahl
- CNC-Drehteile Aluminium
- CNC-Drehteile Messing
- Drehteile Serie 500 bis 100000
- VDA 6.3 zertifizierter Zulieferer
- ISO 9001 Lohnfertiger
- Knorr-Bremse Zulieferer (ez nagyon erős — a referencia maga is keresett kifejezés!)
- Tier 2 Zulieferer Ungarn

### 4.3 Angol nyelvterület (nemzetközi, EU-angol)

**P1 — Fő kulcsszavak:**

- contract machining
- CNC machining services
- precision CNC machining
- CNC turning services
- CNC milling services
- precision turned parts
- precision machined parts
- precision machined components
- contract manufacturing
- heat treatment services
- contract heat treatment

**P2 — Speciális kulcsszavak:**

- multi-axis CNC turning (Y-axis, sub-spindle)
- high-volume CNC machining
- tight-tolerance machining
- CNC machining supplier
- Tier 2 automotive supplier
- OEM machining
- ISO 9001 CNC supplier
- VDA 6.3 audited machining supplier (a VDA 6.3 auditált státuszt ki kell emelnünk — a beszerzők ezt keresik)
- bronze bearings (a siklócsapágyakhoz, ha még aktív — long-tail, de értékes)

**Kihúzva a v1.0-ból:**
- ~~Swiss-type CNC turning / Swiss machining / Swiss turning~~ (nincs ilyen specializációnk)
- ~~case hardening services, gas carburizing services~~ (kiszervezett, nem saját)

**P3 — Long-tail:**

- contract machining Hungary
- CNC turning supplier Hungary
- CNC turning Eastern Europe
- precision machining supplier EU
- automotive parts supplier Hungary
- Tier 2 supplier Central Europe
- precision machined parts to drawing
- CNC turned parts 500 to 100000 pieces
- Knorr-Bremse approved supplier (referencia mint kulcsszó)
- Mercedes-Benz engineering services supplier
- VDA 6.3 audited CNC supplier
- Hungarian CNC machining family business

### 4.4 Magyar piac (lokális, HR, másodlagos)

**P1 + P2:**

- bérforgácsolás / CNC bérforgácsolás
- CNC esztergálás / CNC esztergálás bérmunka
- CNC marás
- hőkezelés / bérhőkezelés
- gázcementálás / betétedzés
- fémmegmunkálás Kecskemét / Bács-Kiskun
- precíziós alkatrészgyártás
- beszállító fémipari
- automotive beszállító Magyarország

**P3 (legfőképp karrier-SEO):**

- CNC beállító állás Kecskemét
- CNC esztergályos állás Kecskemét
- hőkezelő állás Bács-Kiskun
- gyakornok fémipar Kecskemét
- szakiskolai gyakorlati képzés fémmegmunkálás

### 4.5 A nyertes stratégia: pillar–cluster piramis

Minden fő szolgáltatási oldal (pillar) **erős belső linkelést** kap minden kapcsolódó cluster oldaltól, és visszafelé is:

```
[CNC Turning] (pillar, P1: "CNC turning services")
    ↓ linkek ↓
    [Multi-axis turning] (cluster, P2: "multi-axis CNC turning")
    [Turning by material: steel] (cluster, P2: "stainless steel CNC turning")
    [Turning by material: aluminium] (cluster, P2: "aluminium CNC turning")
    [Case study: Knorr-Bremse brake components] (cluster, P3: "Knorr-Bremse supplier")
    [Blog: Tolerances in CNC turning] (cluster, P3: "CNC turning tolerances")
```

Ez azt csinálja, hogy a Google és az LLM-ek fejében a **Borela = precision CNC machining authority** entitás-kapcsolat megerősödik.

---

## 5. Teljes sitemap

Az új weboldal oldalainak teljes listája, hierarchiával. Minden oldal mindhárom nyelven elkészül, kivéve amit külön jelölök.

### 5.1 Főmenü (Level 0)

A régi 6-pontos menü helyett ez a főmenü:

1. **Szolgáltatások** (/services, /leistungen, /szolgaltatasok) — dropdown
2. **Iparágak** (/industries, /branchen, /iparagak) — dropdown
3. **Képességek** (/capabilities, /kompetenzen, /kepessegek) — dropdown
4. **Referenciák** (/references, /referenzen, /referenciak)
5. **Rólunk** (/about, /ueber-uns, /rolunk) — dropdown
6. **Blog** (/blog, /blog, /blog)
7. **Karrier** (/careers, /karriere, /karrier) — DE-n és EN-en csak „Job opportunities” aloldal, a teljes karrier oldal magyar
8. **Kapcsolat** (/contact, /kontakt, /kapcsolat)

**Kiemelt CTA gomb a menüben (jobbra, más színnel):** „Ajánlatkérés” / „Request a Quote” / „Angebot anfordern” → /rfq, /quote, /ajanlatkeres

### 5.2 Teljes oldaltérkép

**Kezdőlap** (borela.eu/, borela.eu/de/, borela.eu/hu/)

**1. Szolgáltatások** (pillar)
- 1.1 CNC esztergálás
  - 1.1.1 Többtengelyes esztergálás (Y-tengely, 2 orsó) — mint cluster
- 1.2 CNC marás
  - 1.2.1 Horizontális megmunkáló központ
  - 1.2.2 Vertikális megmunkáló központ
- 1.3 Hőkezelés — **mint koordinált szolgáltatás**, kiszervezett partnerrel (lásd 6.6)
- 1.4 Présmunka
- 1.5 Prototípus gyártás
- 1.6 Összeszerelés és komplex alkatrészek
- 1.7 3D mérés és minőség-ellenőrzés
- 1.8 Hegesztés (AWI / WIG / TIG)

> **Kihúzva / átpozicionálva a v1.1-ben:**
> - *Swiss-type hosszesztergálás* → nincs dedikált oldal, a Cincom gép csak a gépparkon szerepel
> - *Betétedzés / edzés-megeresztés / lágyítás különálló aloldalakkal* → az egész hőkezelés egy oldal, nincsenek aloldalak, mert kiszervezett
> - *Felülettisztítás / Rösler koptatás* → a CNC esztergálás oldalon említve mint post-processing képesség, nincs dedikált SEO-oldal
> - *Mérnöki szolgáltatás* → a Mercedes-Benz projekt esettanulmányként jelenik meg a Referenciák között, nem saját pillar
> - *Centrifugál öntés — bronz siklócsapágyak* → tisztázandó (lásd 17-es pont). Ha még aktív szolgáltatás, egy 1.9-es aloldalt érdemel.

**2. Iparágak** (pillar)
- 2.1 Autóipar
- 2.2 Haszongépjármű és fékrendszer
- 2.3 Elektromos kéziszerszámok
- 2.4 Tömítéstechnika
- 2.5 Általános gépipar

**3. Képességek** (pillar)
- 3.1 Géppark
- 3.2 Megmunkálható anyagok
- 3.3 Tűrések és pontosság
- 3.4 Mérőszoba — 3D koordináta-mérőgép
- 3.5 Tanúsítványok

**4. Referenciák**
- 4.1 Partnerek listája (szerepel magán az oldalon)
- 4.2 Esettanulmányok (alárendelt: /references/case-studies/, pl. Mercedes-Benz mérnöki projekt 2019, Knorr-Bremse Év Beszállítója 2009)

**5. Rólunk**
- 5.1 Történetünk — 1953 óta
- 5.2 Telephelyeink
  - 5.2.1 Jakabszállás — elsődleges forgácsoló és sajtoló üzem (3000 m²)
  - 5.2.2 Fülöpszállás — másodlagos forgácsoló üzem (2000 m²)
  - 5.2.3 Izsák — központ / headquarters
- 5.3 Vezetés — opcionális

**6. Blog / Tudásbázis**
- Minimum 6–8 cikk a nyitáskor (lásd 10. pont)

**7. Karrier**
- 7.1 Álláslehetőségek
- 7.2 Gyakorlati képzés (csak magyarul)

**8. Kapcsolat**

**9. Ajánlatkérés / RFQ** — nem a menüben, csak CTA-ként!

**Lábléc-oldalak (nem főmenüben):**
- Pályázatok / EU-finanszírozott projektek
- Integrált politika (PDF)
- Adatvédelmi tájékoztató (PDF)
- Energetikai szakreferensi riport (PDF)
- Impresszum (DE-hez kötelező: /impressum)

---

## 6. Oldalankénti részletes tervek

Minden főbb oldalra megadom az alábbiakat:
- Elsődleges kulcsszó (angol, német, magyar)
- H1 javaslat (mindhárom nyelven)
- Meta title + meta description (mindhárom nyelven)
- A kötelező tartalmi blokkok (H2 szinten)
- FAQ-kérdések (3–5 db, mindhárom nyelven)
- Schema.org markup típusok
- Belső linkelési minta

### 6.1 Kezdőlap

**URL:** `/`, `/en/`, `/de/`
**Elsődleges kulcsszó:** brand („Borela”) + „CNC contract machining Hungary” / „CNC Lohnfertigung Ungarn” / „CNC bérforgácsolás Magyarország”

**H1 (mindhárom nyelven):**
- EN: *Precision CNC contract machining from the heart of the EU*
- DE: *Präzisions-CNC-Lohnfertigung aus dem Herzen der EU*
- HU: *Precíziós CNC bérforgácsolás — az EU szívéből*

**Meta title (60 karakter alatt):**
- EN: *Borela — Precision CNC Contract Machining | Hungary*
- DE: *Borela — Präzisions-CNC-Lohnfertigung aus Ungarn*
- HU: *Borela — Precíziós CNC bérforgácsolás | Kecskemét*

**Meta description (155 karakter alatt):**
- EN: *Precision CNC turning & milling for automotive & engineering OEMs. ISO 9001, VDA 6.3, 70+ years heritage. Supplier to Knorr-Bremse, Mercedes, Hilti.*
- DE: *Präzisions-CNC-Drehen & Fräsen für Automotive- und Maschinenbau-OEMs. ISO 9001, VDA 6.3. Zulieferer für Knorr-Bremse, Mercedes, Hilti.*
- HU: *CNC esztergálás és marás autóipari és gépipari beszállítóként. ISO 9001, VDA 6.3. Referenciák: Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg.*

**Kötelező tartalmi blokkok (H2-szinten, sorrendben):**

1. **Hero szekció:** H1 + alcím (kb. 20 szó, az elsődleges pozicionálás). Két CTA: fő: „Request a Quote / Angebot anfordern / Ajánlatkérés”; másodlagos: „Explore our services / Leistungen ansehen / Szolgáltatások megtekintése”. Háttérben rövid videóloop, vagy nagy felbontású fotó a jakabszállási új csarnokból.
2. **Bizalom-szalag (logo-sor):** Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer, Phoenix Mecano, Zarges. Ezeknek a logóknak **azonnal a hero alatt** kell lenniük — ez a legerősebb „trust signal”, ami 5 másodperc alatt eldönti, hogy a beszerző továbbolvas-e.
3. **Szolgáltatás-áttekintő (H2):** 6 kártya — CNC esztergálás, CNC marás, hőkezelés, présmunka, 3D mérés, prototípus. Minden kártya linkel a megfelelő pillar oldalra.
4. **„Számok magunkról” blokk (H2):** 1953 (alapítás éve, Bognár Lajos gépműhelye), 70+ év mérnöki tapasztalat, 40 db CNC eszterga, 6 db megmunkáló központ, 500 – 100 000 db sorozatméret, ±0,01 mm tipikus tűrés.
5. **Iparágak (H2):** 5 ikonos kártya — automotive, commercial vehicles, power tools, sealing, general engineering.
6. **Tanúsítványok (H2):** ISO 9001, ISO 14001, VDA 6.3, Knorr-Bremse Product Safety Audit. Logók + rövid magyarázat.
7. **Miért a Borela (H2):** 4 USP — (a) 70+ éves családi háttér és folytonosság, (b) EU-beli gyártás nyugati minőség, kelet-európai költségszinten, (c) nagyvállalati referenciák (Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg — ezek önmagukban is pre-audited státusz-jelzők), (d) teljes projektmenedzsment, beleértve a kiszervezett hőkezelés koordinációját megbízható partnerrel — a beszerző egyetlen szerződést köt, egyetlen kontaktra van szüksége.
8. **Referencia-esettanulmány kiemelés (H2):** 1 kiemelt eset, pl. Knorr-Bremse fékrendszer-alkatrész — 3 mondat + kép + „Read more” link.
9. **FAQ blokk (H2):** 4 kérdés (lásd alább).
10. **CTA szekció:** „Ready to discuss your project? Upload your drawing.” + RFQ-gomb.
11. **Lábléc:** teljes (lásd külön).

**FAQ — kezdőlap (4 kérdés):**

*EN:*
1. What industries does Borela serve? — *Automotive (including Tier 2 brake systems for Knorr-Bremse), commercial vehicles, power tools (Hilti), sealing technology (Freudenberg), and general mechanical engineering (Sulzer, Phoenix Mecano, Zarges).*
2. What series sizes do you produce? — *From 500 to 100,000 pieces per order, with repeat production relationships spanning multiple years.*
3. What tolerances can you hold? — *Typical ±0.01 mm on CNC turned and milled parts, verified with our in-house 3D coordinate measuring machine. For tighter tolerances requiring grinding, we coordinate with trusted external partners.*
4. Are you certified for automotive supply? — *Yes — ISO 9001 since 1996, ISO 14001 since 2005, audited to VDA 6.3 standard, and passed the Knorr-Bremse Product Safety Audit in 2007.*

*DE:* ugyanezek, fordítva.
*HU:* ugyanezek, fordítva.

**Schema.org markup (JSON-LD, a `<head>`-ben):**
- `Organization` a cégről — logo, NAP, sameAs (LinkedIn, ipari katalógusok), foundingDate: 1953, numberOfEmployees: 50, award list.
- `WebSite` a site egészére.
- `BreadcrumbList`.
- `FAQPage` a kezdőlapi FAQ blokkhoz.

**Belső linkek innen:**
Minden szolgáltatás-pillar (3–4 db a hero alatt), minden iparág-oldal (egyszer a reflkótól), RFQ (legalább 3× az oldalon: hero, számok-blokk után, záró CTA).

**Belső linkek ide (honnan jön link):**
Minden belső oldal logója/brand-linkje.

---

### 6.2 Szolgáltatás-főoldal (pillar)

**URL:** `/services/`, `/en/services/`, `/de/leistungen/`, `/szolgaltatasok/`
**Elsődleges kulcsszó:**
- EN: *CNC machining services*
- DE: *CNC-Lohnfertigung* / *Zerspanung*
- HU: *CNC bérforgácsolás* / *bérforgácsolás*

**H1:**
- EN: *CNC machining, heat treatment and precision engineering services*
- DE: *CNC-Lohnfertigung, Wärmebehandlung und Präzisionszerspanung*
- HU: *CNC megmunkálás, hőkezelés és precíziós mérnöki szolgáltatások*

**Meta title:**
- EN: *CNC Machining Services — Contract Manufacturing | Borela*
- DE: *CNC-Lohnfertigung & Zerspanung — Dienstleistungen | Borela*
- HU: *CNC bérforgácsolás és hőkezelés szolgáltatások | Borela*

**Meta description:**
- EN: *Full-service CNC turning, milling, press work, prototyping, plus heat treatment via trusted partner. 500–100,000 pc series, ±0.01 mm tolerance, ISO 9001 / VDA 6.3 audited.*
- DE: *Komplette CNC-Lohnfertigung: Drehen, Fräsen, Pressbearbeitung, zzgl. Wärmebehandlung über zuverlässigen Partner. 500–100 000 Stk, ±0,01 mm, ISO 9001 / VDA 6.3.*
- HU: *Teljes körű CNC szolgáltatások: esztergálás, marás, présmunka, koordinált hőkezelés partnernél. 500–100 000 db sorozat, ±0,01 mm tűrés, ISO 9001 / VDA 6.3.*

**Kötelező blokkok (H2):**
1. Bevezető — 2 rövid bekezdés arról, hogy a Borela egy megbízható forgácsoló beszállító, amely a teljes projektmenedzsmentet vállalja, beleértve a kiszervezett hőkezelés koordinálását is.
2. A 8 szolgáltatás — mind kártyaként, linkekkel az aloldalakra.
3. „Hogyan működik a folyamat?” — 5 lépéses infografika: (1) rajz feltöltése, (2) visszaigazolás 48 órán belül, (3) mintagyártás, (4) sorozatgyártás, (5) minőségi dokumentáció + szállítás.
4. Anyagok áttekintő — link a Képességek/Anyagok oldalra.
5. Tűrések áttekintő — link a Képességek/Tűrések oldalra.
6. Minőség és tanúsítványok.
7. FAQ (5 kérdés).
8. CTA — RFQ.

**FAQ példák (EN):**
1. Do you handle heat treatment in-house? — *No — we have discontinued in-house heat treatment in favor of partnering with a specialized professional heat treatment provider. We manage the full workflow for you (machining → heat treatment → finishing), so you receive ready-to-install parts without having to coordinate multiple suppliers.*
2. What is the typical lead time from RFQ to first sample? — *Standard machined parts: 3–4 weeks from RFQ approval. Parts requiring heat treatment via our partner: 5–7 weeks.*
3. Can you handle high-mix low-volume orders alongside series production? — *Our sweet spot is 500–100,000 pieces per order. Our 40 CNC lathes and 6 machining centers are set up for series production, but we also handle prototypes as a preparatory stage before series.*
4. What file formats do you accept for quoting? — *STEP, IGES, and 2D PDF drawings with full tolerance and material specifications.*
5. Do you sign NDAs before quoting? — *Yes, as a standard practice. Our NDA template is available upon first contact.*

**Schema.org:** `Service` + `BreadcrumbList` + `FAQPage`.

---

### 6.3 CNC esztergálás (cluster oldal)

**URL:** `/services/cnc-turning/`, `/de/leistungen/cnc-drehen/`, `/hu/szolgaltatasok/cnc-esztergalas/`

**Elsődleges kulcsszó:**
- EN: *CNC turning services* / *precision CNC turning*
- DE: *CNC-Drehteile* / *CNC-Drehen* / *Lohndrehen*
- HU: *CNC esztergálás* / *bérforgácsolás esztergálás*

**H1:**
- EN: *CNC turning services — precision turned parts from 500 to 100,000 pieces*
- DE: *CNC-Drehen — Präzisionsdrehteile in Serien von 500 bis 100 000 Stück*
- HU: *CNC esztergálás — precíziós esztergált alkatrészek 500-tól 100 000 darabig*

**Meta title:**
- EN: *CNC Turning Services — Precision Turned Parts | Borela*
- DE: *CNC-Drehen & Präzisionsdrehteile — Lohndreherei | Borela*
- HU: *CNC esztergálás és precíziós esztergált alkatrészek | Borela*

**Meta description:**
- EN: *Precision CNC turning on 40 lathes, Ø1–90 mm bar capacity, multi-axis with Y-axis. Typical ±0.01 mm tolerance. Ideal for automotive and engineering series production.*
- DE: *CNC-Drehen auf 40 Drehmaschinen, Durchlass Ø1–90 mm, Y-Achse mehrspindelig. Typische Toleranz ±0,01 mm. Ideal für Automotive- und Maschinenbau-Serienfertigung.*
- HU: *CNC esztergálás 40 gépen, Ø1–90 mm áteresztő képesség, Y-tengelyes többorsós gépek. Tipikus ±0,01 mm tűrés. Autóipari és gépipari sorozatgyártás.*

**Kötelező blokkok (H2):**

1. Rövid bevezető — mit csinálunk itt.
2. **A géppark (H2):** táblázatos bemutatás.
   - 40 db CNC eszterga (Ø45-ig 15 db, Ø46–55 között 14 db, Ø56–65 között 10 db, Ø65+ 1 db).
   - Modern gépek: Goodway GLS-3300 YS (Ø90 mm, nagy sebességű), Citizen-Miyano BNE 51 MSY (Ø51 mm, 2-orsós Y-tengelyes), Index C65 (Ø65 mm), Citizen Cincom L32A-1M8 (Ø32 mm). Plusz Citizen Miyano-gépek.
3. **Anyagok (H2):** acél, rozsdamentes acél, alumínium, bronz, réz, sárgaréz, öntvények (acél és alu), műanyag.
4. **Tűrések (H2):** tipikus ±0,01 mm CNC esztergáláson. Szorosabb tűrés (0,001 mm nagyságrend) csak köszörüléssel érhető el, amit külső partnerrel szervezünk meg, ha szükséges.
5. **Tipikus alkatrészek (H2):** fékrendszeri alkatrészek, kardán-komponensek, csapok, perselyek, tengelyek, fluidikai komponensek stb. — 8 kártyakép.
6. **Minőségellenőrzés (H2):** 3D CMM, kontúrmérő, mikrokeménységmérő — link a Mérőszoba oldalra.
7. **Integrált folyamat (H2):** forgácsolás után, ha a rajz igényli, hőkezelést szervezünk a bevizsgált partnerünknél, a visszaérkezett alkatrészeket pedig szükség szerint utómegmunkáljuk és/vagy bemérjük a saját mérőszobánkban — így a beszerző egyetlen kontakton keresztül egy komplett, beszerelésre kész terméket kap.
8. FAQ (5 kérdés).
9. CTA — RFQ.

**FAQ példák (EN):**
1. What's the maximum diameter you can turn? — *Standard turning up to Ø65 mm bar capacity, with one machine exceeding Ø65 mm for larger parts. For longer thin parts our Citizen Cincom handles up to Ø32 mm.*
2. What series sizes are economical for CNC turning? — *From 500 pieces upwards we are highly competitive; at 5,000–100,000 pieces we are in our sweet spot.*
3. Can you handle heat treatment for turned parts? — *Yes, via our trusted heat treatment partner. You receive the finished, ready-to-install parts — we manage the entire workflow.*
4. What materials do you machine most often? — *Most orders are in carbon and alloy steels, stainless, aluminum, brass and bronze; plastics and cast parts (steel or aluminum) also on request.*
5. Do you supply first article inspection reports? — *Yes — FAI reports with full dimensional and material documentation are standard on new part numbers.*

**Schema.org:** `Service` (parentOrganization Borela, areaServed: EU), `BreadcrumbList`, `FAQPage`.

**Belső linkek innen:**
- Hőkezelés (mint koordinált szolgáltatás — áthaladó folyamat)
- Mérőszoba oldalra
- Anyagok oldalra
- Tűrések oldalra
- RFQ-ra

---

### 6.4 CNC marás (cluster pillar)

**URL:** `/services/cnc-milling/`, `/de/leistungen/cnc-fraesen/`, `/szolgaltatasok/cnc-marasss/`

**Elsődleges kulcsszó:** *CNC milling services* / *CNC-Fräsen* / *CNC marás*

**H1:**
- EN: *CNC milling services on horizontal and vertical machining centers*
- DE: *CNC-Fräsen auf Horizontal- und Vertikal-Bearbeitungszentren*
- HU: *CNC marás horizontális és vertikális megmunkáló központokon*

**Meta description:**
- EN: *6 CNC machining centers — 3 horizontal (up to 500×500 table, 40-tool magazine, 20,000 rpm) and 3 vertical (up to 800×450 table, 24 tools, 30,000 rpm). Precision milled parts.*
- DE: *6 CNC-Bearbeitungszentren — 3 horizontal (Tisch bis 500×500, 40-fach Werkzeugmagazin, 20.000 U/min) und 3 vertikal (Tisch bis 800×450, 24 Werkzeuge, 30.000 U/min).*
- HU: *6 CNC megmunkáló központ — 3 horizontális (asztal max. 500×500, 40 szerszámos tár, 20.000 ford/perc) és 3 vertikális (asztal max. 800×450, 24 szerszám, 30.000 ford/perc).*

**Kötelező blokkok:**
1. A géppark. 
2. Tipikus munkadarab-méretek: 
   - Horizontális: max. 500×500×400 mm (X×Y×Z).
   - Vertikális: max. 800×450×500 mm (X×Y×Z).
3. 3 és 4 tengelyes megmunkálás.
4. Anyagok.
5. Tűrések.
6. Tipikus alkatrészek: házak, tömbök, tartók, komplex geometriák, sorozatgyártásra optimalizált munkadarabok.
7. FAQ.
8. CTA.

---

### 6.5 Hőkezelés — mint koordinált, kiszervezett szolgáltatás

**Stratégiai megjegyzés (fontos):** a v1.0-ban ez volt a legerősebb USP (saját IPSEN kemence Fülöpszálláson). A v1.1-ben ezt kiveszem, mert a hőkezelést kiszervezzük. Ugyanakkor a **hőkezelés-relevánt tartalom teljesen kivétele hiba lenne**, mert:

- A beszerzők keresik („Wärmebehandlung Zulieferer”, „contract machining with heat treatment”) — ezek magas-intentű queryk.
- Sok alkatrész rajza *megköveteli* a hőkezelést. Ha nem említjük, a beszerző azt hiszi, ezt neki kellene megszerveznie, és másik beszállítót választ.
- A teljes projektmenedzsment („single point of contact including heat treatment”) **maga is értékes USP**.

Tehát nem lesz dedikált *„in-house heat treatment”* oldalunk (mert hazugság lenne), de lesz egy **„Integrált hőkezelés — projektmenedzsment mint szolgáltatás”** oldalunk, amely transzparensen elmondja, hogy megbízható partnerrel dolgozunk.

**URL:** `/services/heat-treatment/`, `/de/leistungen/waermebehandlung/`, `/hu/szolgaltatasok/hokezeles/`

**Elsődleges kulcsszó:**
- EN: *machining with heat treatment* / *integrated heat treatment service*
- DE: *Zerspanung mit Wärmebehandlung* / *Wärmebehandlung koordiniert*
- HU: *hőkezelés koordinált szolgáltatásként* / *komplett forgácsolt-hőkezelt alkatrész*

Figyeljük meg, hogy a fő kulcsszó NEM „Lohnhärterei” vagy „contract heat treatment” — mert azokon a kereséseken olyan versenytársak jönnek, akiknek ez a főprofiljuk, és nem tudnánk verni őket. Ehelyett a „machining + heat treatment as one package” pozicionálás mellett érvelünk.

**H1:**
- EN: *Machining with integrated heat treatment — one supplier, one contract, ready-to-install parts*
- DE: *Zerspanung inklusive Wärmebehandlung — ein Lieferant, ein Vertrag, einbaufertige Teile*
- HU: *Forgácsolt alkatrészek hőkezeléssel együtt — egy beszállító, egy szerződés, beszerelésre kész alkatrészek*

**Meta description:**
- EN: *We manage the full machining + heat treatment workflow through our long-standing professional heat treatment partner. You get ready-to-install parts from a single supplier — no coordination overhead.*
- DE: *Wir übernehmen den kompletten Prozess von Zerspanung bis Wärmebehandlung über unseren langjährigen Wärmebehandlungspartner. Einbaufertige Teile von einem Lieferanten — ohne Koordinationsaufwand für Sie.*
- HU: *A teljes forgácsolás + hőkezelés folyamatot egyben kezeljük, bevált hőkezelő partnerünkkel. Egyetlen beszállítón keresztül kap beszerelésre kész alkatrészeket.*

**Kötelező blokkok:**
1. Bevezető — transzparens keretezés: „We do not perform heat treatment in-house. We partner with a professional, certified heat treatment provider and manage the entire workflow on your behalf.” Miért jó ez: a partner specializálódott, modernebb berendezést üzemeltet, mint bárki aki mellékesen csinálja.
2. Mit csinálunk mi, és mit a partner — pontos folyamatábra.
3. Milyen hőkezelési eljárások érhetők el a partneren keresztül — általánosan (betétedzés, edzés és megeresztés, lágyítás, feszültségmentesítés). Itt nem licitálunk rá a „Gasaufkohlen” keresésekre, csak felsoroljuk mint elérhető opciót.
4. Anyagok és tipikus alkalmazások.
5. Minőségbiztosítás — hogyan ellenőrizzük a visszaérkező alkatrészeket a saját mérőszobánkban (mikrokeménységmérő, kontúrmérő).
6. Szállítási idő — a kiszervezés miatt kb. 1-2 hetet hozzátesz az alapprojekthez, de a koordinációt nekünk vállaljuk.
7. FAQ (4 kérdés).
8. CTA — RFQ.

**FAQ példák (DE):**
1. Bieten Sie Wärmebehandlung im eigenen Haus an? — *Nein, wir haben uns bewusst entschieden, die Wärmebehandlung an einen spezialisierten professionellen Partner auszulagern. Das bedeutet für Sie: modernere Anlagen als viele Inhouse-Lösungen, konstantere Qualität, und trotzdem nur ein Ansprechpartner — wir koordinieren alles für Sie.*
2. Welche Wärmebehandlungsverfahren sind über Sie verfügbar? — *Einsatzhärten, Härten und Anlassen, Vergüten, Glühen, Spannungsarmglühen — bitte im RFQ angeben, welches Verfahren Ihr Werkstück benötigt.*
3. Erhöht sich die Lieferzeit dadurch? — *Ja, typischerweise um 1–2 Wochen im Vergleich zu nur mechanisch bearbeiteten Teilen. Wir planen das in die Gesamtplanung ein.*
4. Wer trägt die Verantwortung für Qualitätsabweichungen nach der Wärmebehandlung? — *Wir — Sie haben genau einen Vertragspartner (Borela). Wir prüfen die wärmebehandelten Teile in unserem eigenen Messraum, bevor sie an Sie ausgeliefert werden.*

**Schema.org:** `Service` (ahol a `provider` a Borela, és NEM jelöljük hogy saját hőkezelő üzem — korrekt, átlátható).

### 6.6 Iparágak főoldal + minden aloldal

Iparáganként egy-egy külön landing page, amelyet a beszerzők keresni fognak. Az egyes iparági oldalak azt mondják el, **mit csinálunk konkrétan az adott iparágnak**, és **kit szolgáltunk ki**. Ezek egyszerre szolgálnak SEO-célt és erős social proof-ot.

Pl. **Autóipar / Automotive / Automobilindustrie** aloldal tartalma:
- H2: Kik a partnereink? Knorr-Bremse Fékrendszerek Kft., Mercedes-Benz Manufacturing Hungary Kft., Freudenberg (autóipari tömítések).
- H2: Milyen komponenseket gyártunk? Fékrendszer-alkatrészek, kardán-komponensek, hőkezelt precíziós tengelyek.
- H2: Milyen tanúsítványokkal rendelkezünk? ISO 9001, ISO 14001, VDA 6.3 audit, Knorr-Bremse PSA.
- H2: Esettanulmány: Knorr-Bremse Év Beszállítója 2009.
- FAQ + CTA.

Ugyanilyen szerkezet a többi iparágnak is.

### 6.7 Képességek — Géppark, Anyagok, Tűrések, Mérőszoba, Tanúsítványok

Ezek **nem** self-centered oldalak, hanem válaszok a beszerző kérdéseire:

- **Géppark** → „Van elég kapacitásuk? Megfelelő gépük?”
- **Anyagok** → „Tudnak-e dolgozni az én anyagomon?”
- **Tűrések** → „Megfelelnek a rajzomnak?”
- **Mérőszoba** → „Bízhatok a minőségükben?”
- **Tanúsítványok** → „Átmennek a supplier audition?”

A **Tűrések oldal** az átalakult v1.1-ben kritikus: transzparensen elmagyarázza, hogy ±0,01 mm a tipikus CNC esztergálási pontosság, ±0,005 mm legjobb esetben a precíziós gépeinken, és **nem tudunk köszörülést végezni, amely a ±0,001 mm-es tűréshez szükséges** — ha erre van szükség, azt az ajánlatkérés fázisában jelezzük és a hőkezeléshez hasonlóan partnerrel szervezzük. Ez az átláthatóság bizalomépítő, nem gyengeségként jelenik meg.

A **Mérőszoba** oldal különösen fontos — az új csarnokban levő 3D CMM, kontúrmérő, mikrokeménység-mérő, Prontopress 2, körkörösség-mérő stb. **egyszerre SEO-pont** („CMM inspection Hungary”, „in-house measurement capability”) **és trust-signal**. Ezek fotóival, konkrét paramétereikkel kell dokumentálni.

### 6.8 Referenciák / Partnerek oldal

**URL:** `/references/`, `/de/referenzen/`, `/referenciak/`

**Elsődleges kulcsszó:** *precision machining references* / *Zulieferer Referenzen* / *beszállítói referenciák*

**Tartalom:**
- Partnerlista (a régi oldalról), de strukturáltan, minden partner rövid bemutatással (iparág, mit szállítunk nekik, mióta).
- Kiemelt esettanulmányok, ha vannak (pl. Knorr-Bremse Év Beszállítója 2009, Mercedes-Benz mérnöki projekt 2019, VDA 6.3 audit 2016).
- Díjak: Knorr-Bremse Év Beszállítója 2009, Az Év Vállalkozója 2010.

**Schema.org:** `Organization` (sameAs kapcsolatokkal a partnerek hivatalos oldalaira) + `Review` / `AggregateRating` ha vannak referenciák.

### 6.9 Rólunk / Történetünk

**URL:** `/about/history/`, `/de/ueber-uns/geschichte/`, `/hu/rolunk/tortenetunk/`

Ez az oldal **brand-építő**, nem SEO-fókuszú. Itt mondjuk el az 1953-tól induló családi történetet egy elegáns timeline-ban. A tartalmi gerincet a régi oldalról vesszük át, de frissítjük. A 2008-as Fülöpszállás hőkezelő üzem a történet része, a jelenlegi állapot (kiszervezés profi partnernek) egy későbbi mérföldkőként jelenik meg: „Időközben a hőkezelést specializált partnerre bíztuk, hogy az alkatrészeink a modernebb berendezéseken kapják meg a hőkezelési folyamatot, miközben mi a forgácsolási szakértelmünkre koncentrálhatunk.” Ez átlátható, és mérnöki szemmel ésszerű döntésnek látszik (nem visszalépésnek).

Új mérföldkő, amit hozzá lehet adni: a Mercedes-Benz mérnöki projekt 2019-es indulása — ez erős bizalom-jelző.

**Schema.org:** `AboutPage` + `Organization` + `foundingDate` + évenkénti `Event` objektumok a legfontosabb mérföldkövekhez.

### 6.10 Kapcsolat

**URL:** `/contact/`, `/de/kontakt/`, `/hu/kapcsolat/`

**Tartalom:**
- Izsák (HQ) — cím, telefon, email, térkép.
- Jakabszállás (fő forgácsoló üzem, 3000 m²) — cím, telefon, email, nyitvatartás, nyelvek.
- Fülöpszállás (másodlagos forgácsoló üzem, 2000 m²) — cím, telefon.
- Térkép mindhárom helyszínnel.
- Kontaktform (rövid — 4 mező: név, cég, email, üzenet). Az RFQ külön oldal!
- Felelős kapcsolattartók listája (opcionális, ha a cég vállalja).

**Schema.org:** 3 db `LocalBusiness` (egy minden telephelyre, az Izsáki a `parentOrganization`-je a másik kettőnek), `ContactPage`.

---

## 7. Ajánlatkérő űrlap (RFQ) — ez a site legfontosabb konverziós eleme

**URL:** `/rfq/`, `/de/angebot-anfordern/`, `/ajanlatkeres/`

Az RFQ űrlap egyetlen célja, hogy **a beszerző 60 másodpercen belül el tudjon indítani egy érdemi ajánlatkérést, rajz-csatolmánnyal**. Tapasztalataim szerint ez a B2B beszállítói weboldalak #1 konverziós tényezője, és a régi borela.hu teljesen hiányzik.

### 7.1 Űrlap-mezők (javaslat)

**1. blokk — Kontakt:**
- Név *
- Cég neve *
- Ország * (dropdown, EU + „Other”)
- Üzleti email *
- Telefonszám (opcionális)

**2. blokk — A projekt:**
- Alkatrész neve / projekt-azonosító *
- Iparág (dropdown: automotive / commercial vehicles / power tools / sealing / general engineering / other)
- Tervezett sorozatméret per leadás (dropdown: 500–5 000 / 5 000–25 000 / 25 000–100 000 / >100 000 / prototípus)
- Tervezett éves mennyiség
- Tervezett első szállítás dátuma
- Szükséges szolgáltatások (checkboxok): CNC esztergálás / CNC marás / présmunka / hőkezelés (partnerrel koordinálva) / összeszerelés / 3D mérés / hegesztés

**3. blokk — Rajz / műszaki dokumentáció:**
- Fájlfeltöltés (drag-and-drop): STEP, IGES, PDF, ZIP — max 50 MB
- NDA állapot (checkbox: „Please send me a mutual NDA before I upload”)

**4. blokk — Egyéb:**
- Üzenet / megjegyzés (szabad szöveg, opcionális)
- Adatvédelmi hozzájárulás checkbox *

**Küldés gomb:** „Request a Quote” / „Angebot anfordern” / „Ajánlatkérés elküldése”

### 7.2 UX elvek

- **Egyetlen oldal** — nincs többlépcsős űrlap. A 4 blokk egymás alatt, fejléccel elválasztva.
- **Feltöltés drag-and-drop**, progress bar.
- **NDA checkbox** — ha bejelöli, a beszerző **előbb kap NDA-t** emailben, és csak az aláírása után kéri be a rajzot. Ez a B2B világban alap bizalmi lépés.
- **Köszönő oldal** — „Megkaptuk, 48 órán belül visszajelzünk” + visszajelzés automatikus email. A visszajelzést egy valós ügyfélkapcsolati munkatárs küldje ki, ne automatikus botüzenet.
- **Schema.org:** `ContactPage` + a form adott esetben `Action` típusként jelezhető az Organization schemában.

### 7.3 Backend követelmények (a következő Code fázishoz)

- Fájltárolás (S3-kompatibilis vagy szerveren, titkosítva).
- Email-értesítés a belső kontaktnak (pl. rfq@borela.eu és/vagy a meglévő értékesítési címre).
- Admin UI-ban az összes beérkezett RFQ listázása, státusz (új / visszajelezve / árajánlat küldve / elfogadva / visszautasítva / elveszett).
- Rajz-előnézet az admin felületen.
- GDPR-megfelelőség: retention policy (pl. 24 hónap).

---

## 8. Schema.org JSON-LD sablonok

Az AI-keresőkben (ChatGPT, Perplexity, Google AI Overview) való láthatósághoz a strukturált adat ma a legfontosabb tényező. Minden sablont JSON-LD formában, a `<head>`-ben helyezünk el.

### 8.1 Globális `Organization` (a kezdőlapon)

```json
{
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  "@id": "https://borela.eu/#organization",
  "name": "Borela Bt.",
  "legalName": "BORELA TERMELŐ FORGALMAZÓ ÉS SZOLGÁLTATÓ BT.",
  "url": "https://borela.eu/",
  "logo": "https://borela.eu/images/borela-logo.png",
  "foundingDate": "1990-01-01",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Izsák",
      "addressCountry": "HU"
    }
  },
  "description": "Family-owned Hungarian precision CNC machining company with 70+ years of engineering heritage, serving automotive, commercial vehicle, power tools, sealing and general engineering OEMs across Europe. Integrated project management including coordinated heat treatment via professional partner.",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 50
  },
  "naics": "332710",
  "isicV4": "2562",
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "name": "ISO 9001", "credentialCategory": "certification", "dateCreated": "1996"},
    {"@type": "EducationalOccupationalCredential", "name": "ISO 14001", "credentialCategory": "certification", "dateCreated": "2005"},
    {"@type": "EducationalOccupationalCredential", "name": "VDA 6.3", "credentialCategory": "audit", "dateCreated": "2016"},
    {"@type": "EducationalOccupationalCredential", "name": "Knorr-Bremse Product Safety Audit", "credentialCategory": "audit", "dateCreated": "2007"}
  ],
  "award": [
    "Knorr-Bremse Supplier of the Year 2009",
    "Entrepreneur of the Year 2010 (National Association of Entrepreneurs, Hungary)"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Garai u. 6.",
    "addressLocality": "Izsák",
    "postalCode": "6070",
    "addressCountry": "HU"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+36-76-569-122",
      "contactType": "sales",
      "email": "rfq@borela.eu",
      "availableLanguage": ["en", "de", "hu"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/borela-bt/",
    "https://www.europages.co.uk/BORELA-BT/..."
  ]
}
```

### 8.2 `LocalBusiness` minden telephelyre

Az Izsáki HQ a fő entitás, Jakabszállás és Fülöpszállás a `subOrganization` kapcsolattal. Mindegyikhez külön `LocalBusiness` JSON-LD a Kapcsolat oldalon, saját címmel, koordinátával, nyitvatartással.

### 8.3 `Service` minden pillar + cluster szolgáltatási oldalon

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Precision Contract CNC Machining",
  "provider": {"@id": "https://borela.eu/#organization"},
  "areaServed": [
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "Austria"},
    {"@type": "Country", "name": "Switzerland"},
    {"@type": "Country", "name": "Hungary"},
    {"@type": "Place", "name": "European Union"}
  ],
  "audience": {"@type": "BusinessAudience", "audienceType": "automotive and engineering OEMs"},
  "description": "Precision CNC turning and milling services on 40 lathes and 6 machining centers, integrated with measurement room and coordinated heat treatment via professional partner."
}
```

### 8.4 `FAQPage` minden olyan oldalon, ami GYIK-et tartalmaz

Minden FAQ-blokk külön JSON-LD, a kérdések és válaszok egy-az-egyben megegyeznek a látható tartalommal (Google szigorúan ellenőrzi, különben spam-büntetés jöhet).

### 8.5 `BreadcrumbList` minden aloldalon

### 8.6 `Article` minden blogbejegyzésen

---

## 9. Blog / Tudásbázis — első 6–8 cikk témaötletek

A blog célja a long-tail forgalom építése és az AI-keresők tápálása. Minden cikk **önmagában is egy mini landing page** egy long-tail kulcsszóra. Javaslat az indulópillanatra (nyelvenként különböző, nem mind a cikk mindhárom nyelven):

**DE (3 cikk):**
1. *VDA 6.3 für Zulieferer — was prüft der Audit und wie bereiten Sie sich vor?* (Target: „VDA 6.3 Zulieferer”)
2. *Präzisionsdrehteile aus Osteuropa — die wichtigsten Qualitätskriterien* (Target: „Drehteile Osteuropa Qualität”)
3. *Toleranzen beim CNC-Drehen — was ist realistisch ±0,01 mm und wann brauchen Sie Schleifen?* (Target: „CNC Drehen Toleranzen”)

**EN (3 cikk):**
4. *How to audit a Tier 2 automotive supplier in Eastern Europe* (Target: „Tier 2 supplier audit Eastern Europe”)
5. *CNC machining tolerances — what's realistic and when you need grinding or EDM* (Target: „CNC machining tolerances guide”)
6. *Integrated supply management: why machining + heat treatment from one partner beats multi-vendor coordination* (Target: „integrated machining heat treatment supplier”)

**HU (2 cikk):**
7. *Mit jelent a VDA 6.3 audit és miért fontos autóipari beszállítóknál?*
8. *CNC esztergálás tűrések — mikor elég ±0,01 mm, mikor kell köszörülés?*

Minden cikk legalább 1000 szó, saját FAQ blokkal, belső linkekkel a kapcsolódó szolgáltatási oldalra, és `Article` + `FAQPage` schemával.

**Publikálási tempó:** havi 1 cikk, nyelvek között rotálva. 12 hónap alatt kb. 12–14 cikk. Ez a **minimum amivel topikus tekintélyt lehet építeni**; ennél több is jobb lenne, de kis csapattal nehezen tartható.

---

## 10. Karrier oldal (elsősorban magyar)

**URL (HU):** `/karrier/`, `/karrier/allaslehetosegek/`, `/karrier/szakiskolai-kepzes/`
**URL (EN/DE):** csak egy összefoglaló a főmenüben, kevés tartalommal: angolul beszélő CNC beállítók, nemzetközi projektek vonzereje.

**Tartalmi blokkok (HU):**
- Bevezető — 50+ fős családi vállalkozás, 1953 óta.
- Aktuális álláshirdetések — pozíciónként egy kártya (pozíció neve, telephely, részidős/főállású, „Jelentkezem” gomb).
- Gyakorlati képzés szakiskoláknak — szakképzési partnerség, a Kereskedelmi Kamarával való együttműködés.
- Miért a Borela? — stabil munkaadó, fejlődési lehetőség, nemzetközi projektek, új gépek, díjazott beszállító.
- Kapcsolat — HR-emailcím (pl. hr@borela.eu).

**Schema.org:** minden állás külön `JobPosting` JSON-LD — ez a Google Jobs és LinkedIn számára kritikus.

---

## 11. Pályázatok / EU-projektek (lábléc)

**URL:** `/eu-projects/`, `/de/eu-projekte/`, `/palyazatok/`

Jogi kötelesség, de SEO-szempontból nem fő tartalom. A lábléc „Pályázatok” linkről érhető el, és nem szerepel a főmenüben. Egyszerű oldal: a régi palyazatok.html tartalma, de letisztultan, projektenként egy kártya + infoblokk kép + PDF letöltés.

---

## 12. Technikai SEO követelmények (a Code fázishoz)

A SEO- és AI-search-eredmények 1 év alatti elérésének **kritikus technikai feltételei:**

### 12.1 Sebesség (Core Web Vitals)

- **LCP (Largest Contentful Paint):** < 2.5 s a mobilon is.
- **INP (Interaction to Next Paint):** < 200 ms.
- **CLS (Cumulative Layout Shift):** < 0.1.

Ehhez:
- Képeket WebP vagy AVIF formátumban, `width` és `height` attribútumokkal, `loading="lazy"`.
- Hero kép `fetchpriority="high"`.
- CSS kritikus részét inline, a többit defer.
- JS-t csak ahol szükséges, nincs nehéz jQuery vagy carousel-könyvtár — modern, natív CSS + kis mennyiségű vanilla JS.
- Font-ok `font-display: swap`, subset-elt karakterkészlet (DE + EN + HU egyetlen fájlban).
- CDN használata (pl. Cloudflare) a statikus tartalmakhoz.
- Szerver-oldali Brotli tömörítés.

### 12.2 Mobil

- Mobile-first tervezés (a design fázis feladata).
- A főmenü mobilon hamburger + jól használható dropdown.
- A RFQ-űrlap mobilon ugyanolyan jól működjön, mint desktopon (a drag-and-drop fájlfeltöltés is).

### 12.3 Indexelhetőség

- XML sitemap minden nyelvre (sitemap-en.xml, sitemap-de.xml, sitemap-hu.xml), plus egy közös sitemap-index.xml.
- robots.txt megengedi az indexelést, kiveszi a `/admin/`, `/rfq-confirmation/` stb. utakat.
- Kanonikus URL minden oldalra (`<link rel="canonical">`).
- A régi `.php` URL-ekről 301-es átirányítás az új URL-ekre (kritikus, hogy ne veszítsük el a régi backlinkeket!).

### 12.4 Strukturált adat

- JSON-LD minden sablonból, a `<head>` elején.
- Google Rich Results Test-tel validálni minden oldaltípust.
- Schema.org Organization `sameAs` listáját kitölteni (LinkedIn, Europages, IndustryStock, Wlw.de).

### 12.5 Nemzetközi SEO

- `hreflang` minden oldalon, minden nyelvi verzióra.
- Nyelvválasztó a header-ben, zászlós + szöveges (nem csak zászló, az akadálymentesség miatt).
- Az egyes oldalak **nem** automatikus fordítás — minden nyelvi verziót emberi lektor ellenőriz (DE-t német anyanyelvű, EN-t angol ajkú).

### 12.6 Analitika

- Google Analytics 4 — RFQ konverziók eseményként, cél-URL `/rfq-sent/`-re.
- Google Search Console — mindhárom nyelvre külön property.
- Microsoft Clarity — heatmap, session replay. Nagyon hasznos a B2B UX csiszoláshoz.

---

## 13. Google Ads landing page stratégia

A Google Ads (és a Bing Ads DACH piacra!) olcsósága közvetlenül a **Quality Score**-tól függ, ami a landing page relevanciájából, sebességéből és a CTR-ből jön. Ha a landing page **pontosan azt mutatja, amire a kulcsszó rákérdez**, a CPC drasztikusan csökken.

**Első körös Ads-kampány-landing oldalak (csak az RFQ-hoz vezető konverziós oldalak, külön fiók- és kampánystruktúrával):**

| Kampány | Nyelv | Landing URL | Fő kulcsszó |
|---|---|---|---|
| CNC Lohnfertigung DE | DE | /de/leistungen/cnc-drehen/ | Lohnfertigung, CNC-Drehteile |
| CNC Fräsen DE | DE | /de/leistungen/cnc-fraesen/ | CNC-Fräsen, Lohnfräsen |
| Contract Machining EN | EN | /services/cnc-turning/ | contract CNC machining, contract manufacturing |
| CNC Milling EN | EN | /services/cnc-milling/ | CNC milling supplier, precision milled parts |
| Integrated Supply EN | EN | /services/heat-treatment/ | machining with heat treatment, integrated supplier |
| CNC bérforgácsolás HU | HU | /hu/szolgaltatasok/cnc-esztergalas/ | bérforgácsolás, CNC esztergálás |

A *Swiss-type* és *Lohnhärterei / contract heat treatment* kampányok a v1.0-hoz képest törölve — nem ezek a képességeink, félrevezető lenne rájuk konverziót építeni (és a Quality Score is alacsony lenne, a látogatók kiesnek, mert az oldal nem azt kínálja, amit a hirdetés ígér).

Minden landing page-en a hero alatt egy rövid, **forma-kompakt RFQ** is megjelenjen (4 mező: név, cég, email, üzenet + „Request a Quote” gomb), hogy ne kelljen extra kattintás az ajánlatkérő oldalra.

**Ads-hez ajánlott havi minimum indulási budget az organikus eredmények mellett:** 500–1500 EUR / nyelv. Ezzel a long-tail kulcsszavakon már rögtön jönnek a bejelentkezések, míg az organikus 6–12 hónap alatt felfut.

---

## 14. Időzítés — mi fog történni 1 éven belül

- **Hónap 1–2:** Design (Claude Design fázis) — az új weboldal grafikája, minden oldaltípusra.
- **Hónap 3–5:** Code (Claude Code fázis) — backend + admin + RFQ + minden oldal feltöltése.
- **Hónap 6:** Indulás, schema validálás, 301-es átirányítások éles bekapcsolása, Search Console benevezés.
- **Hónap 6–9:** Google Ads kampányok indulása, első lead-ek érkezése (long-tail + branded).
- **Hónap 7–12:** havi 1–2 új blog-/tudásbázis-cikk publikálása, belső linkek építése.
- **Hónap 12-re:**
  - Branded queryk (pl. „Borela precision”, „Borela bt.”) — első helyen.
  - Long-tail queryk (pl. „contract machining Hungary Swiss type”, „Lohnfertigung Ungarn Zerspanung”) — első oldalon reálisan.
  - Közepes queryk (pl. „CNC turning supplier EU”, „Lohndreherei”) — 2. oldal, folyamatos felfelé.
  - Fő queryk (pl. „Lohnfertigung”, „contract machining”) — erős versenyben, 3–4. oldal környékén, long-term építés.
  - Havi 20–50 minősített RFQ a site-on keresztül (tapasztalati becslés hasonló B2B-re).

---

## 15. A következő fázis (Design) briefje

Amikor belépünk a Claude Design fázisba, az alábbi bemeneti adatokra fog szüksége a designernek — ez a dokumentum részben már szállítja, de érdemes külön is rögzíteni:

**Szükséges inputok:**
1. **Logó** — aktuális Borela logó vektor formátumban (SVG). Ha nincs, új logó tervezése is lehet a design fázis része (javaslat: a régi `logo3.png` modernizálása, a Borela név megtartásával).
2. **Fotók** — friss, jó minőségű fotók mindhárom telephelyről, a gépparkról, a mérőszobáról. A régi oldalon levő képek alacsony felbontásúak, újakra lesz szükség.
3. **Szín- és tipográfiai döntések** — javaslat: elsődleges szín sötét ipari kék (#0A3A5A vagy hasonló — precíziót és megbízhatóságot sugároz, elegyezik az autóipari világgal), másodlagos szín meleg narancs vagy arany a CTA-khoz, tipográfia: modern sans-serif (Inter, IBM Plex Sans, vagy a régi Titillium Web modernizált verziója).
4. **Brand-tónus** — „dinamikus, modern autóipari beszállító” (ahogyan megadtad): nem mézes marketing, hanem mérnöki precizitás, számokkal alátámasztott állítások, erős képi anyag a gépekről és az új csarnokból.
5. **A 11 szolgáltatás** ikonja / grafikai megjelenítése.
6. **Az iparági piktogramok** (automotive, haszongépjármű, kéziszerszám, tömítés, gépipar).
7. **Első blog-/case study cikkek** angol és német változatának megírása (copywriting feladat — ehhez van külön tool, de a struktúra már adott ebben a dokumentumban).

**A design fázisban eldöntendő kérdések:**
- Egy oldalon legyen-e élő chat widget (pl. Intercom-szerű)? B2B-ben vitatott. Javaslat: csak kontakt-oldalon.
- Cookie-banner megoldása (DSGVO-konform, németekre különösen fontos).
- A hero-videó vagy nagy fotó kérdése.

---

## 16. Lezárás

Ez a dokumentum (v1.1) a **tartalmi struktúra és SEO stratégia** aktuális terve. A benne foglaltakat a következő két fázisban (Design és Code) implementáljuk — és a fejlett részleteket (pl. esettanulmányok, blogcikkek konkrét szövegei, karrier-álláshirdetések) a Design fázis alatt párhuzamosan lehet írni.

**Megmaradó nyitott kérdések (ezek nem blokkolják a Design fázis indítását, de minél hamarabb eldöntendők):**

1. **Centrifugál öntés — bronz siklócsapágyak még aktív szolgáltatás?** A régi oldalakon (HU/DE/EN) szerepel („bronze slide bearings by centrifugal casting”, „Schleudergussverfahren”). Ha igen: kap 1.9-es szolgáltatási aloldalt („Centrifugal cast bronze components / Schleudergussverfahren von Bronze-Gleitlagern”) — ez kis piac, de igen kevés versenytárssal, egyfajta niche-SEO-nyereség. Ha nem (megszüntetett vagy inaktív): minden nyelvi verzióban eltávolítjuk a történetből és a szolgáltatásokból.

2. **A Fülöpszállás telephely helyzete.** Ha már csak másodlagos forgácsoló, érdemes-e még telephelyként kommunikálni, vagy háttérbe húzzuk? Javaslatom: **maradjon kommunikálva**, mert (a) 2000 m² pluszkapacitás a beszerzőnek bizalomjelző, (b) két telephely = kapacitás-redundancia.

3. **A Mercedes-Benz mérnöki szolgáltatás** — visszatérő, jelenleg is zajló szolgáltatás, vagy egyszeri projekt volt? A referencia mindenképp aranyat ér. De ha visszatérő, akkor érdemes saját szolgáltatási oldalt is készíteni (*„Engineering services for OEMs”*). Ha egyszeri: marad esettanulmány a referenciák között.

4. **Partnerlogók a kezdőlapon.** A régi oldalon szerepelnek név szerint, de logóval nem, és ez általában nem azt jelenti, hogy szabadon használhatók. A v1.1-es terv szerint az **összes legfontosabb partner logóját a kezdőlapi bizalom-szalagra tesszük**. Ez jogi kérdés: **szerződéses jóváhagyásra van szükség** mindegyik partnerhez (Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer stb. nagyvállalatok márkahasználati szabályokkal). Mielőtt publikáljuk, írásbeli engedélyt kell szerezni. Ha ez túl időigényes: **szövegesen listázzuk** a partnereket (mint a régi oldalon is), logó nélkül.

5. **A hőkezelő partnerünk neve publikálható-e?** Transzparencia-érv: ha nevesíthetjük a partnerünket, az növeli a hitelességet („We partner with XYZ — ISO 9001 certified heat treatment facility in Hungary, est. 19xx”). Ha nem nevesíthetünk, akkor általánosságban írjuk le („a certified professional heat treatment partner”).

6. **A webes kontakt e-mail címek.** Átállunk `@borela.eu`-ra? (RFQ: rfq@borela.eu, sales, HR stb.) A régi `@borela.hu` és a `@t-online.hu` átirányításokkal megmarad kb. 1 évig, utána kivezethető.

7. **Mennyit tudunk áldozni a Google Ads-re havonta?** A tervben 500–1500 EUR/nyelv/hó indulóbudget van, de ez egy sáv — a pontosszám a cégre szabott.

---

## 17. Kritikai áttekintés — hibák, kockázatok és javítási lehetőségek

Ebben a fejezetben kritikusan átnézem a teljes tervet, azzal a kérdéssel, hogy *„mit csinálnék másképp, ha most kellene elölről kezdeni”*. A kritikát 4 kategóriába sorolom: **hibák** (tényszerűen rossz dolgok), **kockázatok** (valószínűleg problémát okoz, de bizonytalan), **elhagyott lehetőségek** (amit nem fedtünk le, de kellett volna), és **pontok, ahol a v1.1 még mindig kompromisszum**.

### 17.1 Hibák — javítva a v1.1-ben

A v1.0 tartalmazta az alábbi tényhibákat, ezek most javítva:

- **Swiss-type pozicionálás** — a Citizen Cincom egyetlen gép, nem szakterület, és a beszerzők rossz kategóriába sorolták volna a céget.
- **±0,001 mm tűrés általánosan állítva** — ez köszörüléssel érhető el, nem CNC esztergálással. A korrekt érték tipikus CNC-n ±0,01 mm, jó esetben ±0,005 mm egyes kritikus méreteken.
- **Fülöpszállás mint hőkezelő üzem** — a kommunikációban ez már elavult (kiszervezve egy partnernek).
- **„Vertical integration from machining to heat treatment”** mint USP — részben igaz volt, ma már nem az.

### 17.2 Kockázatok, amiket figyelni kell

**(A) A partner-logók jogi kockázata.** A Knorr-Bremse, Mercedes-Benz, Hilti stb. márkahasználati szabályzatai általában tiltják a logóik engedély nélküli megjelenítését beszállítói oldalakon, még akkor is, ha a szerződéses kapcsolat igaz. **Javaslat:** a Design fázis előtt írásbeli engedélyt szerezni, vagy a logók helyett **szöveges említést** használni („Supplier to Knorr-Bremse, Mercedes-Benz Manufacturing Hungary, Hilti, Freudenberg, Sulzer and Phoenix Mecano”) — ez is erős trust signal, és nem jogilag kockázatos. A régi oldalon is csak szöveges a lista, zászlókkal.

**(B) A „supplier to Knorr-Bremse / Mercedes” mint kulcsszó-stratégia kétélű.** Egyrészt nagyon erős long-tail, másrészt a Knorr-Bremse vagy Mercedes beszerzése nem szereti, ha a beszállító az ő nevükre optimalizálja az SEO-t. **Javaslat:** a referenciákat az oldalon mint *tény* hozzuk (a partnerlista, évszámokkal) — de nem hozzuk létre a `/references/knorr-bremse/` típusú dedikált landing page-eket. Ez a v1.1-ben már korrigálva (csak összesített referencia-oldal van).

**(C) A kiszervezett hőkezelés mint projektmenedzsment-USP csak addig hihető, amíg nem skálázódik rosszul.** Ha pl. a hőkezelő partner lassan dolgozik, akkor a szállítási idő bővül, és a Borela felelőssége a teljes láncért — ezzel kockázatot veszünk át. A weboldal *ígérete* („one contract, ready-to-install parts”) erős elköteleződés. **Javaslat:** a Design fázisban nem ígérünk fix szállítási időt a hőkezelt alkatrészekre, csak „typically 5–7 weeks depending on process”.

**(D) A ±0,01 mm tűrés tipikus, de egy konkrét rajzon nem feltétlen elég.** Ha egy beszerző a 0,005-0,01 mm-es tűrés közötti résen mozog, választás előtt áll. Az átláthatóság („we do 0.01, grinding needed for 0.001”) elveszíthet néhány vevőt, akik nem akarnak külön köszörűshöz menni. **Javaslat:** ajánlatkéréskor meg kell nézni a rajzot — ha 0,001–0,005 mm közötti tűrés van pár méreten, és a többi 0,01, akkor koordinált köszörülést ajánlunk partnerrel. A Tűrések oldalon ezt pozicionáljuk: „tipikus ±0.01 mm, szorosabbra megoldást kínálunk partnerrel — ne zárja ki automatikusan a projektet emiatt”.

**(E) A Google Ads költségbecslés optimista.** 500–1500 EUR/nyelv/hó a minimális indulóbudget, de versenyképes fejlett DACH-piacon a reális lead-árak 150–400 EUR között vannak egy B2B RFQ-ra. 500 EUR/hó német piacra csak 1–3 lead/hó hozhat, ami kevés ahhoz, hogy az Ads önmagában fenntartható lead-forrás legyen. **Javaslat:** a Borela fenntart egy *szerényebb* ajánlást: kezdeti 3 hónap alatt havi 300–600 EUR/nyelv tesztelésre, méréssel (hány lead, milyen costper lead), és csak a mérés alapján skálázunk fel. A szervez eredmény (organikus SEO) az, ami 6–9 hónap után számít igazán.

**(F) Kis csapat, tartalomgyártás realitása.** A havi 1 cikk ütemre tervezek, de ehhez sem belső szerzőt, sem külső copywritert nem neveztünk meg. **Javaslat:** a Design fázis végére eldönteni, ki írja a szakmai tartalmat (angol és német lektorálás kötelező — ezek nem könnyű szövegek, rossz fordítás azonnal érződik).

### 17.3 Amit a v1.1 sem fed le megfelelően

**(G) Versenytárs-analízis hiányzik.** A tervben nem nevesítettem, kik a közvetlen DACH-beli versenytársak. Pedig egy konkrét „ki van az első 10-ben a Google-ban ezekre a kulcsszavakra” elemzés segítene: mit csinálnak jól (lemásolható), miben jobbak (áthívni onnan), hol van rés (oda menni). **Javaslat:** a Code fázis elején 1 hét ráfordítás ilyen analízisre, hogy a végleges tartalmi finomhangoláshoz legyen empirikus alap. Ez most a terv hiánya, és ezt most nem pótolom, mert a versenytárs-lista gyors változásai miatt érdemes a launch idejére halasztani.

**(H) AI-optimalizáció (GEO/AEO) csak felszíni kezelésre kerül.** Én FAQ-oldalakat és schema.org-ot említettem, de a *Generative Engine Optimization* részletesebben: a LLM-ek úgy idéznek forrást, hogy lexikailag tiszta, struktúrált, definíció-szerű szakaszokat keresnek. A blogcikkeknél ezt külön design kellene: minden cikk elején egy 2–3 mondatos, önmagában is értelmes összefoglaló („TL;DR”), utána a tartalom struktúrált szakaszokkal, minden szakasz elején egy kvázi-definícióval. Ez a v1.1 nem rögzíti. **Javaslat:** a cikk-szerkezetet a Design fázisban külön sablonként megtervezni.

**(I) Videótartalom nem szerepel a tervben.** Pedig a B2B ipari beszerzők ma már rövid (60–90 s) üzemi videókat keresnek, és a YouTube-on való jelenlét komoly SEO-erő. **Javaslat:** a Design fázis kezdetére 3–5 videó (géppark bemutató, mérőszoba, Jakabszállás új csarnok) legyen betervezve — opcionálisan, ha időkerete van.

**(J) A multi-site struktúra (3 nyelv) SEO-kockázata.** Ha a három nyelven párhuzamosan publikálunk, és az angol verzióból még a frissebb tartalmak is hiányoznak, a Google „thin content” vagy „duplicate content” problémát láthat. **Javaslat:** inkább kevesebb oldal mind a 3 nyelven, mint sok oldal csak EN-ben. Ez egy folyamatos figyelmet igénylő fegyelem.

**(K) A gyakornokság / szakiskolai kapcsolat csak HU-ra lokalizáltan.** A DACH-ban ez erős employer branding eszköz lenne („Training the next generation of precision engineers — even serving our German partners”). **Javaslat:** a Design fázis végére külön angol+német hangot is kap ez a téma, a „Rólunk” oldalon szerepeltetve.

**(L) A blog és a tudásbázis struktúra nincs elválasztva.** Én összevontam ezeket, de valójában a blog (hír, aktualitás, időben mulandó) és a tudásbázis (örökzöld műszaki útmutatók) külön struktúrát érdemel. **Javaslat:** a Code fázisban `/blog/` és `/knowledge/` vagy `/guides/` URL-ek külön, de egyelőre egy tagben indítjuk, mert kis mennyiségben nem éri meg a szétválasztás.

**(M) A mobil-nézet RFQ űrlap tervei túl optimisták.** A drag-and-drop fájlfeltöltés mobilon UX-probléma (a mobilbeszerző általában nem tud mobilról STEP-fájlt feltölteni — az a desktopon van). **Javaslat:** mobilon az űrlap azt jelezze: „Please use a desktop to upload drawings, or reply with the drawings via email after initial contact.” A kontakt-űrlap mobilon is működik.

**(N) A 48 órás válaszidő-ígéret kockázat.** Ha a valóságban 3-4 nap kell, ez a weboldalon ígért promise megsérül, és lead-bizalom-vesztés. **Javaslat:** „within 2 business days” a pontos megfogalmazás (biztonsági sáv, hétvége kiküszöbölve). Vagy ha realisztikusabb: 72 óra.

**(O) LinkedIn Company Page és egyéb off-site entity-building.** A schema.org `sameAs` listát üresen hagyjuk, ha nincs erős LinkedIn-profil. Pedig az entity-recognition (Google Knowledge Graph, AI Overviews) erősen épül a külső referenciákra. **Javaslat:** a Code fázissal párhuzamosan: friss LinkedIn Company Page, rendszeres posztolás, európai B2B portálokon (Europages, IndustryStock, wlw.de) frissített, minőségi profil. Ezek **nem** a weboldal feladatai, de a SEO sikeréhez nélkülözhetetlenek.

### 17.4 A legfontosabb 3 döntés, amit a Design fázis INDULÁSA ELŐTT meg kell hozni

Nem a teljes 7+14-es lista, csak amit ha nem döntünk el, a design is félresiklik:

1. **Logók a kezdőlapon — jogi ellenőrzés után használhatók, vagy csak szöveges említés?** Mert a hero alatti sáv dizájnja teljesen más, ha logókkal vagy ha szövegesen.
2. **Centrifugál öntés / bronz siklócsapágy — ez még aktív vagy sem?** Mert ha igen, akkor a menü 9. szolgáltatást kap, és a design „9-szolgáltatás-rácsra” készül, nem 8-ra.
3. **A Design nyelve a mockuphoz.** Mert 3 nyelven 3 külön design-verzió nem kell, de 1 mintaoldal valamelyik nyelven. Javaslat: **angol** (ez a fő piac).

### 17.5 Mi nem változott, és miért nem

Néhány dolog a v1.0-ban helyes volt és a v1.1-ben sem változik:

- A pillar–cluster architektúra alapgondolata.
- Az iparági aloldalak (automotive, commercial vehicles stb.) — ez egy nagyon erős B2B SEO-eszköz, maradhat.
- A kulcsszó-megközelítés DE/EN elsődleges, HU másodlagos — ez még egyértelműbb most.
- A schema.org Organization + LocalBusiness + Service + FAQ + BreadcrumbList minimum stack.
- A hreflang követelmények.
- A Core Web Vitals és technikai SEO követelmények.
- Az RFQ űrlap mint #1 konverziós pont.
- A történetünk oldal brand-építő szerepe (nem SEO-cél).

**Ezek stabilak, és a Design fázis ezekre építhet.**
