import { motion } from 'framer-motion'
import { Mail, ExternalLink, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-[720px] px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-3 tracking-wider uppercase">Connect</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's build something <span className="gradient-text">meaningful</span></h2>
          <p className="text-[13px] text-[var(--color-text-2)] mb-10 max-w-sm mx-auto">
            Open to AI Product Designer, Design Engineer, and AI Product Engineer roles.
          </p>

          <div className="flex items-center justify-center gap-3 mb-10">
            <a href="mailto:roderickhorton@gmail.com"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--color-accent-2)] transition-all hover:shadow-[0_0_24px_var(--color-glow)]">
              <Mail size={14} /> Email Me
            </a>
            <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium border border-[var(--color-line)] text-[var(--color-text)] px-5 py-2.5 rounded-full hover:border-[var(--color-line-2)] hover:bg-[var(--color-surface)] transition-all">
              <ExternalLink size={14} /> LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--color-text-3)]">
            <MapPin size={11} /> Atlanta, GA · Remote OK
          </div>
        </motion.div>
      </div>
    </section>
  )
}
