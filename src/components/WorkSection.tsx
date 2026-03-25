import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--color-accent)] mb-3">// Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Products that{' '}
            <span className="gradient-text">ship & scale</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
            From Fortune 500 enterprises to AI-native startups — designing products
            that generate measurable business outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
