'use client';

import {useMemo, useState} from 'react';
import type {Locale} from '@/i18n/routing';
import type {Program} from '@/content/types';
import {learningAreas} from '@/content/getters';
import {filterPrograms, type CatalogFilters} from '@/lib/catalog';
import {ProgramCard} from '@/components/cards/program-card';

type Labels = {
  search: string;
  area: string;
  format: string;
  level: string;
  language: string;
  location: string;
  sort: string;
  nearest: string;
  priceAsc: string;
  title: string;
  all: string;
  learnMore: string;
};

const initialFilters: CatalogFilters = {
  search: '',
  area: '',
  format: '',
  level: '',
  language: '',
  location: '',
  sort: 'nearest'
};

export function ProgramCatalog({programs, locale, labels}: {programs: Program[]; locale: Locale; labels: Labels}) {
  const [filters, setFilters] = useState(initialFilters);
  const results = useMemo(() => filterPrograms(programs, filters, locale), [filters, locale, programs]);

  function setFilter(key: keyof CatalogFilters, value: string) {
    setFilters((current) => ({...current, [key]: value}));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[270px_1fr]">
      <aside className="rounded-lg border border-academy-border bg-[#fff8fa] p-6">
        <h2 className="text-lg font-bold">Guidance</h2>
        <ol className="mt-5 space-y-4 text-sm text-academy-text">
          <li>1. {labels.area}</li>
          <li>2. {labels.level}</li>
          <li>3. {labels.format}</li>
          <li>4. {labels.language}</li>
        </ol>
      </aside>
      <div>
        <div className="rounded-lg border border-academy-border bg-white p-5">
          <input
            value={filters.search}
            onChange={(event) => setFilter('search', event.target.value)}
            placeholder={labels.search}
            className="mb-4 w-full rounded-md border-academy-border px-4 py-3 text-sm focus:border-academy-red focus:ring-academy-red"
          />
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            <FilterSelect label={labels.area} value={filters.area} onChange={(value) => setFilter('area', value)} options={learningAreas.map((area) => [area.id, area.title[locale]])} all={labels.all} />
            <FilterSelect label={labels.format} value={filters.format} onChange={(value) => setFilter('format', value)} options={[['offline', 'Offline'], ['online', 'Online'], ['hybrid', 'Hybrid']]} all={labels.all} />
            <FilterSelect label={labels.level} value={filters.level} onChange={(value) => setFilter('level', value)} options={[['beginner', 'Beginner'], ['intermediate', 'Intermediate'], ['advanced', 'Advanced']]} all={labels.all} />
            <FilterSelect label={labels.language} value={filters.language} onChange={(value) => setFilter('language', value)} options={[['Русский', 'Русский'], ['English', 'English'], ['Қазақша', 'Қазақша']]} all={labels.all} />
            <FilterSelect label={labels.location} value={filters.location} onChange={(value) => setFilter('location', value)} options={[['Астана', 'Astana'], ['Онлайн', 'Online']]} all={labels.all} />
            <FilterSelect label={labels.sort} value={filters.sort} onChange={(value) => setFilter('sort', value)} options={[['nearest', labels.nearest], ['priceAsc', labels.priceAsc], ['title', labels.title]]} all={labels.nearest} />
          </div>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((program) => (
            <ProgramCard key={program.id} program={program} locale={locale} hrefLabel={labels.learnMore} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterSelect({label, value, onChange, options, all}: {label: string; value: string; onChange: (value: string) => void; options: Array<readonly [string, string]>; all: string}) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-md border-academy-border px-3 py-3 text-sm focus:border-academy-red focus:ring-academy-red">
        <option value="">{all}</option>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
