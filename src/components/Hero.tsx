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
      {/* 3D particle background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]/80 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-[var(--color-accent)]" />
          <span className="text-sm text-[var(--color-text-secondary)]">
            AI Product Designer &middot; Atlanta, GA
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
          <TextReveal delay={0.3} className="block">
            Hi, I'm
          </TextReveal>
          <TextReveal delay={0.5} className="block gradient-text">
            Roderick
          </TextReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-4"
        >
          I design and build AI-powered products that
          <span className="text-[var(--color-text-primary)] font-medium"> drive revenue</span> and
          <span className="text-[var(--color-text-primary)] font-medium"> transform user experiences</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base text-[var(--color-text-muted)] max-w-xl mx-auto mb-12"
        >
          20+ years designing for Delta, IHG, Pfizer, and State Farm.
          Now building voice AI, SaaS platforms, and automation systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton href="#work">
            <span className="px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--color-accent-glow)] inline-block">
              View My Work
            </span>
          </MagneticButton>
          <MagneticButton href="#contact">
            <span className="px-8 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)] transition-all duration-200 inline-block">
              Let's Talk
            </span>
          </MagneticButton>
        </motion.div>

        {/* Stats bar with count-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '$50M+', label: 'Revenue Impacted' },
            { value: '5', label: 'Fortune 500 Brands' },
            { value: '70K+', label: 'AI Leads Processed' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
