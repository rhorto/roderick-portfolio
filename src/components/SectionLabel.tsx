export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-indigo-500/50" />
      <span className="text-[11px] font-medium text-indigo-400 uppercase tracking-[0.15em]">{children}</span>
    </div>
  )
}
