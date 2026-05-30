'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import type {Locale} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './language-switcher';

export function MobileNav({locale, path, items, cta}: {locale: Locale; path: string; items: Array<{label: string; href: string}>; cta: string}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-md border border-academy-border"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Academy</span>
            <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-md border border-academy-border" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 grid gap-5 text-lg font-semibold">
            {items.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex items-center justify-between">
            <LanguageSwitcher locale={locale} path={path} />
            <Button href={`/${locale}/contacts`}>{cta}</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
