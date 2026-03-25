import { motion } from 'framer-motion'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-16">
      <div className="w-full max-w-5xl mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <motion.p {...fade(0.1)} className="text-sm text-[var(--color-accent)] font-medium mb-4">
            AI Product Designer
          </motion.p>

          <motion.h1 {...fade(0.2)} className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">Roderick</span>
          </motion.h1>

          <motion.p {...fade(0.35)} className="text-base sm:text-lg text-[var(--color-text-2)] leading-relaxed max-w-prose mb-4">
            I design and build AI-powered products that drive revenue and transform user experiences.
            20+ years shipping at Delta, IHG, Pfizer, and State Farm.
          </motion.p>

          <motion.p {...fade(0.45)} className="text-sm text-[var(--color-text-3)] mb-10">
            Currently building voice AI and SaaS automation systems in Atlanta, GA.
          </motion.p>

          <motion.div {...fade(0.55)} className="flex flex-wrap gap-3 mb-16">
            <a href="#work" className="h-11 px-6 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium inline-flex items-center hover:bg-[var(--color-accent-2)] transition-colors">
              View Work
            </a>
            <a href="#contact" className="h-11 px-6 rounded-full border border-[var(--color-line-2)] text-[var(--color-text)] text-sm font-medium inline-flex items-center hover:bg-[var(--color-surface-2)] transition-colors">
              Get in Touch
            </a>
          </motion.div>

          <motion.div {...fade(0.7)} className="flex gap-10 sm:gap-14">
            {[
              ['20+', 'Years Experience'],
              ['$50M', 'Revenue Impact'],
              ['5', 'Fortune 500 Clients'],
              ['70K+', 'AI Leads Processed'],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-xl sm:text-2xl font-bold gradient-text">{val}</div>
                <div className="text-xs text-[var(--color-text-3)] mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
