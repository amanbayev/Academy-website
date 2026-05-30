import Image from 'next/image';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Leaf,
  Network,
  ShieldCheck,
  UserRound,
  UsersRound
} from 'lucide-react';
import {ScrollParallaxBrand} from '@/components/sections/scroll-parallax-brand';
import {learningAreas, news, programs} from '@/content/getters';
import type {Locale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/seo';
import {formatDate} from '@/lib/utils';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});
  return localizedMetadata(params.locale, '/', t('title'), t('subtitle'));
}

const audienceCards = [
  {icon: UserRound, key: 'professionals', href: '/programs'},
  {icon: Briefcase, key: 'companies', href: '/corporate-training'},
  {icon: GraduationCap, key: 'universities', href: '/higher-education'},
  {icon: UsersRound, key: 'youth', href: '/impact'}
] as const;

const metricKeys = [
  ['15 000+', 'professionals'],
  ['3 000+', 'events'],
  ['30+', 'programs'],
  ['150+', 'experts'],
  ['40+', 'partners']
] as const;

const areaImages = {
  finance: {icon: BarChart3, image: '/images/visual-finance.svg', textKey: 'finance'},
  law: {icon: Building2, image: '/images/visual-law.svg', textKey: 'law'},
  compliance: {icon: ShieldCheck, image: '/images/visual-glass.svg', textKey: 'compliance'},
  digital: {icon: Network, image: '/images/visual-digital.svg', textKey: 'digital'},
  leadership: {icon: UsersRound, image: '/images/visual-meeting.svg', textKey: 'leadership'},
  esg: {icon: Leaf, image: '/images/visual-esg.svg', textKey: 'esg'}
} as const;

const partners = ['AIFC', 'SDU University', 'AlmaU', 'Nazarbayev University', 'KAZGUU University', 'Freedom Shapagat', 'bpifrance'];
const featureKeys = ['environment', 'practice', 'standards', 'community'] as const;

