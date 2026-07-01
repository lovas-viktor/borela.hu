import Link from "next/link";
import Container from "./Container";
import { CONTACT } from "@/data/site";
import { locations } from "@/data/locations";
import type { Locale } from "@/lib/i18n";

const NAV = [
  { key: "footer.nav.services", href: "/services/" },
  { key: "footer.nav.industries", href: "/industries/" },
  { key: "footer.nav.capabilities", href: "/capabilities/" },
  { key: "footer.nav.about", href: "/about/" },
  { key: "footer.nav.careers", href: "/careers/" },
  { key: "footer.nav.contact", href: "/contact/" },
];

// External PDF documents (Hungarian statutory disclosures), opened in a new tab.
const LEGAL = [
  { key: "footer.legal.integratedPolicy", href: "/pdfs/borela_bt_integralt_politika_20230801.pdf" },
  { key: "footer.legal.privacyNotice", href: "/pdfs/Adatkezelesi_tajekoztato_20230801_weblap.pdf" },
  { key: "footer.legal.energyReport", href: "/pdfs/E_szakref_2025_%C3%A9ves_kivonat_Borela_sz.pdf" },
];

const columnHeading =
  "font-mono text-[10px] tracking-[0.14em] uppercase text-ink-tertiary mb-5";

interface FooterProps {
  lang: Locale;
  ui: Record<string, string>;
}

export default function Footer({ lang, ui }: FooterProps) {
  const { street, zip, city, country } = CONTACT.address;
  const p = (path: string) => `/${lang}${path}`;
  const t = (key: string) => ui[key] ?? key;
  const nav =
    lang === "hu"
      ? [...NAV.slice(0, 3), { key: "footer.nav.palyazatok", href: "/palyazatok/" }, ...NAV.slice(3)]
      : NAV;

  return (
    <footer className="bg-background border-t border-border pt-[60px] pb-7">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand + positioning + contact */}
          <div className="md:col-span-2 max-w-sm">
            <div className="font-sans font-extrabold text-[15px] tracking-[0.14em] uppercase mb-4">
              BORELA BT<span className="text-primary">.</span>
            </div>
            <p className="text-[13px] text-ink-secondary leading-relaxed mb-6">
              {t("footer.positioning")}
            </p>
            <div className="flex flex-col gap-1.5">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="font-mono text-[12px] text-ink hover:text-primary transition-colors w-fit"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-mono text-[12px] text-ink hover:text-primary transition-colors w-fit"
              >
                {CONTACT.email}
              </a>
              <address className="font-mono text-[11px] text-ink-tertiary not-italic leading-relaxed">
                {street}, {zip} {city}, {country}
              </address>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={t("footer.nav.heading")}>
            <div className={columnHeading}>{t("footer.nav.heading")}</div>
            <div className="flex flex-col gap-3">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={p(link.href)}
                  className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-secondary hover:text-primary transition-colors w-fit"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </nav>

          {/* Locations */}
          <div>
            <div className={columnHeading}>{t("footer.locations.heading")}</div>
            <ul className="flex flex-col gap-4">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <div className="font-sans font-semibold text-[12px] text-ink leading-tight">
                    {loc.name}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.06em] text-ink-tertiary mt-0.5">
                    {loc.role}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-border pt-[22px] flex flex-wrap gap-x-6 gap-y-2 items-start justify-between">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-ink-tertiary">
            {t("footer.legal.copyright")}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {LEGAL.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary hover:text-ink transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
