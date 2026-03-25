import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 border-y border-[var(--color-line)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Where I've <span className="gradient-text">shipped</span></h2>
        </motion.div>

        <div className="divide-y divide-[var(--color-line)]">
          {experiences.map((e, i) => (
            <motion.div
              key={`${e.company}-${e.period}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="py-8 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-semibold">{e.company}</h3>
                <span className="text-xs text-[var(--color-text-3)] font-mono">{e.period}</span>
              </div>
              <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{e.role}</p>
              <ul className="space-y-2">
                {e.highlights.map(h => (
                  <li key={h} className="text-sm text-[var(--color-text-2)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-line-2)]">
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
