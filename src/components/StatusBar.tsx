import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'

export default function StatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-4 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Circle size={6} className="text-emerald-400 fill-emerald-400" />
          <span className="text-[var(--color-text-secondary)]">Available for work</span>
        </div>
        <div className="hidden sm:block w-px h-3 bg-[var(--color-border)]" />
        <span className="hidden sm:block text-[var(--color-text-muted)]">Atlanta, GA</span>
      </div>
    </motion.div>
  )
}
