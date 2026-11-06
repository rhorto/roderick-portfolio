import { useState } from 'react'

export const EMAIL = 'roderickhorton@gmail.com'

/**
 * The email address as visible text plus a copy button, so people can grab it
 * without a mail client hijacking the click.
 */
export default function CopyEmail({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <a
        href={`mailto:${EMAIL}`}
        className="text-zinc-200 hover:text-white transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        {EMAIL}
      </a>
      <button
        onClick={copy}
        aria-label="Copy email address"
        className="text-[13px] px-2.5 py-1 rounded-lg border border-white/[0.08] text-zinc-300 hover:bg-white/[0.05] hover:border-white/[0.16] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </span>
  )
}
