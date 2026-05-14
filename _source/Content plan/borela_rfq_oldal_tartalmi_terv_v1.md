# Borela Bt. — Ajánlatkérő oldal (RFQ): tartalmi és UX-terv

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Státusz:** Fázis 1 kiegészítés — a `borela_uj_tartalmi_struktura_v1-1.md` 7. fejezetének részletes kibontása, a Design fázis bemenetének.
**Kapcsolódás:** ez a dokumentum a fő struktúra-terv **7. fejezetét** (RFQ űrlap) bontja ki teljes oldaltervvé, és felhasználja a **2.2** (buyer journey), **13** (Google Ads landing oldalak), valamint a **17.M / 17.N** kritikai pontok megállapításait. A vizuális nyelv a `frontpage_borela.png` mockupból származik.

---

## 1. Miért külön dokumentum, és mi az oldal szerepe

A fő struktúra-terv az RFQ-t a **site #1 konverziós elemeként** nevezi meg, de csak az űrlapmezőket sorolja fel. Az ajánlatkérő oldal azonban nem „egy űrlap egy oldalon", hanem a buyer journey **3. fázisának** (akció) teljes színpada — itt dől el, hogy a validációs fázison átjutott beszerző valóban elindít-e egy ajánlatkérést, vagy az utolsó pillanatban meggondolja magát.

Az oldal ezért két dolgot csinál egyszerre:

1. **Súrlódásmentes űrlap** — a beszerző 60 másodperc alatt el tud indítani egy érdemi, rajz-csatolmányos ajánlatkérést.
2. **Az utolsó kételyek eloszlatása** — „milyen gyorsan kapok választ?", „biztonságban van a rajzom?", „mi történik a beküldés után?", „kivel fogok beszélni?". Ha ezekre az oldalon nincs válasz, a beszerző bezárja a fület.

A két feladatot a layout választja szét: **bal oldalon az űrlap, jobb oldalon egy megnyugtató panel.** Az oldalon **egyetlen fő CTA** van — maga az űrlap elküldése —, nincs versengő másodlagos cél.

---

## 2. URL, meta, alapadatok

### 2.1 URL-ek

| Nyelv | URL |
|---|---|
| EN (alapértelmezett) | `https://borela.eu/rfq/` |
| DE | `https://borela.eu/de/angebot-anfordern/` |
| HU | `https://borela.eu/hu/ajanlatkeres/` |

A köszönőoldal külön URL-en (lásd 8. fejezet): `/rfq/sent/`, `/de/angebot-anfordern/gesendet/`, `/hu/ajanlatkeres/elkuldve/`.

### 2.2 Indexelés és SEO-prioritás

Az `/rfq/` oldal **indexelhető marad** (van rá tranzakciós keresési szándék: „request CNC machining quote", „CNC Angebot anfordern"), de a sitemapben **alacsony prioritással** szerepel — nem ez egy pillar oldal, a SEO-erőt a szolgáltatási oldalak viszik. A köszönőoldal `noindex`.

### 2.3 Elsődleges kulcsszó (tranzakciós szándék, nem fő SEO-cél)

- **EN:** *request a CNC machining quote* / *get a quote for machined parts*
- **DE:** *CNC-Angebot anfordern* / *Angebot Zerspanung anfordern*
- **HU:** *CNC árajánlat kérés* / *ajánlatkérés forgácsolt alkatrészre*

### 2.4 H1

A frontpage nagy, vastag, verzál H1-eket használ; a hosszabb mondandót az alcím viszi. Javaslat (elsődleges), zárójelben alternatíva:

- **EN:** *REQUEST A QUOTE* — *(alt: SEND US YOUR DRAWING.)*
- **DE:** *ANGEBOT ANFORDERN* — *(alt: SCHICKEN SIE UNS IHRE ZEICHNUNG.)*
- **HU:** *AJÁNLATKÉRÉS* — *(alt: KÜLDJE EL A RAJZÁT.)*

**Alcím (a H1 alatt, kb. 20 szó):**

- **EN:** *Upload your drawing and get a meaningful answer within two business days — reviewed by an engineer, not an auto-responder.*
- **DE:** *Laden Sie Ihre Zeichnung hoch und erhalten Sie innerhalb von zwei Werktagen eine fundierte Antwort — geprüft von einem Ingenieur, nicht von einem Autoresponder.*
- **HU:** *Töltse fel a rajzát, és két munkanapon belül érdemi választ kap — mérnök nézi át, nem automata válaszüzenet.*

### 2.5 Meta title (60 karakter alatt)

