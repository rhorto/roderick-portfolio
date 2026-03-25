export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Roderick doesn't just design — he builds. He delivered our design system on time, reduced redundancy across teams by 40%, and the engineers loved working with his specs because they were production-ready.",
    name: 'Sarah Chen',
    role: 'Director of Product',
    company: 'Pfizer',
  },
  {
    quote: "The attribute-based selling platform was a game-changer. Roderick led the UX from research through launch, and the results spoke for themselves — $50M in incremental revenue in the first year.",
    name: 'Michael Torres',
    role: 'VP of Digital',
    company: 'IHG Hotels & Resorts',
  },
  {
    quote: "Most designers hand off Figma files and move on. Roderick shipped production React code, built the automation pipelines, and integrated voice AI — all while keeping the UX clean and conversion-focused.",
    name: 'David Park',
    role: 'Engineering Lead',
    company: 'Audiences247',
  },
]
