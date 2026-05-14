import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, contactPageSchema, localBusinessSchemas } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import ContactForm from "@/components/forms/ContactForm";
import { locations } from "@/data/locations";
import { contactFaqs } from "@/data/faqs";
import { CONTACT } from "@/data/site";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Borela BT. — Three Sites in Central Hungary",
  description:
    "Contact Borela BT.: +36 76 569 122, rfq@borela.eu. Three machining sites in Izsák, Jakabszállás and Fülöpszállás, Hungary. English and German spoken.",
  path: "/contact/",
});

const departments = [
  { role: "Sales & RFQ", name: "Sales team", email: "rfq@borela.eu", lang: "EN · DE · HU" },
  { role: "Technical enquiries", name: "Engineering team", email: "rfq@borela.eu", lang: "EN · DE · HU" },
  { role: "General", name: "Administration", email: "info@borela.eu", lang: "HU" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Contact", item: SITE_URL + "/contact/" }])} />
      <JsonLd schema={contactPageSchema(SITE_URL + "/contact/")} />
      {localBusinessSchemas.map((schema, i) => (
        <JsonLd key={i} schema={schema} />
      ))}
      <JsonLd schema={faqSchema(contactFaqs)} />

      <Hero
        label="§ 01 — Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        heading="Contact Borela — three sites in central Hungary, one point of contact"
        lead="Reach our sales and engineering team directly. English and German spoken. All enquiries reviewed by an engineer."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
          { label: "+36 76 569 122", href: `tel:${CONTACT.phoneTel}`, variant: "ghost" },
        ]}
      />

      {/* Locations */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 01 — Locations</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.id} className="p-6 border border-border bg-surface">
                <h3 className="font-bold text-[14px] uppercase tracking-[-0.01em] text-ink mb-1">{loc.name}</h3>
                <div className="font-mono text-[11px] tracking-[0.06em] text-primary uppercase mb-3">{loc.role}</div>
                {loc.area && (
                  <div className="font-mono text-[11px] text-ink-tertiary mb-2">Floor area: {loc.area}</div>
                )}
                <address className="font-mono text-[11px] text-ink-secondary not-italic mb-3 leading-relaxed">
                  {loc.address}
                </address>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map placeholder */}
      <section className="bg-surface border-b border-border">
        <div
          className="w-full h-64 flex items-center justify-center bg-surface-alt"
          role="img"
          aria-label="Map placeholder — Izsák, Jakabszállás, Fülöpszállás, Bács-Kiskun, Hungary"
        >
          <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-tertiary">
            Map — Izsák / Jakabszállás / Fülöpszállás, Hungary
          </span>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 03 — Send a message</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-6">
                For technical enquiries and RFQ submissions, use the{" "}
                <a href="/rfq/" className="text-primary underline">Request a Quote form</a> — it routes your message directly to our engineering team and lets you attach drawings.
              </p>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-8">
                For general questions, use the details below or fill in this form. We respond in English, German and Hungarian.
              </p>

              {/* Direct contact */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-center p-4 border border-border bg-surface">
                  <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                    <path d="M5 4h4l2 5-3 2a16 16 0 0 0 7 7l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2"/>
                  </svg>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-0.5">Phone</div>
                    <a href={`tel:${CONTACT.phoneTel}`} className="font-sans font-semibold text-ink hover:text-primary transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 border border-border bg-surface">
                  <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-0.5">Email</div>
                    <a href={`mailto:${CONTACT.email}`} className="font-sans font-semibold text-ink hover:text-primary transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 04 — Who to contact</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <div key={dept.role} className="p-5 border border-border bg-background">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-2">{dept.role}</div>
                <div className="font-semibold text-[14px] text-ink mb-1">{dept.name}</div>
                <a href={`mailto:${dept.email}`} className="font-mono text-[12px] text-ink-secondary hover:text-primary transition-colors block mb-1">
                  {dept.email}
                </a>
                <div className="font-mono text-[10px] text-ink-tertiary">{dept.lang}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company details */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>§ 05 — Company details</SectionLabel>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { dt: "Legal name", dd: "BORELA TERMELŐ FORGALMAZÓ ÉS SZOLGÁLTATÓ BT." },
              { dt: "Short name", dd: "Borela BT." },
              { dt: "Registered address", dd: "Garai u. 6., 6070 Izsák, Hungary" },
              { dt: "VAT / Tax number", dd: "Contact us for EU VAT details" },
              { dt: "Phone", dd: CONTACT.phone },
              { dt: "Email", dd: CONTACT.email },
            ].map((item) => (
              <div key={item.dt}>
                <dt className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-1">{item.dt}</dt>
                <dd className="font-sans text-[14px] text-ink">{item.dd}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <FAQAccordion label="§ 07 — Frequently asked questions" items={contactFaqs} />

      <CtaBlock
        heading="Have a drawing ready?"
        subheading="Skip the contact form — submit it directly via our RFQ page and get a precise quote within 2 business days."
        actions={[
          { label: "Request a Quote", href: "/rfq/" },
        ]}
      />
    </>
  );
}
