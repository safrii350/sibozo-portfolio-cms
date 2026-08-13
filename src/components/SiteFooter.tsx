import { ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

type SiteFooterProps = {
  legalPage?: boolean
}

export function SiteFooter({ legalPage = false }: SiteFooterProps) {
  const { language, setLanguage } = useLanguage()
  const copy = ui[language]
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Michael Sibozo</p>
        <nav className="site-footer__links" aria-label="Rechtliche Informationen">
          <div className="language-switcher" aria-label="Sprache auswählen">
            <button type="button" className={language === 'de' ? 'is-active' : ''} onClick={() => setLanguage('de')} aria-pressed={language === 'de'}>DE</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
          </div>
          {legalPage ? (
            <a href="/">{language === 'de' ? 'Zur Startseite' : 'Back to portfolio'}</a>
          ) : (
            <>
              <a href="/rechtliches#impressum">{language === 'de' ? 'Impressum' : 'Legal notice'}</a>
              <a href="/rechtliches#datenschutz">{language === 'de' ? 'Datenschutz' : 'Privacy'}</a>
              <a href="#top">{copy.top}</a>
            </>
          )}
        </nav>
      </div>
    </footer>
  )
}
