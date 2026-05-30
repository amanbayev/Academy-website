import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {MetricStrip} from '@/components/sections/metric-strip';
import {IconCard} from '@/components/cards/icon-card';
import {NewsCard} from '@/components/cards/news-card';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {metrics, news} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'impact'});
  return localizedMetadata(params.locale, '/impact', t('title'), t('subtitle'));
}

export default async function ImpactPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('impact');
  const common = await getTranslations('common');
  const locale = params.locale;
  const areas = ['Развиваем профессионалов', 'Поддерживаем университеты', 'Укрепляем рынок', 'Повышаем финансовую грамотность'];

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} image="/images/visual-campus.svg" />
      <MetricStrip metrics={metrics} locale={locale} />
      <section className="container-page py-12">
        <h2 className="text-3xl font-bold">{t('areas')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {areas.map((area) => <IconCard key={area} title={area} text="Impact content is editable and should be verified by Academy before publishing." cta={common('learnMore')} />)}
        </div>
      </section>
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('stories')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {news.map((item) => <NewsCard key={item.id} item={item} locale={locale} cta={common('readMore')} />)}
        </div>
      </section>
      <DarkFeatureSection title={t('cta')} text="Partnership initiatives help scale financial education, professional capability and institutional expertise." features={['Universities', 'Companies', 'Experts', 'Ecosystem partners']} cta={common('requestProposal')} href={`/${locale}/contacts`} />
    </>
  );
}
