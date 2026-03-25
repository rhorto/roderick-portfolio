import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Handle hash scrolling when navigating back to home
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (isHome) {
      window.scrollTo(0, 0)
    }
  }, [location, isHome])

  return (
    <>
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'glass' : ''}`}>
        <div className="mx-auto max-w-[720px] flex items-center justify-between px-8 h-14">
          <Link to="/" className="text-base font-semibold gradient-text">RH</Link>
          <div className="hidden sm:flex items-center gap-7">
            {links.map(l => (
              isHome ? (
                <a key={l.href} href={l.href.replace('/', '')} className="text-[13px] text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors">{l.label}</a>
              ) : (
                <Link key={l.href} to={l.href} className="text-[13px] text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors">{l.label}</Link>
              )
            ))}
            {isHome ? (
              <a href="#contact" className="text-[13px] font-medium text-white bg-[var(--color-accent)] px-4 py-1.5 rounded-full hover:bg-[var(--color-accent-2)] transition-colors">Contact</a>
            ) : (
              <Link to="/#contact" className="text-[13px] font-medium text-white bg-[var(--color-accent)] px-4 py-1.5 rounded-full hover:bg-[var(--color-accent-2)] transition-colors">Contact</Link>
            )}
          </div>
          <button onClick={() => setOpen(true)} className="sm:hidden"><Menu size={20} className="text-[var(--color-text)]" /></button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--color-bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-6"><X size={22} className="text-[var(--color-text)]" /></button>
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link to={l.href} onClick={() => setOpen(false)} className="text-lg text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">{l.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link to="/#contact" onClick={() => setOpen(false)} className="text-sm bg-[var(--color-accent)] text-white px-6 py-2 rounded-full">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
