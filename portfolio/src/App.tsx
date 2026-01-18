import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import WebCV from './pages/WebCV.tsx'
import Games from './pages/Games.tsx'

function App() {
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
        <Footer />
      </div>
    </Router>
  )
}

export default App
