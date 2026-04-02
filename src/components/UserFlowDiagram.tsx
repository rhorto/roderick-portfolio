export interface FlowNode {
  id: string
  label: string
  type: 'start' | 'action' | 'decision' | 'end' | 'page'
}

export interface FlowLane {
  title: string
  color: string
  nodes: FlowNode[]
}

export interface UserFlowData {
  title: string
  subtitle: string
  lanes: FlowLane[]
}

interface UserFlowDiagramProps {
  flows: UserFlowData[]
}

function NodeShape({ node, color }: { node: FlowNode; color: string }) {
  const base = 'flex items-center justify-center text-[11px] sm:text-xs text-center leading-tight font-medium transition-all'

  switch (node.type) {
    case 'start':
      return (
        <div
          className={`${base} rounded-full px-4 py-2 border-2`}
          style={{ borderColor: color, color, background: `${color}10` }}
        >
          {node.label}
        </div>
      )
    case 'end':
      return (
        <div
          className={`${base} rounded-full px-4 py-2 text-zinc-900 font-semibold`}
          style={{ background: color }}
        >
          {node.label}
        </div>
      )
    case 'decision':
      return (
        <div className="relative">
          <div
            className={`${base} rounded-xl px-4 py-2.5 border border-dashed`}
            style={{ borderColor: `${color}60`, color: '#d4d4d8', background: `${color}08` }}
          >
            {node.label}
          </div>
          <div
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px]"
            style={{ background: color, color: '#18181b' }}
          >
            ?
          </div>
        </div>
      )
    case 'page':
      return (
        <div
          className={`${base} rounded-lg px-4 py-2.5 border`}
          style={{ borderColor: `${color}30`, color: '#a1a1aa', background: `${color}05` }}
        >
          <span className="mr-1.5 text-[10px] opacity-60">📄</span>
          {node.label}
        </div>
      )
    default:
      return (
        <div
          className={`${base} rounded-lg px-4 py-2.5 border text-zinc-300`}
          style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(39,39,42,0.5)' }}
        >
          {node.label}
        </div>
      )
  }
}

function Arrow({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center py-1">
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
        <line x1="6" y1="0" x2="6" y2="16" stroke={`${color}40`} strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M2 13L6 18L10 13" stroke={`${color}60`} strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}

export default function UserFlowDiagram({ flows }: UserFlowDiagramProps) {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">User Flows</h3>
        <p className="text-sm text-zinc-500">Key journeys and decision points</p>
      </div>

      <div className="space-y-8">
        {flows.map((flow) => (
          <div
            key={flow.title}
            className="rounded-2xl border border-white/[0.06] bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6"
          >
            {/* Flow header */}
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-zinc-200">{flow.title}</h4>
              <p className="text-xs text-zinc-500 mt-0.5">{flow.subtitle}</p>
            </div>

            {/* Lanes */}
            <div className={`grid gap-4 ${flow.lanes.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : flow.lanes.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
              {flow.lanes.map((lane) => (
                <div key={lane.title} className="relative">
                  {/* Lane label */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: lane.color }}
                    />
                    <span
                      className="text-[10px] uppercase tracking-[0.15em] font-semibold"
                      style={{ color: lane.color }}
                    >
                      {lane.title}
                    </span>
                  </div>

                  {/* Nodes */}
                  <div className="flex flex-col items-center gap-0">
                    {lane.nodes.map((node, ni) => (
                      <div key={node.id} className="w-full flex flex-col items-center">
                        {ni > 0 && <Arrow color={lane.color} />}
                        <NodeShape node={node} color={lane.color} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
