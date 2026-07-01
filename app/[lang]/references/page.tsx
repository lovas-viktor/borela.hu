import type { Metadata } from "next";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import StatGrid from "@/components/blocks/StatGrid";
import { partners } from "@/data/partners";
import { caseStudies } from "@/data/cases";
import { referencesFaqs } from "@/data/faqs";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "References — Proven Where Precision Is Non-Negotiable",
  description:
    "Borela serves Knorr-Bremse, Mercedes-Benz, Hilti, Freudenberg, Sulzer and more. 70+ years of partnerships, ISO 9001 since 1996, Supplier of the Year 2009.",
  path: "/references/",
});

const trustNumbers = [
  { value: "7", label: "Major OEM partners" },
  { value: "1996", label: "ISO 9001 first certified" },
  { value: "2009", label: "Supplier of the Year" },
  { value: "5+", label: "Countries served" },
];

const awards = [
  { year: "2007", title: "Knorr-Bremse Product Safety Audit", desc: "First-time pass. Preferred Supplier status awarded." },
  { year: "2009", title: "Knorr-Bremse Supplier of the Year", desc: "Recognised for delivery performance and zero-defect rate." },
  { year: "2010", title: "Az Év Vállalkozása", desc: "Hungarian Entrepreneur of the Year — regional recognition for manufacturing excellence." },
  { year: "2016", title: "VDA 6.3 Process Audit", desc: "First certification. DACH automotive procurement standard." },
];

const whyStay = [
  { title: "Predictable quality", desc: "ISO 9001 since 1996. Every delivery includes dimensional report and material certificate." },
  { title: "Engineering dialogue", desc: "Our engineers speak English and German. You talk to people who understand your drawing, not a CSR." },
  { title: "Full cost transparency", desc: "No hidden surcharges. Heat treatment, inspection and logistics are itemised in every quote." },
  { title: "EU supply chain", desc: "No customs, no tariffs, no import paperwork. Delivery direct to your production line." },
];

export default async function ReferencesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["references"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const trustStats = trustNumbers.map((stat, i) => ({
    value: stat.value,
    label: t(`trustNumbers.${i}.label`),
  }));

  const faqItems = referencesFaqs.map((_, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "References", item: SITE_URL + "/references/" }])} />
      <JsonLd schema={faqSchema(referencesFaqs)} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.0"), href: p("/") }, { label: t("hero.breadcrumb.1") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[{ label: t("hero.action.0"), href: p("/rfq/") }]}
      />

      {/* Numbers */}
      <StatGrid stats={trustStats} dark columns={4} />

      {/* Partners */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("partners.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <div key={partner.name} className="p-5 border border-border bg-surface">
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{partner.name}</div>
                <div className="font-mono text-[11px] text-ink-tertiary mb-1">{t(`partners.${i}.industry`)}</div>
                {partner.partnerSince && (
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-primary">{t("partners.since.prefix")} {partner.partnerSince}</div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-ink-tertiary">
            {t("partners.disclaimer")}
          </p>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 02 — ${t("recognition.label")}`}</SectionLabel>
          <div className="flex flex-wrap gap-0 divide-x divide-border border border-border">
            {awards.map((award, i) => (
              <div key={award.year} className="p-6 flex-1 min-w-[200px]">
                <div className="font-mono text-[13px] tracking-[0.06em] text-primary font-semibold mb-2">{award.year}</div>
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{t(`awards.${i}.title`)}</div>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{t(`awards.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("caseStudies.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={cs.slug} className="grid sm:grid-cols-2 gap-0 border border-border overflow-hidden">
                <div
                  className={`h-48 sm:h-auto bg-surface-alt flex items-center justify-center ${i % 2 === 1 ? "sm:order-2" : ""}`}
                  role="img"
                  aria-label={`${t(`cases.${i}.title`)} ${t("caseStudies.photoAlt.suffix")}`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">{t("caseStudies.photoPlaceholder")}</span>
                </div>
                <div className="p-6 bg-surface">
                  <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary uppercase mb-2">
                    {cs.client} · {t(`cases.${i}.industry`)}
                  </div>
                  <h3 className="font-extrabold text-[17px] tracking-[-0.01em] uppercase text-ink mb-3">{t(`cases.${i}.title`)}</h3>
                  <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`cases.${i}.summary`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why partners stay */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 04 — ${t("whyStay.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyStay.map((item, i) => (
              <div key={item.title}>
                <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-2">{t(`whyStay.${i}.title`)}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`whyStay.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion label={`§ 05 — ${t("faq.label")}`} items={faqItems} />

      <CtaBlock
        heading={t("cta.heading")}
        subheading={t("cta.subheading")}
        actions={[{ label: t("cta.action.0"), href: p("/rfq/") }]}
      />
    </>
  );
}
