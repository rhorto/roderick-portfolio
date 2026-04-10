import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import GlowCard from '../components/GlowCard'
import { SplineScene } from '../components/ui/splite'
import { Spotlight } from '../components/ui/spotlight'
import { projects } from '../data/projects'

const headlines = [
  { line1: 'I design AI products', line2: 'that ship', highlight: true },
  { line1: 'I designed a', line2: '$50M platform', highlight: false },
  { line1: 'From Figma to', line2: 'production code', highlight: true },
  { line1: '6 Fortune 500s.', line2: '20+ years', highlight: true },
  { line1: 'AI product design,', line2: 'end to end', highlight: true },
]

export default function Home() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % headlines.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <PageWrap>
      {/* HERO — simplified: headline + CTA + robot */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden noise">
        <div className="aurora" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {/* Spline robot — faded background */}
        <div className="absolute inset-0 z-0 opacity-30 md:opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/60 to-[#050505]/95 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 z-10" />
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-xl">
            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400">Available for work</span>
            </motion.div>

            {/* Auto-sliding headlines */}
            <div className="h-[160px] sm:h-[190px] md:h-[220px] relative mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide}
                  initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight absolute inset-0 font-heading"
                >
                  {headlines[slide].line1}<br />
                  <span className={headlines[slide].highlight ? 'text-gradient' : ''}>{headlines[slide].line2}</span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-1.5 mb-8">
              {headlines.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === slide ? 'w-6 bg-indigo-500' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'}`} />
              ))}
            </div>

            {/* Single CTA */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex items-center gap-5">
              <Link to="/work" className="h-12 px-7 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                View Work
              </Link>
              <Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Get in Touch →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF STRIP — stats + trusted by, below the fold */}
      <section className="border-y border-white/[0.04] bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center gap-8 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-8 sm:gap-10">
            {[['20+', 'Years'], ['$50M+', 'Revenue'], ['6', 'Fortune 500'], ['8', 'Industries']].map(([v, l]) => (
              <div key={l} className="text-center sm:text-left">
                <div className="text-lg sm:text-xl font-bold text-gradient font-heading">{v}</div>
                <div className="text-[10px] sm:text-xs text-zinc-500 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-zinc-600">
            <span className="text-[10px] uppercase tracking-wider">Trusted by</span>
            <div className="w-px h-3 bg-zinc-800 hidden sm:block" />
            {['Delta', 'IHG', 'Pfizer', 'State Farm', 'BofA', 'Yahoo'].map(c => (
              <span key={c} className="text-xs font-medium text-zinc-500">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ALL WORK — show all 6 projects */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-heading">Enterprise products, <span className="text-gradient">real impact</span></h2>
            <p className="text-sm text-zinc-500 mb-12 max-w-lg">Fortune 500 products designed and built for measurable business outcomes.</p>
          </ScrollReveal>

          {/* Featured project — full width */}
          {projects.slice(0, 1).map(p => (
            <ScrollReveal key={p.id}>
              <Link to={`/work/${p.id}`} className="block mb-5">
                <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 hover:border-zinc-700/80 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row">
                    <div className="h-56 lg:h-auto lg:w-1/2 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none relative overflow-hidden">
                      {p.image ? (
                        <>
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(145deg, ${p.color}08, ${p.color}03)` }}>
                          <span className="text-4xl font-bold tracking-wider" style={{ color: `${p.color}25` }}>{p.company.split(' ')[0].toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-medium px-2.5 py-1 rounded-full w-fit mb-4" style={{ background: `${p.color}15`, color: p.color }}>{p.company}</span>
                      <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors font-heading mb-2">{p.title}</h3>
                      <p className="text-xs text-zinc-500 mb-3">{p.role} · {p.year}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-5">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.tags.slice(0, 4).map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
                      </div>
                      <div className="flex gap-8 pt-4 border-t border-zinc-800/60">
                        {p.stats.slice(0, 3).map(([v, l]) => (
                          <div key={l}><span className="text-sm font-semibold" style={{ color: p.color }}>{v}</span><span className="block text-[10px] text-zinc-500">{l}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Link>
            </ScrollReveal>
          ))}

          {/* Remaining projects — 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.slice(1).map((p, i) => (
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
                        {p.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
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

      {/* ENDORSEMENTS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Endorsements</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 font-heading">What others <span className="text-gradient">say</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { q: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy by 40%, and engineers loved working with his specs.", n: 'Product Director', r: 'Pfizer' },
              { q: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch — $50M in incremental revenue.", n: 'VP of Digital', r: 'IHG Hotels & Resorts' },
              { q: "Roderick redesigned our gate agent application and cut boarding times by 15%. He brought design thinking to a complex ops environment and made it stick.", n: 'Program Manager', r: 'Delta Air Lines' },
            ].map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 0.08}>
                <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-6 h-full">
                  <span className="text-2xl text-gradient font-serif leading-none">"</span>
                  <p className="text-sm text-zinc-400 leading-relaxed italic mt-2 mb-5">{t.q}</p>
                  <p className="text-sm font-semibold">{t.n}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{t.r}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  )
}
