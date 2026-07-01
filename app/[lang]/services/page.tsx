import type { Metadata } from "next";
import Image from "next/image";
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
  { n: "01", title: "Drawing review", desc: "We check manufacturability, tolerances and material spec. We flag issues before quoting." },
  { n: "02", title: "Quote within 2 days", desc: "A detailed price, lead time and FAI plan — reviewed by an engineer, not an auto-responder." },
  { n: "03", title: "First article", desc: "Sample production with full FAI report, CMM report and material certificate." },
  { n: "04", title: "Series production", desc: "500–100,000 pieces, with in-process SPC and delivery to your agreed schedule." },
];

const toleranceData = [
  { label: "CNC turning (standard)", value: "±0.05 mm" },
  { label: "CNC turning (precision)", value: "±0.01 mm" },
  { label: "CNC milling (standard)", value: "±0.05 mm" },
  { label: "CNC milling (precision)", value: "±0.01 mm" },
  { label: "Surface roughness", value: "Ra 0.8–3.2 μm" },
  { label: "Thread tolerance", value: "6H / 6g (ISO)" },
];

export default function ServicesPage() {
  const serviceList = services.map((s) => ({ name: s.title, url: `${SITE_URL}${s.href}` }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Services", item: SITE_URL + "/services/" }])} />
      <JsonLd schema={serviceSchema({ name: "CNC Machining & Manufacturing Services", url: SITE_URL + "/services/", description: "Full-service CNC turning and milling, press work, heat treatment coordination, assembly and 3D measurement for automotive and engineering OEMs.", services: serviceList })} />
      <JsonLd schema={faqSchema(servicesFaqs)} />

      <Hero
        label="§ 01 — Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        heading="CNC machining & precision engineering services"
        lead="Every capability required for series production of precision machined parts — under one roof, with one point of contact."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />

      {/* Photo band — temporary illustration */}
      <div className="relative w-full h-[clamp(260px,36vw,440px)] bg-surface-alt border-y border-border overflow-hidden">
        <Image
          src="/services.jpg"
          alt="Borela CNC machining in progress"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Services grid */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 01 — Our services</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((svc) => (
              <SpecCard
                key={svc.slug}
                title={svc.title}
                description={svc.description}
                specs={svc.specs}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 02 — How it works</SectionLabel>
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
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{step.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Materials */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Materials we machine</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Steel", examples: "C45, 42CrMo4, 16MnCr5, case-hardening steels" },
              { name: "Aluminium", examples: "EN AW-6082, 7075, AlSi-alloys" },
              { name: "Stainless steel", examples: "1.4301 (304), 1.4404 (316L), duplex grades" },
              { name: "Brass & Copper alloys", examples: "CuZn39Pb3, CuSn8, CuCr1Zr" },
              { name: "Cast iron / GGG", examples: "EN-GJL-250, EN-GJS-400, nodular iron" },
            ].map((mat) => (
              <div key={mat.name} className="p-5 border border-border bg-surface">
                <div className="font-bold text-[14px] text-ink mb-1 uppercase tracking-[-0.01em]">{mat.name}</div>
                <div className="font-mono text-[11px] text-ink-secondary">{mat.examples}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tolerances */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel className="text-center">§ 04 — Tolerances & precision</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-px bg-border max-w-2xl mx-auto">
            {toleranceData.map((row) => (
              <div key={row.label} className="flex items-center justify-between p-4 bg-surface">
                <span className="font-mono text-[11px] tracking-[0.06em] text-ink-secondary">{row.label}</span>
                <span className="font-mono text-[12px] font-medium text-ink">{row.value}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality */}
      <StatGrid
        stats={[
          { value: "ISO 9001", label: "Certified since 1996" },
          { value: "VDA 6.3", label: "Automotive process audit" },
          { value: "CMM", label: "In-house measurement" },
        ]}
        dark
        columns={3}
      />

      {/* Trusted by */}
      <TrustStrip label="§ 05 — Trusted by" partners={partners.map((p) => p.name)} />

      <FAQAccordion label="§ 06 — Frequently asked questions" items={servicesFaqs} />

      <CtaBlock
        heading="Ready to discuss your parts?"
        subheading="Upload a drawing and get a quote within 2 business days."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />
    </>
  );
}
