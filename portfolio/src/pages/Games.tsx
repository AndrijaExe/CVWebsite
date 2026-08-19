import Projects from '../components/Projects'
import { gameProjects } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const assetUrl = (src: string) => {
  const base = import.meta.env.BASE_URL || '/'
  return src.startsWith('/') ? base + src.slice(1) : src
}

const Games = () => {
  const location = useLocation()
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const descAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })
  const unityTitleAnimation = useScrollAnimation({ threshold: 0.2 })
  const courseTitleAnimation = useScrollAnimation({ threshold: 0.2 })

  const unityGames = gameProjects.filter(
    game => game.tags?.some(tag => tag.toLowerCase().includes('unity')),
  )
  const loop9Game = gameProjects.find(game => game.name.includes('Loop 9'))
  const awakenGame = gameProjects.find(game => game.name.includes('Awaken'))
  const courseGames = gameProjects.filter(
    game =>
      !game.name.includes('Awaken') &&
      !game.name.includes('Loop 9') &&
      !game.tags?.some(tag => tag.toLowerCase().includes('unity')),
  )

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const scrollToSection = () => {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const timer = window.setTimeout(scrollToSection, 60)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <section id="games" className="section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          Game Development Projects
        </h2>
        <p 
          ref={descAnimation.ref as React.RefObject<HTMLParagraphElement>}
          className={`lede animate-on-scroll ${descAnimation.isVisible ? 'visible' : ''}`}
        >
          Flagship work is Loop 9, a Steam psychological horror in Unreal C++ with a live AI companion.
          Below that: earlier Unreal titles, course projects, and Unity work.
        </p>

        <section id="loop9" style={{ scrollMarginTop: '90px' }}>
          {loop9Game && (
            <div className="flagship-hero">
              <img src={assetUrl('/loop9/corridor.jpg')} alt="Loop 9 — lobby sign" />
            </div>
          )}
        </section>

        <section id="unreal" style={{ scrollMarginTop: '90px' }}>
          <h3
            ref={courseTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
            className={`animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            Unreal Games
          </h3>

          {loop9Game && (
            <div style={{ marginBottom: '3rem' }}>
              <Projects projectsList={[loop9Game]} />
            </div>
          )}

          {/* Awaken - standalone project */}
          {awakenGame && (
            <div style={{ marginBottom: '3rem' }}>
              <Projects projectsList={[awakenGame]} />
            </div>
          )}
        </section>

        {/* Course games section */}
        {courseGames.length > 0 && (
          <>
            <h3
              className={`animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginTop: '3rem', marginBottom: '1rem' }}
            >
              Unreal Engine C++ Course Projects
            </h3>
            <p className={`lede animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}>
              The following games were created following the Udemy course: <strong>"Unreal Engine 5 C++ Game Development (Fully Updated in 5.6)"</strong> by GameDev.tv, 
              officially verified by Epic Games. These projects demonstrate C++ programming, game mechanics implementation, and Unreal Engine 5 development skills.
            </p>
            <Projects projectsList={courseGames} />
          </>
        )}

        {/* Unity games section */}
        {unityGames.length > 0 && (
          <section id="unity" style={{ scrollMarginTop: '90px' }}>
            <h3
              ref={unityTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`animate-on-scroll ${unityTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginTop: '3rem', marginBottom: '1rem' }}
            >
              Unity Games
            </h3>
            <p className={`lede animate-on-scroll ${unityTitleAnimation.isVisible ? 'visible' : ''}`}>
              This section includes my Unity projects, with focus on gameplay architecture and clean system design.
            </p>
            <Projects projectsList={unityGames} />
          </section>
        )}
      </div>
    </section>
  )
}

export default Games
