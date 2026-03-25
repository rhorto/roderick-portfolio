export interface Project {
  id: string
  number: string
  title: string
  company: string
  description: string
  longDescription: string
  categories: string[]
  metrics: { label: string; value: string }[]
  role: string
  duration: string
  industry: string
  image: string
  color: string
}

export const projects: Project[] = [
  {
    id: 'audiences247',
    number: '01',
    title: 'AI SaaS Platform',
    company: 'Audiences247',
    description: 'Designed and built an AI-powered multi-tenant SaaS platform replacing $497/mo tools — voice AI, automated lead scoring, and intelligent outreach systems.',
    longDescription: 'End-to-end AI product design and development of a multi-tenant B2B platform. Built with React, TypeScript, Supabase, and Stripe. Features include AI voice receptionist (Retell), automated lead classification using Gemini, conversion-optimized audit funnels, and n8n automation workflows connecting 10+ services.',
    categories: ['AI Product Design', 'Full-Stack Development', 'Voice AI', 'Automation'],
    metrics: [
      { label: 'Leads Processed', value: '70K+' },
      { label: 'Open Rate', value: '35-50%' },
      { label: 'Reply Rate', value: '8-15%' },
      { label: 'Cost Reduction', value: '75%' },
    ],
    role: 'AI Product Designer & Engineer',
    duration: 'Aug 2024 - Present',
    industry: 'AI / SaaS',
    image: '/projects/audiences247.jpg',
    color: '#6366f1',
  },
  {
    id: 'ihg',
    number: '02',
    title: 'Attribute-Based Selling Platform',
    company: 'IHG Hotels & Resorts',
    description: 'Reimagined hotel booking systems with custom stay interfaces that drive more revenue. Delivered IHG\'s first attribute-based selling platform.',
    longDescription: 'Led the UX design for IHG\'s groundbreaking Attribute-Based Selling Platform, enabling guests to customize room attributes (view, floor, amenities) during booking. Created seamless designs for IHG Rewards Club enhancing usability across web and mobile.',
    categories: ['UX/UI', 'Research', 'Strategy', 'Design Systems'],
    metrics: [
      { label: 'Revenue Impact', value: '$50M' },
      { label: 'Loyalty Increase', value: '35%' },
      { label: 'Booking Increase', value: '25%' },
      { label: 'Agent Productivity', value: '+20%' },
    ],
    role: 'Senior User Experience Designer',
    duration: 'Apr 2015 - Sep 2020',
    industry: 'Hospitality',
    image: '/projects/ihg.jpg',
    color: '#10b981',
  },
  {
    id: 'pfizer',
    number: '03',
    title: 'Enterprise Design System & Healthcare UX',
    company: 'Pfizer',
    description: 'Revolutionizing healthcare interfaces with user-centered systems and streamlined internal workflows. Built enterprise-level design system.',
    longDescription: 'Spearheaded the creation of Pfizer\'s enterprise-level UX design system including scalable, reusable design tokens. Led end-to-end user experiences for multiple healthcare products, conducted extensive user research and usability testing.',
    categories: ['Design Systems', 'Healthcare', 'Enterprise UX', 'Research'],
    metrics: [
      { label: 'Redundancy Reduced', value: '40%' },
      { label: 'Products Served', value: 'Multiple' },
      { label: 'Team Impact', value: 'Cross-Functional' },
      { label: 'Design Tokens', value: 'Scalable' },
    ],
    role: 'Senior User Experience Designer',
    duration: 'Jan 2022 - Aug 2024',
    industry: 'Healthcare / Pharma',
    image: '/projects/pfizer.jpg',
    color: '#0ea5e9',
  },
  {
    id: 'delta',
    number: '04',
    title: 'Gate Agent & Seating Applications',
    company: 'Delta Air Lines',
    description: 'Enhancing traveler experiences and employee operations through innovative UX solutions for mission-critical airline applications.',
    longDescription: 'Led the redesign of Delta\'s Gate Agent Application, cutting boarding times by 15%. Developed intuitive user flows for the Delta Seating App driving 25% increase in usage. Designed systems improving consistency across airline digital platforms.',
    categories: ['Enterprise UX', 'Mobile', 'Operations', 'Research'],
    metrics: [
      { label: 'Boarding Time', value: '-15%' },
      { label: 'App Usage', value: '+25%' },
      { label: 'Satisfaction', value: '+20%' },
      { label: 'Recognition', value: 'Award' },
    ],
    role: 'User Experience Designer',
    duration: 'Oct 2010 - Feb 2015',
    industry: 'Aviation',
    image: '/projects/delta.jpg',
    color: '#ef4444',
  },
  {
    id: 'statefarm',
    number: '05',
    title: 'Drive Safe & Save Mobile App',
    company: 'State Farm Insurance',
    description: 'Reimagined the UX of State Farm\'s Drive Safe & Save iOS and Android app, driving user retention and policyholder savings.',
    longDescription: 'Led end-to-end design projects for State Farm\'s mobile and web applications. Spearheaded user research and usability testing to optimize product features ensuring seamless user journey across all platforms.',
    categories: ['Mobile UX', 'iOS', 'Android', 'Insurance'],
    metrics: [
      { label: 'User Retention', value: '+20%' },
      { label: 'Enrollments', value: '+15%' },
      { label: 'Productivity', value: '+20%' },
      { label: 'Platforms', value: 'iOS + Android' },
    ],
    role: 'Senior User Experience Designer',
    duration: 'Jan 2021 - Dec 2022',
    industry: 'Insurance / Fintech',
    image: '/projects/statefarm.jpg',
    color: '#f59e0b',
  },
]

