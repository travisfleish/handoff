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

      <div
        id="cursor-usage"
        className="scroll-mt-20 grid grid-cols-1 gap-8 border-t border-lavenderGrey pt-12 md:grid-cols-2 md:items-center md:gap-12 md:pt-16"
      >
        <div>
          <h3 className="font-heading text-h5 text-navy">Usage limits</h3>
          <p className="mt-4 font-body text-18 text-navy/70">
            Agent and model spend is capped at{' '}
            <span className="font-medium text-navy">$150 per month</span>.
            Track spend so you know how much included usage is left before the
            cycle resets.
          </p>
          <ol className="mt-6 list-decimal space-y-2 pl-5 font-body text-14 leading-relaxed text-navy/70">
            <li>
              Sign in to Cursor with your Genius Sports account via{' '}
              <span className="font-medium text-navy">SSO</span> (company login,
              not a personal Cursor account).
            </li>
            <li>
              Open{' '}
              <a
                href="https://cursor.com/dashboard?tab=usage"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue underline-offset-2 hover:underline"
              >
                cursor.com/dashboard → Usage
              </a>{' '}
              (or Settings → Usage in the app).
            </li>
            <li>
              Check monthly spend vs. the $150 limit, included vs. on-demand,
              and the cumulative chart for the billing period.
            </li>
          </ol>
        </div>
        <figure className="overflow-hidden rounded-lg border border-lavenderGrey bg-navy/5">
          <img
            src="/screenshots/cursor-usage.png"
            alt="Cursor Usage dashboard showing monthly spend against the $150 limit, with included usage and a cumulative spend chart"
            width={1024}
            height={717}
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </Section>
  )
}
