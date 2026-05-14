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
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {partners.map((name) => (
            <span
              key={name}
              className={clsx(
                "font-mono text-[11px] tracking-[0.14em] uppercase font-medium",
                dark ? "text-on-surface-dark/60" : "text-ink-secondary"
              )}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
