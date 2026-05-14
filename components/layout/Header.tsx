"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/primitives/Logo";
import clsx from "clsx";

const services = [
  {
    title: "CNC Turning",
    href: "/services/cnc-turning/",
    desc: "Precision turned parts on 40 CNC lathes, Ø1–90 mm, ±0.01 mm.",
    sub: [{ label: "Multi-axis turning (Y-axis, sub-spindle)", href: "/services/cnc-turning/" }],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="3" y="20" width="20" height="6"/>
        <path d="M9 20v-4h6l3-4h6"/>
        <circle cx="26" cy="12" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "CNC Milling",
    href: "/services/cnc-milling/",
    desc: "3- and 4-axis milling on 6 machining centers.",
    sub: [
      { label: "Horizontal machining centers", href: "/services/cnc-milling/" },
      { label: "Vertical machining centers", href: "/services/cnc-milling/" },
    ],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="10" cy="10" r="3.2"/><circle cx="22" cy="10" r="3.2"/>
        <circle cx="10" cy="22" r="3.2"/><circle cx="22" cy="22" r="3.2"/>
        <path d="M10 5.5V3M10 19.5V17M22 5.5V3M22 19.5V17M5.5 10H3M19.5 10H17"/>
      </svg>
    ),
  },
  {
    title: "Heat Treatment",
    href: "/services/heat-treatment/",
    desc: "Full workflow coordinated via certified professional partner.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4c-2 4 2 6 0 10s-4 6-2 10c1.5 3 4 4 6 4"/>
        <path d="M22 8c-1.5 3 1.5 4.5 0 7.5s-3 4.5-1.5 7.5"/>
        <path d="M10 10c-1 2 1 3 0 5s-2 3-1 5"/>
      </svg>
    ),
  },
  {
    title: "Press Work",
    href: "/services/press-work/",
    desc: "Mechanical pressing and forming operations.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="6" y="3" width="20" height="5"/><path d="M11 8v8M21 8v8"/>
        <rect x="8" y="16" width="16" height="4"/><rect x="4" y="24" width="24" height="5"/>
      </svg>
    ),
  },
  {
    title: "Prototyping",
    href: "/services/prototyping/",
    desc: "Sample production before series commitment.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
        <path d="M6 28V10l10-6 10 6v18"/><path d="M6 10l10 6 10-6M16 16v12"/>
      </svg>
    ),
  },
  {
    title: "Assembly",
    href: "/services/assembly/",
    desc: "Sub-assembly and complex component integration.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="3" y="13" width="11" height="11"/><rect x="18" y="8" width="11" height="11"/>
        <path d="M14 18.5h4"/>
      </svg>
    ),
  },
  {
    title: "3D Measurement & QC",
    href: "/services/measurement/",
    desc: "In-house CMM, contour measurement, micro-hardness testing.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M4 26V6h24v20M16 6v20M4 14h12M4 20h12M16 12h12M16 18h12"/>
        <circle cx="22" cy="24" r="2"/>
      </svg>
    ),
  },
  {
    title: "Welding (TIG)",
    href: "/services/welding/",
    desc: "TIG/WIG precision welding for assemblies.",
    sub: [],
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
        <path d="M6 6l8 8"/><path d="M14 14l4-4 6 6-4 4z"/>
        <path d="M18 22l-4 4M22 26l-2 2M16 28l-2 2"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Industries", href: "/industries/" },
  { label: "Capabilities", href: "/capabilities/" },
  { label: "References", href: "/references/" },
  { label: "About", href: "/about/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesDrawerOpen, setServicesDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-background border-b border-border"
    >
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between h-[72px] px-7 max-w-[1180px] mx-auto">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {/* Services mega trigger */}
          <button
            type="button"
            className="flex items-center gap-1 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-secondary hover:text-primary pb-px border-b border-transparent hover:border-primary transition-colors"
            aria-expanded={megaOpen}
            aria-controls="mega-services"
            onClick={() => setMegaOpen((v) => !v)}
          >
            Services
            <svg
              className={clsx("w-2.5 h-1.5 transition-transform", megaOpen && "rotate-180")}
              viewBox="0 0 10 6"
              aria-hidden="true"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square" />
            </svg>
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-secondary hover:text-primary pb-px border-b border-transparent hover:border-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/rfq/"
            className="inline-flex items-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span className={clsx("block w-5 h-px bg-ink transition-transform origin-center", drawerOpen && "translate-y-[6px] rotate-45")} />
          <span className={clsx("block w-5 h-px bg-ink transition-opacity", drawerOpen && "opacity-0")} />
          <span className={clsx("block w-5 h-px bg-ink transition-transform origin-center", drawerOpen && "-translate-y-[6px] -rotate-45")} />
        </button>
      </div>

      {/* ── Mega menu ── */}
      {megaOpen && (
        <>
          <div
            className="fixed inset-0 top-[72px] bg-ink/20 z-40"
            aria-hidden="true"
            onClick={() => setMegaOpen(false)}
          />
          <div
            id="mega-services"
            role="region"
            aria-label="Services menu"
            className="absolute left-0 right-0 top-full z-50 bg-background border-b border-border shadow-lg"
          >
            <div className="max-w-[1180px] mx-auto px-7 py-8">
              {/* Head */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.12em] text-ink-tertiary uppercase mb-1">§ Services</div>
                  <div className="text-sm text-ink-secondary">Precision CNC manufacturing — every operation under one roof.</div>
                </div>
                <button
                  type="button"
                  className="p-2 border border-border hover:border-ink transition-colors"
                  aria-label="Close services menu"
                  onClick={() => setMegaOpen(false)}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true">
                    <path d="M4 4l12 12M16 4L4 16" />
                  </svg>
                </button>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-4 gap-px bg-border">
                {services.map((svc) => (
                  <div key={svc.href} className="bg-background p-5 hover:bg-surface transition-colors group">
                    <div className="w-8 h-8 text-ink-secondary group-hover:text-primary mb-3 transition-colors">
                      {svc.icon}
                    </div>
                    <Link
                      href={svc.href}
                      className="block font-sans font-semibold text-sm text-ink group-hover:text-primary transition-colors mb-1.5"
                      onClick={() => setMegaOpen(false)}
                    >
                      {svc.title}
                    </Link>
                    <p className="text-xs text-ink-secondary leading-relaxed mb-2">{svc.desc}</p>
                    {svc.sub.length > 0 && (
                      <ul className="space-y-0.5">
                        {svc.sub.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className="font-mono text-[10px] tracking-[0.06em] text-ink-tertiary hover:text-primary transition-colors"
                              onClick={() => setMegaOpen(false)}
                            >
                              → {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <Link
                href="/services/"
                className="flex items-center justify-between mt-px bg-surface px-5 py-3.5 hover:bg-surface-alt transition-colors group"
                onClick={() => setMegaOpen(false)}
              >
                <span className="font-mono text-[10px] tracking-[0.1em] text-ink-tertiary uppercase">§ Services overview</span>
                <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-ink-secondary group-hover:text-primary transition-colors">
                  View all services
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={clsx(
          "fixed inset-0 top-[72px] z-50 bg-background overflow-y-auto transition-transform duration-200 lg:hidden",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!drawerOpen}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Mobile primary">
          {/* Services accordion */}
          <details
            className="group"
            open={servicesDrawerOpen}
            onToggle={(e) => setServicesDrawerOpen((e.target as HTMLDetailsElement).open)}
          >
            <summary className="flex items-center justify-between py-3 font-mono text-[12px] tracking-[0.1em] uppercase text-ink border-b border-border cursor-pointer select-none">
              Services
              <svg
                className={clsx("w-2.5 h-1.5 transition-transform", servicesDrawerOpen && "rotate-180")}
                viewBox="0 0 10 6"
                aria-hidden="true"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square" />
              </svg>
            </summary>
            <ul className="pl-4 mt-1 mb-2 space-y-0.5">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="block py-2 font-mono text-[11px] tracking-[0.06em] text-ink-secondary hover:text-primary transition-colors"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-mono text-[12px] tracking-[0.1em] uppercase text-ink border-b border-border hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-6">
            <Link
              href="/rfq/"
              className="inline-flex w-full items-center justify-center px-[22px] py-4 font-sans font-bold text-[11px] tracking-[0.16em] uppercase bg-primary text-on-primary hover:bg-primary-hover transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
