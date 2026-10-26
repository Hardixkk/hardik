import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  const e = profile.education
  const details = [
    e.college && ['College', e.college],
    e.university && ['University', e.university],
    e.graduationYear && ['Graduation year', e.graduationYear],
    e.results && ['Academic results', e.results],
  ].filter(Boolean) as string[][]
  return (
    <section id="education" className="bg-bg2/50">
      <div className="section">
        <SectionHeading eyebrow="06 · Education" title="Education" />
        <Reveal>
          <article className="card mt-10 flex max-w-3xl flex-col gap-5 p-6 sm:flex-row">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand"><GraduationCap className="h-6 w-6" /></span>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{e.degree}</h3>
              <p className="mt-1 inline-block rounded-full bg-teal/15 px-3 py-0.5 text-xs font-semibold text-teal">{e.status}</p>
              {details.length > 0 && (
                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  {details.map(([k, v]) => (
                    <div key={k}><dt className="text-xs uppercase tracking-wider text-mute">{k}</dt><dd className="font-medium">{v}</dd></div>
                  ))}
                </dl>
              )}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
