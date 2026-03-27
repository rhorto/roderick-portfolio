import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]' : ''}`}>
        <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-0 hover:opacity-90 transition-opacity" aria-label="Home">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="flex-shrink-0">
              {/* Rounded square background */}
              <rect x="1" y="1" width="34" height="34" rx="9" fill="transparent" stroke="url(#logo-border)" strokeWidth="1.5" />
              {/* Accent corner — top-left gradient line */}
              <path d="M10 1 L1 1 Q1 1 1 10" stroke="url(#logo-accent)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* RH text */}
              <text x="18" y="23" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">RH</text>
              <defs>
                <linearGradient id="logo-border" x1="0" y1="0" x2="36" y2="36">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="logo-accent" x1="0" y1="0" x2="12" y2="12">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`text-[13px] px-4 py-2 rounded-lg transition-all duration-200 ${location.pathname === l.to ? 'text-white bg-white/[0.06]' : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/about#contact"
              className="text-[13px] font-medium text-white bg-indigo-500 hover:bg-indigo-400 ml-3 h-9 px-5 rounded-full inline-flex items-center transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden w-10 h-10 flex items-center justify-center">
            <div className="space-y-1.5">
              <div className="w-5 h-[1.5px] bg-zinc-300" />
              <div className="w-3.5 h-[1.5px] bg-zinc-300" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-zinc-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={l.to} className="text-2xl font-medium text-white hover:text-indigo-400 transition-colors">{l.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link to="/about#contact" className="text-base bg-indigo-500 text-white px-8 py-3 rounded-full">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
