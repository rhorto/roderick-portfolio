interface ProcessStep {
  icon: string
  label: string
}

interface ProcessPhase {
  name: string
  color: string
  steps: ProcessStep[]
}

interface ProcessDiagramProps {
  phases?: ProcessPhase[]
}

const defaultPhases: ProcessPhase[] = [
  {
    name: 'Discovery',
    color: '#10b981',
    steps: [
      { icon: '🔍', label: 'Research' },
      { icon: '🎨', label: 'Branding' },
    ],
  },
  {
    name: 'Design',
    color: '#eab308',
    steps: [
      { icon: '🧩', label: 'User Experience' },
      { icon: '📐', label: 'Design System' },
      { icon: '✍️', label: 'Copy' },
    ],
  },
  {
    name: 'Delivery',
    color: '#6366f1',
    steps: [
      { icon: '🖥️', label: 'User Interface' },
      { icon: '✅', label: 'QA & Testing' },
    ],
  },
]

export default function ProcessDiagram({ phases = defaultPhases }: ProcessDiagramProps) {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2 font-heading">My Process</h3>
        <p className="text-sm text-zinc-500">How I approach every project</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal connector — desktop only */}
        <div className="hidden sm:block absolute top-[26px] left-[16.67%] right-[16.67%] h-px border-t border-dashed border-zinc-700/60" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {phases.map((phase, pi) => (
            <div key={phase.name} className="relative flex flex-col items-center">
              {/* Phase circle */}
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-xs font-bold mb-5 relative z-10 border-2"
                style={{
                  borderColor: phase.color,
                  background: `${phase.color}15`,
                  color: phase.color,
                }}
              >
                {String(pi + 1).padStart(2, '0')}
              </div>

              {/* Phase card */}
              <div className="rounded-2xl border border-white/[0.06] bg-zinc-900/50 backdrop-blur-sm p-5 w-full">
                {/* Phase name */}
                <div className="text-center mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ color: phase.color }}
                  >
                    {phase.name}
                  </span>
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  {phase.steps.map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-zinc-300 transition-colors"
                      style={{ background: `${phase.color}08` }}
                    >
                      <span className="text-sm">{step.icon}</span>
                      <span className="text-[13px]">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
