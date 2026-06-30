import clsx from "clsx";

// EN is the only live language (Phase 1). DE/HU are shown but disabled until
// the trilingual content + i18n routing land.
const LANGUAGES = [
  { code: "EN", label: "English", active: true },
  { code: "DE", label: "Deutsch", active: false },
  { code: "HU", label: "Magyar", active: false },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  return (
    <div
      className={clsx("flex items-center font-mono text-[11px] tracking-[0.1em] uppercase", className)}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="text-border-strong mx-1.5">·</span>}
          {lang.active ? (
            <span className="text-primary font-bold" aria-current="true">
              {lang.code}
            </span>
          ) : (
            <button
              type="button"
              disabled
              title={`${lang.label} — coming soon`}
              className="text-ink-tertiary cursor-not-allowed"
            >
              {lang.code}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
