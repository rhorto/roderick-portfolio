import { motion } from 'framer-motion'
import { Code, Palette, Cpu, Zap } from 'lucide-react'

const caps = [
  { icon: Cpu, label: 'AI Product Design', text: 'Voice AI, prompt engineering, conversational systems' },
  { icon: Code, label: 'Full-Stack Dev', text: 'React, TypeScript, Supabase, Stripe' },
  { icon: Palette, label: 'Design Systems', text: 'Component libraries, tokens, governance' },
  { icon: Zap, label: 'Automation', text: 'n8n workflows, API orchestration' },
]

const skills = [
  'React', 'TypeScript', 'Tailwind', 'Node.js', 'Supabase', 'Stripe',
  'Figma', 'n8n', 'Voice AI', 'Prompt Eng.', 'Gemini', 'Claude',
  'Design Systems', 'A/B Testing', 'CRO', 'WCAG',
]

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[720px] px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Designer who <span className="gradient-text">builds</span></h2>
          <div className="space-y-3 text-[13px] sm:text-sm text-[var(--color-text-2)] leading-relaxed max-w-lg">
            <p>20+ years shipping products at enterprise scale — Delta, IHG, Pfizer, State Farm — products used by millions.</p>
            <p>Today I design and build AI-native SaaS end-to-end. Production React. Voice AI systems. I don't hand off Figma files — I ship.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-16">
          {caps.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-4 sm:p-5 hover:border-[var(--color-line-2)] transition-colors">
              <c.icon size={15} className="text-[var(--color-accent)] mb-3" />
              <h3 className="text-[13px] font-semibold mb-1">{c.label}</h3>
              <p className="text-[11px] text-[var(--color-text-3)] leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="text-[12px] font-semibold text-[var(--color-text-2)] mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map(s => (
              <span key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
