import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import Hero from "@/components/blocks/Hero";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/primitives/SectionLabel";

// Hungarian-only page: statutory EU-grant disclosure. Content is legally
// prescribed and kept verbatim from the official borela.hu/hu/palyazatok.php.
export const metadata: Metadata = generatePageMetadata({
  title: "Pályázatok — Borela BT.",
  description:
    "A Borela BT. európai uniós és hazai támogatású fejlesztési projektjei — kötelező nyilvános tájékoztatás.",
  path: "/palyazatok/",
});

const grants = [
  {
    id: "VFO/857/2018-ITM_SZERZ",
    title: "Beszállítói-fejlesztési Program",
    body: "Az Innovációs és Technológiai Minisztérium a Beszállítói-fejlesztési Program keretén belül, a Knorr-Bremse Fékrendszerek Kft. (Kecskemét) mint integrátor javaslatára elnyert támogatás.",
    rows: [{ k: "Nyújtott támogatás", v: "122 872 637 HUF" }],
  },
  {
    id: "GINOP-1.2.1-2014-00356",
    title: "Kapacitásnövelő beruházás a Borela Bt-nél",
    body: "Kedvezményezett: BORELA TERMELŐ FORGALMAZÓ ÉS SZOLGÁLTATÓ BT.",
    rows: [
      { k: "Nyújtott támogatás", v: "27 099 300 HUF" },
      { k: "Támogatás intenzitása", v: "50%" },
      { k: "Projekt vége", v: "2015.12.31." },
    ],
  },
  {
    id: "GOP-1.3.1-10-A-2010-0017",
    title: "Vállalati innováció támogatása — vállalatfejlesztés a jakabszállási üzemben",
    body: "„Forgácsolt fém alkatrészek nagy sorozatú megmunkálási folyamatainak fejlesztése a gyártási idő drasztikus csökkentésével.” A Borela Bt. 98 millió Ft támogatásban részesült a Gazdaságfejlesztési Operatív Program (GOP) keretében. A cég tevékenységét a folyamatos technológiai fejlesztés jellemzi; ez az innovációs projekt is szervesen illeszkedik ebbe a folyamatba, amelynek segítségével — kedvező piaci körülmények között — nagyobb eséllyel korszerűsítheti gyártási folyamatait és fejlesztheti piaci pozícióit.",
    rows: [
      { k: "Nyújtott támogatás", v: "98 millió Ft" },
      { k: "Projekt összköltsége", v: "207 millió Ft" },
    ],
  },
];

const earlier = [
  {
    year: "2007",
    id: "GOP-2.1.1/A-2007-0883",
    title: "Forgácsoló kapacitás bővítése a Borela Bt. jakabszállási telephelyén",
    body: "Két darab CNC automata forgácsoló gépet szereztünk be a projekt keretében.",
    rows: [
      { k: "Projekt összköltsége", v: "32 millió Ft" },
      { k: "Támogatás összege", v: "9,6 millió Ft" },
    ],
  },
  {
    year: "2005",
    id: "GVOP-1.1.3-05/1-2005-08-0009",
    title: "Különféle forgácsolt fémalkatrészek gyártásának kapacitásnövelő beruházása",
    body: "A projekt az Európai Regionális Fejlesztési Alap és a Magyar Köztársaság költségvetésének társfinanszírozásával valósult meg. 1 db CNC megmunkálóközpont és 1 db CNC kontúrmérőgép beszerzése valósult meg.",
    rows: [
      { k: "Projekt összköltsége", v: "63,8 millió Ft" },
      { k: "Támogatás összege", v: "31,9 millió Ft" },
    ],
  },
  {
    year: "2003",
    id: "SZVP-2003-5-03-05-11",
    title: "A mikro-, kis- és középvállalkozások beszállítói tevékenységét javító támogatás",
    body: "A Magyar Köztársaság Gazdasági és Közlekedési Minisztériuma által finanszírozott pályázat keretében 1 db Tornado A50 CNC esztergát szereztünk be.",
    rows: [
      { k: "Projekt összköltsége", v: "12,5 millió Ft" },
      { k: "Támogatás összege", v: "6,2 millió Ft" },
    ],
  },
];

export default function PalyazatokPage() {
  return (
    <>
      <Hero
        label="§ 01 — Pályázatok"
        heading="Európai uniós és hazai pályázati projektjeink"
        lead="A Borela BT. az elmúlt években több európai uniós és hazai támogatású fejlesztési projektet valósított meg. Az alábbiakban — a kötelező nyilvános tájékoztatásnak megfelelően — közöljük a projektek adatait."
      />

      {/* EU infoblokk (kötelező arculati elem) */}
      <section className="py-10 bg-surface border-b border-border">
        <Container>
          <Image
            src="/palyazatok/eu-infoblokk.jpg"
            alt="Széchenyi 2020 — Európai Regionális Fejlesztési Alap infoblokk"
            width={1453}
            height={1004}
            className="w-full max-w-2xl mx-auto h-auto"
          />
        </Container>
      </section>

      {/* Projektek */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 02 — Támogatott projektek</SectionLabel>
          <div className="space-y-6">
            {grants.map((g) => (
              <div key={g.id} className="p-6 border border-border bg-surface">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-2">{g.id}</div>
                <h3 className="font-bold text-[17px] uppercase tracking-[-0.01em] text-ink mb-3">{g.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed mb-5">{g.body}</p>
                <dl className="grid sm:grid-cols-3 gap-4 border-t border-border pt-4">
                  {g.rows.map((r) => (
                    <div key={r.k}>
                      <dt className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-1">{r.k}</dt>
                      <dd className="font-sans font-semibold text-[14px] text-ink">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Korábbi projektek */}
      <section className="py-14 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Korábban megvalósult projektek</SectionLabel>
          <div className="space-y-6">
            {earlier.map((g) => (
              <div key={g.id} className="p-6 border border-border bg-background">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-[14px] font-semibold text-primary">{g.year}</span>
                  <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">{g.id}</span>
                </div>
                <h3 className="font-bold text-[16px] uppercase tracking-[-0.01em] text-ink mb-3">{g.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed mb-5">{g.body}</p>
                <dl className="grid sm:grid-cols-3 gap-4 border-t border-border pt-4">
                  {g.rows.map((r) => (
                    <div key={r.k}>
                      <dt className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-1">{r.k}</dt>
                      <dd className="font-sans font-semibold text-[14px] text-ink">{r.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Image src="/palyazatok/szechenyi.jpg" alt="Széchenyi Terv" width={650} height={215} className="h-12 w-auto" />
            <Image src="/palyazatok/mo-megujul.jpg" alt="Magyarország megújul" width={709} height={295} className="h-12 w-auto" />
          </div>
        </Container>
      </section>
    </>
  );
}
