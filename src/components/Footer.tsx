import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <rect x="1" y="1" width="34" height="34" rx="9" fill="transparent" stroke="url(#logo-border-f)" strokeWidth="1.5" />
                <path d="M10 1 L1 1 Q1 1 1 10" stroke="url(#logo-accent-f)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <text x="18" y="23" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">RH</text>
                <defs>
                  <linearGradient id="logo-border-f" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="logo-accent-f" x1="0" y1="0" x2="12" y2="12"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
                </defs>
              </svg>
              <span className="text-sm font-semibold text-gradient">Roderick Horton</span>
            </Link>
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
