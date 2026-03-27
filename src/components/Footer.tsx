import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link to="/" className="text-base font-bold text-gradient">Roderick Horton</Link>
            <p className="text-xs text-zinc-500 mt-1">AI Product Designer · Atlanta, GA</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:roderickhorton@gmail.com" className="text-sm text-zinc-400 hover:text-white transition-colors">Email</a>
            <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/rhorto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Roderick Horton. Built with React, TypeScript, Tailwind.</span>
          <span className="text-xs text-zinc-600">Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono text-[10px]">⌘K</kbd> to navigate</span>
        </div>
      </div>
    </footer>
  )
}
