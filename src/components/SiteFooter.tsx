type SiteFooterProps = {
  legalPage?: boolean
}

export function SiteFooter({ legalPage = false }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Michael Sibozo</p>
        <nav className="site-footer__links" aria-label="Rechtliche Informationen">
          {legalPage ? (
            <a href="/">Zur Startseite</a>
          ) : (
            <>
              <a href="/rechtliches#impressum">Impressum</a>
              <a href="/rechtliches#datenschutz">Datenschutz</a>
              <a href="#top">Nach oben ↑</a>
            </>
          )}
        </nav>
      </div>
    </footer>
  )
}
