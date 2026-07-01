import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import SpecCard from "@/components/blocks/SpecCard";
import StatGrid from "@/components/blocks/StatGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import TrustStrip from "@/components/blocks/TrustStrip";
import { services } from "@/data/services";
import { servicesFaqs } from "@/data/faqs";
import { partners } from "@/data/partners";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "CNC Machining Services — Contract Manufacturing",
  description:
    "Full-service CNC turning, milling, press work, prototyping, plus heat treatment via trusted partner. 500–100,000 pc series, ±0.01 mm tolerance, ISO 9001 / VDA 6.3 audited.",
  path: "/services/",
});

const processSteps = [
  { n: "01" },
  { n: "02" },
  { n: "03" },
  { n: "04" },
];

const toleranceData = [
  { value: "±0.05 mm" },
  { value: "±0.01 mm" },
  { value: "±0.05 mm" },
  { value: "±0.01 mm" },
  { value: "Ra 0.8–3.2 μm" },
  { value: "6H / 6g (ISO)" },
];

const materials = [
  { examples: "C45, 42CrMo4, 16MnCr5, case-hardening steels" },
  { examples: "EN AW-6082, 7075, AlSi-alloys" },
  { examples: "1.4301 (304), 1.4404 (316L), duplex grades" },
  { examples: "CuZn39Pb3, CuSn8, CuCr1Zr" },
  { examples: "EN-GJL-250, EN-GJS-400, nodular iron" },
];

export default async function ServicesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["services"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const serviceList = services.map((s) => ({ name: s.title, url: `${SITE_URL}${s.href}` }));

  const faqItems = servicesFaqs.map((_, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Services", item: SITE_URL + "/services/" }])} />
      <JsonLd schema={serviceSchema({ name: "CNC Machining & Manufacturing Services", url: SITE_URL + "/services/", description: "Full-service CNC turning and milling, press work, heat treatment coordination, assembly and 3D measurement for automotive and engineering OEMs.", services: serviceList })} />
      <JsonLd schema={faqSchema(servicesFaqs)} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.0"), href: p("/") }, { label: t("hero.breadcrumb.1") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[{ label: t("hero.action.0.label"), href: p("/rfq/") }]}
      />

      {/* Photo band — temporary illustration */}
      <div className="relative w-full h-[clamp(260px,36vw,440px)] bg-surface-alt border-y border-border overflow-hidden">
        <Image
          src="/services.jpg"
          alt={t("photoBand.alt")}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Services grid */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("servicesGrid.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((svc, i) => (
              <SpecCard
                key={svc.slug}
                title={t(`services.${i}.title`)}
                description={t(`services.${i}.description`)}
                specs={svc.specs.map((spec, j) => ({
                  label: t(`services.${i}.specs.${j}.label`),
                  value: t(`services.${i}.specs.${j}.value`),
                }))}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 02 — ${t("howItWorks.label")}`}</SectionLabel>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {processSteps.map((step, i) => (
              <li key={step.n} className="flex flex-col">
                {/* Step marker + connector line (links the four steps into one process) */}
                <div className="relative flex items-center mb-5">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-primary bg-surface font-mono text-[13px] font-semibold text-primary">
                    {step.n}
                  </span>
                  {i < processSteps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-px w-[calc(100%-2.5rem)] bg-border-strong"
                    />
                  )}
                </div>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{t(`process.${i}.title`)}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`process.${i}.desc`)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Materials */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("materials.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat, i) => (
              <div key={i} className="p-5 border border-border bg-surface">
                <div className="font-bold text-[14px] text-ink mb-1 uppercase tracking-[-0.01em]">{t(`materials.${i}.name`)}</div>
                <div className="font-mono text-[11px] text-ink-secondary">{t(`materials.${i}.examples`)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tolerances */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel className="text-center">{`§ 04 — ${t("tolerances.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px bg-border max-w-2xl mx-auto">
            {toleranceData.map((row, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-surface">
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink-secondary">{t(`tolerances.${i}.label`)}</span>
                <span className="font-mono text-[12px] font-medium text-ink">{t(`tolerances.${i}.value`)}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality */}
      <StatGrid
        stats={[
          { value: t("quality.0.value"), label: t("quality.0.label") },
          { value: t("quality.1.value"), label: t("quality.1.label") },
          { value: t("quality.2.value"), label: t("quality.2.label") },
        ]}
        dark
        columns={3}
      />

      {/* Trusted by */}
      <TrustStrip label={`§ 05 — ${t("trustStrip.label")}`} partners={partners.map((p) => p.name)} />

      <FAQAccordion label={`§ 06 — ${t("faq.label")}`} items={faqItems} />

      <CtaBlock
        heading={t("cta.heading")}
        subheading={t("cta.subheading")}
        actions={[{ label: t("cta.action.0.label"), href: p("/rfq/") }]}
      />
    </>
  );
}
