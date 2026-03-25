import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoEmbed({ videoUrl }: { videoUrl?: string }) {
  return (
    <div className="pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video rounded-2xl border border-[var(--color-line)] overflow-hidden"
        >
          {videoUrl ? (
            <iframe src={videoUrl} className="w-full h-full" allowFullScreen title="Walkthrough" />
          ) : (
            <div className="w-full h-full bg-[var(--color-surface)] flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 rounded-full border border-[var(--color-line-2)] flex items-center justify-center">
                <Play size={22} className="text-[var(--color-text-3)] ml-0.5" />
              </div>
              <p className="text-sm text-[var(--color-text-2)]">Video walkthrough coming soon</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
