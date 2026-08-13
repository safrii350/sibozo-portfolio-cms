import { homelabEntries } from '../data/homelab'

export function Homelab() {
  return (
    <section className="section section--dark" id="homelab" aria-labelledby="homelab-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">04 / Linux &amp; Homelab</p>
          <h2 id="homelab-title">Meine technische Spielwiese.</h2>
          <p>
            Vieles, was ich über Systeme weiß, habe ich beim Einrichten, Testen und Reparieren
            meiner eigenen Umgebung gelernt.
          </p>
        </div>
        <div className="homelab-list">
          {homelabEntries.map((entry, index) => (
            <article className="homelab-item" key={entry.id}>
              <span className="homelab-item__number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <small>{entry.detail}</small>
              </div>
              <ul className="tag-list" aria-label={`Technologien: ${entry.title}`}>
                {entry.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
