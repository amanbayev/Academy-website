import Image from 'next/image';
import type {TeamMember, Trainer} from '@/content/types';
import type {Locale} from '@/i18n/routing';

export function PersonCard({person, locale}: {person: TeamMember | Trainer; locale: Locale}) {
  return (
    <article className="rounded-lg border border-academy-border bg-white p-5 text-center">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
        <Image src={person.photo} alt="" fill className="object-cover" />
      </div>
      <h3 className="mt-4 font-bold">{person.name[locale]}</h3>
      <p className="mt-1 text-sm text-academy-text">{person.title[locale]}</p>
    </article>
  );
}
