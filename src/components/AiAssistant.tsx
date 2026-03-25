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
    }, 600)
  }

  return (
    <section id="ai" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
          <p className="text-sm text-[var(--color-accent)] font-medium mb-2">AI Assistant</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ask me <span className="gradient-text">anything</span></h2>
          <p className="text-sm text-[var(--color-text-2)]">Ask about my experience, skills, or design approach.</p>
        </motion.div>

        <div className="max-w-xl rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden">
          <div className="h-80 overflow-y-auto p-5 space-y-3">
            {msgs.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Sparkles size={20} className="text-[var(--color-accent)] mb-3" />
                <p className="text-sm text-[var(--color-text-3)] mb-5">Ask about experience, skills, or philosophy</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => send(s)} className="text-xs h-8 px-3 rounded-full border border-[var(--color-line)] text-[var(--color-text-3)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">{s}</button>
                  ))}
                </div>
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'assistant' && <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Bot size={14} className="text-[var(--color-accent)]" /></div>}
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[var(--color-accent)] text-white rounded-br-sm' : 'bg-[var(--color-surface-2)] text-[var(--color-text-2)] rounded-bl-sm border border-[var(--color-line)]'}`}>{m.content}</div>
                {m.role === 'user' && <div className="w-7 h-7 rounded-lg bg-[var(--color-surface-2)] flex items-center justify-center flex-shrink-0 mt-0.5"><User size={14} className="text-[var(--color-text-3)]" /></div>}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center"><Bot size={14} className="text-[var(--color-accent)]" /></div>
                <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm bg-[var(--color-surface-2)] border border-[var(--color-line)]"><Loader2 size={14} className="text-[var(--color-accent)] animate-spin" /></div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div className="border-t border-[var(--color-line)] p-3">
            <form onSubmit={e => { e.preventDefault(); send(input) }} className="flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} disabled={loading} placeholder="Ask anything..."
                className="flex-1 h-10 px-4 rounded-xl bg-black border border-[var(--color-line)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-3)] focus:outline-none focus:border-[var(--color-accent)] disabled:opacity-50" />
              <button type="submit" disabled={loading || !input.trim()} className="h-10 px-4 rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-2)] transition-colors disabled:opacity-40">
                <Send size={15} />
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
  if (l.includes('ai') || l.includes('experience')) return "He builds an AI SaaS platform processing 70K+ leads with voice AI (Retell), Gemini personalization, and automated scoring. 35-50% open rates — 2-3x industry average."
  if (l.includes('fortune') || l.includes('500') || l.includes('compan')) return "Delta (4.5yr, 15% faster boarding), IHG (5.5yr, $50M revenue), Pfizer (2.5yr, design system), State Farm (2yr, 20% retention ↑), Yahoo ($2M CRO)."
  if (l.includes('tech') || l.includes('stack') || l.includes('skill')) return "React, TypeScript, Tailwind, Node.js, Supabase, Stripe, Figma, Voice AI (Retell), Gemini, Claude, n8n, Design Systems, A/B Testing, CRO."
  if (l.includes('hire') || l.includes('contact')) return "Open to AI Product Designer, Design Engineer, and AI Product Engineer roles. Atlanta, GA — remote OK."
  return "AI Product Designer with 20+ years at Delta, IHG, Pfizer, State Farm. Building AI-native SaaS end-to-end. What would you like to know?"
}
