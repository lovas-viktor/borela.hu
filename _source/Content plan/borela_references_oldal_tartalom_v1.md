# Borela Bt. — References (Referenciák) oldal: teljes tartalmi terv

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Kapcsolódó dokumentum:** `borela_uj_tartalmi_struktura_v1-1.md` — 6.8 pont (Referenciák / Partnerek oldal), 4.2 pont (Esettanulmányok), 17.2 pont (kockázatok: partnerlogók, „supplier to” kulcsszó)
**Fázis:** tartalom → Design (Claude Design) bemenete
**Bemenetek, amiket feldolgoztam:** a v1.1 struktúradokumentum + a `frontpage_borela.png` (a kész főoldal-design)

---

## 0. Mit csinál ez a dokumentum

A v1.1 struktúradokumentum 6.8 pontja egy bekezdésben vázolta a Referenciák oldalt. Ez a dokumentum azt **teljes, Design-fázisba adható tartalmi tervvé bontja**, és mindezt **a már elkészült főoldal vizuális nyelvéhez igazítja** — hogy a References oldal ne új dizájnt igényeljen, hanem a meglévő komponenskészletből épüljön fel.

Két forrásból dolgoztam:
1. a tartalmi struktúra és SEO-stratégia (mit kell az oldalnak elérnie),
2. a `frontpage_borela.png` (milyen vizuális rendszerbe kell illeszkednie).

---

## 1. A főoldal vizuális nyelvének elemzése — amit a References oldal örököl

A `frontpage_borela.png` alapján a Borela-design egy határozott, mérnöki rendszer. A References oldal **nem talál ki semmit újra**, hanem ezeket a kész elemeket használja:

| Főoldali elem | Hogyan néz ki | Hol használjuk a References oldalon |
|---|---|---|
| **Szekció-címkék** | `[ 0X — SZEKCIÓ NÉV ]` monospace, szekciószámozással | Minden szekció fölött — a References saját `[ 01 ]`–`[ 07 ]` számozást kap |
| **Bold, condensed, nagybetűs H1** | „HUNGARIAN PRECISION. GLOBAL SCALE." — rövid, kétrészes | A References hero H1-e ugyanilyen punchy, kétrészes |
| **Színpaletta** | krémszín alap, fekete kontraszt-szekciók, kék CTA | Azonos — a References is krém alap, egy fekete „számok" blokk, kék CTA |
| **Kártyarács vékony kerettel** | a szolgáltatás-kártyák 1px keretes rácsa | A partnerlista ugyanilyen kártyarács |
| **Mini spec-táblázat a kártyában** | a szolgáltatás-kártyákon belüli „címke — érték" sorok | A partnerkártyák ugyanezt használják (iparág / amit szállítunk / partner óta) |
| **Fekete „számok" blokk** | nagy számok fehéren feketén (1953 / 70+ / 40 / 6…) | A References `[ 02 ]` szekciója — „bizalom számokban" |
| **Esettanulmány-kiemelő blokk** | kép balra, szöveg jobbra, kis címke + „READ MORE" | A References esettanulmány-előnézetei ugyanez a komponens |
| **Akkordeon** | a főoldali FAQ és „Industries served" lenyíló sorai | A References FAQ-ja és (opcionálisan) a partnerek iparág szerinti csoportosítása |
| **Záró CTA-szekció** | „READY TO DISCUSS YOUR PROJECT?" + kék gomb | A References záró CTA-ja ugyanez, más szöveggel |
| **Átlós csíkozású placeholder** | a hero alatti kép/videó-helyek | Az esettanulmány-előnézetek képhelyei, amíg nincs valódi fotó |
| **Sötét lábléc** | teljes lábléc sötét háttéren | Változatlan |

**Konklúzió a Design fázisnak:** a References oldal **0 új komponenst** igényel. Egy meglévő-komponens-újrarendezés. Ez gyors Design-kört és konzisztens élményt jelent.

---

## 2. Az oldal célja és helye a struktúrában

A References oldal a v1.1 buyer journey **2. fázisát** (validáció) szolgálja ki: a beszerző már az oldalon van, és azt kérdezi magában, „megbízhatok-e ebben a cégben". Három dolgot kell bizonyítania:

