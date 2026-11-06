import PageWrap from '../components/PageWrap'
import WorkRow from '../components/WorkRow'
import { orderedProjects } from '../data/projects'

const earlier = [
  {
    company: 'Yahoo',
    role: 'Digital Marketing Strategist',
    year: '2007–2010',
    note: 'Conversion-rate optimization — $2M in additional revenue',
  },
  {
    company: 'SAIC',
    role: 'Usability Analyst',
    year: '2004–2007',
    note: 'Federal UX for the CDC and the Office of Management and Budget',
  },
]

export default function Work() {
  return (
    <PageWrap>
      <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-32 pb-10">
        <p className="text-label uppercase text-zinc-400 mb-5">Work</p>
        <h1 className="text-h1 font-heading text-zinc-50 mb-4">Selected work</h1>
        <p className="text-lead text-zinc-300 max-w-[54ch]">
          Case studies from airline ops, hospitality, pharma, insurance, banking, and my own AI
          products.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 pb-16">
        {orderedProjects.map((p, i) => (
          <WorkRow key={p.id} project={p} index={i} />
        ))}
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-14">
          <h2 className="text-label uppercase text-zinc-400 mb-6">Earlier</h2>
          <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
            {earlier.map((e) => (
              <div key={e.company} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-4">
                <span className="sm:col-span-3 text-zinc-200">{e.company}</span>
                <span className="sm:col-span-3 text-zinc-400">{e.role}</span>
                <span className="sm:col-span-2 text-zinc-400 tabular-nums">{e.year}</span>
                <span className="sm:col-span-4 text-zinc-400">{e.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  )
}
