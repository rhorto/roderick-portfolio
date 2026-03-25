import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-bold">What others <span className="gradient-text">say</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
              <span className="text-3xl gradient-text font-serif leading-none select-none">"</span>
              <p className="text-sm text-[var(--color-text-2)] leading-relaxed italic mt-2 mb-5">{t.quote}</p>
              <div>
                <span className="text-sm font-semibold">{t.name}</span>
                <p className="text-xs text-[var(--color-text-3)] mt-0.5">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
