import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(99,102,241,0.08)]">
          {/* Project image placeholder */}
          <div
            className="relative aspect-[16/10] rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold"
                style={{ backgroundColor: `${project.color}15`, color: project.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.number}
              </motion.div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <span className="text-white text-sm font-medium flex items-center gap-1">
                View Case Study <ArrowUpRight size={14} />
              </span>
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
              <h3 className="text-2xl font-bold mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {project.title}
              </h3>
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
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-bg)] group-hover:border-[var(--color-border-hover)] transition-colors"
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
    </motion.div>
  )
}
