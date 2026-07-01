"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/primitives/SectionLabel";
import CareersForm from "@/components/forms/CareersForm";

export interface Position {
  title: string;
  meta?: string;
  desc: string;
}

interface CareersApplyProps {
  positions: Position[];
  dict: Record<string, string>;
}

export default function CareersApply({ positions, dict }: CareersApplyProps) {
  const t = (k: string) => dict[k] ?? k;
  const [preset, setPreset] = useState("");
  const [presetKey, setPresetKey] = useState(0);

  const apply = (title: string) => {
    setPreset(title);
    setPresetKey((k) => k + 1);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Open positions */}
      <section id="positions" className="py-16 bg-background border-b border-border scroll-mt-[88px]">
        <Container>
          <SectionLabel>{`§ 03 — ${t("section.03.label")}`}</SectionLabel>
          <ul className="border-t border-border">
            {positions.map((pos) => (
              <li key={pos.title} className="border-b border-border py-6 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
                <div className="sm:w-1/3">
                  <h3 className="font-bold text-[16px] uppercase tracking-[-0.01em] text-ink">{pos.title}</h3>
                  {pos.meta && <div className="font-mono text-[11px] tracking-[0.06em] uppercase text-primary mt-1">{pos.meta}</div>}
                </div>
                <p className="sm:flex-1 text-[14px] text-ink-secondary leading-relaxed">{pos.desc}</p>
                <button
                  type="button"
                  onClick={() => apply(pos.title)}
                  className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary hover:text-primary-hover transition-colors shrink-0 text-left sm:text-right"
                >
                  {t("positions.applyLink")}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="py-16 bg-surface border-b border-border scroll-mt-[88px]">
        <Container>
          <SectionLabel className="text-center">{`§ 04 — ${t("section.04.label")}`}</SectionLabel>
          <div className="max-w-2xl mx-auto">
            <p className="text-[16px] text-ink-secondary leading-relaxed mb-10 text-center">
              {t("apply.lead")}
            </p>
            <CareersForm
              positions={positions.map((p) => p.title)}
              presetPosition={preset}
              presetKey={presetKey}
              dict={dict}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
