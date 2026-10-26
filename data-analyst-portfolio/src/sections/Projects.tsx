import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { projects, type Project, type ProjectCategory } from '../data/projects'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectVisual from '../components/ProjectVisual'
import ProjectModal from '../components/ProjectModal'
import { GithubIcon } from '../components/BrandIcons'

const ORDER: ProjectCategory[] = ['Power BI', 'SQL', 'Python', 'AI Analytics']

export default function Projects() {
  const [filter, setFilter] = useState<'All Projects' | ProjectCategory>('All Projects')
  const [open, setOpen] = useState<Project | null>(null)
  // Only show filters for categories that actually have a project.
  const cats = useMemo(() => ORDER.filter((c) => projects.some((p) => p.categories.includes(c))), [])
  const shown = projects.filter((p) => filter === 'All Projects' || p.categories.includes(filter))

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="03 · Projects" title="Featured Projects" sub="Dashboards and analyses built to answer real business questions." />
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {(['All Projects', ...cats] as const).map((c) => (
          <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${filter === c ? 'border-brand bg-brand text-white' : 'border-line text-mute hover:border-brand hover:text-ink'}`}>
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} project{shown.length === 1 ? '' : 's'} shown</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06} className="h-full">
            <article className="card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl hover:shadow-brand/10">
              <ProjectVisual project={p} onZoom={() => setOpen(p)} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-5">
                <p className="eyebrow">{p.categories.join(' · ')}</p>
                <h3 className="mt-1 text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-mute">{p.summary}</p>
                {p.kpis && p.kpis.length > 0 && (
                  <dl className="mt-4 grid grid-cols-3 gap-2" aria-label="Headline figures shown in the dashboard">
                    {p.kpis.slice(0, 3).map((k) => (
                      <div key={k.label} className="rounded-lg border border-line bg-bg2 px-2 py-1.5">
                        <dd className="font-mono text-sm font-semibold text-brand">{k.value}</dd>
                        <dt className="truncate text-[10px] text-mute" title={k.label}>{k.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
                <ul className="mt-4 flex flex-wrap gap-1.5">{p.tools.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <button className="btn-primary" onClick={() => setOpen(p)}>View Project <ArrowRight className="h-4 w-4" /></button>
                  {p.repoUrl && <a className="btn-ghost" href={p.repoUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="h-4 w-4" /> GitHub</a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
