import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">03 / Projekte</p>
        <h2 id="projects-title">Projekte, an denen ich gewachsen bin.</h2>
        <p>Vom IHK-Abschlussprojekt bis zu meiner persönlichen Linux-Arbeitsumgebung.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
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
                  Live
                </a>
              ) : (
                <span className="status">{project.status}</span>
              )}
            </div>
            <div className="project-card__content">
              <div>
                {project.featured && <p className="project-card__label">IHK-Abschlussprojekt</p>}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className="tag-list" aria-label={`Technologien: ${project.title}`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            {project.repositoryUrl && (
              <div className="project-card__links">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  Repository ↗
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
