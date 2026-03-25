import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Cpu,
    title: 'AI Product Design',
    description: 'Voice AI agents, conversational systems, and prompt engineering.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'React, TypeScript, Supabase, Stripe — production code, not mockups.',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Scalable component libraries and design tokens for enterprise.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'n8n workflows and API pipelines replacing expensive SaaS tools.',
  },
]

const skills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Supabase', 'Stripe', 'Figma', 'n8n',
  'Voice AI', 'Prompt Engineering', 'Gemini', 'Claude',
  'Design Systems', 'A/B Testing', 'CRO', 'Accessibility',
  'User Research', 'Prototyping', 'Data Viz', 'SaaS',
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <p className="text-xs sm:text-sm font-mono text-[var(--color-accent)] mb-3">// About</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Designer who{' '}
            <span className="gradient-text">builds</span>
          </h2>
          <div className="max-w-lg space-y-4 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              20+ years shipping products at enterprise scale — Delta, IHG, Pfizer,
              State Farm — products used by millions.
            </p>
            <p>
              Today I design and build AI-native SaaS products end-to-end.
              I write production React. I architect voice AI systems.
              I don't hand off Figma files — I ship.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-4 sm:p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-300"
            >
              <cap.icon size={18} className="text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1">{cap.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm sm:text-base font-semibold mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
