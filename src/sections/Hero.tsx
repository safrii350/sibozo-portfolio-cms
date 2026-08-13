import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">Hallo, ich bin {profile.name}.</p>
        <h1 id="hero-title">
          Entwicklung trifft auf <span>Linux und echte Neugier.</span>
        </h1>
        <p className="hero__intro">
          {profile.introduction}
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            Projekte ansehen
          </a>
          <a className="button button--secondary" href="#contact">
            Kontakt aufnehmen
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
          <p><span>$</span> whoami</p>
          <p className="terminal__output">Michael Sibozo</p>
          <p><span>$</span> focus --current</p>
          <p className="terminal__output">Linux · Webentwicklung · IT-Support</p>
          <p><span>$</span> status</p>
          <p className="terminal__output terminal__status">Offen für den Berufseinstieg</p>
        </div>
      </div>
    </section>
  )
}
