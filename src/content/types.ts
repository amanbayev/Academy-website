import type {Locale} from '@/i18n/routing';

export type Localized<T = string> = Record<Locale, T>;

export type LearningArea =
  | 'finance'
  | 'law'
  | 'compliance'
  | 'digital'
  | 'leadership'
  | 'esg';

export type ProgramFormat = 'offline' | 'online' | 'hybrid';
export type ProgramLevel = 'beginner' | 'intermediate' | 'advanced';

export type Program = {
  id: string;
  slug: string;
  title: Localized;
  shortDescription: Localized;
  fullDescription: Localized;
  category: LearningArea;
  startDate: string;
  endDate: string;
  duration: Localized;
  format: ProgramFormat;
  city: Localized;
  online: boolean;
  language: 'Русский' | 'English' | 'Қазақша';
  level: ProgramLevel;
  price: number;
  currency: 'KZT';
  certificate: Localized;
  image: string;
  trainerIds: string[];
  modules: Array<{title: Localized; description: Localized; duration: Localized}>;
  outcomes: Localized<string[]>;
  audience: Localized<string[]>;
  faq: Array<{question: Localized; answer: Localized}>;
  relatedProgramIds: string[];
  status: 'upcoming' | 'active' | 'archived';
  isPlaceholder?: boolean;
};

export type Trainer = {
  id: string;
  name: Localized;
  title: Localized;
  bio: Localized;
  photo: string;
  credentials: Localized<string[]>;
  linkedIn?: string;
  isPlaceholder?: boolean;
};

export type EventItem = {
  id: string;
  slug: string;
  title: Localized;
  description: Localized;
  type: Localized;
  date: string;
  city: Localized;
  location: Localized;
  format: ProgramFormat;
  image: string;
  tags: Localized<string[]>;
  featured?: boolean;
};

export type NewsItem = {
  id: string;
  slug: string;
  title: Localized;
  summary: Localized;
  category: Localized;
  author: Localized;
  date: string;
  image: string;
  tags: Localized<string[]>;
  featured?: boolean;
};

export type Partner = {
  id: string;
  name: string;
  logoText: string;
  category: 'ecosystem' | 'university' | 'professional' | 'corporate';
  website?: string;
  verified: boolean;
};

export type TeamMember = {
  id: string;
  name: Localized;
  title: Localized;
  bio: Localized;
  photo: string;
  linkedIn?: string;
  order: number;
  isPlaceholder?: boolean;
};

export type ImpactMetric = {
  id: string;
  value: string;
  label: Localized;
  description: Localized;
  verified: boolean;
  sourceNoteInternal: string;
};
