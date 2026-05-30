export const locales = ['ru', 'en', 'kk'] as const;
export type Locale = (typeof locales)[number];

export const routing = {
  locales,
  defaultLocale: 'ru',
  localePrefix: 'always'
} as const;

export const localeLabels: Record<Locale, string> = {
  ru: 'RU',
  en: 'EN',
  kk: 'KZ'
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
