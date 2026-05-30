import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';
import {Mail, MapPin, Phone} from 'lucide-react';
import {Card} from '@/components/ui/card';
import {ContactForm} from '@/components/forms/contact-form';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'contacts'});
  return localizedMetadata(params.locale, '/contacts', t('title'), t('subtitle'));
}

export default async function ContactsPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('contacts');
  const common = await getTranslations('common');
  const forms = await getTranslations('forms');
  const locale = params.locale;

  return (
    <>
      <section className="academy-pattern">
        <div className="container-page py-16">
          <h1 className="text-5xl font-bold">{t('title')}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-academy-text">{t('subtitle')}</p>
        </div>
      </section>
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_1.1fr]">
        <Card>
          <h2 className="text-2xl font-bold">AIFC Academy</h2>
          <div className="mt-8 space-y-6 text-sm text-academy-text">
            <p className="flex gap-3"><MapPin className="h-5 w-5 text-academy-red" />Republic of Kazakhstan, Astana, AIFC, Tower C</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 text-academy-red" />+7 7172 21 31 00</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 text-academy-red" />academy@aifc.kz</p>
          </div>
          <div className="mt-8 grid h-72 place-items-center rounded-lg bg-[url('/images/aifc-panorama.svg')] bg-cover bg-center text-sm font-semibold text-white">
            <span className="rounded-md bg-academy-black/80 px-4 py-2">AIFC Academy · Tower C</span>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold">{t('write')}</h2>
          <p className="mt-2 text-sm text-academy-text">{t('subtitle')}</p>
          <div className="mt-6">
            <ContactForm locale={locale} source="contacts" labels={{name: forms('name'), company: forms('company'), email: forms('email'), phone: forms('phone'), topic: forms('topic'), message: forms('message'), consent: forms('consent'), submit: common('submit'), success: forms('success'), error: forms('error')}} />
          </div>
        </Card>
      </section>
      <section className="container-page py-8">
        <div className="rounded-lg bg-academy-red p-8 text-white md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold">{t('consult')}</h2>
          <a href={`/${locale}/contacts`} className="mt-5 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-academy-black md:mt-0">{common('consultation')}</a>
        </div>
      </section>
    </>
  );
}
