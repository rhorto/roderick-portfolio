import { type ReactNode } from 'react'

/**
 * The default section layout: an annotation rail (index + label) on the left,
 * content on the right. On large screens the rail sticks while the content scrolls.
 */
export default function Rail({
  index,
  label,
  children,
  id,
  className = '',
}: {
  index?: string
  label: string
  children: ReactNode
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={`border-t border-white/[0.06] ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
          <div className="lg:col-span-3 pt-10 lg:pt-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-label uppercase text-zinc-400">
                {index && <span className="tabular-nums text-zinc-500">{index} — </span>}
                {label}
              </p>
            </div>
          </div>
          <div className="lg:col-span-9 pt-5 lg:pt-16 pb-14 lg:pb-24">{children}</div>
        </div>
      </div>
    </section>
  )
}
