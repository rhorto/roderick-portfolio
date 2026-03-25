import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="#top" className="text-lg font-bold text-gradient">RH</a>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-white bg-indigo-500 hover:bg-indigo-400 h-9 px-5 rounded-full inline-flex items-center transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="min-h-[90vh] flex items-center pt-16">
        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-indigo-400 mb-4">AI Product Designer</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Hi, I'm <span className="text-gradient">Roderick</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-3 max-w-xl">
              I design and build AI-powered products that drive revenue and transform user experiences.
              20+ years shipping at Delta, IHG, Pfizer, and State Farm.
            </p>
            <p className="text-sm text-zinc-500 mb-10">
              Currently building voice AI and SaaS automation systems in Atlanta, GA.
            </p>
            <div className="flex flex-wrap gap-3 mb-16">
              <a href="#work" className="h-11 px-6 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center hover:bg-indigo-400 transition-colors">View Work</a>
              <a href="#contact" className="h-11 px-6 rounded-full border border-zinc-700 text-white text-sm font-medium inline-flex items-center hover:bg-zinc-900 transition-colors">Get in Touch</a>
            </div>
            <div className="flex gap-10 sm:gap-14">
              {[['20+', 'Years Experience'], ['$50M', 'Revenue Impact'], ['5', 'Fortune 500 Clients'], ['70K+', 'AI Leads Processed']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-xl sm:text-2xl font-bold text-gradient">{v}</div>
                  <div className="text-xs text-zinc-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="aspect-video rounded-2xl border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-zinc-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="text-sm text-zinc-400">Video walkthrough coming soon</p>
          </div>
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-indigo-400 mb-2">Selected Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Projects that <span className="text-gradient">ship & scale</span></h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              { title: 'AI SaaS Platform', co: 'Audiences247', yr: '2024–Present', desc: 'Multi-tenant SaaS replacing $497/mo tools with voice AI, lead scoring, and outreach.', tags: ['AI', 'React', 'Voice AI'], stats: [['70K+', 'Leads'], ['35–50%', 'Opens'], ['75%', 'Cost Cut']], color: '#6366f1', id: 'audiences247' },
              { title: '$50M Booking Platform', co: 'IHG Hotels', yr: '2015–2020', desc: 'Attribute-based selling enabling guests to customize room features.', tags: ['UX/UI', 'Research', 'Strategy'], stats: [['$50M', 'Revenue'], ['35%', 'Loyalty ↑']], color: '#10b981', id: 'ihg' },
              { title: 'Enterprise Design System', co: 'Pfizer', yr: '2022–2024', desc: 'Scalable design system with reusable tokens for healthcare products.', tags: ['Design Systems', 'Healthcare'], stats: [['40%', 'Less Redundancy']], color: '#0ea5e9', id: 'pfizer' },
              { title: 'Gate Agent Redesign', co: 'Delta Air Lines', yr: '2010–2015', desc: 'Redesigned boarding application cutting gate times.', tags: ['Enterprise UX', 'Operations'], stats: [['-15%', 'Board Time'], ['+25%', 'Usage']], color: '#ef4444', id: 'delta' },
              { title: 'Drive Safe & Save', co: 'State Farm', yr: '2021–2022', desc: 'iOS and Android redesign driving retention and savings enrollment.', tags: ['Mobile UX', 'iOS', 'Android'], stats: [['+20%', 'Retention'], ['+15%', 'Enrollments']], color: '#f59e0b', id: 'statefarm' },
            ].map(p => (
              <a key={p.id} href={`/case-study/${p.id}`} className="group block rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
                <div className="h-40 rounded-t-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)` }}>
                  <span className="text-lg font-semibold" style={{ color: `${p.color}50` }}>{p.co}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                  <p className="text-xs text-zinc-500 mt-1 mb-3">{p.co} · {p.yr}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
                  </div>
                  <div className="flex gap-6 pt-4 border-t border-zinc-800">
                    {p.stats.map(([v, l]) => (
                      <div key={l}><div className="text-sm font-semibold" style={{ color: p.color }}>{v}</div><div className="text-xs text-zinc-500">{l}</div></div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-indigo-400 mb-2">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Designer who <span className="text-gradient">builds</span></h2>
          <div className="max-w-2xl space-y-4 text-base text-zinc-400 leading-relaxed mb-12">
            <p>20+ years shipping products at enterprise scale — Delta, IHG, Pfizer, State Farm — products used by millions.</p>
            <p>Today I design and build AI-native SaaS end-to-end. Production React and TypeScript. Voice AI systems. Automation pipelines. I don't hand off Figma files — I ship.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              ['AI Product Design', 'Voice AI, prompt engineering, conversational systems'],
              ['Full-Stack Dev', 'React, TypeScript, Supabase, Stripe — production code'],
              ['Design Systems', 'Component libraries, tokens, governance at scale'],
              ['Automation', 'n8n workflows, API orchestration, pipeline design'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <h3 className="text-sm font-semibold mb-1.5">{t}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <h3 className="text-sm font-semibold mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Supabase', 'Stripe', 'Figma', 'n8n', 'Voice AI', 'Prompt Engineering', 'Gemini', 'Claude', 'Design Systems', 'A/B Testing', 'CRO', 'WCAG'].map(s => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-500 hover:border-indigo-500 hover:text-indigo-400 transition-colors cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 sm:py-24 border-y border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-indigo-400 mb-2">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">Where I've <span className="text-gradient">shipped</span></h2>
          <div className="divide-y divide-zinc-800/50">
            {[
              { co: 'Audiences247', role: 'AI Product Designer', period: 'Aug 2024 – Present', bullets: ['Ship AI-powered SaaS products end-to-end', 'Build production interfaces with React, TypeScript, Supabase, Stripe', 'Design voice AI agents and automated email pipelines', 'Architect n8n automation workflows connecting 10+ services'] },
              { co: 'Pfizer', role: 'Senior UX Designer', period: 'Jan 2022 – Aug 2024', bullets: ['Created enterprise design system reducing redundancy by 40%', 'Led end-to-end UX for multiple healthcare products', 'Conducted user research, usability testing, and A/B testing'] },
              { co: 'State Farm', role: 'Senior UX Designer', period: 'Jan 2021 – Dec 2022', bullets: ['Redesigned Drive Safe & Save app — 20% retention increase', 'Led end-to-end design for mobile and web applications'] },
              { co: 'IHG Hotels & Resorts', role: 'Senior UX Designer', period: 'Apr 2015 – Sep 2020', bullets: ['Delivered $50M attribute-based selling platform', '35% increase in loyalty program participation', 'Redesigned booking experience — 25% increase in online bookings'] },
              { co: 'Delta Air Lines', role: 'UX Designer', period: 'Oct 2010 – Feb 2015', bullets: ['Redesigned Gate Agent Application — 15% faster boarding', 'Delta Seating App — 25% increase in usage'] },
              { co: 'Yahoo', role: 'Digital Marketing Strategist', period: 'Jan 2007 – Oct 2010', bullets: ['CRO optimization driving $2M in additional revenue'] },
              { co: 'SAIC', role: 'Usability Analyst', period: 'Oct 2004 – Jan 2007', bullets: ['UX solutions for federal clients (CDC, OMB)'] },
            ].map(e => (
              <div key={e.co} className="py-8 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold">{e.co}</h3>
                  <span className="text-xs text-zinc-500 font-mono">{e.period}</span>
                </div>
                <p className="text-sm text-indigo-400 font-medium mb-3">{e.role}</p>
                <ul className="space-y-2">
                  {e.bullets.map(b => (
                    <li key={b} className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-medium text-indigo-400 mb-2">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12">What others <span className="text-gradient">say</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { q: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy by 40%, and engineers loved his specs because they were production-ready.", n: 'Sarah Chen', r: 'Director of Product, Pfizer' },
              { q: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch — $50M in incremental revenue in year one.", n: 'Michael Torres', r: 'VP of Digital, IHG Hotels' },
              { q: "Most designers hand off Figma files and move on. Roderick shipped production React code, built automation pipelines, and integrated voice AI — all while keeping UX clean.", n: 'David Park', r: 'Engineering Lead, Audiences247' },
            ].map(t => (
              <div key={t.n} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                <span className="text-3xl text-gradient font-serif">"</span>
                <p className="text-sm text-zinc-400 leading-relaxed italic mt-1 mb-5">{t.q}</p>
                <p className="text-sm font-semibold">{t.n}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-indigo-400 mb-2">Connect</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's build something <span className="text-gradient">meaningful</span></h2>
          <p className="text-base text-zinc-400 max-w-md mx-auto mb-10">Open to AI Product Designer, Design Engineer, and AI Product Engineer roles.</p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <a href="mailto:roderickhorton@gmail.com" className="h-11 px-6 rounded-full bg-indigo-500 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-indigo-400 transition-colors">Email Me</a>
            <a href="https://linkedin.com/in/roderickhorton" target="_blank" rel="noopener noreferrer" className="h-11 px-6 rounded-full border border-zinc-700 text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-900 transition-colors">LinkedIn</a>
          </div>
          <p className="text-xs text-zinc-500">Atlanta, GA · Remote OK</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Roderick Horton</span>
          <div className="flex gap-6">
            <a href="#work" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Work</a>
            <a href="#about" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">About</a>
            <a href="#contact" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/case-study/:id" element={<div className="max-w-5xl mx-auto px-6 py-32 text-center"><p className="text-zinc-400">Case study page — coming soon</p><a href="/" className="text-indigo-400 text-sm mt-4 block hover:underline">Back to home</a></div>} />
    </Routes>
  )
}
