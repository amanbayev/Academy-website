import type {MetadataRoute} from 'next';
import {locales} from '@/i18n/routing';
import {programs} from '@/content/getters';

const base = 'https://academy.aifc.kz';
const pages = ['', '/programs', '/corporate-training', '/higher-education', '/events', '/about', '/impact', '/news', '/contacts'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.flatMap((locale) =>
      pages.map((path) => ({
        url: `${base}/${locale}${path}`,
        lastModified: new Date()
      }))
    ),
    ...locales.flatMap((locale) =>
      programs.map((program) => ({
        url: `${base}/${locale}/programs/${program.slug}`,
        lastModified: new Date(program.startDate)
      }))
    )
  ];
}
