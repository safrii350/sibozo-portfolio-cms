import { TechnologyIcon } from '../components/TechnologyIcon'
import { homelabEntries } from '../data/homelab'
import { homelabEn, ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Homelab() {
  const { language } = useLanguage()
  const copy = ui[language]
  const entries = language === 'de' ? homelabEntries : homelabEn
  return (
    <section className="section section--dark" id="homelab" aria-labelledby="homelab-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.homelabLabel}</p>
          <h2 id="homelab-title">{copy.homelabTitle}</h2>
          <p>{copy.homelabIntro}</p>
        </div>
        <div className="homelab-list">
          {entries.map((entry, index) => (
            <article className="homelab-item" key={entry.id}>
              <span className="homelab-item__number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <small>{entry.detail}</small>
              </div>
              <ul className="tag-list" aria-label={`Technologien: ${entry.title}`}>
                {entry.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyIcon name={technology} />
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
