import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { webProjects } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const WebCV = () => {
  const projectsTitleAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
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
