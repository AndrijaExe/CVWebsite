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

  const isUnity = (game: (typeof gameProjects)[number]) =>
    game.tags?.some(tag => tag.toLowerCase().includes('unity')) ?? false

  const loop9Game = gameProjects.find(game => game.flagship)
  const unityGames = gameProjects.filter(isUnity)
  const learningGames = gameProjects.filter(game => game.learning && !isUnity(game))
  const unrealGames = gameProjects.filter(
    game => !game.flagship && !game.learning && !isUnity(game),
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
          Below that: earlier Unreal titles, learning projects, and Unity work.
        </p>

        {loop9Game && (
          <section id="loop9" style={{ scrollMarginTop: '90px', marginBottom: '3rem' }}>
            <div className="flagship-hero">
              <img src={assetUrl('/loop9/corridor.jpg')} alt="Loop 9 — lobby sign" />
            </div>
            <Projects projectsList={[loop9Game]} showGithubNote={false} />
          </section>
        )}

        {unrealGames.length > 0 && (
          <section id="unreal" style={{ scrollMarginTop: '90px' }}>
            <h3
              ref={courseTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginTop: '1rem', marginBottom: '1rem' }}
            >
              Unreal Games
            </h3>
            <Projects projectsList={unrealGames} showGithubNote={false} />
          </section>
        )}

        {learningGames.length > 0 && (
          <>
            <h3
              className={`animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginTop: '3rem', marginBottom: '0.5rem' }}
            >
              Learning projects
            </h3>
            <p className="muted" style={{ marginBottom: '1.5rem' }}>
              Built while working through GameDev.tv’s Unreal Engine 5 C++ course (Epic Games verified).
            </p>
            <Projects projectsList={learningGames} showGithubNote={false} />
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
