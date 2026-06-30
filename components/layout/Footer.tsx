import Link from "next/link";
import Container from "./Container";
import { CONTACT } from "@/data/site";
import { locations } from "@/data/locations";

const navLinks = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Capabilities", href: "/capabilities/" },
  { label: "About", href: "/about/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

const legalLinks = [
  { label: "EU Projects", href: "/eu-projects/" },
  { label: "Integrated Policy", href: "/legal/integrated-policy.pdf" },
  { label: "Privacy Notice", href: "/legal/privacy-policy/" },
  { label: "Impressum", href: "/legal/imprint/" },
];

const columnHeading =
  "font-mono text-[10px] tracking-[0.14em] uppercase text-ink-tertiary mb-5";

export default function Footer() {
  const { street, zip, city, country } = CONTACT.address;

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
              Family-owned Hungarian precision machining — Western-European
              quality at Eastern-European cost.
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
          <nav aria-label="Footer navigation">
            <div className={columnHeading}>Navigation</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-secondary hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Locations */}
          <div>
            <div className={columnHeading}>Locations</div>
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
            © 2026 BORELA BT. ISO&nbsp;9001:2015 CERTIFIED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-tertiary hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
