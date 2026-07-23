import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'screenshots')

/** @type {{ id: string, url: string }[]} */
const sites = [
  { id: 'audience-tool-main', url: 'https://geniussportsaudiences.com' },
  { id: 'audience-tool-eve', url: 'https://audience-tool-eve.vercel.app' },
  { id: 'audience-tool-apex', url: 'https://audience-tool-apex.vercel.app' },
  { id: 'genius-deal-library', url: 'https://omg.geniussportslibrary.com' },
  { id: 'nf_collateral_packages', url: 'https://newfront.geniussportsaudiences.com' },
  { id: 'moments_collateral_v2', url: 'https://moments.geniussportsaudiences.com' },
  { id: 'moments_collateral_emea', url: 'https://momentscollateralemea.vercel.app' },
  { id: 'world-cup-v2', url: 'https://world-cup-v2.vercel.app' },
  { id: 'march-madness', url: 'https://march-madness.vercel.app' },
  { id: 'nba-augmentation', url: 'https://nba-augmentation.vercel.app' },
  { id: 'gs-marketing-kit', url: 'https://gs-marketing-kit.vercel.app' },
  { id: 'signals-explorer', url: 'https://signals-explorer-pi.vercel.app' },
  { id: 'cannes-scheduler', url: 'https://cannes-scheduler.vercel.app' },
  { id: 'lovable-brand-kit', url: 'https://lovable-brand-kit.vercel.app' },
  { id: 'vercel-analytics-dashboard', url: 'https://vercel-analytics-dashboard.vercel.app' },
]

await mkdir(outDir, { recursive: true })

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
  deviceScaleFactor: 1,
})

const results = []

for (const site of sites) {
  const page = await context.newPage()
  const outPath = path.join(outDir, `${site.id}.png`)
  try {
    const response = await page.goto(site.url, {
      waitUntil: 'networkidle',
      timeout: 45000,
    })
    // Let client-side apps settle (auth gates, animations)
    await page.waitForTimeout(2500)
    await page.screenshot({ path: outPath, type: 'png' })
    const status = response?.status() ?? 'no-response'
    console.log(`OK  ${site.id}  (${status})  → ${outPath}`)
    results.push({ id: site.id, ok: true, status })
  } catch (err) {
    console.error(`FAIL ${site.id}  ${site.url}`)
    console.error(`     ${err instanceof Error ? err.message : err}`)
    results.push({ id: site.id, ok: false, error: String(err) })
  } finally {
    await page.close()
  }
}

await browser.close()

const failed = results.filter((r) => !r.ok)
console.log(`\nDone: ${results.length - failed.length}/${results.length} captured`)
if (failed.length) {
  console.log('Failed:', failed.map((f) => f.id).join(', '))
  process.exitCode = 1
}
