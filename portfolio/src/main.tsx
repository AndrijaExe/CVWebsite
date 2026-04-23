import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const search = window.location.search
if (search.startsWith('?/')) {
  const decoded = search
    .slice(2)
    .replace(/~and~/g, '&')
  const hash = window.location.hash || ''
  const targetPath = `${window.location.pathname}${decoded ? `?${decoded}` : ''}${hash}`
  window.history.replaceState(null, '', targetPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
