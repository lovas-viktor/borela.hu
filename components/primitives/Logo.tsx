import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface LogoProps {
  className?: string;
  lang?: Locale;
}

export default function Logo({ className, lang }: LogoProps) {
  return (
    <Link href={lang ? `/${lang}/` : "/"} aria-label="Borela — home" className={className}>
      <Image
        src="/borela-logo.png"
        alt="Borela — Precision CNC"
        width={592}
        height={105}
        priority
        className="h-[18px] w-auto"
      />
    </Link>
  );
}
