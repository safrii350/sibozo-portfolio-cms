import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { SiteFooter } from './components/SiteFooter'
import { LegalPage } from './pages/LegalPage'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Homelab } from './sections/Homelab'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import type { Theme } from './types/content'

const getInitialTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'retro') return storedTheme
  return 'dark'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  if (window.location.pathname.replace(/\/$/, '') === '/rechtliches') {
    return <LegalPage />
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Homelab />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
