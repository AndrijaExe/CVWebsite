import { education } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Education = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const timelineAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          Education
        </h2>
        <ul 
          ref={timelineAnimation.ref as React.RefObject<HTMLUListElement>}
          className={`timeline stagger-children ${timelineAnimation.isVisible ? 'visible' : ''}`}
        >
          {education.map((e) => (
            <li key={e.title + e.institution}>
              <h3>{e.title}</h3>
              <span>{e.institution}{e.period ? ` — ${e.period}` : ''}</span>
              {e.details && <p>{e.details}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
