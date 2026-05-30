import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Hero} from '@/components/sections/hero';
import {IconCard} from '@/components/cards/icon-card';
import {DarkFeatureSection} from '@/components/sections/dark-feature-section';
import {ContactForm} from '@/components/forms/contact-form';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'corporate'});
  return localizedMetadata(params.locale, '/corporate-training', t('title'), t('subtitle'));
}

export default async function CorporatePage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('corporate');
  const common = await getTranslations('common');
  const forms = await getTranslations('forms');
  const locale = params.locale;
  const areas = ['Finance and capital markets', 'Law and compliance', 'AI for business', 'Sales and client experience', 'Leadership and management', 'ESG and sustainable development'];
  const process = ['Diagnostics', 'Solution design', 'Delivery', 'Implementation', 'Impact measurement'];

  return (
    <>
      <Hero title={t('title')} subtitle={t('subtitle')} primary={common('requestProposal')} primaryHref={`/${locale}/contacts`} secondary="Поговорить с экспертом" secondaryHref={`/${locale}/contacts`} image="/images/aifc-panorama.svg" />
      <section className="container-page py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {['Результат для бизнеса', 'Экспертиза мирового уровня', 'Индивидуальный подход', 'Устойчивый эффект'].map((item) => <IconCard key={item} title={item} text="" />)}
        </div>
      </section>
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('areas')}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {areas.map((area) => <IconCard key={area} title={area} text="Customized learning solutions for institutional teams." />)}
        </div>
      </section>
      <DarkFeatureSection title={t('formats')} text="Training formats can combine in-person sessions, online modules, workshops and executive intensives." features={['Тренинги', 'Интенсивы', 'Корпоративные академии', 'Онлайн-курсы', 'Гибридные решения']} />
      <section className="container-page py-8">
        <h2 className="text-3xl font-bold">{t('process')}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {process.map((step, index) => <div key={step} className="border-t-2 border-academy-red pt-4"><strong className="text-academy-red">{index + 1}</strong><p className="mt-2 text-sm font-semibold">{step}</p></div>)}
        </div>
      </section>
      <section className="container-page py-8">
        <div className="rounded-lg border border-academy-border bg-white p-8">
          <h2 className="text-3xl font-bold">{t('formTitle')}</h2>
          <div className="mt-6">
            <ContactForm locale={locale} source="corporate-training" type="corporate" labels={{name: forms('name'), company: forms('company'), position: forms('position'), email: forms('email'), phone: forms('phone'), topic: forms('topic'), priority: forms('priority'), message: forms('message'), consent: forms('consent'), submit: common('requestProposal'), success: forms('success'), error: forms('error')}} />
          </div>
        </div>
      </section>
    </>
  );
}
