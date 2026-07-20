import { Fragment } from "react";
import clsx from "clsx";
import SectionLabel from "@/components/primitives/SectionLabel";

export interface PartnerLogo {
  name: string;
  src: string;
  /** Rendered logo height in px (default 64). Ignored when `width` is set. */
  height?: number;
  /** Rendered logo width in px. Takes precedence over height (aspect kept). */
  width?: number;
}

interface TrustStripProps {
  label?: string;
  partners?: string[];
  /** When provided, logos are rendered instead of the text names. */
  logos?: PartnerLogo[];
  dark?: boolean;
  className?: string;
}

export default function TrustStrip({ label, partners = [], logos, dark = false, className }: TrustStripProps) {
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
        {logos && logos.length > 0 ? (
          // Single-row infinite marquee: the logo set is duplicated and the row
          // scrolls right→left, so logos that don't fit still come into view.
          <div className="relative overflow-hidden">
            <div className="flex items-center w-max logo-marquee">
              {[...logos, ...logos].map((logo, idx) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${logo.name}-${idx}`}
                  src={logo.src}
                  alt={logo.name}
                  aria-hidden={idx >= logos.length}
                  className="object-contain shrink-0 mr-14"
                  style={logo.width ? { width: logo.width } : { height: logo.height ?? 64 }}
                />
              ))}
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
