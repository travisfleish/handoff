import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { vercelProjects } from '../data/catalog'
import { getToolReadme } from '../data/toolReadmes'
import LineBlock from './elements/LineBlock'
import Logo from './brand/Logo'

function githubUrl(repo: string, branch?: string) {
  const base = `https://github.com/${repo}`
  return branch ? `${base}/tree/${branch}` : base
}

function domainHref(domain: string): string | null {
  const d = domain.trim()
  if (!d || d.includes(' ') || d.startsWith('*') || d.includes('://')) return null
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i.test(d)) {
    return null
  }
  return `https://${d}`
}

export function ToolDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = vercelProjects.find((p) => p.id === id)
  const readme = id ? getToolReadme(id) : null

  if (!project) {
    return (
      <div className="min-h-dvh bg-navy px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/#catalog"
            className="font-body text-14 text-lightBlue underline-offset-2 hover:underline"
          >
            ← Back to catalog
          </Link>
          <h1 className="mt-8 text-h3">Tool not found</h1>
          <p className="mt-3 font-body text-16 text-white/70">
            No catalog entry matches this id.
          </p>
        </div>
      </div>
    )
  }

  const related =
    readme?.relatedProjectIds
      ?.map((rid) => vercelProjects.find((p) => p.id === rid))
      .filter(Boolean) ?? []

  return (
    <div className="min-h-dvh bg-navy text-white">
      <header className="border-b border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link
            to="/#catalog"
            className="font-body text-14 text-lightBlue underline-offset-2 hover:underline"
          >
            ← Catalog
          </Link>
          <Logo variant="marque" color="white" className="h-7 w-auto" />
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <div className="min-w-0 flex-1">
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.18em] text-lightBlue">
              {project.name}
            </p>
            <h1 className="mt-2 text-h2 text-white">{project.title}</h1>
            <p className="mt-4 font-body text-18 leading-relaxed text-white/75">
              {readme?.overview ?? project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.domains.map((d) => {
                const href = domainHref(d)
                return href ? (
                  <a
                    key={d}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-14 text-lightBlue underline-offset-2 hover:underline"
                  >
                    {d} ↗
                  </a>
                ) : (
                  <span key={d} className="font-body text-14 text-white/50">
                    {d}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl bg-white/5 sm:max-w-[260px] md:w-[260px] md:max-w-none">
            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 opacity-50">
                <LineBlock
                  steps={14}
                  color="lightBlue"
                  rotation={45}
                  clip
                  className="h-full w-full"
                  minStroke={0.6}
                  maxStroke={3}
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
            <div className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-10">
              <p className="font-heading text-[15px] leading-tight text-white">
                {project.title}
              </p>
              <p className="mt-0.5 truncate font-body text-12 text-white/55">
                {project.domains[0]}
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
          </div>
        </div>

        {/* Quick facts */}
        <dl className="mt-10 grid gap-4 border-y border-white/10 py-8 sm:grid-cols-2">
          <Fact label="GitHub">
            <a
              href={githubUrl(project.githubRepo, project.githubBranch)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightBlue underline-offset-2 hover:underline"
            >
              {project.githubRepo}
              {project.githubBranch ? ` @ ${project.githubBranch}` : ''}
            </a>
          </Fact>
          <Fact label="Vercel">{project.vercelProject}</Fact>
          <Fact label="Framework">{project.framework}</Fact>
          <Fact label="Supabase">
            {project.supabase.used ? 'Yes' : 'No'} — {project.supabase.note}
          </Fact>
          {project.services.length > 0 && (
            <Fact label="Services">{project.services.join(', ')}</Fact>
          )}
          <Fact label="Use case">{project.useCase}</Fact>
        </dl>

        {/* README sections */}
        {readme && (
          <div className="mt-12 space-y-12">
            <p className="font-body text-12 font-semibold uppercase tracking-[0.16em] text-white/45">
              README
            </p>
            {readme.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h5 text-white">{section.title}</h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-3 font-body text-16 leading-relaxed text-white/80"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((b) => (
                      <li
                        key={b.slice(0, 48)}
                        className="flex gap-3 font-body text-15 leading-relaxed text-white/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brightGreen" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.rows && section.rows.length > 0 && (
                  <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="px-4 py-3 font-body text-12 font-semibold uppercase tracking-wider text-white/50">
                            Variant
                          </th>
                          <th className="px-4 py-3 font-body text-12 font-semibold uppercase tracking-wider text-white/50">
                            Entry
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row) => (
                          <tr
                            key={row.label}
                            className="border-b border-white/5 last:border-0"
                          >
                            <td className="px-4 py-3 font-body text-14 font-medium text-lightBlue">
                              {row.label}
                            </td>
                            <td className="px-4 py-3 font-body text-14 text-white/80">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.code && (
                  <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40 px-4 py-4 font-mono text-13 leading-relaxed text-brightGreen">
                    {section.code}
                  </pre>
                )}
              </section>
            ))}
          </div>
        )}

        {!readme && (
          <section className="mt-12">
            <h2 className="text-h5 text-white">Description</h2>
            <p className="mt-3 font-body text-16 leading-relaxed text-white/80">
              {project.description}
            </p>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-h5 text-white">Related tools</h2>
            <ul className="mt-4 space-y-3">
              {related.map(
                (r) =>
                  r && (
                    <li key={r.id}>
                      <Link
                        to={`/tools/${r.id}`}
                        className="font-body text-16 text-lightBlue underline-offset-2 hover:underline"
                      >
                        {r.title}
                      </Link>
                      <span className="ml-2 font-body text-14 text-white/45">
                        {r.domains[0]}
                      </span>
                    </li>
                  ),
              )}
            </ul>
          </section>
        )}
      </article>

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">
        <p className="mx-auto max-w-4xl text-center font-body text-14 text-white/40">
          Handoff · simplified README for successor onboarding
        </p>
      </footer>
    </div>
  )
}

function Fact({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div>
      <dt className="font-body text-12 font-semibold uppercase tracking-[0.14em] text-white/45">
        {label}
      </dt>
      <dd className="mt-1.5 font-body text-15 leading-snug text-white/90">
        {children}
      </dd>
    </div>
  )
}
