import Link from "next/link";
import clsx from "clsx";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
  className?: string;
}

export default function Breadcrumb({ items, dark = false, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={clsx("mb-5", className)}>
      <ol className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className={dark ? "text-on-surface-dark/30" : "text-ink-tertiary"}>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={clsx(
                  "hover:text-primary transition-colors",
                  dark ? "text-on-surface-dark/60" : "text-ink-secondary"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={dark ? "text-on-surface-dark/40" : "text-ink-tertiary"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
