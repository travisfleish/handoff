export type Framework = 'Vite' | 'Next' | 'Other'

export type RepoRole = 'app' | 'design system' | 'starter' | 'kiosk'

export interface VercelProject {
  id: string
  name: string
  title: string
  domains: string[]
  description: string
  useCase: string
  githubRepo: string
  githubBranch?: string
  vercelProject: string
  supabase: {
    used: boolean
    note: string
  }
  services: string[]
  framework: Framework
  screenshot?: string
  accent: string
}

export interface GitHubRepo {
  id: string
  fullName: string
  role: RepoRole
  description: string
  url: string
  vercelLinked: boolean
}

export interface WorkflowStep {
  id: string
  label: string
  job: string
}

export interface AccessItem {
  id: string
  system: string
  detail: string
  required: boolean
}

export interface CursorGuideStep {
  id: string
  title: string
  detail: string
  tip?: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'cursor',
    label: 'Cursor',
    job: 'Edit locally — product logic, copy, and UI live in the repo.',
  },
  {
    id: 'github',
    label: 'GitHub',
    job: 'Source of truth. Push the branch; PRs optional for solo work.',
  },
  {
    id: 'vercel',
    label: 'Vercel',
    job: 'Auto-deploys from GitHub. Env vars, domains, and previews live here.',
  },
  {
    id: 'supabase',
    label: 'Supabase',
    job: 'When used: auth, Postgres, storage. Pull keys with vercel env pull.',
  },
  {
    id: 'resend',
    label: 'Resend',
    job: 'When used: transactional email (Deal Library alerts, forms).',
  },
]

export const dayToDayFlow = [
  'Edit in Cursor',
  'vercel env pull (when needed)',
  'npm run dev',
  'Push to GitHub',
  'Vercel auto-deploys',
]

export const cursorGuideSteps: CursorGuideStep[] = [
  {
    id: 'clone',
    title: 'Clone a repo',
    detail:
      'From the catalog, open the GitHub repo → Code → copy the HTTPS or SSH URL. In Cursor’s terminal (or macOS Terminal):',
    tip: 'git clone https://github.com/travisfleish/<repo>.git',
  },
  {
    id: 'open',
    title: 'Open the project',
    detail:
      'File → Open Folder… and select the cloned directory. Cursor opens it as a workspace so Agent, search, and Git all target that repo.',
  },
  {
    id: 'install',
    title: 'Install & run locally',
    detail:
      'In the integrated terminal (View → Terminal, or the backtick keyboard shortcut), install dependencies, then start the Vite/Next dev server. Use the URL Vite prints (usually http://localhost:5173).',
    tip: 'npm install && npm run dev',
  },
  {
    id: 'env',
    title: 'Pull env vars (when needed)',
    detail:
      'Apps with Supabase or secrets need local env. With Vercel CLI linked to the project:',
    tip: 'vercel env pull',
  },
  {
    id: 'git-ui',
    title: 'Git in Cursor',
    detail:
      'Sign into GitHub via the Accounts menu if prompted. Use the Source Control sidebar (branch icon) to review diffs, stage files (+), write a commit message, Commit, then Sync / Push. Same flow as VS Code.',
  },
  {
    id: 'agent',
    title: 'Edit with Agent',
    detail:
      'Open Chat / Agent (sidebar or shortcut) and describe the change. Prefer small, reviewable edits. Always skim the diff in Source Control before you commit and push — Vercel deploys from GitHub.',
  },
]

