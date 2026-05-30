import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {EventCard} from '@/components/cards/event-card';
import {NewsletterForm} from '@/components/forms/newsletter-form';
import {events, getFeaturedEvent} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';
import {formatDate} from '@/lib/utils';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'events'});
  return localizedMetadata(params.locale, '/events', t('title'), t('subtitle'));
}

export default async function EventsPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('events');
  const common = await getTranslations('common');
  const forms = await getTranslations('forms');
  const locale = params.locale;
  const featured = getFeaturedEvent();

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} image="/images/visual-forum.svg" />
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_330px]">
        <div>
          <h2 className="mb-5 text-sm font-bold uppercase text-academy-red">{t('featured')}</h2>
          <article className="grid gap-6 rounded-lg border border-academy-border bg-white p-5 md:grid-cols-[280px_1fr]">
            <div className="relative h-56 overflow-hidden rounded-md"><Image src={featured.image} alt="" fill className="object-cover" /></div>
            <div>
              <div className="text-sm font-semibold text-academy-red">{formatDate(featured.date, locale)} · {featured.city[locale]}</div>
              <h3 className="mt-3 text-3xl font-bold">{featured.title[locale]}</h3>
              <p className="mt-4 leading-7 text-academy-text">{featured.description[locale]}</p>
              <Button href={`/${locale}/contacts`} className="mt-6">{common('learnMore')}</Button>
            </div>
          </article>
          <h2 className="mt-10 text-3xl font-bold">{t('upcoming')}</h2>
          <div className="mt-6 grid gap-4">
            {events.map((event) => <EventCard key={event.id} event={event} locale={locale} cta={common('learnMore')} />)}
          </div>
        </div>
        <aside className="space-y-6">
          <Card>
            <h2 className="text-2xl font-bold">{t('sidebar')}</h2>
            <ul className="mt-5 space-y-3 text-sm text-academy-text">
              {['Concept and agenda', 'Registration management', 'Technical support', 'Speaker coordination', 'PR and media support'].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <Button href={`/${locale}/contacts`} variant="secondary" className="mt-6">{common('requestProposal')}</Button>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">{forms('newsletterTitle')}</h2>
            <p className="mt-2 text-sm text-academy-text">{forms('newsletterText')}</p>
            <div className="mt-5"><NewsletterForm locale={locale} submit={common('subscribe')} success={forms('success')} /></div>
          </Card>
        </aside>
      </section>
    </>
  );
}
