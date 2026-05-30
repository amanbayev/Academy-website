import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {MetricStrip} from '@/components/sections/metric-strip';
import {IconCard} from '@/components/cards/icon-card';
import {ProgramCard} from '@/components/cards/program-card';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {PartnerStrip} from '@/components/sections/partner-strip';
import {NewsCard} from '@/components/cards/news-card';
import {getFeaturedPrograms, learningAreas, metrics, news, partners} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});
  return localizedMetadata(params.locale, '/', t('title'), t('subtitle'));
}

export default async function HomePage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('home');
  const common = await getTranslations('common');
  const locale = params.locale;
  const pathways = [
    ['users', {ru: 'Для профессионалов', en: 'For professionals', kk: 'Кәсіби мамандарға'}, {ru: 'Развивайте экспертизу и получайте прикладные знания для роста на финансовом рынке.', en: 'Develop expertise and applied knowledge for growth in finance.', kk: 'Қаржы нарығында өсу үшін тәжірибе мен қолданбалы білімді дамытыңыз.'}],
    ['briefcase', {ru: 'Для компаний', en: 'For companies', kk: 'Компанияларға'}, {ru: 'Корпоративные решения для развития команд и достижения бизнес-целей.', en: 'Corporate solutions for team development and business outcomes.', kk: 'Командаларды дамыту және бизнес мақсаттары үшін корпоративтік шешімдер.'}],
    ['graduation', {ru: 'Для университетов', en: 'For universities', kk: 'Университеттерге'}, {ru: 'Партнерства, майнор-программы и академические инициативы.', en: 'Partnerships, minor programs and academic initiatives.', kk: 'Серіктестік, майнор бағдарламалар және академиялық бастамалар.'}],
    ['globe', {ru: 'Для молодежи и общества', en: 'For youth and society', kk: 'Жастар мен қоғамға'}, {ru: 'Финансовая грамотность, карьерная ориентация и инициативы для нового поколения.', en: 'Financial literacy, career pathways and initiatives for the next generation.', kk: 'Қаржылық сауаттылық, мансаптық бағдар және жаңа буынға арналған бастамалар.'}]
  ] as const;

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} primary={t('primary')} primaryHref={`/${locale}/programs`} secondary={t('secondary')} secondaryHref={`/${locale}/corporate-training`} />
      <MetricStrip metrics={metrics} locale={locale} />
      <section className="container-page py-12">
        <h2 className="text-2xl font-bold">{t('pathways')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pathways.map(([icon, title, text]) => (
            <IconCard key={title[locale]} icon={icon} title={title[locale]} text={text[locale]} cta={common('learnMore')} />
          ))}
        </div>
      </section>
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('learningTitle')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {learningAreas.map((area) => (
            <IconCard key={area.id} icon={area.icon} title={area.title[locale]} text="" />
          ))}
        </div>
      </section>
      <section className="container-page py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold">{t('recommended')}</h2>
          <a href={`/${locale}/programs`} className="text-sm font-semibold text-academy-red">{common('viewAll')}</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {getFeaturedPrograms().map((program) => (
            <ProgramCard key={program.id} program={program} locale={locale} hrefLabel={common('learnMore')} />
          ))}
        </div>
      </section>
      <DarkFeatureSection
        title={t('darkTitle')}
        text={t('darkText')}
        features={['Unique AIFC environment', 'Global standards', 'Practical expertise', 'Community and network']}
        cta={common('learnMore')}
        href={`/${locale}/about`}
      />
      <PartnerStrip partners={partners} title={t('partners')} />
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('news')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} locale={locale} cta={common('readMore')} />
          ))}
        </div>
      </section>
      <section className="container-page py-8">
        <div className="rounded-lg bg-academy-red p-8 text-white md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold">{t('finalCta')}</h2>
          <div className="mt-6 md:mt-0">
            <a href={`/${locale}/contacts`} className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-academy-black">{common('consultation')}</a>
          </div>
        </div>
      </section>
    </>
  );
}
