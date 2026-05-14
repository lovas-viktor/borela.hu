import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center px-[22px] py-3 font-sans font-bold text-[11px] tracking-[0.16em] uppercase border transition-colors duration-150 cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary border-primary hover:bg-primary-hover hover:border-primary-hover",
  ghost:
    "bg-transparent text-ink border-ink hover:bg-ink hover:text-on-primary",
  "outline-light":
    "bg-transparent text-on-surface-dark border-on-surface-dark/40 hover:border-on-surface-dark hover:bg-on-surface-dark/10",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  disabled,
  className,
  external,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(classes, disabled && "opacity-50 cursor-not-allowed")}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