- **EN:** *Request a Quote — Upload Your Drawing | Borela*
- **DE:** *Angebot anfordern — Zeichnung hochladen | Borela*
- **HU:** *Ajánlatkérés — Töltse fel a rajzát | Borela*

### 2.6 Meta description (155 karakter alatt)

- **EN:** *Get a quote for precision CNC turned & milled parts. Upload STEP/PDF drawings, optional NDA first. Engineer reply within 2 business days. ISO 9001 / VDA 6.3.*
- **DE:** *Angebot für CNC-Dreh- und Frästeile anfordern. STEP/PDF hochladen, NDA auf Wunsch zuerst. Antwort vom Ingenieur in 2 Werktagen. ISO 9001 / VDA 6.3.*
- **HU:** *Kérjen ajánlatot precíziós CNC esztergált és mart alkatrészre. STEP/PDF feltöltés, igény szerint NDA előbb. Mérnöki válasz 2 munkanapon belül.*

### 2.7 hreflang

A teljes hreflang-blokk a `<head>`-be (a fő terv 3.3 szerint), az `x-default` az angol verzió:

```html
<link rel="alternate" hreflang="en" href="https://borela.eu/rfq/" />
<link rel="alternate" hreflang="de" href="https://borela.eu/de/angebot-anfordern/" />
<link rel="alternate" hreflang="hu" href="https://borela.eu/hu/ajanlatkeres/" />
<link rel="alternate" hreflang="x-default" href="https://borela.eu/rfq/" />
```

### 2.8 Schema.org

`ContactPage` + `BreadcrumbList`. A köszönőoldalra nem kell schema (noindex). Részletek a 10. fejezetben.

---

## 3. Oldalstruktúra — szekciók sorrendben

