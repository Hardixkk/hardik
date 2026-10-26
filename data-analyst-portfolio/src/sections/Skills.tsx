import { BarChart3, Bot, Code2, Database, Table2, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = { bi: BarChart3, excel: Table2, sql: Database, python: Code2, ai: Bot, tools: Wrench }

export default function Skills() {
  return (
    <section id="skills" className="bg-bg2/50">
      <div className="section">
        <SectionHeading eyebrow="02 · Skills" title="Technical Skills" sub="Core toolkit across BI, SQL, Excel, Python and AI-assisted workflows." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon]
            return (
              <Reveal key={cat.id} delay={(i % 3) * 0.06}>
                <article className={`card h-full p-6 transition hover:border-brand/60 ${cat.priority ? 'border-brand/30' : ''}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{cat.title}</h3>
                  <p className="mt-2 text-sm text-mute">{cat.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s) => <li key={s} className="chip">{s}</li>)}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
