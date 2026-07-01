"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import clsx from "clsx";

const NAV = [
  { key: "nav.services", href: "/services/" },
  { key: "nav.industries", href: "/industries/" },
  { key: "nav.capabilities", href: "/capabilities/" },
  { key: "nav.about", href: "/about/" },
  { key: "nav.careers", href: "/careers/" },
  { key: "nav.contact", href: "/contact/" },
];

interface HeaderProps {
  lang: Locale;
  ui: Record<string, string>;
}

export default function Header({ lang, ui }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const p = (path: string) => `/${lang}${path}`;
  const t = (key: string) => ui[key] ?? key;
  // "Pályázatok" (EU grants) is a statutory Hungarian-only menu item, before About.
  const nav =
    lang === "hu"
      ? [...NAV.slice(0, 3), { key: "nav.palyazatok", href: "/palyazatok/" }, ...NAV.slice(3)]
      : NAV;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-background border-b border-border">
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between h-[72px] px-7 max-w-[1180px] mx-auto">
        <Logo lang={lang} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={p(link.href)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-secondary hover:text-primary pb-px border-b border-transparent hover:border-primary transition-colors"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop language + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher lang={lang} ui={ui} />
          <Link
            href={p("/rfq/")}
            className="inline-flex items-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
          >
            {t("header.cta.rfq")}
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label={drawerOpen ? t("header.menu.close") : t("header.menu.open")}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span className={clsx("block w-5 h-px bg-ink transition-transform origin-center", drawerOpen && "translate-y-[6px] rotate-45")} />
          <span className={clsx("block w-5 h-px bg-ink transition-opacity", drawerOpen && "opacity-0")} />
          <span className={clsx("block w-5 h-px bg-ink transition-transform origin-center", drawerOpen && "-translate-y-[6px] -rotate-45")} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={clsx(
          "fixed inset-0 top-[72px] z-50 bg-background overflow-y-auto transition-transform duration-200 lg:hidden",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!drawerOpen}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Mobile primary">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={p(link.href)}
              className="py-3 font-mono text-[12px] tracking-[0.1em] uppercase text-ink border-b border-border hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Language */}
          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-tertiary">{t("header.mobile.language")}</span>
            <LanguageSwitcher lang={lang} ui={ui} className="text-[12px]" />
          </div>

          <div className="mt-6">
            <Link
              href={p("/rfq/")}
              className="inline-flex w-full items-center justify-center px-[22px] py-4 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              {t("header.cta.rfq")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
