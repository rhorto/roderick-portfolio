import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const CONTEXT = `You are Roderick's AI portfolio assistant. You help visitors learn about Roderick Horton, an AI Product Designer with 20+ years of experience.

Key facts about Roderick:
- Currently: AI Product Designer building AI SaaS products (React, TypeScript, Supabase, Stripe, voice AI, n8n automation)
- Previously: Senior UX Designer at Pfizer (2.5 years), State Farm (2 years), IHG Hotels (5.5 years, $50M revenue platform), Delta Air Lines (4.5 years)
- Earlier career: Yahoo (digital marketing, CRO), SAIC (federal UX for CDC)
- He designs AND builds — ships production code, not just Figma files
- His AI SaaS platform processes 70K+ leads, achieves 35-50% open rates

Be concise, professional, and helpful. Keep responses under 3 sentences unless more detail is requested.`

const SUGGESTIONS = [
  "What makes Roderick different?",
  "AI product experience",
  "Fortune 500 work",
  "Tech stack",
]

export default function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [showKeyInput, setShowKeyInput] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')
    setLoading(true)

    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'assistant', content: getStaticResponse(text) }])
        setLoading(false)
      }, 800)
      return
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { role: 'user', parts: [{ text: CONTEXT }] },
              { role: 'model', parts: [{ text: 'Ready to help.' }] },
              ...messages.map((m) => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.content }],
              })),
              { role: 'user', parts: [{ text }] },
            ],
          }),
        }
      )
      const data = await response.json()
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Could not generate a response.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Something went wrong.' }])
    }
    setLoading(false)
  }

  return (
    <section id="ai" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs sm:text-sm font-mono text-[var(--color-accent)] mb-3">// AI Assistant</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Ask me{' '}
            <span className="gradient-text">anything</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            Powered by Gemini — ask about my experience, skills, or approach.
          </p>
        </motion.div>

        <button
          onClick={() => setShowKeyInput(!showKeyInput)}
          className="text-[10px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors mb-4 block"
        >
          {apiKey ? 'Gemini connected' : 'Connect Gemini API key (optional)'}
        </button>
        <AnimatePresence>
          {showKeyInput && (
            <motion.input
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              type="password"
              placeholder="Gemini API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
            />
          )}
        </AnimatePresence>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
          <div className="h-[320px] overflow-y-auto p-5 space-y-3">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Sparkles size={20} className="text-[var(--color-accent)] mb-4" />
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mb-5">
                  Ask about my experience or design philosophy
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-[11px] px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-[var(--color-accent)]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[var(--color-accent)] text-white rounded-br-sm'
                      : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-[var(--color-text-muted)]" />
                  </div>
                )}
              </motion.div>
            ))}

            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-[var(--color-accent)]" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[var(--color-bg)]">
                  <Loader2 size={14} className="text-[var(--color-accent)] animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[var(--color-border)] p-3">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input) }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                disabled={loading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-3.5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function getStaticResponse(question: string): string {
  const q = question.toLowerCase()
  if (q.includes('different') || q.includes('unique') || q.includes('stand out'))
    return "Roderick ships production code — React, TypeScript, full AI integrations — not just Figma mockups. He's built voice AI agents, automated 10+ service pipelines, and replaced $497/mo SaaS tools with self-hosted solutions."
  if (q.includes('ai') || q.includes('product experience'))
    return "He designs and builds an AI-powered SaaS platform processing 70K+ leads with voice AI (Retell), Gemini-powered personalization, and automated lead scoring. His system achieves 35-50% open rates — 2-3x industry average."
  if (q.includes('fortune') || q.includes('company') || q.includes('companies'))
    return "Delta Air Lines (4.5 years, 15% faster boarding), IHG Hotels (5.5 years, $50M revenue platform), Pfizer (2.5 years, enterprise design system), State Farm (2 years, 20% retention increase), and Yahoo ($2M CRO revenue)."
  if (q.includes('tech') || q.includes('stack') || q.includes('skill'))
    return "React, TypeScript, Tailwind CSS, Node.js, Supabase, Stripe, Figma, Voice AI (Retell), Gemini, Claude, n8n, Design Systems, A/B Testing, CRO."
  if (q.includes('hire') || q.includes('available') || q.includes('contact'))
    return "Open to senior AI Product Designer, Design Engineer, and AI Product Engineer roles. Based in Atlanta, GA and open to remote. Scroll down or reach out on LinkedIn."
  return "AI Product Designer with 20+ years at Delta, IHG, Pfizer, and State Farm. Currently building AI-native SaaS products end-to-end. What would you like to know?"
}
