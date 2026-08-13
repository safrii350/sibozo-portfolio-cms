import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">02 / Skills</p>
          <h2 id="skills-title">Was ich mitbringe.</h2>
          <p>Kenntnisse aus Ausbildung und Praxis – ergänzt durch Themen, die ich privat vertiefe.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.id}>
              <span className="skill-group__marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tag-list" aria-label={`Technologien: ${group.title}`}>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
