import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function TextReveal({ children, className = '', delay = 0, as: Tag = 'span' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const words = children.split(' ')

  return (
    <Tag className={className}>
      <span ref={ref} className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.04,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  )
}
