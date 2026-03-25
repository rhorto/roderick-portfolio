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

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null
      if (!target) return
      // Only handle hash links on the same page
      const href = target.getAttribute('href')
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href)
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
