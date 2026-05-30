import type {Metadata} from 'next';
import type {Locale} from '@/i18n/routing';
import {locales} from '@/i18n/routing';

const baseUrl = 'https://academy.aifc.kz';

export function localizedMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const cleanPath = path === '/' ? '' : path;
  const alternates = Object.fromEntries(locales.map((item) => [item, `/${item}${cleanPath}`]));

  return {
    title: `${title} | AIFC Academy`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}${cleanPath}`,
      languages: {
        ...alternates,
        'x-default': `/ru${cleanPath}`
      }
    },
    openGraph: {
      title: `${title} | AIFC Academy`,
      description,
      url: `/${locale}${cleanPath}`,
      siteName: 'AIFC Academy',
      images: [{url: '/images/aifc-panorama.svg', width: 1200, height: 720}],
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIFC Academy`,
      description
    }
  };
}
