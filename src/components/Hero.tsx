import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const HeroScene = lazy(() => import('./HeroScene'))

const f = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } })

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Suspense fallback={null}><HeroScene /></Suspense>

      <div className="absolute top-1/3 -left-40 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-72 h-72 bg-purple-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[720px] px-8 text-center">
        <motion.div {...f(0.1)} className="inline-flex items-center gap-1.5 border border-[var(--color-line)] bg-[var(--color-surface)]/80 backdrop-blur rounded-full px-3.5 py-1 mb-8">
          <Sparkles size={12} className="text-[var(--color-accent)]" />
          <span className="text-[11px] text-[var(--color-text-2)]">AI Product Designer · Atlanta</span>
        </motion.div>

        <motion.h1 {...f(0.25)} className="text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-6">
          Hi, I'm <span className="gradient-text">Roderick</span>
        </motion.h1>

        <motion.p {...f(0.4)} className="text-[15px] sm:text-base text-[var(--color-text-2)] leading-relaxed mb-4 max-w-[440px] mx-auto">
          I design and build AI-powered products that <span className="text-[var(--color-text)] font-medium">drive revenue</span> and <span className="text-[var(--color-text)] font-medium">transform experiences</span>.
        </motion.p>

        <motion.p {...f(0.5)} className="text-[13px] text-[var(--color-text-3)] mb-10">
          20+ years at Delta · IHG · Pfizer · State Farm
        </motion.p>

        <motion.div {...f(0.6)} className="flex items-center justify-center gap-3">
          <a href="#work" className="text-[13px] font-medium bg-[var(--color-accent)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--color-accent-2)] transition-all hover:shadow-[0_0_24px_var(--color-glow)]">
            View Work
          </a>
          <a href="#contact" className="text-[13px] font-medium border border-[var(--color-line)] text-[var(--color-text)] px-6 py-2.5 rounded-full hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition-all">
            Contact
          </a>
        </motion.div>

        <motion.div {...f(0.8)} className="mt-20 flex justify-center gap-12 sm:gap-16">
          {[['20+', 'Years'], ['$50M', 'Revenue'], ['5', 'Fortune 500s'], ['70K', 'AI Leads']].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-lg sm:text-xl font-semibold gradient-text">{v}</div>
              <div className="text-[10px] text-[var(--color-text-3)] mt-0.5">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
