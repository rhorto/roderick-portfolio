import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="absolute top-1/4 -left-32 w-64 sm:w-80 h-64 sm:h-80 bg-[var(--color-accent)]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 sm:w-80 h-64 sm:h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 backdrop-blur-sm mb-8 sm:mb-10"
        >
          <Sparkles size={14} className="text-[var(--color-accent)]" />
          <span className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
            AI Product Designer &middot; Atlanta, GA
          </span>
        </motion.div>

        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl font-bold leading-[1] tracking-tight mb-6 sm:mb-8">
          <TextReveal delay={0.3} className="block mb-1">
            Hi, I'm
          </TextReveal>
          <TextReveal delay={0.5} className="block gradient-text">
            Roderick
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg mx-auto mb-4 leading-relaxed"
        >
          I design and build AI-powered products that
          <span className="text-[var(--color-text-primary)] font-medium"> drive revenue</span> and
          <span className="text-[var(--color-text-primary)] font-medium"> transform experiences</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-sm text-[var(--color-text-muted)] max-w-sm mx-auto mb-10 sm:mb-12"
        >
          20+ years at Delta, IHG, Pfizer, and State Farm.
          Now building voice AI and automation systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <MagneticButton href="#work">
            <span className="px-7 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--color-accent-glow)] inline-block">
              View My Work
            </span>
          </MagneticButton>
          <MagneticButton href="#contact">
            <span className="px-7 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)] transition-all duration-200 inline-block">
              Let's Talk
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 sm:mt-24 grid grid-cols-4 gap-4 sm:gap-6 max-w-md mx-auto"
        >
          {[
            { value: '20+', label: 'Years' },
            { value: '$50M+', label: 'Revenue' },
            { value: '5', label: 'Fortune 500s' },
            { value: '70K+', label: 'AI Leads' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-[var(--color-text-muted)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
