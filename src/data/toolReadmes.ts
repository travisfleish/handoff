/**
 * Simplified README content for each deployed tool.
 * Shown on /tools/:id — crucial ops + product details for handoff.
 */

export interface ToolReadmeSection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  /** Simple two-column rows (e.g. variant → domain) */
  rows?: { label: string; value: string }[]
  code?: string
}

export interface ToolReadme {
  overview: string
  sections: ToolReadmeSection[]
  /** Other catalog project ids to link at the bottom */
  relatedProjectIds?: string[]
}

export const toolReadmes: Record<string, ToolReadme> = {
  'audience-tool-main': {
    overview:
      'Primary Genius Sports audience explorer. One Vite app + Supabase backend powers the main site and all partner-branded variants via hostname (and optional query) resolution — not separate builds per partner.',
    relatedProjectIds: ['audience-tool-eve', 'audience-tool-apex'],
    sections: [
      {
        title: 'What it does',
        paragraphs: [
          'Browse, search, and activate Genius Sports audience segments for sales and partner conversations. Hybrid semantic + keyword search, profile/seasonal filters, notebook workflow, and variant-aware branding/copy.',
        ],
        bullets: [
          'Live at geniussportsaudiences.com (and partner subdomains)',
          'Repo: travisfleish/audience-tool → Vercel project audience-tool-main',
          'Supabase: Postgres, Edge Functions (embeddings, gate, activation requests)',
        ],
      },
      {
        title: 'Variants',
        paragraphs: [
          'Variants are configs in the same codebase (src/apps/* + getConfig). Resolution order matches the Deal Library pattern:',
        ],
        bullets: [
          '1. ?variant=… on the URL (preview / QA)',
          '2. Hostname label on *.geniussportsaudiences.com',
          '3. VITE_APP_VARIANT (local / legacy)',
          '4. Default: main',
        ],
        rows: [
          { label: 'main', value: 'geniussportsaudiences.com · www' },
          { label: 'pmg', value: 'pmg.geniussportsaudiences.com (gated)' },
          { label: 'guide', value: 'guide.… · Guide-focused copy/layout' },
          { label: 'wpp', value: 'wpp.geniussportsaudiences.com' },
          {
            label: 'index-exchange',
            value: 'index.geniussportsaudiences.com (host alias → index-exchange)',
          },
          { label: 'equativ', value: 'equativ.geniussportsaudiences.com' },
          { label: 'nfl', value: 'nfl.geniussportsaudiences.com (sport locked)' },
        ],
      },
      {
        title: 'How partner variants are deployed',
        paragraphs: [
          'Partner variants are not separate Vercel projects. Add the partner subdomain as a domain on audience-tool-main (DNS → Vercel). The same build serves every host; the frontend reads the subdomain and loads that variant’s config (logos, copy, gating, sport locks).',
          'Think of DNS / Vercel domain mapping as the “redirect” onto one backend deploy — one artifact, many branded entry points.',
        ],
        bullets: [
          'Production apex: geniussportsaudiences.com → main',
          '{partner}.geniussportsaudiences.com → matching AppVariant (see appVariant.ts)',
          'index. → index-exchange via HOST_LABEL_ALIASES',
          'Preview without DNS: https://…vercel.app/?variant=pmg (or #…?variant=pmg with HashRouter)',
        ],
      },
      {
        title: 'How to use locally',
        paragraphs: ['Clone travisfleish/audience-tool, pull env, then:'],
        code: 'npm install\nvercel env pull   # or copy .env\nnpm run dev',
        bullets: [
          'Force a variant: VITE_APP_VARIANT=pmg or open http://localhost:5173/?variant=nfl',
          'Gate (PMG): supabase/functions/verify-gate + docs/GATE_SETUP.md',
          'Activation emails need Resend + Deal Desk env on the Edge Function',
        ],
      },
      {
        title: 'Stack & ops',
        bullets: [
          'Vite + React + TypeScript + Tailwind',
          'React Router (hash) inside app variants',
          'Supabase: hybrid_semantic_search RPC, search_logs, Edge Functions',
          'Separate deploys: Eve (Next + chat, eve branch) and Apex (branded fork) — see related tools',
        ],
      },
    ],
  },

  'audience-tool-eve': {
    overview:
      'Next.js deploy of the audience tool with Eve chat overlay. Same GitHub repo as main, eve branch — conversational entry into audience discovery.',
    relatedProjectIds: ['audience-tool-main', 'audience-tool-apex'],
    sections: [
      {
        title: 'What it does',
        paragraphs: [
          'Chat-first exploration of audiences for prototypes and partner demos that need Eve alongside the explorer.',
        ],
        bullets: [
          'Domain: audience-tool-eve.vercel.app',
          'Repo: travisfleish/audience-tool @ eve',
          'Framework: Next · Supabase shared with main patterns',
        ],
      },
      {
        title: 'How it relates to main',
        paragraphs: [
          'Main production partner variants live on audience-tool-main via hostname resolution. Eve is a separate Vercel project wired to the eve branch — use it when you need the chat overlay, not for partner subdomain routing.',
        ],
      },
      {
        title: 'Local / deploy',
        bullets: [
          'Checkout the eve branch, vercel env pull, npm run dev',
          'Push to eve → this Vercel project auto-deploys',
          'Do not point partner *.geniussportsaudiences.com domains here unless intentionally migrating',
        ],
      },
    ],
  },

  'audience-tool-apex': {
    overview:
      'Apex-branded audience explorer variant. Separate Vite Vercel project so Apex demos do not change the main production audience site.',
    relatedProjectIds: ['audience-tool-main', 'audience-tool-eve'],
    sections: [
      {
        title: 'What it does',
        paragraphs: [
          'Apex-facing demos and collateral on top of the core audience-tool patterns.',
        ],
        bullets: [
          'Domain: audience-tool-apex.vercel.app',
          'Repo: travisfleish/audience-tool (Apex-branded deploy)',
          'Prefer this URL for Apex walks; use main + ?variant= / partner hosts for other partners',
        ],
      },
      {
        title: 'Vs hostname variants on main',
        paragraphs: [
          'Most partners (PMG, WPP, NFL, etc.) are hostname variants on audience-tool-main. Apex is a dedicated project/brand skin — treat it like a special-case deploy, not a subdomain of geniussportsaudiences.com unless domains are later consolidated.',
        ],
      },
    ],
  },

  'genius-deal-library': {
    overview:
      'Searchable deal / package library for Genius Sports. Partner-facing sites under geniussportslibrary.com; optional Resend for email, thin Supabase when persistence is needed.',
    sections: [
      {
        title: 'What it does',
        bullets: [
          'Lookup deals and share links in sales / partnerships conversations',
          'DNS under geniussportslibrary.com (e.g. omg.geniussportslibrary.com)',
          'Same hostname-variant idea as Audience Tool: one app, partner entry via subdomain',
        ],
      },
      {
        title: 'Stack',
        bullets: [
          'Next on Vercel · project genius-deal-library',
          'Resend for transactional/alert email when enabled',
          'Supabase optional / thin — not the heavy data path',
        ],
      },
      {
        title: 'Day-to-day',
        code: 'git clone …/genius-deal-library\nvercel env pull\nnpm install && npm run dev',
        bullets: [
          'Env and domains live in Vercel team travis-fleishers-projects',
          'Confirm DNS ownership for *.geniussportslibrary.com before adding partners',
        ],
      },
    ],
  },

  nf_collateral_packages: {
    overview:
      'NewFront-facing collateral packages site. Built on gs-marketing-ui; presentation-only (no Supabase).',
    sections: [
      {
        title: 'What it does',
        bullets: [
          'Partner NewFront presentations and leave-behinds',
          'Live: newfront.geniussportsaudiences.com',
          'Consumes private design system travisfleish/gs-marketing-ui',
        ],
      },
      {
        title: 'Edit & deploy',
        bullets: [
          'Repo: travisfleish/nf_collateral_packages',
          'Vite · push to GitHub → Vercel nf_collateral_packages',
          'Need GitHub access to gs-marketing-ui for local installs',
        ],
        code: 'npm install && npm run dev',
      },
      {
        title: 'Related',
        bullets: [
          'NF_touchscreen_v2 — kiosk / venue hardware (GitHub-only)',
          'newfront_packages — adjacent package content work',
        ],
      },
    ],
  },

  moments_collateral_v2: {
    overview:
      'Moments product collateral v2 — narrative marketing site for Moment Engine packages and storytelling (“See the game. Know the fan. Win the moment.”).',
    relatedProjectIds: ['moments_collateral_emea'],
    sections: [
      {
        title: 'What it does',
        bullets: [
          'Sales enablement and partner walks through Moments offerings',
          'Domain: moments.geniussportsaudiences.com',
          'Content-driven scroll experience (typed content modules)',
        ],
      },
      {
        title: 'Edit content',
        paragraphs: [
          'Prefer editing typed content objects (e.g. momentEngine / March Madness modules) over forking layout. Repo: travisfleish/moments_collateral_v2.',
        ],
        code: 'npm install && npm run dev',
      },
      {
        title: 'Stack',
        bullets: [
          'Vite + React + TypeScript + Tailwind + Framer Motion',
          'No Supabase for the core collateral experience',
          'EMEA market framing is a separate Vercel project (same repo lineage)',
        ],
      },
    ],
  },

  moments_collateral_emea: {
    overview:
      'EMEA-oriented Moments collateral — regional framing on the Moments collateral pattern.',
    relatedProjectIds: ['moments_collateral_v2'],
    sections: [
      {
        title: 'What it does',
        bullets: [
          'EMEA sales and partner meetings with Moments messaging for that market',
          'Domain: momentscollateralemea.vercel.app',
          'Source: travisfleish/moments_collateral_v2 lineage',
        ],
      },
      {
        title: 'Ops',
        bullets: [
          'Separate Vercel project from moments_collateral_v2',
          'Collateral only — no backend required',
          'Align copy changes carefully with the primary Moments site when sharing content',
        ],
      },
    ],
  },

  'world-cup-v2': {
    overview:
      'World Cup campaign / sponsorship collateral experience (v2).',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: world-cup-v2.vercel.app',
          'Repo: travisfleish/world-cup-v2 · Vite on Vercel',
          'Event-timed partner pitches and marketing surfaces',
          'Usually presentation-first; confirm before adding a data backend',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'march-madness': {
    overview:
      'March Madness sponsorship and audience collateral for seasonal NCAA / partner conversations.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: march-madness-hazel.vercel.app',
          'Repo: travisfleish/march-madness · Vite',
          'Seasonal — expect time-boxed updates each tournament cycle',
          'No Supabase for core collateral',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'nba-augmentation': {
    overview:
      'NBA augmentation marketing / product surface for inventory storytelling and partner demos.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: nba-augmentation.vercel.app',
          'Repo: travisfleish/nba-augmentation · Vite',
          'Treat as presentation-first unless live data was wired later',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'gs-marketing-kit': {
    overview:
      'Marketing kit / asset surface for Genius Sports marketing tooling and kit deliverables.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: gs-marketing-kit.vercel.app',
          'Repo: travisfleish/gs-marketing-kit · Vite',
          'Internal and agency reference for kit assets and patterns',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'signals-explorer': {
    overview:
      'Explorer for signals / intent-style visualizations used in marketing and sales narratives.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: signals-explorer-pi.vercel.app',
          'Repo: travisfleish/signals-explorer · Vite',
          'Often demo-static — confirm if a data layer was added',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'cannes-scheduler': {
    overview:
      'Meeting / schedule helper for Cannes (and similar event) programming.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: cannes-scheduler.vercel.app',
          'Repo: travisfleish/cannes-scheduler · Vite',
          'Event ops and attendee scheduling around activations',
          'May use lightweight storage — verify before handover',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'lovable-brand-kit': {
    overview:
      'Brand kit / design exploration surface (Lovable-originated or adjacent kit work).',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: lovable-brand-kit.vercel.app',
          'Repo: travisfleish/lovable-brand-kit · Vite',
          'Quick brand and UI kit references for marketing builds',
          'Static brand kit — no Supabase',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },

  'vercel-analytics-dashboard': {
    overview:
      'Internal-facing view of Vercel analytics / traffic across the toolkit sites.',
    sections: [
      {
        title: 'Crucial details',
        bullets: [
          'Domain: vercel-analytics-dashboard.vercel.app',
          'Repo: travisfleish/vercel-analytics-dashboard · Next',
          'Quick health check on which marketing and tool sites get traffic',
          'Uses Vercel Analytics / API patterns — needs appropriate Vercel token/access',
        ],
        code: 'npm install && npm run dev',
      },
    ],
  },
}

export function getToolReadme(projectId: string): ToolReadme | null {
  return toolReadmes[projectId] ?? null
}
