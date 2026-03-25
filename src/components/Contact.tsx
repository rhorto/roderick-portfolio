import { motion } from 'framer-motion'
import { Mail, ExternalLink, MapPin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm font-mono text-[var(--color-accent)] mb-3">// Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Let's build something{' '}
            <span className="gradient-text">meaningful</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-sm mx-auto mb-10">
            Open to senior AI Product Designer, Design Engineer, and AI Product Engineer roles.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="mailto:roderickhorton@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--color-accent-glow)]"
            >
              <Mail size={15} />
              Get In Touch
              <ArrowUpRight size={13} />
            </a>
            <a
              href="https://linkedin.com/in/roderickhorton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)] transition-all duration-200"
            >
              <ExternalLink size={15} />
              LinkedIn
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <MapPin size={12} />
            Atlanta, GA &middot; Open to Remote
          </div>
        </motion.div>
      </div>
    </section>
  )
}
