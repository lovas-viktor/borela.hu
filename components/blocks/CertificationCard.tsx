import clsx from "clsx";

interface CertificationCardProps {
  name: string;
  since: string;
  scope?: string;
  dark?: boolean;
  logo?: string;
}

export default function CertificationCard({ name, since, scope, dark = false, logo }: CertificationCardProps) {
  return (
    <div
      className={clsx(
        "flex items-start gap-4 p-5 border",
        dark ? "border-border-dark" : "border-border",
        dark ? "bg-surface-dark" : "bg-surface"
      )}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt="" className="w-16 h-16 shrink-0 object-contain" />
      ) : (
        // Fallback shield icon (cards without a certificate image)
        <svg
          className={clsx("w-10 h-10 shrink-0", dark ? "text-on-surface-dark/50" : "text-ink-tertiary")}
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          aria-hidden="true"
        >
          <path d="M20 4L6 10v12c0 8 14 14 14 14s14-6 14-14V10L20 4z" />
          <path d="M14 20l4 4 8-8" />
        </svg>
      )}
      <div>
        <div className={clsx("font-mono text-[11px] tracking-[0.1em] uppercase font-medium mb-1", dark ? "text-on-surface-dark" : "text-ink")}>
          {name}
        </div>
        <div className={clsx("font-mono text-[10px] tracking-[0.08em] uppercase", dark ? "text-on-surface-dark/50" : "text-ink-tertiary")}>
          Since {since}
        </div>
        {scope && (
          <div className={clsx("text-xs mt-1", dark ? "text-on-surface-dark/60" : "text-ink-secondary")}>
            {scope}
          </div>
        )}
      </div>
    </div>
  );
}
