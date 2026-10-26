import { Download, Eye, FileText } from 'lucide-react'
import { certifications, profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  const e = profile.education
  return (
    <section id="resume" className="bg-bg2/50">
      <div className="section">
        <SectionHeading eyebrow="08 · Resume" title="Resume" sub="A quick summary — the full resume is a download away." />
        <Reveal>
          <article className="card mt-10 overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-bg2 px-6 py-4">
              <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-brand" /><div><p className="font-bold">{profile.name}</p><p className="text-xs text-mute">{profile.title}</p></div></div>
              {profile.resumePath ? (
                <div className="flex gap-2">
                  <a className="btn-ghost" href={profile.resumePath} target="_blank" rel="noopener noreferrer"><Eye className="h-4 w-4" /> Preview</a>
                  <a className="btn-primary" href={profile.resumePath} download><Download className="h-4 w-4" /> Download Resume</a>
                </div>
              ) : (
                <span className="chip">Resume PDF will be available soon</span>
              )}
            </div>
            <div className="grid gap-8 p-6 md:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Technical skills</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {skillCategories.map((c) => <li key={c.id}><span className="font-semibold">{c.title}:</span> <span className="text-mute">{c.skills.join(', ')}</span></li>)}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Education</h3>
                  <p className="mt-3 text-sm font-semibold">{e.degree} — <span className="font-normal text-mute">{e.status}</span></p>
                  {(e.college || e.university) && <p className="text-sm text-mute">{[e.college, e.university].filter(Boolean).join(' · ')}</p>}
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Featured analytics projects</h3>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-mute">{projects.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
                </div>
                {certifications.length > 0 && (
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-teal">Certifications</h3>
                    <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-mute">{certifications.map((c) => <li key={c.title}>{c.title} — {c.issuer}</li>)}</ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
