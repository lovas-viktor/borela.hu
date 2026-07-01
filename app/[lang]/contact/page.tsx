import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, contactPageSchema, localBusinessSchemas } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import SectionLabel from "@/components/primitives/SectionLabel";
import Container from "@/components/layout/Container";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import CtaBlock from "@/components/blocks/CtaBlock";
import ContactForm from "@/components/forms/ContactForm";
import { contactFaqs } from "@/data/faqs";
import { CONTACT } from "@/data/site";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Borela BT.",
  description:
    "Contact Borela BT.: +36 76 569 122, rfq@borela.eu. Precision CNC machining in Hungary, 15 km from Kecskemét and the Mercedes-Benz plant. English and German spoken.",
  path: "/contact/",
});

const departments = [
  { role: "Sales & RFQ", name: "Sales team", email: "rfq@borela.eu", lang: "EN · DE · HU" },
  { role: "Technical enquiries", name: "Engineering team", email: "rfq@borela.eu", lang: "EN · DE · HU" },
  { role: "General", name: "Administration", email: "info@borela.eu", lang: "HU" },
];

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["contact"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const faqItems = contactFaqs.map((_, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

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
        breadcrumb={[{ label: "Home", href: p("/") }, { label: "Contact" }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[
          { label: t("hero.actions.0.label"), href: p("/rfq/") },
          { label: "+36 76 569 122", href: `tel:${CONTACT.phoneTel}`, variant: "ghost" },
        ]}
      />

      {/* Contact form */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("sectionLabels.01")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-6">
                For technical enquiries and RFQ submissions, use the{" "}
                <Link href={p("/rfq/")} className="text-primary underline">{t("form.intro.rfq.link")}</Link> — it routes your message directly to our engineering team and lets you attach drawings.
              </p>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-8">
                {t("form.intro.general")}
              </p>

              {/* Direct contact */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-center p-4 border border-border bg-surface">
                  <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                    <path d="M5 4h4l2 5-3 2a16 16 0 0 0 7 7l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2"/>
                  </svg>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-0.5">{t("contact.phone.label")}</div>
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
                    <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary mb-0.5">{t("contact.email.label")}</div>
                    <a href={`mailto:${CONTACT.email}`} className="font-sans font-semibold text-ink hover:text-primary transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm dict={dict["shared"] ?? {}} />
          </div>
        </Container>
      </section>

      {/* Departments */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 02 — ${t("sectionLabels.02")}`}</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-4">
            {departments.map((dept, i) => (
              <div key={dept.role} className="p-5 border border-border bg-background">
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-2">{t(`departments.${i}.role`)}</div>
                <div className="font-semibold text-[14px] text-ink mb-1">{t(`departments.${i}.name`)}</div>
                <a href={`mailto:${dept.email}`} className="font-mono text-[12px] text-ink-secondary hover:text-primary transition-colors block mb-1">
                  {dept.email}
                </a>
                <div className="font-mono text-[10px] text-ink-tertiary">{dept.lang}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location & access */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("sectionLabels.03")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            <div>
              <h3 className="font-bold text-[18px] uppercase tracking-[-0.01em] text-ink mb-4">
                {t("location.heading")}
              </h3>
              <p className="text-[15px] text-ink-secondary leading-relaxed mb-5">
                {t("location.lead")}
              </p>
              <ul className="space-y-2">
                {["location.bullets.0", "location.bullets.1", "location.bullets.2"].map((key) => (
                  <li key={key} className="flex items-center gap-2 font-mono text-[12px] text-ink-secondary">
                    <span className="text-primary">→</span> {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[320px] lg:h-auto lg:min-h-[320px] border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4799869.282941974!2d9.5!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743c7c76e67646b%3A0xa2f865818393c976!2sBORELA%20Bt.!5e0!3m2!1shu!2shu!4v1782829752760!5m2!1shu!2shu"
                title={t("location.map.title")}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Container>
      </section>

      <FAQAccordion label={`§ 04 — ${t("sectionLabels.04")}`} items={faqItems} />

      <CtaBlock
        heading={t("cta.heading")}
        subheading={t("cta.subheading")}
        actions={[
          { label: t("cta.actions.0.label"), href: p("/rfq/") },
        ]}
      />
    </>
  );
}
