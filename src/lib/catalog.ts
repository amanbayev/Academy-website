import type {Program} from '@/content/types';

export type CatalogFilters = {
  search: string;
  area: string;
  format: string;
  level: string;
  language: string;
  location: string;
  sort: string;
};

export function filterPrograms(programs: Program[], filters: CatalogFilters, locale: 'ru' | 'en' | 'kk') {
  const query = filters.search.trim().toLowerCase();

  const filtered = programs.filter((program) => {
    const haystack = [program.title[locale], program.shortDescription[locale], program.category, program.language]
      .join(' ')
      .toLowerCase();

    return (
      (!query || haystack.includes(query)) &&
      (!filters.area || program.category === filters.area) &&
      (!filters.format || program.format === filters.format) &&
      (!filters.level || program.level === filters.level) &&
      (!filters.language || program.language === filters.language) &&
      (!filters.location || program.city[locale].toLowerCase().includes(filters.location.toLowerCase()))
    );
  });

  return filtered.sort((a, b) => {
    if (filters.sort === 'priceAsc') return a.price - b.price;
    if (filters.sort === 'title') return a.title[locale].localeCompare(b.title[locale]);
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });
}
