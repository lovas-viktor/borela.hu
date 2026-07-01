import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

interface LogoProps {
  className?: string;
  lang?: Locale;
}

export default function Logo({ className, lang }: LogoProps) {
  return (
    <Link href={lang ? `/${lang}/` : "/"} aria-label="Borela BT. — home" className={className}>
      <Image
        src="/borela-logo.svg"
        alt="Borela BT. — Precision CNC / Est. 1953"
        width={160}
        height={53}
        priority
        className="h-[44px] w-auto"
      />
    </Link>
  );
}
