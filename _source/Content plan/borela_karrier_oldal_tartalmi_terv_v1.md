# Borela Bt. — Karrier oldal: tartalmi terv

**Dokumentum verzió:** 1.0
**Dátum:** 2026. május
**Státusz:** A `borela_uj_tartalmi_struktura_v1-1.md` 10. fejezetének kibontása — design-kész tartalmi terv a Claude Design fázishoz.
**Hivatkozott alapdokumentum:** Borela Bt. — Új weboldal: tartalmi struktúra és SEO stratégia, v1.1
**Hivatkozott vizuális referencia:** `frontpage_borela.png` (a főoldal jóváhagyott designja)

---

## 0. Mi ez a dokumentum

Az alapdokumentum a Karrier oldalt a 10. fejezetben csak vázlatosan kezeli (öt tartalmi blokk felsorolása). Ez a dokumentum ugyanazt a részletességet adja a Karrier oldalnak, amit az alapdokumentum 6. fejezete ad a szolgáltatási oldalaknak: URL, kulcsszó, H1, meta, kötelező H2-blokkok, FAQ, schema.org, belső linkelés — kiegészítve **designjegyzetekkel**, mert a következő fázis a webdesign.

A karrier oldal az alapdokumentum logikája szerint **sajátos eset**: amíg a szolgáltatási és iparági oldalak elsődlegesen angol-német fókuszúak, a Karrier oldal **elsődlegesen magyar**. A fő piac beszerzői külföldön vannak, de a fizikai munkát Bács-Kiskun megyében végzik el — a célközönség itt lokális. Az EN/DE verzió ezért szándékosan könnyített (lásd 7. pont).

---

## 1. A Karrier oldal szerepe és célközönsége

### 1.1 Kettős cél

A Karrier oldal egyszerre szolgál **HR-toborzási** és **lokális SEO** célt, és van egy harmadik, gyakran elfelejtett funkciója: **bizalomépítés a beszerzők felé**. Egy nagyvállalati beszerző, aki a Borelát mérlegeli beszállítóként, a Karrier oldalt is megnézheti — egy aktív, rendezett, utánpótlást képző munkahely képe önmagában is azt üzeni, hogy a cég stabil és hosszú távon számíthat rá. Ezért a Karrier oldal hangvétele nem térhet el a site többi részétől: **mérnöki, számokkal alátámasztott, nem mézes-marketinges** (lásd alapdokumentum 2.3).

### 1.2 Célközönség-szegmensek (és mit keresnek)

| Szegmens | Mit keres a Google-ben | Mit akar az oldalon látni |
|---|---|---|
| Tapasztalt szakmunkás (CNC esztergályos, beállító, marós) | „CNC esztergályos állás Kecskemét", „CNC beállító állás Bács-Kiskun" | Konkrét pozíció, telephely, műszakrend, bérezési sáv, jelentkezés egy kattintással |
| Pályakezdő / fiatal szakmunkás | „fémipari állás Kecskemét pályakezdő" | Betanítás lehetősége, fejlődési út, stabil munkaadó |
| Szakiskolás / szülő / iskola | „szakiskolai gyakorlati képzés fémmegmunkálás", „duális képzés CNC Kecskemét" | Gyakorlati képzési program, partneriskolák, milyen gépeken tanul |
| Mérnök / technológus / minőségügyes | „gépésztechnikus állás Bács-Kiskun" | Nemzetközi projektek, modern géppark, szakmai kihívás |
| Spontán érdeklődő | — | Egyszerű spontán jelentkezési lehetőség, HR-elérhetőség |

### 1.3 Lokális SEO-fókusz

Az alapdokumentum 4.4-es kulcsszólistájából a Karrier oldalt a **P3 (karrier-SEO)** csoport érinti:

- CNC beállító állás Kecskemét
- CNC esztergályos állás Kecskemét
- gyakornok fémipar Kecskemét
- szakiskolai gyakorlati képzés fémmegmunkálás

> **Megjegyzés a kulcsszólistához:** az alapdokumentum 4.4 felsorol egy „hőkezelő állás Bács-Kiskun" kifejezést is. Ez **elavult** — a v1.1 logikája szerint a hőkezelés kiszervezett szolgáltatás, a Borelának nincs hőkezelő üzeme, így hőkezelő pozíciót sem hirdet. Ezt a kulcsszót a Karrier oldal **nem célozza** (lásd 9. pont, nyitott kérdések).

---

## 2. Oldalstruktúra — a karrier-klaszter

Az alapdokumentum 5.2 a karriert így bontja: `7.1 Álláslehetőségek`, `7.2 Gyakorlati képzés (csak magyarul)`. Ezt a design szempontjából három oldaltípusra érdemes pontosítani:

