import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'
import GlowCard from '../components/GlowCard'
import { projects } from '../data/projects'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const word = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <PageWrap>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden noise">
        <div className="mesh-gradient" />
        <div className="absolute inset-0 grid-bg" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-medium text-indigo-400 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for work
            </motion.p>

            <motion.h1 variants={stagger} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-7">
              {['I', 'design', 'and', 'build'].map(w => <motion.span key={w} variants={word} className="inline-block mr-[0.3em]">{w}</motion.span>)}
              <br />
              {['AI-powered'].map(w => <motion.span key={w} variants={word} className="inline-block mr-[0.3em] text-gradient">{w}</motion.span>)}
              {['products.'].map(w => <motion.span key={w} variants={word} className="inline-block">{w}</motion.span>)}
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
              20+ years shipping at Delta, IHG, Pfizer, and State Farm.
              Now building voice AI, SaaS platforms, and automation systems.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3">
              <Link to="/work" className="h-12 px-7 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">
                View Work
              </Link>
              <Link to="/about#contact" className="h-12 px-7 rounded-full border border-zinc-700 text-white text-sm font-medium inline-flex items-center hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-200">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-y border-white/[0.04] bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[['20+', 'Years'], ['$50M+', 'Revenue Impact'], ['5', 'Fortune 500 Clients'], ['70K+', 'AI Leads']].map(([v, l], i) => (
            <ScrollReveal key={l} delay={i * 0.06}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{v}</div>
              <div className="text-xs text-zinc-500 mt-1.5">{l}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FEATURED WORK */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Products that <span className="text-gradient">ship & scale</span></h2>
            <p className="text-sm text-zinc-500 mb-12 max-w-lg">From Fortune 500 enterprises to AI-native startups — designing products that generate measurable business outcomes.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featured.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <Link to={`/work/${p.id}`}>
                  <GlowCard className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 hover:border-zinc-700/80 transition-all duration-300 group">
                    <div className="h-44 rounded-t-xl flex items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(145deg, ${p.color}08, ${p.color}03)` }}>
                      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `radial-gradient(${p.color} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                      <div className="relative text-center">
                        <span className="text-3xl font-bold tracking-wider block" style={{ color: `${p.color}25` }}>{p.company.split(' ')[0].toUpperCase()}</span>
                        <span className="text-[9px] uppercase tracking-[0.25em] mt-1 block" style={{ color: `${p.color}35` }}>{p.company}</span>
                      </div>
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

          <ScrollReveal className="mt-10 text-center">
            <Link to="/work" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1.5">
              View all projects <span className="text-xs">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="py-16 sm:py-24 section-fade">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Currently</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What I'm <span className="text-gradient">building now</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-6 sm:p-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-400/80 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">In Progress</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered SaaS Platform</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Building a multi-tenant platform that replaces $497/mo tools for small businesses. Voice AI handles calls 24/7,
                Gemini writes personalized outreach, and automated lead scoring routes prospects to the right follow-up.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Supabase', 'Retell AI', 'Gemini', 'n8n', 'Stripe'].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
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
              { q: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy by 40%, and engineers loved working with his specs.", n: 'Sarah Chen', r: 'Director of Product, Pfizer' },
              { q: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch — $50M in incremental revenue.", n: 'Michael Torres', r: 'VP Digital, IHG Hotels' },
              { q: "Most designers hand off Figma files. Roderick shipped production React code, built automation pipelines, and integrated voice AI — all while keeping the UX clean.", n: 'David Park', r: 'Engineering Lead' },
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
