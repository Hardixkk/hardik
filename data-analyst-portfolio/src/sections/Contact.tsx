import { Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'

export default function Contact() {
  const p = profile
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="card relative overflow-hidden p-8 text-center sm:p-14">
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">09 · Contact</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">{p.contact.headline}</h2>
            <p className="mt-4 text-mute">{p.contact.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {p.email && <a className="btn-primary" href={`mailto:${p.email}?subject=${encodeURIComponent('Data Analyst opportunity')}`}><Mail className="h-4 w-4" /> Email</a>}
              {p.linkedin && <a className="btn-ghost" href={p.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="h-4 w-4" /> LinkedIn</a>}
              {p.github && <a className="btn-ghost" href={p.github} target="_blank" rel="noopener noreferrer"><GithubIcon className="h-4 w-4" /> GitHub</a>}
              {p.resumePath && <a className="btn-ghost" href={p.resumePath} download><Download className="h-4 w-4" /> Download Resume</a>}
            </div>
            {p.email && <p className="mt-5 text-sm text-mute">{p.email}</p>}
          </div>
        </div>
      </Reveal>
      <footer className="mt-10 text-center text-xs text-mute">© {new Date().getFullYear()} {p.name} · {p.location}</footer>
    </section>
  )
}
