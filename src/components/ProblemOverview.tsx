interface ProblemOverviewProps {
  problem: string
  solution: string
  results: string
  subtitle: string
}

const cards = [
  { key: 'Problem', icon: '⚡', gradient: ['#ef4444', '#f97316'] },
  { key: 'Solution', icon: '💡', gradient: ['#8b5cf6', '#6366f1'] },
  { key: 'Results', icon: '📈', gradient: ['#10b981', '#22d3ee'] },
] as const

export default function ProblemOverview({ problem, solution, results, subtitle }: ProblemOverviewProps) {
  const texts: Record<string, string> = { Problem: problem, Solution: solution, Results: results }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">Problem & Approach</h3>
        <p className="text-sm text-zinc-500 max-w-md mx-auto">{subtitle}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <div
            key={card.key}
            className="relative rounded-2xl border border-white/[0.06] bg-zinc-900/60 backdrop-blur-sm p-6 group hover:border-white/[0.12] transition-all duration-300"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
              style={{ background: `linear-gradient(90deg, ${card.gradient[0]}, ${card.gradient[1]})` }}
            />

            {/* Icon + Label */}
            <div className="flex items-center gap-3 mb-4 mt-1">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                style={{ background: `linear-gradient(135deg, ${card.gradient[0]}20, ${card.gradient[1]}20)` }}
              >
                {card.icon}
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: card.gradient[0] }}
              >
                {card.key}
              </span>
            </div>

            {/* Number */}
            <div className="absolute top-5 right-5 text-[10px] font-mono text-zinc-700">
              {String(i + 1).padStart(2, '0')}
            </div>

            {/* Text */}
            <p className="text-sm text-zinc-400 leading-relaxed">{texts[card.key]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
