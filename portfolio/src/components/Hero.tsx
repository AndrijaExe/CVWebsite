import { Link } from 'react-router-dom'
import { profile as me, links } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useTypingEffect } from '../hooks/useTypingEffect'

const base = import.meta.env.BASE_URL || '/'
const avatar = links.github ? `${links.github}.png` : `${base}vite.svg`

const Hero = () => {
  const avatarAnimation = useScrollAnimation({ threshold: 0.3 })
  const textAnimation = useScrollAnimation({ threshold: 0.3, delay: 100 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3, delay: 200 })
  
  const typingText = useTypingEffect({
    words: [
      'Full Stack Developer',
      'Game Developer',
      'Software Engineer',
      'Unreal Engine Developer',
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
    mistakeChance: 0.15, // 15% chance to make a typing mistake
  })

  return (
    <section id="hero" className="section hero">
      <div className="container hero-inner">
        <img
          ref={avatarAnimation.ref as React.RefObject<HTMLImageElement>}
          className={`avatar scale-in ${avatarAnimation.isVisible ? 'visible' : ''}`}
          src={avatar}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${base}vite.svg` }}
          alt={`Profile — ${me.firstName} ${me.lastName}`}
        />
          <div className="hero-text">
            <p className="hero-kicker">Personnel file · Novi Sad</p>
            <h1
              ref={textAnimation.ref as React.RefObject<HTMLHeadingElement>}
              className={`slide-left ${textAnimation.isVisible ? 'visible' : ''}`}
            >
              <span className="hero-first">{me.firstName}</span>
              <span className="hero-last">{me.lastName}</span>
            </h1>
            <p className={`hero-typing slide-left ${textAnimation.isVisible ? 'visible' : ''}`}>
              {typingText}<span className="typing-cursor">|</span>
            </p>
            <p className={`slide-left ${textAnimation.isVisible ? 'visible' : ''}`}>
              {me.headline}
            </p>
          <div 
            ref={ctaAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`hero-ctas stagger-children ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <Link className="btn primary" to="/games#loop9">Loop 9</Link>
            <a className="btn" href="#projects">See projects</a>
            <a className="btn" href="#contact">Contact me</a>
            {links.github && <a className="btn outline" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
            {links.linkedin && <a className="btn outline" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            <a className="btn outline" href={`${base}cv.pdf`} download="Andrija_Stanisic_FullStack.pdf">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
