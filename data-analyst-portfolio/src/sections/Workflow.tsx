import { BadgeCheck, BarChart3, Database, Eraser, Search, Target } from 'lucide-react'
import { workflowSteps } from '../data/workflow'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const icons = { target: Target, database: Database, broom: Eraser, search: Search, chart: BarChart3, check: BadgeCheck }

export default function Workflow() {
  return (
    <section id="workflow" className="section">
      <SectionHeading eyebrow="05 · Workflow" title="How I Approach Analytical Problems" sub="A repeatable six-step process from business question to validated insight." />
      <ol className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workflowSteps.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <li className="card relative h-full list-none p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand"><Icon className="h-5 w-5" /></span>
                  <span className="font-mono text-3xl font-bold text-line">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-bold"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
                <p className="mt-2 text-sm text-mute">{s.text}</p>
                {i < workflowSteps.length - 1 && <span className="absolute -bottom-3 left-1/2 hidden h-6 w-px bg-line md:block lg:hidden" aria-hidden="true" />}
              </li>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
