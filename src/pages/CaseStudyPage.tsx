import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '../data/caseStudies'
import BeforeAfter from '../components/BeforeAfter'

const projectMeta: Record<string, { title: string; company: string; color: string }> = {
  audiences247: { title: 'AI SaaS Platform', company: 'Audiences247', color: '#6366f1' },
  ihg: { title: '$50M Booking Platform', company: 'IHG Hotels & Resorts', color: '#10b981' },
  pfizer: { title: 'Enterprise Design System', company: 'Pfizer', color: '#0ea5e9' },
  delta: { title: 'Gate Agent Redesign', company: 'Delta Air Lines', color: '#ef4444' },
  statefarm: { title: 'Drive Safe & Save App', company: 'State Farm', color: '#f59e0b' },
}

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>()
  const cs = caseStudies.find(c => c.id === id)
  const meta = id ? projectMeta[id] : undefined

  if (!cs || !meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--color-text-2)] mb-4">Case study not found.</p>
          <Link to="/" className="text-[var(--color-accent)] text-sm hover:underline">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-28">
      <div className="mx-auto max-w-[720px] px-8">
        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link to="/#work" className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-3)] hover:text-[var(--color-text)] transition-colors">
            <ArrowLeft size={14} /> Back to work
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="h-48 sm:h-56 rounded-2xl mb-6 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${meta.color}18, ${meta.color}06)` }}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: `${meta.color}60` }}>{meta.company}</div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{meta.title}</h1>
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-mono text-[var(--color-text-3)]">{cs.timeline}</span>
            <span className="text-[12px] text-[var(--color-text-3)]">{meta.company}</span>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">The Problem</h3>
          <p className="text-[14px] text-[var(--color-text-2)] leading-relaxed">{cs.problem}</p>
        </motion.div>

        {/* Process */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-4 tracking-wider uppercase">The Process</h3>
          <div className="space-y-3">
            {cs.process.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-[11px] font-mono font-semibold w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${meta.color}15`, color: meta.color }}>
                  {i + 1}
                </span>
                <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">The Solution</h3>
          <p className="text-[14px] text-[var(--color-text-2)] leading-relaxed">{cs.solution}</p>
        </motion.div>

        {/* Results */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-4 tracking-wider uppercase">Results</h3>
          <div className="grid grid-cols-2 gap-3">
            {cs.results.map(r => (
              <div key={r.value} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-4">
                <div className="text-lg font-bold" style={{ color: meta.color }}>{r.metric}</div>
                <div className="text-[12px] font-semibold text-[var(--color-text)] mt-0.5">{r.value}</div>
                <div className="text-[11px] text-[var(--color-text-3)] mt-1">{r.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before/After */}
        {cs.beforeAfter && (
          <div className="mb-14">
            <BeforeAfter before={cs.beforeAfter.before} after={cs.beforeAfter.after} caption={cs.beforeAfter.caption} />
          </div>
        )}

        {/* Tools */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-1.5">
            {cs.tools.map(t => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)]">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Back */}
        <Link to="/#work" className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-accent)] hover:underline">
          <ArrowLeft size={14} /> View all projects
        </Link>
      </div>
    </div>
  )
}
