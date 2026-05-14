import type { Metadata } from "next";
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
  { value: "4", label: "ISO/VDA certifications" },
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

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Capabilities", item: SITE_URL + "/capabilities/" }])} />
      <JsonLd schema={faqSchema(capabilitiesFaqs)} />

      <Hero
        label="§ 01 — Capabilities"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
        heading="What we can build for you — machines, materials & measurements"
        lead="40 CNC lathes, 6 machining centers, in-house CMM, ISO 9001 and VDA 6.3 audited. Everything required for series production of precision machined parts."
        actions={[{ label: "Request a Quote", href: "/rfq/" }]}
      />

      <StatGrid stats={heroStats} columns={5} />

      {/* Overview */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 02 — Overview</SectionLabel>
          <p className="text-[16px] text-ink-secondary leading-relaxed max-w-2xl">
            Borela operates a fully integrated CNC machining facility in central Hungary, producing precision turned and milled components for automotive Tier 1/2, power tool and engineering OEM customers. All operations — from raw material receipt to final inspection and CMM measurement — are performed at our own sites under ISO 9001:2015 quality control.
          </p>
        </Container>
      </section>

      {/* Machine park */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Machine park</SectionLabel>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">Category</th>
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary pr-8">Qty</th>
                  <th className="text-left pb-3 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">Key specifications</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((m, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-8 font-sans font-medium text-[14px] text-ink">{m.category}</td>
                    <td className="py-4 pr-8 font-mono text-[14px] text-ink">{m.count}</td>
                    <td className="py-4 font-mono text-[12px] text-ink-secondary">{m.spec}</td>
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
          <SectionLabel>§ 04 — Materials</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div key={mat.name} className="p-5 border border-border">
                <div className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{mat.name}</div>
                <div className="font-mono text-[11px] text-ink-secondary">{mat.examples}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tolerances */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 05 — Tolerances & precision</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-4">What we hold</h3>
              <div className="space-y-0">
                {tolerances.map((row) => (
                  <div key={row.process} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <span className="font-mono text-[12px] text-ink">{row.process}</span>
                      {row.note && <span className="ml-2 font-mono text-[10px] text-ink-tertiary">{row.note}</span>}
                    </div>
                    <span className="font-mono text-[12px] font-medium text-ink ml-4">{row.typical}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-alt border border-border p-6">
              <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-4">When we coordinate</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed mb-3">
                Tighter tolerances (±0.005 mm on specific features) are achievable with cylindrical grinding — coordinated via our precision grinding partner. The same managed-service model as heat treatment.
              </p>
              <p className="text-[14px] text-ink-secondary leading-relaxed">
                Discuss your specific drawing requirements with our engineers before RFQ submission.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Measurement room */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 06 — Measurement room</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div
              className="h-64 bg-surface-alt border border-border flex items-center justify-center"
              role="img"
              aria-label="CMM measurement room photo placeholder"
            >
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">
                CMM measurement room — photo
              </span>
            </div>
            <div>
              <p className="text-[16px] text-ink-secondary leading-relaxed mb-4">
                Our ISO 9001-controlled measurement room houses a coordinate measuring machine (CMM), contour measuring instrument and micro-hardness tester. Every order ships with a dimensional measurement report.
              </p>
              <ul className="space-y-2">
                {["CMM dimensional reports (CPK/PPK available)", "Contour and surface measurement", "Micro-hardness testing", "First Article Inspection (FAI) standard", "Material certificates on every delivery"].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono text-[12px] text-ink-secondary">
                    <span className="text-primary">→</span> {item}
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
          <SectionLabel>§ 07 — Certifications</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={cert.scope} />
            ))}
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="py-14 bg-surface-dark border-b border-border-dark">
        <Container>
          <SectionLabel dark>§ 08 — By the numbers</SectionLabel>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            {capNumbers.slice(0, 9).map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-extrabold text-[32px] leading-none text-on-surface-dark mb-2">{s.value}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-on-surface-dark/50">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion label="§ 09 — Frequently asked questions" items={capabilitiesFaqs} />

      <CtaBlock
        heading="Ready to test our capabilities?"
        subheading="Send us your drawing and get a detailed technical quote within 2 business days."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "Contact us", href: "/contact/", variant: "ghost" },
        ]}
      />
    </>
  );
}
