import Link from "next/link";
import clsx from "clsx";

interface IndustryRowProps {
  index: string;
  title: string;
  meta: string;
  href?: string;
  dark?: boolean;
}

export default function IndustryRow({ index, title, meta, href, dark = false }: IndustryRowProps) {
  const inner = (
    <div className={clsx(
      "flex items-center gap-5 py-5 border-b group transition-colors",
      dark ? "border-border-dark" : "border-border",
      href && "cursor-pointer"
    )}>
      <span className={clsx("font-mono text-[11px] tracking-[0.1em] shrink-0 w-8", dark ? "text-on-surface-dark/40" : "text-ink-tertiary")}>
        {index}
      </span>
      <span className={clsx("flex-1 font-sans font-semibold text-[15px]", dark ? "text-on-surface-dark" : "text-ink", href && "group-hover:text-primary transition-colors")}>
        {title}
      </span>
      <span className={clsx("font-mono text-[11px] tracking-[0.06em] uppercase shrink-0", dark ? "text-on-surface-dark/50" : "text-ink-tertiary")}>
        {meta}
      </span>
      {href && (
        <svg
          className={clsx("w-5 h-5 shrink-0 transition-colors", dark ? "text-on-surface-dark/40 group-hover:text-on-surface-dark" : "text-ink-tertiary group-hover:text-primary")}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}
