import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import GlowCard from '../components/GlowCard'
import HeroBackground from '../components/HeroBackground'
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
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden noise">
        <div className="aurora" />
        <HeroBackground />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-4 mb-6">
              <img src="/images/profile.jpeg" alt="Roderick Horton" className="w-14 h-14 rounded-full border-2 border-indigo-500/40 object-cover shadow-[0_0_24px_rgba(99,102,241,0.2)]" />
              <div>
                <p className="text-sm font-semibold text-white">Roderick Horton</p>
                <p className="text-xs text-indigo-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for work</p>
              </div>
            </motion.div>

            {/* Auto-sliding headlines */}
            <div className="h-[110px] sm:h-[120px] md:h-[130px] relative mb-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide}
                  initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight absolute inset-0"
                >
                  {headlines[slide].line1}<br />
                  <span className={headlines[slide].highlight ? 'text-gradient' : ''}>{headlines[slide].line2}</span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-1.5 mb-6">
              {headlines.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${i === slide ? 'w-6 bg-indigo-500' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'}`} />
              ))}
            </div>

            {/* Trusted by strip — single source of truth, no duplicate paragraph */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-6 text-zinc-600">
              <span className="text-[10px] uppercase tracking-wider">Trusted by</span>
              <div className="w-px h-3 bg-zinc-800 hidden sm:block" />
              {['Delta', 'IHG', 'Pfizer', 'State Farm', 'BofA', 'Yahoo'].map(c => (
                <span key={c} className="text-xs font-medium text-zinc-500">{c}</span>
              ))}
            </motion.div>

            {/* CTAs — View Work is primary, Get in Touch is demoted to text link */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="flex items-center gap-5 mb-10">
              <Link to="/work" className="h-12 px-7 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                View Work
              </Link>
              <Link to="/about#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Get in Touch →
              </Link>
            </motion.div>

            {/* Stats inside hero */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="grid grid-cols-4 gap-6 sm:gap-10 pt-6 border-t border-white/[0.06]">
              {[['20+', 'Years'], ['$50M+', 'Revenue'], ['6', 'Fortune 500'], ['8', 'Industries']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-lg sm:text-2xl font-bold text-gradient">{v}</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 mt-1">{l}</div>
                </div>
              ))}
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

      {/* ALL WORK — show all 6 projects */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Enterprise products, <span className="text-gradient">real impact</span></h2>
            <p className="text-sm text-zinc-500 mb-12 max-w-lg">Fortune 500 products designed and built for measurable business outcomes.</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-12">What others <span className="text-gradient">say</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { q: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy by 40%, and engineers loved working with his specs.", n: 'Product Director', r: 'Pfizer' },
              { q: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch — $50M in incremental revenue.", n: 'VP of Digital', r: 'IHG Hotels & Resorts' },
              { q: "Most designers hand off Figma files. Roderick shipped production React code, built automation pipelines, and integrated voice AI — all while keeping the UX clean.", n: 'Engineering Lead', r: 'Audiences247' },
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