1. **Társadalmi bizonyíték (social proof):** neves OEM-ek évek óta a Borelától rendelnek.
2. **Auditálhatóság:** a Borela átment olyan beszállítói auditokon, amilyenen a beszerző maga is auditálni fogja.
3. **Folytonosság:** ezek nem egyszeri megrendelések, hanem többéves, ismétlődő gyártási kapcsolatok.

**Fontos pozicionálási elv (a v1.1 17.2/B pontjából):** a References oldal a partnereket **tényként** közli (név, iparág, mióta) — de **nem** épít köré agresszív kulcsszó-kampányt, és **nem** készülnek `/references/knorr-bremse/` típusú, partnerre optimalizált dedikált aloldalak. Ez egyrészt a partnerek márkahasználati elvárása miatt fontos, másrészt mert a beszerzők a *képességet* keresik, nem a partner nevét. Az esettanulmányok URL-je és H1-e ezért **a műszaki kihívásra** céloz, nem a partner nevére (lásd 6. fejezet).

---

## 3. SEO-alapok

### 3.1 URL

```
https://borela.eu/references/              → angol (gyökér)
https://borela.eu/de/referenzen/           → német
https://borela.eu/hu/referenciak/          → magyar
```

Esettanulmány-aloldalak (lásd 6. fejezet):
```
https://borela.eu/references/case-studies/<kihivas-alapu-slug>/
https://borela.eu/de/referenzen/fallstudien/<slug>/
https://borela.eu/hu/referenciak/esettanulmanyok/<slug>/
```

### 3.2 Elsődleges kulcsszó

- **EN:** *precision machining supplier references* / *CNC machining references*
- **DE:** *Zulieferer Referenzen* / *Referenzen Lohnfertigung*
- **HU:** *beszállítói referenciák* / *precíziós forgácsolás referenciák*

A partnernevek (Knorr-Bremse, Mercedes-Benz stb.) **a meta description-ben tényként** szerepelnek, mert ezek valóban keresett kifejezések és erős trust-jelzők — de a H1 a *képességre* céloz, nem a partnernévre (17.2/B kockázatkezelés).

### 3.3 Meta title (60 karakter alatt)

- **EN:** *References — Precision Machining Supplier | Borela*
- **DE:** *Referenzen — Zulieferer Präzisionszerspanung | Borela*
- **HU:** *Referenciák — Precíziós forgácsoló beszállító | Borela*

### 3.4 Meta description (155 karakter alatt)

- **EN:** *Long-term precision CNC supplier to Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg & Sulzer. Knorr-Bremse Supplier of the Year, VDA 6.3 audited.*
- **DE:** *Langjähriger CNC-Zulieferer für Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg & Sulzer. Knorr-Bremse Lieferant des Jahres, VDA 6.3 auditiert.*
- **HU:** *Hosszú távú precíziós CNC-beszállító: Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer. Knorr-Bremse Év Beszállítója, VDA 6.3 auditált.*

### 3.5 hreflang

A `<head>`-ben a teljes hreflang-blokk (en / de / hu / x-default=en), a v1.1 3.3 pontja szerinti mintában.

---

## 4. Oldalszerkezet — szekcióról szekcióra

Az oldal a főoldal ritmusát követi: minden szekció `[ 0X — ... ]` címkével indul. A References saját számozást kap `[ 01 ]`-től `[ 07 ]`-ig.

---

### `[ 01 — REFERENCES ]` — Hero / bevezető

**Cél:** 5 másodperc alatt közölni, hogy a Borela bizonyított beszállító, és megadni az olvasási ívet.

**H1 (punchy, kétrészes — a főoldal H1-mintája szerint):**
- **EN:** *PROVEN WHERE PRECISION IS NON-NEGOTIABLE*
- **DE:** *BEWÄHRT, WO PRÄZISION KEINE OPTION IST*
- **HU:** *BIZONYÍTOTT OTT, AHOL A PRECIZITÁS NEM OPCIÓ*

**Alcím (a kulcsszót ez hordozza, kb. 25 szó):**
- **EN:** *Borela is a long-term precision machining supplier to Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg and Sulzer — references built over decades of repeat production, not marketing campaigns.*
- **DE:** *Borela ist langjähriger Zulieferer für Präzisionszerspanung von Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg und Sulzer — Referenzen aus jahrzehntelanger Serienfertigung, nicht aus Marketingkampagnen.*
- **HU:** *A Borela hosszú távú precíziós forgácsoló beszállítója a Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg és Sulzer cégeknek — referenciák, amelyeket évtizedes ismételt sorozatgyártás épített, nem marketingkampány.*

