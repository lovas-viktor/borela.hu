import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" aria-label="Borela BT. — home" className={className}>
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
