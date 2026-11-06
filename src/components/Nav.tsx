import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { EMAIL } from './CopyEmail'

const links = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Résumé', to: '/resume' },
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

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 print:hidden ${
          scrolled ? 'bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]' : ''
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-10">
          <Link
            to="/"
            className="font-heading text-[15px] font-semibold text-zinc-100 hover:text-white transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
          >
            Roderick Horton
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                aria-current={location.pathname === l.to ? 'page' : undefined}
                className={`text-[13px] px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === l.to
                    ? 'text-white bg-white/[0.06]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="ml-3 inline-flex h-9 items-center rounded-lg border border-white/[0.12] px-4 text-[13px] font-medium text-zinc-200 transition-colors hover:border-white/[0.24] hover:bg-white/[0.04]"
            >
              Email
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="md:hidden -mr-2 flex h-10 w-10 items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <div className="space-y-1.5">
              <div className="h-[1.5px] w-5 bg-zinc-300" />
              <div className="h-[1.5px] w-3.5 bg-zinc-300" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-2xl md:hidden print:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-2xl text-white transition-colors hover:text-indigo-300"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <a
                href={`mailto:${EMAIL}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-indigo-400 px-7 py-3 text-base font-semibold text-zinc-950"
              >
                Email
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
