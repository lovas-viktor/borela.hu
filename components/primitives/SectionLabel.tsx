import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <div
      className={clsx(
        "font-mono text-xs tracking-[0.06em] uppercase mb-7",
        dark ? "text-on-surface-dark/50" : "text-ink-tertiary",
        className
      )}
    >
      {children}
    </div>
  );
}
