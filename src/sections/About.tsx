import { careerEntries } from '../data/career'

export function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">01 / Über mich</p>
        <h2 id="about-title">Mein Weg in die IT.</h2>
      </div>
      <div className="about-grid">
        <p className="about-grid__lead">
          Ich bin angehender Fachinformatiker für Anwendungsentwicklung aus Ulm – mit besonderem
          Interesse an allem, was hinter einer Anwendung passiert.
        </p>
        <div className="about-grid__copy">
          <p>
            Seit Juli 2024 absolviere ich meine Umschulung bei der bfz gGmbH Ulm. In der
            betrieblichen Praxis bei der Systemhaus Ulm GmbH konnte ich neben der Entwicklung auch
            den Arbeitsalltag im IT-Support kennenlernen.
          </p>
          <p>
            Privat beschäftige ich mich intensiv mit Linux, Selfhosting und Webentwicklung. Ich
            lerne am liebsten praktisch: Systeme einrichten, Fehler verstehen und aus einer Idee
            eine funktionierende Anwendung bauen.
          </p>
        </div>
      </div>
      <div className="experience-strip" aria-label="Ausbildung und Praxiserfahrung">
        <article>
          <p className="experience-strip__date">07/2024 – 07/2026</p>
          <h3>Umschulung Anwendungsentwicklung</h3>
          <p>bfz gGmbH Ulm · Vorbereitung auf den IHK-Abschluss</p>
        </article>
        <article>
          <p className="experience-strip__date">Betriebliche Praxis</p>
          <h3>Systemhaus Ulm GmbH</h3>
          <p>IT-Support, Tickets, Geräteeinrichtung und Einblicke in die Systemintegration</p>
        </article>
      </div>
      <div className="career" aria-labelledby="career-title">
        <div className="career__heading">
          <p className="eyebrow">Beruflicher Werdegang</p>
          <h3 id="career-title">Erfahrung vor der Umschulung</h3>
          <p>
            Technischer Kundenservice, Beratung und Verantwortung im direkten Kontakt mit Privat-
            und Geschäftskunden.
          </p>
        </div>
        <ol className="career__timeline">
          {careerEntries.map((entry) => (
            <li className="career-entry" key={entry.id}>
              <p className="career-entry__period">{entry.period}</p>
              <div>
                <h4>{entry.role}</h4>
                <p className="career-entry__company">{entry.company}</p>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
