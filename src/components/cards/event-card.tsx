import Image from 'next/image';
import {MapPin} from 'lucide-react';
import type {EventItem} from '@/content/types';
import type {Locale} from '@/i18n/routing';
import {formatDate} from '@/lib/utils';

export function EventCard({event, locale, cta}: {event: EventItem; locale: Locale; cta: string}) {
  return (
    <article className="grid gap-5 rounded-lg border border-academy-border bg-white p-4 md:grid-cols-[170px_1fr_auto] md:items-center">
      <div className="relative h-32 overflow-hidden rounded-md">
        <Image src={event.image} alt="" fill className="object-cover" />
      </div>
      <div>
        <div className="text-sm font-semibold text-academy-red">{formatDate(event.date, locale)} · {event.type[locale]}</div>
        <h3 className="mt-2 text-lg font-bold">{event.title[locale]}</h3>
        <p className="mt-2 flex gap-2 text-sm text-academy-text"><MapPin className="h-4 w-4 text-academy-red" />{event.location[locale]}</p>
      </div>
      <span className="text-sm font-semibold text-academy-red">{cta}</span>
    </article>
  );
}
