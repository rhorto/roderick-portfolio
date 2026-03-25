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
    desc: 'Attribute-based selling enabling guests to customize room features during booking.',
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
    stats: [['-15%', 'Board Time'], ['+25%', 'App Usage']],
    color: '#ef4444',
  },
  {
    id: 'statefarm',
    title: 'Drive Safe & Save App',
    company: 'State Farm',
    year: '2021–2022',
    desc: 'iOS and Android app redesign driving user retention and policyholder savings.',
    tags: ['Mobile UX', 'iOS', 'Android'],
    stats: [['+20%', 'Retention'], ['+15%', 'Enrollments']],
    color: '#f59e0b',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Selected Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Products that <span className="gradient-text">ship & scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                to={`/case-study/${p.id}`}
                className="group block h-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface-2)] transition-all duration-300"
              >
                {/* Image placeholder */}
                <div
                  className="h-40 sm:h-48 rounded-t-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${p.color}12, ${p.color}05)` }}
                >
                  <span className="text-lg font-semibold tracking-wide" style={{ color: `${p.color}40` }}>
                    {p.company}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={16} className="text-[var(--color-text-3)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-[var(--color-text-3)] mb-3">{p.company} · {p.year}</p>
                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)]">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4 border-t border-[var(--color-line)]">
                    {p.stats.map(([val, label]) => (
                      <div key={label}>
                        <div className="text-sm font-semibold" style={{ color: p.color }}>{val}</div>
                        <div className="text-xs text-[var(--color-text-3)]">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
