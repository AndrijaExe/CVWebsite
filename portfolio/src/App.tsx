import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import WebCV from './pages/WebCV.tsx'
import Games from './pages/Games.tsx'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 260)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Router basename="/CVWebsite">
      <div className="app-root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<WebCV />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <button
          type="button"
          className={`scroll-top-btn${showScrollTop ? ' visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
        <Footer />
      </div>
    </Router>
  )
}

export default App
