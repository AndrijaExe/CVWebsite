import { experience } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const timelineAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          Experience
        </h2>
        <ul 
          ref={timelineAnimation.ref as React.RefObject<HTMLUListElement>}
          className={`timeline stagger-children ${timelineAnimation.isVisible ? 'visible' : ''}`}
        >
          {experience.map((x) => (
            <li key={x.title + (x.period || '')}>
              <h3>{x.title}</h3>
              {x.period && <span>{x.period}</span>}
              {x.description && <p>{x.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
