'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {localeLabels, locales, type Locale} from '@/i18n/routing';
import {cn} from '@/lib/utils';

export function LanguageSwitcher({locale}: {locale: Locale; path?: string}) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(ru|en|kk)/, '') || '';

  return (
    <div className="flex items-center gap-2 text-xs font-semibold">
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${suffix}`}
          className={cn('text-academy-text transition hover:text-academy-red', item === locale && 'text-academy-red')}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
