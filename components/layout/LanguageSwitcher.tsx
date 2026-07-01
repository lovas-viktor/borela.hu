"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { locales, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  lang: Locale;
  ui: Record<string, string>;
  className?: string;
}

export default function LanguageSwitcher({ lang, ui, className }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Swap the leading /<locale> segment for the target locale, keeping the rest of the path.
  const swap = (target: Locale) => {
    const rest = pathname.replace(/^\/(en|de|hu)(?=\/|$)/, "");
    return `/${target}${rest || "/"}`;
  };

  const fullName = (l: Locale) => ui[`language.${l}`] ?? l.toUpperCase();

  return (
    <div
      className={clsx("flex items-center font-mono text-[11px] tracking-[0.1em] uppercase", className)}
      role="group"
      aria-label={ui["language.switcher.label"] ?? "Language"}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="text-border-strong mx-1.5">·</span>}
          {l === lang ? (
            <span className="text-primary font-bold" aria-current="true" title={fullName(l)}>
              {l.toUpperCase()}
            </span>
          ) : (
            <Link
              href={swap(l)}
              className="text-ink-tertiary hover:text-primary transition-colors"
              title={fullName(l)}
              hrefLang={l}
            >
              {l.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
