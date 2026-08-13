import { TechnologyIcon } from '../components/TechnologyIcon'
import { projects } from '../data/projects'
import { projectsEn, ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Projects() {
  const { language } = useLanguage()
  const copy = ui[language]
  const entries = language === 'de' ? projects : projectsEn
  const statusLabel = (status: string) => language === 'de' ? status : ({ Abschlussprojekt: 'Final Project', 'In Entwicklung': 'In Development', 'Privates Projekt': 'Personal Project', Live: 'Live' }[status] ?? status)
  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">{copy.projectsLabel}</p>
        <h2 id="projects-title">{copy.projectsTitle}</h2>
        <p>{copy.projectsIntro}</p>
      </div>
      <div className="project-list">
        {entries.map((project, index) => (
          <article
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            key={project.id}
          >
            <div className="project-card__meta">
              <span>0{index + 1}</span>
              {project.status === 'Live' && project.url ? (
                <a
                  className="status status--live"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live ansehen (öffnet in neuem Tab)`}
                >
                  <span className="status__play" aria-hidden="true">▶</span>
                  {copy.live}
                </a>
              ) : (
                <span className="status">{statusLabel(project.status)}</span>
              )}
            </div>
            <div className="project-card__content">
              <div>
                {project.featured && <p className="project-card__label">{language === 'de' ? 'IHK-Abschlussprojekt' : 'IHK Final Project'}</p>}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className="tag-list" aria-label={`Technologien: ${project.title}`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyIcon name={technology} />
                    <span>{technology}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.repositoryUrl && (
              <div className="project-card__links">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  {copy.repository} ↗
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
