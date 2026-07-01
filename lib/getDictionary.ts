import type { Locale } from "./i18n";

// Each dictionary is grouped by page/area, then by dot-notation string key.
export type Dictionary = Record<string, Record<string, string>>;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default as Dictionary),
  de: () => import("@/dictionaries/de.json").then((m) => m.default as Dictionary),
  hu: () => import("@/dictionaries/hu.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (dictionaries[locale] ?? dictionaries.en)();
}
