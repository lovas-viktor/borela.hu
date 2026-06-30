import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

interface SpecRow {
  label: string;
  value: string;
}

interface SpecCardProps {
  icon?: ReactNode;
  title: string;
  href?: string;
  description?: string;
  specs?: SpecRow[];
  className?: string;
}

export default function SpecCard({ icon, title, href, description, specs, className }: SpecCardProps) {
  const inner = (
    <>
      {icon && (
        <div className="w-8 h-8 text-ink-secondary group-hover:text-primary mb-4 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="font-sans font-semibold text-[15px] text-ink group-hover:text-primary transition-colors mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-ink-secondary leading-relaxed mb-3">{description}</p>
      )}
      {specs && specs.length > 0 && (
        <dl className="mt-auto space-y-1.5">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-baseline gap-2 border-b border-dashed border-border pb-1.5 last:border-0 last:pb-0">
              <dt className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-tertiary shrink-0">
                {spec.label}
              </dt>
              <dd className="font-mono text-[11px] text-ink ml-auto">{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );

  const base = clsx(
    "group flex flex-col p-7 border border-border bg-background hover:bg-surface transition-colors",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return <div className={base}>{inner}</div>;
}
