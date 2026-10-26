import { useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import type { Project } from '../data/projects'
import Modal from './Modal'
import ProjectVisual from './ProjectVisual'
import { GithubIcon } from './BrandIcons'
import CountUp from './CountUp'

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-teal">{title}</h4>
      <ul className="mt-2 space-y-1.5 text-sm text-mute">
        {items.map((i) => <li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />{i}</li>)}
      </ul>
    </div>
  )
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState<number | null>(null)
  const [big, setBig] = useState(false)
  const shots = project.screenshots
  const cur = shots[idx]

  return (
    <>
      <Modal title={`${project.title} case study`} onClose={onClose} wide>
        <div className="grid lg:grid-cols-5">
          <div className="border-b border-line lg:sticky lg:top-0 lg:col-span-3 lg:self-start lg:border-b-0 lg:border-r">
            {cur ? (
              <button onClick={() => setZoom(idx)} aria-label={`Enlarge screenshot: ${cur.alt}`} className="block w-full bg-bg2">
                <img src={cur.src} alt={cur.alt} className="w-full object-contain" />
              </button>
            ) : (
              <ProjectVisual project={project} className="min-h-[260px] lg:h-full" />
            )}
            {shots.length > 1 && (
              <div className="flex items-center justify-between gap-2 p-3">
                <button className="btn-ghost !px-3" onClick={() => setIdx((idx - 1 + shots.length) % shots.length)} aria-label="Previous screenshot"><ChevronLeft className="h-4 w-4" /></button>
                <span className="text-xs text-mute">{idx + 1} / {shots.length}</span>
                <button className="btn-ghost !px-3" onClick={() => setIdx((idx + 1) % shots.length)} aria-label="Next screenshot"><ChevronRight className="h-4 w-4" /></button>
              </div>
            )}
          </div>
          <div className="space-y-5 p-6 lg:col-span-2">
            <div>
              <p className="eyebrow">{project.categories.join(' · ')}</p>
              <h3 className="mt-1 pr-8 text-2xl font-extrabold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm text-mute">{project.summary}</p>
            </div>
            <ul className="flex flex-wrap gap-2">{project.tools.map((t) => <li key={t} className="chip text-ink">{t}</li>)}</ul>
            {project.kpis && project.kpis.length > 0 && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-teal">Figures shown in the dashboard</h4>
                <dl className="mt-2 grid grid-cols-2 gap-2">
                  {project.kpis.map((k) => (
                    <div key={k.label} className="rounded-xl border border-line bg-bg2 px-3 py-2">
                      <dt className="text-[11px] text-mute">{k.label}</dt>
                      <dd className="font-mono text-lg font-semibold text-brand"><CountUp value={k.value} /></dd>
                    </div>
                  ))}
                </dl>
                {project.kpiNote && <p className="mt-2 text-[11px] text-mute">{project.kpiNote}</p>}
              </div>
            )}
            <List title="Analytical objectives" items={project.objectives} />
            <List title="Business questions" items={project.businessQuestions} />
            <List title="Key features" items={project.features} />
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-teal">Business relevance</h4>
              <p className="mt-2 text-sm text-mute">{project.businessRelevance}</p>
            </div>
            <List title="Verified project figures (approximate)" items={project.verifiedFindings} />
            <div className="flex flex-wrap gap-3 pt-1">
              {project.repoUrl ? (
                <a className="btn-primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="h-4 w-4" /> GitHub Repository</a>
              ) : (
                <span className="chip">Repository link coming soon</span>
              )}
              {project.liveUrl && <a className="btn-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live project</a>}
            </div>
          </div>
        </div>
      </Modal>
      {zoom !== null && shots[zoom] && (
        <Modal title="Screenshot preview" onClose={() => { setZoom(null); setBig(false) }} wide>
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 pr-14">
            <p className="truncate text-sm text-mute">{shots[zoom].alt}</p>
            <button className="btn-ghost shrink-0 !py-1.5" onClick={() => setBig((b) => !b)} aria-pressed={big}>
              {big ? <><ZoomOut className="h-4 w-4" /> Fit to screen</> : <><ZoomIn className="h-4 w-4" /> Zoom in</>}
            </button>
          </div>
          <div className="max-h-[78vh] overflow-auto bg-bg2">
            <img src={shots[zoom].src} alt={shots[zoom].alt} onClick={() => setBig((b) => !b)}
              className={`block ${big ? 'w-[220%] max-w-none cursor-zoom-out' : 'w-full cursor-zoom-in'}`} />
          </div>
        </Modal>
      )}
    </>
  )
}
