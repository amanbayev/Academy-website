import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {NewsCard} from '@/components/cards/news-card';
import {NewsletterForm} from '@/components/forms/newsletter-form';
import {news} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'news'});
  return localizedMetadata(params.locale, '/news', t('title'), t('subtitle'));
}

export default async function NewsPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('news');
  const common = await getTranslations('common');
  const forms = await getTranslations('forms');
  const locale = params.locale;
  const featured = news[0];

  return (
    <>
      <section className="academy-pattern">
        <div className="container-page py-16">
          <h1 className="text-5xl font-bold">{t('title')}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-academy-text">{t('subtitle')}</p>
        </div>
      </section>
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
        <div>
          <NewsCard item={featured} locale={locale} cta={common('readMore')} />
          <h2 className="mt-10 text-3xl font-bold">{t('fresh')}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {news.map((item) => <NewsCard key={item.id} item={item} locale={locale} cta={common('readMore')} />)}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-lg border border-academy-border bg-white p-6">
            <h2 className="text-xl font-bold">{t('topics')}</h2>
            <ul className="mt-5 space-y-4 text-sm font-semibold">
              {['ESG', 'FinTech', 'AIFC Law', 'Capital markets', 'Financial instruments'].map((item) => <li key={item} className="border-b border-academy-border pb-3">{item}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-academy-border bg-white p-6">
            <h2 className="text-xl font-bold">{forms('newsletterTitle')}</h2>
            <p className="mt-2 text-sm text-academy-text">{forms('newsletterText')}</p>
            <div className="mt-5"><NewsletterForm locale={locale} submit={common('subscribe')} success={forms('success')} /></div>
          </div>
        </aside>
      </section>
    </>
  );
}
