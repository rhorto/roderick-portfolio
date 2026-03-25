import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const NavLink = ({ href, label }: { href: string; label: string }) =>
    isHome ? (
      <a href={href} className="text-sm text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors">{label}</a>
    ) : (
      <Link to={`/${href}`} className="text-sm text-[var(--color-text-2)] hover:text-[var(--color-text)] transition-colors">{label}</Link>
    )

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-[var(--color-line)]' : ''
      }`}>
        <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold gradient-text">RH</Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => <NavLink key={l.href} {...l} />)}
            {isHome ? (
              <a href="#contact" className="text-sm font-medium text-white bg-[var(--color-accent)] h-9 px-5 rounded-full inline-flex items-center hover:bg-[var(--color-accent-2)] transition-colors">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="text-sm font-medium text-white bg-[var(--color-accent)] h-9 px-5 rounded-full inline-flex items-center hover:bg-[var(--color-accent-2)] transition-colors">
                Contact
              </Link>
            )}
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden h-11 w-11 flex items-center justify-center">
            <Menu size={22} className="text-[var(--color-text)]" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 h-11 w-11 flex items-center justify-center">
              <X size={24} className="text-[var(--color-text)]" />
            </button>
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="text-xl text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">{l.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
