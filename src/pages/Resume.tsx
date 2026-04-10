import PageWrap from '../components/PageWrap'
import ScrollReveal from '../components/ScrollReveal'
import SectionLabel from '../components/SectionLabel'

const jobs = [
  { co: 'Bank of America', title: 'Senior User Experience Designer', yr: 'Jan 2025–Mar 2026', location: 'Charlotte, NC (Remote)', bullets: ['Designed enterprise applications for Financial Center and Contact Center agents', 'Advised leadership on AI introduction strategy across agent-facing tools', 'Led AI chatbot design optimizing usage and conversational experience'] },
  { co: 'Independent Contractor', title: 'AI Product Designer | Enterprise UX & SaaS', yr: 'Aug 2024–Present', location: 'Remote', bullets: ['Design end-to-end AI-driven SaaS products with scalable experience systems for multi-tenant B2B platforms', 'Create human-AI interaction models including voice agents, conversational chat, and automated email pipelines', 'Build production-ready interfaces using React, TypeScript, Tailwind CSS, Supabase, and Stripe', 'Architect and deploy n8n automation workflows connecting 10+ services'] },
  { co: 'Pfizer', title: 'Senior User Experience Designer', yr: 'Jan 2022–Aug 2024', location: 'New York, NY (Remote)', bullets: ['Led creation of enterprise-level Figma design system with scalable design tokens — 40% redundancy reduction', 'Conducted user research, usability testing, and A/B testing — 40% user engagement improvement', 'Collaborated with Product, Engineering, and stakeholder teams on responsive, WCAG-compliant designs', 'Mentored junior designers on design system standards and best practices'] },
  { co: 'State Farm Insurance', title: 'Senior User Experience Designer', yr: 'Jan 2021–Dec 2022', location: 'Atlanta, GA (Remote)', bullets: ['Redesigned Drive Safe & Save iOS and Android app — 20% retention increase, 15% savings enrollment boost', 'Led user research and usability testing for AI-informed features including predictive scoring and personalization', 'Created personas, user journey maps, and wireframes for complex insurance workflows'] },
  { co: 'IHG Hotels & Resorts', title: 'Senior User Experience Designer', yr: 'Apr 2015–Sep 2020', location: 'Atlanta, GA', bullets: ['Delivered Attribute-Based Selling Platform contributing to $50M in annual incremental revenue', 'Designed IHG Rewards Club experiences — 35% increase in loyalty program participation', 'Redesigned customer booking experience — 25% increase in online bookings', 'Defined UX principles for B2B booking tools improving agent productivity by 20%'] },
  { co: 'Delta Air Lines', title: 'User Experience Designer', yr: 'Oct 2010–Feb 2015', location: 'Atlanta, GA', bullets: ['Led redesign of Gate Agent Application — 15% faster boarding times', 'Developed user flows for Delta Seating App — 25% increase in app usage', 'Facilitated design thinking workshops gathering cross-functional input'] },
  { co: 'Bank of America', title: 'User Experience Designer', yr: '2008–2010', location: 'Charlotte, NC', bullets: ['Designed financial center apps for agent customer servicing', 'Unified in-office and online servicing channels', 'Streamlined account management and transaction workflows'] },
  { co: 'Yahoo', title: 'Digital Marketing Strategist', yr: '2007–2010', location: 'Remote', bullets: ['CRO optimization — $2M additional revenue'] },
  { co: 'SAIC', title: 'Usability Analyst', yr: '2004–2007', location: 'Washington, DC', bullets: ['UX solutions for CDC and Office of Management and Budget'] },
]

const education = [
  { school: 'Georgia Institute of Technology', degree: 'Computer Programming Certification', yr: '2008' },
  { school: 'Mississippi State University', degree: 'Bachelor of Fine Arts, Graphic Design', yr: '1997' },
]

const competencies = {
  'Product & UX Design': 'Design Systems, Information Architecture, Interaction Design, User Flows, Wireframes, High-Fidelity Prototyping, Responsive/Mobile Design',
  'AI/UX': 'Conversational UI, Voice UI (VUI), AI Trust & Transparency Patterns, Predictive Interaction Design',
  'Research & Strategy': 'User Research, Usability Testing, A/B Testing, Data Analysis, Design Sprints, Stakeholder Workshops',
  'Tools': 'Figma (Expert), React, TypeScript, Tailwind CSS, Supabase, n8n Automation',
  'Leadership': 'Cross-Functional Collaboration, Design System Governance, Mentoring, Stakeholder Communication',
}

export default function Resume() {
  return (
    <PageWrap>
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>Resume</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-heading">Roderick <span className="text-gradient">Horton</span></h1>
              <a href="mailto:roderickhorton@gmail.com" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">roderickhorton@gmail.com</a>
            </div>
            <p className="text-base text-zinc-400 mb-1">AI Product Designer | Enterprise UX & SaaS</p>
            <p className="text-sm text-zinc-500 mb-2">Atlanta, GA · (470) 557-9338 · Remote OK</p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mb-6">
              Designer with 14+ years in enterprise UX and AI-driven products for Fortune 500 companies. Specializes in design systems, user research, and AI/ML product design. $100M+ revenue impact across Pfizer, State Farm, IHG, and Delta Air Lines.
            </p>

            {/* View & Download */}
            <a
              href="https://hirejet.ai/resumes/roderick-horton-general.html"
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all mb-10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-zinc-800/50">
              {['AI Product Design', 'Conversational UI', 'Voice UI', 'Design Systems', 'React/TypeScript', 'Figma', 'Supabase', 'n8n Automation', 'User Research', 'A/B Testing', 'WCAG', 'Prototyping', 'Data Analysis'].map(s => (
                <span key={s} className="text-xs px-3 py-1 rounded-full border border-zinc-800 text-zinc-500">{s}</span>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-500 mb-6">Experience</h2>
          </ScrollReveal>
          <div className="space-y-0 divide-y divide-zinc-800/50 mb-16">
            {jobs.map((j, i) => (
              <ScrollReveal key={`${j.co}-${j.yr}`} delay={i * 0.04}>
                <div className="py-7 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-[15px] font-semibold">{j.co}</h3>
                    <span className="text-xs text-zinc-500 font-mono">{j.yr}</span>
                  </div>
                  <p className="text-sm text-indigo-400 font-medium mb-0.5">{j.title}</p>
                  <p className="text-xs text-zinc-600 mb-2">{j.location}</p>
                  <ul className="space-y-1.5">
                    {j.bullets.map(b => (
                      <li key={b} className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">{b}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Core Competencies */}
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-500 mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {Object.entries(competencies).map(([category, skills]) => (
                <div key={category} className="rounded-xl border border-white/[0.06] bg-zinc-900/30 p-4">
                  <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">{category}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{skills}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal>
            <h2 className="text-xs uppercase tracking-[0.15em] font-medium text-zinc-500 mb-6">Education</h2>
            <div className="space-y-4 pb-16">
              {education.map(e => (
                <div key={e.school} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-[15px] font-semibold">{e.school}</h3>
                    <p className="text-sm text-zinc-400">{e.degree}</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">{e.yr}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrap>
  )
}
