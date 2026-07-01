import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/components/seo/schemas";
import Hero from "@/components/blocks/Hero";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/primitives/SectionLabel";
import CareersApply from "@/components/forms/CareersApply";

const SITE_URL = "https://borela.eu";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers — Join Borela BT.",
  description:
    "Open positions at Borela BT., a family-owned Hungarian precision CNC machining company: sales, HR, project management and quality roles. Apply online with your CV.",
  path: "/careers/",
});

// Position descriptions for the three quality/PM roles are generic placeholders —
// refine with confirmed requirements when available.
const positions = [
  { meta: true },
  {},
  {},
  {},
  {},
];

const whyJoin = [{}, {}, {}];

export default async function CareersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = (k: string) => dict["careers"]?.[k] ?? k;
  const p = (path: string) => `/${lang}${path}`;

  const translatedPositions = positions.map((pos, i) => ({
    title: t(`positions.${i}.title`),
    ...(pos.meta ? { meta: t(`positions.${i}.meta`) } : {}),
    desc: t(`positions.${i}.desc`),
  }));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Careers", item: SITE_URL + "/careers/" }])} />

      <Hero
        label={`§ 01 — ${t("hero.label")}`}
        breadcrumb={[{ label: t("hero.breadcrumb.home"), href: p("/") }, { label: t("hero.breadcrumb.careers") }]}
        heading={t("hero.heading")}
        lead={t("hero.lead")}
        actions={[
          { label: t("hero.actions.0"), href: "#positions" },
          { label: t("hero.actions.1"), href: "#apply", variant: "ghost" },
        ]}
      />

      {/* Why join */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>{`§ 02 — ${t("section.02.label")}`}</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-8">
            {whyJoin.map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{t(`whyJoin.${i}.title`)}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{t(`whyJoin.${i}.desc`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open positions + application form (shared state so "Apply" preselects the role) */}
      <CareersApply positions={translatedPositions} dict={dict["careers"] ?? {}} />
    </>
  );
}
