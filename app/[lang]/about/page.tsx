import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
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
  { year: "1953", key: "1953" },
  { year: "1990", key: "1990" },
  { year: "1996", key: "1996" },
  { year: "2005", key: "2005" },
  { year: "2007", key: "2007" },
  { year: "2008", key: "2008" },
  { year: "2009", key: "2009" },
  { year: "2010", key: "2010" },
  { year: "2016", key: "2016" },
  { year: "2019", key: "2019" },
  { year: "2020s", key: "2020s" },
  { year: "Today", key: "today" },
];

const stats = [
  { value: "1953" },
  { value: "50" },
  { value: "40" },
  { value: "500–100K" },
];

const leadership = [
  { name: "Anita Bognár", photo: "/anita.jpg" },
  { name: "Péter Bognár", photo: "/peter.jpg" },
];

// Names and profiles to be confirmed — placeholders until client provides content.
const keyPeople = [{}, {}, {}];

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["about"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const faqItems = aboutFaqs.map((_, i) => ({
    question: t(`faq.${i}.q`),
    answer: t(`faq.${i}.a`),
  }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "About", item: SITE_URL + "/about/" }])} />
      <JsonLd schema={aboutPageSchema(SITE_URL + "/about/")} />
      <JsonLd schema={faqSchema(aboutFaqs)} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.home"), href: p("/") }, { label: t("hero.breadcrumb.about") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[
          { label: t("hero.action.rfq"), href: p("/rfq/") },
          { label: t("hero.action.contact"), href: p("/contact/"), variant: "ghost" },
        ]}
      />

      {/* Who we are */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 01 — ${t("whoWeAre.label")}`}</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            <div>
              <p className="text-[16px] text-ink-secondary leading-relaxed mb-6">
                {t("whoWeAre.paragraph")}
              </p>
              <blockquote className="border-l-2 border-primary pl-6 py-2">
                <p className="text-[18px] font-semibold text-ink leading-snug mb-3">
                  {t("whoWeAre.quote")}
                </p>
                <footer className="font-mono text-[11px] tracking-[0.08em] uppercase text-ink-tertiary">
                  {t("whoWeAre.quote.footer")}
                </footer>
              </blockquote>
            </div>
            <div className="relative h-60 lg:h-auto bg-surface-alt border border-border overflow-hidden">
              <Image
                src="/about.jpg"
                alt={t("whoWeAre.image.alt")}
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
          <SectionLabel dark>{`§ 02 — ${t("numbers.label")}`}</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.value} className="text-center">
                <div className="font-extrabold text-[36px] leading-none text-on-surface-dark mb-2">{s.value}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-on-surface-dark/50">{t(`stats.${i}.label`)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership — second generation */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 03 — ${t("leadership.label")}`}</SectionLabel>
          <p className="text-[16px] text-ink-secondary leading-relaxed max-w-2xl mb-10">
            {t("leadership.intro")}
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {leadership.map((person, i) => (
              <div key={person.name} className="bg-background p-6 flex flex-col sm:flex-row gap-5">
                <Image
                  src={person.photo}
                  alt={`${person.name} — ${t("leadership.portrait.alt")}`}
                  width={128}
                  height={160}
                  className="shrink-0 w-32 h-40 object-cover border border-border"
                />
                <div>
                  <h3 className="font-bold text-[16px] uppercase tracking-[-0.01em] text-ink mb-1">{person.name}</h3>
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-3">{t(`leadership.${i}.role`)}</div>
                  <p className="text-[13px] text-ink-secondary leading-relaxed">{t(`leadership.${i}.bio`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background border-b border-border">
        <Container>
          <SectionLabel>{`§ 04 — ${t("story.label")}`}</SectionLabel>
          <ol className="relative max-w-3xl mx-auto">
            {/* Center spine — left-aligned on mobile, centered from sm up */}
            <div
              aria-hidden="true"
              className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border-strong sm:-translate-x-1/2"
            />
            {timeline.map((item, i) => {
              const onLeft = i % 2 === 0;
              const displayYear = item.key === "today" ? t("timeline.today.year") : item.year;
              return (
                <li key={item.year} className="relative pb-8 last:pb-0 pl-10 sm:pl-0">
                  {/* Marker sits on the spine */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 sm:left-1/2 top-1 w-2.5 h-2.5 bg-primary border-2 border-background -translate-x-1/2"
                  />
                  <div className={`sm:w-1/2 ${onLeft ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"}`}>
                    <div className="font-mono text-[13px] font-semibold tracking-[0.04em] text-primary mb-1">{displayYear}</div>
                    <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`timeline.${item.key}.event`)}</p>
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
          <SectionLabel>{`§ 05 — ${t("keyPeople.label")}`}</SectionLabel>
          <p className="text-[15px] text-ink-secondary leading-relaxed max-w-2xl mb-10">
            {t("keyPeople.intro")}
          </p>
          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {keyPeople.map((person, i) => (
              <div key={i} className="bg-background p-6">
                <div
                  className="aspect-[4/3] bg-surface-alt border border-border flex items-center justify-center mb-4"
                  role="img"
                  aria-label={`${t(`keyPeople.${i}.role`)} ${t("keyPeople.portrait.alt")}`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary">{t("keyPeople.photo.placeholder")}</span>
                </div>
                <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-primary mb-1">{t(`keyPeople.${i}.role`)}</div>
                <h3 className="text-[14px] italic text-ink-tertiary mb-2">{t("keyPeople.tbc")}</h3>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{t(`keyPeople.${i}.note`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 06 — ${t("certifications.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.name} name={cert.name} since={cert.since} scope={t(`certifications.${i}.scope`)} />
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip label={`§ 07 — ${t("trust.label")}`} partners={partners.map((partner) => partner.name)} />

      <FAQAccordion label={`§ 08 — ${t("faq.label")}`} items={faqItems} />

      <CtaBlock
        heading={t("cta.heading")}
        subheading={t("cta.subheading")}
        actions={[
          { label: t("cta.action.rfq"), href: p("/rfq/") },
          { label: t("cta.action.timeline"), href: p("/about/"), variant: "ghost" },
        ]}
      />
    </>
  );
}