A fejléc és a lábléc megegyezik a site többi oldalával (a fejlécben a kiemelt „Request a Quote" gomb itt értelemszerűen aktív/kiemelt állapotú). A tartalmi rész:

| # | Szekció | Háttér | Funkció |
|---|---|---|---|
| 1 | Oldal-hero | krém | Bracket-címke, H1, alcím, vékony bizalmi sáv |
| 2 | Fő tartalom — kétoszlopos | krém | **Bal:** az űrlap. **Jobb:** megnyugtató panel (sötét blokk, sticky) |
| 3 | „Mit készítsen elő" segéd-sáv | világos bézs | A gyors ajánlathoz szükséges adatok rövid checklistája |
| 4 | Bizalmi sáv — tanúsítványok + referenciák | krém | Az utolsó social proof a beküldés előtt |
| 5 | RFQ-specifikus mini-FAQ | krém | 3–4 kérdés kifejezetten az ajánlatkérési folyamatról |
| 6 | Lábléc | — | A site standard lábléce |

> **Design-megjegyzés:** a jobb oldali megnyugtató panel a frontpage **sötét statisztika-szekciójának** vizuális nyelvét vigye tovább (közel fekete háttér, fehér szöveg) — így a krém hátterű űrlap kontrasztosan „kiugrik", és a panel maga is súlyt, komolyságot sugároz. A panelben a folyamatlépések a frontpage **„Why Borela" számozott (01–04) listájának** stílusát kövessék.

### 3.1 Oldal-hero

- **Bracket-címke** (monospace, a frontpage stílusában): `[ 09 — REQUEST A QUOTE ]` / `[ 09 — ANGEBOT ANFORDERN ]` / `[ 09 — AJÁNLATKÉRÉS ]`
- **H1** (lásd 2.4)
- **Alcím** (lásd 2.4)
- **Vékony bizalmi sáv** közvetlenül az alcím alatt — három apró, ikonos állítás egy sorban, semmi több:
  - *Reply within 2 business days* / *Antwort in 2 Werktagen* / *Válasz 2 munkanapon belül*
  - *NDA available before you upload* / *NDA vor dem Upload möglich* / *Igény szerint NDA a feltöltés előtt*
  - *ISO 9001 · VDA 6.3 audited* / *ISO 9001 · VDA 6.3 auditiert* / *ISO 9001 · VDA 6.3 auditált*
- **Itt nincs CTA-gomb** — a CTA maga az alatta lévő űrlap. A hero feladata csak az, hogy a beszerző azonnal lássa: jó helyen jár, és ez gyors lesz.

### 3.2 Fő tartalom — kétoszlopos elrendezés

Desktopon kb. 60/40 arányú két oszlop, a jobb oszlop **sticky** (görgetéskor követ), hogy a megnyugtató tartalom mindig látható maradjon az űrlap kitöltése közben.

- **Bal oszlop:** a négyblokkos űrlap (lásd 4. fejezet).
- **Jobb oszlop:** a megnyugtató panel (lásd 5. fejezet).

Mobilon a két oszlop egymás alá kerül: **előbb az űrlap, alatta a panel** — a panel kulcselemei (válaszidő, NDA-biztosíték) azonban a hero bizalmi sávjában már egyszer megjelentek, így a mobilfelhasználó nem marad nélkülük, ha nem görget végig.

### 3.3 „Mit készítsen elő" segéd-sáv

Egy keskeny, világos bézs sáv az űrlap-szekció után — gyakorlatias microcopy, ami felgyorsítja az ajánlatadást. Spec-stílusú, rövid:

> **EN — *For the fastest quote, have these ready:*** 2D drawing with tolerances · material specification · batch size per release · estimated annual volume.
> **DE — *Für ein schnelles Angebot bereithalten:*** 2D-Zeichnung mit Toleranzen · Werkstoffangabe · Losgröße pro Abruf · geplante Jahresmenge.
> **HU — *A gyors ajánlathoz készítse elő:*** 2D rajz tűrésekkel · anyagspecifikáció · sorozatméret leadásonként · tervezett éves mennyiség.

Ez a sáv elhagyható, ha a Design fázis úgy ítéli, hogy az oldal túl hosszú lesz — de értékes, mert a hiányos ajánlatkérés a backend oldalon plusz egyeztetési kört jelent.

### 3.4 Bizalmi sáv — tanúsítványok + referenciák

Ugyanaz a vizuális kezelés, mint a frontpage **tanúsítvány-kártyáin** (pipa-ikon + cím + rövid magyarázat), plusz egy **szöveges** referencialista. **Fontos:** a fő terv 17.2 (A) kritikai pontja szerint a partnerlogók jogilag kockázatosak — ezen az oldalon is **szöveges említést** használunk, logók nélkül:

- Tanúsítványok: ISO 9001, ISO 14001, VDA 6.3 audit, Knorr-Bremse Product Safety Audit.
- Referenciák szövegesen: *„Supplier to Knorr-Bremse, Mercedes-Benz Manufacturing Hungary, Hilti, Freudenberg, Sulzer and Phoenix Mecano."*

Ez a sáv tudatosan **az űrlap alatt / mellett** van — a beszerző a kitöltés közbeni „megéri ezeknek írni?" pillanatban találkozik vele.

### 3.5 RFQ-specifikus mini-FAQ

A frontpage **accordion-stílusú** FAQ-blokkja, de kifejezetten az ajánlatkérési folyamatra szabva (a szolgáltatási kérdések a szolgáltatási oldalakon vannak). 3–4 kérdés — lásd a teljes szöveget a 6. fejezetben.

---

## 4. Az űrlap részletes terve

Négy blokk, fejléccel elválasztva, **egyetlen oldalon** (nincs többlépcsős wizard). Minden blokkhoz: a frontpage spec-stílusú, letisztult mezőkezelése — vékony keret, világos mezőháttér, jól látható, de nem hivalkodó címkék.

### Blokk 1 — Kapcsolat

| Mező | Típus | Kötelező | EN címke | DE címke | HU címke |
|---|---|---|---|---|---|
| Név | szöveg | ✓ | Full name | Name | Teljes név |
| Cég | szöveg | ✓ | Company name | Firmenname | Cégnév |
| Ország | legördülő | ✓ | Country | Land | Ország |
| Üzleti email | email | ✓ | Business email | Geschäftliche E-Mail | Üzleti email |
| Telefonszám | tel | — | Phone number | Telefonnummer | Telefonszám |

- **Ország:** legördülő, EU-tagállamok előre rendezve, a végén „Other / Sonstige / Egyéb". Ha „Other", egy szabad szöveges mező jelenik meg alatta.
- **Üzleti email validáció:** valós email-formátum; a szabad webmailes címeket (gmail, stb.) **nem tiltjuk**, de a helper szöveg kéri az üzleti címet: *„Please use your work email so we can verify your company."* / *„Bitte Ihre geschäftliche Adresse — so können wir Ihr Unternehmen zuordnen."* / *„Kérjük a céges címét — így be tudjuk azonosítani a vállalkozását."*

### Blokk 2 — A projekt

| Mező | Típus | Kötelező | EN címke | DE címke | HU címke |
|---|---|---|---|---|---|
| Alkatrész / projektazonosító | szöveg | ✓ | Part name or project reference | Bauteilbezeichnung / Projekt-Nr. | Alkatrész neve / projektazonosító |
| Iparág | legördülő | — | Industry | Branche | Iparág |
| Sorozatméret leadásonként | legördülő | ✓ | Batch size per release | Losgröße pro Abruf | Sorozatméret leadásonként |
| Tervezett éves mennyiség | szám | — | Estimated annual volume | Geplante Jahresmenge | Tervezett éves mennyiség |
| Első szállítás céldátuma | dátum | — | Target date for first delivery | Gewünschter Erst-Liefertermin | Első szállítás céldátuma |
| Szükséges szolgáltatások | checkbox-csoport | ✓ (min. 1) | Services required | Benötigte Leistungen | Szükséges szolgáltatások |

**Iparág legördülő opciói** (a fő terv 2. iparág-fejezete szerint): Automotive · Commercial vehicles & braking systems · Power tools · Sealing technology · General mechanical engineering · Other.

**Sorozatméret legördülő opciói:** 500–5 000 · 5 000–25 000 · 25 000–100 000 · >100 000 · Prototype / one-off.

**Szükséges szolgáltatások checkboxok** (a fő terv 5.2 szolgáltatáslistája szerint):
CNC turning · CNC milling · Press work · Heat treatment *(coordinated via partner)* · Assembly · 3D measurement · Welding (TIG).

> **Feltételes microcopy — hőkezelés:** ha a beszerző bejelöli a *Heat treatment* checkboxot, közvetlenül alatta jelenjen meg egy halk, magyarázó sor (nem hibaüzenet):
> *EN:* „Heat treatment is coordinated via our certified partner — expect roughly 1–2 weeks of additional lead time. Tell us the process in the message field if you know it."
> *DE:* „Die Wärmebehandlung koordinieren wir über unseren zertifizierten Partner — rechnen Sie mit ca. 1–2 Wochen zusätzlicher Lieferzeit. Geben Sie das Verfahren im Nachrichtenfeld an, falls bekannt."
> *HU:* „A hőkezelést tanúsított partnerünkkel koordináljuk — kb. 1–2 hét plusz átfutási idővel számoljon. Ha tudja az eljárást, írja be az üzenet mezőbe."
> Ez egyszerre kezeli a fő terv hőkezelés-átpozicionálását (kiszervezett szolgáltatás) és előre tisztázza az elvárást — nem éri meglepetésként a beszerzőt.

### Blokk 3 — Rajz / műszaki dokumentáció

| Elem | Típus | Kötelező | Megjegyzés |
|---|---|---|---|
| Fájlfeltöltés | drag-and-drop + fájlválasztó | — (lásd lent) | STEP, IGES, PDF, ZIP — max. 50 MB |
| NDA-kérés | checkbox | — | Ha bejelöli: NDA előbb, rajz csak aláírás után |

- **A fájlfeltöltés nem kötelező mező.** Egy beszerző indíthat ajánlatkérést rajz nélkül is (pl. előbb NDA-t kér), és az utánkövető email kéri be a rajzot. A kötelezővé tétel feleslegesen kieső leadeket okoz.
- **Feltöltési zóna szövege:**
  *EN:* „Drag & drop your files here, or browse — STEP, IGES, PDF or ZIP, up to 50 MB."
  *DE:* „Dateien hierher ziehen oder auswählen — STEP, IGES, PDF oder ZIP, bis 50 MB."
  *HU:* „Húzza ide a fájljait, vagy tallózzon — STEP, IGES, PDF vagy ZIP, max. 50 MB."
- **Progress bar** a feltöltés alatt; sikeres feltöltésnél fájlnév + méret + törlés ikon.
- **NDA-checkbox szövege:**
  *EN:* „Please send me a mutual NDA before I upload any drawings."
  *DE:* „Bitte senden Sie mir zuerst eine gegenseitige Geheimhaltungsvereinbarung (NDA), bevor ich Zeichnungen hochlade."
  *HU:* „Kérem, küldjenek először kölcsönös titoktartási megállapodást (NDA), mielőtt rajzot töltök fel."
- **Feltételes viselkedés — NDA bejelölve:** a feltöltési zóna nem tűnik el, de fölé kerül egy magyarázó sor:
  *EN:* „We'll email you a mutual NDA first. You can submit this request now without files — we'll request the drawings once the NDA is signed. You may still attach non-confidential files (e.g. a general inquiry PDF)."
  *DE / HU:* ennek a fordítása.

> **Mobil-kezelés (a fő terv 17.M kritikai pontja):** mobilnézetben a drag-and-drop zóna helyett / mellett ez a szöveg jelenjen meg, mert a beszerző jellemzően nem mobilról tölt fel STEP-fájlt:
> *EN:* „Uploading CAD files works best from a desktop. You can submit this request now from your phone — we'll reply with a secure upload link, or you can email drawings to rfq@borela.eu after first contact."
> *DE:* „Das Hochladen von CAD-Dateien funktioniert am Desktop am besten. Sie können die Anfrage jetzt vom Handy senden — wir antworten mit einem sicheren Upload-Link, oder Sie schicken die Zeichnungen nach dem Erstkontakt an rfq@borela.eu."
> *HU:* „A CAD-fájlok feltöltése asztali gépről a legegyszerűbb. Az ajánlatkérést most telefonról is elküldheti — biztonságos feltöltési linkkel válaszolunk, vagy az első kapcsolatfelvétel után emailben is küldheti a rajzokat a rfq@borela.eu címre."
> Egy egyszerű fájlválasztó PDF-hez mobilon is maradjon elérhető.

### Blokk 4 — Egyéb

| Mező | Típus | Kötelező | EN címke | DE címke | HU címke |
|---|---|---|---|---|---|
| Üzenet / megjegyzés | szabad szöveg | — | Message / notes | Nachricht / Anmerkungen | Üzenet / megjegyzés |
| Adatvédelmi hozzájárulás | checkbox | ✓ | Data protection consent | Datenschutzeinwilligung | Adatvédelmi hozzájárulás |

- **Üzenet helper:** *EN:* „Anything else we should know — surface treatment, special inspection, packaging, target price." / *DE:* „Was wir sonst noch wissen sollten — Oberflächenbehandlung, Sonderprüfungen, Verpackung, Zielpreis." / *HU:* „Bármi egyéb, amit tudnunk kell — felületkezelés, speciális bevizsgálás, csomagolás, célár."
- **Adatvédelmi hozzájárulás:** rövid szöveg + link az Adatvédelmi tájékoztatóra (PDF). *EN:* „I agree that Borela may store and process my data to handle this request. See our privacy notice." A német verzióban a DSGVO-konform megfogalmazás kötelező.

### Küldés gomb

A frontpage kék elsődleges gombja, teljes szélességben a 4. blokk alatt:

- **EN:** *Request a Quote*
- **DE:** *Angebot anfordern*
- **HU:** *Ajánlatkérés elküldése*

A gomb alatt egy halk megerősítő sor: *EN:* „You'll get an automatic confirmation email, then an engineer's reply within 2 business days." / *DE:* „Sie erhalten eine automatische Bestätigungs-E-Mail, danach innerhalb von 2 Werktagen die Antwort eines Ingenieurs." / *HU:* „Automatikus visszaigazoló emailt kap, majd 2 munkanapon belül egy mérnök válaszát."

---

## 5. A megnyugtató panel (jobb oszlop) tartalma

Sötét (közel fekete) blokk, fehér szöveggel — a frontpage sötét statisztika-szekciójának nyelvén. Sticky. Négy tartalmi egység, fentről lefelé:

### 5.1 „Mi történik a beküldés után" — számozott folyamat

A frontpage **01–04 számozott** listájának stílusában:

| # | EN | DE | HU |
|---|---|---|---|
| 01 | **Receipt confirmed.** An automatic email with your reference number lands immediately. | **Eingang bestätigt.** Eine automatische E-Mail mit Ihrer Vorgangsnummer kommt sofort. | **Beérkezés visszaigazolva.** Azonnal kap egy automatikus emailt az ügyszámával. |
| 02 | **Engineering review.** A real engineer checks feasibility and replies within 2 business days. | **Technische Prüfung.** Ein Ingenieur prüft die Machbarkeit und antwortet innerhalb von 2 Werktagen. | **Mérnöki átnézés.** Egy valódi mérnök átnézi a gyárthatóságot, és 2 munkanapon belül válaszol. |
| 03 | **Quote prepared.** A detailed offer follows; parts needing heat treatment include partner coordination. | **Angebot erstellt.** Es folgt ein detailliertes Angebot; bei Teilen mit Wärmebehandlung inkl. Partnerkoordination. | **Ajánlat elkészítése.** Részletes ajánlat következik; a hőkezelést igénylő alkatrészeknél a partnerkoordinációval együtt. |
| 04 | **Sample, then series.** First article inspection, then series production of 500–100,000 pieces. | **Muster, dann Serie.** Erstmusterprüfung, danach Serienfertigung von 500–100.000 Stück. | **Minta, majd sorozat.** Első mintadarab bevizsgálás, majd 500–100 000 db sorozatgyártás. |

### 5.2 Válaszidő — kiemelt blokk

Egy nagy, a sötét szekció statisztika-számainak stílusában szedett kiemelés:

> **2 business days** / **2 Werktage** / **2 munkanap**
> *EN:* „...is our target for a real engineer's reply — not an auto-responder."
> *DE:* „...ist unser Ziel für die Antwort eines echten Ingenieurs — kein Autoresponder."
> *HU:* „...a célunk egy valódi mérnök válaszára — nem automata üzenet."

> **Fontos — konzisztencia (a fő terv 17.N kritikai pontja):** a teljes site-on **„2 munkanap" / „2 business days" / „2 Werktage"** szerepeljen, **nem** „48 óra". A fő struktúra-terv 6.1 (kezdőlap FAQ) és 6.2 (szolgáltatás-főoldal FAQ) blokkjai még „48 hours"-t írnak — ezeket a Design/Code fázisban egységesíteni kell erre az értékre, hogy az ígéret mindenhol ugyanaz legyen.

### 5.3 Az Ön adatai biztonságban — bizalmi blokk

Három rövid pont, ikonnal:

- **NDA on request.** *EN:* „Tick the NDA box and we send a mutual agreement before you upload anything." / *DE:* „NDA-Feld ankreuzen — wir senden eine gegenseitige Vereinbarung vor jedem Upload." / *HU:* „Jelölje be az NDA-mezőt, és bármilyen feltöltés előtt küldünk kölcsönös megállapodást."
- **Encrypted file handling.** *EN:* „Drawings are stored encrypted and shared only with the people working on your quote." / *DE:* „Zeichnungen werden verschlüsselt gespeichert und nur mit den am Angebot beteiligten Personen geteilt." / *HU:* „A rajzokat titkosítva tároljuk, és csak az ajánlaton dolgozó kollégák látják."
- **GDPR-compliant.** *EN:* „We process your data only to handle this request, with a defined retention period." / *DE:* „Wir verarbeiten Ihre Daten ausschließlich zur Bearbeitung dieser Anfrage, mit definierter Aufbewahrungsfrist." / *HU:* „Adatait kizárólag az ajánlatkérés kezelésére dolgozzuk fel, meghatározott megőrzési idővel."

### 5.4 Inkább beszélne valakivel? — alternatív kapcsolat

Nem mindenki szeret űrlapot kitölteni. Egy halk, de jól látható blokk a panel alján:

> *EN:* „Prefer email or a call? Reach our sales team directly:"
> *DE:* „Lieber per E-Mail oder Telefon? Erreichen Sie unser Vertriebsteam direkt:"
> *HU:* „Inkább emailben vagy telefonon? Keresse közvetlenül az értékesítést:"
>
> **rfq@borela.eu** · **+36 76 569 122** · *Languages: EN · DE · HU*

---

## 6. RFQ-specifikus mini-FAQ — teljes szöveg

A frontpage accordion-stílusában, 4 kérdés. Mindhárom nyelven elkészül; itt az EN verzió, a DE és HU egy-az-egyben fordítás (a `FAQPage` schemához a látható szöveggel meg kell egyeznie):

1. **How long does it take to get a quote?**
   *We aim to reply within 2 business days with either a quote, a quote timeline, or specific questions about your drawing. Complex assemblies or parts needing heat treatment may take a few days longer — we'll always tell you upfront.*

2. **Do I have to upload a drawing to get a quote?**
   *No. You can submit the request without files and we'll follow up — but a 2D drawing with tolerances and a material spec lets us give you a far more accurate answer, faster.*

3. **Can I get an NDA before sharing confidential files?**
   *Yes. Tick the NDA box in the form and we'll email you a mutual non-disclosure agreement first. We only ask for your drawings once it's signed.*

4. **What series sizes do you quote?**
   *Our sweet spot is 500 to 100,000 pieces per order. We also quote prototypes as a preparatory stage before series — select "Prototype / one-off" in the batch size field.*

> **Schema-megjegyzés:** ez a blokk `FAQPage` JSON-LD-t is kap (a fő terv 8.4 szerint), a kérdés-válasz párok szó szerint egyeznek a látható tartalommal.

---

## 7. UX és viselkedési elvek

- **Egyetlen oldal, nincs wizard.** A négy blokk egymás alatt, fejléccel elválasztva. A többlépcsős űrlap B2B-ben indokolatlan súrlódás.
- **Inline validáció.** A hibák a mező alatt, a beküldés megkísérlése után jelennek meg, nem felugró ablakban. A kötelező mezők jelölve (`*`).
- **A „60 másodperc" fegyelem.** Csak a fenti mezők. Minden további mező (pl. anyag, felület, célár) az **üzenet** szabad szöveges mezőbe tartozik vagy az utánkövető körbe — lásd a 11. fejezet nyitott kérdését.
- **Feltételes logika** két helyen: hőkezelés-checkbox → magyarázó sor (4.2); NDA-checkbox → módosuló feltöltési zóna (4.3).
- **Drag-and-drop + progress bar** desktopon; mobilon a 4.3 szerinti alternatív szöveg + egyszerű fájlválasztó.
- **NDA-folyamat:** ha bejelölve, a backend **előbb NDA-t küld**, és a rajzot csak az aláírás után kéri be. Ez B2B-ben alap bizalmi lépés.
- **Spam-védelem láthatatlanul.** Honeypot mező és/vagy modern, súrlódásmentes védelem (pl. Cloudflare Turnstile) — **nem** klasszikus, bosszantó CAPTCHA, ami leadet öl.
- **Akadálymentesség:** minden mezőnek látható `<label>`, billentyűzettel bejárható űrlap, a feltöltési zóna fókuszálható és billentyűzetről is kezelhető, megfelelő kontrasztarányok a sötét panelen is.
- **Sebesség:** az oldal ne húzzon be nehéz űrlap-könyvtárat; natív HTML5 mezők + minimális vanilla JS a drag-and-drophoz és a feltételes logikához (összhangban a fő terv 12.1 Core Web Vitals követelményeivel).
- **Az automatikus visszaigazolás emberi hangú.** A megerősítő email ne botüzenet legyen — utaljon rá, hogy egy valódi kolléga fog jelentkezni (a fő terv 7.2 elve).

---

## 8. Köszönőoldal (thank-you page)

**URL-ek:** `/rfq/sent/`, `/de/angebot-anfordern/gesendet/`, `/hu/ajanlatkeres/elkuldve/` — **`noindex`**.

**Tartalmi blokkok:**

1. **Megerősítő H1.** *EN:* „Thank you — we've got your request." / *DE:* „Vielen Dank — Ihre Anfrage ist bei uns." / *HU:* „Köszönjük — megkaptuk az ajánlatkérését."
2. **Visszaigazolás konkrétumokkal.** *EN:* „A confirmation email is on its way to **[email]**. Your reference number is **RFQ-XXXX** — quote it in any follow-up." A `[email]` és a referenciaszám dinamikusan behelyettesítve.
3. **Folyamat-emlékeztető.** Az 5.1 négy lépése tömör formában megismételve.
4. **Válaszidő újra.** *EN:* „An engineer will reply within 2 business days."
5. **Feltételes NDA-sor.** Ha a beszerző NDA-t kért: *EN:* „Because you requested an NDA, we'll send the agreement first — please don't upload drawings until it's signed."
6. **„Addig is" linkek.** Belső linkek a várakozási idő kitöltésére: Capabilities (Géppark, Tűrések), References / Case studies, Blog.
7. **Közvetlen elérhetőség.** *EN:* „Need us sooner? rfq@borela.eu · +36 76 569 122."

**Technikai:** a GA4 konverziós esemény ezen az oldalon tüzel (a fő terv 12.6 szerint a cél-URL `/rfq-sent/` logikája — itt `/rfq/sent/`-re igazítva; a Code fázis egységesítse a tényleges slugot a GA-beállítással).

---

## 9. A kompakt RFQ-űrlap (Ads landing oldalakon)

A fő terv 13. fejezete előírja, hogy minden Google Ads landing page hero-ja alatt jelenjen meg egy **forma-kompakt RFQ**. Ez nem ez az oldal, hanem egy beágyazott komponens — de itt rögzítjük, hogy konzisztens legyen:

- **Mezők (4 db):** Full name · Company name · Business email · Message — plusz a *Request a Quote* gomb. **Nincs fájlfeltöltés** a kompakt verzióban (a 4-mezős fegyelem a lényeg).
- **Hová kerül:** a szolgáltatási cluster oldalak (`/services/cnc-turning/`, `/de/leistungen/cnc-drehen/` stb.) hero-szekciója alá, ahogy a fő terv 13. fejezete megadja.
- **Viselkedés — döntési javaslat:** a kompakt űrlap **közvetlenül elküldhető érvényes leadként** (nem irányít át a teljes `/rfq/`-ra), és az utánkövető mérnöki email kéri be a rajzot. Indok: a kompakt űrlap egész értelme a minimális súrlódás; egy átirányítás a teljes oldalra visszahozza azt a súrlódást, amit el akarunk kerülni. A beérkező lead a backendben „compact RFQ" forrásként jelölve, hogy az értékesítés tudja, rajz még nincs.
- A „teljes" élményt kereső látogatónak a kompakt űrlap alatt egy halk link: *EN:* „Have a drawing ready? Use the full quote form →"

---

## 10. Schema.org és technikai jelölés

**`/rfq/` oldal — `ContactPage` + `BreadcrumbList`:**

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://borela.eu/rfq/#contactpage",
  "name": "Request a Quote — Borela",
  "url": "https://borela.eu/rfq/",
  "inLanguage": "en",
  "isPartOf": { "@id": "https://borela.eu/#website" },
  "about": { "@id": "https://borela.eu/#organization" },
  "description": "Request a quote for precision CNC turning and milling. Upload STEP/IGES/PDF drawings, optional NDA before upload, engineer reply within 2 business days.",
  "breadcrumb": { "@id": "https://borela.eu/rfq/#breadcrumb" }
}
```

- A `FAQPage` JSON-LD az 5.x mini-FAQ blokkhoz külön (a fő terv 8.4 szerint).
- A köszönőoldal: `noindex`, nem kap schema-t.
- Az `Organization` schema `contactPoint`-jában az `rfq@borela.eu` mint `sales` típusú kontakt már szerepel (a fő terv 8.1) — ezzel konzisztens maradjon.
- A `robots.txt` engedi az `/rfq/`-t, és kizárja az `/rfq/sent/` típusú köszönő-URL-eket (összhangban a fő terv 12.3-mal).

---

## 11. Nyitott kérdések a Design fázis indulása előtt

1. **„Anyag" mező — bekerüljön külön mezőként, vagy maradjon az üzenet mezőben?** Az anyag valódi, gyakori ajánlatadási input, de a „60 másodperc / rövid űrlap" elv ellene szól. **Javaslat:** maradjon az üzenet mezőben + a 3.3 segéd-sáv kéri be — de ez tudatos kompromisszum, a Design fázis felülbírálhatja egy opcionális legördülővel (acél / rozsdamentes / alumínium / bronz-réz-sárgaréz / öntvény / műanyag / egyéb).
2. **NDA-sablon készen van-e?** A teljes NDA-folyamat (4.3, 5.3) erre épül. Ez a fő terv 16. fejezet 5. nyitott kérdéséhez is kapcsolódik (publikálható-e a hőkezelő partner neve) — de az NDA-sablon megléte ettől független és előfeltétel.
3. **Email-címek véglegesítése.** Az egész oldal `rfq@borela.eu`-t kommunikál — a fő terv 16. fejezet 6. pontja szerint a `@borela.eu`-ra való átállás még eldöntendő. A Code fázis indulásáig fixálni kell.
4. **Köszönőoldal-slug és GA4 esemény.** A fő terv 12.6 `/rfq-sent/`-et említ, ez a dokumentum `/rfq/sent/`-et — a Code fázis válassza ki az egyiket, és a GA4 konverziós cél ehhez igazodjon.
5. **Referenciaszám-formátum.** Ki és hogyan generálja (RFQ-XXXX)? Backend-kérdés, de a köszönőoldal és a visszaigazoló email szövege épít rá.
6. **Spam-védelem megoldása.** Turnstile vagy honeypot — eldöntendő; a lényeg, hogy klasszikus CAPTCHA ne legyen.
7. **Kompakt RFQ viselkedése.** A 9. fejezet javaslata a közvetlen beküldés — ezt a Design/Code fázis erősítse meg vagy vesse el.
8. **A megnyugtató panel mint sötét blokk** — vizuális döntés; a 3. fejezet ezt javasolja, de a Design fázis dönthet világos kártyás kezelés mellett is, ha az oldal egésze túl „sötét-nehéz" lenne.

---

## 12. Összefoglaló — mit szállít ez a dokumentum a Design fázisnak

- Teljes oldalstruktúra (6 szekció), a `frontpage_borela.png` vizuális nyelvére hangolva: bracket-címkék, nagy verzál H1, spec-stílusú mezők, számozott folyamatlista, sötét kontraszt-panel, accordion-FAQ.
- A négyblokkos űrlap minden mezője — típus, kötelezőség, **mindhárom nyelvű címke**, legördülő-opciók, helper- és validációs szövegek, feltételes viselkedések.
- A megnyugtató panel teljes, háromnyelvű microcopyja (folyamatlépések, válaszidő-kiemelés, adatbiztonsági blokk, alternatív kapcsolat).
- Az RFQ-specifikus mini-FAQ teljes szövege.
- A köszönőoldal terve és a kompakt landing-oldali RFQ specifikációja.
- A `ContactPage` schema-sablon és a technikai jelölési követelmények.
- 8 konkrét, a Design indulása előtt eldöntendő nyitott kérdés.

A dokumentum **nem blokkolja** a Design fázis indítását — a nyitott kérdések közül egyik sem érinti az alap-layoutot; mindegyik az implementáció finomhangolása.
