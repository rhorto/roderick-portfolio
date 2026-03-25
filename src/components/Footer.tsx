export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-[var(--color-text-3)]">&copy; {new Date().getFullYear()} Roderick Horton</span>
        <div className="flex gap-6">
          {[['Work', '#work'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-[var(--color-text-3)] hover:text-[var(--color-text-2)] transition-colors">{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
