import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Capabilities", href: "/capabilities/" },
  { label: "References", href: "/references/" },
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

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-[60px] pb-7">
      <Container>
        {/* Brand */}
        <div className="font-sans font-extrabold text-[13px] tracking-[0.14em] uppercase mb-7">
          BORELA BT<span className="text-primary">.</span>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3 mb-14">
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
