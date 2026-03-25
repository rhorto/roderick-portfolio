export interface CaseStudy {
  id: string
  problem: string
  process: string[]
  solution: string
  results: { metric: string; value: string; description: string }[]
  tools: string[]
  timeline: string
  beforeAfter?: { before: string; after: string; caption: string }
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'audiences247',
    problem: 'Small businesses were paying $497+/month for GoHighLevel and similar SaaS tools, yet getting generic solutions that didn\'t address their specific needs. HVAC contractors were losing thousands monthly in missed after-hours calls with no AI receptionist, no automated follow-ups, and no way to track which marketing channels actually drove revenue.',
    process: [
      'Researched the HVAC contractor market — interviewed owners, analyzed competitors, mapped the customer journey from lead capture to close',
      'Designed a multi-tenant architecture with Supabase RLS for data isolation between client organizations',
      'Built a 13-point website audit system that crawls prospect sites and identifies specific revenue opportunities',
      'Integrated Retell AI voice agent for 24/7 call handling with real-time lead qualification',
      'Created automated email pipelines using Gemini AI for hyper-personalized outreach at scale',
      'Designed and shipped a conversion-optimized checkout flow with Stripe integration',
    ],
    solution: 'A self-hosted multi-tenant SaaS platform that replaces expensive tools with an integrated suite: AI voice receptionist, automated lead scoring across 70K+ prospects, personalized email outreach achieving 2-3x industry average response rates, and real-time analytics dashboards — all at 75% lower cost than incumbent solutions.',
    results: [
      { metric: '70K+', value: 'Leads Processed', description: 'Classified, scored, and enriched using AI pipeline' },
      { metric: '35-50%', value: 'Email Open Rate', description: 'vs. 21% industry average — driven by AI-personalized subjects' },
      { metric: '8-15%', value: 'Reply Rate', description: '2-3x national average of 3.4-5.8%' },
      { metric: '75%', value: 'Cost Reduction', description: '$52/mo vs $206/mo for equivalent SaaS stack' },
    ],
    tools: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Retell AI', 'Gemini', 'n8n', 'Tailwind CSS'],
    timeline: 'Aug 2024 — Present',
    beforeAfter: {
      before: 'Businesses paying $497+/mo for GoHighLevel. Generic templates. No AI voice agent. Manual follow-ups. No lead scoring. Missed after-hours calls costing $2K+/month in lost revenue.',
      after: 'Self-hosted platform at $52/mo. AI voice receptionist answering 24/7. Automated 5-step email sequences with Gemini personalization. 10-point lead scoring. Real-time dashboards. 70K+ leads processed automatically.',
      caption: 'From manual, expensive SaaS to AI-powered automation',
    },
  },
  {
    id: 'ihg',
    problem: 'IHG\'s booking system treated hotel rooms as identical commodities. Guests couldn\'t choose specific attributes like floor level, view type, or room amenities — leading to lower revenue per booking and reduced guest satisfaction. The loyalty program participation was stagnating.',
    process: [
      'Conducted extensive user research with both guests and hotel staff to understand booking pain points',
      'Mapped the end-to-end booking journey, identifying 12 friction points where guests abandoned',
      'Designed an attribute-based selling interface where guests could customize room features',
      'Created a scalable design for IHG Rewards Club that unified the experience across web and mobile',
      'Ran A/B tests on booking flow variants, iterating based on conversion data',
      'Collaborated with engineering to deliver responsive, accessible designs across all devices',
    ],
    solution: 'IHG\'s first Attribute-Based Selling Platform, enabling guests to select specific room features (view, floor, bed type, amenities) during booking. Combined with a redesigned loyalty experience, the platform drove measurable increases in revenue, bookings, and program participation.',
    results: [
      { metric: '$50M', value: 'Annual Revenue', description: 'Incremental revenue from attribute-based selling' },
      { metric: '35%', value: 'Loyalty Increase', description: 'Growth in IHG Rewards Club participation' },
      { metric: '25%', value: 'Booking Increase', description: 'Lift in online direct bookings' },
      { metric: '20%', value: 'Agent Productivity', description: 'Improvement in B2B booking tool efficiency' },
    ],
    tools: ['Figma', 'User Research', 'A/B Testing', 'Design Systems', 'Heatmaps', 'Responsive Design'],
    timeline: 'Apr 2015 — Sep 2020',
    beforeAfter: {
      before: 'Guests booked generic room categories with no customization. Low revenue per booking. 12 friction points in booking flow causing high drop-off. Stagnating loyalty program engagement.',
      after: 'Guests customize room attributes during booking. $50M in incremental revenue. 25% more direct bookings. 35% increase in loyalty participation. 20% faster agent workflows.',
      caption: 'From commodity rooms to personalized stays',
    },
  },
  {
    id: 'pfizer',
    problem: 'Pfizer\'s digital products were built by separate teams with inconsistent design patterns. Each product had its own components, colors, and interaction patterns — creating a fragmented user experience, slower development cycles, and 40% design redundancy across teams.',
    process: [
      'Audited existing design patterns across multiple healthcare products to identify inconsistencies',
      'Conducted stakeholder interviews to understand team needs and adoption barriers',
      'Designed a token-based system that could adapt to different product contexts',
      'Built a comprehensive component library with documented variants and usage guidelines',
      'Led design sprints and workshops to align cross-functional teams',
      'Mentored junior designers to ensure consistent adoption of the system',
    ],
    solution: 'An enterprise-level design system with scalable, reusable design tokens that reduced redundancy by 40% and enabled faster product rollouts. The system served multiple healthcare products while maintaining consistency and accessibility standards.',
    results: [
      { metric: '40%', value: 'Less Redundancy', description: 'Reduction in duplicate design work across teams' },
      { metric: 'Multi-Product', value: 'Coverage', description: 'System serving multiple healthcare applications' },
      { metric: 'Cross-Functional', value: 'Adoption', description: 'Used by product, design, and engineering teams' },
      { metric: 'WCAG', value: 'Compliant', description: 'Accessible designs meeting healthcare standards' },
    ],
    tools: ['Figma', 'Design Tokens', 'Storybook', 'WCAG', 'User Research', 'Usability Testing'],
    timeline: 'Jan 2022 — Aug 2024',
  },
  {
    id: 'delta',
    problem: 'Delta\'s Gate Agent Application was outdated and slow, causing boarding delays. Gate agents navigated multiple screens to complete routine tasks. The Seating App had low adoption because the interface didn\'t match real-world workflows.',
    process: [
      'Shadowed gate agents during live boarding to observe pain points firsthand',
      'Created user personas and journey maps for different agent workflows',
      'Redesigned the application flow to reduce steps for common boarding tasks',
      'Designed the Seating App interface to match mental models of how agents think about seating',
      'Facilitated design thinking workshops with cross-functional teams',
      'Iterated designs based on usability testing with actual gate agents',
    ],
    solution: 'Redesigned Gate Agent Application that cut boarding times by 15% through streamlined workflows. The companion Seating App drove 25% increase in usage by aligning the interface with how agents naturally think about seat management.',
    results: [
      { metric: '-15%', value: 'Boarding Time', description: 'Faster boarding through streamlined gate agent workflows' },
      { metric: '+25%', value: 'App Usage', description: 'Increase in Seating App adoption by gate agents' },
      { metric: '+20%', value: 'Satisfaction', description: 'Improvement in customer satisfaction scores' },
      { metric: 'Award', value: 'Recognition', description: 'Recognized for operational efficiency improvements' },
    ],
    tools: ['Figma', 'User Research', 'Usability Testing', 'Design Thinking', 'Prototyping'],
    timeline: 'Oct 2010 — Feb 2015',
  },
  {
    id: 'statefarm',
    problem: 'State Farm\'s Drive Safe & Save app had low user retention and enrollment rates. The iOS and Android experience was inconsistent, and users didn\'t understand how safe driving translated to actual savings on their policies.',
    process: [
      'Analyzed user drop-off data to identify where and why users were leaving',
      'Conducted user research to understand the gap between driving behavior and savings perception',
      'Redesigned the app experience for both iOS and Android with a unified design language',
      'Created clear visualizations connecting driving data to dollar savings',
      'Optimized onboarding flow to improve enrollment conversion',
      'Refined design workflows that improved team productivity by 20%',
    ],
    solution: 'A redesigned mobile experience that clearly connected safe driving behavior to policy savings. The unified iOS/Android design drove 20% higher retention and 15% more enrollments by making the value proposition immediately visible.',
    results: [
      { metric: '+20%', value: 'Retention', description: 'Increase in user retention on the app' },
      { metric: '+15%', value: 'Enrollments', description: 'More policyholders enrolling in savings program' },
      { metric: '+20%', value: 'Productivity', description: 'Team design workflow improvements' },
      { metric: 'iOS + Android', value: 'Platforms', description: 'Unified cross-platform experience' },
    ],
    tools: ['Figma', 'iOS Design', 'Android Design', 'User Research', 'A/B Testing', 'Prototyping'],
    timeline: 'Jan 2021 — Dec 2022',
  },
]
