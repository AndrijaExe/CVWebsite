import { skillGroups } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const topSkills = (() => {
  const all = skillGroups.flatMap((g) => g.items)
  return all.sort((a, b) => b.level - a.level).slice(0, 6)
})()

const Skills = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const featuredAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })
  const gridAnimation = useScrollAnimation({ threshold: 0.1, delay: 100 })

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
          ref={featuredAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`card animate-on-scroll ${featuredAnimation.isVisible ? 'visible' : ''}`}
          style={{ marginBottom: '1rem' }}
        >
          <h3 style={{ marginTop: 0 }}>Featured skills</h3>
          <ul className="skill-list">
            {topSkills.map((it) => (
              <li key={it.name} className="skill-item">
                <div className="skill-header">
                  <span>{it.name}</span>
                  <span className="muted">{it.level}%</span>
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${it.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
    <h3 
      className={`animate-on-scroll ${gridAnimation.isVisible ? 'visible' : ''}`}
      style={{ margin: '0.25rem 0 0.5rem' }}
    >
      All Skills
    </h3>
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
                      <span className="muted">{it.level}%</span>
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
