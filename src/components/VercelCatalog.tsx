import { vercelProjects } from '../data/catalog'
import Section from './layouts/Section'
import { ProjectTile } from './ProjectTile'

export function VercelCatalog() {
  return (
    <Section
      id="catalog"
      background={{ background_color: 'navy' }}
      padding_top="medium"
      padding_bottom="medium"
      has_container
      inner_spacing="small"
      classnames="scroll-mt-20"
    >
      <div className="max-w-3xl">
        <div className="mb-6">
          <div className="relative inline-flex items-center space-x-2 rounded-l-full bg-white/10 py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-6">
            <div className="h-2 w-2 shrink-0 rounded-full bg-lightBlue" />
            <span className="font-body text-[15px] text-white">Vercel</span>
          </div>
        </div>
        <h2 className="text-h2 text-white">Deployed projects</h2>
        <p className="mt-4 max-w-2xl font-body text-18 text-white/70">
          Team travis-fleishers-projects. Open a tile for a simplified README —
          variants, deploy notes, and how to run locally.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vercelProjects.map((project, index) => (
          <ProjectTile key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
