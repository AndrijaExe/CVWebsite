import { useEffect, useState } from 'react'
import { projects, links } from '../data/content'
import type { ProjectItem } from '../data/content'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const assetUrl = (src?: string) => {
  if (!src) return src as unknown as string
  const base = import.meta.env.BASE_URL || '/'
  return src.startsWith('/') ? base + src.slice(1) : src
}

const captionFromPath = (src: string) => {
  const filename = src.split('/').pop() || src
  const base = filename.replace(/\.[^/.]+$/, '')
  const pretty = base.replace(/[-_]/g, ' ')
  const table: Record<string, string> = {
    'AI that is chasing you': 'AI chasing the player',
    'Battery healt and time': 'Battery health & time HUD',
    'Clues that you must collect': 'Clues you must collect',
    'Main Menu': 'Main menu',
    'Pause Menu': 'Pause menu',
    'Settings Menu': 'Settings menu',
  }
  return table[pretty] || pretty
}

const iconForTech = (label: string) => {
  const l = label.toLowerCase()
  const svg = (path: string) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
      <path d={path} />
    </svg>
  )
  if (l.includes('react')) return svg('M12 2c2.2 0 4 .8 4 1.8S14.2 5.6 12 5.6 8 4.8 8 3.8 9.8 2 12 2zm0 16.4c2.2 0 4 .8 4 1.8s-1.8 1.8-4 1.8-4-.8-4-1.8 1.8-1.8 4-1.8zM3.8 7c1.1-1.9 2.6-3.2 3.4-2.7.8.5.4 2.3-.7 4.2C5.4 10.4 4 11.7 3.2 11.2c-.8-.5-.5-2.3.6-4.2zm16.9 0c1.1 1.9 1.4 3.7.6 4.2-.8.5-2.2-.8-3.3-2.7-1.1-1.9-1.5-3.7-.7-4.2.8-.5 2.3.8 3.4 2.7zM3.8 17c1.1 1.9 2.6 3.2 3.4 2.7.8-.5.4-2.3-.7-4.2-1.1-1.9-2.5-3.2-3.3-2.7-.8.5-.5 2.3.6 4.2zm16.9 0c1.1-1.9 1.4-3.7.6-4.2-.8-.5-2.2.8-3.3 2.7-1.1 1.9-1.5 3.7-.7 4.2.8.5 2.3-.8 3.4-2.7zM12 8.5c1.9 0 3.5 1.1 3.5 2.5S13.9 13.5 12 13.5 8.5 12.4 8.5 11 10.1 8.5 12 8.5z')
  if (l.includes('typescript') || l === 'ts') return svg('M3 3h18v18H3V3zm5 5h8v2h-3v8h-2v-8H8V8z')
  if (l.includes('vite')) return svg('M3 2l9 20 9-20-9 5-9-5z')
  if (l.includes('unreal')) return svg('M12 2l9 5v10l-9 5-9-5V7l9-5zm3 6l-6 8h2l6-8h-2z')
  if (l.includes('blueprints')) return svg('M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z')
  if (l.includes('windows')) return svg('M3 5l8-2v8H3V5zm10-2l8-2v10h-8V3zM3 13h8v8L3 19v-6zm10 0h8v6l-8 2v-8z')
  if (l.includes('inno')) return svg('M5 3h14v4H5V3zm3 6h8v12H8V9z')
  return svg('M12 2a10 10 0 100 20 10 10 0 000-20z')
}

const Projects = ({ projectsList = projects }: { projectsList?: ProjectItem[] }) => {
  const [lightbox, setLightbox] = useState<null | { items: { src: string; caption: string }[]; index: number; project: string }>(null)
  const projectsAnimation = useScrollAnimation({ threshold: 0.1 })

  const close = () => setLightbox(null)
  const prev = () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index - 1 + lb.items.length) % lb.items.length } : lb))
  const next = () => setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.items.length } : lb))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <>
      <div 
        ref={projectsAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`projects-list stagger-children ${projectsAnimation.isVisible ? 'visible' : ''}`}
      >
        {projectsList.map((p) => (
            <article key={p.name} className={`card project-item${p.featured ? ' featured' : ''}`}>
              <header>
                <h3 style={{ marginTop: 0 }}>{p.name}</h3>
              </header>
              {p.description && <p>{p.description}</p>}
              {p.highlights?.length ? (
                <ul className="skill-list" style={{ marginTop: '0.5rem' }}>
                  {p.highlights.map((h) => (
                    <li key={h} className="muted">• {h}</li>
                  ))}
                </ul>
              ) : null}

              {p.videoUrl && (
                <div className="video-wrap">
                  <video controls muted preload="metadata" poster={assetUrl(p.images?.[0])} className={p.featured ? 'featured-video' : undefined}>
                    <source src={assetUrl(p.videoUrl)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {p.images?.length ? (
                <div className="gallery-row" role="group" aria-label={`${p.name} screenshots`}>
                  {p.images.map((src, idx) => (
                    <figure key={src} className="shot">
                      <button
                        className="image-button"
                        onClick={() => setLightbox({
                          items: p.images!.map((img) => ({ src: assetUrl(img), caption: captionFromPath(img) })),
                          index: idx,
                          project: p.name,
                        })}
                        aria-label={`Open image: ${captionFromPath(src)}`}
                      >
                        <img src={assetUrl(src)} alt={`${p.name} — ${captionFromPath(src)}`} />
                      </button>
                      <figcaption className="muted">{captionFromPath(src)}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}

              {p.tags?.length ? (
                <ul className="skills" aria-label="Technologies" style={{ marginTop: '0.25rem' }}>
                  {p.tags.map((t) => (
                    <li key={t} className="badge">
                      <span className="tech-icon" aria-hidden="true">{iconForTech(t)}</span>
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}

              {(p.demoUrl || p.codeUrl || p.installerUrl) && (
                <div className="card-actions">
                  {p.demoUrl && <a className="btn" href={p.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>}
                  {p.codeUrl && <a className="btn outline" href={p.codeUrl} target="_blank" rel="noreferrer">Source</a>}
                  {p.installerUrl && <a className="btn" href={p.installerUrl} target="_blank" rel="noreferrer">Download</a>}
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="muted" style={{ marginTop: '0.75rem' }}>
          For more projects, visit my GitHub profile:
          {' '}<a href={links.github} target="_blank" rel="noreferrer">{links.github}</a>
        </p>

        {lightbox && (
          <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
            <div className="lightbox">
              <button className="lightbox-close" aria-label="Close" onClick={close}>×</button>
              <div className="lightbox-head">
                <h4>{lightbox.items[lightbox.index].caption}</h4>
              </div>
              <div className="lightbox-body">
                <button className="lightbox-nav left" onClick={prev} aria-label="Previous">‹</button>
                <img src={lightbox.items[lightbox.index].src} alt={`${lightbox.project} — ${lightbox.items[lightbox.index].caption}`} />
                <button className="lightbox-nav right" onClick={next} aria-label="Next">›</button>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default Projects
