import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, aboutPageSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import CertificationCard from "@/components/blocks/CertificationCard";
import TrustStrip from "@/components/blocks/TrustStrip";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import { certifications } from "@/data/certifications";
import { locations } from "@/data/locations";
import { aboutFaqs } from "@/data/faqs";
import { partners } from "@/data/partners";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "About Borela BT. — 70+ Years of Precision Engineering",
  description:
    "Seven decades of precision — a Hungarian engineering family business. Founded 1953, ISO 9001 since 1996, Knorr-Bremse Preferred Supplier since 2007. Three sites in central Hungary.",
  path: "/about/",
});

const timeline = [
  { year: "1953", event: "Engineering heritage begins — Bognár Lajos founds a precision machine workshop in Izsák, Hungary." },
  { year: "1990", event: "Borela BT. formally established. CNC machining expansion begins." },
  { year: "1996", event: "ISO 9001 quality management certification achieved — one of the first Hungarian precision machining SMEs." },
  { year: "2005", event: "ISO 14001 environmental management certification." },
  { year: "2007", event: "Knorr-Bremse Product Safety Audit passed first-time. Preferred Supplier status awarded." },
  { year: "2008", event: "Fülöpszállás secondary plant opens — 2,000 m² additional capacity." },
  { year: "2009", event: "Knorr-Bremse Supplier of the Year." },
  { year: "2010", event: "Az Év Vállalkozása — Hungarian Entrepreneur of the Year recognition." },
  { year: "2016", event: "VDA 6.3 process audit certification — meeting DACH automotive procurement standard." },
  { year: "2019", event: "Mercedes-Benz Manufacturing Hungary partnership begins." },
  { year: "2020s", event: "New production hall at Jakabszállás. Heat treatment formally moved to coordinated specialist partner." },
  { year: "Today", event: "50 employees, 40 CNC lathes, 6 machining centers, 5,000 m² across three sites." },
];

const stats = [
  { value: "1953", label: "Engineering heritage since" },
  { value: "70+", label: "Years of experience" },
  { value: "50", label: "Employees" },
  { value: "3", label: "Production sites" },
  { value: "40", label: "CNC lathes" },
  { value: "6", label: "Machining centers" },
  { value: "500–100K", label: "Pieces per order" },
  { value: "±0.01", label: "Tolerance (mm)", unit: "mm" },
];

const values = [
  { n: "01", title: "Engineering integrity", desc: "We won't quote what we can't make. Every drawing is reviewed before we price." },
  { n: "02", title: "Long-term partnership", desc: "Our average customer relationship exceeds 8 years. We grow with your programmes." },
  { n: "03", title: "Quality as baseline", desc: "ISO 9001, VDA 6.3, in-house CMM. Quality is not a department — it's the process." },
  { n: "04", title: "EU supply chain reliability", desc: "Hungary-based, EU member state. No customs. No tariffs. Predictable lead times." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "About", item: SITE_URL + "/about/" }])} />
      <JsonLd schema={aboutPageSchema(SITE_URL + "/about/")} />
      <JsonLd schema={faqSchema(aboutFaqs)} />

      <Hero
        label="§ 01 — About"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        heading="Seven decades of precision — a Hungarian engineering family business"
        lead="Engineering heritage since 1953. Three generations, one family, one standard: Western-European quality at Eastern-European cost."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "Contact us", href: "/contact/", variant: "ghost" },
        ]}
      />

      {/* Who we are */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 02 — Who we are</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[16px] text-ink-secondary leading-relaxed mb-4">
                Borela BT. is a family-owned precision CNC machining company headquartered in Izsák, Hungary — in the heart of the EU, 100 km south of Budapest. Founded in 1953 as a precision machine workshop, the company has grown into a trusted Tier 1/2 automotive and engineering supplier with 50 employees and 5,000 m² of production floor.
              </p>
              <p className="text-[16px] text-ink-secondary leading-relaxed">
                Our competitive edge is straightforward: Western-European quality standards (ISO 9001:2015, VDA 6.3, Knorr-Bremse PSA) at Eastern-European manufacturing cost — with the supply-chain simplicity and language skills to work as a natural partner to DACH and Western European procurement teams.
              </p>
            </div>
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="text-[18px] font-semibold text-ink leading-snug mb-3">
                &ldquo;A family-owned Hungarian precision machining partner in the heart of the EU, delivering Western-European quality at Eastern-European cost — with 70+ years of engineering heritage.&rdquo;
              </p>
              <footer className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">
                Borela BT. — positioning statement
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="py-14 bg-surface-dark">
        <Container>
          <SectionLabel dark>§ 03 — By the numbers</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-extrabold text-[36px] leading-none text-on-surface-dark mb-2">{s.value}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-on-surface-dark/50">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 04 — Our story</SectionLabel>
          <div className="relative">
            <div className="absolute left-[52px] top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />
            <ol className="space-y-6">
              {timeline.map((item) => (
                <li key={item.year} className="flex gap-6">
                  <div className="w-[52px] shrink-0 font-mono text-[11px] tracking-[0.08em] text-ink-tertiary pt-0.5 text-right sm:text-right">
                    {item.year}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-[14px] text-ink-secondary leading-relaxed">{item.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 05 — What defines us</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <article key={v.n}>
                <div className="font-mono text-[11px] tracking-[0.1em] text-ink-tertiary mb-3">{v.n}</div>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{v.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{v.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 07 — Where we work</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.id} className="p-6 border border-border bg-surface">
                <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{loc.name}</h3>
                <div className="font-mono text-[11px] tracking-[0.06em] text-primary uppercase mb-3">{loc.role}</div>
                {loc.area && (
                  <div className="font-mono text-[11px] text-ink-tertiary mb-2">{loc.area}</div>
                )}
                <p className="text-[13px] text-ink-secondary leading-relaxed mb-3">{loc.description}</p>
                <address className="font-mono text-[11px] text-ink-tertiary not-italic">{loc.address}</address>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 08 — Credentials & recognition</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={cert.scope} />
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip label="§ 09 — Who trusts us" partners={partners.map((p) => p.name)} />

      <FAQAccordion label="§ 10 — Frequently asked questions" items={aboutFaqs} />

      <CtaBlock
        heading="Ready to work with Borela?"
        subheading="Tell us about your project. An engineer will reply within 2 business days."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "See our timeline", href: "/about/", variant: "ghost" },
        ]}
      />
    </>
  );
}
