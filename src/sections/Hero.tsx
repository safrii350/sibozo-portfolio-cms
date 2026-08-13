import { useRef } from 'react'
import { TerminalSequence } from '../components/TerminalSequence'
import { ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { language } = useLanguage()
  const copy = ui[language]
  const heroRef = useRef<HTMLElement>(null)

  const updateSpotlight = (clientX: number, clientY: number) => {
    const hero = heroRef.current
    if (!hero) return

    const bounds = hero.getBoundingClientRect()
    hero.style.setProperty('--spotlight-x', `${clientX - bounds.left}px`)
    hero.style.setProperty('--spotlight-y', `${clientY - bounds.top}px`)
  }

  return (
    <section
      className="hero container"
      id="top"
      ref={heroRef}
      aria-labelledby="hero-title"
      onPointerMove={(event) => {
        if (event.pointerType === 'mouse') updateSpotlight(event.clientX, event.clientY)
      }}
    >
      <div className="hero__content">
        <p className="eyebrow">{copy.hello}</p>
        <h1 id="hero-title">
          {copy.heroTitle} <span>{copy.heroAccent}</span>
        </h1>
        <p className="hero__intro">
          {copy.intro}
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {copy.projectsButton}
          </a>
          <a className="button button--secondary" href="#contact">
            {copy.contactButton}
          </a>
        </div>
      </div>
      <div className="hero__terminal" aria-label="Kurzprofil">
        <div className="terminal__bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal__body">
          <TerminalSequence />
        </div>
      </div>
    </section>
  )
}
