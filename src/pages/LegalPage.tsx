import { useEffect } from 'react'
import { SiteFooter } from '../components/SiteFooter'
import { profile } from '../data/profile'

export function LegalPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Impressum & Datenschutz | Sibozo'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#legal-content">Zum Inhalt springen</a>
      <header className="legal-header">
        <div className="container">
          <a className="navbar__brand" href="/" aria-label="Zur Portfolio-Startseite">
            <span aria-hidden="true">&lt;</span>sibozo<span aria-hidden="true"> /&gt;</span>
          </a>
          <a href="/">← Zurück zum Portfolio</a>
        </div>
      </header>

      <main className="legal-page container" id="legal-content">
        <div className="legal-page__intro">
          <p className="eyebrow">Rechtliches</p>
          <h1>Impressum &amp; Datenschutz</h1>
          <p>Informationen zum Anbieter dieser Website und zur Verarbeitung personenbezogener Daten.</p>
        </div>

        <section className="legal-section" id="impressum" aria-labelledby="impressum-title">
          <h2 id="impressum-title">Impressum</h2>
          <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

          <h3>Anbieter und Verantwortlicher</h3>
          <address>
            Michael Sibozo<br />
            Bei der Pilzbuche 88<br />
            89075 Ulm<br />
            Deutschland
          </address>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>

          <h3>Inhaltlich verantwortlich</h3>
          <p>Michael Sibozo, Anschrift wie oben.</p>

          <h3>Haftung für Links</h3>
          <p>
            Diese Website kann Links zu externen Websites enthalten. Auf deren Inhalte und
            zukünftige Gestaltung besteht kein Einfluss. Für die Inhalte verlinkter Seiten sind
            ausschließlich deren jeweilige Betreiber verantwortlich.
          </p>
        </section>

        <section className="legal-section" id="datenschutz" aria-labelledby="privacy-title">
          <h2 id="privacy-title">Datenschutzerklärung</h2>

          <h3>1. Verantwortlicher</h3>
          <address>
            Michael Sibozo<br />
            Bei der Pilzbuche 88<br />
            89075 Ulm<br />
            Deutschland<br />
            E-Mail: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </address>

          <h3>2. Bereitstellung der Website und Server-Logdateien</h3>
          <p>
            Beim Aufruf dieser Website verarbeitet der bereitstellende Webserver technisch
            erforderliche Verbindungsdaten. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit
            des Zugriffs, aufgerufene Datei beziehungsweise URL, übertragene Datenmenge,
            Referrer-URL, Browsertyp, Betriebssystem und HTTP-Statuscode gehören.
          </p>
          <p>
            Die Verarbeitung ist erforderlich, um die Website sicher und fehlerfrei auszuliefern,
            Angriffe zu erkennen und die Stabilität des Betriebs zu gewährleisten. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und
            zuverlässigen Betrieb dieser Website. Empfänger der Daten kann der für den technischen
            Betrieb eingesetzte Hosting-Anbieter sein. Logdaten werden nur so lange gespeichert,
            wie dies für Betrieb und Sicherheit erforderlich ist, und anschließend gelöscht.
          </p>

          <h3>3. Kontaktaufnahme per E-Mail</h3>
          <p>
            Bei einer Kontaktaufnahme per E-Mail werden die übermittelten Angaben einschließlich
            der Kontaktdaten verarbeitet, um die Anfrage zu beantworten. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. b DSGVO, wenn die Anfrage der Anbahnung eines Vertrags- oder
            Beschäftigungsverhältnisses dient. In anderen Fällen erfolgt die Verarbeitung auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse besteht in der
            Bearbeitung der Anfrage.
          </p>
          <p>
            Die Angaben werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine
            gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere
            Speicherung bestehen. E-Mails werden über die beteiligten Mailserver übertragen.
          </p>

          <h3>4. Theme-Einstellung im Browser</h3>
          <p>
            Die gewählte helle oder dunkle Darstellung wird im lokalen Speicher des Browsers
            gespeichert. Diese Einstellung ist technisch erforderlich, um das gewählte Design bei
            einem späteren Besuch wiederherzustellen. Sie wird von dieser Website nicht zu
            Analyse- oder Marketingzwecken verwendet.
          </p>

          <h3>5. Keine Analyse, Werbung oder externen Medien</h3>
          <p>
            Diese Website verwendet derzeit keine Analyse- oder Trackingdienste, keine
            Werbenetzwerke, keine Social-Media-Plugins und keine extern eingebundenen Schriftarten.
            Es werden keine nicht erforderlichen Cookies gesetzt.
          </p>

          <h3>6. Rechte betroffener Personen</h3>
          <p>Im Rahmen der gesetzlichen Voraussetzungen bestehen insbesondere folgende Rechte:</p>
          <ul>
            <li>Auskunft über die verarbeiteten personenbezogenen Daten,</li>
            <li>Berichtigung unrichtiger Daten,</li>
            <li>Löschung oder Einschränkung der Verarbeitung,</li>
            <li>Datenübertragbarkeit,</li>
            <li>Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen.</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte genügt eine Nachricht an die oben genannte E-Mail-Adresse.
          </p>

          <h3>7. Beschwerderecht</h3>
          <p>
            Betroffene Personen haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
            beschweren. Für Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg zuständig.
          </p>

          <h3>8. Aktualisierung dieser Erklärung</h3>
          <p>
            Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen, eingesetzte Dienste
            oder die technische Bereitstellung der Website ändern.
          </p>
          <p className="legal-page__updated">Stand: August 2026</p>
        </section>
      </main>

      <SiteFooter legalPage />
    </>
  )
}
