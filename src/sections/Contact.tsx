import { profile } from '../data/profile'

export function Contact() {
  return (
    <section className="section contact container" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">05 / Kontakt</p>
      <h2 id="contact-title">Mein nächster Schritt?</h2>
      <p>
        Ich suche den Einstieg in ein Team, in dem ich meine Kenntnisse einbringen und weiter
        ausbauen kann – besonders rund um Linux, IT-Support oder Webentwicklung.
      </p>
      <a className="button button--primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  )
}
