import { skillGroups } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const gridAnimation = useScrollAnimation({ threshold: 0.1, delay: 50 })

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          Skills
        </h2>
        <div
          ref={gridAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`skills-grid stagger-children ${gridAnimation.isVisible ? 'visible' : ''}`}
        >
          {skillGroups.map((group) => (
            <div key={group.category} className="card">
              <h3 style={{ marginTop: 0 }}>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((it) => (
                  <li key={it.name} className="skill-item">
                    <div className="skill-header">
                      <span>{it.name}</span>
                    </div>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: `${it.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
