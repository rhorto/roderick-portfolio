import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import GlowCard from '../components/GlowCard'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <PageWrap>
      <section className="pt-32 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-heading">Selected <span className="text-gradient">projects</span></h2>
            <p className="text-base text-zinc-400 max-w-lg mb-14">Products I've designed and shipped across Fortune 500 enterprises and AI-native startups.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <Link to={`/work/${p.id}`}>
                  <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 hover:border-zinc-700/80 transition-all duration-300 group h-full">
                    <div className="h-48 rounded-t-xl relative overflow-hidden">
                      {p.image ? (
                        <>
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <span className="text-[10px] uppercase tracking-[0.15em] font-medium px-2 py-0.5 rounded-full" style={{ background: `${p.color}20`, color: p.color }}>{p.company}</span>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(145deg, ${p.color}08, ${p.color}03)` }}>
                          <span className="text-3xl font-bold tracking-wider" style={{ color: `${p.color}25` }}>{p.company.split(' ')[0].toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-[15px] font-semibold group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                      <p className="text-xs text-zinc-500 mt-1 mb-3">{p.role} · {p.year}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
                      </div>
                      <div className="flex gap-6 pt-4 border-t border-zinc-800/60">
                        {p.stats.slice(0, 3).map(([v, l]) => (
                          <div key={l}><span className="text-sm font-semibold" style={{ color: p.color }}>{v}</span><span className="block text-[10px] text-zinc-500">{l}</span></div>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  )
}
