import { vercelProjects } from '../data/catalog'
import DotSubheading from './sections/DotSubheading'
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
        <DotSubheading subheading="Vercel" colour="lightBlue" background="white15" />
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
