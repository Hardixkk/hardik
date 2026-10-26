import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import HeroDashboard from '../components/HeroDashboard'
import CountUp from '../components/CountUp'
import type { Theme } from '../components/useTheme'

export default function Hero({ theme }: { theme: Theme }) {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-72 h-72 w-72 rounded-full bg-teal/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{profile.title}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            I Turn <span className="text-brand">Data</span> Into <span className="text-teal">Decisions.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">{profile.heroText}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {profile.heroTags.map((t) => <li key={t} className="chip text-ink">{t}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore My Projects <ArrowRight className="h-4 w-4" /></a>
            {profile.resumePath && (
              <a href={profile.resumePath} download className="btn-ghost"><Download className="h-4 w-4" /> Download Resume</a>
            )}
            <a href="#contact" className="btn-ghost"><Mail className="h-4 w-4" /> Contact Me</a>
          </div>
        </div>

        <div className="relative lg:pt-10">
          {profile.photo && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card relative z-10 mb-4 flex items-center gap-4 p-3 pr-5 shadow-xl shadow-black/20 lg:absolute lg:-left-6 lg:top-0 lg:mb-0"
            >
              <img src={profile.photo} alt={profile.photoAlt} width={64} height={64} className="h-16 w-16 rounded-xl object-cover object-[50%_20%] ring-2 ring-brand/60" />
              <div>
                <p className="font-bold leading-tight">{profile.name}</p>
                <p className="text-xs text-teal">Aspiring Data Analyst</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-mute"><MapPin className="h-3 w-3" />{profile.location}</p>
              </div>
            </motion.div>
          )}
          <HeroDashboard theme={theme} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-12">
        <dl className="card grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
          {profile.highlights.map((h) => (
            <div key={h.label} className="px-5 py-4">
              <dd className="font-mono text-2xl font-bold text-brand sm:text-3xl"><CountUp value={h.value} /></dd>
              <dt className="mt-0.5 text-xs text-mute">{h.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
