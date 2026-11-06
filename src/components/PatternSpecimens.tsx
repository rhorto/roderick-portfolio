import { useState, type ReactNode } from 'react'

function Specimen({
  title,
  principle,
  children,
}: {
  title: string
  principle: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-5 flex flex-col">
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <h3 className="text-[15px] font-heading font-semibold text-zinc-100">{title}</h3>
        <span className="text-label uppercase text-zinc-500">Specimen</span>
      </div>
      <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">{principle}</p>
      <div className="mt-auto">{children}</div>
    </div>
  )
}

const btn =
  'text-[13px] px-3 py-1.5 rounded-lg border border-white/[0.08] text-zinc-200 hover:bg-white/[0.05] hover:border-white/[0.16] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'

function ConfidenceSurface() {
  const [open, setOpen] = useState(false)
  const signals = [
    'Matched the account and last 4 digits',
    'Seen this transaction pattern 6 times before',
    'No contradicting activity in the last 30 days',
  ]
  return (
    <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-zinc-200">Dispute is likely valid</span>
        <span className="text-sm font-heading font-medium text-zinc-100 tabular-nums">82%</span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-zinc-800 overflow-hidden">
        <div className="h-full bg-indigo-400" style={{ width: '82%' }} />
      </div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-3 text-[13px] text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        {open ? 'Hide why' : 'Why this score?'}
        <span className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <ul className="mt-3 space-y-1.5">
          {signals.map((s) => (
            <li key={s} className="text-[13px] text-zinc-400 flex gap-2">
              <span aria-hidden className="text-zinc-600">
                ·
              </span>
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function HumanInTheLoop() {
  const [state, setState] = useState<'draft' | 'approved' | 'discarded'>('draft')
  return (
    <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-4">
      <p className="text-[13px] text-zinc-300 leading-relaxed">
        Hi Dana — following up on your request for a lower monthly plan. I can move you to the $39 tier
        today.
      </p>
      <p className="text-[13px] text-zinc-400 mt-2">Drafted by AI · sent by you</p>
      {state === 'draft' ? (
        <div className="mt-3 flex gap-2">
          <button onClick={() => setState('approved')} className={btn}>
            Approve
          </button>
          <button onClick={() => setState('discarded')} className={btn}>
            Discard
          </button>
        </div>
      ) : (
        <p className="mt-3 text-[13px] text-emerald-300" aria-live="polite">
          {state === 'approved' ? 'Approved — you send it.' : 'Discarded — nothing sent.'}
        </p>
      )}
    </div>
  )
}

function GracefulFailure() {
  return (
    <div className="rounded-lg border border-amber-400/20 bg-amber-400/[0.04] p-4">
      <p className="text-sm text-zinc-100">I couldn't verify that charge.</p>
      <p className="text-[13px] text-zinc-400 mt-1.5 leading-relaxed">
        I checked your last 30 days of activity and found no matching entry. I didn't want to guess.
      </p>
      <a href="mailto:roderickhorton@gmail.com" className="mt-3 inline-block text-[13px] text-indigo-300 hover:text-indigo-200 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
        Get a person →
      </a>
    </div>
  )
}

function StreamingWithProvenance() {
  const [shown, setShown] = useState(false)
  return (
    <div className="rounded-lg border border-white/[0.06] bg-zinc-900/40 p-4">
      {shown ? (
        <p className="text-[13px] text-zinc-300 leading-relaxed">
          Your card was charged twice on March 3 — the duplicate was reversed on March 5.
        </p>
      ) : (
        <button onClick={() => setShown(true)} className={btn}>
          Ask the assistant
        </button>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="text-[12px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">
          Statement · Mar 2026
        </span>
        <span className="text-[12px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">
          Support log
        </span>
      </div>
    </div>
  )
}

export default function PatternSpecimens() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Specimen title="Confidence surface" principle="Show how sure the system is — and let people open the reasoning behind the score.">
        <ConfidenceSurface />
      </Specimen>
      <Specimen title="Human in the loop" principle="The AI drafts; a person decides. The interface never sends on the user's behalf.">
        <HumanInTheLoop />
      </Specimen>
      <Specimen title="Graceful failure" principle="When the system can't verify something, it says so and routes to a human instead of guessing.">
        <GracefulFailure />
      </Specimen>
      <Specimen title="Streaming with provenance" principle="Answers arrive with the sources they came from, attached to the claim.">
        <StreamingWithProvenance />
      </Specimen>
    </div>
  )
}
