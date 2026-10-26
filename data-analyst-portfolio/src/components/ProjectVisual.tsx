import { ZoomIn } from 'lucide-react'
import type { Project } from '../data/projects'

/** Real screenshot when supplied; otherwise a clearly-labeled placeholder (never a fake dashboard). */
export default function ProjectVisual({ project, onZoom, className = '' }: { project: Project; onZoom?: (i: number) => void; className?: string }) {
  const shot = project.screenshots[0]
  if (shot) {
    const inner = <img src={shot.src} alt={shot.alt} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" />
    return onZoom ? (
      <button onClick={() => onZoom(0)} aria-label={`Open case study: ${project.title}`} className={`group relative block overflow-hidden bg-bg2 ${className}`}>
        {inner}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"><ZoomIn className="h-3.5 w-3.5" /> Open case study</span>
      </button>
    ) : <div className={`overflow-hidden bg-bg2 ${className}`}>{inner}</div>
  }
  return (
    <div className={`relative grid place-items-center overflow-hidden bg-bg2 ${className}`} role="img" aria-label={`Placeholder: ${project.title} screenshot not yet added`}>
      <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-teal">Screenshot placeholder</p>
        <p className="mt-2 text-sm text-mute">{project.placeholderNote ?? 'Add screenshots in /public/projects'}</p>
      </div>
    </div>
  )
}
