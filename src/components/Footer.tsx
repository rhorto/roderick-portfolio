export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-6">
      <div className="mx-auto max-w-[960px] px-6 flex items-center justify-between">
        <span className="text-[11px] text-[var(--color-text-3)]">&copy; {new Date().getFullYear()} Roderick Horton</span>
        <div className="flex gap-5">
          {['#work', '#about', '#contact'].map(h => (
            <a key={h} href={h} className="text-[11px] text-[var(--color-text-3)] hover:text-[var(--color-text-2)] transition-colors">
              {h.slice(1).charAt(0).toUpperCase() + h.slice(2)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
