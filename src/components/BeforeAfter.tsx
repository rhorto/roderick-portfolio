import { motion } from 'framer-motion'

interface Props {
  before: string
  after: string
  caption: string
}

export default function BeforeAfter({ before, after, caption }: Props) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h3 className="text-[11px] font-mono text-[var(--color-accent)] mb-4 tracking-wider uppercase">Before & After</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <span className="text-[10px] font-semibold text-red-400 uppercase tracking-wider">Before</span>
          <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed mt-2">{before}</p>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">After</span>
          <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed mt-2">{after}</p>
        </div>
      </div>
      <p className="text-[11px] text-[var(--color-text-3)] text-center mt-3 italic">{caption}</p>
    </motion.div>
  )
}
