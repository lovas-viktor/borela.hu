import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import StatGrid from "@/components/blocks/StatGrid";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import Link from "next/link";
import CertificationCard from "@/components/blocks/CertificationCard";
import IndustryRow from "@/components/blocks/IndustryRow";
import TrustStrip from "@/components/blocks/TrustStrip";
import WorldMap from "@/components/blocks/WorldMap";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import { certifications } from "@/data/certifications";
import { industries } from "@/data/industries";
import { homeFaqs } from "@/data/faqs";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = generatePageMetadata({
  title: "Precision CNC Contract Machining | Hungary",
  description:
    "Precision CNC turning & milling for automotive and engineering OEMs. ISO 9001, VDA 6.3, 70+ years heritage. Supplier to Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg.",
  path: "/",
});

const homeStats = [
  { value: "1990", label: "Founded" },
  { value: "36", label: "Years" },
  { value: "±0.002", label: "Tolerance (mm)", unit: "mm" },
];

const keyFigures = [
  { value: "1990", label: "Founded" },
  { value: "36", label: "Years of engineering heritage" },
  { value: "40", label: "CNC lathes" },
  { value: "6", label: "Machining centers" },
  { value: "1 – 400 000", label: "Pieces per order" },
  { value: "±0.002", label: "Typical tolerance (mm)", unit: "mm" },
];

// Homepage service tiles: icon + name only (details live on /services/). 12 items
// per brief F-19; every tile links to the services page (sub-pages don't exist).
const services = [
  {
    key: "turning",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="20" width="20" height="6"/><path d="M9 20v-4h6l3-4h6"/><circle cx="26" cy="12" r="2.5"/>
      </svg>
    ),
  },
  {
    key: "milling",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="3.2"/><circle cx="22" cy="10" r="3.2"/><circle cx="10" cy="22" r="3.2"/><circle cx="22" cy="22" r="3.2"/>
        <path d="M10 5.5V3M10 19.5V17M22 5.5V3M22 19.5V17M5.5 10H3M19.5 10H17"/>
      </svg>
    ),
  },
  {
    key: "heat",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4c-2 4 2 6 0 10s-4 6-2 10c1.5 3 4 4 6 4"/>
        <path d="M22 8c-1.5 3 1.5 4.5 0 7.5s-3 4.5-1.5 7.5"/><path d="M10 10c-1 2 1 3 0 5s-2 3-1 5"/>
      </svg>
    ),
  },
  {
    key: "press",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="3" width="20" height="5"/><path d="M11 8v8M21 8v8"/>
        <rect x="8" y="16" width="16" height="4"/><rect x="4" y="24" width="24" height="5"/>
      </svg>
    ),
  },
  {
    key: "grinding",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13" cy="13" r="8"/><circle cx="13" cy="13" r="1.6"/><path d="M3 26h26"/><path d="M20 19l3 3M24 17l3 2"/>
      </svg>
    ),
  },
  {
    key: "metalwork",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="12" width="9" height="9"/><rect x="20" y="12" width="9" height="9"/><path d="M12 16.5h8"/><path d="M6 21v5M26 21v5M3 26h9M20 26h9"/>
      </svg>
    ),
  },
  {
    key: "welding",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 27l11-11"/><path d="M16 16l3.5-3.5 3.5 3.5-3.5 3.5z"/><path d="M23 9l4-4M20.5 6.5l1.5-3.5M26.5 12.5l3.5-1.5"/>
      </svg>
    ),
  },
  {
    key: "abrasive",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="11"/><circle cx="12" cy="13" r="1.2"/><circle cx="19" cy="12" r="1.2"/><circle cx="14" cy="19" r="1.2"/><circle cx="20" cy="19" r="1.2"/><circle cx="16" cy="15.5" r="1.2"/>
      </svg>
    ),
  },
  {
    key: "bending",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20h12l10-10"/><path d="M4 25h24"/><path d="M16 20v-4"/>
      </svg>
    ),
  },
  {
    key: "laser",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="12" y="3" width="8" height="6"/><path d="M16 9v8"/><path d="M13 17h6l-3 4z"/><path d="M4 27h24"/>
      </svg>
    ),
  },
  {
    key: "surface",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="19" width="24" height="6"/><path d="M9 15v-3M15 15v-5M21 15v-3M27 15v-5"/>
      </svg>
    ),
  },
  {
    key: "prototyping",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 28V10l10-6 10 6v18"/><path d="M6 10l10 6 10-6M16 16v12"/>
      </svg>
    ),
  },
];