**Tartalmi blokk (1 rövid bekezdés a H1+alcím alatt):**
A bevezető keretezze át, mit jelent itt a „referencia": nem logók egy fal mögött, hanem többéves szállítási kapcsolatok, amelyek ugyanazokon a beszállítói auditokon mentek át, amilyeneken a beszerző is auditálni fog. Egy mondat a folytonosságról: a Borela 1953 óta gyárt, és a legnagyobb partnerkapcsolatai is évtizedes nagyságrendűek.

**CTA-k:**
- Másodlagos (szövegszerű ugrólink): „Jump to case studies" / „Zu den Fallstudien" / „Ugrás az esettanulmányokhoz" → `#case-studies`
- A fő RFQ-CTA a záró szekcióban van (egy fő CTA / oldal elv).

> **Design-jegyzet:** ez a szekció a főoldali hero light, kép nélküli változata. Nincs nagy átlós placeholder — a hero itt tisztán tipográfiai (H1 + alcím + bevezető bekezdés), hogy a `[ 02 ]` fekete blokk azonnal kontrasztot adjon. Opcionálisan a hero jobb oldalán egy keskeny vízszintes „partner-szalag" futhat **csak szöveges partnernevekkel** (lásd 5. fejezet, jogi megjegyzés) — de ez elhagyható, mert a `[ 03 ]` szekció úgyis a partnereké.

---

### `[ 02 — TRUST IN NUMBERS ]` — Fekete „számok" szekció

**Cél:** a bizalmat számokra fordítani — ez a főoldal fekete számblokkjának közvetlen újrahasználata.

**H2:**
- **EN:** *Three decades of audited supply relationships*
- **DE:** *Drei Jahrzehnte auditierte Lieferbeziehungen*
- **HU:** *Három évtizednyi auditált beszállítói kapcsolat*

**A 4 szám (mind tényalapú, a struktúradokumentumból levezetve):**

| Szám | EN címke | DE címke | HU címke |
|---|---|---|---|
| **7** | long-term OEM partners | langjährige OEM-Partner | hosszú távú OEM-partner |
| **1996** | ISO 9001 certified since | ISO 9001 zertifiziert seit | ISO 9001 óta |
| **2009** | Knorr-Bremse Supplier of the Year | Knorr-Bremse Lieferant des Jahres | Knorr-Bremse Év Beszállítója |
| **5** | industries served | belieferte Branchen | kiszolgált iparág |

> **Megerősítendő a Borela részéről:** a „7" a struktúradokumentumban név szerint felsorolt partnerek száma (Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer, Phoenix Mecano, Zarges). Ha a Borela ennél többet vagy kevesebbet kommunikál nyilvánosan, a szám igazítandó. Az „5" az iparágak száma a v1.1 5.2 / 2. pontja szerint.

> **Design-jegyzet:** pontosan a főoldali `[ 03 ]` fekete blokk komponense — fekete háttér, fehér nagy számok, monospace címkék alattuk. 4 elem egy sorban (mobilon 2×2).

---

### `[ 03 — PARTNERS ]` — Strukturált partnerlista (az oldal magja)

**Cél:** a v1.1 6.8 pontjának fő kérése: „Partnerlista, de strukturáltan, minden partner rövid bemutatással (iparág, mit szállítunk nekik, mióta)."

**H2:**
- **EN:** *Who we supply — and what we make for them*
- **DE:** *Wen wir beliefern — und was wir für sie fertigen*
- **HU:** *Kiket szolgálunk ki — és mit gyártunk nekik*

**Rövid bevezető (2-3 mondat):** a Borela partnerei különböző iparágakból érkeznek, de egy közös: mind precíziókritikus alkatrészeket rendelnek, ismételt sorozatban. A lista alább iparág szerint csoportosítva.

**Felépítés: kártyarács, partnerenként egy kártya** — a főoldali szolgáltatás-kártyák mini spec-táblázatos felépítésével.

**Egy partnerkártya anatómiája:**

