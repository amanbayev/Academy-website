import Link from 'next/link';
import {Linkedin, Mail, MapPin, Phone, Send, Youtube} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';

export async function Footer({locale}: {locale: Locale}) {
  const t = await getTranslations('footer');

  return (
    <footer className="dark-pattern mt-16 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3 text-2xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-academy-red text-academy-red">C</span>
            Academy
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-300">{t('description')}</p>
          <div className="mt-5 flex gap-3 text-gray-300">
            <Linkedin className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
        </div>
        <FooterColumn title={t('programs')} links={[['/programs', t('programCatalog')], ['/corporate-training', t('corporate')], ['/higher-education', t('higher')]]} locale={locale} />
        <FooterColumn title={t('areas')} links={[['/programs', t('finance')], ['/programs', t('law')], ['/programs', t('esg')]]} locale={locale} />
        <FooterColumn title={t('about')} links={[['/about', t('academy')], ['/impact', t('impact')], ['/news', t('news')], ['/contacts', t('contacts')]]} locale={locale} />
        <div>
          <h3 className="font-semibold">{t('contacts')}</h3>
          <ul className="mt-5 space-y-3 text-sm text-gray-300">
            <li className="flex gap-3"><Phone className="h-4 w-4 text-academy-red" />+7 7172 21 31 00</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-academy-red" />academy@aifc.kz</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-academy-red" />Astana, AIFC, Tower C</li>
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
        <span>{t('copyright')}</span>
        <div className="flex gap-5">
          <Link href={`/${locale}/contacts`}>{t('privacy')}</Link>
          <Link href={`/${locale}/contacts`}>{t('terms')}</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({title, links, locale}: {title: string; links: Array<[string, string]>; locale: Locale}) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-gray-300">
        {links.map(([href, label]) => (
          <li key={`${href}-${label}`}>
            <Link href={`/${locale}${href}`} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
