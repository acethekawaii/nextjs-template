# nextjs-template

Opinionated Next.js starter for landing pages.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Lenis (smooth scroll) · Motion (animation) · lucide-react (icons) · clsx + tailwind-merge

## Use this template

```bash
# GitHub: click "Use this template", or:
bunx degit <your-username>/nextjs-template my-site
cd my-site
bun install
bun dev
```

## After cloning — 3 edits

1. `lib/site.ts` — name, url, description, socials (drives metadata, `robots.txt`, `sitemap.xml`)
2. `app/globals.css` — `@theme` design tokens (colors); font in `app/layout.tsx`
3. `app/page.tsx` — start building

## What's wired up

- `components/providers.tsx` — Lenis smooth scrolling (`autoRaf`, anchor-link support) wrapping the whole app
- `lib/utils.ts` — `cn()` class merging
- `app/layout.tsx` — Inter via `next/font`, full metadata defaults with `metadataBase` and title template
- `app/robots.ts` + `app/sitemap.ts` — generated from `lib/site.ts`
- `app/globals.css` — Tailwind v4 `@theme` tokens + Lenis recommended CSS

## Scripts

```bash
bun dev    # dev server
bun run build
bun start
bun run lint
```
