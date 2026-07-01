export const locales = ["en", "de", "hu"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Display names for the language switcher.
export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  hu: "Magyar",
};
