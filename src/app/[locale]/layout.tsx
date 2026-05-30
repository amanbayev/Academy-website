import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Footer} from '@/components/layout/footer';
import {Header} from '@/components/layout/header';
import {isLocale, locales, type Locale} from '@/i18n/routing';
import {organizationJsonLd} from '@/lib/structured-data';
import '../globals.css';

const inter = Inter({subsets: ['latin', 'cyrillic'], display: 'swap'});

export const metadata: Metadata = {
  title: 'AIFC Academy',
  description: 'Premium institutional education platform of AIFC Academy'
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: {children: React.ReactNode; params: {locale: string}}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd(locale))}} />
      </body>
    </html>
  );
}
