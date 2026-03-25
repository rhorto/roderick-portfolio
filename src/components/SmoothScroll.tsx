import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Handle anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.hash) {
        const el = document.querySelector(target.hash)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el as HTMLElement)
        }
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return <>{children}</>
}
