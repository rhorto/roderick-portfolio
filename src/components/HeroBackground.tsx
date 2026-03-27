import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)
  const angleRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const drawGlobe = () => {
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      ctx.clearRect(0, 0, cw, ch)

      const cx = cw * 0.65 // offset right
      const cy = ch * 0.5
      const radius = Math.min(cw, ch) * 0.35
      const angle = angleRef.current

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)'
      ctx.lineWidth = 0.8

      // Outer circle
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.18)'
      ctx.stroke()

      // Second ring
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)'
      ctx.stroke()

      // Third ring
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)'
      ctx.stroke()

      // Latitude lines (horizontal ellipses)
      for (let i = -3; i <= 3; i++) {
        const lat = (i / 3) * 0.9
        const y = cy + radius * lat
        const ellipseWidth = radius * Math.cos(Math.asin(lat))

        ctx.beginPath()
        ctx.ellipse(cx, y, ellipseWidth, ellipseWidth * 0.08, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.07 + (1 - Math.abs(lat)) * 0.07})`
        ctx.stroke()
      }

      // Longitude lines (vertical ellipses that rotate)
      for (let i = 0; i < 8; i++) {
        const lng = (i / 8) * Math.PI + angle
        const tilt = Math.sin(lng)

        ctx.beginPath()
        ctx.ellipse(cx, cy, radius * Math.abs(Math.cos(lng)), radius, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 + Math.abs(tilt) * 0.08})`
        ctx.stroke()
      }

      // Dots at intersections
      for (let lat = -2; lat <= 2; lat++) {
        for (let lng = 0; lng < 12; lng++) {
          const latAngle = (lat / 3) * Math.PI * 0.45
          const lngAngle = (lng / 12) * Math.PI * 2 + angle * 2

          const x3d = Math.cos(latAngle) * Math.sin(lngAngle)
          const y3d = Math.sin(latAngle)
          const z3d = Math.cos(latAngle) * Math.cos(lngAngle)

          // Only show front-facing dots
          if (z3d < -0.1) continue

          const px = cx + x3d * radius
          const py = cy + y3d * radius
          const alpha = 0.08 + z3d * 0.18

          ctx.beginPath()
          ctx.arc(px, py, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`
          ctx.fill()
        }
      }

      // Glow at center
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.8)
      glow.addColorStop(0, 'rgba(99, 102, 241, 0.06)')
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      // Orbiting dot
      const orbitAngle = angle * 3
      const ox = cx + Math.cos(orbitAngle) * radius * 1.05
      const oy = cy + Math.sin(orbitAngle) * radius * 0.3
      ctx.beginPath()
      ctx.arc(ox, oy, 2.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(129, 140, 248, 0.6)'
      ctx.fill()

      // Orbit trail
      ctx.beginPath()
      ctx.arc(ox - Math.cos(orbitAngle) * 8, oy - Math.sin(orbitAngle) * 2.4, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(129, 140, 248, 0.15)'
      ctx.fill()

      angleRef.current += 0.003
      frameRef.current = requestAnimationFrame(drawGlobe)
    }

    resize()
    drawGlobe()
    window.addEventListener('resize', () => { resize(); })

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
