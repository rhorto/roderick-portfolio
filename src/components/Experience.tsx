import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[720px] px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Where I've <span className="gradient-text">shipped</span></h2>
        </motion.div>

        <div className="space-y-0 border-t border-[var(--color-line)]">
          {experiences.map((e, i) => (
            <motion.div
              key={`${e.company}-${e.period}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="py-7 border-b border-[var(--color-line)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1.5">
                <h3 className="text-[14px] sm:text-[15px] font-semibold">{e.company}</h3>
                <span className="text-[11px] font-mono text-[var(--color-text-3)]">{e.period}</span>
              </div>
              <p className="text-[var(--color-accent)] text-[12px] font-medium mb-3">{e.role}</p>
              <ul className="space-y-1.5">
                {e.highlights.map(h => (
                  <li key={h} className="text-[12px] sm:text-[13px] text-[var(--color-text-2)] leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-text-3)]">
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
