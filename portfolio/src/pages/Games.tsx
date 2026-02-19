import Projects from '../components/Projects'
import { gameProjects } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Games = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const descAnimation = useScrollAnimation({ threshold: 0.2, delay: 50 })
  const courseTitleAnimation = useScrollAnimation({ threshold: 0.2 })

  // Separate Awaken from course games
  const awakenGame = gameProjects.find(game => game.name.includes('Awaken'))
  const courseGames = gameProjects.filter(game => !game.name.includes('Awaken'))

  return (
    <section id="games" className="section" style={{ paddingTop: '3rem' }}>
      <div className="container">
        <h2 
          ref={titleAnimation.ref as React.RefObject<HTMLHeadingElement>}
          className={`animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center' }}
        >
          Game Development Projects
        </h2>
        <p 
          ref={descAnimation.ref as React.RefObject<HTMLParagraphElement>}
          className={`animate-on-scroll ${descAnimation.isVisible ? 'visible' : ''}`}
          style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', textAlign: 'center' }}
        >
          Here I showcase some of the game development projects I am working on or have worked on, demonstrating my skills in Unreal Engine, C++, and game design.
        </p>
        
        {/* Awaken - standalone project */}
        {awakenGame && (
          <div style={{ marginBottom: '3rem' }}>
            <Projects projectsList={[awakenGame]} />
          </div>
        )}
        
        {/* Course games section */}
        {courseGames.length > 0 && (
          <>
            <h3 
              ref={courseTitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginTop: '3rem', marginBottom: '1rem', textAlign: 'center' }}
            >
              Unreal Engine C++ Course Projects
            </h3>
            <p 
              className={`muted animate-on-scroll ${courseTitleAnimation.isVisible ? 'visible' : ''}`}
              style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}
            >
              The following games were created following the Udemy course: <strong>"Unreal Engine 5 C++ Game Development (Fully Updated in 5.6)"</strong> by GameDev.tv, 
              officially verified by Epic Games. These projects demonstrate C++ programming, game mechanics implementation, and Unreal Engine 5 development skills.
            </p>
            <Projects projectsList={courseGames} />
          </>
        )}
      </div>
    </section>
  )
}

export default Games
