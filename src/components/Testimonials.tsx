import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-[720px] px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-bold">What others <span className="gradient-text">say</span></h2>
        </motion.div>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-6"
            >
              <span className="text-3xl gradient-text font-serif leading-none select-none">"</span>
              <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed italic mt-1 mb-4">
                {t.quote}
              </p>
              <div>
                <span className="text-[13px] font-semibold text-[var(--color-text)]">{t.name}</span>
                <span className="text-[11px] text-[var(--color-text-3)] ml-2">{t.role}, {t.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
