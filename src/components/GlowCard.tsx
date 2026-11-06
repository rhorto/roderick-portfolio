import { useRef, useState, type ReactNode } from 'react'

export default function GlowCard({ children, className = '', tilt = true }: { children: ReactNode; className?: string; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    ref.current.style.setProperty('--mx', `${x * 100}%`)
    ref.current.style.setProperty('--my', `${y * 100}%`)

    if (tilt) {
      const rotateX = (y - 0.5) * -6 // max 3deg
      const rotateY = (x - 0.5) * 6
      setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1)`)
    }
  }

  const handleLeave = () => {
    setTransform('')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glow-card ${className}`}
      style={{ transform, transition: 'transform 0.3s ease-out' }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
