import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'audiences247',
    title: 'AI SaaS Platform',
    company: 'Audiences247',
    year: '2024–Present',
    desc: 'Multi-tenant SaaS replacing $497/mo tools with voice AI, automated lead scoring, and intelligent outreach.',
    tags: ['AI Product Design', 'React/TS', 'Voice AI'],
    stats: [['70K+', 'Leads'], ['35–50%', 'Opens'], ['75%', 'Cost Cut']],
    color: '#6366f1',
  },
  {
    id: 'ihg',
    title: '$50M Booking Platform',
    company: 'IHG Hotels & Resorts',
    year: '2015–2020',
    desc: 'Attribute-based selling platform enabling guests to customize room features during booking.',
    tags: ['UX/UI', 'Research', 'Strategy'],
    stats: [['$50M', 'Revenue'], ['35%', 'Loyalty ↑'], ['25%', 'Bookings ↑']],
    color: '#10b981',
  },
  {
    id: 'pfizer',
    title: 'Enterprise Design System',
    company: 'Pfizer',
    year: '2022–2024',
    desc: 'Scalable design system with reusable tokens serving multiple healthcare products.',
    tags: ['Design Systems', 'Healthcare', 'Enterprise'],
    stats: [['40%', 'Less Redundancy'], ['Multi', 'Products']],
    color: '#0ea5e9',
  },
  {
    id: 'delta',
    title: 'Gate Agent Redesign',
    company: 'Delta Air Lines',
    year: '2010–2015',
    desc: 'Redesigned boarding application cutting gate times and improving operational efficiency.',
    tags: ['Enterprise UX', 'Operations', 'Mobile'],
    stats: [['15%', 'Faster'], ['+25%', 'App Usage'], ['Award', 'Won']],
    color: '#ef4444',
  },
  {
    id: 'statefarm',
    title: 'Drive Safe & Save App',
    company: 'State Farm',
    year: '2021–2022',
    desc: 'iOS and Android app redesign driving user retention and policyholder savings enrollment.',
    tags: ['Mobile UX', 'iOS', 'Android'],
    stats: [['+20%', 'Retention'], ['+15%', 'Enrollments']],
    color: '#f59e0b',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[720px] px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-14">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">Selected Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Products that <span className="gradient-text">ship & scale</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/case-study/${p.id}`}
                className="group block rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]/50 p-6 sm:p-7 hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition-all duration-300"
              >
                {/* Project image placeholder */}
                <div
                  className="h-32 sm:h-40 rounded-xl mb-5 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}06)` }}
                >
                  <span className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: `${p.color}50` }}>
                    {p.company}
                  </span>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-[15px] sm:text-base font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-[var(--color-text-3)] mt-0.5">
                      {p.company} · {p.year}
                    </p>
                  </div>
                  <ArrowUpRight size={14} className="text-[var(--color-text-3)] opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed mt-3 mb-4">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] px-2 py-[3px] rounded-full border border-[var(--color-line)] text-[var(--color-text-3)]">{t}</span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-[var(--color-line)]">
                  {p.stats.map(([val, label]) => (
                    <div key={label}>
                      <div className="text-[13px] font-semibold" style={{ color: p.color }}>{val}</div>
                      <div className="text-[10px] text-[var(--color-text-3)]">{label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
