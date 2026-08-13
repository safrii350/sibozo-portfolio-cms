import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { profile } from '../data/profile'
import { ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const { language } = useLanguage()
  const copy = ui[language]
  return (
    <section className="section contact container" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">{copy.contactLabel}</p>
      <h2 id="contact-title">{copy.contactTitle}</h2>
      <p>{copy.contactText}</p>
      <div className="contact__actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a
          className="button button--secondary"
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub-Profil von Michael Sibozo öffnen (öffnet in neuem Tab)"
        >
          <FontAwesomeIcon aria-hidden="true" icon={faGithub} />
          GitHub
        </a>
      </div>
    </section>
  )
}
