import Image from 'next/image';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {CalendarDays, Clock, Globe2, Monitor, Tag} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Accordion} from '@/components/ui/accordion';
import {Card} from '@/components/ui/card';
import {ProgramCard} from '@/components/cards/program-card';
import {PersonCard} from '@/components/cards/person-card';
import {getProgramBySlug, getRelatedPrograms, getTrainerById, programs} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';
import {courseJsonLd} from '@/lib/structured-data';
import {formatDate, formatPrice} from '@/lib/utils';

export function generateStaticParams() {
  return programs.flatMap((program) => ['ru', 'en', 'kk'].map((locale) => ({locale, slug: program.slug})));
}

export async function generateMetadata({params}: {params: {locale: Locale; slug: string}}): Promise<Metadata> {
  const program = getProgramBySlug(params.slug);
  if (!program) return {};
  return localizedMetadata(params.locale, `/programs/${program.slug}`, program.title[params.locale], program.shortDescription[params.locale]);
}

export default async function ProgramDetailPage({params}: {params: {locale: Locale; slug: string}}) {
  const program = getProgramBySlug(params.slug);
  if (!program) notFound();
  const locale = params.locale;
  const t = await getTranslations('programDetail');
  const common = await getTranslations('common');
  const trainer = getTrainerById(program.trainerIds[0]);

  const facts = [
    [CalendarDays, formatDate(program.startDate, locale)],
    [Clock, program.duration[locale]],
    [Monitor, common(program.format)],
    [Globe2, program.language],
    [Tag, formatPrice(program.price)]
  ] as const;

  return (
    <>
      <section className="academy-pattern border-b border-academy-border">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-academy-red">{program.category}</p>
            <h1 className="text-5xl font-bold leading-tight">{program.title[locale]}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-academy-text">{program.shortDescription[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/contacts`}>{common('register')}</Button>
              <Button href={`/${locale}/contacts`} variant="secondary">{common('requestInvoice')}</Button>
              <Button href={`/${locale}/contacts`} variant="secondary">{common('consultation')}</Button>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-l-[48px]">
            <Image src={program.image} alt="" fill priority className="object-cover" />
          </div>
        </div>
      </section>
      <section className="container-page -mt-5 relative z-10">
        <div className="grid gap-3 rounded-lg border border-academy-border bg-white p-5 shadow-soft md:grid-cols-5">
          {facts.map(([Icon, text]) => (
            <div key={text} className="flex items-center gap-3 border-b border-academy-border pb-3 last:border-b-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0">
              <Icon className="h-5 w-5 text-academy-red" />
              <span className="text-sm font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_330px]">
        <div>
          <h2 className="text-3xl font-bold">{t('modules')}</h2>
          <div className="mt-6">
            <Accordion items={program.modules.map((module) => ({title: module.title[locale], content: module.description[locale], meta: module.duration[locale]}))} />
          </div>
          <Card className="mt-7">
            <h2 className="text-2xl font-bold">{t('about')}</h2>
            <p className="mt-4 leading-7 text-academy-text">{program.fullDescription[locale]}</p>
          </Card>
          <Card className="mt-7">
            <h2 className="text-2xl font-bold">{t('forWhom')}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.audience[locale].map((item) => <span key={item} className="rounded-full bg-academy-soft px-3 py-2 text-sm">{item}</span>)}
            </div>
          </Card>
        </div>
        <aside className="space-y-6">
          {trainer ? <PersonCard person={trainer} locale={locale} /> : null}
          <Card>
            <h2 className="text-xl font-bold">{t('outcomes')}</h2>
            <ul className="mt-4 space-y-3 text-sm text-academy-text">
              {program.outcomes[locale].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
          </Card>
        </aside>
      </section>
      <section className="container-page py-4">
        <div className="dark-pattern rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold">{t('why')}</h2>
          <p className="mt-4 max-w-3xl text-gray-300">{program.fullDescription[locale]}</p>
        </div>
      </section>
      <section className="container-page py-10">
        <h2 className="text-3xl font-bold">{t('related')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {getRelatedPrograms(program.relatedProgramIds).map((item) => <ProgramCard key={item.id} program={item} locale={locale} hrefLabel={common('learnMore')} />)}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(courseJsonLd(program, locale))}} />
    </>
  );
}
