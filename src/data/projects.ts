export interface Project {
  id: string
  title: string
  company: string
  year: string
  role: string
  desc: string
  tags: string[]
  color: string
  image?: string
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
    desc: 'Designed and built a multi-tenant AI SaaS platform from scratch — voice AI agents, automated lead scoring, and intelligent outreach — replacing $497/mo tools at 75% less cost.',
    tags: ['AI Product Design', 'React/TypeScript', 'Voice AI', 'Automation'],
    color: '#6366f1',
    image: '/images/project-audiences247.jpg',
    stats: [['70K+', 'Leads Processed'], ['35–50%', 'Open Rate'], ['8–15%', 'Reply Rate'], ['75%', 'Cost Reduction']],
    constraint: 'Small businesses were paying $497/month for GoHighLevel but only using 20% of its features. They needed lead management, outreach, and after-hours coverage — not a bloated CRM. I needed to build a focused replacement as a solo designer-engineer.',
    options: [
      'No-code platform (Bubble/Retool) — fast to ship but limited AI integration and poor performance at scale',
      'Fork an open-source CRM — saves time but inherits technical debt and a UX designed for different users',
      'Custom React + Supabase build — full control, AI-native architecture from day one, but slower initial delivery',
    ],
    bet: 'I chose the custom build because voice AI, lead scoring, and personalized email needed deep integration — not bolted-on features. Supabase gave me row-level security for multi-tenancy without building auth infrastructure from scratch.',
    shipped: 'A production multi-tenant platform with Retell-powered voice AI agents, Gemini-driven email personalization, automated lead scoring, and n8n workflow orchestration — all behind a clean React/TypeScript interface. Clients onboard in minutes, not weeks.',
    learned: 'I underestimated the complexity of multi-tenant data isolation. Row-level security policies saved the architecture, but I should have designed the permission model before writing the first component. I also learned that AI-generated emails need human-tuned pain signals to convert — pure AI output reads as generic.',
    results: [
      { metric: '70K+', label: 'Leads classified and scored' },
      { metric: '35–50%', label: 'Email open rates (2-3x industry avg)' },
      { metric: '75%', label: 'Cost reduction vs GoHighLevel' },
      { metric: '10+', label: 'Services orchestrated via n8n' },
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Retell AI', 'Gemini', 'n8n', 'Tailwind CSS'],
    before: 'Businesses paying $497/mo for bloated tools they barely used. Manual lead follow-up. No after-hours coverage. Missed calls meant lost revenue.',
    after: '75% cost reduction. AI voice agent handles calls 24/7. Leads auto-scored and routed in real time. Personalized outreach at scale with 8–15% reply rates.',
  },
  {
    id: 'bofa',
    title: 'Financial Center Apps',
    company: 'Bank of America',
    year: '2008–2010',
    role: 'UX Designer',
    desc: 'Designed a unified agent interface for financial center servicing — consolidating 3 legacy systems into one workflow that served customers both in-office and online.',
    tags: ['Enterprise UX', 'Financial Services', 'Internal Tools', 'Agent Experience'],
    color: '#dc2626',
    image: '/images/project-bofa.jpg',
    stats: [['3→1', 'Systems Unified'], ['Faster', 'Service Time'], ['2', 'Channels'], ['Enterprise', 'Scale']],
    constraint: 'Financial center agents juggled three separate legacy systems — one for accounts, one for transactions, one for customer profiles. Context switching between systems caused delays, errors, and poor customer experiences during both in-office visits and online servicing.',
    options: [
      'Overlay a unified dashboard on existing systems — fast deployment but still dependent on fragile legacy backends',
      'Full replacement of all agent tools — highest impact but massive engineering and compliance effort',
      'Task-based workflow UI orchestrating existing systems behind one interface — balanced approach with phased rollout',
    ],
    bet: 'Designed a task-based workflow interface that unified the agent experience without requiring a full backend rewrite. Agents could handle account inquiries, transactions, and customer updates from a single screen — whether the customer was sitting across from them or calling in.',
    shipped: 'A suite of internal applications giving financial center agents a unified customer view, streamlined transaction workflows, and consistent experience across in-office and online channels. Passed all compliance and legal reviews.',
    learned: 'Designing for financial services taught me the weight of compliance constraints. Every screen, every workflow had to clear legal and compliance review. I learned to build regulatory requirements into the design process from day one — not treat them as final-stage checkboxes.',
    results: [
      { metric: '3→1', label: 'Legacy systems consolidated' },
      { metric: 'Faster', label: 'Customer service resolution' },
      { metric: 'Reduced', label: 'Agent errors from context switching' },
      { metric: '2 Channels', label: 'In-office + online servicing' },
    ],
    tools: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Stakeholder Management', 'Compliance Design'],
    before: 'Agents switching between 3 legacy systems per customer interaction. Slow service. Inconsistent in-office vs. online experience. High error rates. Training-intensive onboarding.',
    after: 'Single unified interface. Faster resolution times. Consistent cross-channel experience. Reduced errors. Simplified training for new agents.',
  },
  {
    id: 'ihg',
    title: 'Owners App & Booking Platform',
    company: 'IHG Hotels & Resorts',
    year: '2015–2020',
    role: 'Senior UX Designer',
    desc: 'Led UX for two major initiatives: a $50M attribute-based booking platform that let guests customize room features, and an Owners Application giving hotel owners real-time business intelligence.',
    tags: ['UX/UI', 'User Research', 'Data Visualization', 'Design Systems'],
    color: '#10b981',
    image: '/images/project-ihg.jpg',
    stats: [['$50M', 'Revenue'], ['40%', 'Faster Data Access'], ['46%', 'More Daily Users'], ['35%', 'Loyalty ↑']],
    constraint: 'Two parallel challenges: (1) IHG had no way for guests to customize their stay beyond room type — revenue was left on the table. (2) Hotel owners had no self-service access to business insights — overloaded dashboards and decision-making bottlenecks slowed operations across 6,000+ properties.',
    options: [
      'Post-booking upsell emails for attributes — low engineering effort but low conversion at a low-intent moment',
      'Integrate attribute selection into the booking flow at room selection — complex but catches guests at peak intent',
      'Build a standalone "customize your stay" app — full control but fragments the booking experience',
    ],
    bet: 'For the booking platform: integrated directly into the booking flow at room selection — the hardest path technically (touching the core booking engine) but caught guests at the moment of highest willingness to spend. For the Owners App: used progressive disclosure and interactive data visualization to surface the right insights without overwhelming hotel owners.',
    shipped: 'IHG\'s first attribute-based selling platform — guests could select floor level, view type, room position, and bed configuration during booking, each with dynamic pricing. Plus a redesigned Owners Application with intuitive dashboards, demand forecasts, pricing strategies, and guest complaint tracking — all accessible in real time.',
    learned: 'The biggest challenge wasn\'t the UX — it was getting stakeholders across revenue management, IT, and hotel operations aligned on a shared vision. I learned to prototype in high fidelity early to build consensus before engineering sprints began. On the Owners App, user interviews with actual hotel owners revealed that they didn\'t need more data — they needed faster answers to 3-4 key questions.',
    results: [
      { metric: '$50M', label: 'Annual incremental revenue' },
      { metric: '40%', label: 'Faster data retrieval for owners' },
      { metric: '46%', label: 'Increase in daily active users' },
      { metric: '35%', label: 'Loyalty program participation increase' },
    ],
    tools: ['Figma', 'Sketch', 'User Research', 'User Interviews', 'A/B Testing', 'Data Visualization', 'Design Systems', 'Prototyping'],
    before: 'Room-type-only booking with no customization. Revenue left on the table. Hotel owners relying on overloaded dashboards — 60% of reports never viewed. Decision-making bottlenecks across 6,000+ properties.',
    after: 'Guests customize floor, view, and bed type at booking — $50M incremental revenue. Owners access real-time insights with 40% faster data retrieval and 46% more daily engagement.',
  },
  {
    id: 'pfizer',
    title: 'Enterprise Design System',
    company: 'Pfizer',
    year: '2022–2024',
    role: 'Senior UX Designer',
    desc: 'Built a scalable Figma design system with reusable tokens that reduced design redundancy by 40% and cut development time by 40% across multiple healthcare products.',
    tags: ['Design Systems', 'Healthcare', 'Enterprise UX', 'Accessibility'],
    color: '#0ea5e9',
    image: '/images/project-pfizer.jpg',
    stats: [['40%', 'Less Redundancy'], ['40%', 'Dev Time Saved'], ['30%', 'Engagement ↑'], ['WCAG', 'Compliant']],
    constraint: 'Multiple product teams were designing in silos — duplicating components, creating inconsistent patterns, and leaving accessibility gaps across healthcare applications with strict FDA and regulatory requirements. Each department had its own system, wasting time and resources.',
    options: [
      'Guidelines document distributed via Confluence — easy to maintain but zero enforcement and low adoption',
      'Coded component library (React) — maximum consistency but requires deep engineering partnership upfront',
      'Comprehensive Figma design system with tokens — designers adopt immediately, bridges to code translation later',
    ],
    bet: 'Started with Figma because designers could adopt immediately without waiting for engineering cycles. Used design tokens that mapped directly to CSS variables, making the eventual code translation straightforward. Invested heavily in documentation and onboarding — a system nobody uses is worse than no system.',
    shipped: 'A comprehensive Figma design system with scalable tokens, reusable components, governance documentation, and onboarding guides. Standardized data visualization, dashboard layouts, and onboarding screens across all product teams. Adopted across multiple departments within 8 weeks.',
    learned: 'A design system is only as good as its adoption rate. I spent as much time on documentation, onboarding sessions, and change management as I did on the components. The governance model — how to request changes, who approves, how to contribute — was more important than any individual component.',
    results: [
      { metric: '40%', label: 'Design redundancy reduction' },
      { metric: '40%', label: 'Development time saved' },
      { metric: '30%', label: 'Product engagement increase' },
      { metric: 'WCAG AA', label: 'Accessibility compliance' },
    ],
    tools: ['Figma', 'Design Tokens', 'WCAG', 'Storybook', 'Documentation', 'User Research', 'Adobe Illustrator'],
    before: 'Siloed design teams. Duplicated components across departments. Inconsistent UX patterns. Accessibility gaps. Slow product rollouts due to redundant work.',
    after: '40% less redundancy. 40% faster development cycles. Consistent design language across all products. WCAG AA compliant. 30% higher product engagement.',
  },
  {
    id: 'delta',
    title: 'Gate Agent & Seating Apps',
    company: 'Delta Air Lines',
    year: '2010–2015',
    role: 'UX Designer',
    desc: 'Redesigned mission-critical gate agent and booking applications — cutting boarding times by 15%, saving over $100K in development costs, and earning recognition for operational efficiency.',
    tags: ['Enterprise UX', 'Mobile', 'Operations', 'Research'],
    color: '#ef4444',
    image: '/images/project-delta.jpg',
    stats: [['-15%', 'Boarding Time'], ['$100K+', 'Dev Cost Saved'], ['+25%', 'App Usage'], ['+20%', 'Satisfaction']],
    constraint: 'Gate agents were using a DOS-era terminal interface to board 200+ passengers in 30-minute windows. Every second mattered — a slow interface meant delayed flights and cascading operational costs across the network. The existing system also required extensive training for new agents.',
    options: [
      'Skin the existing terminal app with modern UI — fast but limited by legacy architecture and still unintuitive',
      'Build a tablet-native app from scratch — best UX but risky rollout across 1,000+ gates simultaneously',
      'Rebuild for desktop with progressive mobile support — balanced risk, matches existing gate hardware',
    ],
    bet: 'Rebuilt for desktop first because it matched existing hardware at every gate — no hardware procurement needed. Designed for zero-training adoption because agents couldn\'t afford a learning curve during live boarding. Every interaction had to be self-evident.',
    shipped: 'A redesigned gate agent application that reduced visual noise, surfaced critical passenger info immediately, and cut the average boarding interaction from 8 seconds to 5 seconds. Plus a new design system built from user research and data that included new features discovered during contextual inquiry with agents.',
    learned: 'Designing for operational environments is fundamentally different from consumer products. There\'s no onboarding flow — users need to be productive in seconds under pressure. I learned to design for the worst case: stressed agent, full flight, weather delay, 200 passengers waiting.',
    results: [
      { metric: '-15%', label: 'Boarding time reduction' },
      { metric: '$100K+', label: 'Development cost savings' },
      { metric: '+25%', label: 'App usage increase' },
      { metric: '+20%', label: 'Agent satisfaction' },
    ],
    tools: ['Contextual Inquiry', 'Rapid Prototyping', 'Usability Testing', 'Heuristic Evaluation', 'Wireframing', 'Figma', 'Adobe Illustrator'],
    before: 'DOS-era terminal. 8-second average boarding interaction. High error rates. Agent frustration. Extensive training required for new hires. Over $100K wasted on redundant development.',
    after: '5-second interactions. 15% faster boarding. Zero-training UI. 25% more usage. $100K+ in dev cost savings. Award-winning design.',
  },
  {
    id: 'statefarm',
    title: 'Drive Safe & Save',
    company: 'State Farm',
    year: '2021–2022',
    role: 'Senior UX Designer',
    desc: 'Redesigned the Drive Safe & Save iOS and Android app — driving 20% higher retention by making the connection between driving behavior and policy savings immediately clear.',
    tags: ['Mobile UX', 'iOS', 'Android', 'Insurance'],
    color: '#f59e0b',
    image: '/images/project-statefarm.jpg',
    stats: [['+20%', 'Retention'], ['+15%', 'Enrollments'], ['2', 'Platforms'], ['+20%', 'Productivity']],
    constraint: 'State Farm\'s telematics app had low retention — users didn\'t understand how their driving behavior translated to savings. The iOS and Android experiences were inconsistent, and users were skeptical their data was being used fairly.',
    options: [
      'Add a savings dashboard — addresses understanding but doesn\'t fix the core retention problem',
      'Gamify driving with streaks and rewards — drives engagement but risks trivializing insurance decisions',
      'Redesign the core feedback loop connecting driving behavior → data → savings with transparent visuals',
    ],
    bet: 'Focused on the feedback loop. Users needed to see the direct connection between their driving behavior and their policy savings — in real time, not after a billing cycle. Made this the centerpiece of the redesigned app, with full transparency on what was being measured and how.',
    shipped: 'A unified iOS and Android experience with real-time driving feedback, clear savings projections, transparent data usage, and streamlined enrollment. Consistent design language across both platforms.',
    learned: 'In insurance UX, trust is everything. Users were skeptical that their driving data was being used fairly. Designing for transparency — showing exactly what was measured, how it affected their rate, and giving them control — was more important than any visual polish.',
    results: [
      { metric: '+20%', label: 'User retention' },
      { metric: '+15%', label: 'Savings program enrollment' },
      { metric: '+20%', label: 'Team productivity improvement' },
      { metric: '2', label: 'Unified iOS + Android platforms' },
    ],
    tools: ['Figma', 'iOS/Android Guidelines', 'User Research', 'A/B Testing', 'Prototyping', 'Analytics'],
    before: 'Low retention. Users confused about how driving affected savings. Inconsistent iOS/Android experience. Poor onboarding. Trust issues with data collection.',
    after: '20% higher retention. Clear real-time savings feedback. Unified cross-platform design. 15% more enrollments. Transparent data usage.',
  },
]
