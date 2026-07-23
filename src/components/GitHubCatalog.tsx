import { githubRepos } from '../data/catalog'
import PillTag from './elements/PillTag'
import Section from './layouts/Section'
import { RightArrowCircle } from './icons/Icons'

const roleLabel: Record<string, string> = {
  app: 'App',
  'design system': 'Design system',
  starter: 'Starter',
  kiosk: 'Kiosk',
}

export function GitHubCatalog() {
  return (
    <Section
      id="repos"
      background={{ background_color: 'white' }}
      padding_top="medium"
      padding_bottom="medium"
      has_container
      inner_spacing="small"
      classnames="scroll-mt-20"
    >
      <div className="max-w-3xl">
        <div className="mb-6">
          <div className="relative inline-flex items-center space-x-2 rounded-l-full bg-lightGrey py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-6">
            <div className="h-2 w-2 shrink-0 rounded-full bg-blue" />
            <span className="font-body text-[15px] text-navy">GitHub</span>
          </div>
        </div>
        <h2 className="text-h2 text-navy">Repositories</h2>
        <p className="mt-4 max-w-2xl font-body text-18 text-navy/70">
          Core travisfleish/* repos for apps, design systems, starters, and the
          NewFront kiosk.
        </p>
      </div>

      <ul className="divide-y divide-lavenderGrey border-y border-lavenderGrey">
        {githubRepos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 py-5 transition-colors hover:bg-lightGrey/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-2"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="font-heading text-h7 text-navy transition-colors group-hover:text-blue">
                    {repo.fullName}
                  </span>
                  <PillTag text={roleLabel[repo.role] ?? repo.role} />
                  {!repo.vercelLinked && (
                    <span className="ml-1 font-body text-[10px] font-semibold uppercase tracking-wider text-navy/35">
                      GitHub only
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-2xl font-body text-14 leading-relaxed text-navy/60">
                  {repo.description}
                </p>
              </div>
              <RightArrowCircle
                circleClassName="text-navy group-hover:text-blue"
                arrowClassName="text-white"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
