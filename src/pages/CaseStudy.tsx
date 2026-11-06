import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import UserFlowDiagram from '../components/UserFlowDiagram'
import { projects, nextProject } from '../data/projects'

const ease = [0.25, 0.1, 0.25, 1] as const

function Label({ children }: { children: React.ReactNode }) {
  return <h3 className="text-label uppercase text-zinc-400 mb-4">{children}</h3>
}

export default function CaseStudy() {
  const { id } = useParams()
  const p = projects.find((x) => x.id === id)
  if (!p) return <Navigate to="/work" replace />

  const next = nextProject(p.id)

  const meta: [string, string | undefined][] = [
    ['Role', p.role],
    ['Team', p.team?.join(', ')],
    ['Timeline', p.timeline],
    ['Scope', p.scope],
  ]

  return (
    <PageWrap>
      <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-28">
        <Link
          to="/work"
          className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          <span aria-hidden>←</span> All work
        </Link>
      </div>

      {/* Header: rail + body */}
      <header className="mx-auto max-w-6xl px-6 lg:px-10 pt-10 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
          <div className="lg:col-span-3">
            <dl className="space-y-5">
              {meta
                .filter(([, v]) => Boolean(v))
                .map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-label uppercase text-zinc-400 mb-1">{k}</dt>
                    <dd className="text-sm text-zinc-200 leading-relaxed">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>

          <div className="lg:col-span-9">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} aria-hidden />
              <span className="text-label uppercase text-zinc-400">
                {p.company} · {p.year}
              </span>
            </div>
            <h1 className="text-h1 font-heading text-zinc-50 mb-5 max-w-[22ch]">{p.title}</h1>
            <p className="text-lead text-zinc-300 max-w-[58ch]">{p.desc}</p>
          </div>
        </div>
      </header>

      {/* Hero artifact */}
      {p.image && (
        <div className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-zinc-900">
            <img
              src={p.image}
              alt={`${p.company} — ${p.title}`}
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Metric band — numbers only */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 border-y border-white/[0.06] py-8">
          {p.results.map((r) => (
            <div key={r.label}>
              <div className="text-metric font-heading text-zinc-100 tabular-nums">{r.metric}</div>
              <div className="text-[13px] text-zinc-400 mt-2 max-w-[20ch]">{r.label}</div>
            </div>
          ))}
        </div>

        {p.outcomes && p.outcomes.length > 0 && (
          <div className="mt-8 max-w-[65ch]">
            <Label>Outcomes</Label>
            <ul className="space-y-2">
              {p.outcomes.map((o) => (
                <li key={o} className="text-zinc-400 leading-relaxed flex gap-2">
                  <span aria-hidden className="text-zinc-600">
                    ·
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* The decision */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-label uppercase text-zinc-400">The decision</p>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <ScrollReveal>
              <Label>The constraint</Label>
              <p className="text-lead text-zinc-200 max-w-[62ch]">{p.constraint}</p>
            </ScrollReveal>

            <ScrollReveal>
              <Label>Options considered</Label>
              <ol className="border-t border-white/[0.06]">
                {p.options.map((option, i) => {
                  const isChosen = i + 1 === p.chosen
                  const [main, reason] = option.split(' — ')
                  return (
                    <li
                      key={i}
                      className={`relative grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-5 border-b border-white/[0.06] ${
                        isChosen ? 'bg-indigo-400/[0.05] pl-4' : 'opacity-60'
                      }`}
                    >
                      {isChosen && (
                        <motion.span
                          aria-hidden
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 0.45, ease }}
                          className="absolute left-0 top-0 h-full w-0.5 bg-indigo-400 origin-top"
                        />
                      )}
                      <span className="sm:col-span-1 text-label uppercase tabular-nums text-zinc-400">
                        0{i + 1}
                      </span>
                      <div className="sm:col-span-8">
                        <p className={isChosen ? 'text-zinc-100' : 'text-zinc-400'}>{main}</p>
                        {reason && <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">{reason}</p>}
                      </div>
                      <span
                        className={`sm:col-span-3 sm:text-right text-label uppercase ${
                          isChosen ? 'text-indigo-300' : 'text-zinc-500'
                        }`}
                      >
                        {isChosen ? 'Chosen' : 'Not chosen'}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </ScrollReveal>

            <ScrollReveal>
              <Label>The bet I made</Label>
              <p className="text-quote font-heading text-zinc-100 max-w-[34ch]">{p.bet}</p>
            </ScrollReveal>

            <ScrollReveal>
              <Label>What I shipped</Label>
              <p className="text-zinc-300 leading-relaxed max-w-[65ch]">{p.shipped}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* User flows */}
      {p.userFlows && p.userFlows.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
          <ScrollReveal>
            <UserFlowDiagram flows={p.userFlows} />
          </ScrollReveal>
        </section>
      )}

      {/* Detail sections */}
      {p.detailSections && p.detailSections.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
          {p.detailSections.map((section) => (
            <ScrollReveal key={section.heading}>
              <div className="border-t border-white/[0.06] pt-8 mb-8">
                <h3 className="text-h3 font-heading text-zinc-100 mb-6">{section.heading}</h3>
                <div
                  className={`grid gap-8 ${
                    section.columns.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                  }`}
                >
                  {section.columns.map((col) => (
                    <div key={col.title}>
                      <h4 className="text-label uppercase text-zinc-400 mb-3">{col.title}</h4>
                      <ul className="space-y-2">
                        {col.items.map((item, ii) => (
                          <li key={ii} className="text-zinc-400 leading-relaxed flex gap-2">
                            <span aria-hidden className="text-zinc-600">
                              ·
                            </span>
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
        </section>
      )}

      {/* Process evidence — per-figure plates on the dark page */}
      {p.gallery && p.gallery.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
          <h2 className="text-label uppercase text-zinc-400 mb-8">Process &amp; evidence</h2>
          {p.gallery.map((section) => (
            <ScrollReveal key={section.label}>
              <div className="mb-14">
                <h3 className="text-h3 font-heading text-zinc-100 mb-6">{section.label}</h3>
                <div
                  className={`grid gap-5 ${
                    section.images.length === 1
                      ? 'grid-cols-1'
                      : section.images.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {section.images.map((img, ii) => (
                    <figure key={ii}>
                      <div className="rounded-xl bg-zinc-100 p-3 sm:p-5 border border-white/[0.06]">
                        <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-md" />
                      </div>
                      {img.caption && <figcaption className="text-[13px] text-zinc-400 mt-2 leading-relaxed">{img.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>
      )}

      {/* Before / After */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
        <ScrollReveal>
          <Label>Before → After</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/[0.06] pt-6">
            <div>
              <h4 className="text-label uppercase text-zinc-400 mb-2">Before</h4>
              <p className="text-zinc-400 leading-relaxed">{p.before}</p>
            </div>
            <div>
              <h4 className="text-label uppercase text-indigo-300 mb-2">After</h4>
              <p className="text-zinc-200 leading-relaxed">{p.after}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Reflection */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
        <ScrollReveal>
          <Label>What I'd do differently</Label>
          <p className="text-quote font-heading text-zinc-100 max-w-[40ch]">{p.learned}</p>
        </ScrollReveal>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 mb-16">
        <Label>Tools &amp; technologies</Label>
        <div className="flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <span key={t} className="text-[13px] px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-400">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Next project */}
      {next && (
        <section className="border-t border-white/[0.06]">
          <Link
            to={`/work/${next.id}`}
            className="group mx-auto max-w-6xl px-6 lg:px-10 py-14 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
          >
            <span className="text-label uppercase text-zinc-400">Next project</span>
            <span className="text-h2 font-heading text-zinc-100 group-hover:text-white transition-colors inline-flex items-center gap-3">
              {next.title}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </span>
          </Link>
        </section>
      )}
    </PageWrap>
  )
}
