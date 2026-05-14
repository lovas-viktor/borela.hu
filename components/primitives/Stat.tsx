import clsx from "clsx";

interface StatProps {
  value: string;
  label: string;
  dark?: boolean;
  unit?: string;
  className?: string;
}

export default function Stat({ value, label, dark = false, unit, className }: StatProps) {
  return (
    <div className={clsx("text-center px-4 py-1", className)}>
      <div
        className={clsx(
          "text-[32px] font-extrabold tracking-tight leading-tight",
          dark ? "text-on-surface-dark" : "text-ink"
        )}
      >
        {value}
        {unit && (
          <span className={clsx("font-mono text-[11px] font-medium ml-0.5 align-baseline", dark ? "text-on-surface-dark/50" : "text-ink-tertiary")}>
            {unit}
          </span>
        )}
      </div>
      <div
        className={clsx(
          "mt-2 font-mono text-[10px] tracking-[0.16em] uppercase",
          dark ? "text-on-surface-dark/50" : "text-ink-tertiary"
        )}
      >
        {label}
      </div>
    </div>
  );
}
