import PageWrap from '../components/PageWrap'
import CopyEmail from '../components/CopyEmail'
import { jobs, education, competencies } from '../data/experience'

const btn =
  'inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-white/[0.08] text-zinc-200 hover:bg-white/[0.05] hover:border-white/[0.16] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 print:hidden'

export default function Resume() {
  return (
    <PageWrap>
      <div className="mx-auto max-w-5xl px-6 lg:px-10 pt-32 pb-20">
        {/* Header */}
        <p className="text-label uppercase text-zinc-400 mb-6 print:hidden">Résumé</p>
        <h1 className="text-h1 font-heading text-zinc-50 mb-3">Roderick Horton</h1>
        <p className="text-lead text-zinc-300 mb-2">AI Product Designer &amp; Engineer — Enterprise UX &amp; AI</p>
        <p className="text-sm text-zinc-400 mb-3">Atlanta, GA · Remote OK</p>
        <div className="mb-6">
          <CopyEmail />
        </div>
        <p className="text-zinc-400 leading-relaxed max-w-[65ch] mb-6">
          Designer-engineer with 20+ years in enterprise UX and AI products. I design and build
          AI-native software end to end. Documented impact includes $50M in annual incremental revenue
          at IHG and 40% less design redundancy at Pfizer.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <button onClick={() => window.print()} className={btn}>
            Print / Save as PDF
          </button>
          <a
            href="https://hirejet.ai/resumes/roderick-horton-general.html"
            target="_blank"
            rel="noopener noreferrer"
            className={btn}
          >
            Open full résumé ↗
          </a>
        </div>

        {/* Experience */}
        <h2 className="text-label uppercase text-zinc-400 mb-6">Experience</h2>
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {jobs.map((j) => (
            <div key={`${j.company}-${j.period}`} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-7">
              <div className="sm:col-span-3">
                <div className="text-sm text-zinc-300 tabular-nums">{j.period}</div>
                {j.location && <div className="text-[13px] text-zinc-400 mt-1">{j.location}</div>}
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-[15px] font-heading font-semibold text-zinc-100">{j.company}</h3>
                <p className="text-sm text-zinc-300 mb-2.5">{j.title}</p>
                <ul className="space-y-1.5">
                  {j.bullets.map((b) => (
                    <li key={b} className="text-zinc-400 leading-relaxed flex gap-2">
                      <span aria-hidden className="text-zinc-600">
                        ·
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Competencies */}
        <h2 className="text-label uppercase text-zinc-400 mt-16 mb-6">Core competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(competencies).map(([category, skills]) => (
            <div key={category} className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5">
              <h3 className="text-[13px] font-heading font-semibold text-zinc-200 uppercase tracking-wide mb-2">
                {category}
              </h3>
              <p className="text-[13px] text-zinc-400 leading-relaxed">{skills}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-label uppercase text-zinc-400 mt-16 mb-6">Education</h2>
        <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {education.map((e) => (
            <div key={e.school} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5">
              <div className="sm:col-span-3 text-sm text-zinc-300 tabular-nums">{e.year}</div>
              <div className="sm:col-span-9">
                <h3 className="text-[15px] font-heading font-semibold text-zinc-100">{e.school}</h3>
                <p className="text-sm text-zinc-400">{e.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrap>
  )
}
