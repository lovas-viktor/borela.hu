import type { Metadata } from "next";
import Image from "next/image";
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
  { value: "50", label: "Employees" },
  { value: "40", label: "CNC lathes" },
  { value: "500–100K", label: "Pieces per order" },
];

const leadership = [
  {
    name: "Anita Bognár",
    role: "Second generation",
    bio: "Anita started as a quality assistant at General Electric, then held quality-management roles at Hidria Bausch and Continental Automotive Hungary. She joined Borela BT. six years ago to lead the family business into its second generation.",
  },
  {
    name: "Péter Bognár",
    role: "Second generation",
    bio: "Péter began in a management role at a smaller engineering company, then worked as a quality engineer at Mercedes-Benz Manufacturing Hungary. He joined Borela BT. five years ago, bringing automotive-grade quality discipline to the family firm.",
  },
];

// Names and profiles to be confirmed — placeholders until client provides content.
const keyPeople = [
  { role: "Operations Manager", note: "Runs day-to-day production across our machining sites." },
  { role: "Customer Liaison", note: "Your single point of contact for quotes, orders and delivery." },
  { role: "Production Planner", note: "Plans series production schedules and shop-floor capacity." },
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
        heading="A precision Hungarian engineering family business"
        lead="Engineering heritage since 1953. Three generations, one family, one standard: Western-European quality at Eastern-European cost."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "Contact us", href: "/contact/", variant: "ghost" },
        ]}
      />

      {/* Who we are */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 01 — Who we are</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            <div>
              <p className="text-[16px] text-ink-secondary leading-relaxed mb-6">
                Borela BT. is a family-owned precision CNC machining company in Izsák, Hungary — in the heart of the EU. Founded in 1953, we deliver Western-European quality (ISO 9001, VDA 6.3) at Eastern-European cost, with 50 employees and 5,000 m² of production floor.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 py-2">
                <p className="text-[18px] font-semibold text-ink leading-snug mb-3">
                  &ldquo;A family-owned Hungarian precision machining partner in the heart of the EU, delivering Western-European quality at Eastern-European cost — with 70+ years of engineering heritage.&rdquo;
                </p>
                <footer className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">
                  Borela BT. — positioning statement
                </footer>
              </blockquote>
            </div>
            <div className="relative h-60 lg:h-auto bg-surface-alt border border-border overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Borela BT. precision machining facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="py-14 bg-surface-dark">
        <Container>
          <SectionLabel dark>§ 02 — By the numbers</SectionLabel>
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

      {/* Leadership — second generation */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Leadership</SectionLabel>
          <p className="text-[16px] text-ink-secondary leading-relaxed max-w-2xl mb-10">
            Borela BT. is now run by its second generation. After the passing of Rezső Bognár in 2021 and the retirement of Béla Bognár soon after, the founders stepped back from daily operations. Béla&rsquo;s two children — Anita and Péter Bognár — now lead the company, each returning to the family firm with more than a decade of automotive quality experience.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {leadership.map((person) => (
              <div key={person.name} className="bg-background p-6 flex flex-col sm:flex-row gap-5">
                <div
                  className="shrink-0 w-full sm:w-32 h-40 bg-surface-alt border border-border flex items-center justify-center"
                  role="img"
                  aria-label={`${person.name} portrait — coming soon`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">Photo</span>
                </div>
                <div>
                  <h3 className="font-bold text-[16px] uppercase tracking-[-0.01em] text-ink mb-1">{person.name}</h3>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-3">{person.role}</div>
                  <p className="text-[13px] text-ink-secondary leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 04 — Our story</SectionLabel>
          <ol className="relative max-w-3xl mx-auto">
            {/* Center spine — left-aligned on mobile, centered from sm up */}
            <div
              aria-hidden="true"
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border-strong sm:-translate-x-1/2"
            />
            {timeline.map((item, i) => {
              const onLeft = i % 2 === 0;
              return (
                <li key={item.year} className="relative pb-8 last:pb-0 pl-10 sm:pl-0">
                  {/* Marker sits on the spine */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 sm:left-1/2 top-1 w-2.5 h-2.5 bg-primary border-2 border-background -translate-x-1/2"
                  />
                  <div className={`sm:w-1/2 ${onLeft ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"}`}>
                    <div className="font-mono text-[13px] font-semibold tracking-[0.04em] text-primary mb-1">{item.year}</div>
                    <p className="text-[14px] text-ink-secondary leading-relaxed">{item.event}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Key people */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 05 — Key people</SectionLabel>
          <p className="text-[15px] text-ink-secondary leading-relaxed max-w-2xl mb-10">
            The leadership is backed by an experienced core team. Individual names and profiles will follow.
          </p>
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {keyPeople.map((person) => (
              <div key={person.role} className="bg-background p-6">
                <div
                  className="aspect-[4/3] bg-surface-alt border border-border flex items-center justify-center mb-4"
                  role="img"
                  aria-label={`${person.role} portrait — coming soon`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">Photo</span>
                </div>
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-1">{person.role}</div>
                <h3 className="text-[14px] italic text-ink-tertiary mb-2">— To be confirmed —</h3>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{person.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 06 — Credentials & recognition</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={cert.scope} />
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip label="§ 07 — Who trusts us" partners={partners.map((p) => p.name)} />

      <FAQAccordion label="§ 08 — Frequently asked questions" items={aboutFaqs} />

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
