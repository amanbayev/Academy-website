import Image from 'next/image';
import type {NewsItem} from '@/content/types';
import type {Locale} from '@/i18n/routing';
import {formatDate} from '@/lib/utils';

export function NewsCard({item, locale, cta}: {item: NewsItem; locale: Locale; cta: string}) {
  return (
    <article className="overflow-hidden rounded-lg border border-academy-border bg-white shadow-sm">
      <div className="relative h-40">
        <Image src={item.image} alt="" fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="text-xs font-bold uppercase text-academy-red">{item.category[locale]} · {formatDate(item.date, locale)}</div>
        <h3 className="mt-3 text-lg font-bold leading-7">{item.title[locale]}</h3>
        <p className="mt-3 text-sm leading-6 text-academy-text">{item.summary[locale]}</p>
        <div className="mt-5 text-sm font-semibold text-academy-red">{cta}</div>
      </div>
    </article>
  );
}
