export interface Article {
  title: string
  content: string
  tag: string
}

export const articles: Article[] = [
  {
    title: 'Why I build what I design',
    tag: 'Philosophy',
    content: 'The gap between design and implementation is where most products lose their soul. A pixel-perfect Figma file means nothing if the engineer interprets the spacing differently, skips the micro-interaction, or picks a different loading state. I started writing production code because I got tired of that gap. When I design a voice AI flow, I also build the React interface that handles the real-time transcription, the error states when the model hallucinates, and the fallback when the connection drops. The result is a product that feels exactly like it was designed to feel — because the same person designed and built it.',
  },
  {
    title: 'Designing for when AI fails',
    tag: 'AI Design',
    content: 'Every AI product fails. The voice agent misunderstands. The email personalization hallucinates a wrong company name. The lead scorer flags a Fortune 500 company as low-quality. The difference between a good AI product and a bad one isn\'t accuracy — it\'s what happens in the failure moment. I design every AI feature with three states: confident (show the result), uncertain (flag for review), and wrong (graceful recovery). The AI assistant on this portfolio works without an API key using curated static responses. That\'s not a limitation — that\'s a design decision. The fallback IS the feature.',
  },
  {
    title: 'The $497/month problem',
    tag: 'Strategy',
    content: 'Small businesses pay $497-$1,200/month for SaaS tools that are 80% features they\'ll never use. GoHighLevel, HubSpot, Salesforce — they\'re built for the average customer, not YOUR customer. I built Audiences247 to prove a point: a self-hosted stack (Supabase + n8n + Retell) can replace a $500/month subscription at $52/month while being more targeted, more automated, and more effective. The secret isn\'t better technology — it\'s better product design. When you understand what a 50-year-old HVAC contractor actually needs at 6 AM before his first service call, you stop building dashboards and start building solutions.',
  },
  {
    title: 'Design systems are products',
    tag: 'Systems',
    content: 'A design system isn\'t a Figma library. It\'s a product with users (designers and engineers), features (components and tokens), adoption metrics, and maintenance costs. At Pfizer, I treated our design system like a product launch: user research with the teams who\'d use it, an adoption strategy with documentation and workshops, and success metrics tied to design redundancy reduction. The result was 40% less duplicate work. Most design systems fail because they\'re treated like a side project. They succeed when they\'re treated like the most important product your design team ships.',
  },
]
