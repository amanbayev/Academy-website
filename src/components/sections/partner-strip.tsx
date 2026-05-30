import type {Partner} from '@/content/types';

export function PartnerStrip({partners, title}: {partners: Partner[]; title: string}) {
  return (
    <section className="container-page py-8">
      <h2 className="mb-5 text-xl font-bold">{title}</h2>
      <div className="flex gap-4 overflow-x-auto rounded-lg border border-academy-border bg-white p-4">
        {partners.filter((partner) => partner.verified).map((partner) => (
          <div key={partner.id} className="grid min-w-40 place-items-center rounded-md border border-academy-border px-6 py-4 text-lg font-bold text-slate-700">
            {partner.logoText}
          </div>
        ))}
      </div>
    </section>
  );
}
