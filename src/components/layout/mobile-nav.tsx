'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {ChevronRight, Menu, X} from 'lucide-react';
import type {Locale} from '@/i18n/routing';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from './language-switcher';

export function MobileNav({
  locale,
  path,
  items,
  cta,
  openLabel,
  closeLabel
}: {
  locale: Locale;
  path: string;
  items: Array<{label: string; href: string}>;
  cta: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-md border border-academy-border bg-white text-academy-black shadow-sm"
        aria-label={openLabel}
      >
        <Menu className="h-5 w-5" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-[100] h-dvh overflow-y-auto bg-white">
          <div className="flex h-16 items-center justify-between border-b border-academy-border px-5">
            <Link href={`/${locale}`} onClick={() => setOpen(false)} className="flex items-center gap-3 font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-academy-red text-sm text-academy-red">C</span>
              <span className="text-xl tracking-tight">Academy</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-md border border-academy-border bg-white"
              aria-label={closeLabel}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="px-5 py-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-academy-border py-4 text-base font-semibold"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-academy-red" aria-hidden />
              </Link>
            ))}
          </nav>
          <div className="mx-5 rounded-lg bg-academy-soft p-5">
            <p className="text-sm font-semibold text-academy-black">AIFC Academy</p>
            <p className="mt-1 text-sm leading-6 text-academy-text">{cta}</p>
          </div>
          <div className="flex items-center justify-between px-5 py-6">
            <LanguageSwitcher locale={locale} path={path} />
            <Button href={`/${locale}/contacts`}>{cta}</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
