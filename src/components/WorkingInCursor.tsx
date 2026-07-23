import { cursorGuideSteps } from '../data/catalog'
import DotSubheading from './sections/DotSubheading'
import Section from './layouts/Section'

export function WorkingInCursor() {
  return (
    <Section
      id="cursor"
      background={{ background_color: 'white' }}
      padding_top="medium"
      padding_bottom="medium"
      has_container
      inner_spacing="small"
      classnames="scroll-mt-20"
    >
      <div className="max-w-3xl">
        <DotSubheading subheading="Cursor" colour="blue" />
        <h2 className="text-h2 text-navy">Working in Cursor</h2>
        <p className="mt-4 max-w-2xl font-body text-18 text-navy/70">
          High-level path from clone to local preview to push. Cursor is the
          editor; GitHub stays the source of truth.
        </p>
      </div>

      <ol className="space-y-0">
        {cursorGuideSteps.map((step, i) => (
          <li
            key={step.id}
            className="border-b border-lavenderGrey py-6 first:border-t"
          >
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 font-heading text-h7 text-navy/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-h7 text-navy">{step.title}</h3>
            </div>
            <div className="mt-3 sm:pl-12">
              <p className="font-body text-14 leading-relaxed text-navy/70">
                {step.detail}
              </p>
              {step.tip && (
                <pre className="mt-3 overflow-x-auto rounded-lg bg-navy px-4 py-3 font-mono text-[13px] leading-relaxed text-lightBlue">
                  <code>{step.tip}</code>
                </pre>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
