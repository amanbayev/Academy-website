import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {IconCard} from '@/components/cards/icon-card';
import {Timeline} from '@/components/sections/timeline';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {PersonCard} from '@/components/cards/person-card';
import {PartnerStrip} from '@/components/sections/partner-strip';
import {partners, team} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'about'});
  return localizedMetadata(params.locale, '/about', t('title'), t('subtitle'));
}

export default async function AboutPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('about');
  const common = await getTranslations('common');
  const locale = params.locale;
  const principles = ['Миссия и влияние', 'Международность', 'Качество и этика', 'Инновации', 'Партнерство'];
  const timeline = ['2018', '2019', '2020', '2021', '2022', '2023', '2024+'].map((year) => ({year, title: 'Milestone', text: 'Editable timeline content for Academy history and initiatives.'}));

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} primary={common('requestProposal')} primaryHref={`/${locale}/contacts`} secondary={common('consultation')} secondaryHref={`/${locale}/contacts`} />
      <section className="container-page py-12">
        <h2 className="text-3xl font-bold">{t('principles')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-5">
          {principles.map((item) => <IconCard key={item} title={item} text="" />)}
        </div>
      </section>
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('timeline')}</h2>
        <div className="mt-8"><Timeline items={timeline} /></div>
      </section>
      <DarkFeatureSection title={t('different')} text="Academy combines AIFC ecosystem access, applied expertise, global standards and measurable outcomes." features={['International hub', 'World-class practice', 'Community of leaders', 'Measurable outcomes']} />
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('team')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {team.map((member) => <PersonCard key={member.id} person={member} locale={locale} />)}
        </div>
      </section>
      <PartnerStrip partners={partners} title={t('ecosystem')} />
    </>
  );
}
