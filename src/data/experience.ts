// Single source of truth for career history.
// About, Resume, and the Home "readout" all read from here, so dates and
// numbers can never drift apart across pages again.

export const YEARS_EXPERIENCE = '20+'

export interface Job {
  company: string
  title: string
  period: string
  location?: string
  summary?: string
  bullets: string[]
  link?: string
}

export const jobs: Job[] = [
  {
    company: 'Independent — AI SaaS for home-service businesses',
    title: 'AI Product Designer & Engineer',
    period: '2024–Present',
    location: 'Remote',
    summary: 'Designing and building AI-native SaaS end to end — voice AI, lead scoring, automation',
    link: '/work/audiences247',
    bullets: [
      'Design and ship AI-native SaaS end to end — production React and TypeScript, not prototypes',
      'Built a multi-tenant platform with Retell voice agents, Gemini-driven personalization, automated lead scoring, and n8n orchestration',
      'Designed AI-native UX patterns: confidence surfaces, trust indicators, streaming responses, human-in-the-loop review, and graceful fallback states',
      'Multi-model orchestration across Claude, Gemini, and GPT-4 — routing on cost, latency, and capability',
      'Stack: React 19, TypeScript, Tailwind v4, Supabase (Postgres, RLS, Edge Functions), Vercel, Stripe',
    ],
  },
  {
    company: 'Bank of America',
    title: 'Senior User Experience Designer (Contract)',
    period: 'Jan 2025–Mar 2026',
    location: 'Charlotte, NC (Remote)',
    summary: 'Agent-facing AI — servicing chatbot, online agents, and in-office apps',
    link: '/work/bofa-ai',
    bullets: [
      'Designed the updated servicing chatbot and its conversational experience — optimizing usage and handoff to a human',
      'Designed AI-assisted tools for online and in-office agents, giving them a unified customer view',
      'Advised leadership on AI introduction strategy across agent-facing tools',
    ],
  },
  {
    company: 'Pfizer',
    title: 'Senior User Experience Designer',
    period: 'Jan 2022–Aug 2024',
    location: 'New York, NY (Remote)',
    summary: 'Enterprise design system — 40% less redundancy, 30% higher engagement',
    link: '/work/pfizer',
    bullets: [
      'Led an enterprise Figma design system with scalable tokens — 40% reduction in design redundancy',
      'Conducted user research, usability testing, and A/B testing — 30% engagement improvement',
      'Collaborated with Product, Engineering, and stakeholders on responsive, WCAG-compliant designs',
      'Mentored junior designers on design-system standards and governance',
    ],
  },
  {
    company: 'State Farm Insurance',
    title: 'Senior User Experience Designer',
    period: 'Jan 2021–Dec 2022',
    location: 'Atlanta, GA (Remote)',
    summary: 'Drive Safe & Save mobile redesign — 20% retention increase',
    link: '/work/statefarm',
    bullets: [
      'Redesigned the Drive Safe & Save iOS and Android app — 20% retention increase, 15% more savings enrollment',
      'Led user research and usability testing for AI-informed features including predictive scoring and personalization',
      'Created personas, journey maps, and wireframes for complex insurance workflows',
    ],
  },
  {
    company: 'IHG Hotels & Resorts',
    title: 'Senior User Experience Designer',
    period: 'Apr 2015–Sep 2020',
    location: 'Atlanta, GA',
    summary: 'Attribute-based selling platform — $50M annual incremental revenue',
    link: '/work/ihg',
    bullets: [
      'Delivered the Attribute-Based Selling Platform, contributing to $50M in annual incremental revenue',
      'Designed IHG Rewards Club experiences — 35% increase in loyalty participation',
      'Redesigned the customer booking experience — 25% increase in online bookings',
      'Defined UX principles for B2B booking tools, improving agent productivity by 20%',
    ],
  },
  {
    company: 'Delta Air Lines',
    title: 'User Experience Designer',
    period: 'Oct 2010–Feb 2015',
    location: 'Atlanta, GA',
    summary: 'Gate agent app — 15% faster boarding',
    link: '/work/delta',
    bullets: [
      'Led the redesign of the Gate Agent Application — 15% faster boarding times',
      'Developed user flows for the Delta Seating App — 25% increase in app usage',
      'Facilitated design-thinking workshops with cross-functional teams',
    ],
  },
  {
    company: 'Bank of America',
    title: 'User Experience Designer',
    period: '2008–2010',
    location: 'Charlotte, NC',
    summary: 'Financial-center apps unifying in-office and online servicing',
    link: '/work/bofa',
    bullets: [
      'Designed financial-center apps for agent customer servicing',
      'Unified in-office and online servicing channels',
      'Streamlined account-management and transaction workflows',
    ],
  },
  {
    company: 'Yahoo',
    title: 'Digital Marketing Strategist',
    period: '2007–2010',
    location: 'Remote',
    summary: 'Conversion-rate optimization — $2M in additional revenue',
    bullets: ['Conversion-rate optimization — $2M in additional revenue'],
  },
  {
    company: 'SAIC',
    title: 'Usability Analyst',
    period: '2004–2007',
    location: 'Washington, DC',
    summary: 'Federal UX for the CDC and the Office of Management and Budget',
    bullets: ['Delivered UX solutions for the CDC and the Office of Management and Budget'],
  },
]

export const education = [
  { school: 'Georgia Institute of Technology', degree: 'Computer Programming Certification', year: '2008' },
  { school: 'Mississippi State University', degree: 'Bachelor of Fine Arts, Graphic Design', year: '1997' },
]

export const competencies: Record<string, string> = {
  'Product & UX Design':
    'Design Systems, Information Architecture, Interaction Design, User Flows, Wireframes, High-Fidelity Prototyping, Responsive/Mobile Design',
  'AI / UX':
    'Conversational UI, Voice UI (VUI), AI Trust & Transparency Patterns, Human-in-the-Loop, Predictive Interaction Design',
  'Research & Strategy':
    'User Research, Usability Testing, A/B Testing, Data Analysis, Design Sprints, Stakeholder Workshops',
  Tools: 'Figma (Expert), React, TypeScript, Tailwind CSS, Supabase, n8n Automation',
  Leadership:
    'Cross-Functional Collaboration, Design System Governance, Mentoring, Stakeholder Communication',
}