export default async function HomePage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations('home');
  const common = await getTranslations('common');
  const locale = params.locale;

  return (
    <>
      <section className="relative overflow-hidden border-b border-academy-border bg-white">
        <div className="container-page grid min-h-[430px] items-stretch gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 flex items-center py-10 pr-8">
            <div className="absolute -left-40 top-0 h-full w-[740px] rounded-r-full bg-white shadow-[30px_0_60px_rgba(17,24,39,0.04)]" />
            <div className="academy-pattern absolute -left-32 top-0 h-full w-[700px] rounded-r-full opacity-80" />
            <div className="relative max-w-xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">AIFC Academy</p>
              <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-normal text-academy-black md:text-[56px]">{t('title')}</h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-academy-text">{t('subtitle')}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <HeroButton href={`/${locale}/programs`} primary>{t('primary')}</HeroButton>
                <HeroButton href={`/${locale}/corporate-training`}>{t('secondary')}</HeroButton>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <Image src="/images/aifc-panorama.svg" alt="" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_40%,transparent_0_17%,rgba(255,255,255,0.65)_17.4%,transparent_18%),radial-gradient(circle_at_72%_34%,transparent_0_32%,rgba(255,255,255,0.45)_32.3%,transparent_33%)]" />
          </div>
        </div>
      </section>

      <ScrollParallaxBrand
        label={t('parallaxLabel')}
        title={t('parallaxTitle')}
        text={t('parallaxText')}
        primary={t('parallaxPrimary')}
        secondary={t('parallaxSecondary')}
        href={`/${locale}/programs`}
      />

      <section className="container-page grid border-b border-academy-border bg-white md:grid-cols-2 lg:grid-cols-4">
        {audienceCards.map((card) => {
          const Icon = card.icon;
          return (
            <a key={card.key} href={`/${locale}${card.href}`} className="group border-r border-academy-border px-7 py-8 last:border-r-0">
              <Icon className="h-9 w-9 text-academy-red" strokeWidth={1.7} />
              <h2 className="mt-4 text-lg font-extrabold leading-6">{t(`audience.${card.key}.title`)}</h2>
              <p className="mt-3 min-h-16 text-sm leading-6 text-academy-text">{t(`audience.${card.key}.text`)}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-academy-red">
                {t(`audience.${card.key}.cta`)} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          );
        })}
      </section>

      <section className="bg-academy-soft/70">
        <div className="container-page grid rounded-none border-x border-academy-border bg-white/70 md:grid-cols-5">
          {metricKeys.map(([value, key]) => (
            <div key={key} className="border-b border-academy-border px-6 py-7 text-center md:border-b-0 md:border-r md:last:border-r-0">
              <div className="text-3xl font-extrabold text-academy-red">{value}</div>
              <div className="mx-auto mt-2 max-w-36 text-xs font-semibold leading-5 text-academy-black">{t(`metric.${key}`)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">{t('learningLabel')}</p>
        <div className="mt-2 flex items-end justify-between gap-6">
          <h2 className="text-3xl font-extrabold">{t('learningTitle')}</h2>
          <a href={`/${locale}/programs`} className="hidden items-center text-sm font-bold text-academy-red md:inline-flex">
            {t('allPrograms')} <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {learningAreas.map((area) => {
            const config = areaImages[area.id];
            const Icon = config.icon;
            return (
              <a key={area.id} href={`/${locale}/programs`} className="group overflow-hidden rounded-lg border border-academy-border bg-white shadow-[0_8px_26px_rgba(17,24,39,0.035)]">
                <div className="relative h-28">
                  <Image src={config.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <Icon className="h-6 w-6 text-academy-red" strokeWidth={1.7} />
                  <h3 className="mt-3 min-h-12 text-sm font-extrabold leading-5">{area.title[locale]}</h3>
                  <p className="mt-2 line-clamp-4 text-xs leading-5 text-academy-text">{t(`area.${config.textKey}`)}</p>
                  <ArrowRight className="ml-auto mt-4 h-4 w-4 text-academy-red transition group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="container-page py-4">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">{t('recommendedLabel')}</p>
          <a href={`/${locale}/programs`} className="inline-flex items-center text-sm font-bold text-academy-red">{t('allPrograms')} <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.slice(0, 4).map((program) => (
            <article key={program.id} className="overflow-hidden rounded-lg border border-academy-border bg-white shadow-[0_8px_26px_rgba(17,24,39,0.035)]">
              <div className="relative h-36">
                <Image src={program.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <span className="rounded-md bg-academy-soft px-2 py-1 text-xs font-bold text-academy-text">{program.duration[locale]} - {program.language}</span>
                <h3 className="mt-4 min-h-14 text-base font-extrabold leading-6">{program.title[locale]}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-academy-text">{program.shortDescription[locale]}</p>
                <a href={`/${locale}/programs/${program.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-academy-red">
                  {common('learnMore')} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 bg-academy-graphite text-white">
        <div className="container-page grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">{t('whyLabel')}</p>
            <h2 className="mt-3 max-w-md text-4xl font-extrabold leading-tight">{t('darkTitle')}</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300">{t('darkText')}</p>
            <a href={`/${locale}/about`} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-md bg-academy-red px-6 text-sm font-bold text-white">
              {t('aboutCta')} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {featureKeys.map((key) => (
              <div key={key} className="border-l border-white/10 pl-5">
                <Globe2 className="h-9 w-9 rounded-full border border-academy-red/50 p-2 text-academy-red" />
                <h3 className="mt-4 font-extrabold">{t(`feature.${key}`)}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{t('feature.text')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">{t('partners')}</p>
        <div className="mt-4 flex gap-4 overflow-x-auto border-y border-academy-border py-5">
          {partners.map((partner) => (
            <div key={partner} className="grid min-w-40 place-items-center text-lg font-extrabold text-slate-700">{partner}</div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-6 py-6 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-academy-red">{t('news')}</p>
            <a href={`/${locale}/news`} className="inline-flex items-center text-sm font-bold text-academy-red">{common('viewAll')} <ArrowRight className="ml-2 h-4 w-4" /></a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <article key={item.id} className="overflow-hidden rounded-lg border border-academy-border bg-white">
                <div className="relative h-28">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold uppercase text-academy-red">{item.category[locale]} - {formatDate(item.date, locale)}</span>
                  <h3 className="mt-3 text-sm font-extrabold leading-5">{item.title[locale]}</h3>
                  <a href={`/${locale}/news`} className="mt-4 inline-flex text-xs font-bold text-academy-red">{common('readMore')} <ArrowRight className="ml-2 h-3 w-3" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-academy-border bg-white p-6">
          <div className="text-5xl font-extrabold text-academy-red">&ldquo;</div>
          <p className="text-lg font-bold leading-7">{t('quote')}</p>
          <div className="mt-6 flex items-center gap-4">
            <Image src="/images/portrait-1.svg" alt="" width={56} height={56} className="rounded-full" />
            <div>
              <div className="font-extrabold">{t('quoteName')}</div>
              <div className="text-sm text-academy-text">{t('quoteRole')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroButton({href, children, primary}: {href: string; children: React.ReactNode; primary?: boolean}) {
  return (
    <a
      href={href}
      className={
        primary
          ? 'inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-academy-red px-8 text-sm font-bold text-white'
          : 'inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-academy-red bg-white px-8 text-sm font-bold text-academy-red'
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
