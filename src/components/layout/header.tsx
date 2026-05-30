import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './language-switcher';
import {MobileNav} from './mobile-nav';

const navItems = [
  ['programs', '/programs'],
  ['areas', '/programs'],
  ['audiences', '/higher-education'],
  ['about', '/about'],
  ['events', '/events'],
  ['contacts', '/contacts']
] as const;

export async function Header({locale, path = ''}: {locale: Locale; path?: string}) {
  const t = await getTranslations('nav');

  return (
    <header className="sticky top-0 z-50 border-b border-academy-border bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-academy-red text-academy-red">C</span>
          <span className="text-2xl tracking-tight">Academy</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {navItems.map(([key, href]) => (
            <Link key={key} href={`/${locale}${href}`} className="transition hover:text-academy-red">
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} path={path} />
          <Button href={`/${locale}/contacts`} className="min-h-10 px-5">
            {t('cta')}
          </Button>
        </div>
        <MobileNav locale={locale} path={path} items={navItems.map(([key, href]) => ({label: t(key), href}))} cta={t('cta')} />
      </div>
    </header>
  );
}
