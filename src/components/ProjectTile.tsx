import { Link } from 'react-router-dom'
import type { VercelProject } from '../data/catalog'
import LineBlock from './elements/LineBlock'

interface ProjectTileProps {
  project: VercelProject
  index: number
}

const accentLines = [
  'blue',
  'brightGreen',
  'lightBlue',
  'lightPurple',
  'orange',
  'lightGreen',
] as const

export function ProjectTile({ project, index }: ProjectTileProps) {
  const primaryDomain = project.domains[0]
  const lineColor = accentLines[index % accentLines.length]

  return (
    <Link
      to={`/tools/${project.id}`}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 text-left outline-none focus-visible:ring-2 focus-visible:ring-lightBlue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
      aria-label={`Open README for ${project.title}`}
    >
      {project.screenshot ? (
        <img
          src={project.screenshot}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80">
          <LineBlock
            steps={18}
            color={lineColor}
            rotation={45}
            clip
            className="h-full w-full"
            minStroke={0.6}
            maxStroke={4}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
      {!project.screenshot && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 group-hover:text-lightBlue/80">
            Screenshot soon
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-16">
        <p className="font-heading text-h7 leading-tight text-white transition-colors duration-300 group-hover:text-lightBlue">
          {project.title}
        </p>
        <p className="mt-1 truncate font-body text-14 text-white/60">{primaryDomain}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="font-body text-[10px] font-medium uppercase tracking-wider text-white/45">
            {project.framework}
          </span>
          {project.supabase.used && (
            <span className="font-body text-[10px] font-medium uppercase tracking-wider text-brightGreen">
              Supabase
            </span>
          )}
          {project.services.includes('Resend') && (
            <span className="font-body text-[10px] font-medium uppercase tracking-wider text-brightGreen">
              Resend
            </span>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/0 transition-colors duration-300 group-hover:border-lightBlue/40" />
    </Link>
  )
}
