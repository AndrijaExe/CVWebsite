import { profile, contact, links } from '../data/content'

const Footer = () => (
  <footer className="footer">
    <div className="container">
  <p className="footer-mark">FILE CLOSED</p>
  <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName} — {contact.city}, {contact.country}</p>
  <p className="muted" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>Find me on
    {links.github && (
      <a className="link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.35-1.79-1.35-1.79-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1 .11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.57.12-3.28 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.71.25 2.97.12 3.28.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5"/>
        </svg>
      </a>
    )}
    {links.linkedin && (
      <a className="link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-4V8z"/>
        </svg>
      </a>
    )}
  </p>
    </div>
  </footer>
)

export default Footer
