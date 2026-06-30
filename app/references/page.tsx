import type { Metadata } from "next";
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

export default function ReferencesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "References", item: SITE_URL + "/references/" }])} />
      <JsonLd schema={faqSchema(referencesFaqs)} />

      <Hero
        label="§ 01 — References"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "References" }]}
        heading="Proven where precision is non-negotiable"
        lead="Seven major OEM partners across automotive, commercial vehicles, power tools and engineering. 70+ years of continuous production and unbroken quality records."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />

      {/* Numbers */}
      <StatGrid stats={trustNumbers} dark columns={4} />

      {/* Partners */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 01 — Partners</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="p-5 border border-border bg-surface">
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{p.name}</div>
                <div className="font-mono text-[11px] text-ink-tertiary mb-1">{p.industry}</div>
                {p.partnerSince && (
                  <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-primary">Partner since {p.partnerSince}</div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-ink-tertiary">
            Partner names shown for factual reference. Logo usage requires brand-use permission from each company.
          </p>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 02 — Recognition & awards</SectionLabel>
          <div className="flex flex-wrap gap-0 divide-x divide-border border border-border">
            {awards.map((award) => (
              <div key={award.year} className="p-6 flex-1 min-w-[200px]">
                <div className="font-mono text-[13px] tracking-[0.06em] text-primary font-semibold mb-2">{award.year}</div>
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{award.title}</div>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Case studies</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={cs.slug} className={`grid sm:grid-cols-2 gap-0 border border-border overflow-hidden ${i % 2 === 1 ? "sm:direction-rtl" : ""}`}>
                <div
                  className="h-48 sm:h-auto bg-surface-alt flex items-center justify-center"
                  role="img"
                  aria-label={`${cs.title} photo placeholder`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">Photo</span>
                </div>
                <div className="p-6 bg-surface">
                  <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary uppercase mb-2">
                    {cs.client} · {cs.industry}
                  </div>
                  <h3 className="font-extrabold text-[17px] tracking-[-0.01em] uppercase text-ink mb-3">{cs.title}</h3>
                  <p className="text-[14px] text-ink-secondary leading-relaxed">{cs.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why partners stay */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 04 — Why partners stay</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyStay.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion label="§ 05 — Frequently asked questions" items={referencesFaqs} />

      <CtaBlock
        heading="Join our reference list"
        subheading="Submit your drawing for a no-obligation quote. An engineer replies within 2 business days."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />
    </>
  );
}
