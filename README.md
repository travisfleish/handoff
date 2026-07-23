# Handoff

Live change-management site for Travis Fleisher’s Genius Sports toolkit. Public (no password gate). Documents the Cursor → GitHub → Vercel workflow (plus Supabase / Resend when used) and catalogs deployed projects + repos for successor onboarding.

## Develop

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build   # production build
npm run preview # preview the build
```

## Day-to-day

1. Edit in Cursor  
2. `vercel env pull` when needed  
3. `npm run dev`  
4. Push to GitHub  
5. Vercel auto-deploys (team **travis-fleishers-projects**)

## Stack

Vite · React · TypeScript · Tailwind CSS · Vercel

Visual system from [lovable-brand-template](https://github.com/travisfleish/lovable-brand-template): Klarheit / Red Hat fonts, Genius Sports logos & icons, brand tokens, and shared UI primitives under `src/components/{brand,elements,layouts,sections}` and `src/tokens`.

Catalog content lives in `src/data/catalog.ts` (tiles). Simplified per-tool READMEs live in `src/data/toolReadmes.ts` and render at `/tools/:id`. Homepage screenshots live in `public/screenshots/` — refresh with `npm run screenshots` (Playwright).
