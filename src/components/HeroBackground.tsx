import { useEffect, useRef } from 'react'

interface Orb {
  x: number; y: number; r: number
  dx: number; dy: number
  hue: number; alpha: number
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbsRef = useRef<Orb[]>([])
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      createOrbs()
    }

    const createOrbs = () => {
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      orbsRef.current = Array.from({ length: 6 }, (_, i) => ({
        x: Math.random() * cw,
        y: Math.random() * ch,
        r: Math.random() * 250 + 150,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.2,
        hue: i < 3 ? 235 + Math.random() * 15 : 265 + Math.random() * 15, // indigo to violet
        alpha: Math.random() * 0.04 + 0.02,
      }))
    }

    const draw = () => {
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      ctx.clearRect(0, 0, cw, ch)

      orbsRef.current.forEach(o => {
        o.x += o.dx
        o.y += o.dy

        // Wrap around
        if (o.x < -o.r) o.x = cw + o.r
        if (o.x > cw + o.r) o.x = -o.r
        if (o.y < -o.r) o.y = ch + o.r
        if (o.y > ch + o.r) o.y = -o.r

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r)
        g.addColorStop(0, `hsla(${o.hue}, 70%, 45%, ${o.alpha})`)
        g.addColorStop(0.5, `hsla(${o.hue}, 60%, 35%, ${o.alpha * 0.5})`)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2)
        ctx.fill()
      })

      frameRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
