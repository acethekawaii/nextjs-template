# nextjs-template

An opinionated Next.js starter for landing pages, portfolios, and personal sites.

Ships agent-ready for Claude Code, Cursor, Codex, and omp: shared rules in `AGENTS.md` plus the `no-ai-slop` and `frontend-design` skills, so your AI tools follow current Next.js conventions and write clean copy from the start.

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-animation-0055FF)
![Lenis](https://img.shields.io/badge/Lenis-smooth_scroll-1F1F1F)
![lucide-react](https://img.shields.io/badge/lucide--react-icons-F56565?logo=lucide&logoColor=white)

## Use this template

1. Click **Use this template**, then **Create a new repository** at the top of this repository.
2. Clone your repository and start the dev server:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
pnpm install
pnpm dev
```

> [!TIP]
> **Outdated template?**
> If this repository has not been updated in a while, feed this prompt into your AI coding assistant:
> ```text
> Update all project dependencies to their latest stable versions, including Next.js.
> ```

## After cloning

1. **`AGENTS.md`**: fill in the `Product overview` section (what the site is, who it is for, the action it drives). Your AI tools read this first.
2. **`lib/site.ts`**: name, url, description, socials. Drives metadata, `robots.txt`, and `sitemap.xml`.
3. **`app/globals.css`**: `@theme` design tokens (colors). Set the font in `app/layout.tsx`.
4. **`app/page.tsx`**: start building.

## What's wired up

- `components/providers.tsx`: Lenis smooth scroll (`autoRaf`, anchor links) around the whole app
- `lib/utils.ts`: `cn()` class merging
- `app/layout.tsx`: Inter via `next/font`, metadata defaults with `metadataBase` and a title template
- `app/robots.ts` and `app/sitemap.ts`: generated from `lib/site.ts`
- `app/globals.css`: Tailwind v4 `@theme` tokens plus Lenis recommended CSS
- `AGENTS.md`, `docs/nextjs.md`, `.claude/`, `.agents/`, `.omp/`: agent rules and skills (`no-ai-slop`, `frontend-design`)

## Scripts

```bash
pnpm dev     # dev server
pnpm build   # production build
pnpm start   # serve the build
pnpm lint    # eslint
```
