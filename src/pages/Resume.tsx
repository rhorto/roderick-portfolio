import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'

const jobs = [
  { co: 'Audiences247', title: 'AI Product Designer & Engineer', yr: '2024–Present', bullets: ['Ship AI SaaS products end-to-end (React, TypeScript, Supabase, Stripe)', 'Design voice AI agents and Gemini-powered email personalization', 'Architect n8n automation workflows connecting 10+ services', 'Replace $497/mo SaaS tools — 75% cost reduction'] },
  { co: 'Pfizer', title: 'Senior UX Designer', yr: '2022–2024', bullets: ['Created enterprise design system — 40% redundancy reduction', 'Led end-to-end UX for multiple healthcare products', 'Conducted user research, usability testing, and A/B testing'] },
  { co: 'State Farm', title: 'Senior UX Designer', yr: '2021–2022', bullets: ['Redesigned Drive Safe & Save app — 20% retention increase', 'Unified iOS and Android design language'] },
  { co: 'IHG Hotels & Resorts', title: 'Senior UX Designer', yr: '2015–2020', bullets: ['Delivered $50M attribute-based selling platform', '35% loyalty program increase, 25% booking increase'] },
  { co: 'Delta Air Lines', title: 'UX Designer', yr: '2010–2015', bullets: ['Redesigned Gate Agent app — 15% faster boarding', 'Delta Seating App — 25% usage increase'] },
  { co: 'Yahoo', title: 'Digital Marketing Strategist', yr: '2007–2010', bullets: ['CRO optimization — $2M additional revenue'] },
  { co: 'SAIC', title: 'Usability Analyst', yr: '2004–2007', bullets: ['UX solutions for CDC and Office of Management and Budget'] },
]

export default function Resume() {
  return (
    <PageWrap>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Resume</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold">Roderick <span className="text-gradient">Horton</span></h1>
              <a href="mailto:roderickhorton@gmail.com" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">roderickhorton@gmail.com</a>
            </div>
            <p className="text-base text-zinc-400 mb-2">AI Product Designer · Atlanta, GA · Remote OK</p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mb-10">
              AI Product Designer with 20+ years shipping products at enterprise scale. I design and build — React, TypeScript, voice AI, automation systems. Previously at Pfizer, State Farm, IHG Hotels, and Delta Air Lines.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-zinc-800/50">
              {['AI Product Design', 'React/TypeScript', 'Design Systems', 'Voice AI', 'Supabase', 'Figma', 'n8n', 'User Research', 'A/B Testing', 'CRO', 'WCAG', 'Prompt Engineering'].map(s => (
                <span key={s} className="text-xs px-3 py-1 rounded-full border border-zinc-800 text-zinc-500">{s}</span>
              ))}
            </div>
          </ScrollReveal>

          <div className="space-y-0 divide-y divide-zinc-800/50">
            {jobs.map((j, i) => (
              <ScrollReveal key={j.co} delay={i * 0.04}>
                <div className="py-7 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-[15px] font-semibold">{j.co}</h3>
                    <span className="text-xs text-zinc-500 font-mono">{j.yr}</span>
                  </div>
                  <p className="text-sm text-indigo-400 font-medium mb-2">{j.title}</p>
                  <ul className="space-y-1.5">
                    {j.bullets.map(b => (
                      <li key={b} className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">{b}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  )
}
