import clsx from "clsx";
import Button from "@/components/primitives/Button";
import SectionLabel from "@/components/primitives/SectionLabel";

interface CtaAction {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "outline-light";
}

interface CtaBlockProps {
  label?: string;
  heading: string;
  subheading?: string;
  actions: CtaAction[];
  dark?: boolean;
  centered?: boolean;
  className?: string;
}

export default function CtaBlock({ label, heading, subheading, actions, dark = false, centered = true, className }: CtaBlockProps) {
  return (
    <section
      className={clsx(
        "py-20 border-t",
        dark ? "bg-surface-dark border-border-dark" : "bg-background border-border",
        className
      )}
    >
      <div className={clsx("max-w-[880px] mx-auto px-7", centered && "text-center")}>
        {label && <SectionLabel dark={dark}>{label}</SectionLabel>}
        <h2
          className={clsx(
            "text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em] uppercase mb-4",
            dark ? "text-on-surface-dark" : "text-ink"
          )}
        >
          {heading}
        </h2>
        {subheading && (
          <p className={clsx("text-[17px] leading-[1.55] mb-8 max-w-[480px]", centered && "mx-auto", dark ? "text-on-surface-dark/70" : "text-ink-secondary")}>
            {subheading}
          </p>
        )}
        <div className={clsx("flex flex-wrap gap-3.5", centered && "justify-center")}>
          {actions.map((action) => (
            <Button
              key={action.href}
              href={action.href}
              variant={action.variant ?? (dark ? "outline-light" : "primary")}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
