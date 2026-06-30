import { Fragment } from "react";
import clsx from "clsx";
import SectionLabel from "@/components/primitives/SectionLabel";

interface TrustStripProps {
  label?: string;
  partners: string[];
  dark?: boolean;
  className?: string;
}

export default function TrustStrip({ label, partners, dark = false, className }: TrustStripProps) {
  return (
    <section
      className={clsx(
        "py-10 border-y",
        dark ? "bg-surface-dark border-border-dark" : "bg-surface border-border",
        className
      )}
    >
      <div className="max-w-[1180px] mx-auto px-7">
        {label && <SectionLabel dark={dark}>{label}</SectionLabel>}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {partners.map((name, i) => (
            <Fragment key={name}>
              <span
                className={clsx(
                  "font-mono text-[13px] tracking-[0.1em] uppercase font-medium",
                  dark ? "text-on-surface-dark/85" : "text-ink"
                )}
              >
                {name}
              </span>
              {i < partners.length - 1 && (
                <span
                  aria-hidden="true"
                  className={clsx(
                    "font-mono text-[13px] select-none",
                    dark ? "text-on-surface-dark/30" : "text-ink-tertiary"
                  )}
                >
                  ·
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
