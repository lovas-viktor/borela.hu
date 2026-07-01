import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
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
  {
    title: "Sales Representative",
    meta: "English required · German an advantage",
    desc: "Reach out to and visit partners, negotiate, and maintain long-term relationships across European markets.",
  },
  {
    title: "HR Manager",
    desc: "Own the full HR function — recruitment, administration, payroll liaison and employee relations — for our 50-person machining company, single-handedly.",
  },
  {
    title: "Project Manager",
    desc: "Plan and coordinate customer projects from quote to delivery across our production sites.",
  },
  {
    title: "Quality Engineer",
    desc: "Ensure machined parts meet customer and ISO 9001 / VDA 6.3 quality requirements.",
  },
  {
    title: "Quality Assistant",
    desc: "Support quality control, inspection documentation and measurement reporting.",
  },
];

const whyJoin = [
  { title: "Family-owned, second generation", desc: "A 70-year engineering heritage with a modern, quality-driven leadership team." },
  { title: "Automotive-grade standards", desc: "Work to ISO 9001 and VDA 6.3 for OEMs such as Knorr-Bremse and Mercedes-Benz." },
  { title: "Stable EU manufacturer", desc: "Long-term customer programmes and predictable, year-round production." },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", item: SITE_URL + "/" }, { name: "Careers", item: SITE_URL + "/careers/" }])} />

      <Hero
        label="§ 01 — Careers"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        heading="Build precision parts with us"
        lead="Borela BT. is a family-owned Hungarian precision machining company supplying Europe's leading OEMs. We're growing our team — see our open positions below."
        actions={[
          { label: "View open positions", href: "#positions" },
          { label: "Apply now", href: "#apply", variant: "ghost" },
        ]}
      />

      {/* Why join */}
      <section className="py-16 bg-surface border-b border-border">
        <Container>
          <SectionLabel>§ 02 — Why Borela</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-8">
            {whyJoin.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-[15px] uppercase tracking-[-0.01em] text-ink mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open positions + application form (shared state so "Apply" preselects the role) */}
      <CareersApply positions={positions} />
    </>
  );
}
