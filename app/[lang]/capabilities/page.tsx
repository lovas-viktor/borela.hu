import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import StatGrid from "@/components/blocks/StatGrid";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import CertificationCard from "@/components/blocks/CertificationCard";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import { certifications } from "@/data/certifications";
import { machines, materials, tolerances } from "@/data/capabilities";
import { capabilitiesFaqs } from "@/data/faqs";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "CNC Machining Capabilities — Machine Park, Materials & Tolerances",
  description:
    "What we can build for you: 40 CNC lathes, 6 machining centers, ±0.01 mm tolerance, ISO 9001 / VDA 6.3 audited. Full capability overview for automotive and engineering OEMs.",
  path: "/capabilities/",
});

const heroStats = [
  { value: "40", label: "CNC lathes" },
  { value: "6", label: "Machining centers" },
  { value: "±0.01", label: "Typical tolerance (mm)", unit: "mm" },
  { value: "5,000", label: "m² total floor area", unit: "m²" },
];

const capNumbers = [
  { value: "40", label: "CNC lathes" },
  { value: "6", label: "Machining centers" },
  { value: "±0.01", label: "Tolerance (mm)", unit: "mm" },
  { value: "5K", label: "m² floor area", unit: "m²" },
  { value: "2", label: "CMM machines" },
  { value: "50+", label: "Employees" },
  { value: "70+", label: "Years heritage" },
  { value: "4", label: "Certifications" },
  { value: "2", label: "Production shifts" },
];

export default async function CapabilitiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = (await params) as { lang: Locale };
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["capabilities"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const faqItems = capabilitiesFaqs.map((item, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Capabilities", item: SITE_URL + "/capabilities/" }])} />
      <JsonLd schema={faqSchema(capabilitiesFaqs)} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.0"), href: p("/") }, { label: t("hero.breadcrumb.1") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[{ label: t("hero.action.0.label"), href: p("/rfq/") }]}
      />

      <StatGrid
        stats={heroStats.map((s, i) => ({ ...s, label: t(`heroStats.${i}.label`) }))}
        columns={4}
      />

      {/* Photo band — temporary illustration */}
      <div className="relative w-full h-[clamp(260px,36vw,440px)] bg-surface-alt border-y border-border overflow-hidden">
        <Image
          src="/cnc-machines.jpg"
          alt={t("photoband.alt")}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overview */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("overview.label")}`}</SectionLabel>
          <p className="text-[16px] text-ink-secondary leading-relaxed max-w-2xl">
            {t("overview.body")}
          </p>
        </Container>
      </section>

      {/* Machine park */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 02 — ${t("machinepark.label")}`}</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">{t("machinepark.table.header.category")}</th>
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">{t("machinepark.table.header.qty")}</th>
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">{t("machinepark.table.header.spec")}</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((m, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-8 font-sans font-medium text-[14px] text-ink">{t(`machines.${i}.category`)}</td>
                    <td className="py-4 pr-8 font-mono text-[14px] text-ink">{m.count}</td>
                    <td className="py-4 font-mono text-[12px] text-ink-secondary">{t(`machines.${i}.spec`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Materials */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("materials.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat, i) => (
              <div key={mat.name} className="p-5 border border-border">
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{t(`materials.${i}.name`)}</div>
                <div className="font-mono text-[11px] text-ink-secondary">{t(`materials.${i}.examples`)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tolerances */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 04 — ${t("tolerances.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-4">{t("tolerances.left.heading")}</h3>
              <div className="space-y-0">
                {tolerances.map((row, i) => (
                  <div key={row.process} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <span className="font-mono text-[12px] text-ink">{t(`tolerances.${i}.process`)}</span>
                      {row.note && <span className="ml-2 font-mono text-[10px] text-ink-tertiary">{t(`tolerances.${i}.note`)}</span>}
                    </div>
                    <span className="font-mono text-[12px] font-medium text-ink ml-4">{row.typical}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-alt border border-border p-6">
              <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-4">{t("tolerances.right.heading")}</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed mb-3">
                {t("tolerances.right.body.0")}
              </p>
              <p className="text-[14px] text-ink-secondary leading-relaxed">
                {t("tolerances.right.body.1")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Measurement room */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 05 — ${t("measurement.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* TEMPORARY: measuring.jpg carries a "Carl Zeiss AG" copyright in its
                EXIF metadata — likely NOT an original Borela photo. MUST be replaced
                with an own/licensed CMM photo before launch (legal + credibility). */}
            <div className="relative h-64 bg-surface-alt border border-border overflow-hidden">
              <Image
                src="/measuring.jpg"
                alt={t("measurement.image.alt")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[16px] text-ink-secondary leading-relaxed mb-4">
                {t("measurement.body")}
              </p>
              <ul className="space-y-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-[12px] text-ink-secondary">
                    <span className="text-primary">→</span> {t(`measurement.list.${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 06 — ${t("certifications.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={t(`cert.${i}.scope`)} />
            ))}
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="py-14 bg-surface-dark border-b border-border-dark">
        <Container>
          <SectionLabel dark>{`§ 07 — ${t("numbers.label")}`}</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            {capNumbers.slice(0, 9).map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="font-extrabold text-[32px] leading-none text-on-surface-dark mb-2">{s.value}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-on-surface-dark/50">{t(`numbers.${i}.label`)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion label={`§ 08 — ${t("faq.label")}`} items={faqItems} />

      <CtaBlock
        heading={t("cta.heading")}
        subheading={t("cta.subheading")}
        actions={[
          { label: t("cta.action.0.label"), href: p("/rfq/") },
          { label: t("cta.action.1.label"), href: p("/contact/"), variant: "ghost" },
        ]}
      />
    </>
  );
}
