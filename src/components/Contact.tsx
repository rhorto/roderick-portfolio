import { motion } from 'framer-motion'
import { Mail, ExternalLink, MapPin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-[var(--color-accent)] mb-3">// Let's Connect</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's transform your products and elevate your{' '}
            <span className="gradient-text">User's Experience</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-12">
            Open to senior AI Product Designer, Design Engineer, and AI Product Engineer roles.
            Let's build something meaningful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:roderickhorton@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--color-accent-glow)]"
            >
              <Mail size={18} />
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://linkedin.com/in/roderickhorton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)] transition-all duration-200"
            >
              <ExternalLink size={18} />
              LinkedIn Profile
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin size={14} />
            Atlanta, GA &middot; Open to Remote
          </div>
        </motion.div>
      </div>
    </section>
  )
}
