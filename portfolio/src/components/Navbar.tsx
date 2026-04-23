import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/content'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container">
        <Link className="brand" to="/">{profile.firstName} {profile.lastName}</Link>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={open ? 'open' : undefined} onClick={() => setOpen(false)}>
          <li><Link to="/">Web Development</Link></li>
          <li><a href={`${import.meta.env.BASE_URL}games#unreal`}>Unreal Games</a></li>
          <li><a href={`${import.meta.env.BASE_URL}games#unity`}>Unity Games</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
