import { accessChecklist } from '../data/catalog'
import GetStartedCTA from './sections/GetStartedCTA'
import Section from './layouts/Section'

export function AccessChecklist() {
  return (
    <Section
      id="access"
      background={{ background_color: 'lightGrey' }}
      padding_top="medium"
      padding_bottom="medium"
      has_container
      inner_spacing="small"
      classnames="scroll-mt-20"
    >
      <div className="max-w-3xl">
        <div className="mb-6">
          <div className="relative inline-flex items-center space-x-2 rounded-l-full bg-white py-[.3rem] pl-2 pr-3 md:py-2 md:pl-3 md:pr-6">
            <div className="h-2 w-2 shrink-0 rounded-full bg-blue" />
            <span className="font-body text-[15px] text-navy">Access</span>
          </div>
        </div>
        <h2 className="text-h2 text-navy">Successor checklist</h2>
        <p className="mt-4 max-w-2xl font-body text-18 text-navy/70">
          Request these before day one. No site gate on Handoff itself — access
          is for the toolkit behind it.
        </p>
      </div>

      <ul className="space-y-0">
        {accessChecklist.map((item, i) => (
          <li
            key={item.id}
            className="grid gap-2 border-b border-lavenderGrey py-6 first:border-t sm:grid-cols-[10rem_1fr_auto] sm:items-start sm:gap-6"
          >
            <span className="font-heading text-h7 text-navy">
              <span className="mr-2 text-navy/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.system}
            </span>
            <p className="font-body text-14 leading-relaxed text-navy/70">
              {item.detail}
            </p>
            <span
              className={`font-body text-[10px] font-semibold uppercase tracking-wider ${
                item.required ? 'text-blue' : 'text-navy/40'
              }`}
            >
              {item.required ? 'Required' : 'As needed'}
            </span>
          </li>
        ))}
      </ul>

      <GetStartedCTA
        heading="Ready to take over?"
        content="Start with GitHub and Vercel access, then walk the catalog."
        link={{ title: 'View catalog', url: '#catalog' }}
      />
    </Section>
  )
}
