import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 bg-[var(--color-bg-card)]/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-mono text-[var(--color-accent)] mb-3">// Experience</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Where I've{' '}
            <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-[var(--color-border)] py-8 sm:py-10 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg sm:text-xl font-bold">{exp.company}</h3>
                <span className="text-xs text-[var(--color-text-muted)] font-mono">{exp.period}</span>
              </div>

              <p className="text-[var(--color-accent)] text-sm font-medium mb-4">
                {exp.role}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-[var(--color-text-secondary)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-border)]"
                  >
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
