import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

/**
 * An editorial work row: index + meta, outcome-led title, summary, two metrics,
 * and an image plate. Replaces the old card grid on Home and Work.
 */
export default function WorkRow({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      to={`/work/${project.id}`}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10 border-t border-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
    >
      <div className="lg:col-span-5 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-label uppercase text-zinc-400 tabular-nums">{num}</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} aria-hidden />
          <span className="text-label uppercase text-zinc-400">
            {project.company} · {project.year}
          </span>
        </div>

        <h3 className="text-h3 text-zinc-100 group-hover:text-white transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-6 max-w-[48ch]">{project.desc}</p>

        <div className="flex gap-8 mb-6">
          {project.stats.slice(0, 2).map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl font-heading font-medium text-zinc-100 tabular-nums tracking-tight">
                {value}
              </div>
              <div className="text-[13px] text-zinc-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-zinc-300 group-hover:text-indigo-300 transition-colors">
          Read case study
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>

      <div className="lg:col-start-7 lg:col-span-6">
        <div className="aspect-[16/10] rounded-xl bg-zinc-900 border border-white/[0.06] overflow-hidden group-hover:border-white/[0.12] transition-colors">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.company} — ${project.title}`}
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(145deg, ${project.color}0d, ${project.color}03)` }}
            >
              <span className="font-heading text-4xl tracking-wider" style={{ color: `${project.color}40` }}>
                {project.company.split(' ')[0].toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
