import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[var(--color-bg-card)]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--color-accent)] mb-3">// Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've{' '}
            <span className="gradient-text">shipped</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--color-border)]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                    i === 0
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                      : 'border-[var(--color-border)] bg-[var(--color-bg)]'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-sm text-[var(--color-text-muted)]">{exp.period}</span>
                </div>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-3">
                  {exp.role}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-[var(--color-text-muted)] mt-1.5 w-1 h-1 rounded-full bg-[var(--color-text-muted)] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
