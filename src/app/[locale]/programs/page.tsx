import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {ProgramCatalog} from '@/components/catalog/program-catalog';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {programs} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'programs'});
  return localizedMetadata(params.locale, '/programs', t('title'), t('subtitle'));
}

export default async function ProgramsPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('programs');
  const f = await getTranslations('filters');
  const common = await getTranslations('common');
  const locale = params.locale;

  return (
    <>
      <section className="academy-pattern border-b border-academy-border">
        <div className="container-page py-16">
          <h1 className="text-5xl font-bold">{t('title')}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-academy-text">{t('subtitle')}</p>
        </div>
      </section>
      <section className="container-page py-10">
        <ProgramCatalog
          programs={programs}
          locale={locale}
          labels={{
            search: f('search'),
            area: f('area'),
            format: f('format'),
            level: f('level'),
            language: f('language'),
            location: f('location'),
            sort: f('sort'),
            nearest: f('nearest'),
            priceAsc: f('priceAsc'),
            title: f('title'),
            all: common('all'),
            learnMore: common('learnMore')
          }}
        />
      </section>
      <DarkFeatureSection
        title={t('tracks')}
        text="Career tracks combine several Academy programs into a coherent professional development path."
        features={['Financial expert', 'AIFC lawyer', 'Compliance and risk expert', 'Future leader']}
        cta={common('viewAll')}
        href={`/${locale}/programs`}
      />
      <section className="container-page py-8">
        <div className="rounded-lg border border-academy-border bg-white p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{t('notFound')}</h2>
            <p className="mt-2 text-academy-text">{t('notFoundText')}</p>
          </div>
          <a href={`/${locale}/contacts`} className="mt-5 inline-block rounded-md border border-academy-red px-6 py-3 text-sm font-semibold text-academy-red md:mt-0">{common('submit')}</a>
        </div>
      </section>
    </>
  );
}
