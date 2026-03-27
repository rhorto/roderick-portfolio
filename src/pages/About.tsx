import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'

const experience = [
  { co: 'Audiences247', role: 'AI Product Designer', yr: '2024–Present', desc: 'Designing and building AI SaaS end-to-end — voice AI, lead scoring, automation' },
  { co: 'Pfizer', role: 'Senior UX Designer', yr: '2022–2024', desc: 'Enterprise design system reducing redundancy 40% across healthcare products' },
  { co: 'State Farm', role: 'Senior UX Designer', yr: '2021–2022', desc: 'Mobile app redesign driving 20% retention increase' },
  { co: 'IHG Hotels', role: 'Senior UX Designer', yr: '2015–2020', desc: '$50M revenue platform — attribute-based selling' },
  { co: 'Delta Air Lines', role: 'UX Designer', yr: '2010–2015', desc: 'Gate agent app — 15% faster boarding' },
  { co: 'Yahoo', role: 'Digital Marketing Strategist', yr: '2007–2010', desc: 'CRO driving $2M in additional revenue' },
  { co: 'SAIC', role: 'Usability Analyst', yr: '2004–2007', desc: 'Federal UX for CDC and OMB' },
]

const principles = [
  { title: 'Ship, don\'t spec', text: 'The best design artifact is working software. I write production code because the gap between Figma and production is where products lose their soul.' },
  { title: 'Design for the constraint', text: 'Every great product is shaped by its constraints — budget, timeline, regulation, legacy systems. I design within reality, not in a vacuum.' },
  { title: 'AI should be invisible', text: 'The best AI features don\'t announce themselves. Users shouldn\'t know they\'re interacting with AI — they should just notice things work better.' },
  { title: 'Measure everything', text: 'If you can\'t quantify the impact of a design decision, you can\'t defend it. I tie every major UX change to a business metric.' },
]

export default function About() {
  return (
    <PageWrap>
      {/* Intro */}
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>About</SectionLabel>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Designer who <span className="text-gradient">builds</span></h1>
            <div className="space-y-4 text-base text-zinc-400 leading-relaxed max-w-2xl">
              <p>I'm an AI Product Designer with 20+ years shipping products at enterprise scale. I've designed for Delta Air Lines, IHG Hotels, Pfizer, and State Farm — products used by millions of people.</p>
              <p>Today I design and build AI-native SaaS products end-to-end. I write production React and TypeScript. I architect voice AI systems. I build automation pipelines that replace expensive tools. I don't hand off Figma files — I ship.</p>
              <p>I believe the best AI products come from designers who understand the full stack — from the prompt to the pixel.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>What I Do</SectionLabel>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              ['AI Product Design', 'Voice AI agents, conversational systems, prompt engineering, AI UX patterns'],
              ['Full-Stack Development', 'React, TypeScript, Node.js, Supabase, Stripe — production code, not prototypes'],
              ['Design Systems', 'Component libraries, design tokens, governance frameworks at enterprise scale'],
              ['Automation Architecture', 'n8n workflows, API orchestration, pipeline design replacing $500+/mo SaaS'],
            ].map(([t, d], i) => (
              <ScrollReveal key={t} delay={i * 0.06}>
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-5 h-full">
                  <h3 className="text-sm font-semibold mb-2">{t}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>How I Think</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Design <span className="text-gradient">principles</span></h2>
          </ScrollReveal>
          <div className="space-y-6">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <div className="border-l-2 border-indigo-500/30 pl-5 py-1">
                  <h3 className="text-base font-semibold mb-1.5">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 sm:py-24 border-y border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-12">Where I've <span className="text-gradient">shipped</span></h2>
          </ScrollReveal>
          <div className="divide-y divide-zinc-800/50">
            {experience.map((e, i) => (
              <ScrollReveal key={e.co} delay={i * 0.04}>
                <div className="py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                    <h3 className="text-[15px] font-semibold">{e.co}</h3>
                    <span className="text-xs text-zinc-500 font-mono">{e.yr}</span>
                  </div>
                  <p className="text-sm text-indigo-400 font-medium mb-1.5">{e.role}</p>
                  <p className="text-sm text-zinc-500">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Technologies</SectionLabel>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'Stripe', 'Figma', 'n8n', 'Voice AI (Retell)', 'Prompt Engineering', 'Gemini', 'Claude', 'Design Systems', 'A/B Testing', 'CRO', 'WCAG', 'Prototyping', 'User Research'].map(s => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-500 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionLabel>Connect</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-4">Let's build something <span className="text-gradient">meaningful</span></h2>
            <p className="text-base text-zinc-400 max-w-md mx-auto mb-10">Open to AI Product Designer, Design Engineer, and AI Product Engineer roles.</p>
            <div className="flex items-center justify-center gap-3 mb-10">
              <a href="mailto:roderickhorton@gmail.com" className="h-12 px-7 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-indigo-400 transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]">Email Me</a>
              <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer" className="h-12 px-7 rounded-full border border-zinc-700 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-900 transition-all">LinkedIn</a>
            </div>
            <p className="text-xs text-zinc-500">Atlanta, GA · Remote OK</p>
          </ScrollReveal>
        </div>
      </section>
    </PageWrap>
  )
}
