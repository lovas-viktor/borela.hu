import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import CertificationCard from "@/components/blocks/CertificationCard";
import TrustStrip from "@/components/blocks/TrustStrip";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import StatGrid from "@/components/blocks/StatGrid";
import { industries } from "@/data/industries";
import { certifications } from "@/data/certifications";
import { industriesFaqs } from "@/data/faqs";
import { partners } from "@/data/partners";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "Industries We Serve — Automotive, Commercial Vehicles & Engineering",
  description:
    "CNC contract machining for automotive Tier 1/2, commercial vehicles, power tools, sealing technology and general engineering. VDA 6.3 audited, ISO 9001 certified.",
  path: "/industries/",
});

const industryIcons: Record<string, React.ReactNode> = {
  automotive: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
      <path d="M4 20h24M6 20l3-7h14l3 7"/><circle cx="10" cy="24" r="2.5"/><circle cx="22" cy="24" r="2.5"/>
      <path d="M10 13h12"/>
    </svg>
  ),
  "commercial-vehicles": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
      <rect x="3" y="12" width="18" height="12"/><path d="M21 16h5l3 5v3h-8"/><circle cx="9" cy="26" r="2.5"/><circle cx="25" cy="26" r="2.5"/>
    </svg>
  ),
  "power-tools": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
      <path d="M8 20l4-4 2 2 8-10"/><path d="M22 4l4 4-2 2-4-4z"/><path d="M4 28l8-8"/>
    </svg>
  ),
  "sealing-technology": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
      <circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="5"/><path d="M16 6v4M16 22v4M6 16h4M22 16h4"/>
    </svg>
  ),
  "general-engineering": (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
      <path d="M16 4l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
    </svg>
  ),
};

const certMatrix = [
  { cert: "ISO 9001:2015", automotive: true, commercial: true, powerTools: true, sealing: true, general: true },
  { cert: "ISO 14001:2015", automotive: true, commercial: true, powerTools: false, sealing: true, general: false },
  { cert: "VDA 6.3", automotive: true, commercial: true, powerTools: false, sealing: false, general: false },
  { cert: "Knorr-Bremse PSA", automotive: true, commercial: true, powerTools: false, sealing: false, general: false },
];

export default async function IndustriesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["industries"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Industries", item: SITE_URL + "/industries/" }])} />
      <JsonLd schema={faqSchema(industriesFaqs)} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.0"), href: p("/") }, { label: t("hero.breadcrumb.1") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[{ label: t("hero.actions.0.label"), href: p("/rfq/") }]}
      />

      {/* Industry cards */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("section.01.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={ind.slug} className="p-6 border border-border bg-surface hover:bg-surface-alt transition-colors group">
                <div className="w-8 h-8 text-ink-secondary group-hover:text-primary mb-4 transition-colors">
                  {industryIcons[ind.slug]}
                </div>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2 group-hover:text-primary transition-colors">
                  {t(`industries.${i}.title`)}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.06em] text-ink-tertiary uppercase mb-3">{t(`industries.${i}.meta`)}</p>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`industries.${i}.description`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip label={`§ 02 — ${t("section.02.label")}`} partners={partners.map((p) => p.name)} />

      {/* Featured case */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("section.03.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative h-56 lg:h-auto min-h-56 bg-surface-alt border border-border overflow-hidden">
              <Image
                src="/brake.jpg"
                alt={t("case.image.alt")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary uppercase mb-2">Knorr-Bremse · {t("case.meta")}</div>
              <h3 className="font-extrabold text-[22px] tracking-[-0.02em] uppercase text-ink mb-3">{t("case.heading")}</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed mb-3">
                {t("case.body")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Key figures dark */}
      <StatGrid
        stats={[
          { value: t("stats.0.value"), label: t("stats.0.label") },
          { value: t("stats.1.value"), label: t("stats.1.label") },
          { value: t("stats.2.value"), label: t("stats.2.label") },
          { value: t("stats.3.value"), label: t("stats.3.label") },
        ]}
        dark
        columns={4}
      />

      {/* Certs grid */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 04 — ${t("section.04.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={t(`certifications.${i}.scope`)} />
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications matrix */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 05 — ${t("section.05.label")}`}</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">{t("certMatrix.header.certification")}</th>
                  {industries.map((ind, i) => (
                    <th key={ind.slug} className="pb-3 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary px-4 text-center">
                      {t(`industries.${i}.title`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {certMatrix.map((row) => (
                  <tr key={row.cert} className="border-b border-border">
                    <td className="py-3 pr-8 font-mono text-[12px] text-ink">{row.cert}</td>
                    {[row.automotive, row.commercial, row.powerTools, row.sealing, row.general].map((has, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {has ? (
                          <svg className="w-4 h-4 text-primary inline-block" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-label={t("certMatrix.yesLabel")}>
                            <path d="M3 8l3 3 7-7" />
                          </svg>
                        ) : (
                          <span className="text-ink-tertiary font-mono text-[10px]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FAQAccordion
        label={`§ 06 — ${t("section.06.label")}`}
        items={industriesFaqs.map((_, i) => ({ question: t(`faq.${i}.q`), answer: t(`faq.${i}.a`) }))}
      />

      <CtaBlock
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
