import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface Props {
  videoUrl?: string
}

export default function VideoEmbed({ videoUrl }: Props) {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-[720px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video rounded-2xl border border-[var(--color-line)] overflow-hidden"
        >
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Portfolio walkthrough"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)] flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[var(--color-line-2)] flex items-center justify-center group-hover:border-[var(--color-accent)] transition-colors">
                <Play size={24} className="text-[var(--color-text-3)] ml-1" />
              </div>
              <div className="text-center">
                <p className="text-[13px] text-[var(--color-text-2)] font-medium">Video Walkthrough</p>
                <p className="text-[11px] text-[var(--color-text-3)] mt-1">Coming soon — a 2-minute tour of my work</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
