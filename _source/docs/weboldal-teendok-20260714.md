# Weboldal átalakítási feladatlista — a 2026.07.14-i megbeszélés alapján

> **Cél:** ez a lista a `weboldal-megbeszeles-20260714.md` szó szerinti jegyzőkönyv
> alapján készült, a **jelenlegi weboldal tényleges tartalmával összevetve**.
> Nézd át, javítsd/erősítsd meg, **válaszolj a ❓ tisztázó kérdésekre** és a lista
> végi táblázatokra, utána a CC pontosítja és végrehajtja.
>
> **A megbeszélés csak a magyar (HU) verziót nézte át.** A jóváhagyott HU-változások
> után a fordításokat (EN/DE) külön menetben visszük át.

## Jelölések

| Jel | Jelentés |
|-----|----------|
| 🔨 | **CC most végrehajtja** — egyértelmű, strukturális/szöveges változás. |
| 📧 | **Klienstől adatra vár** — a végrehajtáshoz tőletek jön anyag (szöveg, lista, logó, PDF, szám, kép, videó). A lista végén összegyűjtve. |
| ❓ | **Tisztázó kérdés** — ellentmondás vagy bizonytalanság, döntést kérek. Mind a végén is összegyűjtve. |

---

## 0. GLOBÁLIS (az egész oldalt érinti)

