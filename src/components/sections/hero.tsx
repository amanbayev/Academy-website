import Image from 'next/image';
import {Button} from '@/components/ui/button';

export function Hero({
  title,
  subtitle,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
  image = '/images/aifc-panorama.svg'
}: {
  title: string;
  subtitle: string;
  primary?: string;
  primaryHref?: string;
  secondary?: string;
  secondaryHref?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-academy-border bg-white">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 academy-pattern opacity-80" />
      <div className="container-page grid min-h-[500px] items-center gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 rounded-r-[56px] bg-white/92 py-10 pr-6">
          <h1 className="max-w-3xl text-[42px] font-extrabold leading-[1.06] tracking-normal text-academy-black md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-academy-text md:text-lg md:leading-8">{subtitle}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primary && primaryHref ? <Button href={primaryHref}>{primary}</Button> : null}
              {secondary && secondaryHref ? <Button href={secondaryHref} variant="secondary">{secondary}</Button> : null}
            </div>
          )}
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-l-[42px] lg:min-h-[390px]">
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
