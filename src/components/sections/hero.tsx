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
    <section className="academy-pattern overflow-hidden border-b border-academy-border">
      <div className="container-page grid min-h-[520px] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-normal text-academy-black md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-academy-text">{subtitle}</p>
          {(primary || secondary) && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primary && primaryHref ? <Button href={primaryHref}>{primary}</Button> : null}
              {secondary && secondaryHref ? <Button href={secondaryHref} variant="secondary">{secondary}</Button> : null}
            </div>
          )}
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-l-[48px]">
          <Image src={image} alt="" fill priority className="object-cover" />
        </div>
      </div>
    </section>
  );
}