- **G-01 🔨 „Borela BT." → „Borela" mindenhol.** A cégnév a honlap szövegeiben egyszerűen
  **Borela** legyen, a „BT." nélkül. (jkv. 123–126) Érintett: mindhárom szótár
  (`dictionaries/{hu,en,de}.json`), a footer copyright („BORELA BT."), a CtaBlock, FAQ-szövegek,
  meta-adatok. ❓ **A logóban** is (a „BORELA BT." lockup), vagy a logó grafika marad és csak a
  szöveges előfordulásokat írjuk át? *(A jkv. a „logó alatti picike szöveg" = tagline kivételét
  külön kéri, lásd F-24.)*

- **G-02 ✅ KÉSZ — Globálisan JetBrains Mono.** DÖNTÉS (❓-B): az egész oldal a főmenű betűtípusát
  (**JetBrains Mono**) használja. Megvalósítás: `tailwind.config.ts` → a `sans` család is a JetBrains
  Mono változóra mutat (így minden `font-sans` és a `<body>` alapértelmezett is mono). Betöltött súlyok:
  400/500/600/700/800 (`app/[lang]/layout.tsx`); a hero cím **800 (ExtraBold)** — a JetBrains Mono
  legvastagabbja (900 nincs hozzá). *(jkv. 17–42, 209–211)* — ⚙️ Megjegyzés: a Public Sans betöltése
  már felesleges (nem renderelődik), később eltávolítható (perf). Hosszú törzsszövegek mono-ban
  kevésbé olvashatók — ha valahol zavaró, ott vissza lehet váltani sans-ra.

---

## 1. FŐOLDAL

A jelenlegi főoldal szekciósorrendje (referencia):
`§01 Hero → stat-sáv → fotó → Bizalmukat élvezzük → Világtérkép → §02 Szolgáltatások →
sötét kulcsszámok → §04 Tanúsítványok → §05 Miért a Borela → §06 Iparágak → §07 Kiemelt projekt
→ §08 GYIK → §09 CTA`.
Fájl: `app/[lang]/page.tsx` + `dictionaries/hu.json` → `home`.

### 1.1 Hero (§01 Bevezetés)

- **F-01 ✅ KÉSZ — Kék pontok eltávolítva.** DÖNTÉS: a pontok **teljesen eltűnnek** (a hero-címek pont
  nélkül). Végrehajtva: `app/[lang]/page.tsx` hero heading — a két `<span className="text-primary">.</span>`
  törölve. *(jkv. 24–31)*

- **F-02 ✅ KÉSZ — Új lead.** Végleges szöveg (tőled): **„Családi tulajdonú, precíziós forgácsolással
  foglalkozó magyar cég 1953 óta."** Ezzel az „OEM" és a „nyugat-európai minőség kelet-európai
  költséggel" rész is kiesett. Végrehajtva: `dictionaries/hu.json` → `home.hero.lead` (EN/DE később).
  *(jkv. 46–67)* — Megjegyzés: a lead **„1953 óta"**-t rögzít, ez a **❓-C** dátumdöntést a 1953
  irányába viszi; a stat-sávokat (F-06/F-21) a ❓-C végső válaszod szerint állítom.

- **F-03 ✅ KÉSZ (főoldal) — DÖNTÉS: mindenhol 1990.** ❓-C megválaszolva → mindenhol **1990** az 1953
  helyett. Végrehajtva a főoldalon: `page.tsx` `homeStats` és `keyFigures` értékei **1953 → 1990**,
  **70+ → 36**; a lead **„1990 óta"**. ⏳ A **Rólunk oldal** 1953-as tételei (timeline-esemény, §02 stat,
  whoWeAre, GYIK) az **R-02/R-03-nál** következnek (heritage-elbeszélés + Bognár-név tisztázása miatt).

- **F-04 ✅ KÉSZ — Hero második CTA.** A „Kapacitások megtekintése" gomb helyett **Kapcsolat** (→ `/contact/`).
  Végrehajtva: `page.tsx` hero action href + `hu.json` `home.hero.actions.1.label` = „Kapcsolat".
  Új hero-CTA-k: **Ajánlatkérés küldése** + **Kapcsolat**. *(jkv. 514–521)*

- **F-05 ✅ KÉSZ — Hero háttérkép.** A megadott `_source/images/borela01.png` (7 MB) átméretezve/
  konvertálva → `public/hero-home.jpg` (2000×1334, 214 KB). A `Hero` komponens új opcionális `bgImage`
  propot kapott (csak a főoldal használja), fölötte **80%-os meleg-papír fátyol** a szöveg
  olvashatóságáért. ⚙️ A fátyol erőssége hangolható (most `bg-background/80`) — ha erősebb/gyengébb
  kell, szólj. *(jkv. 522–535)*

### 1.2 Felső stat-sáv (hero alatti 3 szám)

- **F-06 ✅ KÉSZ — Felső stat-sáv.** Végleges: **1990** (Alapítva) · **36** (Év) · **±0.002 mm** (Tűrés).
  Végrehajtva: `page.tsx` `homeStats`. *(jkv. 78–83)*

### 1.3 Fotósáv (front.jpg)

- **F-07 ✅ DÖNTVE — A külön fotósáv (`front.jpg`) MARAD.** (❓-D megválaszolva.)

### 1.4 „Bizalmukat élvezzük" (referenciasáv)

- **F-08 ✅ KÉSZ — Logós referenciasáv.** A `TrustStrip` `logos` proppal **10 logót** jelenít meg,
  **egységesen 64 px magasan**, színesen: Knorr-Bremse · Mercedes-Benz · Hilti · Freudenberg · Sulzer ·
  Phoenix Mecano · DewertOkin · Zarges · Keller · Robel. Az összes logót a gyökér `./partners/`-ból
  frissítettem `public/partners/`-ba (nagyokat max 200px magasra méretezve). *(jkv. 95–122)*
- **F-09 ✅ KÉSZ (Ceka kivételével) — Referencialista.** Betéve: **Phoenix Mecano, DewertOkin, Zarges,
  Robel** (a Robel = a jkv. „Rubel"-je). 📧 **Már csak a Ceka fűrész** logója hiányzik — küldd, és
  beteszem. *(jkv. 99–186)*

### 1.5 Világtérkép („Globális jelenlét")

- **F-10 ✅ KÉSZ — „Globális jelenlét" alatti szöveg törölve.** A `WorldMap` `lead` propja opcionális
  lett, a főoldalon nem adjuk át → csak a cím marad. *(jkv. 129–131)*
- **F-11 ✅ KÉSZ — Logók le a térképről.** A `WorldMap`-ből kikerült minden partner-logó (NODES
  logódobozai, Mercedes-blokk, Keller-blokk) és a leader-vonalak; maradtak az **ívek + célpontok +
  a mozgó kék pöttyök**. A Magyarország-origó **Borela** jelölő megmaradt (nem partner). *(jkv. 132–149)*
- **F-12 ✅ KÉSZ — Térkép alatti legenda törölve** (a `WorldMap` legenda-blokkja eltávolítva). *(jkv. 148–149)*
- **F-13 📧 Több célpont a térképen.** Több szállítási célpont jelenjen meg (ne tűnjön kevésnek):
  Rubel/Robel (külföldi) felkerül, Keller maradhat, az európai gyártók egy csoportban (jkv. 181–186).
  📧 **A pontos pont-listát (mely cég / ország) te adod meg.**
- **F-14 (a) ✅ KÉSZ — Pörgő km a mozgó pötty fölött.** A térképet kliensoldali `requestAnimationFrame`
  animációra írtam át (a SMIL nem tud szöveget pörgetni). **Csak a távoli vonalakon** (Japán, Kína,
  India, Brazília) van szám; az **EU-n belülieken nincs** (kérésed szerint). A szám **0-tól a célország
  km-éig pörög**, a pötty megtett útjával arányosan. Közelítő távolságok (Magyarországtól): JP ≈9 100,
  CN ≈7 400, IN ≈6 300, BR ≈10 200 km — ha pontosítani kell, szólj. *(jkv. 150–179)*
- **F-14 (b) ⏳ NYITOTT — Összesített km-számláló.** A térkép alá egy összesítő (pl. „éves ~X M
  alkatrész → ~Y km"). 📧 Ehhez **adat kell tőled**: éves darabszám + kontinensenkénti szállítási
  mennyiség. *(jkv. 156–179)*

### 1.6 Szolgáltatások szekció (§02) — a főoldalon CSAK felsorolás

> **Fő elv (jkv. 561–571):** a **főoldalon** a szolgáltatások **csak ikon + név** formában, egy
> táblázatos/rácsos felsorolásként jelennek meg — **konkrét adat (átmérő, tűrés, munkatér, leírás)
> NÉLKÜL.** Minden csempe a **Szolgáltatások oldalra** linkel. A részletek a Szolgáltatások oldalra
> költöznek (lásd 2. fejezet).

- **F-15 🔨 Spec-értékek eltávolítása a főoldali szolgáltatás-csempékről** — marad ikon + név.
- **F-16 🔨 Minden csempe kattintható → `/services/` oldal** (jkv. 570).
- **F-17 🔨 Nagyobb betűméret + nagyobb címek** a szolgáltatás-szekcióban (jkv. 191–213).
- **F-18 🔨/📧 Ikonok/motívumok cseréje.** Jelenleg nincs ikon a főoldali SpecCard-okon (a jkv. viszont
  ikonos csempéket említ). Kell **releváns ikon** minden szolgáltatáshoz; a jkv. szerint a „sajtolás"
  (préselés) meglévő motívuma jó lenne, a többi cserélendő (jkv. 214–221). CC egységes ikonkészletet
  javasol; 📧 ha van elképzelésetek, jelezzétek.
- **F-19 ❓ Szolgáltatások listája (6 → ~9–10).** Jelenleg a főoldalon 6, a Szolgáltatások oldalon 8
  szolgáltatás van. A jkv.-ben ~9–10-ben egyeztetek meg (jkv. 549). A jkv.-ből összegyűjtött **teljes
  javasolt lista** (mindkét oldalra, azonos halmaz):
  1. CNC-esztergálás
  2. CNC-marás
  3. Hőkezelés *(partneren át; eljárások felsorolva)*
  4. **Préselés / stancolás** *(a mai „Sajtolás" átnevezve, jkv. 220–221, 284–285)*
  5. **Köszörülés** *(új, jkv. 335)*
  6. **Lakatos munka** *(új, jkv. 286, 297)*
  7. **Ipari hegesztés** *(a mai „Hegesztés AWI/TIG" ide sorolható, jkv. 286–288)*
  8. **Abrazív koptatás** *(új, jkv. 288)*
  9. **Élhajlítás** *(új, önálló, jkv. 298–303)*
  10. **Lézervágás** *(új, önálló, jkv. 303)*
  11. **Felületkezelés** *(új, a hőkezeléstől külön, jkv. 308–317)*
  12. **Prototípus / kis szériás / egyedi precíziós gyártás** *(a mai „Prototípusgyártás", jkv. 291–292)*
  - **KIVÉTELEK:** **3D-méréstechnika** kikerül a szolgáltatások közül („nem szolgáltatásotok",
    jkv. 289–290) — de a mérőszoba a Gyártás oldalon marad. **Összeszerelés**: a jkv. nem említi
    külön; ❓ maradjon, vagy olvadjon be a lakatos munkába?
  - → **❓-E:** erősítsd meg a **végleges szolgáltatás-listát és sorrendet** (a fenti 12-ből melyik
    kell, van-e összevonás). 📧 A szolgáltatásonkénti **leírásokat és spec-eket** te küldöd (jkv. 578).

### 1.7 Anyagok blokk a főoldalon?

- **F-20 ❓ NEM kerül anyagblokk a főoldalra.** A megbeszélés elején felmerült egy anyag-blokk a
  főoldalra (acél/alu/réz/műanyag), de később egyértelműen úgy döntöttetek, hogy **az anyagok az
  Anyagok/Gyártás oldalra kerülnek, a főoldalra nem** (jkv. 615–616). → CC **nem tesz** anyag-blokkot
  a főoldalra. *(Ha mégis kell, jelezd.)*

### 1.8 Alsó „kulcsszámok" (sötét sáv)

- **F-21 🔨 Számok frissítése** (jkv. 319–345):
  - **1953** (Alapítva) — **marad** (jkv. 319).
  - **70+** (Év) — **marad** (jkv. 320).
  - **40** — CNC-esztergagép — marad/kell (jkv. 320).
  - **6** — Megmunkálóközpont — marad (jkv. 326).
  - Darab/megrendelés: **500–100K → „1 – 400 000"**, teljes számmal kiírva (nem „K"/„400K")
    (jkv. 328–333).
  - Tűrés: **±0.01 → ±0.005 mm**, a felirat **„Jellemző tűrés" → csak „Tűrés"** (jkv. 334–345).

### 1.9 Új: Környezetvédelmi / fenntarthatósági szekció

- **F-22 🔨/📧 Új „zöld" szekció** a tanúsítványok környékén (jkv. 346–365). Tartalom:
  - CO₂-lábnyom csökkentés, **2022-től** célként, **2030/2035-ig** terv; hol tartotok most.
  - **Green Steel (zöld acél)** használata; **ólommentes alapanyagok** elhagyása (szinte kész,
    jkv. 359–365).
  - Vizuál: **folyamat-/haladásdiagram** (dinamikus), zöld levél-ikon.
  - 🔨 CC felépíti a szekció **vázát + a diagramot**; 📧 a **számszerű adatokat és a pontos állításokat
    te küldöd** (jkv. 356).

### 1.10 Tanúsítványok (§04)

- **F-23 🔨/📧 Tanúsítványok** (jkv. 366–405):
  - A **4 tanúsítvány marad**: ISO 9001, ISO 14001, VDA 6.3, Knorr-Bremse PSA. **A VDA 6.3 és a PSA
    magyarázószövegét** („folyamataudit, autóipari beszállítói minősítés") **töröljük** (jkv. 368–369).
    → **❓-F** megerősítés.
  - Dátumok: 📧 **ISO 9001** és **ISO 14001** dátumát ellenőrizni/frissíteni kell (talán 2025?,
    jkv. 371–374); **VDA 6.3 → 2024** (jkv. 384–385, következő audit 2029); **PSA dátumot** te adod meg
    (jkv. 389–391).
  - **QS9000**: a jkv. említi, hogy „maradhat" (jkv. 375) — ez a mai oldalon **nincs** a 4 kártya
    között. ❓ Kell külön QS9000 kártya, vagy tévedés volt?
  - **TÜV SÜD logó**: az **ISO 9001** és **ISO 14001** kártyán a mai pajzs+pipa ikon helyére **TÜV SÜD
    logó** (a tanúsító cég), 📧 logót te küldöd (jkv. 394–405).
  - **VDA 6.3** és **PSA** kártyára is **logó** (📧 te küldöd, jkv. 403–405).
  - **Kattintásra PDF**: minden tanúsítvány-kártya nyisson meg egy **PDF-et** új lapon
    (jkv. 376–381). 📧 A **PDF-eket te küldöd** (a VDA-hoz nincs aláírt PDF, oda csak logó, jkv. 382–384).
  - Kapcsolódik: **külön Tanúsítványok oldal** (lásd 6. fejezet).

### 1.11 „Miért a Borela" (§05) — TÖRLÉS

- **F-24 🔨 A teljes „Miért a Borela" szekció törlése** a főoldalról (jkv. 408–409).

### 1.12 Kiszolgált iparágak (§06)

- **F-25 🔨/📧 Átalakítás felsorolás+leírás helyett képekre.** A jelenlegi kártyás, leírásos+meta-s
  forma helyett **csak az iparágak nevei + egy-egy illusztrációs kép** (jkv. 410–433):
  - **Ne legyen „Tier 1"** említés (Tier 2-k vagytok) — sem itt, sem máshol a főoldalon (jkv. 413–414).
  - Iparág-lista (végleges, jkv. 421–428): **Autóipar · Nehézgép / munkagép (haszongépjármű) ·
    Szerszámgép · Vasút · Tömítéstechnika · Általános gépészet**.
    - „Építéstechnika" **ki** (jkv. 424); „Vasút" **új** (jkv. 422–423).
  - Minden iparághoz **kép, márkalogó NÉLKÜL** (nincs Volvo/Ford/Hilti a képen), pl. autóipar → autóipari
    kép, szerszámgép → szerszám kép, általános gépészet → lakatos/hegesztés kép (jkv. 430–433).
    🔨 CC **AI-generált vagy jogtiszta** képeket tesz be; 📧 ha adtok sajátot, azt használjuk.
  - Nincs jobb oldali leírásblokk, nincs kördiagram (elvetve, jkv. 416–419).

### 1.13 Kiemelt projekt (§07) — TÖRLÉS

- **F-26 🔨 A teljes „Kiemelt projekt" szekció törlése** a főoldalról (jkv. 434–437). A `brake.jpg`
  kép megőrzendő, később máshol felhasználható.

### 1.14 GYIK (§08) — MARAD

- **F-27 🔨/📧 A GYIK szekció marad** (AI/SEO miatt fontos, jkv. 438–458). A **konkrét kérdéseket
  később** cseréljük, egy **beszerzői keresési kutatás** alapján, amit **te készítesz** (jkv. 452, 458).
  → Egyelőre a jelenlegi kérdések maradnak helykitöltőként.

### 1.15 Záró CTA (§09)

- **F-28 🔨/📧 CTA finomítás** (jkv. 459–469):
  - **Alszöveg törlése:** a heading alatti mondat (*„Küldje el műszaki rajzait…"*) **ki** — **csak a
    két gomb marad** (jkv. 467–469).
  - A heading megszólítása („Készen áll megbeszélni a projektjét?") **átfogalmazandó** (a „készen áll"
    nem ideális egy beszerzőnek; pl. „Induljunk neki…") — 📧 CC javasol párat, te választasz (jkv. 462–466).

### 1.16 Új: Bemutatkozás (két vezető) a főoldalon

- **F-29 🔨/📧 Vezetői bemutatkozás a főoldalra.** Egy szekció **Bognár Anita** és **Bognár Péter**
  egy-egy **fényképével** (a Rólunk oldalon lévő `anita.jpg` / `peter.jpg`) + **rövid, pár mondatos
  szöveggel** fejenként (jkv. 506–513, 545). Elhelyezés: **nem a hajtás fölé**, hanem lejjebb.
  📧 A rövid bemutatkozó szövegeket ti adjátok (vagy CC-t megírja, ti jóváhagyjátok).

---

## 2. SZOLGÁLTATÁSOK OLDAL (`/services/`)

Fájl: `app/[lang]/services/page.tsx` + `dictionaries/hu.json` → `services`.

- **SZ-01 🔨 Ugyanaz a szolgáltatás-halmaz, mint a főoldalon (F-19), de RÉSZLETEZVE** (jkv. 547–573).
  A főoldalról ide költöznek a **spec-ek** (átmérő, tűrés, munkatér stb.).
- **SZ-02 🔨 Spec-elrendezés megfordítása.** Jelenleg: **címke bal / érték jobb**. Kérés: **a számok
  (értékek) bal oldalra, a címkék (átmérő, tűrés, munkatér…) jobb oldalra** — minden szolgáltatásnál
  (jkv. 204–207).
- **SZ-03 🔨 CNC-esztergálás spec-ek** (jkv. 194–206):
  - Tűrés: **±0.01 → ±0.005 mm**.
  - Átmérő: **1 mm – 160 mm** (jelenleg Ø1–90 mm).
  - **Átmérőjel a szám mögé:** „**1–160 Ø**" formátum (nem „Ø1–160").
  - 📧 Kell még: **YB-tengely / hosszesztergálás** megnevezés és lista, mert a beszerző projektjében
    „hosszesztergált alkatrész" a kulcsszó (jkv. 271–274).
- **SZ-04 🔨 CNC-marás:** munkatér **800×450 → 800×600 mm** (jkv. 277–279). 📧 A marás-lista (mit tudtok)
  tőletek.
- **SZ-05 📧 Hőkezelés:** **nincs leíró szöveg, csak az eljárások felsorolása** (nitrokarburálás,
  cementálás stb.), 📧 a lista tőletek (jkv. 262–264, 280–283).
- **SZ-06 🔨 „Sajtolás" → „Préselés / stancolás"** (jkv. 284–285) — az oldalon is.
- **SZ-07 🔨/📧 Köszörülés** hozzáadása, tűrés **±0.002 mm** (jkv. 335–345, 625).
- **SZ-08 📧 Anyagminőségek/spec-ek** a szolgáltatásokhoz (pl. K100, 51CrV… a kliens listája szerint,
  jkv. 254–257).
- **SZ-09 🔨 „Hogyan működik" szekció — 4 → 6 lépés** (jkv. 579–599):
  1. **Ajánlatkérés** *(a mai „Műszaki rajz átvizsgálása" helyett, jkv. 580)*
  2. **Műszaki dokumentáció feldolgozása** *(jkv. 581, 597)*
  3. **Ajánlatadás** *(jkv. 582)*
  4. **Megrendelés** *(jkv. 591–598)*
  5. **Első minta gyártása** *(FAI, jkv. 596–598)*
  6. **Sorozatgyártás** *(jkv. 596–599)*
  - Alszövegek: 📧 a lépésekhez rövid magyarázat kell (a mai automatikus szövegek nem jók, jkv. 599–607);
    CC javasol, ti jóváhagyjátok.
- **SZ-10 🔨 „Bizalmukat élvezzük" (referenciasáv) törlése a Szolgáltatások oldalról** (jkv. 639).
- **SZ-11 📧 Hero háttérkép** (esztergálás, „szikrázós", menő) — CC AI-generál, ti jóváhagyjátok
  (jkv. 550–560).
- **SZ-12 🔨 Betűtípus/elrendezés** — mint a főoldalon (lásd ❓-B).

---

## 3. GYÁRTÁS / ANYAGOK OLDAL (`/capabilities/`)

Fájl: `app/[lang]/capabilities/page.tsx` + `data/capabilities.ts` + `dictionaries/hu.json` → `capabilities`.

> **❓-G (fontos struktúra-kérdés):** ma **egy** oldal van, „**Gyártás**" néven (a menüben), ami
> tartalmazza az anyagokat, tűréseket, géppark-táblázatot, mérőszobát, tanúsítványokat. A jkv.-ben
> **„Anyagok"** és **„Gyártás"** külön néven bukkan fel. **Két külön menüpontot/oldalt akartok
> (Anyagok külön + Gyártás külön), vagy maradjon egy „Gyártás" oldal az alábbi szekciókkal?**
> A lenti feladatokat a jkv. tartalma szerint gyűjtöttem; a hovatartozás a válaszod szerint dől el.

### 3.1 „Anyagok" rész (jkv. 610–640)

- **GY-01 🔨/📧 Anyaglista bővítése.** Ma: Acél · Alumínium · Rozsdamentes acél · Sárgaréz+rézötvözet ·
  Öntöttvas. Változás:
  - **Rozsdamentes acél → „Rozsdamentes / saválló acél"** (jkv. 612–614).
  - **Réz** önálló tételként (ma csak sárgaréz+rézötvözet).
  - **Műanyag** hozzáadása (ma hiányzik).
  - 📧 Az **acélból ~400 fajta**, és a többi anyagnál is a **részletes fajták/minőségek** listája
    tőletek (jkv. 611–612).
- **GY-02 🔨 Tűrések frissítése** (jkv. 617–632):
  - CNC-esztergálás **standard ±0.01 / precíziós ±0.005 mm** *(ma std ±0.05 / prec ±0.01)*.
  - CNC-marás **standard ±0.01 / precíziós ±0.005 mm** *(ma std ±0.05 / prec ±0.01)*.
  - **Köszörülés ±0.002 mm** *(új sor)*.
  - **Felületi érdesség:** a mai `Ra 0,8–3,2 μm` bővítése — kell **Rz** (és `Rmax`) is (jkv. 626–627).
    📧 pontos lista tőletek.
  - **Menettűrés:** 6H/6g marad; megjegyzés: menet köszörülhető is (jkv. 628–631).
- **GY-03 🔨 Tanúsítványok az oldalon: csak ISO 9001 + ISO 14001.** A **VDA 6.3-at és a CMM-et
  innen kivesszük** (jkv. 633–638). *(A VDA/PSA a főoldali és a külön tanúsítvány-oldalon marad.)*

### 3.2 „Gyártás" rész (jkv. 645–683)

- **GY-04 🔨 Géppark-táblázat törlése/egyszerűsítése.** A gépek egyenkénti/kategóriánkénti felsorolása
  **nem kell** („a beszerző nem érti", jkv. 676–677). Helyette a hangsúly a videón + mérőszobán.
- **GY-05 📧 Megmunkálóközpont-videó.** A hajtás feletti területre egy **rövid videó** a
  megmunkálóközpontról (GoPro/akciókamera a munkatérben), jkv. 647–681. 📧 **A videót ti készítitek**
  (előbb kameravásárlás) — CC helykitöltő videó-keretet tesz be.
- **GY-06 🔨 Mérőszoba szekció marad** (jkv. 662, 677). *(A mérőszoba `measuring.jpg` képén jogi
  kockázat van — Zeiss EXIF-copyright —, ezt launch előtt le kell cserélni; lásd V-06.)*
- **GY-07 🔨 Gyártásterület: 5 000 m² (ma „5,000 m²") → 2 600 m²** (jkv. 682–683).
- **GY-08 🔨 Szériák megjelenítése** (mekkora sorozatokat vállaltok) (jkv. 646).
- **GY-09 🔨 A jó videó a főoldalra is** kikerülhet (jkv. 663, 679–681).

---

## 4. IPARÁGAK OLDAL (`/industries/`) — TÖRLÉS

- **IP-01 ❓/🔨 A teljes Iparágak menüpont + oldal törlése** (jkv. 642–644: „a komplett iparágak
  menüpont az kuka"). A főoldali iparág-szekció (F-25) **marad** (képekkel). → **❓-H:** megerősítés,
  hogy a `/industries/` **oldal és a fejléc-/footer-menüpont is törlődik**, és a tartalom csak a
  főoldalon él tovább. *(A menü ekkor: Szolgáltatások · Gyártás[/Anyagok] · [Pályázatok] · Rólunk ·
  Karrier · Kapcsolat.)*

---

## 5. RÓLUNK OLDAL (`/about/`)

- **R-01 🔨 Telephelyekről nem beszélünk.** Izsákot és a több telephelyet **nem említjük** sehol
  (jkv. 483–485). A Rólunk oldali történet/telephely-utalásokat ennek megfelelően tisztítjuk.
- **R-02 ❓ Alapító neve.** Az idővonal ma **„Bognár Lajos"**-t ír alapítóként, a vezetők-intro
  **„Bognár Rezső / Béla"**-t említ. **❓-I:** mi a helyes alapító-név és a helyes családi felállás?
  (A jkv. csak „a nagypapa"-ként hivatkozik rá, a pontos nevet ti adjátok.)
- **R-03 ❓ Alapítás éve a történetben.** A történet **1953**-at (örökség) és **1990**-et (jogi
  megalakulás) is tartalmaz. A jkv. szerint a Rólunk **történetben az 1953 maradhat** (jkv. 319, 484).
  Összefügg a **❓-C** dátumdöntéssel — kérlek ott döntsd el az egységes elbeszélést.
- **R-04 🔨 Vezetői fotók a főoldalra is** (lásd F-29) — a Rólunk oldalon maradnak.

---

## 6. FOOTER + KÜLÖN TANÚSÍTVÁNY-OLDAL

Fájl: `components/layout/Footer.tsx` + `data/site.ts` (CONTACT) + `dictionaries/hu.json` → `shared/footer`.

- **FO-01 ❓ E-mail cím.** A footer jelenlegi e-mailje **`rfq@borela.eu`**. A jkv. szerint a
  kapcsolatfelvételi e-mail **`postmaster@borela.hu`** legyen (jkv. 481). ⚠️ Ez **`.hu`**, miközben az
  egész site `.eu`-t használ. **❓-J:** tényleg **`postmaster@borela.hu`** kerüljön a footerbe, és a
  többi `rfq@borela.eu` marad — vagy egységes domaint akartok?
- **FO-02 📧 Telefonszám.** A jelenlegi **+36 76 569 122** vezetékesét senki nem veszi fel; **angolul
  tudó személy mobil- vagy új vezetékes száma** kell (jkv. 471–480). 📧 **A számot ti adjátok** (még
  nincs meg).
- **FO-03 🔨 Postai cím csere.** A footer címe **„Garai u. 6., 6070 Izsák"** → **„6078 Jakabszállás,
  Dózsa György út 55."** (jkv. 486–488). Izsák **nem** jelenik meg.
- **FO-04 🔨 „Telephelyek" oszlop törlése** a footerből (nem beszélünk telephelyekről, jkv. 483–489).
- **FO-05 🔨 Footer-menü két oszlopba** rendezve, a teljes menü felsorolva (jkv. 489, 502–505).
- **FO-06 🔨 Jogi/PDF linkek a footerben** (jkv. 489–501): **Integrált politika** (marad),
  **Adatkezelési tájékoztató / GDPR** (marad), **Energetikai szakreferens riport** (marad), + új
  **„Tanúsítványaink"** link → a külön tanúsítvány-oldalra (lásd TAN-01).
- **FO-07 🔨 Footer-menü címke:** a footerben ma „Gyártási kompetenciák", a fejlécben „Gyártás" —
  **egységesítjük** a ❓-G szerinti végleges névre.

### Külön Tanúsítványok oldal

- **TAN-01 🔨/📧 Új, dedikált Tanúsítványok oldal**, ahol az összes tanúsítvány + a **PDF-ek**
  fel vannak sorolva és megnyithatók (jkv. 498–501). A footer „Tanúsítványaink" linkje ide mutat.
  📧 A PDF-ek és logók tőletek (lásd F-23).

---

## 7. NYELVVÁLTÓ

- **NY-01 🔨 Zászlók eltávolítása** a nyelvváltóból (jkv. 543: „a zászlónak ne legyen"). *(A jelenlegi
  nyelvváltó szöveges EN/DE/HU — ha nincs benne zászló, ez a pont tárgytalan; ellenőrzöm.)*
- **NY-02 🔨 A német (DE) verzió kell** — ez már megvan (jkv. 538–539). 📧 A **német oldal
  Kapcsolat-blokkjához Bálint száma** (jkv. 541) — tőletek.

---

## ❓ TISZTÁZÓ KÉRDÉSEK (kérlek ezekre válaszolj)

- **❓-A (F-01):** ✅ MEGVÁLASZOLVA — a pontok **eltűnnek**. (kész)
- **❓-B (G-02, F-17, SZ-12):** ✅ MEGVÁLASZOLVA — **globálisan JetBrains Mono** az egész oldalon
  (a hero cím 800/ExtraBold). Lásd G-02.
- **❓-C (F-03, F-06, F-21, R-03):** ✅ MEGVÁLASZOLVA — **mindenhol 1990** (70+ → 36). Főoldal kész;
  Rólunk oldal az R-02/R-03-nál.
- **❓-D (F-07):** ✅ MEGVÁLASZOLVA — a fotósáv **marad**.
- **❓-E (F-19, SZ-01):** A **végleges szolgáltatás-lista és sorrend** (a 12 összegyűjtött tételből),
  van-e összevonás (pl. Összeszerelés a Lakatos munkába)?
- **❓-F (F-23):** A **VDA 6.3 és a PSA** a főoldali tanúsítványoknál **marad** (csak a magyarázószöveg
  tűnik el) — jó így?
- **❓-G (3. fejezet):** **„Anyagok" és „Gyártás" — egy oldal vagy kettő?**
- **❓-H (IP-01):** Az **Iparágak oldal + menüpont teljes törlése** (a tartalom csak a főoldalon marad) — jó?
- **❓-I (R-02):** A **helyes alapító-név** és családi felállás (Lajos? Rezső? Béla?).
- **❓-J (FO-01):** A footer e-mail **`postmaster@borela.hu`** legyen (`.hu`!), a többi `.eu` marad?
- **❓-K (F-23):** Kell-e külön **QS9000** tanúsítványkártya, vagy az tévedés volt?

---

## 📧 KLIENS-INPUT (amit tőletek várok — praktikus „email-lista")

A megbeszélésen több ponton jelezted, hogy ezeket emailben küldöd. Összegyűjtve:

1. **Referenciák/vevők:** végleges vevőlista + **átlátszó PNG logók** (DewertOkin, Rubel/Robel, Ceka
   fűrész, Keller, + a többi) — a „Bizalmukat élvezzük" sávhoz és a világtérképhez. *(F-08, F-09, F-13)*
2. **Világtérkép km-adatok:** éves darabszám + kontinensenkénti (Japán, Kína, EU…) éves szállítási
   mennyiség. *(F-14)*
3. **Szolgáltatások:** szolgáltatásonkénti **leírás + spec-ek** (esztergálás: YB-tengely,
   hosszesztergálás; marás; **hőkezelési eljárások listája**; **anyagminőségek**). *(F-19, SZ-03…08)*
4. **Anyagok:** acél ~400 fajta + alu / rozsdamentes-saválló / réz / műanyag részletes fajták és
   anyagminőségek (K100, 51CrV…). *(GY-01)*
5. **Tűrés-részletek:** felületi érdesség (Ra/Rz/Rmax) lista, menettűrés részletek. *(GY-02)*
6. **Tanúsítványok:** friss **dátumok** (ISO 9001, ISO 14001, PSA), **PDF-ek** minden tanúsítványhoz,
   **logók** (TÜV SÜD, VDA 6.3, PSA). *(F-23, TAN-01)*
7. **Zöld/fenntarthatóság:** CO₂-adatok, Green Steel, ólommentesítés státusza, 2022→2030 számszerű
   célok. *(F-22)*
8. **GYIK:** a beszerzői keresési kutatás eredménye (milyen kérdések kerüljenek ki). *(F-27)*
9. **Telefonszám(ok):** angolul tudó kapcsolattartó száma a footerhez; **Bálint** száma a német
   oldalhoz. *(FO-02, NY-02)*
10. **Videó:** megmunkálóközpont-videó (később, kamera után). *(GY-05)*
11. **Képek (opcionális):** ha van saját, jogtiszta fotótok hero-háttérhez / iparág-képekhez /
    szolgáltatás-ikonokhoz — különben CC AI-val generál. *(F-05, F-25, SZ-11)*

---

## Végrehajtási megjegyzés (CC)

A fenti tételek közül **több tucat 🔨 azonnal végrehajtható** a te válaszaid után is (törlések,
átnevezések, szám- és elrendezés-módosítások, új szekció-vázak). A 📧 tételekhez **helykitöltőt**
teszek be, hogy az oldal közben is konzisztens és build-elhető maradjon (a projekt szabálya szerint a
meg nem erősített adat **látható placeholderként** jelenik meg, nem kitalált értékként). A launch előtt
külön ellenőrzendő technikai adósságok (a jelenlegi kódból): **V-06** a `measuring.jpg` Zeiss-EXIF
cseréje; a szolgáltatás-spec és a „Since {év}" jelenleg angolul renderelődik a HU oldalon (lokalizációs
hiba, a nagy átalakítással együtt javul).
