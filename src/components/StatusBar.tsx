import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Circle, GitCommit, Activity } from 'lucide-react'

export default function StatusBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass rounded-full px-6 py-2.5 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <Circle size={8} className="text-emerald-400 fill-emerald-400" />
          <span className="text-[var(--color-text-secondary)]">Available for work</span>
        </div>
        <div className="w-px h-3 bg-[var(--color-border)]" />
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
          <GitCommit size={12} />
          <span>Shipping daily</span>
        </div>
        <div className="w-px h-3 bg-[var(--color-border)]" />
        <div className="flex items-center gap-1.5 text-[var(--color-text-muted)]">
          <Activity size={12} />
          <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' })} ET</span>
        </div>
      </div>
    </motion.div>
  )
}
