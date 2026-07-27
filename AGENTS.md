<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nextjs-template

Reusable Next.js starter for landing pages. Package manager: **bun** (only `bun.lock` is committed — never add npm/yarn/pnpm lockfiles).

## Stack

Next.js 16 (App Router, Turbopack default) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Lenis · Motion · lucide-react · clsx + tailwind-merge

## Structure

```
app/            # routes — layout.tsx, page.tsx, robots.ts, sitemap.ts, globals.css
components/     # providers.tsx (Lenis wrapper, "use client")
lib/            # site.ts (site identity, edit per project), utils.ts (cn())
public/         # static assets (intentionally empty)
```

## Conventions

- Site identity (name, url, description) lives ONLY in `lib/site.ts` — metadata, robots, and sitemap read from it. Never hardcode.
- Merge classes with `cn()` from `lib/utils.ts`.
- Path alias: `@/*` → repo root.
- Animation: `motion/react` for component animation, Lenis (already provided at root) for scroll. Use `useLenis()` from `lenis/react` to access the instance.
- Icons: `lucide-react` only.
- Design tokens: Tailwind v4 `@theme` in `app/globals.css` — no tailwind.config file.
