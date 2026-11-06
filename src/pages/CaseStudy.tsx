import { useParams, Link, Navigate } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import ProblemOverview from '../components/ProblemOverview'
import ProcessDiagram from '../components/ProcessDiagram'
import UserFlowDiagram from '../components/UserFlowDiagram'
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 font-heading">{p.title}</h1>
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

      {/* Project metadata */}
      {(p.timeline || p.team || p.scope) && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-y border-white/[0.06]">
              {p.timeline && (
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Timeline</div>
                  <div className="text-sm text-zinc-300">{p.timeline}</div>
                </div>
              )}
              {p.team && (
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Team</div>
                  <div className="text-sm text-zinc-300">{p.team.join(', ')}</div>
                </div>
              )}
              {p.scope && (
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Scope</div>
                  <div className="text-sm text-zinc-300">{p.scope}</div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* Results strip */}
      <div className="border-y border-white/[0.04] bg-zinc-950/50 mb-16">
        <div className="max-w-3xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {p.results.map((r, i) => (
            <ScrollReveal key={r.label} delay={i * 0.05}>
              <div className="text-xl font-bold font-heading" style={{ color: p.color }}>{r.metric}</div>
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
      </div>

      {/* Problem Overview — native component */}
      {p.problemOverview && (
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <ScrollReveal>
            <ProblemOverview {...p.problemOverview} />
          </ScrollReveal>
        </div>
      )}

      {/* Process Diagram — native component */}
      {p.showProcess && (
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <ScrollReveal>
            <ProcessDiagram />
          </ScrollReveal>
        </div>
      )}

      {/* User Flows — native component */}
      {p.userFlows && p.userFlows.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <ScrollReveal>
            <UserFlowDiagram flows={p.userFlows} />
          </ScrollReveal>
        </div>
      )}

      {/* Detail Sections — structured text content */}
      {p.detailSections && p.detailSections.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 mb-16">
          {p.detailSections.map((section, si) => (
            <ScrollReveal key={section.heading} delay={si * 0.05}>
              <div className={si > 0 ? 'mt-10 pt-10 border-t border-white/[0.06]' : ''}>
                <h3 className="text-lg font-semibold text-zinc-200 mb-6">{section.heading}</h3>
                <div className={`grid gap-8 ${section.columns.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                  {section.columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="text-sm font-medium text-zinc-300 mb-3">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.items.map((item, ii) => (
                          <li key={ii} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                            <span className="text-zinc-600 mt-1 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Image Gallery — white background */}
      {p.gallery && p.gallery.length > 0 && (
        <div className="bg-white py-16 sm:py-20 mb-16">
          <div className="max-w-5xl mx-auto px-6">
            {p.gallery.map((section, si) => (
              <ScrollReveal key={section.label} delay={si * 0.05}>
                <div className={si > 0 ? 'mt-16' : ''}>
                  <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-400 mb-6">{section.label}</h3>
                  <div className={`grid gap-4 ${section.images.length === 1 ? 'grid-cols-1' : section.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {section.images.map((img, ii) => (
                      <div key={ii} className="group">
                        <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        </div>
                        {img.caption && (
                          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{img.caption}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* Before & After + Learned */}
      <div className="max-w-3xl mx-auto px-6">
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
              <Link key={o.id} to={`/work/${o.id}`}
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
