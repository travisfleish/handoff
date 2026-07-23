import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { WorkflowStrip } from '../components/WorkflowStrip'
import { WorkingInCursor } from '../components/WorkingInCursor'
import { VercelCatalog } from '../components/VercelCatalog'
import { GitHubCatalog } from '../components/GitHubCatalog'
import { AccessChecklist } from '../components/AccessChecklist'
import Logo from '../components/brand/Logo'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash])

  return (
    <div className="min-h-dvh bg-navy text-white">
      <Hero />
      <WorkflowStrip />
      <WorkingInCursor />
      <VercelCatalog />
      <GitHubCatalog />
      <AccessChecklist />
      <footer className="border-t border-white/10 bg-navy px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <Logo variant="marque" color="white" className="h-8 w-auto" />
          <p className="font-body text-14 text-white/40">
            Handoff · Travis Fleisher · Genius Sports toolkit · No password gate
          </p>
        </div>
      </footer>
    </div>
  )
}
