import { motion } from 'framer-motion'
import { Mail, ExternalLink, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Connect</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's build something <span className="gradient-text">meaningful</span></h2>
          <p className="text-base text-[var(--color-text-2)] max-w-md mx-auto mb-10">
            Open to AI Product Designer, Design Engineer, and AI Product Engineer roles.
          </p>

          <div className="flex items-center justify-center gap-3 mb-10">
            <a href="mailto:roderickhorton@gmail.com" className="h-11 px-6 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-[var(--color-accent-2)] transition-colors">
              <Mail size={16} /> Email Me
            </a>
            <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer" className="h-11 px-6 rounded-full border border-[var(--color-line-2)] text-[var(--color-text)] text-sm font-medium inline-flex items-center gap-2 hover:bg-[var(--color-surface-2)] transition-colors">
              <ExternalLink size={16} /> LinkedIn
            </a>
          </div>

          <p className="text-xs text-[var(--color-text-3)] inline-flex items-center gap-1.5">
            <MapPin size={12} /> Atlanta, GA · Remote OK
          </p>
        </motion.div>
      </div>
    </section>
  )
}
