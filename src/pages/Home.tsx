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
  { line1: 'I design AI products', line2: 'that get results', highlight: true },
  { line1: 'I designed a', line2: '$50M platform', highlight: false },
  { line1: 'From Figma to', line2: 'production code', highlight: true },
  { line1: '6 Fortune 500s.', line2: '15+ years', highlight: true },
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

        {/* Spline robot — mirrored to face hero text */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Cinematic lighting on the robot */}
          <div className="absolute z-[5] w-[500px] h-[500px] top-[10%] right-[15%] rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
          <div className="absolute z-[5] w-[350px] h-[350px] bottom-[15%] right-[25%] rounded-full opacity-15 blur-[100px]" style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
          <div className="absolute z-[5] w-[300px] h-[300px] top-[30%] right-[5%] rounded-full opacity-10 blur-[80px]" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
          {/* Gradient overlays for natural fade */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]" />
          {/* Robot — mirrored, centered in right half */}
          <div
            className="absolute -top-[5%] -bottom-[5%] left-[20%] md:left-[25%] right-0 opacity-45 md:opacity-60"
            style={{ transform: 'scaleX(-1)' }}
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
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

      {/* SOCIAL PROOF STRIP — stats + trusted by */}
      <section className="border-y border-white/[0.04] bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center gap-8 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-8 sm:gap-10">
            {[['15+', 'Years'], ['$50M+', 'Revenue'], ['6', 'Fortune 500'], ['8', 'Industries']].map(([v, l]) => (
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

      {/* WHAT I DO — value prop cards */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>What I Do</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-heading">Three things, <span className="text-gradient">done right</span></h2>
            <p className="text-sm text-zinc-500 mb-12 max-w-lg">Most designers do one. I do all three — and ship them to production.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Design Strategy & Research', desc: 'User research, usability testing, A/B testing, and data-driven design decisions that tie every UX change to a business metric.', accent: '#6366f1' },
              { num: '02', title: 'AI Product Design', desc: 'Voice agents, conversational AI, prompt engineering, and AI UX patterns that feel invisible to users.', accent: '#10b981' },
              { num: '03', title: 'Design Systems', desc: 'Tokens, components, and governance frameworks at enterprise scale. Built for teams, not just designers.', accent: '#f59e0b' },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 h-full hover:border-zinc-700/80 transition-all duration-300 overflow-hidden">
                  <div className="flex h-full">
                    <div className="w-1 shrink-0 rounded-l-xl" style={{ background: card.accent }} />
                    <div className="p-6">
                      <span className="text-xs font-mono font-medium mb-4 block" style={{ color: card.accent }}>{card.num}</span>
                      <h3 className="text-base font-semibold mb-2 font-heading">{card.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
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

      {/* RESULTS TICKER — scrolling metrics strip */}
      <section className="py-10 border-y border-white/[0.04] overflow-hidden">
        <div className="results-ticker flex gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <motion.div
              key={setIdx}
              className="flex gap-12 shrink-0"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
              {[
                '$50M incremental revenue',
                '40% redundancy reduction',
                '15% faster boarding',
                '25% more bookings',
                '20% retention increase',
                '35% loyalty growth',
                '$2M CRO revenue',
                '6 Fortune 500 companies',
              ].map((item) => (
                <span key={`${setIdx}-${item}`} className="text-sm sm:text-base font-medium text-zinc-600 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                  {item}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENDORSEMENTS — improved styling */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Endorsements</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 font-heading">What others <span className="text-gradient">say</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { q: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy by 40%, and engineers loved working with his specs.", n: 'Product Director', r: 'Pfizer', color: '#0ea5e9' },
              { q: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch — $50M in incremental revenue.", n: 'VP of Digital', r: 'IHG Hotels & Resorts', color: '#10b981' },
              { q: "Roderick redesigned our gate agent application and cut boarding times by 15%. He brought design thinking to a complex ops environment and made it stick.", n: 'Program Manager', r: 'Delta Air Lines', color: '#dc2626' },
            ].map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 0.08}>
                <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-6 h-full hover:border-zinc-700/80 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-0.5 w-5 rounded-full" style={{ background: t.color }} />
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium" style={{ color: t.color }}>{t.r}</span>
                  </div>
                  <span className="text-3xl font-heading font-bold leading-none" style={{ color: `${t.color}40` }}>"</span>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-1 mb-6">{t.q}</p>
                  <div className="pt-4 border-t border-zinc-800/60">
                    <p className="text-sm font-semibold">{t.n}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{t.r}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — closing section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">Let's build something <span className="text-gradient">meaningful</span></h2>
            <p className="text-base text-zinc-400 max-w-md mx-auto mb-10">Open to AI Product Designer, Design Engineer, and AI Product Engineer roles.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="mailto:roderickhorton@gmail.com" className="h-12 px-7 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-indigo-400 transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                Email Me
              </a>
              <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer" className="h-12 px-7 rounded-full border border-zinc-700 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-900 transition-all">
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-zinc-600 mt-8">Atlanta, GA · Remote OK</p>
          </ScrollReveal>
        </div>
      </section>
    </PageWrap>
  )
}