```
[Karrier főoldal] (HU)  /karrier/
    │  — ez a "hub": bemutatkozás, miért a Borela, folyamat, FAQ
    │
    ├── [Nyitott pozíciók] — a főoldalba ágyazva listaként + külön /karrier/allaslehetosegek/ is
    │       │
    │       └── [Álláshirdetés-aloldal] sablon  /karrier/allaslehetosegek/[pozicio-slug]/
    │               — pozíciónként egy oldal, mindegyik saját JobPosting schemával
    │
    └── [Gyakorlati képzés]  /karrier/szakiskolai-kepzes/   (csak HU)

[Careers] (EN) /careers/  — könnyített, egyetlen oldal
[Karriere] (DE) /karriere/ — könnyített, egyetlen oldal
```

**Miért van külön álláshirdetés-aloldal?** Mert minden nyitott pozíciónak **saját `JobPosting` JSON-LD**-t kell kapnia (alapdokumentum 10. pont), és a Google Jobs / LinkedIn integrációhoz a legtisztább, ha minden pozíciónak van egyedi, indexelhető URL-je. A főoldali lista ezekre az aloldalakra linkel. Kevés (1–4) nyitott pozíció esetén a designban a lista lehet egyszerű kártyasor; ha üres, „jelenleg nincs nyitott pozíció" állapotot is meg kell tervezni (lásd 4.2, 6. blokk).

---

## 3. Designnyelv — illeszkedés a főoldalhoz

A `frontpage_borela.png` alapján a Karrier oldalnak az alábbi vizuális rendszert kell követnie. Ezek nem új döntések, hanem a már jóváhagyott főoldali nyelv átemelése:

