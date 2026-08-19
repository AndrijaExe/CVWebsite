import { honors } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Honors = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const listAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })

  return (
    <section id="honors" className="section">
      <div className="container">
        <h2
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          Honors &amp; Achievements
        </h2>
        <ul
          ref={listAnimation.ref as React.RefObject<HTMLUListElement>}
          className={`timeline stagger-children ${listAnimation.isVisible ? 'visible' : ''}`}
        >
          {honors.map((h) => (
            <li key={h.title}>
              <h3>{h.title}</h3>
              {h.period && <span>{h.period}</span>}
              {h.description && <p>{h.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Honors
