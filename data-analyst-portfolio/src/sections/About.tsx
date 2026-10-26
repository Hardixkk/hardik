import { LayoutDashboard, MapPin, Search, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = { search: Search, layout: LayoutDashboard, sparkles: Sparkles }

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="01 · About" title="About Me" />
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-5">
        {profile.photo && (
          <Reveal className="mx-auto w-full max-w-xs lg:col-span-2 lg:max-w-none">
            <figure className="group relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand/40 via-transparent to-teal/40 opacity-70 blur-xl transition group-hover:opacity-100" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-line">
                <img src={profile.photo} alt={profile.photoAlt} loading="lazy" className="aspect-[4/5] w-full object-cover object-[50%_18%] transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl border border-line bg-bg/85 px-4 py-3 backdrop-blur">
                  <span className="text-sm font-bold">{profile.name}</span>
                  <span className="flex items-center gap-1 text-xs text-mute"><MapPin className="h-3 w-3" />{profile.location}</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        )}
        <Reveal className={`space-y-4 text-lg leading-relaxed text-mute ${profile.photo ? 'lg:col-span-3' : 'lg:col-span-5'}`}>
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {profile.aboutCards.map((c, i) => {
          const Icon = icons[c.icon as keyof typeof icons]
          return (
            <Reveal key={c.title} delay={i * 0.07}>
              <div className="card h-full p-5 transition hover:-translate-y-1 hover:border-brand/60">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-mute">{c.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
