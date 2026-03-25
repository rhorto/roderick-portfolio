import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'

const studies: Record<string, {
  title: string; company: string; color: string; timeline: string
  problem: string; process: string[]; solution: string
  results: { metric: string; label: string; desc: string }[]
  tools: string[]
  before?: string; after?: string; baCaption?: string
}> = {
  audiences247: {
    title: 'AI SaaS Platform', company: 'Audiences247', color: '#6366f1', timeline: 'Aug 2024 – Present',
    problem: 'Small businesses were paying $497+/month for GoHighLevel and similar SaaS tools, getting generic solutions that didn\'t address their needs. HVAC contractors were losing thousands monthly in missed after-hours calls — no AI receptionist, no automated follow-ups, no way to track which marketing channels drove revenue.',
    process: [
      'Researched the HVAC contractor market — interviewed owners, analyzed competitors, mapped the customer journey',
      'Designed multi-tenant architecture with Supabase RLS for data isolation between organizations',
      'Built a 13-point website audit system that crawls prospect sites and identifies revenue opportunities',
      'Integrated Retell AI voice agent for 24/7 call handling with real-time lead qualification',
      'Created automated email pipelines using Gemini AI for hyper-personalized outreach at scale',
      'Designed and shipped conversion-optimized checkout flow with Stripe integration',
    ],
    solution: 'A self-hosted multi-tenant SaaS platform replacing expensive tools with an integrated suite: AI voice receptionist, automated lead scoring across 70K+ prospects, personalized email outreach achieving 2-3x industry response rates, and real-time dashboards — all at 75% lower cost.',
    results: [
      { metric: '70K+', label: 'Leads Processed', desc: 'Classified, scored, and enriched using AI pipeline' },
      { metric: '35-50%', label: 'Email Open Rate', desc: 'vs. 21% industry average' },
      { metric: '8-15%', label: 'Reply Rate', desc: '2-3x national average' },
      { metric: '75%', label: 'Cost Reduction', desc: '$52/mo vs $206/mo for equivalent stack' },
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Retell AI', 'Gemini', 'n8n', 'Tailwind CSS'],
    before: 'Paying $497+/mo for GoHighLevel. Generic templates. No voice AI. Manual follow-ups. No lead scoring. Missed calls costing $2K+/month.',
    after: 'Self-hosted at $52/mo. AI voice receptionist 24/7. Automated 5-step email sequences. 10-point lead scoring. 70K+ leads processed automatically.',
    baCaption: 'From manual, expensive SaaS to AI-powered automation',
  },
  ihg: {
    title: '$50M Booking Platform', company: 'IHG Hotels & Resorts', color: '#10b981', timeline: 'Apr 2015 – Sep 2020',
    problem: 'IHG\'s booking system treated rooms as identical commodities. Guests couldn\'t choose floor level, view type, or amenities — leading to lower revenue per booking and reduced satisfaction. Loyalty program participation was stagnating.',
    process: [
      'Conducted user research with guests and hotel staff to understand booking pain points',
      'Mapped end-to-end booking journey, identifying 12 friction points where guests abandoned',
      'Designed attribute-based selling interface for room feature customization',
      'Created scalable design for IHG Rewards Club unifying web and mobile',
      'Ran A/B tests on booking flow variants, iterating on conversion data',
      'Delivered responsive, accessible designs across all devices',
    ],
    solution: 'IHG\'s first Attribute-Based Selling Platform enabling guests to select room features during booking. Combined with a redesigned loyalty experience, it drove measurable increases in revenue, bookings, and participation.',
    results: [
      { metric: '$50M', label: 'Annual Revenue', desc: 'Incremental revenue from attribute-based selling' },
      { metric: '35%', label: 'Loyalty Increase', desc: 'Growth in Rewards Club participation' },
      { metric: '25%', label: 'Booking Increase', desc: 'Lift in online direct bookings' },
      { metric: '20%', label: 'Agent Productivity', desc: 'B2B booking tool efficiency' },
    ],
    tools: ['Figma', 'User Research', 'A/B Testing', 'Design Systems', 'Heatmaps', 'Responsive Design'],
    before: 'Generic room categories. No customization. 12 friction points. High drop-off. Stagnating loyalty.',
    after: 'Guests customize attributes. $50M incremental revenue. 25% more bookings. 35% loyalty increase.',
    baCaption: 'From commodity rooms to personalized stays',
  },
  pfizer: {
    title: 'Enterprise Design System', company: 'Pfizer', color: '#0ea5e9', timeline: 'Jan 2022 – Aug 2024',
    problem: 'Pfizer\'s digital products were built by separate teams with inconsistent patterns. Each product had its own components, colors, and interactions — fragmenting the experience, slowing development, and creating 40% design redundancy.',
    process: [
      'Audited design patterns across multiple healthcare products',
      'Conducted stakeholder interviews to understand needs and adoption barriers',
      'Designed token-based system adaptable to different product contexts',
      'Built comprehensive component library with documented variants',
      'Led design sprints and workshops for cross-functional alignment',
      'Mentored junior designers to ensure consistent adoption',
    ],
    solution: 'An enterprise design system with scalable, reusable design tokens that reduced redundancy by 40% and enabled faster rollouts across multiple healthcare products while maintaining consistency and accessibility.',
    results: [
      { metric: '40%', label: 'Less Redundancy', desc: 'Reduction in duplicate design work' },
      { metric: 'Multi', label: 'Product Coverage', desc: 'Serving multiple healthcare apps' },
      { metric: 'Cross-Func', label: 'Adoption', desc: 'Product, design, and engineering' },
      { metric: 'WCAG', label: 'Compliant', desc: 'Accessible healthcare standards' },
    ],
    tools: ['Figma', 'Design Tokens', 'Storybook', 'WCAG', 'User Research', 'Usability Testing'],
  },
  delta: {
    title: 'Gate Agent Redesign', company: 'Delta Air Lines', color: '#ef4444', timeline: 'Oct 2010 – Feb 2015',
    problem: 'Delta\'s Gate Agent Application was outdated and slow, causing boarding delays. Agents navigated multiple screens for routine tasks. The Seating App had low adoption because the interface didn\'t match real workflows.',
    process: [
      'Shadowed gate agents during live boarding to observe pain points',
      'Created user personas and journey maps for agent workflows',
      'Redesigned flow to reduce steps for common boarding tasks',
      'Aligned Seating App with how agents think about seat management',
      'Facilitated design thinking workshops with cross-functional teams',
      'Iterated based on usability testing with actual agents',
    ],
    solution: 'Redesigned Gate Agent Application cutting boarding times by 15%. The Seating App drove 25% usage increase by aligning with how agents naturally think about seat management.',
    results: [
      { metric: '-15%', label: 'Boarding Time', desc: 'Streamlined gate agent workflows' },
      { metric: '+25%', label: 'App Usage', desc: 'Seating App adoption increase' },
      { metric: '+20%', label: 'Satisfaction', desc: 'Customer satisfaction improvement' },
      { metric: 'Award', label: 'Recognition', desc: 'Operational efficiency award' },
    ],
    tools: ['Figma', 'User Research', 'Usability Testing', 'Design Thinking', 'Prototyping'],
    before: 'Multiple screens for simple tasks. Slow boarding. Low Seating App adoption. Frustrated agents.',
    after: '15% faster boarding. 25% more app usage. Award-winning redesign. Agents love it.',
    baCaption: 'From clunky legacy tools to streamlined operations',
  },
  statefarm: {
    title: 'Drive Safe & Save App', company: 'State Farm', color: '#f59e0b', timeline: 'Jan 2021 – Dec 2022',
    problem: 'State Farm\'s Drive Safe & Save app had low retention and enrollment. iOS and Android experiences were inconsistent. Users didn\'t understand how safe driving translated to policy savings.',
    process: [
      'Analyzed user drop-off data to identify where and why users left',
      'Researched the gap between driving behavior and savings perception',
      'Redesigned for iOS and Android with unified design language',
      'Created clear visualizations connecting driving data to dollar savings',
      'Optimized onboarding to improve enrollment conversion',
      'Refined workflows improving team productivity by 20%',
    ],
    solution: 'A redesigned mobile experience connecting safe driving to policy savings. Unified iOS/Android design drove 20% higher retention and 15% more enrollments.',
    results: [
      { metric: '+20%', label: 'Retention', desc: 'User retention increase' },
      { metric: '+15%', label: 'Enrollments', desc: 'Savings program sign-ups' },
      { metric: '+20%', label: 'Productivity', desc: 'Team workflow improvements' },
      { metric: '2', label: 'Platforms', desc: 'Unified iOS + Android' },
    ],
    tools: ['Figma', 'iOS Design', 'Android Design', 'User Research', 'A/B Testing', 'Prototyping'],
    before: 'Low retention. Inconsistent iOS/Android. Users confused about savings. Poor onboarding.',
    after: '20% more retention. 15% more enrollments. Clear savings visualization. Unified experience.',
    baCaption: 'From confusing app to clear value proposition',
  },
}

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const cs = id ? studies[id] : undefined

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!cs) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-zinc-400 mb-4">Case study not found.</p>
        <Link to="/" className="text-indigo-400 text-sm hover:underline">Back to home</Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-gradient">RH</Link>
          <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors">← Back to home</Link>
        </div>
      </nav>

      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Hero */}
          <div className="py-16 sm:py-20">
            <div className="h-48 sm:h-60 rounded-2xl mb-8 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${cs.color}15, ${cs.color}05)` }}>
              <span className="text-2xl sm:text-3xl font-bold" style={{ color: `${cs.color}50` }}>{cs.company}</span>
            </div>
            <p className="text-sm text-indigo-400 font-medium mb-2">{cs.company}</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">{cs.title}</h1>
            <p className="text-sm text-zinc-500 font-mono">{cs.timeline}</p>
          </div>

          {/* Problem */}
          <div className="mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-3">The Problem</p>
            <p className="text-base text-zinc-400 leading-relaxed">{cs.problem}</p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-4">The Process</p>
            <div className="space-y-4">
              {cs.process.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${cs.color}12`, color: cs.color }}>
                    {i + 1}
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-3">The Solution</p>
            <p className="text-base text-zinc-400 leading-relaxed">{cs.solution}</p>
          </div>

          {/* Results */}
          <div className="mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-4">Results</p>
            <div className="grid grid-cols-2 gap-4">
              {cs.results.map(r => (
                <div key={r.label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                  <div className="text-xl font-bold" style={{ color: cs.color }}>{r.metric}</div>
                  <div className="text-sm font-semibold mt-1">{r.label}</div>
                  <div className="text-xs text-zinc-500 mt-1">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Before/After */}
          {cs.before && cs.after && (
            <div className="mb-16">
              <p className="text-sm font-medium text-indigo-400 mb-4">Before & After</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Before</span>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">{cs.before}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">After</span>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">{cs.after}</p>
                </div>
              </div>
              {cs.baCaption && <p className="text-xs text-zinc-500 text-center mt-3 italic">{cs.baCaption}</p>}
            </div>
          )}

          {/* Tools */}
          <div className="mb-16">
            <p className="text-sm font-medium text-indigo-400 mb-3">Tools & Technologies</p>
            <div className="flex flex-wrap gap-2">
              {cs.tools.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-zinc-800 text-zinc-500">{t}</span>)}
            </div>
          </div>

          {/* Back */}
          <Link to="/#work" className="text-sm text-indigo-400 hover:underline">← View all projects</Link>
        </div>
      </div>
    </>
  )
}
