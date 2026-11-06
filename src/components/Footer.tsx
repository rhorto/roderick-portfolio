import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 print:hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Link
              to="/"
              className="font-heading text-[15px] font-semibold text-zinc-100 hover:text-white transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              Roderick Horton
            </Link>
            <p className="mt-1 text-[13px] text-zinc-400">AI Product Designer &amp; Engineer · Atlanta, GA</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:roderickhorton@gmail.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Email
            </a>
            <a
              href="https://linkedin.com/in/roderickhorton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rhorto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.04] pt-6 sm:flex-row sm:items-center">
          <span className="text-[13px] text-zinc-400">
            &copy; {new Date().getFullYear()} Roderick Horton. Built with React, TypeScript, Tailwind.
          </span>
          <span className="text-[13px] text-zinc-400">
            Press <kbd className="rounded bg-zinc-800 px-1.5 py-0.5 text-[12px] text-zinc-300">⌘K</kbd> to navigate
          </span>
        </div>
      </div>
    </footer>
  )
}
