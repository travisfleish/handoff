import Logo from './brand/Logo'
import Button from './elements/Button'
import LineBlock from './elements/LineBlock'

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-navy px-6 pb-24 pt-40 md:px-10 md:pb-28 md:pt-44 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <LineBlock
          steps={28}
          color="blue"
          rotation={45}
          className="h-full w-full opacity-30"
          minStroke={0.4}
          maxStroke={3}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"
        aria-hidden="true"
      />

      <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <Logo variant="horizontal" color="white" className="h-14 w-auto md:h-16" />
        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 font-body text-sm text-white/60">
          <a href="#workflow" className="transition-colors hover:text-lightBlue">
            Workflow
          </a>
          <a href="#cursor" className="transition-colors hover:text-lightBlue">
            Cursor
          </a>
          <a href="#catalog" className="transition-colors hover:text-lightBlue">
            Catalog
          </a>
          <a href="#access" className="transition-colors hover:text-lightBlue">
            Access
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="hero-enter hero-enter-1 font-body text-[15px] text-lightBlue">
          Genius Sports · Change management
        </p>
        <h1 className="hero-enter hero-enter-2 mt-4 text-h1 is-large text-white">
          Marketing Resources
        </h1>
        <p className="hero-enter hero-enter-3 mt-6 max-w-xl font-body text-18 leading-relaxed text-white/70">
          Travis Fleisher’s toolkit for successor onboarding — live docs for the
          sites, repos, and access you need next.
        </p>
        <div className="hero-enter hero-enter-4 mt-10 w-fit">
          <a href="#catalog">
            <Button
              link={{ title: 'View catalog', url: '#catalog' }}
              button={{ type: 'default', background_color: 'white' }}
            />
          </a>
        </div>
      </div>
    </header>
  )
}
