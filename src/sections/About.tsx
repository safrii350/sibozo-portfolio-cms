import { careerEntries } from '../data/career'
import { aboutEn, careerEn, ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { language } = useLanguage()
  const copy = ui[language]
  const career = language === 'de' ? careerEntries : careerEn
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">{copy.aboutLabel}</p>
        <h2 id="about-title">{copy.aboutTitle}</h2>
      </div>
      <div className="about-grid">
        {language === 'de' ? <p className="about-grid__lead">
          Ich bin Michael Sibozo. Die fachpraktischen Ausbildungsanteile meiner Umschulung zum
          Fachinformatiker für Anwendungsentwicklung bei der bfz gGmbH Ulm sowie den betrieblichen
          Projektteil habe ich abgeschlossen.
        </p> : <p className="about-grid__lead">{aboutEn.lead}</p>}
        {language === 'de' ? <div className="about-grid__copy">
          <p>
            Die fachpraktischen Ausbildungsanteile und den betrieblichen Projektteil habe ich
            abgeschlossen. Der letzte schriftliche Teil meiner IHK-Abschlussprüfung ist für
            November 2026 vorgesehen.
          </p>
          <p>
            Meine Praxisphasen fanden bei der Systemhaus Ulm GmbH statt. Der Schwerpunkt lag auf
            der Anwendungsentwicklung mit PHP, Laravel, SQL und Livewire. Dort habe ich unter
            anderem ein Forum mit CRUD-Funktionen umgesetzt und an einer internen
            HR-Tool-Webanwendung mitgearbeitet.
          </p>
          <p>
            Ergänzend konnte ich in einem der Praxisblöcke FISI-nahe Tätigkeiten kennenlernen,
            darunter IT-Support, Ticketbearbeitung, Geräteeinrichtung und Kundentermine.
          </p>
          <p>
            Technik und Computer interessieren mich nicht erst seit meiner Umschulung. Ich habe
            schon früh eigene PCs zusammengebaut, Systeme eingerichtet und technische Probleme
            selbst gelöst. Nach mehreren Jahren in Beratung und Kundenservice habe ich mich bewusst
            für den Wechsel in die IT entschieden, weil ich nicht nur zu technischen Produkten
            beraten, sondern selbst mit Systemen und Software arbeiten möchte.
          </p>
          <p>
            Debian ist heute mein Hauptsystem. Meine Arbeitsumgebung richte ich gerne selbst ein und
            ich beschäftige mich privat mit Linux-Setups, Webprojekten, Selfhosting und eigenen
            Skripten. Am meisten lerne ich, wenn ich Systeme selbst aufsetze, Probleme analysiere
            und Lösungen praktisch umsetze.
          </p>
        </div> : <div className="about-grid__copy">{aboutEn.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
      </div>
      <div className="experience-strip" aria-label="Ausbildung und Praxiserfahrung">
        <article>
          <p className="experience-strip__date">07/2024 – 07/2026</p>
          <h3>{language === 'de' ? 'Umschulung Anwendungsentwicklung' : 'Application Development Retraining'}</h3>
          <p>{language === 'de' ? 'bfz gGmbH Ulm · Fachpraxis und Projekt abgeschlossen, schriftliche Prüfung 11/2026' : 'bfz gGmbH Ulm · Practical training and project completed, written exam 11/2026'}</p>
        </article>
        <article>
          <p className="experience-strip__date">{language === 'de' ? 'Betriebliche Praxis' : 'Practical Placement'}</p>
          <h3>Systemhaus Ulm GmbH</h3>
          <p>{language === 'de' ? 'Anwendungsentwicklung mit PHP, Laravel, SQL und Livewire sowie Einblicke in den IT-Support' : 'Application development with PHP, Laravel, SQL and Livewire, plus experience in IT support'}</p>
        </article>
      </div>
      <div className="career" aria-labelledby="career-title">
        <div className="career__heading">
          <p className="eyebrow">{language === 'de' ? 'Beruflicher Werdegang' : 'Professional Experience'}</p>
          <h3 id="career-title">{language === 'de' ? 'Meine bisherigen Stationen' : 'Previous roles'}</h3>
          <p>{language === 'de' ? 'Vor meiner Umschulung habe ich viele Jahre im Kundenservice und in der technischen Beratung gearbeitet.' : 'Before retraining, I spent many years in customer service and technical consulting.'}</p>
        </div>
        <ol className="career__timeline">
          {career.map((entry) => (
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
