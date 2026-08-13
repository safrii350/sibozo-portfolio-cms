import { TechnologyIcon } from '../components/TechnologyIcon'
import { skillGroups } from '../data/skills'
import { skillGroupsEn, ui } from '../i18n/content'
import { useLanguage } from '../i18n/LanguageContext'

export function Skills() {
  const { language } = useLanguage()
  const copy = ui[language]
  const groups = language === 'de' ? skillGroups : skillGroupsEn
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.skillsLabel}</p>
          <h2 id="skills-title">{copy.skillsTitle}</h2>
          <p>{copy.skillsIntro}</p>
        </div>
        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-group" key={group.id}>
              <span className="skill-group__marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tag-list" aria-label={`Technologien: ${group.title}`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TechnologyIcon name={skill} />
                    <span>{skill}</span>
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
