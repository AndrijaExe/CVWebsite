import { profile, extras } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const animation = useScrollAnimation({ threshold: 0.2 })
  const badgesAnimation = useScrollAnimation({ threshold: 0.2, delay: 100 })

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 
          ref={animation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${animation.isVisible ? 'visible' : ''}`}
        >
          About
        </h2>
        <p className={`animate-on-scroll ${animation.isVisible ? 'visible' : ''}`}>
          {profile.summary}
        </p>
        {extras?.length ? (
          <ul 
            ref={badgesAnimation.ref as React.RefObject<HTMLUListElement>}
            className={`skills stagger-children ${badgesAnimation.isVisible ? 'visible' : ''}`} 
            style={{ marginTop: '0.75rem' }}
          >
            {extras.map((e) => (
              <li key={e} className="badge">{e}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

export default About