export const vercelProjects: VercelProject[] = [
  {
    id: 'audience-tool-main',
    name: 'audience-tool-main',
    title: 'Audience Tool',
    domains: ['geniussportsaudiences.com', 'partner subdomains'],
    description:
      'Primary audience explorer for Genius Sports. One deploy serves main + partner variants (pmg, guide, wpp, nfl, etc.) via hostname — see the tool README for how domains map onto the backend.',
    useCase:
      'Live demos with partners and internal teams exploring audience packages on geniussportsaudiences.com and partner-branded subdomains.',
    githubRepo: 'travisfleish/audience-tool',
    vercelProject: 'audience-tool-main',
    supabase: {
      used: true,
      note: 'Audience data, partner config, and related app state.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/audience-tool-main.png',
    accent: 'from-emerald-500/40 via-teal-600/20 to-navy-900/80',
  },
  {
    id: 'audience-tool-eve',
    name: 'audience-tool-eve',
    title: 'Audience Tool · Eve',
    domains: ['audience-tool-eve.vercel.app'],
    description:
      'Next.js deployment of the audience tool with Eve chat overlay. Same audience-tool codebase, eve branch — conversational entry into audience discovery.',
    useCase:
      'Chat-first exploration of audiences; prototype and partner demos that need Eve alongside the explorer.',
    githubRepo: 'travisfleish/audience-tool',
    githubBranch: 'eve',
    vercelProject: 'audience-tool-eve',
    supabase: {
      used: true,
      note: 'Shared audience backend with main; chat context as needed.',
    },
    services: ['Eve chat'],
    framework: 'Next',
    screenshot: '/screenshots/audience-tool-eve.png',
    accent: 'from-cyan-400/35 via-sky-700/25 to-navy-900/80',
  },
  {
    id: 'audience-tool-apex',
    name: 'audience-tool-apex',
    title: 'Audience Tool · Apex',
    domains: ['audience-tool-apex.vercel.app'],
    description:
      'Apex-branded variant of the audience explorer. Vite build with partner-specific framing on top of the core tool.',
    useCase:
      'Apex-facing demos and collateral without changing the main production audience site.',
    githubRepo: 'travisfleish/audience-tool',
    vercelProject: 'audience-tool-apex',
    supabase: {
      used: true,
      note: 'Same audience data patterns as main where configured.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/audience-tool-apex.png',
    accent: 'from-lime-400/30 via-emerald-800/30 to-navy-900/80',
  },
  {
    id: 'genius-deal-library',
    name: 'genius-deal-library',
    title: 'Deal Library',
    domains: ['omg.geniussportslibrary.com', '*.geniussportslibrary.com'],
    description:
      'Deal Library for Genius Sports — searchable deal / package reference with partner and market context. DNS under geniussportslibrary.com.',
    useCase:
      'Sales and partnerships looking up deals, sharing links, and (when enabled) emailing via Resend.',
    githubRepo: 'travisfleish/genius-deal-library',
    vercelProject: 'genius-deal-library',
    supabase: {
      used: true,
      note: 'Thin / optional — light persistence when needed; not the heavy path.',
    },
    services: ['Resend'],
    framework: 'Next',
    screenshot: '/screenshots/genius-deal-library.png',
    accent: 'from-green-400/40 via-emerald-700/25 to-navy-900/80',
  },
  {
    id: 'nf_collateral_packages',
    name: 'nf_collateral_packages',
    title: 'NewFront Collateral',
    domains: ['newfront.geniussportsaudiences.com'],
    description:
      'NewFront-facing collateral packages site. Built against gs-marketing-ui; no Supabase dependency.',
    useCase:
      'Partner NewFront presentations and leave-behinds hosted on the audiences domain tree.',
    githubRepo: 'travisfleish/nf_collateral_packages',
    vercelProject: 'nf_collateral_packages',
    supabase: {
      used: false,
      note: 'Static / UI-driven; no Supabase.',
    },
    services: ['gs-marketing-ui'],
    framework: 'Vite',
    screenshot: '/screenshots/nf_collateral_packages.png',
    accent: 'from-teal-300/35 via-cyan-800/30 to-navy-900/80',
  },
  {
    id: 'moments_collateral_v2',
    name: 'moments_collateral_v2',
    title: 'Moments Collateral',
    domains: ['moments.geniussportsaudiences.com'],
    description:
      'Moments product collateral v2 — marketing site for Moments packages and storytelling.',
    useCase:
      'Sales enablement and partner walks through Moments offerings.',
    githubRepo: 'travisfleish/moments_collateral_v2',
    vercelProject: 'moments_collateral_v2',
    supabase: {
      used: false,
      note: 'Collateral presentation; no backend required for core experience.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/moments_collateral_v2.png',
    accent: 'from-emerald-300/30 via-green-900/35 to-navy-900/80',
  },
  {
    id: 'moments_collateral_emea',
    name: 'moments_collateral_emea',
    title: 'Moments Collateral · EMEA',
    domains: ['momentscollateralemea.vercel.app'],
    description:
      'EMEA-oriented Moments collateral variant — regional framing on the Moments collateral pattern.',
    useCase:
      'EMEA sales and partner meetings with Moments messaging tailored for that market.',
    githubRepo: 'travisfleish/moments_collateral_v2',
    vercelProject: 'moments_collateral_emea',
    supabase: {
      used: false,
      note: 'Collateral only.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/moments_collateral_emea.png',
    accent: 'from-sky-400/25 via-teal-800/30 to-navy-900/80',
  },
  {
    id: 'world-cup-v2',
    name: 'world-cup-v2',
    title: 'World Cup',
    domains: ['world-cup-v2.vercel.app'],
    description:
      'World Cup campaign / sponsorship collateral experience (v2).',
    useCase:
      'World Cup–timed partner pitches and event marketing surfaces.',
    githubRepo: 'travisfleish/world-cup-v2',
    vercelProject: 'world-cup-v2',
    supabase: {
      used: false,
      note: 'Event collateral; confirm if any backend was added later.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/world-cup-v2.png',
    accent: 'from-green-500/35 via-navy-800/40 to-navy-900/90',
  },
  {
    id: 'march-madness',
    name: 'march-madness',
    title: 'March Madness',
    domains: ['march-madness.vercel.app'],
    description:
      'March Madness sponsorship and audience collateral experience.',
    useCase:
      'Seasonal NCAA / March Madness partner conversations and leave-behinds.',
    githubRepo: 'travisfleish/march-madness',
    vercelProject: 'march-madness',
    supabase: {
      used: false,
      note: 'Seasonal collateral.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/march-madness.png',
    accent: 'from-lime-500/30 via-emerald-900/35 to-navy-900/90',
  },
  {
    id: 'nba-augmentation',
    name: 'nba-augmentation',
    title: 'NBA Augmentation',
    domains: ['nba-augmentation.vercel.app'],
    description:
      'NBA augmentation marketing / product surface — inventory and storytelling for NBA-tied products.',
    useCase:
      'NBA partner demos and internal enablement around augmentation offerings.',
    githubRepo: 'travisfleish/nba-augmentation',
    vercelProject: 'nba-augmentation',
    supabase: {
      used: false,
      note: 'Confirm if live data was wired; treat as presentation-first.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/nba-augmentation.png',
    accent: 'from-teal-400/30 via-slate-800/40 to-navy-900/90',
  },
  {
    id: 'gs-marketing-kit',
    name: 'gs-marketing-kit',
    title: 'GS Marketing Kit',
    domains: ['gs-marketing-kit.vercel.app'],
    description:
      'Marketing kit / asset surface for Genius Sports marketing tooling and kit deliverables.',
    useCase:
      'Internal and agency use of marketing kit assets and patterns.',
    githubRepo: 'travisfleish/gs-marketing-kit',
    vercelProject: 'gs-marketing-kit',
    supabase: {
      used: false,
      note: 'Kit / UI surface.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/gs-marketing-kit.png',
    accent: 'from-emerald-400/25 via-cyan-900/30 to-navy-900/90',
  },
  {
    id: 'signals-explorer',
    name: 'signals-explorer',
    title: 'Signals Explorer',
    domains: ['signals-explorer-pi.vercel.app'],
    description:
      'Explorer for signals / intent-style data visualizations used in marketing and sales narratives.',
    useCase:
      'Walkthroughs of signal-based audience or activation stories.',
    githubRepo: 'travisfleish/signals-explorer',
    vercelProject: 'signals-explorer',
    supabase: {
      used: false,
      note: 'Confirm if data layer was added; often demo-static.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/signals-explorer.png',
    accent: 'from-green-300/30 via-teal-900/35 to-navy-900/90',
  },
  {
    id: 'cannes-scheduler',
    name: 'cannes-scheduler',
    title: 'Cannes Scheduler',
    domains: ['cannes-scheduler.vercel.app'],
    description:
      'Meeting / schedule helper for Cannes (and similar event) programming.',
    useCase:
      'Event ops and attendee scheduling around Cannes activations.',
    githubRepo: 'travisfleish/cannes-scheduler',
    vercelProject: 'cannes-scheduler',
    supabase: {
      used: false,
      note: 'May use lightweight storage; verify before handover.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/cannes-scheduler.png',
    accent: 'from-cyan-300/25 via-emerald-900/30 to-navy-900/90',
  },
  {
    id: 'lovable-brand-kit',
    name: 'lovable-brand-kit',
    title: 'Lovable Brand Kit',
    domains: ['lovable-brand-kit.vercel.app'],
    description:
      'Brand kit / design exploration surface (Lovable-originated or adjacent kit work).',
    useCase:
      'Quick brand and UI kit references for marketing builds.',
    githubRepo: 'travisfleish/lovable-brand-kit',
    vercelProject: 'lovable-brand-kit',
    supabase: {
      used: false,
      note: 'Static brand kit.',
    },
    services: [],
    framework: 'Vite',
    screenshot: '/screenshots/lovable-brand-kit.png',
    accent: 'from-lime-300/25 via-green-950/40 to-navy-900/90',
  },
  {
    id: 'vercel-analytics-dashboard',
    name: 'vercel-analytics-dashboard',
    title: 'Vercel Analytics Dashboard',
    domains: ['vercel-analytics-dashboard.vercel.app'],
    description:
      'Internal-facing view of Vercel analytics / traffic across the toolkit sites.',
    useCase:
      'Quick health check on which marketing and tool sites are getting traffic.',
    githubRepo: 'travisfleish/vercel-analytics-dashboard',
    vercelProject: 'vercel-analytics-dashboard',
    supabase: {
      used: false,
      note: 'Analytics via Vercel APIs / dashboard patterns.',
    },
    services: ['Vercel Analytics'],
    framework: 'Next',
    screenshot: '/screenshots/vercel-analytics-dashboard.png',
    accent: 'from-emerald-500/30 via-slate-900/50 to-navy-900/95',
  },
]

export const githubRepos: GitHubRepo[] = [
  {
    id: 'audience-tool',
    fullName: 'travisfleish/audience-tool',
    role: 'app',
    description:
      'Main audience explorer. Powers audience-tool-main, eve, and apex Vercel projects (branch per deploy).',
    url: 'https://github.com/travisfleish/audience-tool',
    vercelLinked: true,
  },
  {
    id: 'audience_tool_v0',
    fullName: 'travisfleish/audience_tool_v0',
    role: 'app',
    description:
      'Earlier / v0 audience tool lineage. Keep for history and cherry-picks; prefer audience-tool for new work.',
    url: 'https://github.com/travisfleish/audience_tool_v0',
    vercelLinked: false,
  },
  {
    id: 'nf_collateral_packages',
    fullName: 'travisfleish/nf_collateral_packages',
    role: 'app',
    description:
      'NewFront collateral packages. Deployed as nf_collateral_packages on Vercel.',
    url: 'https://github.com/travisfleish/nf_collateral_packages',
    vercelLinked: true,
  },
  {
    id: 'NF_touchscreen_v2',
    fullName: 'travisfleish/NF_touchscreen_v2',
    role: 'kiosk',
    description:
      'NewFront touchscreen / kiosk experience. GitHub-only if no matching Vercel project — run locally or on venue hardware.',
    url: 'https://github.com/travisfleish/NF_touchscreen_v2',
    vercelLinked: false,
  },
  {
    id: 'moments_collateral_v2',
    fullName: 'travisfleish/moments_collateral_v2',
    role: 'app',
    description:
      'Moments collateral v2 source. Feeds moments_collateral_v2 and EMEA Vercel projects.',
    url: 'https://github.com/travisfleish/moments_collateral_v2',
    vercelLinked: true,
  },
  {
    id: 'marketing-app-starter',
    fullName: 'travisfleish/marketing-app-starter',
    role: 'starter',
    description:
      'Starter template for new Genius Sports marketing apps (Vite + Tailwind patterns).',
    url: 'https://github.com/travisfleish/marketing-app-starter',
    vercelLinked: false,
  },
  {
    id: 'newfront_packages',
    fullName: 'travisfleish/newfront_packages',
    role: 'app',
    description:
      'NewFront packages work adjacent to nf_collateral_packages — package content and related surfaces.',
    url: 'https://github.com/travisfleish/newfront_packages',
    vercelLinked: false,
  },
  {
    id: 'marketing-ui-catalog',
    fullName: 'travisfleish/marketing-ui-catalog',
    role: 'design system',
    description:
      'Catalog of marketing UI patterns and components for reference and reuse.',
    url: 'https://github.com/travisfleish/marketing-ui-catalog',
    vercelLinked: false,
  },
  {
    id: 'gs-marketing-ui',
    fullName: 'travisfleish/gs-marketing-ui',
    role: 'design system',
    description:
      'Private Genius Sports marketing UI design system. Consumed by collateral apps (e.g. NewFront).',
    url: 'https://github.com/travisfleish/gs-marketing-ui',
    vercelLinked: false,
  },
]

export const accessChecklist: AccessItem[] = [
  {
    id: 'github',
    system: 'GitHub',
    detail: 'Org/user repos under travisfleish/* — clone, push, and private design-system access (gs-marketing-ui).',
    required: true,
  },
  {
    id: 'vercel',
    system: 'Vercel',
    detail: 'Team travis-fleishers-projects — project access, env vars, domains, and deployments.',
    required: true,
  },
  {
    id: 'supabase',
    system: 'Supabase',
    detail: 'Projects backing audience-tool (and any Deal Library persistence). Keys via vercel env pull.',
    required: true,
  },
  {
    id: 'resend',
    system: 'Resend',
    detail: 'API access for Deal Library (and any other email-sending apps).',
    required: false,
  },
  {
    id: 'dns',
    system: 'DNS',
    detail: 'geniussportslibrary.com (and related) where Deal Library / library domains are served.',
    required: false,
  },
]
