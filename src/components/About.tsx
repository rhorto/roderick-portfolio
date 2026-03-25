import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Zap } from 'lucide-react'

const caps = [
  { icon: Cpu, label: 'AI Product Design', text: 'Voice AI, prompt engineering, conversational systems' },
  { icon: Code, label: 'Full-Stack Dev', text: 'React, TypeScript, Supabase, Stripe — production code' },
  { icon: Palette, label: 'Design Systems', text: 'Component libraries, tokens, governance at scale' },
  { icon: Zap, label: 'Automation', text: 'n8n workflows, API orchestration, pipeline design' },
]

const skills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'Stripe',
  'Figma', 'n8n', 'Voice AI', 'Prompt Engineering', 'Gemini', 'Claude',
  'Design Systems', 'A/B Testing', 'CRO', 'WCAG', 'User Research', 'Prototyping',
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Designer who <span className="gradient-text">builds</span></h2>
          <div className="max-w-prose space-y-4 text-base text-[var(--color-text-2)] leading-relaxed">
            <p>20+ years shipping products at enterprise scale — Delta, IHG, Pfizer, State Farm — products used by millions of people.</p>
            <p>Today I design and build AI-native SaaS products end-to-end. I write production React and TypeScript. I architect voice AI systems and automation pipelines. I don't hand off Figma files — I ship.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {caps.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 hover:border-[var(--color-line-2)] transition-colors">
              <c.icon size={18} className="text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-semibold mb-1">{c.label}</h3>
              <p className="text-sm text-[var(--color-text-3)] leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-sm font-semibold mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
