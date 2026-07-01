import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import StatGrid from "@/components/blocks/StatGrid";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import SpecCard from "@/components/blocks/SpecCard";
import CertificationCard from "@/components/blocks/CertificationCard";
import IndustryRow from "@/components/blocks/IndustryRow";
import TrustStrip from "@/components/blocks/TrustStrip";
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
  { value: "1953", label: "Founded" },
  { value: "70+", label: "Years" },
  { value: "±0.01", label: "Tolerance (mm)", unit: "mm" },
];

const keyFigures = [
  { value: "1953", label: "Founded" },
  { value: "70+", label: "Years of engineering heritage" },
  { value: "40", label: "CNC lathes" },
  { value: "6", label: "Machining centers" },
  { value: "500–100K", label: "Pieces per order" },
  { value: "±0.01", label: "Typical tolerance (mm)", unit: "mm" },
];

const services = [
  {
    title: "CNC Turning",
    href: "/services/cnc-turning/",
    description: "High-volume precision turning across 40 lathes for complex geometries.",
    specs: [{ label: "Diameter", value: "Ø1–90 mm" }, { label: "Tolerance", value: "±0.01 mm" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="3" y="20" width="20" height="6"/><path d="M9 20v-4h6l3-4h6"/><circle cx="26" cy="12" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "CNC Milling",
    href: "/services/cnc-milling/",
    description: "6 machining centers — 3 horizontal, 3 vertical — for complex parts.",
    specs: [{ label: "Working area", value: "800 × 450 mm" }, { label: "Tolerance", value: "±0.01 mm" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="10" cy="10" r="3.2"/><circle cx="22" cy="10" r="3.2"/>
        <circle cx="10" cy="22" r="3.2"/><circle cx="22" cy="22" r="3.2"/>
        <path d="M10 5.5V3M10 19.5V17M22 5.5V3M22 19.5V17M5.5 10H3M19.5 10H17"/>
      </svg>
    ),
  },
  {
    title: "Heat Treatment",
    href: "/services/heat-treatment/",
    description: "Coordinated through a vetted partner — full workflow managed by Borela.",
    specs: [{ label: "Processes", value: "Hardening · Tempering" }, { label: "Coordination", value: "End-to-end" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4c-2 4 2 6 0 10s-4 6-2 10c1.5 3 4 4 6 4"/>
        <path d="M22 8c-1.5 3 1.5 4.5 0 7.5s-3 4.5-1.5 7.5"/><path d="M10 10c-1 2 1 3 0 5s-2 3-1 5"/>
      </svg>
    ),
  },
  {
    title: "Press Work",
    href: "/services/press-work/",
    description: "Mechanical pressing operations integrated into the production line.",
    specs: [{ label: "Operations", value: "Forming · Stamping" }, { label: "Integration", value: "In-line" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="6" y="3" width="20" height="5"/><path d="M11 8v8M21 8v8"/>
        <rect x="8" y="16" width="16" height="4"/><rect x="4" y="24" width="24" height="5"/>
      </svg>
    ),
  },
  {
    title: "3D Measurement",
    href: "/services/measurement/",
    description: "In-house CMM, contour measurement, and micro-hardness testing.",
    specs: [{ label: "Equipment", value: "CMM · Contour" }, { label: "Testing", value: "100% in-house" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M4 26V6h24v20M16 6v20M4 14h12M4 20h12M16 12h12M16 18h12"/>
        <circle cx="22" cy="24" r="2"/>
      </svg>
    ),
  },
  {
    title: "Prototyping",
    href: "/services/prototyping/",
    description: "Sample production and validation before committing to series.",
    specs: [{ label: "Lead time", value: "2–4 weeks" }, { label: "Output", value: "Sample parts" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
        <path d="M6 28V10l10-6 10 6v18"/><path d="M6 10l10 6 10-6M16 16v12"/>
      </svg>
    ),
  },
];

const whyItems = [
  { n: "01", title: "70+ years family heritage", desc: "Three generations of precision engineering, uninterrupted since 1953." },
  { n: "02", title: "EU manufacturing, Eastern-European cost", desc: "Western-European quality standards at significantly lower cost — no customs, no trade barriers." },
  { n: "03", title: "Blue-chip references", desc: "Pre-audited by Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg — your audit effort is already half done." },
  { n: "04", title: "Single point of contact", desc: "We manage the full chain including coordinated heat treatment. One contract, one supplier, ready-to-install parts." },
];

const partnerNames = ["Mercedes-Benz", "Knorr-Bremse", "Hilti", "Freudenberg", "Sulzer", "Phoenix Mecano", "Zarges"];

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
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
        label={`§ 01 — ${t("hero.label")}`}
        heading={
          <>
            {t("hero.heading.line1").replace(/\.$/, "")}
            <span className="text-primary">.</span>
            <br />
            {t("hero.heading.line2").replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </>
        }
        lead={t("hero.lead")}
        actions={[
          { label: t("hero.actions.0.label"), href: p("/rfq/") },
          { label: t("hero.actions.1.label"), href: p("/capabilities/"), variant: "ghost" },
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
      <TrustStrip label={t("trust.label")} partners={partnerNames} />

      {/* Services */}
      <section className="py-16 bg-background" id="capabilities">
        <Container>
          <SectionLabel>{`§ 02 — ${t("services.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map(({ href, icon, specs }, i) => (
              <SpecCard
                key={href}
                href={p(href)}
                icon={icon}
                title={t(`services.${i}.title`)}
                description={t(`services.${i}.description`)}
                specs={specs.map((spec, j) => ({
                  label: t(`services.${i}.specs.${j}.label`),
                  value: spec.value,
                }))}
              />
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
                scope={t(`certifications.${i}.scope`)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Borela */}
      <section className="py-16 bg-surface border-b border-border" id="why">
        <Container>
          <SectionLabel>{`§ 05 — ${t("why.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyItems.map((item, i) => (
              <article key={item.n}>
                <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary mb-3">{item.n}</div>
                <h3 className="font-bold text-[16px] text-ink mb-2 uppercase tracking-[-0.01em]">{t(`why.${i}.title`)}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`why.${i}.desc`)}</p>
              </article>
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

      {/* Featured case study */}
      <section className="py-16 bg-surface border-b border-border" id="case">
        <Container>
          <SectionLabel>{`§ 07 — ${t("case.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-64 lg:h-auto lg:min-h-[256px] bg-surface-alt border border-border overflow-hidden">
              <Image
                src="/brake.jpg"
                alt="Precision turned brake system components"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary uppercase mb-2">Knorr-Bremse</div>
              <h3 className="font-extrabold text-[24px] tracking-[-0.02em] uppercase text-ink mb-4">
                {t("case.title")}
              </h3>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-3">
                {t("case.body1")}
              </p>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-6">
                {t("case.body2")}
              </p>
            </div>
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
        subheading={t("cta.subheading")}
        actions={[
          { label: t("cta.actions.0.label"), href: p("/rfq/") },
          { label: t("cta.actions.1.label"), href: p("/contact/"), variant: "ghost" },
        ]}
      />
    </>
  );
}
