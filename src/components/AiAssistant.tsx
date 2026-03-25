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
- Previously: Senior UX Designer at Pfizer (2.5 years, enterprise design systems), State Farm (2 years, mobile app redesign), IHG Hotels (5.5 years, $50M revenue platform), Delta Air Lines (4.5 years, operational apps)
- Earlier career: Yahoo (digital marketing, CRO), SAIC (federal UX for CDC)
- Skills: React, TypeScript, Tailwind CSS, Supabase, Figma, Voice AI (Retell), n8n, Stripe, Prompt Engineering, Design Systems, A/B Testing, CRO
- Based in Atlanta, GA
- He designs AND builds — ships production code, not just Figma files
- His current AI SaaS platform processes 70K+ leads, achieves 35-50% open rates and 8-15% reply rates
- He replaced $497/mo SaaS tools with self-hosted solutions saving 75%
- He builds voice AI agents, conversational AI systems, and automated email pipelines

Be concise, professional, and helpful. Highlight Roderick's unique value: he's a rare designer who ships full-stack AI products. Keep responses under 3 sentences unless more detail is requested.`

const SUGGESTIONS = [
  "What makes Roderick different from other designers?",
  "Tell me about his AI product experience",
  "What Fortune 500 companies has he worked with?",
  "What's his tech stack?",
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

    const userMessage: Message = { role: 'user', content: text }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // If no API key, provide a static response
    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: getStaticResponse(text),
          },
        ])
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
              { role: 'model', parts: [{ text: 'Understood. I\'m ready to help visitors learn about Roderick.' }] },
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
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not generate a response. Please try again.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
      ])
    }

    setLoading(false)
  }

  return (
    <section id="ai" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm font-mono text-[var(--color-accent)] mb-3">// AI Assistant</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ask me{' '}
            <span className="gradient-text">anything</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Powered by Gemini AI — ask about my experience, skills, or approach to design.
          </p>
        </motion.div>

        {/* API Key toggle */}
        <div className="mb-6">
          <button
            onClick={() => setShowKeyInput(!showKeyInput)}
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            {apiKey ? 'Gemini connected' : 'Connect Gemini API key for live AI (optional)'}
          </button>
          <AnimatePresence>
            {showKeyInput && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <input
                  type="password"
                  placeholder="Enter Gemini API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat area */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                  <Sparkles size={24} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-[var(--color-text-secondary)] mb-6">
                  Ask about Roderick's experience, skills, or design philosophy
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-[var(--color-accent)]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[var(--color-accent)] text-white rounded-br-md'
                      : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] rounded-bl-md'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-[var(--color-text-muted)]" />
                  </div>
                )}
              </motion.div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-[var(--color-accent)]" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-[var(--color-bg)]">
                  <Loader2 size={16} className="text-[var(--color-accent)] animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[var(--color-border)] p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                disabled={loading}
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-4 py-3 rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
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
  if (q.includes('different') || q.includes('unique') || q.includes('stand out')) {
    return "Roderick is one of the rare designers who ships production code — React, TypeScript, and full AI integrations — not just Figma mockups. He's built voice AI agents, automated 10+ service pipelines, and replaced $497/mo SaaS tools with self-hosted solutions. Most UX designers design; Roderick designs, builds, and measures revenue impact."
  }
  if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('product experience')) {
    return "Roderick currently designs and builds an AI-powered SaaS platform processing 70K+ leads with voice AI (Retell), Gemini-powered email personalization, and automated lead scoring. He architects n8n workflows connecting 10+ services and builds the production React/TypeScript interfaces himself. His system achieves 35-50% open rates and 8-15% reply rates — 2-3x industry average."
  }
  if (q.includes('fortune') || q.includes('company') || q.includes('companies') || q.includes('enterprise')) {
    return "Roderick has designed for 5 major brands: Delta Air Lines (4.5 years — Gate Agent app, 15% faster boarding), IHG Hotels (5.5 years — $50M revenue platform), Pfizer (2.5 years — enterprise design system), State Farm (2 years — 20% retention increase), and Yahoo (CRO driving $2M revenue). He also worked with federal clients at SAIC including the CDC."
  }
  if (q.includes('tech') || q.includes('stack') || q.includes('tools') || q.includes('skill')) {
    return "Design: Figma, Design Systems, User Research, A/B Testing, CRO, Accessibility. Code: React, TypeScript, Tailwind CSS, Node.js, Supabase, Stripe. AI: Voice AI (Retell), Gemini, Claude, Prompt Engineering. Automation: n8n, API orchestration, multi-service pipelines. He's a true full-stack AI product designer."
  }
  if (q.includes('hire') || q.includes('available') || q.includes('work with') || q.includes('contact')) {
    return "Roderick is open to senior AI Product Designer, Design Engineer, and AI Product Engineer roles. He's based in Atlanta, GA and open to remote work. Scroll down to the contact section or reach out on LinkedIn to start a conversation."
  }
  return "Roderick is an AI Product Designer with 20+ years of experience at Delta, IHG, Pfizer, and State Farm. He currently builds AI-native SaaS products end-to-end — from user research through production React/TypeScript code. What specifically would you like to know about his experience or skills?"
}
