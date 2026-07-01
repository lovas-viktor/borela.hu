import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, contactPageSchema } from "@/components/seo/schemas";
import SectionLabel from "@/components/primitives/SectionLabel";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import TrustStrip from "@/components/blocks/TrustStrip";
import CertificationCard from "@/components/blocks/CertificationCard";
import RfqForm from "@/components/forms/RfqForm";
import { certifications } from "@/data/certifications";
import { rfqFaqs } from "@/data/faqs";
import { partners } from "@/data/partners";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "Request a Quote — Upload Your Drawing",
  description:
    "Upload your drawing and get a meaningful answer within 2 business days — reviewed by an engineer, not an auto-responder. CNC turning, milling, press work, assembly.",
  path: "/rfq/",
});

export default async function RfqPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["rfq"]?.[k] ?? k;
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Request a Quote", item: SITE_URL + "/rfq/" }])} />
      <JsonLd schema={contactPageSchema(SITE_URL + "/rfq/", "Request a CNC Machining Quote — Borela BT.")} />
      <JsonLd schema={faqSchema(rfqFaqs)} />

      {/* Page hero */}
      <div className="py-12 bg-background border-b border-border">
        <div className="max-w-[880px] mx-auto px-7">
          <SectionLabel>§ — {t("hero.label")}</SectionLabel>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.04] tracking-[-0.02em] uppercase text-ink mb-4">
            {t("hero.heading")}
          </h1>
          <p className="text-[17px] text-ink-secondary leading-relaxed max-w-[560px] mb-6">
            {t("hero.lead")}
          </p>
          {/* Hero trust */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: t("hero.stat.0.label"), value: t("hero.stat.0.value") },
              { label: t("hero.stat.1.label"), value: t("hero.stat.1.value") },
              { label: t("hero.stat.2.label"), value: t("hero.stat.2.value") },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-primary pl-4">
                <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-0.5">{item.label}</div>
                <div className="font-sans font-semibold text-[14px] text-ink">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <RfqForm dict={dict["rfq"] ?? {}} />

      {/* How it works (process, connector-line style) */}
      <section className="py-14 bg-surface border-y border-border">
        <div className="max-w-[1180px] mx-auto px-7">
          <SectionLabel>{t("prepare.label")}</SectionLabel>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="flex flex-col">
                {/* Step marker + connector line */}
                <div className="relative flex items-center mb-5">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-primary bg-surface font-mono text-[13px] font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < 3 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-px w-[calc(100%-2.5rem)] bg-border-strong"
                    />
                  )}
                </div>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{t(`prepare.cards.${i}.title`)}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`prepare.cards.${i}.desc`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust */}
      <section className="py-14 bg-background border-b border-border">
        <div className="max-w-[1180px] mx-auto px-7">
          <SectionLabel>{t("certifications.label")}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} />
            ))}
          </div>
          <TrustStrip partners={partners.map((p) => p.name)} />
        </div>
      </section>

      <FAQAccordion label={t("faq.label")} items={rfqFaqs} />
    </>
  );
}
