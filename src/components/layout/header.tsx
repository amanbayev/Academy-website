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
    <header className="sticky top-0 z-50 border-b border-academy-border bg-white/95 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3 font-bold">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border-2 border-academy-red text-sm font-extrabold text-academy-red">
            C
            <span className="absolute -right-1 top-1 h-2 w-2 rounded-full bg-academy-red" />
          </span>
          <span className="text-2xl tracking-tight">Academy</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex">
          {navItems.map(([key, href]) => (
            <Link key={key} href={`/${locale}${href}`} className="border-b-2 border-transparent py-6 transition hover:border-academy-red hover:text-academy-red">
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
        <MobileNav
          locale={locale}
          path={path}
          items={navItems.map(([key, href]) => ({label: t(key), href}))}
          cta={t('cta')}
          openLabel={t('openMenu')}
          closeLabel={t('closeMenu')}
        />
      </div>
    </header>
  );
}