```
┌────────────────────────────────────┐
│  [iparág-címke, kicsi, monospace]   │
│                                     │
│  PARTNER NEVE                       │  ← bold, nagybetűs, Borela-tipó
│  (SZÖVEG, NEM LOGÓ — lásd jogi)     │
│                                     │
│  ── mini spec-táblázat ──           │
│  INDUSTRY      │ <érték>            │
│  WE SUPPLY     │ <érték>            │
│  PARTNER SINCE │ <év>               │
│                                     │
│  → kapcsolódó iparág-oldal link     │
└────────────────────────────────────┘
```

**A 7 partnerkártya tartalma** (a struktúradokumentumból levezetve; a ⚠ jelölt mezőket a Borelának kell véglegesítenie publikálás előtt):

| Partner | Iparág-címke | Amit szállítunk (⚠ Borela pontosítsa) | Partner óta | Linkel ide |
|---|---|---|---|---|
| **Knorr-Bremse Fékrendszerek Kft.** | Automotive / Braking | Fékrendszer-alkatrészek, precíziós esztergált komponensek (Tier 2) | ⚠ év | `/industries/automotive/` |
| **Mercedes-Benz Manufacturing Hungary Kft.** | Automotive | Forgácsolt komponensek; mérnöki együttműködési projekt | ⚠ 2019-től? folyamatos? | `/industries/automotive/` |
| **Hilti** | Power tools | Komponensek elektromos kéziszerszámokhoz | ⚠ év | `/industries/power-tools/` |
| **Freudenberg** | Sealing technology | Forgácsolt alkatrészek autóipari tömítéstechnikai alkalmazásokhoz | ⚠ év | `/industries/sealing-technology/` |
| **Sulzer** | General mechanical engineering | Precíziós forgácsolt komponensek | ⚠ év | `/industries/general-engineering/` |
| **Phoenix Mecano** | General mechanical engineering | Ipari precíziós alkatrészek | ⚠ év | `/industries/general-engineering/` |
| **Zarges** | General mechanical engineering | Forgácsolt komponensek | ⚠ év | `/industries/general-engineering/` |

**Csoportosítás:** a kártyák iparág szerint csoportosítva jelennek meg (Automotive → Power tools → Sealing → General engineering). Ez egyszerre olvasásbarát és megerősíti az „5 iparág" üzenetet a `[ 02 ]` blokkból.

> **⚠ Jogi megjegyzés — partnerlogók (v1.1 17.2/A):** ez az oldal **alapértelmezésben logó nélkül, szöveges partnernevekkel** készül. A Knorr-Bremse, Mercedes-Benz, Hilti stb. márkahasználati szabályzatai jellemzően tiltják a logók engedély nélküli megjelenítését beszállítói oldalon — még akkor is, ha a szállítói kapcsolat valós. A kártyák ezért a partnernevet a Borela saját bold tipográfiájával jelenítik meg. **Upgrade-útvonal:** ha a Borela írásos márkahasználati engedélyt szerez egy-egy partnertől, a kártya képes a logó befogadására dizájn-átszabás nélkül (a név helyére kerül a logó). A Design fázis a kártyát úgy tervezze, hogy **mindkét állapot** működjön.

> **⚠ Megerősítendő:** a „Partner óta" évszámokat és a pontos „Amit szállítunk" leírásokat a struktúradokumentum nem tartalmazza partnerenként. Ezeket a Borelának kell megadnia, mielőtt az oldal élesedik — addig a mező placeholderrel jelölt. Ha valamelyik partnernél a kezdőév nem dokumentálható pontosan, a mező elhagyható, vagy „long-term partner" / „multi-year supplier" megfogalmazással helyettesíthető.

> **Design-jegyzet:** a főoldali `[ 02 — SERVICES ]` kártyarács 1:1 újrahasználata. Ugyanaz a vékony keret, ugyanaz a mini spec-táblázat-belső. A különbség: itt nincs ikon a kártya tetején (vagy egy semleges, iparág-specifikus piktogram állhat ott — a v1.1-ben említett iparági piktogramokból).

---

### `[ 04 — RECOGNITION ]` — Díjak és elismerések

**Cél:** a független, harmadik féltől származó elismerések kiemelése. A v1.1 6.8 pontja kéri: „Díjak: Knorr-Bremse Év Beszállítója 2009, Az Év Vállalkozója 2010."

**H2:**
- **EN:** *Recognition from those who audited us hardest*
- **DE:** *Auszeichnungen von denen, die uns am härtesten geprüft haben*
- **HU:** *Elismerés azoktól, akik a legszigorúbban auditáltak minket*

