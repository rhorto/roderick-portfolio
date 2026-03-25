export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-6">
      <div className="mx-auto max-w-[720px] px-8 flex items-center justify-between">
        <span className="text-[11px] text-[var(--color-text-3)]">&copy; {new Date().getFullYear()} Roderick Horton</span>
        <div className="flex gap-5">
          {[['Work', '#work'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={href} href={href} className="text-[11px] text-[var(--color-text-3)] hover:text-[var(--color-text-2)] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
