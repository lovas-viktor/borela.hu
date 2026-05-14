import type { Metadata } from "next";
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

export default function IndustriesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Industries", item: SITE_URL + "/industries/" }])} />
      <JsonLd schema={faqSchema(industriesFaqs)} />

      <Hero
        label="§ 01 — Industries"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        heading="Industries we serve — automotive to general engineering"
        lead="Borela is a precision contract machining partner for European automotive OEMs and Tier 1/2 suppliers, commercial vehicle manufacturers, power tool companies and general engineering businesses."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />

      <TrustStrip label="§ 02 — Trusted by" partners={partners.map((p) => p.name)} />

      {/* Industry cards */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Industries</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.slug} className="p-6 border border-border bg-surface hover:bg-surface-alt transition-colors group">
                <div className="w-8 h-8 text-ink-secondary group-hover:text-primary mb-4 transition-colors">
                  {industryIcons[ind.slug]}
                </div>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2 group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.06em] text-ink-tertiary uppercase mb-3">{ind.meta}</p>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key figures dark */}
      <StatGrid
        stats={[
          { value: "70+", label: "Years serving European OEMs" },
          { value: "7", label: "Major OEM partners" },
          { value: "VDA 6.3", label: "Automotive process audit" },
          { value: "ISO 9001", label: "Since 1996" },
        ]}
        dark
        columns={4}
      />

      {/* Certifications matrix */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 05 — Certifications by industry</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">Certification</th>
                  {industries.map((ind) => (
                    <th key={ind.slug} className="pb-3 font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary px-4 text-center">
                      {ind.title}
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
                          <svg className="w-4 h-4 text-primary inline-block" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-label="Yes">
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

      {/* Featured case */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 06 — Featured case study</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            <div
              className="h-56 bg-surface-alt border border-border flex items-center justify-center"
              role="img"
              aria-label="Case study photo placeholder"
            >
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">Case study photo</span>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary uppercase mb-2">Knorr-Bremse · Commercial vehicles</div>
              <h3 className="font-extrabold text-[22px] tracking-[-0.02em] uppercase text-ink mb-3">High-volume brake components</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed mb-3">
                25,000+ precision turned brake system components per month. Supplier of the Year recognition in 2009. Multi-platform, multi-year partnership maintained through VDA 6.3 audit compliance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certs grid */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 07 — Certifications</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={cert.scope} />
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion label="§ 08 — Frequently asked questions" items={industriesFaqs} />

      <CtaBlock
        heading="Your industry, our precision"
        subheading="Tell us about your project and we'll confirm fit within 24 hours."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "Contact us", href: "/contact/", variant: "ghost" },
        ]}
      />
    </>
  );
}
