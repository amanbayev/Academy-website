import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {IconCard} from '@/components/cards/icon-card';
import {MetricStrip} from '@/components/sections/metric-strip';
import {PartnerStrip} from '@/components/sections/partner-strip';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {metrics, partners} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'higher'});
  return localizedMetadata(params.locale, '/higher-education', t('title'), t('subtitle'));
}

export default async function HigherEducationPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('higher');
  const common = await getTranslations('common');
  const locale = params.locale;
  const initiatives = ['Майнор-программы', 'Гостевые лекции', 'Стажировки и практики', 'Летние школы', 'Исследовательское сотрудничество', 'Карьерная поддержка'];

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} primary="Наши инициативы" primaryHref="#initiatives" secondary="Стать партнером" secondaryHref={`/${locale}/contacts`} image="/images/visual-campus.svg" />
      <section className="container-page py-12">
        <h2 className="text-3xl font-bold">{t('path')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {['Школа', 'Университет', 'Рынок профессий'].map((item) => <IconCard key={item} title={item} text="" />)}
        </div>
      </section>
      <section id="initiatives" className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('initiatives')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {initiatives.map((item) => <IconCard key={item} title={item} text="Academic initiative content is editable in the CMS-ready data model." cta={common('learnMore')} />)}
        </div>
      </section>
      <PartnerStrip partners={partners} title={t('collabs')} />
      <MetricStrip metrics={metrics} locale={locale} />
      <DarkFeatureSection title={t('darkTitle')} text="AIFC Academy supports university partnerships, student pathways and applied research initiatives." features={['International standards', 'Practical orientation', 'Inclusivity', 'Regional impact']} cta="Стать партнером" href={`/${locale}/contacts`} />
    </>
  );
}
