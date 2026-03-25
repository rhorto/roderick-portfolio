import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { ArrowUpRight } from 'lucide-react'

export default function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[960px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-2 tracking-wider uppercase">Selected Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Products that <span className="gradient-text">ship & scale</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group border border-[var(--color-line)] rounded-xl p-5 sm:p-6 hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${p.color}12`, color: p.color }}>
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold group-hover:text-[var(--color-accent)] transition-colors">{p.title}</h3>
                    <span className="text-[11px] text-[var(--color-text-3)]">{p.company} · {p.duration}</span>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-[var(--color-text-3)] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
              </div>

              {/* Description */}
              <p className="text-[13px] sm:text-sm text-[var(--color-text-2)] leading-relaxed mb-4 max-w-2xl">{p.description}</p>

              {/* Tags + Metrics */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {p.categories.map(c => (
                  <span key={c} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)]">{c}</span>
                ))}
              </div>

              <div className="flex gap-6 sm:gap-10 pt-3 border-t border-[var(--color-line)]">
                {p.metrics.map(m => (
                  <div key={m.label}>
                    <span className="text-sm font-semibold" style={{ color: p.color }}>{m.value}</span>
                    <span className="block text-[10px] text-[var(--color-text-3)]">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
