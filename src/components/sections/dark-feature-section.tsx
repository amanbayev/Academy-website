import {Button} from '@/components/ui/button';

export function DarkFeatureSection({title, text, features, cta, href}: {title: string; text: string; features: string[]; cta?: string; href?: string}) {
  return (
    <section className="container-page py-10">
      <div className="dark-pattern rounded-lg p-8 text-white md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300">{text}</p>
            {cta && href ? <Button href={href} variant="primary" className="mt-7">{cta}</Button> : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="border-l border-white/15 pl-5">
                <div className="mb-3 h-8 w-8 rounded-full border border-academy-red/60" />
                <p className="font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
