import { Link } from 'react-router-dom'
import PageWrap from '../components/PageWrap'
import Rail from '../components/Rail'
import CopyEmail from '../components/CopyEmail'
import { YEARS_EXPERIENCE } from '../data/experience'

const principles = [
  {
    title: "Ship, don't spec",
    text: 'The best design artifact is working software. I write production code because the gap between Figma and production is where products lose their soul.',
  },
  {
    title: 'Design for the constraint',
    text: 'Every great product is shaped by its constraints — budget, timeline, regulation, legacy systems. I design within reality, not in a vacuum.',
  },
  {
    title: 'AI should be legible',
    text: 'People should know when a system is guessing, how sure it is, and how to overrule it. Trust is a design surface, not a legal footnote.',
  },
  {
    title: 'Measure everything',
    text: "If you can't quantify the impact of a design decision, you can't defend it. I tie every major UX change to a business metric — and I say plainly which results are measured and which are qualitative.",
  },
]

const ways = [
  { title: 'Full-time', text: 'Senior or Staff AI Product Designer on a product team that ships.' },
  { title: 'Contract', text: '0→1 AI product design and build — I design it and write the production code.' },
  { title: 'Not sure it fits?', text: "Tell me the problem and I'll tell you honestly whether I'm the right person." },
]

export default function About() {
  return (
    <PageWrap>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-32 pb-16">
        <p className="text-label uppercase text-zinc-400 mb-6">About</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-8">
          <div className="lg:col-span-8">
            <h1 className="text-h1 font-heading text-zinc-50 max-w-[24ch]">
              I design software for people{' '}
              <span className="text-zinc-500">who can't afford confusion.</span>
            </h1>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <img
              src="/images/profile.jpeg"
              alt="Roderick Horton"
              width={100}
              height={100}
              className="w-28 h-28 rounded-2xl object-cover border border-white/[0.06]"
            />
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
              AI Product Designer &amp; Engineer
              <br />
              Atlanta, GA · Remote
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-[65ch] space-y-5 text-lead text-zinc-300">
          <p>
            For {YEARS_EXPERIENCE} years I've designed software for people who make decisions under
            pressure — Delta gate agents boarding 200 passengers, Bank of America agents mid-call, IHG
            hotel owners running thousands of properties. That's the through-line of my career.
          </p>
          <p className="text-zinc-400">
            It's also where enterprise AI is going. Agent-assist, copilots, human-in-the-loop decision
            tools — all of it lives or dies on whether the person on the front line can trust it under
            pressure.
          </p>
          <p className="text-zinc-400">
            So I design and build it. I write production React and TypeScript, architect voice AI, and
            ship the automation that replaces expensive tools. I don't hand off Figma files.
          </p>
        </div>
      </section>

      {/* Principles */}
      <Rail index="01" label="How I think">
        <h2 className="text-h2 font-heading text-zinc-50 mb-8">Principles</h2>
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {principles.map((p) => (
            <div key={p.title} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6">
              <h3 className="sm:col-span-4 text-h3 font-heading text-zinc-100">{p.title}</h3>
              <p className="sm:col-span-8 text-zinc-400 leading-relaxed max-w-[62ch]">{p.text}</p>
            </div>
          ))}
        </div>
      </Rail>

      {/* Ways to work together */}
      <Rail index="02" label="Work together">
        <h2 className="text-h2 font-heading text-zinc-50 mb-8">Ways to work together</h2>
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {ways.map((w) => (
            <div key={w.title} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6">
              <h3 className="sm:col-span-4 text-h3 font-heading text-zinc-100">{w.title}</h3>
              <p className="sm:col-span-8 text-zinc-400 leading-relaxed max-w-[62ch]">{w.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/resume" className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors">
            See the full timeline →
          </Link>
        </div>
      </Rail>

      {/* Contact */}
      <Rail index="03" label="Contact" id="contact">
        <h2 className="text-h1 font-heading text-zinc-50 max-w-[20ch]">Have a hard AI product problem?</h2>
        <p className="text-zinc-500 mt-4 mb-8 max-w-[48ch]">
          I design and build AI products for people who can't afford confusion.
        </p>
        <div className="mb-8">
          <CopyEmail className="text-lg" />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://linkedin.com/in/roderickhorton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors"
          >
            LinkedIn
          </a>
          <Link to="/resume" className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors">
            Résumé
          </Link>
          <span className="text-sm text-zinc-400">Atlanta, GA · Remote OK</span>
        </div>
      </Rail>
    </PageWrap>
  )
}
