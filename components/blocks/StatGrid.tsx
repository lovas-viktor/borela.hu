import clsx from "clsx";
import Stat from "@/components/primitives/Stat";

export interface StatItem {
  value: string;
  label: string;
  unit?: string;
}

interface StatGridProps {
  stats: StatItem[];
  dark?: boolean;
  columns?: 3 | 4 | 5;
  className?: string;
}

export default function StatGrid({ stats, dark = false, columns = 3, className }: StatGridProps) {
  const colClass: Record<number, string> = {
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-5",
  };

  return (
    <section
      className={clsx(
        dark ? "bg-surface-dark" : "bg-surface-alt",
        "border-y",
        dark ? "border-border-dark" : "border-border",
        className
      )}
    >
      <div className="max-w-[880px] mx-auto px-7 py-9">
        <div className={clsx("grid divide-x divide-border", colClass[columns])}>
          {stats.map((s, i) => (
            <div
              key={i}
              className={clsx(
                "py-1",
                i > 0 && "sm:border-l",
                dark ? "sm:border-border-dark" : "sm:border-border",
                i === 0 && "border-0"
              )}
            >
              <Stat value={s.value} label={s.label} unit={s.unit} dark={dark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
