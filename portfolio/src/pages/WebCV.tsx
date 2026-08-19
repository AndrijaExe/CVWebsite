import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Honors from '../components/Honors'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { webProjects, gameProjects } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WebCV = () => {
  const projectsTitleAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <>
      <Hero />
      <About />
      {gameProjects.find((game) => game.flagship) && (
        <section id="loop9" className="section" style={{ paddingTop: '1.5rem' }}>
          <div className="container">
            <h2>Flagship game</h2>
            <Projects projectsList={gameProjects.filter((game) => game.flagship)} showGithubNote={false} />
            <p style={{ marginTop: '0.75rem' }}>
              <Link className="link" to="/games#loop9">Full screenshots and systems on the games page →</Link>
            </p>
          </div>
        </section>
      )}
      <Experience />
      <Education />
      <Honors />
      <section id="projects" className="section">
        <div className="container">
          <h2 
            ref={projectsTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`animate-on-scroll ${projectsTitleAnimation.isVisible ? 'visible' : ''}`}
          >
            Web Development Projects
          </h2>
          <Projects projectsList={webProjects} />
        </div>
      </section>
      <Skills />
      <Contact />
    </>
  )
}

export default WebCV
