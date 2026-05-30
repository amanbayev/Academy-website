import type {Locale} from '@/i18n/routing';
import type {Program} from '@/content/types';

export function organizationJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIFC Academy',
    url: `https://academy.aifc.kz/${locale}`,
    email: 'academy@aifc.kz',
    address: 'Astana, Kazakhstan, AIFC'
  };
}

export function courseJsonLd(program: Program, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.title[locale],
    description: program.shortDescription[locale],
    provider: {
      '@type': 'Organization',
      name: 'AIFC Academy'
    }
  };
}
