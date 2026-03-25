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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(99,102,241,0.05)]">
        {/* Project image placeholder */}
        <div
          className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-bg-hover)] to-[var(--color-bg)]"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.number}
            </div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: `${project.color}15`, color: project.color }}
            >
              {project.industry}
            </span>
            <span className="text-xs text-[var(--color-text-muted)]">{project.duration}</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">{project.company}</p>
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {project.description}
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-bg)]"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-border)]">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-lg font-bold" style={{ color: project.color }}>
                  {metric.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
