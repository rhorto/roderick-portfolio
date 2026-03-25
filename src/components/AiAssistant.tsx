import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react'

interface Msg { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = ['What makes Roderick different?', 'AI experience', 'Fortune 500 work', 'Tech stack']

export default function AiAssistant() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = (text: string) => {
    if (!text.trim()) return
    setMsgs(p => [...p, { role: 'user', content: text }])
    setInput('')
    setLoading(true)
    setTimeout(() => {
      setMsgs(p => [...p, { role: 'assistant', content: respond(text) }])
      setLoading(false)
    }, 700)
  }

  return (
    <section id="ai" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[540px] px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <p className="text-[11px] font-mono text-[var(--color-accent)] mb-2 tracking-wider uppercase">AI Assistant</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ask me <span className="gradient-text">anything</span></h2>
          <p className="text-[13px] text-[var(--color-text-2)]">Powered by AI — ask about my experience or approach.</p>
        </motion.div>

        <div className="border border-[var(--color-line)] rounded-2xl overflow-hidden">
          <div className="h-[280px] sm:h-[320px] overflow-y-auto p-4 space-y-3">
            {msgs.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center">
                <Sparkles size={18} className="text-[var(--color-accent)] mb-3" />
                <p className="text-[12px] text-[var(--color-text-3)] mb-4">Ask about experience, skills, or philosophy</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => send(s)} className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'assistant' && <div className="w-6 h-6 rounded-md bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Bot size={12} className="text-[var(--color-accent)]" /></div>}
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-[var(--color-accent)] text-white rounded-br-sm' : 'bg-[var(--color-surface)] text-[var(--color-text-2)] rounded-bl-sm'}`}>
                  {m.content}
                </div>
                {m.role === 'user' && <div className="w-6 h-6 rounded-md bg-[var(--color-surface)] flex items-center justify-center flex-shrink-0 mt-0.5"><User size={12} className="text-[var(--color-text-3)]" /></div>}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-md bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0"><Bot size={12} className="text-[var(--color-accent)]" /></div>
                <div className="px-3 py-2 rounded-xl rounded-bl-sm bg-[var(--color-surface)]"><Loader2 size={13} className="text-[var(--color-accent)] animate-spin" /></div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-[var(--color-line)] p-3">
            <form onSubmit={e => { e.preventDefault(); send(input) }} className="flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} disabled={loading} placeholder="Ask anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-line)] text-[13px] text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:outline-none focus:border-[var(--color-accent)] disabled:opacity-50" />
              <button type="submit" disabled={loading || !input.trim()} className="px-3 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-2)] transition-colors disabled:opacity-40">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function respond(q: string): string {
  const l = q.toLowerCase()
  if (l.includes('different') || l.includes('unique')) return "Roderick ships production code — React, TypeScript, full AI integrations — not Figma mockups. He's built voice AI agents, automated 10+ service pipelines, and replaced $497/mo SaaS tools with self-hosted solutions."
  if (l.includes('ai') || l.includes('experience')) return "He builds an AI-powered SaaS platform processing 70K+ leads with voice AI (Retell), Gemini-powered personalization, and automated lead scoring. 35-50% open rates — 2-3x industry average."
  if (l.includes('fortune') || l.includes('500') || l.includes('compan')) return "Delta (4.5yr, 15% faster boarding), IHG (5.5yr, $50M revenue platform), Pfizer (2.5yr, enterprise design system), State Farm (2yr, 20% retention increase), Yahoo ($2M CRO)."
  if (l.includes('tech') || l.includes('stack') || l.includes('skill')) return "React, TypeScript, Tailwind, Node.js, Supabase, Stripe, Figma, Voice AI (Retell), Gemini, Claude, n8n, Design Systems, A/B Testing, CRO."
  if (l.includes('hire') || l.includes('contact') || l.includes('available')) return "Open to AI Product Designer, Design Engineer, and AI Product Engineer roles. Atlanta, GA — open to remote. Scroll to contact or reach out on LinkedIn."
  return "AI Product Designer with 20+ years at Delta, IHG, Pfizer, State Farm. Currently building AI-native SaaS end-to-end. What would you like to know?"
}
