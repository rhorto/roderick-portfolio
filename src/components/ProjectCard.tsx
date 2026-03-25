import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <div className="p-5 sm:p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-400 hover:shadow-[0_0_60px_rgba(99,102,241,0.05)]">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0"
              style={{ backgroundColor: `${project.color}12`, color: project.color }}
            >
              {project.number}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-[var(--color-text-muted)]">{project.company}</span>
                <span className="text-[var(--color-border)]">&middot;</span>
                <span className="text-xs text-[var(--color-text-muted)]">{project.duration}</span>
              </div>
            </div>
          </div>
          <ArrowUpRight size={16} className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-3 pt-4 border-t border-[var(--color-border)]">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-sm sm:text-base font-bold" style={{ color: project.color }}>
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--color-text-muted)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
