export interface Project {
  id: string
  title: string
  company: string
  year: string
  role: string
  desc: string
  tags: string[]
  color: string
  stats: [string, string][]
  constraint: string
  options: string[]
  bet: string
  shipped: string
  learned: string
  results: { metric: string; label: string }[]
  tools: string[]
  before: string
  after: string
}

export const projects: Project[] = [
  {
    id: 'audiences247',
    title: 'AI SaaS Platform',
    company: 'Audiences247',
    year: '2024–Present',
    role: 'AI Product Designer & Engineer',
    desc: 'Multi-tenant SaaS replacing $497/mo tools with voice AI, automated lead scoring, and intelligent outreach systems.',
    tags: ['AI Product Design', 'React/TypeScript', 'Voice AI', 'Automation'],
    color: '#6366f1',
    stats: [['70K+', 'Leads Processed'], ['35–50%', 'Open Rate'], ['8–15%', 'Reply Rate'], ['75%', 'Cost Reduction']],
    constraint: 'Small businesses were paying $497/month for GoHighLevel but only using 20% of features. Building a replacement required matching their workflow without the bloat — on a solo engineering timeline.',
    options: [
      'Use a no-code platform (Bubble/Retool) — fast to ship but limited customization for AI features',
      'Fork an open-source CRM — saves time but inherits technical debt and poor UX',
      'Custom React + Supabase build — full control, AI-native from day one, but slower initial delivery',
    ],
    bet: 'I chose the custom build because AI features (voice agents, lead scoring, personalized email) needed deep integration — not bolted-on. Supabase gave me row-level security for multi-tenancy without building auth from scratch.',
    shipped: 'A production multi-tenant platform with voice AI (Retell), Gemini-powered email personalization, automated lead scoring, and n8n workflow orchestration — all behind a clean React/TypeScript interface.',
    learned: 'I underestimated the complexity of multi-tenant data isolation. RLS policies saved me, but I should have designed the permission model earlier. Also learned that AI-generated emails need human-tuned pain signals to convert — pure AI output was too generic.',
    results: [
      { metric: '70K+', label: 'Leads classified and scored' },
      { metric: '35–50%', label: 'Email open rates (2-3x industry avg)' },
      { metric: '75%', label: 'Cost reduction vs GoHighLevel' },
      { metric: '10+', label: 'Services orchestrated via n8n' },
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Retell AI', 'Gemini', 'n8n', 'Tailwind CSS'],
    before: 'Businesses paying $497/mo for bloated tools they barely used. Manual lead follow-up. No after-hours coverage. Missed calls = lost revenue.',
    after: '75% cost reduction. AI voice agent handles calls 24/7. Leads auto-scored and routed. Personalized outreach at scale with 8-15% reply rates.',
  },
  {
    id: 'ihg',
    title: '$50M Booking Platform',
    company: 'IHG Hotels & Resorts',
    year: '2015–2020',
    role: 'Senior UX Designer',
    desc: 'Reimagined hotel booking with attribute-based selling — letting guests customize room features to drive incremental revenue.',
    tags: ['UX/UI', 'User Research', 'Strategy', 'Design Systems'],
    color: '#10b981',
    stats: [['$50M', 'Revenue'], ['35%', 'Loyalty ↑'], ['25%', 'Bookings ↑'], ['+20%', 'Agent Productivity']],
    constraint: 'IHG had no way for guests to customize their stay beyond room type. Revenue was left on the table because guests would pay more for specific attributes (floor, view, bed type) but the booking flow didn\'t support it.',
    options: [
      'Add attribute selection as a post-booking upsell email — low engineering effort but low conversion',
      'Integrate into the existing booking wizard — complex but catches guests at peak intent',
      'Build a standalone "customize your stay" app — full control but fragments the experience',
    ],
    bet: 'Integrated directly into the booking flow at the room selection step. This was the hardest path technically (touching the core booking engine) but caught guests at the moment of highest intent to spend.',
    shipped: 'IHG\'s first attribute-based selling platform. Guests could select floor level, view type, room position, and bed configuration during booking — each with dynamic pricing.',
    learned: 'The biggest challenge wasn\'t the UX — it was getting stakeholders across revenue management, IT, and hotel operations aligned. I learned to prototype in high fidelity early to build consensus before engineering started.',
    results: [
      { metric: '$50M', label: 'Annual incremental revenue' },
      { metric: '35%', label: 'Loyalty program participation increase' },
      { metric: '25%', label: 'Online booking increase' },
      { metric: '+20%', label: 'Booking agent productivity' },
    ],
    tools: ['Figma', 'Sketch', 'User Research', 'A/B Testing', 'Design Systems', 'Prototyping'],
    before: 'Standard room-type-only booking. No customization. Revenue left on the table. Guests called front desk for specific requests.',
    after: 'Guests customize floor, view, bed type at booking. $50M incremental revenue. 35% more loyalty engagement. 25% more online bookings.',
  },
  {
    id: 'pfizer',
    title: 'Enterprise Design System',
    company: 'Pfizer',
    year: '2022–2024',
    role: 'Senior UX Designer',
    desc: 'Built a scalable Figma design system with reusable tokens reducing design redundancy by 40% across multiple healthcare products.',
    tags: ['Design Systems', 'Healthcare', 'Enterprise UX', 'Accessibility'],
    color: '#0ea5e9',
    stats: [['40%', 'Less Redundancy'], ['Multi', 'Products'], ['Cross-Functional', 'Impact'], ['WCAG', 'Compliant']],
    constraint: 'Multiple product teams were designing in silos — duplicating components, inconsistent patterns, and accessibility gaps across healthcare applications with strict regulatory requirements.',
    options: [
      'Create a guidelines document and distribute via Confluence — easy to maintain but no enforcement',
      'Build a coded component library (React) — maximum consistency but requires engineering partnership',
      'Build a comprehensive Figma design system with tokens — designers adopt immediately, bridges to code later',
    ],
    bet: 'Started with Figma because designers could adopt immediately without waiting for engineering. Used design tokens that mapped directly to CSS variables, making the eventual code translation straightforward.',
    shipped: 'A comprehensive Figma design system with scalable tokens, reusable components, and governance documentation. Adopted across multiple product teams.',
    learned: 'A design system is only as good as its adoption. I spent as much time on documentation and onboarding as I did on the components themselves. The governance model (how to request changes, who approves) was more important than the components.',
    results: [
      { metric: '40%', label: 'Design redundancy reduction' },
      { metric: 'Multiple', label: 'Products served' },
      { metric: 'Cross-Team', label: 'Design consistency achieved' },
      { metric: 'WCAG AA', label: 'Accessibility compliance' },
    ],
    tools: ['Figma', 'Design Tokens', 'WCAG', 'Storybook', 'Documentation', 'User Research'],
    before: 'Siloed design teams. Duplicated components. Inconsistent patterns. Accessibility gaps. Slow product rollouts.',
    after: '40% less redundancy. Consistent design language. WCAG compliant. Faster rollouts. Engineers and designers aligned.',
  },
  {
    id: 'delta',
    title: 'Gate Agent & Seating Apps',
    company: 'Delta Air Lines',
    year: '2010–2015',
    role: 'UX Designer',
    desc: 'Redesigned mission-critical airline applications — cutting boarding times by 15% and earning recognition for operational efficiency.',
    tags: ['Enterprise UX', 'Mobile', 'Operations', 'Research'],
    color: '#ef4444',
    stats: [['-15%', 'Boarding Time'], ['+25%', 'App Usage'], ['+20%', 'Satisfaction'], ['Award', 'Recognition']],
    constraint: 'Gate agents were using a DOS-era terminal interface to board 200+ passengers in 30 minutes. Every second mattered — a slow interface meant delayed flights and cascading operational costs.',
    options: [
      'Skin the existing terminal app with modern UI — fast but limited by legacy architecture',
      'Build a tablet-native app from scratch — best UX but risky rollout across 1,000+ gates',
      'Rebuild for desktop with progressive mobile support — balanced risk and modernization',
    ],
    bet: 'Rebuilt for desktop first because it matched existing hardware at every gate. Designed the interface for zero-training adoption — agents couldn\'t afford a learning curve during live boarding.',
    shipped: 'A redesigned gate agent application that reduced visual noise, surfaced critical passenger info immediately, and cut the average boarding interaction from 8 seconds to 5 seconds.',
    learned: 'Designing for operational environments is fundamentally different from consumer products. There\'s no onboarding — users need to be productive in seconds. I learned to design for the worst case: stressed agent, full flight, weather delay, angry passengers.',
    results: [
      { metric: '-15%', label: 'Boarding time reduction' },
      { metric: '+25%', label: 'App usage increase' },
      { metric: '+20%', label: 'Agent satisfaction' },
      { metric: 'Figgy Award', label: 'Stakeholder recognition' },
    ],
    tools: ['Contextual Inquiry', 'Rapid Prototyping', 'Usability Testing', 'Heuristic Evaluation', 'Wireframing'],
    before: 'DOS-era terminal. 8-second average boarding interaction. High error rates. Agent frustration. Training-heavy.',
    after: '5-second interactions. 15% faster boarding. Zero-training UI. 25% more usage. Award-winning.',
  },
  {
    id: 'statefarm',
    title: 'Drive Safe & Save',
    company: 'State Farm',
    year: '2021–2022',
    role: 'Senior UX Designer',
    desc: 'Redesigned the Drive Safe & Save iOS and Android app, driving 20% higher retention and 15% more policyholder savings enrollments.',
    tags: ['Mobile UX', 'iOS', 'Android', 'Insurance'],
    color: '#f59e0b',
    stats: [['+20%', 'Retention'], ['+15%', 'Enrollments'], ['+20%', 'Productivity'], ['2', 'Platforms']],
    constraint: 'State Farm\'s telematics app had low retention — users didn\'t understand how their driving translated to savings. The iOS and Android experiences were inconsistent, causing confusion.',
    options: [
      'Add a dashboard showing savings projections — addresses understanding but doesn\'t fix retention',
      'Gamify the driving experience with streaks and rewards — drives engagement but risks trivializing insurance',
      'Redesign the core feedback loop connecting driving → data → savings with clear visuals',
    ],
    bet: 'Focused on the feedback loop. Users needed to see the direct connection between their driving behavior and their policy savings — in real-time, not after a billing cycle. Made this the centerpiece of the redesigned app.',
    shipped: 'A unified iOS and Android experience with real-time driving feedback, clear savings projections, and streamlined enrollment. Design language consistent across both platforms.',
    learned: 'In insurance UX, trust is everything. Users were skeptical that their driving data was being used fairly. I learned to design for transparency — showing exactly what was measured and how it affected their rate.',
    results: [
      { metric: '+20%', label: 'User retention' },
      { metric: '+15%', label: 'Savings program enrollment' },
      { metric: '+20%', label: 'Team productivity improvement' },
      { metric: '2', label: 'Unified iOS + Android platforms' },
    ],
    tools: ['Figma', 'iOS/Android Guidelines', 'User Research', 'A/B Testing', 'Prototyping', 'Analytics'],
    before: 'Low retention. Confusing savings connection. Inconsistent iOS/Android. Poor onboarding. Users didn\'t trust the app.',
    after: '20% higher retention. Clear savings feedback loop. Unified cross-platform design. 15% more enrollments.',
  },
]
