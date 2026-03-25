import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Cpu,
    title: 'AI Product Design',
    description: 'Voice AI agents, conversational systems, AI-powered personalization, prompt engineering, and intelligent automation design.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'React, TypeScript, Tailwind CSS, Supabase, Node.js, Stripe — I ship production code, not just mockups.',
  },
  {
    icon: Palette,
    title: 'Enterprise Design Systems',
    description: 'Scalable component libraries, design tokens, and governance frameworks for multi-product organizations.',
  },
  {
    icon: Zap,
    title: 'Automation Architecture',
    description: 'n8n workflow design, API orchestration, and intelligent pipeline systems replacing expensive SaaS tools.',
  },
]

const skills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Supabase', 'Stripe', 'Figma', 'n8n',
  'Voice AI', 'Prompt Engineering', 'Gemini', 'Claude',
  'Design Systems', 'A/B Testing', 'CRO', 'Accessibility',
  'User Research', 'Prototyping', 'Data Visualization', 'Multi-Tenant SaaS',
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-[var(--color-accent)] mb-3">// About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designer who{' '}
            <span className="gradient-text">builds</span>
          </h2>
          <div className="max-w-2xl space-y-4 text-lg text-[var(--color-text-secondary)]">
            <p>
              I'm an AI Product Designer with 20+ years of experience shipping products
              at enterprise scale. I've designed for Delta Air Lines, IHG Hotels, Pfizer,
              and State Farm — products used by millions.
            </p>
            <p>
              Today, I design and build AI-native SaaS products end-to-end. I write production
              React and TypeScript. I architect voice AI systems and automation pipelines. I don't
              hand off Figma files — I ship.
            </p>
            <p>
              I believe the best AI products come from designers who understand the full stack,
              from the prompt to the pixel.
            </p>
          </div>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                <cap.icon size={20} className="text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 cursor-default"
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
