import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const items = [
  { label: 'Home', path: '/', keys: 'h' },
  { label: 'Work', path: '/work', keys: 'w' },
  { label: 'About', path: '/about', keys: 'a' },
  { label: 'Resume', path: '/resume', keys: 'r' },
  { label: 'AI SaaS Platform — Audiences247', path: '/work/audiences247', keys: '' },
  { label: '$50M Booking Platform — IHG', path: '/work/ihg', keys: '' },
  { label: 'Financial Center Apps — Bank of America', path: '/work/bofa', keys: '' },
  { label: 'Design System — Pfizer', path: '/work/pfizer', keys: '' },
  { label: 'Gate Agent — Delta', path: '/work/delta', keys: '' },
  { label: 'Drive Safe & Save — State Farm', path: '/work/statefarm', keys: '' },
  { label: 'Email → roderickhorton@gmail.com', path: 'mailto:roderickhorton@gmail.com', keys: '' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const nav = useNavigate()

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(o => !o); setQ('') }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const filtered = items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()))

  const go = (path: string) => {
    setOpen(false)
    if (path.startsWith('mailto:')) { window.location.href = path }
    else { nav(path); window.scrollTo(0, 0) }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] cmd-backdrop flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.96, y: -8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -8 }} transition={{ duration: 0.15 }}
            className="w-full max-w-md bg-zinc-900 border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-3 border-b border-zinc-800">
              <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Search pages..." className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none" />
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.map(i => (
                <button key={i.path} onClick={() => go(i.path)} className="w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white transition-colors flex items-center justify-between">
                  <span>{i.label}</span>
                  {i.keys && <kbd className="text-[10px] font-mono text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded">{i.keys}</kbd>}
                </button>
              ))}
              {filtered.length === 0 && <p className="px-4 py-6 text-sm text-zinc-500 text-center">No results</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
