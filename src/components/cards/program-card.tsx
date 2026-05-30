import Image from 'next/image';
import Link from 'next/link';
import {CalendarDays, Clock, MapPin} from 'lucide-react';
import type {Program} from '@/content/types';
import type {Locale} from '@/i18n/routing';
import {formatDate, formatPrice} from '@/lib/utils';

export function ProgramCard({program, locale, hrefLabel}: {program: Program; locale: Locale; hrefLabel: string}) {
  return (
    <article className="overflow-hidden rounded-lg border border-academy-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative h-40">
        <Image src={program.image} alt="" fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="min-h-14 text-lg font-bold leading-7">{program.title[locale]}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-academy-text">{program.shortDescription[locale]}</p>
        <div className="mt-4 grid gap-2 text-sm text-academy-text">
          <span className="flex gap-2"><CalendarDays className="h-4 w-4 text-academy-red" />{formatDate(program.startDate, locale)}</span>
          <span className="flex gap-2"><Clock className="h-4 w-4 text-academy-red" />{program.duration[locale]}</span>
          <span className="flex gap-2"><MapPin className="h-4 w-4 text-academy-red" />{program.city[locale]}</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <strong>{formatPrice(program.price)}</strong>
          <Link href={`/${locale}/programs/${program.slug}`} className="text-sm font-semibold text-academy-red">
            {hrefLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
