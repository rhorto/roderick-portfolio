import { useParams, Link, Navigate } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

export default function CaseStudy() {
  const { id } = useParams()
  const p = projects.find(p => p.id === id)
  if (!p) return <Navigate to="/work" replace />

  const other = projects.filter(x => x.id !== id).slice(0, 2)

  return (
    <PageWrap>
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/work" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5 mb-8">
            <span>←</span> All Work
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: `${p.color}15`, color: p.color }}>{p.company}</span>
            <span className="text-xs text-zinc-500">{p.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{p.title}</h1>
          <p className="text-sm text-indigo-400 font-medium mb-4">{p.role}</p>
          <p className="text-base text-zinc-400 leading-relaxed max-w-2xl">{p.desc}</p>
        </div>
      </section>

      {/* Hero visual */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="h-56 sm:h-72 rounded-2xl relative overflow-hidden">
          {p.image ? (
            <>
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(145deg, ${p.color}08, ${p.color}03)` }}>
              <span className="text-5xl font-bold tracking-wider" style={{ color: `${p.color}20` }}>{p.company.split(' ')[0].toUpperCase()}</span>
            </div>
          )}
        </div>
      </div>

      {/* Results strip */}
      <div className="border-y border-white/[0.04] bg-zinc-950/50 mb-16">
        <div className="max-w-3xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {p.results.map((r, i) => (
            <ScrollReveal key={r.label} delay={i * 0.05}>
              <div className="text-xl font-bold" style={{ color: p.color }}>{r.metric}</div>
              <div className="text-xs text-zinc-500 mt-1">{r.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Decision Stack */}
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>The Constraint</SectionLabel>
          <p className="text-base text-zinc-300 leading-relaxed mb-12">{p.constraint}</p>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>Options Considered</SectionLabel>
          <div className="space-y-3 mb-12">
            {p.options.map((o, i) => (
              <div key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                <span className="text-zinc-600 font-mono text-xs mt-0.5 flex-shrink-0">{i + 1}.</span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>The Bet I Made</SectionLabel>
          <p className="text-base text-zinc-300 leading-relaxed mb-12">{p.bet}</p>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>What I Shipped</SectionLabel>
          <p className="text-base text-zinc-300 leading-relaxed mb-12">{p.shipped}</p>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>Before & After</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-5">
              <span className="text-[10px] uppercase tracking-wider text-red-400 font-medium">Before</span>
              <p className="text-sm text-zinc-400 leading-relaxed mt-2">{p.before}</p>
            </div>
            <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] p-5">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">After</span>
              <p className="text-sm text-zinc-400 leading-relaxed mt-2">{p.after}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>What I Learned</SectionLabel>
          <p className="text-base text-zinc-300 leading-relaxed mb-12">{p.learned}</p>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>Tools & Technologies</SectionLabel>
          <div className="flex flex-wrap gap-2 mb-16">
            {p.tools.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionLabel>More Work</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-16">
            {other.map(o => (
              <Link key={o.id} to={`/work/${o.id}`} onClick={() => window.scrollTo(0, 0)}
                className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-5 hover:border-zinc-700 transition-all group">
                <h3 className="text-sm font-semibold group-hover:text-indigo-400 transition-colors">{o.title}</h3>
                <p className="text-xs text-zinc-500 mt-1">{o.company} · {o.year}</p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </PageWrap>
  )
}
