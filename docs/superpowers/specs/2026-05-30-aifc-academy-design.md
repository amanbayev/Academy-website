# AIFC Academy Website Design Spec

## Goal

Build a production-quality multilingual website for AIFC Academy in Russian, English and Kazakh. The site positions the Academy as a premium institutional education platform inside the AIFC ecosystem, not as a generic course marketplace.

## Approved Visual Direction

The supplied ten design references are the accepted visual concept. The implementation should follow their system: white editorial pages, black typography, precise Academy red accents, clean cards, restrained icons, large AIFC/Astana imagery, dark premium strategic sections, subtle Academy pattern motifs, and dense but readable institutional content.

No extra generated concept pass is required for this MVP because the user supplied the visual direction and page-level layouts.

## Scope

The MVP includes ten localized page surfaces:

- Home
- Program Catalog
- Program Detail
- Corporate Training
- Higher Education
- Events
- About
- Impact
- News & Research
- Contacts

All pages exist under `/ru`, `/en` and `/kk`. `/` redirects to `/ru`. The language switcher displays `RU | EN | KZ` while using `kk` internally for Kazakh.

## Architecture

Use Next.js App Router with TypeScript, Tailwind CSS, `next-intl`, local typed content files, and a CMS-ready content access layer. The first version stores content in TypeScript modules with localized fields, placeholder flags and verification flags. Pages should read through helpers so local data can later be replaced by a CMS API.

## Content Rules

Do not invent verified partner logos, trainer names, legal claims, accreditations or metrics. Where final values are unavailable, use professional placeholder content in data files with `isPlaceholder: true` or `verified: false`; do not expose placeholder labels in the UI.

## Design System

Core tokens:

- Academy Red: `#D40535`
- Academy Black: `#161719`
- Deep Graphite: `#111827`
- Soft Grey: `#F6F7F9`
- Border Grey: `#E5E7EB`
- Text Grey: `#5F6368`
- White: `#FFFFFF`

Typography uses Inter via `next/font/google` with system fallback. Components use tight radii, light borders, quiet shadows, and red only for emphasis, CTAs and icon accents.

## Data Models

Implement typed models for programs, trainers, events, news, partners, team members and impact metrics. Localized text fields must support `ru`, `en` and `kk`.

## Forms

Forms are MVP stubs with client and server validation. They post to API routes, return success/error states, include source page and locale, and are structured for future email/CRM/database integration.

## SEO

Each route defines localized metadata, canonical path, Open Graph fields and alternate language links. Add structured data helpers for Organization, Course, Event, Article and BreadcrumbList where practical in the MVP.

## Accessibility And Responsive Behavior

Target WCAG AA. Use semantic landmarks, visible focus states, accessible labels, keyboard-friendly menus, readable contrast and responsive layouts across 360px through large desktop. Program catalog filters become stacked controls on mobile.

## Acceptance For MVP

The MVP is acceptable when all ten page types render in three languages, catalog search and filters work, program detail is data-driven, forms validate and submit to the stub API, header/footer are consistent, metadata exists, and the visual system matches the supplied AIFC Academy references.