- **Színek:** meleg krém alapszín; váltakozó, kicsit sötétebb homokbézs szekcióháttér a ritmushoz; egy közel-fekete „sötét szekció" a kiemelt blokkhoz; kobaltkék kizárólag az elsődleges CTA-khoz és linkkiemelésekhez; meleg szürke a másodlagos szövegnek.
- **Tipográfia:** vastag, nagybetűs grotesk a főcímeknek (H1, H2); letisztult sans-serif a folyószövegnek.
- **Szekciócímkék:** minden szekció fölött kis, nagybetűs, technikai jellegű címke perjellel és gondolatjellel — a karrier oldalon: `/ 07 — KARRIER`, `/ 07.1 — NYITOTT POZÍCIÓK` stb.
- **Kártyák:** éles sarkú (nem lekerekített), vékony 1px keret, bőséges belső margó.
- **„Spec-sheet" esztétika:** a főoldal szolgáltatás-kártyáin pontozott vezetővonalas kulcs–érték táblák vannak (pl. `DIAMETER ........ Ø1–90 mm`). **Ezt a karrier oldal álláskártyáin is használjuk** — ez a legjobb illeszkedési pont (lásd 4.2, 6. blokk): `TELEPHELY ....... Jakabszállás`, `JELLEG .......... teljes munkaidő`, `MŰSZAK .......... 2 műszak`.
- **Nagy számok:** a „számokban" blokk a főoldali sötét statisztikai szekció mintájára — óriási, vastag számok, alattuk apró nagybetűs felirat.
- **Ikonok:** vékony, egyvonalas ikonok (mint a szolgáltatás-kártyákon).
- **CTA-elv:** oldalanként max. 1 fő CTA (itt: „Jelentkezem" / a nyitott pozíciókhoz ugrás), opcionálisan 1 másodlagos (spontán jelentkezés / HR-elérhetőség). Az alapdokumentum 2.3 elvét a karrier oldal is tartja.
- **Folyamatábra:** a főoldalon és a szolgáltatási oldalon visszatérő „5 lépéses folyamat" infografika — a karrier oldalon a jelentkezési folyamatra (lásd 4.2, 5. blokk).

---

## 4. A fő Karrier oldal (HU) — részletes terv

### 4.1 Alapadatok

**URL:**
- HU: `/karrier/`
- EN: `/careers/` (könnyített, lásd 7.)
- DE: `/karriere/` (könnyített, lásd 7.)

**Elsődleges kulcsszó:**
- HU: *fémipari állás Kecskemét* / *CNC állás Bács-Kiskun* / *karrier Borela*
- EN: *manufacturing careers Hungary* (másodlagos prioritás)
- DE: *Karriere Zerspanung Ungarn* (másodlagos prioritás)

**H1:**
- HU: *Karrier a Borelánál — precíziós fémmegmunkálás 1953 óta*
- EN: *Careers at Borela — precision machining since 1953*
- DE: *Karriere bei Borela — Präzisionszerspanung seit 1953*

**Meta title (60 karakter alatt):**
- HU: *Karrier — CNC és fémipari állások | Borela, Bács-Kiskun*
- EN: *Careers at Borela — Precision Machining Jobs | Hungary*
- DE: *Karriere bei Borela — Jobs in der Zerspanung | Ungarn*

**Meta description (155 karakter alatt):**
- HU: *Csatlakozz a Borelához: CNC esztergályos, beállító, marós és mérnöki pozíciók Bács-Kiskunban. Stabil, 70+ éves családi vállalkozás, modern géppark, nemzetközi projektek.*
- EN: *Join Borela: CNC and engineering roles in Hungary. A stable, 70+ year family business with a modern machine park and international automotive projects.*
- DE: *Werden Sie Teil von Borela: CNC- und Ingenieurstellen in Ungarn. Stabiles Familienunternehmen seit über 70 Jahren, moderner Maschinenpark, internationale Projekte.*

### 4.2 Kötelező tartalmi blokkok (H2-szinten, sorrendben)

Minden blokknál megadom a **tartalmat** és külön a **designjegyzetet** (hogyan kapcsolódik a főoldal vizuális nyelvéhez).

---

**1. Hero szekció**

*Tartalom:* H1 + egymondatos felvezetés (kb. 20–25 szó): „A Borela 1953 óta működő, családi tulajdonú precíziós forgácsoló vállalkozás Bács-Kiskunban. Itthon dolgozol — világcégeknek." Fő CTA: „Nyitott pozíciók" (ugrás a 6. blokkra). Másodlagos CTA: „Spontán jelentkezés" (ugrás a záró kapcsolat-blokkra vagy `mailto:` a HR-címre).

*Designjegyzet:* a főoldali hero szerkezetét követi — szekciócímke (`/ 07 — KARRIER`) + nagy nagybetűs H1 + rövid alcím + két gomb (kék fő + vonalas másodlagos). Háttér: az új jakabszállási csarnok vagy egy üzemi munkahelyzet nagy felbontású fotója (lásd 9. pont — fotóigény).

---

**2. A Borela mint munkahely — számokban**

*Tartalom:* rövid felvezető bekezdés (2–3 mondat) arról, hogy a Borela nem felkapott induló cég, hanem három generáció óta működő, kiszámítható munkaadó. Alatta a statisztikai blokk:

- **1953** — alapítás éve (Bognár Lajos gépműhelye)
- **70+** — év mérnöki tapasztalat
- **50+** — fős csapat
- **3** — telephely (Izsák, Jakabszállás, Fülöpszállás)
- **40 + 6** — CNC eszterga és megmunkáló központ, amin dolgozol
- **2** — rangos szakmai díj (Knorr-Bremse Év Beszállítója 2009, Az Év Vállalkozója 2010)

*Designjegyzet:* ez a blokk a **főoldali sötét statisztikai szekció** közvetlen megfelelője — közel-fekete háttér, óriási vastag számok, alattuk apró nagybetűs felirat. Ez ad vizuális ritmust az oldalnak, és átemeli a már jóváhagyott elemet.

---

**3. Miért a Borela? — 4 érv**

*Tartalom:* négy USP-kártya, **a munkavállaló szemszögéből** (nem a beszerzőéből). Az alapdokumentum 10. pontja ezeket sorolja: stabil munkaadó, fejlődési lehetőség, nemzetközi projektek, új gépek, díjazott beszállító. Négy kártyába rendezve:

1. **Stabilitás, ami nem ígéret, hanem 70 év.** Három generáció, családi tulajdon, folytonosság. Itt nem leépítési hullámok között egyensúlyozol.
2. **Modern géppark, folyamatos beruházás.** 40 CNC eszterga, 6 megmunkáló központ, új jakabszállási csarnok, saját mérőszoba 3D koordináta-mérőgéppel. Korszerű gépeken, nem elavult parkon dolgozol.
3. **Itthon dolgozol, de világcégeknek.** Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer. A munkád nemzetközi autóipari és gépipari projektekbe épül be — anélkül, hogy külföldre kéne menned érte.
4. **Van hová fejlődni.** Betanítástól a beállítói és technológusi szerepekig; szakiskolai utánpótlás-programmal és belső előrelépési úttal.

*Designjegyzet:* a főoldali „Miért a Borela" 4-USP blokk mintájára — 2×2 kártyarács, éles sarok, vékony keret, sorszámozott (`01`–`04`), vékony vonalas ikon. Ugyanaz a layout, csak munkavállalói tartalommal.

---

**4. Milyen csapatba érkezel — szakterületek**

*Tartalom:* rövid áttekintő arról, milyen szakmák dolgoznak a Borelánál, hogy az érdeklődő be tudja sorolni magát, még mielőtt a konkrét hirdetésekhez ér. Pl.: CNC esztergályos és beállító, CNC marós, sajtoló gépkezelő, minőségellenőr / mérőszobai munkatárs, technológus / gépészmérnök, karbantartó, gyakornok / pályakezdő. Mindegyikhez 1 mondat, mit csinál a Borelánál.

*Designjegyzet:* egyszerű, tömör lista vagy könnyű kártyasor — nem hangsúlyos blokk, vizuálisan visszafogottabb, mint a 3. és 6. blokk. Lehet a váltakozó (sötétebb homokbézs) szekcióháttéren.

---

**5. Hogyan zajlik a jelentkezés? — folyamat 5 lépésben**

*Tartalom:* az alapdokumentum kedvelt „folyamatábra" eleme, a karrierre alkalmazva:

1. **Jelentkezés** — online űrlap vagy e-mail a HR-címre, önéletrajzzal.
2. **Telefonos egyeztetés** — rövid előzetes beszélgetés, a kölcsönös elvárások tisztázása.
3. **Személyes interjú + üzemlátogatás** — megnézed a telephelyet és a gépeket, ahol dolgoznál.
4. **Szakmai felmérés / próbamunka** — szakmunkás pozícióknál gyakorlati felmérés.
5. **Ajánlat** — visszajelzés és belépés egyeztetése.

Záró mondat a várható válaszidőről: a jelentkezésekre **2 munkanapon belül** visszajelez a HR (összhangban az alapdokumentum 17.2/N pontjával — biztonsági sávval megfogalmazott ígéret).

*Designjegyzet:* a főoldali / szolgáltatási oldali „Hogyan működik a folyamat?" 5 lépéses infografika közvetlen megfelelője — vízszintes, számozott lépéssor, vékony vonalas ikonokkal, összekötő vonallal. Vizuális visszacsengés az egész site-on átívelő folyamat-motívumra.

---

**6. Nyitott pozíciók**

*Tartalom:* a Karrier oldal **konverziós magja**. A jelenleg betöltetlen pozíciók listája. Minden pozíció egy kártya, amely a saját álláshirdetés-aloldalra linkel (lásd 5. fejezet). Pozíciónként a kártyán:

- Pozíció megnevezése (kártyacím)
- Egysoros összefoglaló (mit csinálsz)
- **Spec-tábla** (lásd designjegyzet): Telephely / Jelleg (teljes vagy részmunkaidő) / Műszakrend / Tapasztalat (pályakezdő is / tapasztalattal) / Közzététel dátuma
- „Jelentkezem" gomb (kék, az aloldalra vagy közvetlenül az űrlapra visz)

Példa-pozíciók (sablonjelleggel — a tényleges nyitott pozíciók a cég adatai alapján töltendők, lásd 9. pont):

- CNC esztergályos / beállító — Jakabszállás
- CNC marós — Jakabszállás
- Minőségellenőr / mérőszobai munkatárs — Jakabszállás
- Gépésztechnikus / technológus — Izsák
- Sajtoló gépkezelő — Jakabszállás
- Gyakornok / pályakezdő (fémmegmunkálás) — Jakabszállás vagy Fülöpszállás

A blokk végén állandó elem: **„Nem találod a pozíciódat?"** — spontán jelentkezés felhívás a HR-címre (`hr@borela.eu`). Ez akkor is megjelenik, ha épp nincs nyitott pozíció — ekkor a lista helyén egy „Jelenleg nincs nyitott pozíciónk, de a spontán jelentkezéseket folyamatosan fogadjuk" üzenet áll.

*Designjegyzet:* **ez a blokk a legfontosabb illeszkedési pont a főoldal vizuális nyelvéhez.** A főoldali szolgáltatás-kártyákon pontozott vezetővonalas kulcs–érték tábla van — az álláskártyák **ugyanezt a spec-sheet mintát** használják: `TELEPHELY ········· Jakabszállás`, `JELLEG ············ teljes munkaidő`, `MŰSZAK ············ 2 műszak`. Éles sarkú kártya, vékony keret, kék „Jelentkezem" gomb. Egy- vagy kétoszlopos rács a pozíciók számától függően. Tervezni kell az **üres állapotot** is.

---

**7. Gyakorlati képzés és utánpótlás (előnézet + link)**

*Tartalom:* rövid blokk (2 bekezdés + CTA) a szakiskolai gyakorlati képzésről: a Borela együttműködik szakképző intézményekkel és a Kereskedelmi és Iparkamarával, gyakorlati képzőhelyet biztosít, a diákok valódi gépeken, valódi sorozatmunkán tanulnak. CTA: „Tudj meg többet a gyakorlati képzésről" → `/karrier/szakiskolai-kepzes/`.

*Designjegyzet:* „teaser" blokk — egy kép (diákok / fiatal szakmunkás a gépnél) + rövid szöveg + szöveges link a részletes aloldalra. Nem hangsúlyos, de jól látható. A főoldalon a referencia-esettanulmány „kiemelés + Read more" blokkjának logikáját követi.

---

**8. Munkatársaink mondják — betekintés (opcionális)**

*Tartalom:* 2–3 rövid, **tényszerű** idézet munkatársaktól (pl. egy tapasztalt beállító, egy pályakezdő, egy mérnök) — keresztnév + pozíció + hány éve a cégnél. A hangvétel itt is mérnöki, nem érzelgős: konkrétumok (milyen gépen dolgozik, milyen projekten, mit tanult). Ez a blokk **csak akkor kerül be, ha a cég biztosít valódi idézeteket és a munkatársak hozzájárulnak** (GDPR — lásd 9. pont).

*Designjegyzet:* visszafogott idézet-kártyák; ha van fotó a munkatársról, az erősíti, de stockfotó **nem** használható (hiteltelen). Ha nincs valódi tartalom, a blokk kimarad — nem pótoljuk töltelékkel.

---

**9. Helyszínek — hol fogsz dolgozni**

*Tartalom:* a három telephely rövid bemutatása munkavállalói szemszögből:

- **Jakabszállás** — elsődleges forgácsoló és sajtoló üzem (3000 m²), itt van a legtöbb termelési pozíció és az új csarnok.
- **Fülöpszállás** — másodlagos forgácsoló üzem (2000 m²).
- **Izsák** — központ (HQ), itt vannak a műszaki-adminisztratív pozíciók.

Mindegyiknél: a település, hozzávetőleges távolság Kecskeméttől, megközelíthetőség. Link a `Rólunk / Telephelyeink` oldalra.

*Designjegyzet:* könnyű háromoszlopos kártyasor, opcionálisan egy kis térkép-kivágat. Nem ismétli a Telephelyek oldal teljes tartalmát, csak a munkavállalónak releváns részt emeli ki.

---

**10. FAQ — gyakori kérdések a jelentkezésről**

*Tartalom:* 5 karrier-specifikus kérdés (lásd 4.3).

*Designjegyzet:* a főoldali FAQ-blokk akkordion-megjelenését követi (a `frontpage_borela.png`-n látható nyitható sorok). `FAQPage` schema.

---

**11. Záró CTA — kapcsolat a HR-rel**

*Tartalom:* a HR elérhetőségei egy helyen: `hr@borela.eu`, HR-telefonszám, kapcsolattartó neve (ha a cég vállalja a nevesítést). Fő CTA: „Jelentkezz most" (a nyitott pozíciókhoz vagy a jelentkezési űrlaphoz). Egymondatos záró üzenet: spontán jelentkezést is fogadnak.

*Designjegyzet:* a főoldali záró CTA-szekció megfelelője — nagy nagybetűs felhívás, alatta egy kék gomb. Tiszta, fókuszált lezárás.

---

**12. Lábléc** — a site-szintű teljes lábléc (változatlan).

### 4.3 FAQ — Karrier főoldal (5 kérdés)

*HU (a designhoz ez a véglegesítendő nyelv; EN/DE fordítás a könnyített oldalakhoz a 7. pont szerint):*

1. **Kell-e tapasztalat egy CNC-pozícióhoz?** — *Tapasztalattal rendelkező szakmunkásokat és pályakezdőket egyaránt várunk. A pályakezdőket betanítjuk; a hirdetésnél mindig jelezzük, az adott pozíció melyik kategóriába tartozik.*
2. **Milyen műszakrendben dolgoztok?** — *A termelési pozíciók többsége több műszakos. A pontos műszakrend pozíciónként eltér, és minden álláshirdetésben fel van tüntetve.* [pontos műszakrend a cégtől — lásd 9.]
3. **Hogyan jutok el a telephelyekre?** — *A telephelyek Bács-Kiskun megyében, Kecskéthez közel találhatók. A megközelíthetőség részleteit (és az esetleges utazási támogatást) a személyes egyeztetésen tisztázzuk.* [céges busz / útiköltség-támogatás megléte pontosítandó — lásd 9.]
4. **Felvesztek diákokat és gyakornokokat?** — *Igen. Szakképző intézményekkel és a Kereskedelmi és Iparkamarával együttműködve gyakorlati képzőhelyet biztosítunk, és pályakezdőket is foglalkoztatunk. Részletek a Gyakorlati képzés oldalon.*
5. **Kell-e idegen nyelvet beszélni?** — *A termelési pozíciók többségéhez nem. Egyes műszaki, minőségügyi és koordinációs szerepekben a német vagy angol nyelvtudás előny, mert a megrendelőink nemzetközi cégek — ezt a konkrét hirdetés mindig jelzi.*

### 4.4 Schema.org markup (JSON-LD)

- **`JobPosting`** — minden nyitott pozícióhoz egy-egy, a hozzá tartozó álláshirdetés-aloldalon (a teljes mezőkészlet a 8. fejezetben). A Karrier főoldal a pozíciókat csak listázza/linkeli; a `JobPosting` schema a pozíció saját aloldalán él.
- **`FAQPage`** — a 10. blokk kérdés-válasz párjaihoz, szövegazonosan a látható tartalommal.
- **`BreadcrumbList`** — Kezdőlap › Karrier.
- **`WebPage`** + hivatkozás a globális `Organization` entitásra (`@id: https://borela.eu/#organization`).

### 4.5 Belső linkelés

**Innen kifelé:**
- minden nyitott pozíció → a saját álláshirdetés-aloldalára
- Gyakorlati képzés teaser → `/karrier/szakiskolai-kepzes/`
- Helyszínek blokk → `Rólunk / Telephelyeink`
- „Miért a Borela" blokk → `Képességek / Géppark` és `Rólunk / Történetünk` (a stabilitás- és géppark-állítások alátámasztására)
- záró CTA → `Kapcsolat` vagy a jelentkezési űrlap

**Ide befelé:**
- főmenü „Karrier" pontja
- lábléc
- `Rólunk / Történetünk` oldal (az utánpótlás-nevelés mint a cégtörténet része)
- opcionálisan a kezdőlap egy diszkrét „Csatlakozz a csapathoz" linkje a lábléc fölött

---

## 5. Álláshirdetés-aloldal — sablon

Minden nyitott pozíció saját, indexelhető URL-t és `JobPosting` schemát kap. Ez egy **sablon**, amelyet pozíciónként töltünk fel.

**URL-minta:** `/karrier/allaslehetosegek/cnc-esztergalyos/`, `/karrier/allaslehetosegek/cnc-maros/` stb. (kulcsszó-alapú slug, az alapdokumentum 3.2 elvével összhangban).

**Elsődleges kulcsszó:** pozíció + földrajz, pl. *CNC esztergályos állás Kecskemét*, *CNC beállító állás Bács-Kiskun*, *gépésztechnikus állás Kecskemét*.

**H1:** a pozíció pontos megnevezése + telephely, pl. *CNC esztergályos / beállító — Jakabszállás*.

**Meta title / description:** pozíció + „Borela" + telephely + 1–2 kulcsfeltétel.

**Kötelező tartalmi blokkok (H2):**

1. **A pozíció röviden** — 2–3 mondatos összefoglaló + a kulcsadatok spec-táblában (telephely, jelleg, műszakrend, kezdés, jelentkezési határidő).
2. **Mit csinálsz nálunk** — a feladatkör felsorolása.
3. **Amit elvárunk** — végzettség, tapasztalat, kompetenciák; külön jelölve, mi a „kötelező" és mi az „előny".
4. **Amit kínálunk** — bérezési sáv (ha vállalja a cég — Google Jobs erősen díjazza), juttatások, fejlődési lehetőség, a konkrét gépek, amin dolgozni fog.
5. **Hogyan jelentkezz** — az 5 lépéses folyamat rövid emlékeztetője + jelentkezési gomb / űrlap / `mailto:`.
6. **A telephely** — hol van, hogyan közelíthető meg (link a Telephelyek oldalra).
7. **Kapcsolódó pozíciók** — link a többi nyitott pozícióra és vissza a Karrier főoldalra.

**Designjegyzet:** ugyanaz a vizuális nyelv, mint a Karrier főoldalé. A 1. blokk spec-táblája a kulcselem (lásd 3. és 4.2/6. blokk). Egy fő CTA: „Jelentkezem".

**Schema.org:** `JobPosting` (teljes mezőkészlet — 8. fejezet) + `BreadcrumbList` (Kezdőlap › Karrier › Nyitott pozíciók › [pozíció]).

---

## 6. Gyakorlati képzés aloldal (csak HU)

**URL:** `/karrier/szakiskolai-kepzes/` — az alapdokumentum 10. pontja szerint ez **csak magyarul** készül.

**Elsődleges kulcsszó:** *szakiskolai gyakorlati képzés fémmegmunkálás*, *duális képzés CNC Kecskemét*, *gyakorlati képzőhely Bács-Kiskun*.

**H1:** *Gyakorlati képzés a Borelánál — a következő generáció precíziós szakemberei*

**Meta title:** *Szakiskolai gyakorlati képzés és duális képzés | Borela*

**Meta description:** *A Borela gyakorlati képzőhelyet biztosít szakképző intézmények diákjainak. Valódi CNC-gépeken, valódi sorozatmunkán tanulsz, a Kereskedelmi és Iparkamara együttműködésével.*

**Kötelező tartalmi blokkok (H2):**

1. **Bevezető** — miért érdemes a Borelánál gyakorlatozni: működő üzem, valódi gépek, tapasztalt szakemberek mellett.
2. **A program** — hogyan zajlik a gyakorlati képzés, milyen időtartamban, milyen szakmákban (forgácsoló / gépi forgácsoló / CNC).
3. **Partnereink** — a partner szakképző intézmények és a Kereskedelmi és Iparkamarával való együttműködés. [konkrét intézménynevek a cégtől]
4. **Mit tanulsz meg** — konkrét kompetenciák, milyen gépeken (CNC eszterga, megmunkáló központ, mérőszoba).
5. **Kinek ajánljuk** — célközönség: szakképzésben tanuló diákok, pályaválasztás előtt állók.
6. **Hogyan jelentkezz** — a jelentkezés menete, kapcsolat (HR-cím), iskoláknak szóló külön elérhetőség.
7. **GYIK** — 3–4 kérdés (pl. „Lehet-e a gyakorlat után állásom a Borelánál?", „Milyen szakmákban fogadtok diákot?").

**Designjegyzet:** ugyanaz a vizuális rendszer; a hangvétel itt egy árnyalattal közvetlenebb lehet (fiatal célközönség), de továbbra sem marketinges. Erős igény jó fotókra (diákok a gépeknél — lásd 9.).

**Schema.org:** `EducationalOccupationalProgram` (a program leírására — `provider` a Borela, `occupationalCategory` forgácsoló/CNC, `educationalProgramMode` gyakorlati) + `FAQPage` + `BreadcrumbList`. Ez a schema-típus jól illeszkedik, és a Google a képzési programokat is meg tudja jeleníteni.

---

## 7. EN/DE Karrier oldal — könnyített

Az alapdokumentum 5.2 és 10. pontja egyértelmű: EN-en és DE-n a karrier **nem teljes oldal**, csak egy összefoglaló. A toborzás lokális (magyar), ezért az EN/DE oldal célja más: a **beszerzők** felé bizalomépítés (lásd 1.1), és a ritka, idegen nyelvet igénylő pozíciók kiszolgálása.

**URL:** `/careers/` (EN), `/karriere/` (DE) — egyetlen oldal, nincs aloldal.

**Tartalmi blokkok (rövid, 1 oldal):**

1. **Hero** — H1 + 1 mondat: a Borela elsősorban helyben, Magyarországon toboroz.
2. **Why engineers value Borela / Warum Ingenieure Borela schätzen** — 3–4 pont: nemzetközi autóipari projektek (Knorr-Bremse, Mercedes-Benz), modern géppark, stabil családi háttér. Ez a blokk a beszerzőnek is szól — azt üzeni, hogy a cég vonzó munkahely, tehát stabil partner.
3. **English/German-speaking roles** — ha van idegen nyelvet igénylő nyitott pozíció, itt jelenik meg; ha nincs, egy mondat: az ilyen pozíciókat itt hirdetjük meg.
4. **Looking for the full job list?** — link a magyar `/karrier/` oldalra, azzal a megjegyzéssel, hogy a teljes lista magyar nyelven érhető el.
5. **HR contact** — `hr@borela.eu`.

**Designjegyzet:** ugyanaz a vizuális nyelv, jóval rövidebb oldal. Egyetlen fő CTA: a HR-kapcsolat vagy a magyar oldalra mutató link.

**Schema.org:** `WebPage` + `BreadcrumbList`. `JobPosting` csak akkor, ha van ténylegesen EN/DE-nyelvű nyitott pozíció.

**hreflang:** az EN/DE Karrier oldal `hreflang`-ja a magyar `/karrier/`-ra mutat mint `hu` változat; az `x-default` az angol (az alapdokumentum 3.3 elvével összhangban). A magyar aloldalaknak (álláshirdetések, gyakorlati képzés) nincs EN/DE párjuk — ezeknél `hreflang` nélkül, csak `canonical`.

---

## 8. Schema.org — `JobPosting` sablon (teljes mezőkészlet)

Minden álláshirdetés-aloldalra. A `[...]` mezőket pozíciónként töltjük. A Google Jobs a `title`, `description`, `datePosted`, `hiringOrganization` és `jobLocation` mezőket követeli meg minimumként; a `validThrough`, `employmentType` és `baseSalary` erősen ajánlott.

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "[Pozíció megnevezése, pl. CNC esztergályos / beállító]",
  "description": "[A teljes, HTML-formázott pozícióleírás: feladatok, elvárások, amit kínálunk — a látható oldaltartalommal összhangban]",
  "datePosted": "[ÉÉÉÉ-HH-NN]",
  "validThrough": "[ÉÉÉÉ-HH-NN — a jelentkezési határidő]",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@id": "https://borela.eu/#organization"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakabszállás",
      "addressRegion": "Bács-Kiskun",
      "addressCountry": "HU"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "HUF",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": "[...]",
      "maxValue": "[...]",
      "unitText": "MONTH"
    }
  },
  "qualifications": "[végzettség / képesítés]",
  "experienceRequirements": "[tapasztalat — vagy: pályakezdők jelentkezését is várjuk]",
  "skills": "[kulcskompetenciák]",
  "industry": "Precision CNC machining",
  "directApply": true
}
```

**Megjegyzések:**
- `hiringOrganization` mindig a globális `Organization` entitásra hivatkozik (`@id`), nem ismétli meg a cégadatokat.
- `jobLocation` — a tényleges telephely (Jakabszállás / Fülöpszállás / Izsák) szerint töltendő.
- `baseSalary` opcionális, de a Google Jobs erősen díjazza a megadását, és a jelentkezési arányt is javítja. Ha a cég nem ad meg sávot, a mező kihagyható (nem üresen hagyandó).
- `validThrough` — ha lejár, a hirdetést le kell venni vagy az URL-t `410`/`404`-re állítani, különben a Google Jobs „elavult hirdetés" hibát jelez.
- minden `JobPosting` szövege **szövegazonos** a látható oldaltartalommal — eltérés esetén a Google strukturált-adat-büntetést alkalmazhat (ugyanaz az elv, mint az alapdokumentum 8.4-es `FAQPage`-megjegyzése).

---

## 9. Kritikai megjegyzések és nyitott kérdések

Az alapdokumentum 17. fejezetének szellemében — amit a cégtől tisztázni kell, mielőtt a Karrier oldal véglegesedik. Ezek **nem blokkolják** a Design fázis indítását (a sablon és a struktúra kész), de a tartalom feltöltéséhez szükségesek.

1. **Tényleges nyitott pozíciók.** A 4.2/6. blokk és az 5. fejezet sablonpozíciói **példák**. A valódi listát (pozíciónév, telephely, jelleg, műszakrend, feladatok, elvárások) a cégtől kell bekérni. Üres lista esetére az „üres állapot" megjelenése meg van tervezve.

2. **„Hőkezelő állás" kulcsszó elavult.** Az alapdokumentum 4.4 még felsorolja, de a v1.1 logikája szerint a hőkezelés kiszervezett — nincs hőkezelő üzem, így hőkezelő pozíció sincs. A Karrier oldal ezt a kulcsszót **nem célozza**. Javaslat: a 4.4-es lista frissítése a következő struktúra-verzióban.

3. **Bérezési sáv a `JobPosting` schemában.** Megadjuk-e? Google Jobs erősen díjazza, a jelentkezési arányt is javítja, viszont bérérzékeny döntés. A cégnek kell eldöntenie pozíciónként.

4. **Műszakrend.** A FAQ és az álláshirdetés-sablon hivatkozik rá, de a konkrét műszakrendet (2 vagy 3 műszak, hétvége stb.) a cégtől kell pontosítani.

5. **Megközelíthetőség / utazási támogatás.** Van-e céges busz, útiköltség-térítés? A telephelyek (Jakabszállás, Fülöpszállás) nem Kecskeméten vannak — a célközönség jelentős része ingázna. Ez erős toborzási érv lehet, ha van; ha nincs, a FAQ-ban semleges megfogalmazás marad.

6. **Munkatársi idézetek (8. blokk).** Csak akkor kerül be, ha a cég valódi munkatársi idézeteket biztosít, és a munkatársak **írásban hozzájárulnak** a nevük/idézetük (és esetleg fotójuk) megjelenítéséhez (GDPR). Stockfotó és kitalált idézet nem opció — hiteltelen, és az egész site mérnöki-őszinte hangvételét rombolja.

7. **Fotóigény.** A Karrier oldalhoz és különösen a Gyakorlati képzés aloldalhoz **friss, valódi üzemi fotók** kellenek: munkahelyzetek a gépeknél, a mérőszoba, az új jakabszállási csarnok, diákok a gyakorlaton. Az alapdokumentum 15. pontja szerint a régi oldal fotói alacsony felbontásúak — ez a Karrier oldalra is igaz, új fotózás szükséges.

8. **HR-elérhetőség.** A `hr@borela.eu` cím létrehozása (összhangban az alapdokumentum 17.2/6 e-mail-átállási pontjával). Eldöntendő: van-e nevesített HR-kapcsolattartó, akit az oldalon szerepeltetünk.

9. **Partner szakképző intézmények nevesítése.** A Gyakorlati képzés aloldal (6. fejezet, 3. blokk) konkrét intézményneveket igényel — ezeket a cégtől kell bekérni, és tisztázni, hogy az adott iskola hozzájárul-e a nevesítéshez.

10. **Átlagos kötődési idő / fluktuáció.** Ha a cég rendelkezik ilyen adattal és az kedvező (egy 70+ éves családi vállalkozásnál valószínűleg az), a 4.2/2-es „számokban" blokkba erős, hiteles elem lehet (pl. „X év átlagos kötődés"). Nem kötelező — csak ha valós és pozitív.
