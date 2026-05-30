import type {ImpactMetric} from '@/content/types';
import type {Locale} from '@/i18n/routing';

export function MetricStrip({metrics, locale}: {metrics: ImpactMetric[]; locale: Locale}) {
  return (
    <section className="container-page -mt-6 relative z-10">
      <div className="grid rounded-lg border border-academy-border bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.id} className="border-b border-academy-border p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
            <div className="text-3xl font-bold text-academy-red">{metric.value}</div>
            <div className="mt-2 text-sm font-medium text-academy-black">{metric.label[locale]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
