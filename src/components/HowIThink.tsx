import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { articles } from '../data/articles'

export default function HowIThink() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Perspectives</p>
          <h2 className="text-2xl sm:text-3xl font-bold">How I <span className="gradient-text">think</span></h2>
        </motion.div>

        <div className="max-w-2xl space-y-3">
          {articles.map((a, i) => {
            const isOpen = open === i
            return (
              <motion.div key={a.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-[var(--color-surface-2)] transition-colors">
                  <div>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-line)] text-[var(--color-accent)]">{a.tag}</span>
                    <h3 className="text-sm font-semibold mt-2">{a.title}</h3>
                    {!isOpen && <p className="text-sm text-[var(--color-text-3)] mt-1 line-clamp-2">{a.content.slice(0, 100)}...</p>}
                  </div>
                  <ChevronDown size={16} className={`text-[var(--color-text-3)] flex-shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                      className="overflow-hidden">
                      <p className="text-sm text-[var(--color-text-2)] leading-relaxed px-5 pb-5">{a.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