// Reference logos (transparent PNG/SVG in public/partners/). Ceka fűrész logo still
// pending from client — see task list F-09.
const partnerLogos = [
  { name: "Knorr-Bremse", src: "/partners/knorr-bremse.png" },
  { name: "Mercedes-Benz", src: "/partners/mercedes.png" },
  { name: "Hilti", src: "/partners/hilti.png", height: 32 },
  { name: "Freudenberg", src: "/partners/freudenberg.png", height: 32 },
  { name: "Sulzer", src: "/partners/sulzer.png", width: 100 },
  { name: "Phoenix Mecano", src: "/partners/phoenix-mecano.png", height: 45 },
  { name: "DewertOkin", src: "/partners/dewertokin.png", height: 45 },
  { name: "Zarges", src: "/partners/zarges.png", height: 32 },
  { name: "Keller", src: "/partners/keller.png" },
  { name: "Robel", src: "/partners/robel.png", height: 32 },
];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["home"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const faqItems = homeFaqs.map((_, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

  return (
    <>
      <JsonLd schema={faqSchema(homeFaqs)} />

      {/* Hero */}
      <Hero
        bgImage="/hero-home.jpg"
        label={`§ 01 — ${t("hero.label")}`}
        heading={
          <>
            {t("hero.heading.line1").replace(/\.$/, "")}
            <br />
            {t("hero.heading.line2").replace(/\.$/, "")}
          </>
        }
        lead={t("hero.lead")}
        actions={[
          { label: t("hero.actions.0.label"), href: p("/rfq/") },
          { label: t("hero.actions.1.label"), href: p("/contact/"), variant: "ghost" },
        ]}
      />

      {/* Stat strip */}
      <StatGrid
        stats={homeStats.map((s, i) => ({ ...s, label: t(`stats.home.${i}.label`) }))}
        columns={3}
      />

      {/* Photo band — temporary illustration */}
      <div className="relative w-full h-[clamp(280px,40vw,480px)] bg-surface-alt border-y border-border overflow-hidden">
        <Image
          src="/front.jpg"
          alt={t("image.factory.alt")}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Trusted by */}
      <TrustStrip label={t("trust.label")} logos={partnerLogos} />

      {/* Global footprint */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <WorldMap heading={t("worldmap.heading")} />
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 bg-background" id="capabilities">
        <Container>
          <SectionLabel>{`§ 02 — ${t("services.label")}`}</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {services.map(({ key, icon }, i) => (
              <Link
                key={key}
                href={p("/services/")}
                className="group flex flex-col items-start gap-4 bg-background p-7 transition-colors hover:bg-surface"
              >
                <span className="h-11 w-11 text-ink-secondary transition-colors group-hover:text-primary">
                  {icon}
                </span>
                <span className="text-[17px] font-bold uppercase leading-tight tracking-[-0.01em] text-ink transition-colors group-hover:text-primary">
                  {t(`services.${i}.title`)}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Key figures (dark) */}
      <StatGrid
        stats={keyFigures.map((s, i) => ({ ...s, label: t(`keyFigures.${i}.label`) }))}
        dark
        columns={3}
      />

      {/* Certifications */}
      <section className="py-16 bg-background border-b border-border" id="certifications">
        <Container>
          <SectionLabel>{`§ 04 — ${t("certifications.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertificationCard
                key={cert.name}
                name={cert.name}
                since={cert.since}
                logo={cert.logo}
                scope={t(`certifications.${i}.scope`)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-16 bg-background border-b border-border" id="industries">
        <Container>
          <SectionLabel>{`§ 06 — ${t("industries.label")}`}</SectionLabel>
          <div>
            {industries.map((ind, i) => (
              <IndustryRow
                key={ind.slug}
                index={String(i + 1).padStart(2, "0")}
                title={t(`industries.${i}.title`)}
                meta={t(`industries.${i}.meta`)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQAccordion
        label={`§ 08 — ${t("faq.label")}`}
        items={faqItems}
      />

      {/* CTA */}
      <CtaBlock
        label={`§ 09 — ${t("cta.label")}`}
        heading={t("cta.heading")}
        actions={[
          { label: t("cta.actions.0.label"), href: p("/rfq/") },
          { label: t("cta.actions.1.label"), href: p("/contact/"), variant: "ghost" },
        ]}
      />
    </>
  );
}