export const experiences = [
  {
    company: 'Audiences247',
    role: 'AI Product Designer',
    period: 'Aug 2024 - Present',
    type: 'Contract',
    highlights: [
      'Ship AI-powered SaaS products end-to-end (research to production UI)',
      'Build production interfaces with React, TypeScript, Tailwind CSS, Supabase, Stripe',
      'Design voice AI agents, conversational systems, and automated email pipelines',
      'Architect n8n automation workflows connecting 10+ services',
    ],
  },
  {
    company: 'Pfizer',
    role: 'Senior User Experience Designer',
    period: 'Jan 2022 - Aug 2024',
    type: 'Contract',
    highlights: [
      'Created enterprise design system reducing design redundancy by 40%',
      'Led end-to-end UX for multiple healthcare products',
      'Conducted user research, usability testing, and A/B testing',
    ],
  },
  {
    company: 'State Farm Insurance',
    role: 'Senior User Experience Designer',
    period: 'Jan 2021 - Dec 2022',
    type: 'Contract',
    highlights: [
      'Redesigned Drive Safe & Save app — 20% retention increase',
      'Led end-to-end design for mobile and web applications',
    ],
  },
  {
    company: 'IHG Hotels & Resorts',
    role: 'Senior User Experience Designer',
    period: 'Apr 2015 - Sep 2020',
    type: 'Full-time',
    highlights: [
      'Delivered $50M attribute-based selling platform',
      '35% increase in loyalty program participation',
      'Redesigned booking experience — 25% increase in online bookings',
    ],
  },
  {
    company: 'Delta Air Lines',
    role: 'User Experience Designer',
    period: 'Oct 2010 - Feb 2015',
    type: 'Full-time',
    highlights: [
      'Redesigned Gate Agent Application — 15% faster boarding',
      'Delta Seating App — 25% increase in usage',
    ],
  },
  {
    company: 'Yahoo',
    role: 'Digital Marketing Strategist',
    period: 'Jan 2007 - Oct 2010',
    type: 'Self-employed',
    highlights: [
      'CRO optimization driving $2M in additional revenue',
    ],
  },
  {
    company: 'SAIC',
    role: 'Usability Analyst',
    period: 'Oct 2004 - Jan 2007',
    type: 'Full-time',
    highlights: [
      'UX solutions for federal clients (CDC, OMB)',
    ],
  },
]
