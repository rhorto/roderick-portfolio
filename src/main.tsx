import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Easter egg
console.log(
  '%c👋 Hey there, curious one.',
  'font-size: 14px; font-weight: bold; color: #818cf8;'
)
console.log(
  '%cThis portfolio was designed and built by Roderick Horton.\nReact · TypeScript · Tailwind · Framer Motion\n\nLet\'s talk → roderickhorton@gmail.com',
  'font-size: 12px; color: #a1a1aa;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
