"use client";

import { useState } from "react";
import clsx from "clsx";
import SectionLabel from "@/components/primitives/SectionLabel";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  label?: string;
  dark?: boolean;
  className?: string;
}

export default function FAQAccordion({ items, label, dark = false, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={clsx("py-16", dark ? "bg-surface-dark" : "bg-background", className)}>
      <div className="max-w-[880px] mx-auto px-7">
        {label && <SectionLabel dark={dark}>{label}</SectionLabel>}
        <div className="space-y-0">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={clsx("border-b", dark ? "border-border-dark" : "border-border")}>
                <button
                  type="button"
                  className={clsx(
                    "w-full flex items-center justify-between py-5 text-left gap-4",
                    dark ? "text-on-surface-dark" : "text-ink"
                  )}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="font-sans font-semibold text-[15px] leading-snug">{item.question}</span>
                  <svg
                    className={clsx("w-4 h-4 shrink-0 transition-transform", open && "rotate-45")}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M8 2v12M2 8h12" />
                  </svg>
                </button>
                {open && (
                  <div
                    className={clsx(
                      "pb-5 text-[15px] leading-relaxed",
                      dark ? "text-on-surface-dark/80" : "text-ink-secondary"
                    )}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
