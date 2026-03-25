import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-gradient">RH</Link>
          <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors">← Back to home</Link>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="py-16 sm:py-20">
            <p className="text-sm text-indigo-400 font-medium mb-2">Resume</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Roderick Horton</h1>
            <p className="text-base text-zinc-400 mb-2">AI Product Designer · Atlanta, GA · Remote OK</p>
            <p className="text-sm text-zinc-500 mb-8">roderickhorton@gmail.com · linkedin.com/in/roderickhorton</p>
            <a href="#" className="h-11 px-6 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-colors">Download PDF</a>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-3 pb-2 border-b border-zinc-800">Summary</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              AI Product Designer with 20+ years shipping products at enterprise scale. I design and code — React, TypeScript, voice AI, and automation systems. Previously at Pfizer, State Farm, IHG Hotels, and Delta Air Lines designing products used by millions. Currently building AI-native SaaS platforms from zero to revenue.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-3 pb-2 border-b border-zinc-800">Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Design</h3>
                <p className="text-sm text-zinc-400">Product Design, Design Systems, Conversational AI/UX, Prototyping, User Research, Accessibility, A/B Testing</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Technical</h3>
                <p className="text-sm text-zinc-400">React, TypeScript, Node.js, Supabase, Figma, Voice AI (Retell), n8n, Stripe, Prompt Engineering, Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-lg font-bold mb-3 pb-2 border-b border-zinc-800">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'AI Product Designer', co: 'Audiences247', period: 'Aug 2024 – Present',
                  bullets: [
                    'Designed and built multi-tenant AI SaaS platform (React, TypeScript, Supabase) replacing $497/mo tools',
                    'Created voice AI receptionist system handling inbound calls with real-time lead qualification',
                    'Built automated lead scoring pipeline processing 70K+ prospects using AI classification',
                    'Designed 3-tier pricing/checkout flow with Stripe integration',
                  ],
                },
                {
                  title: 'Senior UX Designer', co: 'Pfizer', period: 'Jan 2022 – Aug 2024',
                  bullets: [
                    'Led design system serving multiple product teams across enterprise healthcare applications',
                    'Reduced design redundancy by 40% with scalable, reusable design tokens',
                    'Conducted user research, usability testing, and A/B testing across products',
                  ],
                },
                {
                  title: 'Senior UX Designer', co: 'State Farm', period: 'Jan 2021 – Dec 2022',
                  bullets: [
                    'Redesigned Drive Safe & Save mobile app — 20% customer retention increase',
                    'Led end-to-end design for iOS and Android platforms',
                  ],
                },
                {
                  title: 'Senior UX Designer', co: 'IHG Hotels & Resorts', period: 'Apr 2015 – Sep 2020',
                  bullets: [
                    'Designed $50M attribute-based selling platform',
                    'Drove 35% increase in loyalty program engagement',
                    'Led UX for booking experience — 25% increase in online bookings',
                  ],
                },
                {
                  title: 'UX Designer', co: 'Delta Air Lines', period: 'Oct 2010 – Feb 2015',
                  bullets: [
                    'Redesigned Gate Agent Application — 15% faster boarding',
                    'Delta Seating App — 25% increase in app usage',
                  ],
                },
                {
                  title: 'Digital Marketing Strategist', co: 'Yahoo', period: 'Jan 2007 – Oct 2010',
                  bullets: ['Led CRO initiatives generating $2M in revenue'],
                },
                {
                  title: 'Usability Analyst', co: 'SAIC', period: 'Oct 2004 – Jan 2007',
                  bullets: ['Usability research for federal clients including CDC'],
                },
              ].map(e => (
                <div key={e.co}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                    <h3 className="text-sm font-semibold">{e.title} — {e.co}</h3>
                    <span className="text-xs text-zinc-500 font-mono">{e.period}</span>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {e.bullets.map(b => (
                      <li key={b} className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="text-sm text-indigo-400 hover:underline">← Back to portfolio</Link>
        </div>
      </div>
    </>
  )
}
