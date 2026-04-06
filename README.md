# Chirag Paswan Official Website (Frontend)

Premium, cinematic personal brand website built as an official national-level digital presence.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style reusable UI components
- next-themes (dark/light mode)

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  providers/
    theme-provider.tsx
  sections/
    about-journey.tsx
    constituency.tsx
    contact.tsx
    counter.tsx
    footer.tsx
    gallery.tsx
    hero.tsx
    initiatives.tsx
    mode-toggle.tsx
    navbar.tsx
    section-reveal.tsx
    social.tsx
    speeches-media.tsx
    stats-strip.tsx
    timeline.tsx
    vision.tsx
  ui/
    badge.tsx
    button.tsx
    card.tsx
lib/
  site-data.ts
  utils.ts
public/
  images/
```

## Sections Implemented

1. Hero (cinematic, parallax, dual CTA)
2. Media Command Center (tabs + featured embed + external reels)
3. About / Journey
4. Interactive Political Timeline
5. Initiatives & Impact
6. Hajipur Constituency Connect
7. Vision Wall
8. Gallery Grid
9. Social Presence
10. Contact Office

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Content Configuration

All major content is data-driven from:

- `lib/site-data.ts`

Update this file to replace media links, photos, copy, social stats, and profile/contact data without changing component code.
# Chirag-paswan-
