# AIFC Academy Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multilingual, CMS-ready Next.js MVP for the AIFC Academy website with ten page types, catalog filtering, data-driven program detail pages, form stubs and SEO metadata.

**Architecture:** Create a new Next.js App Router project in the current workspace. Use locale-prefixed routes, `next-intl` messages for UI strings, typed local content modules for CMS-ready data, reusable section/card/form components, and API route stubs for form submissions.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, next-intl, lucide-react, zod.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `src/app/globals.css`
- Create: `src/i18n/routing.ts`
- Create: `src/i18n/request.ts`
- Create: `middleware.ts`

- [ ] Add package scripts for `dev`, `build`, `start`, `lint` and required dependencies.
- [ ] Configure Next.js with `next-intl` plugin.
- [ ] Configure Tailwind content paths and Academy design tokens.
- [ ] Configure middleware for `ru`, `en`, `kk` with Russian as default locale.

### Task 2: Translations And Content Models

**Files:**
- Create: `messages/ru.json`
- Create: `messages/en.json`
- Create: `messages/kk.json`
- Create: `src/content/types.ts`
- Create: `src/content/data.ts`
- Create: `src/content/getters.ts`

- [ ] Add all navigation, CTA, form, filter, footer and shared UI strings to messages.
- [ ] Define localized content types for programs, trainers, events, news, partners, team members and impact metrics.
- [ ] Seed professional placeholder content for each page with internal placeholder flags where needed.
- [ ] Add getters for programs by slug, featured programs, events, news and metrics.

### Task 3: Shared UI And Layout

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/forms.tsx`
- Create: `src/components/ui/accordion.tsx`
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/language-switcher.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/app/[locale]/layout.tsx`
- Create: `src/app/[locale]/not-found.tsx`
- Create: `src/app/page.tsx`

- [ ] Build shared primitives with consistent focus states, radii, borders and button variants.
- [ ] Build sticky header with desktop navigation, mobile menu, language switcher and CTA.
- [ ] Build dark premium footer with columns, contact details, socials and legal links.
- [ ] Redirect `/` to `/ru`.

### Task 4: Section And Card Components

**Files:**
- Create: `src/components/sections/hero.tsx`
- Create: `src/components/sections/dark-feature-section.tsx`
- Create: `src/components/sections/metric-strip.tsx`
- Create: `src/components/sections/partner-strip.tsx`
- Create: `src/components/sections/timeline.tsx`
- Create: `src/components/sections/faq-section.tsx`
- Create: `src/components/cards/icon-card.tsx`
- Create: `src/components/cards/program-card.tsx`
- Create: `src/components/cards/event-card.tsx`
- Create: `src/components/cards/news-card.tsx`
- Create: `src/components/cards/person-card.tsx`

- [ ] Implement section components that match the supplied designs: white spacious sections, dark strategic bands, clean card grids and precise red accents.
- [ ] Use `next/image` with remote-safe placeholder images from local SVG/photo-like gradients only until real Academy photography is provided.
- [ ] Keep all visible text passed in from translations or content data.

### Task 5: Pages

**Files:**
- Create: `src/app/[locale]/page.tsx`
- Create: `src/app/[locale]/programs/page.tsx`
- Create: `src/app/[locale]/programs/[slug]/page.tsx`
- Create: `src/app/[locale]/corporate-training/page.tsx`
- Create: `src/app/[locale]/higher-education/page.tsx`
- Create: `src/app/[locale]/events/page.tsx`
- Create: `src/app/[locale]/about/page.tsx`
- Create: `src/app/[locale]/impact/page.tsx`
- Create: `src/app/[locale]/news/page.tsx`
- Create: `src/app/[locale]/contacts/page.tsx`

- [ ] Build each page according to the PRD sections and the supplied page references.
- [ ] Add localized metadata and alternates for every page.
- [ ] Generate program detail pages from program data.

### Task 6: Catalog Filtering

**Files:**
- Create: `src/components/catalog/program-catalog.tsx`
- Create: `src/components/catalog/program-filters.tsx`
- Create: `src/lib/catalog.ts`

- [ ] Implement client-side search by title, category and keywords.
- [ ] Implement filters for learning area, format, level, language, duration and location.
- [ ] Implement sorting by nearest date, price and title.
- [ ] Track filter usage through a small analytics helper stub.

### Task 7: Forms And API Stubs

**Files:**
- Create: `src/components/forms/contact-form.tsx`
- Create: `src/components/forms/newsletter-form.tsx`
- Create: `src/components/forms/corporate-form.tsx`
- Create: `src/lib/forms.ts`
- Create: `src/app/api/forms/route.ts`

- [ ] Validate required fields with zod-compatible schemas or explicit typed validation.
- [ ] Submit forms to the API route with locale, source page and payload.
- [ ] Return success and error UI states.
- [ ] Keep the API structured for future email, CRM and database storage.

### Task 8: SEO, Sitemap And Verification

**Files:**
- Create: `src/lib/seo.ts`
- Create: `src/lib/structured-data.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] Add localized metadata helpers.
- [ ] Add JSON-LD for organization and selected program/event/news pages.
- [ ] Generate sitemap entries for all localized core pages and program detail pages.
- [ ] Run `npm run build` and fix TypeScript, lint or build errors.
- [ ] Start the dev server and verify desktop/mobile render of the main routes.

### Self-Review

This plan covers the PRD MVP: setup, i18n, data models, reusable components, ten pages, catalog filters, dynamic program details, forms, SEO and verification. The external integrations intentionally remain stubs because the user selected CMS-ready MVP rather than production services.
