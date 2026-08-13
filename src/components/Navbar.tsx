import { useEffect, useRef, useState } from 'react'
import type { Theme } from '../types/content'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

const navigationTargets = ['#about', '#skills', '#projects', '#homelab', '#contact']

type NavbarProps = {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  const { language } = useLanguage()
  const copy = ui[language]
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeNavigation = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Hauptnavigation">
        <a className="navbar__brand" href="#top" aria-label="Zur Startseite">
          <span aria-hidden="true">&lt;</span>sibozo<span aria-hidden="true"> /&gt;</span>
        </a>

        <button
          className="navbar__toggle"
          ref={toggleButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Navigation schließen' : 'Navigation öffnen'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <button
          className={`navbar__overlay${isOpen ? ' is-open' : ''}`}
          type="button"
          tabIndex={isOpen ? 0 : -1}
          aria-label="Navigation schließen"
          onClick={closeNavigation}
        />

        <div
          className={`navbar__panel${isOpen ? ' is-open' : ''}`}
          id="main-navigation"
        >
          <div className="navbar__panel-header">
            <span>{copy.navigation}</span>
            <button
              className="navbar__close"
              ref={closeButtonRef}
              type="button"
              aria-label="Navigation schließen"
              onClick={() => {
                closeNavigation()
                toggleButtonRef.current?.focus()
              }}
            >
              ×
            </button>
          </div>
          <ul className="navbar__links">
            {navigationTargets.map((href, index) => (
              <li key={href}>
                <a href={href} onClick={closeNavigation}>
                  {copy.nav[index]}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher theme={theme} onChange={onThemeChange} />
        </div>
      </nav>
    </header>
  )
}
