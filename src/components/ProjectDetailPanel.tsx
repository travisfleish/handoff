import { useEffect, useRef, type ReactNode } from 'react'
import type { VercelProject } from '../data/catalog'
import LineBlock from './elements/LineBlock'

interface ProjectDetailPanelProps {
  project: VercelProject | null
  onClose: () => void
}

function githubUrl(repo: string, branch?: string) {
  const base = `https://github.com/${repo}`
  return branch ? `${base}/tree/${branch}` : base
}

export function ProjectDetailPanel({ project, onClose }: ProjectDetailPanelProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = project !== null

  useEffect(() => {
    if (!open) return

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-visibility ${open ? 'visible' : 'invisible'}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-navy/70 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close detail panel"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className={`relative flex h-full w-full max-w-lg flex-col border-l border-white/10 bg-navy shadow-2xl transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {project && (
          <>
            <div className="relative h-44 shrink-0 overflow-hidden bg-blue">
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <>
                  <LineBlock
                    steps={20}
                    color="lightBlue"
                    rotation={45}
                    clip
                    className="absolute inset-0 h-full w-full opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      Screenshot soon
                    </span>
                  </div>
                </>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-navy/50 text-white transition-colors hover:border-lightBlue hover:text-lightBlue"
                aria-label="Close"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>

            <div className="scrollbar--light flex-1 overflow-y-auto px-6 py-6">
              <p className="font-body text-[12px] font-medium uppercase tracking-[0.18em] text-lightBlue">
                {project.name}
              </p>
              <h2
                id="project-detail-title"
                className="mt-2 text-h3 text-white"
              >
                {project.title}
              </h2>

              <section className="mt-8">
                <h3 className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Description
                </h3>
                <p className="mt-2 font-body text-15 leading-relaxed text-white/90">
                  {project.description}
                </p>
              </section>

              <section className="mt-6">
                <h3 className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Use case
                </h3>
                <p className="mt-2 font-body text-15 leading-relaxed text-white/90">
                  {project.useCase}
                </p>
              </section>

              <section className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">
                  Structure
                </h3>
                <dl className="mt-4 space-y-4">
                  <DetailRow label="GitHub">
                    <a
                      href={githubUrl(project.githubRepo, project.githubBranch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightBlue underline-offset-2 hover:underline"
                    >
                      {project.githubRepo}
                      {project.githubBranch ? ` @ ${project.githubBranch}` : ''}
                    </a>
                  </DetailRow>
                  <DetailRow label="Vercel">
                    <span>{project.vercelProject}</span>
                  </DetailRow>
                  <DetailRow label="Domains">
                    <ul className="space-y-1">
                      {project.domains.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </DetailRow>
                  <DetailRow label="Supabase">
                    <span>
                      {project.supabase.used ? 'Yes' : 'No'}
                      {' — '}
                      {project.supabase.note}
                    </span>
                  </DetailRow>
                  <DetailRow label="Services">
                    <span>
                      {project.services.length > 0
                        ? project.services.join(', ')
                        : 'None beyond Vercel'}
                    </span>
                  </DetailRow>
                  <DetailRow label="Framework">
                    <span>{project.framework}</span>
                  </DetailRow>
                </dl>
              </section>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function DetailRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-3 font-body text-14">
      <dt className="font-medium text-white/45">{label}</dt>
      <dd className="text-white/90">{children}</dd>
    </div>
  )
}
