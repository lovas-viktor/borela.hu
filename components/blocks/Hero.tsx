import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import SectionLabel from "@/components/primitives/SectionLabel";
import Breadcrumb, { BreadcrumbItem } from "@/components/primitives/Breadcrumb";
import Button from "@/components/primitives/Button";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
}

interface HeroProps {
  label?: string;
  breadcrumb?: BreadcrumbItem[];
  heading: ReactNode;
  lead?: string;
  actions?: HeroAction[];
  className?: string;
  children?: ReactNode;
  /** Optional background image (e.g. the home hero). A warm paper veil keeps text legible. */
  bgImage?: string;
}

export default function Hero({ label, breadcrumb, heading, lead, actions, className, children, bgImage }: HeroProps) {
  return (
    <section className={clsx("relative overflow-hidden py-20", !bgImage && "bg-background", className)}>
      {bgImage && (
        <div aria-hidden className="absolute inset-0">
          <Image src={bgImage} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          {/* Warm-paper veil so the dark headline stays readable over the photo */}
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}
      <div className="relative z-10 max-w-[880px] mx-auto px-7">
        {/* On inner pages the breadcrumb stands in for the hero label, so we
            suppress the section label when a breadcrumb is present (avoids two
            near-identical mono/uppercase lines). The home page has no
            breadcrumb, so it keeps its "§ 01 — Introduction" label. */}
        {breadcrumb && breadcrumb.length > 0 ? (
          <Breadcrumb items={breadcrumb} />
        ) : (
          label && <SectionLabel>{label}</SectionLabel>
        )}
        <h1 className="font-mono text-[clamp(30px,4.4vw,50px)] font-extrabold leading-[1.06] tracking-[-0.02em] uppercase text-ink mb-7 text-wrap-balance">
          {heading}
        </h1>
        {lead && (
          <p className="font-mono text-[17px] leading-[1.55] text-ink-secondary max-w-[560px] mb-9">
            {lead}
          </p>
        )}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-3.5">
            {actions.map((action) => (
              <Button key={action.href} href={action.href} variant={action.variant ?? "primary"}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
