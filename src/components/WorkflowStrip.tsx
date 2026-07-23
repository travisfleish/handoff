import BrandIcon from './brand/BrandIcon'
import type { BrandIconName } from './brand/BrandIcon'
import DotSubheading from './sections/DotSubheading'
import Section from './layouts/Section'
import { dayToDayFlow, workflowSteps } from '../data/catalog'

const stepIcons: Record<string, BrandIconName> = {
  cursor: 'platform',
  github: 'data',
  vercel: 'cloud',
  supabase: 'statistics',
  resend: 'engage',
}

export function WorkflowStrip() {
  return (
    <Section
      id="workflow"
      background={{ background_color: 'lightGrey' }}
      padding_top="medium"
      padding_bottom="medium"
      has_container
      inner_spacing="small"
      classnames="scroll-mt-20"
    >
      <div className="max-w-3xl">
        <DotSubheading subheading="Stack" colour="blue" background="white" />
        <h2 className="text-h2 text-navy">How work moves</h2>
        <p className="mt-4 max-w-xl font-body text-18 text-navy/70">
          Cursor → GitHub → Vercel, with Supabase and Resend only when the app needs them.
        </p>
      </div>

      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {workflowSteps.map((step, i) => (
          <li key={step.id} className="relative">
            <BrandIcon
              name={stepIcons[step.id] ?? 'platform'}
              mode="light"
              size={40}
              className="mb-4"
            />
            <span className="font-heading text-36 text-navy/15">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-1 font-heading text-h7 text-navy">{step.label}</h3>
            <p className="mt-2 font-body text-14 leading-relaxed text-navy/65">
              {step.job}
            </p>
          </li>
        ))}
      </ol>

      <div className="overflow-x-auto">
        <p className="mb-3 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-navy/40">
          Day-to-day
        </p>
        <ol className="flex min-w-max items-center gap-2 font-body text-15 text-navy/80 md:min-w-0 md:flex-wrap">
          {dayToDayFlow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-blue" aria-hidden="true">
                  →
                </span>
              )}
              <span className="whitespace-nowrap border-b border-blue/30 pb-0.5">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