**Tartalom — idővonal-strip (a v1.1 „Történetünk" oldal idővonalával rokon vizuális logika):**

| Év | Elismerés | Megjegyzés |
|---|---|---|
| **2007** | Knorr-Bremse Product Safety Audit teljesítve | beszállítói biztonsági audit |
| **2009** | Knorr-Bremse Év Beszállítója (Supplier of the Year) | díj |
| **2010** | Az Év Vállalkozója (Vállalkozók Országos Szövetsége) | díj |
| **2016** | VDA 6.3 audit teljesítve | autóipari folyamataudit |

**Fontos — duplikált tartalom elkerülése (v1.1 17.3/J):** a teljes tanúsítvány-részletezés (ISO 9001, ISO 14001 leírások) a **Képességek / Tanúsítványok** oldalon él. A References oldal `[ 04 ]` szekciója **a díjakra és az auditok teljesítésére mint elismerésre** fókuszál — nem ismétli meg a tanúsítvány-szövegeket. Egy szövegszerű link a végén: „See all certifications →" `/capabilities/certifications/`.

> **Design-jegyzet:** vízszintes vagy függőleges idővonal-strip, négy mérföldkővel. Nem kell új komponens — lehet a kártyarács egy szűkebb, év-fejléces változata, vagy a Design fázis a History-oldal idővonal-komponensét hozza ide. Krém háttér, a `[ 02 ]` fekete blokk után ez vizuálisan „kinyit".

---

### `[ 05 — CASE STUDIES ]` — Esettanulmány-előnézetek

**Horgony:** `#case-studies` (ide ugrik a `[ 01 ]` hero másodlagos CTA-ja).

**Cél:** a v1.1 4.2 és 6.8 szerint az esettanulmányok **alárendelt aloldalak**. Ez a szekció az előnézeteket adja, kattintással a teljes aloldalakra.

**H2:**
- **EN:** *Case studies — the work behind the names*
- **DE:** *Fallstudien — die Arbeit hinter den Namen*
- **HU:** *Esettanulmányok — a munka a nevek mögött*

**Felépítés:** esettanulmányonként egy előnézet-blokk — a főoldali esettanulmány-kiemelő komponenssel (kép balra/átlós placeholder, szöveg jobbra, kis címke + „READ CASE STUDY" link).

**Első körben két esettanulmány** (a struktúradokumentumban név szerint említett kettő):

**Esettanulmány 1 — Nagy sorozatú fékrendszer-alkatrészek**
- Iparág-címke: Automotive / Braking
- Cím (EN): *High-volume brake-system component machining*
- Teaser (2-3 mondat): a Borela évek óta gyárt precíziós fékrendszer-komponenseket Tier 2 beszállítóként; a kapcsolat csúcspontja a Knorr-Bremse Év Beszállítója elismerés volt 2009-ben. Mit jelentett ez műszakilag: stabil sorozatminőség, auditált folyamatok, ismételt gyártás.
- Link: `/references/case-studies/high-volume-brake-components/`

**Esettanulmány 2 — OEM mérnöki együttműködés**
- Iparág-címke: Automotive
- Cím (EN): *OEM engineering collaboration*
- Teaser: a Borela a Mercedes-Benz Manufacturing Hungary mérnöki projektjében vett részt 2019-től; az együttműködés a forgácsolási szakértelem és a mérnöki problémamegoldás kombinációját mutatja.
- Link: `/references/case-studies/oem-engineering-collaboration/`

> **⚠ Pozicionálási elv (v1.1 17.2/B):** az esettanulmány-aloldalak slug-ja és H1-e **a műszaki kihívásra céloz** (`high-volume-brake-components`, `oem-engineering-collaboration`), **nem a partner nevére** (`/knorr-bremse/`, `/mercedes-benz/`). A partner neve az aloldalon **tényként** szerepel, de az URL és a H1 a keresett *képességet* célozza. Ez egyszerre jobb SEO és tiszteletben tartja a partnerek márkahasználati elvárásait.

> **⚠ Megerősítendő (v1.1 17.3/3):** a Mercedes-Benz mérnöki együttműködésről a struktúradokumentum nyitva hagyja, hogy egyszeri projekt volt-e vagy visszatérő. Ha **visszatérő**, az esettanulmány mellett érdemes lehet később egy önálló „Engineering services" szolgáltatási oldal is — de ez nem ennek az oldalnak a feladata. Ha **egyszeri**, marad esettanulmányként. Addig az esettanulmány múlt időben, projekt-keretezéssel íródik.

> **Design-jegyzet:** a főoldali `[ 07 ]` esettanulmány-kiemelő blokk komponense, kétszer egymás alá rakva (váltakozó kép-bal / kép-jobb elrendezéssel, hogy ritmusa legyen). Amíg nincs valódi gyártási fotó, az átlós csíkos placeholder áll a képhelyén — pontosan mint a főoldalon. **Valódi fotók beszerzése a Design-brief inputja** (v1.1 15. fejezet, „Fotók" pont).

---

### `[ 06 — WHY PARTNERS STAY ]` — Miért maradnak a partnerek

**Cél:** a referenciát *minőséggé* fordítani — megmagyarázni, **miért** lesz valakiből többéves Borela-partner. Ez a beszerző „bízhatok-e bennük hosszú távon" kérdésére válaszol.

**H2:**
- **EN:** *Why our customers stay — for years, not orders*
- **DE:** *Warum unsere Kunden bleiben — über Jahre, nicht Aufträge*
- **HU:** *Miért maradnak az ügyfeleink — évekig, nem megrendelésekig*

**Tartalom — 3-4 pont, kártya- vagy listaformában:**
1. **Auditált, ismételhető folyamatok** — a partnerek ugyanazokon az auditokon mentek át, amelyeket a beszerző maga is elvár (ISO 9001, VDA 6.3, Knorr-Bremse PSA).
2. **Ismételt sorozatgyártás** — nem egyszeri munkák; többéves, visszatérő gyártási kapcsolatok (500–100 000 db/leadás tartomány).
3. **Egyetlen kapcsolattartó** — a Borela viszi a teljes projektmenedzsmentet, beleértve a kiszervezett hőkezelés koordinációját; a beszerzőnek egy szerződés, egy kontakt.
4. **Saját mérőszoba** — minden alkatrész a Borela saját 3D CMM-jén ellenőrizve; a minőség nem ígéret, hanem dokumentált.

> **⚠ Tartalmi figyelmeztetés — NINCS kitalált testimonial:** ez a szekció **nem** tartalmaz idézőjeles ügyfél-idézeteket, mert a struktúradokumentum nem hivatkozik valódi, megszerzett partnernyilatkozatokra, és kitalált idézet komoly hitelességi és jogi kockázat. A szekció a *jellemzőkre* épül, nem fiktív idézetekre. **Upgrade-útvonal:** ha a Borela valódi, írásos hozzájárulással ellátott partneridézetet tud szerezni, a Design fázis később egy testimonial-komponenst hozzáadhat — addig ez a jellemző-alapú blokk áll.

> **Design-jegyzet:** lehet a `[ 05 — WHY BORELA ]` főoldali USP-blokk komponense (számozott pontok rövid leírással), vagy egy egyszerűbb 4-elemes lista. Nem igényel új komponenst.

---

### `[ 07 — FAQ ]` — Gyakori kérdések

**Cél:** a beszerző audit-fázisú kérdéseire válaszolni + `FAQPage` schema az AI-keresőkhöz.

**H2:**
- **EN:** *References — frequently asked questions*
- **DE:** *Referenzen — häufige Fragen*
- **HU:** *Referenciák — gyakori kérdések*

**FAQ (5 kérdés, mindhárom nyelven elkészül — itt EN-mintával):**

1. **Can you provide customer references for a supplier audit?**
   *Yes. As part of a formal RFQ or supplier qualification process, we can provide reference details on request, subject to our customers' confidentiality agreements.*

2. **Why don't you display customer logos on this page?**
   *Many of our partners' brand guidelines restrict third-party logo use, even by legitimate suppliers. We name our partners as a matter of fact and respect their brand policies — the relationships are real, the logos are theirs to grant.*

3. **How long are your typical customer relationships?**
   *Most are multi-year, repeat-production relationships rather than one-off orders. Several of our partnerships span well over a decade.*

4. **Can I speak directly to one of your existing customers?**
   *Where our customers agree, we can arrange a reference contact during the qualification stage. Just let us know in your RFQ.*

5. **Are your references automotive-qualified?**
   *Yes — our automotive partners (including Tier 2 brake-system supply for Knorr-Bremse) operate under ISO 9001, ISO 14001, VDA 6.3 audited processes, and we passed the Knorr-Bremse Product Safety Audit in 2007.*

> A 2. kérdés szándékosan **a logó-hiányt teszi átláthatóvá** — ahelyett, hogy gyengeségként hatna, professzionalizmust és a partnerek tiszteletét közvetíti.

> **Design-jegyzet:** a főoldali FAQ-akkordeon 1:1 újrahasználata.

---

### Záró CTA-szekció

**H2 / felhívás:**
- **EN:** *READY TO BECOME OUR NEXT REFERENCE?*
- **DE:** *BEREIT, UNSERE NÄCHSTE REFERENZ ZU WERDEN?*
- **HU:** *KÉSZEN ÁLL, HOGY A KÖVETKEZŐ REFERENCIÁNK LEGYEN?*

**Alszöveg:** egy mondat — küldje el a rajzát, 2 munkanapon belül visszajelzünk. (A v1.1 17.3/N kockázat szerint „within 2 business days", nem „48 óra".)

**Gomb:** „Request a Quote" / „Angebot anfordern" / „Ajánlatkérés" → `/rfq/` (`/de/angebot-anfordern/`, `/hu/ajanlatkeres/`)

> **Design-jegyzet:** a főoldali záró CTA-szekció komponense, kék gombbal.

---

## 5. Esettanulmány-aloldal — sablon

A v1.1 4.2 és 6.8 az esettanulmányokat alárendelt aloldalként kezeli, de a szerkezetüket nem adja meg. Itt egy újrafelhasználható sablon, hogy minden esettanulmány azonos felépítésű legyen.

**URL-minta:** `/references/case-studies/<kihivas-alapu-slug>/` (lásd a `[ 05 ]` szekció pozicionálási elvét — kihívás-alapú slug, nem partnernév)

**Szekciók:**

| Szekció | Tartalom |
|---|---|
| **`[ 01 ]` Hero** | Kihívás-alapú H1 (pl. „High-volume brake-system component machining"), iparág-címke, 1 mondatos összefoglaló |
| **`[ 02 ]` The challenge** | Mit kért a partner, milyen műszaki/minőségi/mennyiségi kihívással — 1-2 bekezdés |
| **`[ 03 ]` Our approach** | Hogyan oldotta meg a Borela — gépek, folyamatok, minőségellenőrzés, ha releváns a koordinált hőkezelés |
| **`[ 04 ]` The result** | Mérhető vagy konkrét eredmény — sorozatstabilitás, audit teljesítése, díj, többéves folytatás |
| **Oldalsáv / spec-blokk** | Mini spec-táblázat: partner, iparág, szolgáltatás(ok), sorozatméret-tartomány, év — a főoldali kártya-spec-stílusban |
| **Kapcsolódó** | Linkek: a kapcsolódó szolgáltatási oldal(ak), a kapcsolódó iparág-oldal, vissza a References oldalra |
| **CTA** | RFQ |

> **⚠ Megerősítendő:** a két esettanulmány konkrét műszaki tartalmát (challenge / approach / result szövegek, konkrét számok) a struktúradokumentum nem tartalmazza. Ezeket a Borela inputjával kell megírni — copywriting-feladat, a v1.1 15. fejezet szerint a Design fázis alatt párhuzamosan. Addig a sablon a váz, valós tartalom nélkül nem publikálható.

> **Schema:** `Article` (a `CaseStudy` nem hivatalos schema.org-típus), `about` mezővel a kapcsolódó iparágra/szolgáltatásra mutatva, `BreadcrumbList`, és ha az aloldalon van FAQ, `FAQPage`.

---

## 6. Schema.org — a References oldalra

A v1.1 6.8 pontja `Organization` + `Review`/`AggregateRating`-et javasolt. Pontosítás:

- **`Organization`** (`@id`-vel a globális `#organization`-re hivatkozva) — a `sameAs` mezőben a Borela hivatalos külső profiljai (LinkedIn, Europages, IndustryStock). **NEM** a partnerek oldalaira mutató `sameAs` — a `sameAs` a *saját* entitás más reprezentációira való, nem üzleti kapcsolatra.
- **`BreadcrumbList`** — kötelező, minden oldalon.
- **`FAQPage`** — a `[ 07 ]` FAQ-blokkhoz, a látható tartalommal egy az egyben egyező kérdés-válaszokkal.
- **`Review` / `AggregateRating`** — **csak akkor**, ha a Borela valódi, hitelesíthető értékeléseket tud felmutatni. Kitalált vagy nem hitelesíthető review schema spam-büntetést von maga után a Google-tól. **Alapértelmezésben ezt kihagyjuk**, amíg nincs valódi forrás.
- Az **awardok** a globális `Organization` schema `award` tömbjében már szerepelnek (v1.1 8.1) — a References oldal nem duplikálja, csak láthatóvá teszi a `[ 04 ]` szekcióban.

---

## 7. Belső linkelés

**Erre az oldalra mutat (honnan jön link):**
- Főmenü „References / Referenzen / Referenciák" pont
- Főoldal `[ 07 ]` esettanulmány-kiemelő blokk „Read more" linkje
- Minden iparág-aloldal (az iparág-oldalak „kik a partnereink" blokkja visszamutathat ide)
- Rólunk / Történetünk oldal (a díjak kapcsán)

**Erről az oldalról mutat (hova linkel):**
- `[ 03 ]` partnerkártyák → a megfelelő iparág-aloldalakra (`/industries/automotive/` stb.)
- `[ 04 ]` díjak → `/capabilities/certifications/` („See all certifications")
- `[ 05 ]` esettanulmány-előnézetek → az esettanulmány-aloldalakra
- `[ 06 ]` „egyetlen kapcsolattartó" pont → `/services/heat-treatment/` (a koordinált hőkezelés oldala)
- Záró CTA + `[ 01 ]` hero → `/rfq/`

---

## 8. Nyitott kérdések / amit a Borelának meg kell erősítenie a Design-fázis előtt

A References oldal **megtervezhető és Design-fázisba adható** az alábbi pontok lezárása nélkül is — de a *publikáláshoz* ezek kellenek:

1. **Partnerlogók:** írásos márkahasználati engedélyt kér-e a Borela a partnerektől, vagy marad a szöveges megjelenítés? (Az oldal alapból logó nélkül készül; a kártya mindkét állapotra képes.)
2. **„Partner óta" évszámok** — partnerenként. Ahol nem dokumentálható, „long-term partner" megfogalmazás.
3. **„Amit szállítunk" pontosítása** — partnerenként, Borela inputtal.
4. **A 7 partner listája végleges-e?** Mind a 7-et nyilvánosan kommunikálja a Borela? (Ez állítja be a `[ 02 ]` „7" számot is.)
5. **Mercedes-Benz: visszatérő vagy egyszeri?** (Befolyásolja az esettanulmány keretezését és egy esetleges külön „Engineering services" oldal kérdését — utóbbi nem ennek az oldalnak a feladata.)
6. **A két esettanulmány konkrét műszaki tartalma** — challenge / approach / result szövegek, számok. Copywriting-feladat Borela inputtal.
7. **Valós gyártási fotók** az esettanulmányokhoz — addig átlós csíkos placeholder (mint a főoldalon).
8. **Van-e bármilyen valódi, hitelesíthető ügyfél-idézet?** Ha igen → testimonial-komponens hozzáadható a `[ 06 ]` szekcióhoz. Ha nem → marad a jellemző-alapú blokk, és a `Review` schema kimarad.

---

## 9. Átadás a Design fázisnak — összefoglaló

**Amit a References oldal a Design fázistól kér:** lényegében semmi újat. Az oldal **kizárólag a már elkészült főoldali komponensekből** épül:

- hero (light, kép nélküli változat) — `[ 01 ]`
- fekete számblokk — `[ 02 ]`
- kártyarács mini spec-táblázattal — `[ 03 ]`
- idővonal-strip — `[ 04 ]`
- esettanulmány-kiemelő blokk (átlós placeholderrel) — `[ 05 ]`
- USP-/listablokk — `[ 06 ]`
- FAQ-akkordeon — `[ 07 ]`
- záró CTA-szekció
- sötét lábléc

**Egyetlen komponens, amit a Design-nak finomítania kell:** a partnerkártya, hogy **logó-val és logó nélkül egyaránt** működjön (a jogi kimenetel még nyitott).

**Mockup nyelve:** a v1.1 17.4/3 szerint **angol** (a fő piac), a References oldal mintaoldala is angolul készüljön.

---

*Dokumentum vége — Borela References oldal tartalmi terv, v1.0*
