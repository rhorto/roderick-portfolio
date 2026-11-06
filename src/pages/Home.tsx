import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import Rail from '../components/Rail'
import WorkRow from '../components/WorkRow'
import PatternSpecimens from '../components/PatternSpecimens'
import CopyEmail from '../components/CopyEmail'
import { orderedProjects } from '../data/projects'
import { YEARS_EXPERIENCE } from '../data/experience'

const featured = orderedProjects.slice(0, 4)
const also = orderedProjects.slice(4)

const readout: [string, string][] = [
  ['Status', 'Open to senior AI product roles & contract work'],
  ['Now', 'Designing + building AI-native SaaS · 2024–'],
  ['Recent', 'Bank of America · agent-facing AI · 2025–26'],
  ['Before', 'Pfizer · State Farm · IHG · Delta'],
  ['Works in', 'Figma · React · TypeScript · Supabase · LLM APIs'],
]

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
    text: 'People should know when a system is guessing, how sure it is, and how to overrule it.',
  },
]

const lineVariants = {
  hidden: { y: '105%' },
  visible: (i: number) => ({
    y: '0%',
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.1 + i * 0.08 },
  }),
}

export default function Home() {
  return (
    <PageWrap>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{ background: 'radial-gradient(60% 50% at 75% 0%, rgba(99,102,241,0.10), transparent 70%)' }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="mx-auto h-full max-w-6xl px-10">
            <div className="grid h-full grid-cols-12 gap-x-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-l border-white/[0.03]" />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pt-36 sm:pt-44 pb-20">
          <p className="text-label uppercase text-zinc-400 mb-7">
            Roderick Horton · AI Product Designer &amp; Engineer · Atlanta / Remote
          </p>

          <h1 className="text-display font-heading text-zinc-50 max-w-[18ch]">
            <span className="block overflow-hidden">
              <motion.span className="block" custom={0} initial="hidden" animate="visible" variants={lineVariants}>
                I design AI for the people
              </motion.span>
            </span>
            <span className="block overflow-hidden text-zinc-500">
              <motion.span className="block" custom={1} initial="hidden" animate="visible" variants={lineVariants}>
                on the front line.
              </motion.span>
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
            <div className="lg:col-span-5">
              <p className="text-lead text-zinc-300 mb-8 max-w-[46ch]">
                Gate agents boarding 200 passengers. Bank agents mid-call. Hotel owners running
                thousands of properties. For {YEARS_EXPERIENCE} years I've designed software for
                people making decisions under pressure — now I design and build the AI that helps them
                make better ones.
              </p>
              <Link
                to="/work"
                className="inline-flex h-11 items-center rounded-lg bg-indigo-400 px-5 text-sm font-semibold text-zinc-950 hover:bg-indigo-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                See selected work
              </Link>
              <div className="mt-5">
                <CopyEmail />
              </div>
            </div>

            <div className="lg:col-start-8 lg:col-span-5">
              <dl className="rounded-xl border border-white/[0.06] bg-zinc-950/50 divide-y divide-white/[0.06]">
                {readout.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-4 px-5 py-3">
                    <dt className="text-label uppercase text-zinc-400 pt-0.5">{k}</dt>
                    <dd className="text-sm text-zinc-200 leading-relaxed">
                      {k === 'Status' && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 align-middle" aria-hidden />
                      )}
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — SELECTED WORK */}
      <Rail index="01" label="Selected work">
        <h2 className="text-h2 font-heading text-zinc-50 mb-3">Work that had to work.</h2>
        <p className="text-zinc-400 max-w-[60ch] mb-8">
          Four case studies, from airline ops to a $50M booking platform — each one showing the
          decisions, not just the screens.
        </p>

        <div>
          {featured.map((p, i) => (
            <WorkRow key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-2">
          {also.map((p, i) => (
            <Link
              key={p.id}
              to={`/work/${p.id}`}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-t border-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
            >
              <span className="text-label uppercase text-zinc-400 tabular-nums sm:w-56 shrink-0">
                {String(i + 5).padStart(2, '0')} — {p.company}
              </span>
              <span className="text-zinc-200 group-hover:text-white transition-colors">{p.title}</span>
            </Link>
          ))}
          <div className="border-t border-white/[0.06] pt-5">
            <Link to="/work" className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors">
              All work →
            </Link>
          </div>
        </div>
      </Rail>

      {/* 02 — PATTERNS */}
      <Rail index="02" label="How I design AI">
        <h2 className="text-h2 font-heading text-zinc-50 mb-3">AI that shows its work.</h2>
        <p className="text-zinc-400 max-w-[60ch] mb-8">
          The craft in AI product design is making systems legible: confidence, provenance, override,
          and failure. These are real components, not screenshots.
        </p>
        <PatternSpecimens />
      </Rail>

      {/* 03 — PRINCIPLES */}
      <Rail index="03" label="How I work">
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {principles.map((p) => (
            <div key={p.title} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6">
              <h3 className="sm:col-span-4 text-h3 font-heading text-zinc-100">{p.title}</h3>
              <p className="sm:col-span-8 text-zinc-400 leading-relaxed max-w-[62ch]">{p.text}</p>
            </div>
          ))}
        </div>
      </Rail>

      {/* 04 — ABOUT */}
      <Rail index="04" label="About">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
          <div className="sm:col-span-4 lg:col-span-3">
            <img
              src="/images/profile.jpeg"
              alt="Roderick Horton"
              width={100}
              height={100}
              loading="lazy"
              className="w-full max-w-[220px] aspect-[3/4] object-cover rounded-xl border border-white/[0.06]"
            />
          </div>
          <div className="sm:col-span-8">
            <p className="text-lead text-zinc-300 mb-4 max-w-[54ch]">
              I'm a product designer who ships. I've spent {YEARS_EXPERIENCE} years designing
              high-stakes software for Delta, IHG, Pfizer, State Farm and Bank of America — and now I
              design and build AI-native products end to end.
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-[62ch] mb-6">
              I write production React and TypeScript, architect voice AI, and build the automation
              that replaces expensive tools. I don't hand off Figma files — I ship them.
            </p>
            <Link to="/about" className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors">
              More about me →
            </Link>
          </div>
        </div>
      </Rail>

      {/* 05 — CONTACT */}
      <Rail index="05" label="Contact">
        <h2 className="text-h1 font-heading text-zinc-50 max-w-[20ch]">Have a hard AI product problem?</h2>
        <p className="text-zinc-500 mt-4 mb-8 max-w-[48ch]">
          I design and build AI products for people who can't afford confusion.
        </p>
        <div className="mb-8">
          <CopyEmail className="text-lg" />
        </div>
        <p className="text-sm text-zinc-400 mb-6">
          Considering: Senior/Staff AI Product Designer · Design Engineer · Contract 0→1
        </p>
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
