import { BarChart3, Code2, Database, Lightbulb } from 'lucide-react'
import Reveal from '../components/Reveal'
import AiDemo from '../components/AiDemo'
import type { Theme } from '../components/useTheme'

const cards = [
  { icon: Database, title: 'AI-Assisted SQL', text: 'AI can help draft queries, clarify JOINs, identify syntax errors, and suggest query improvements — which I then test against known totals.' },
  { icon: Code2, title: 'AI-Assisted Python', text: 'AI can assist with Pandas code, data-cleaning ideas, exploratory analysis, and documentation, with every transformation reviewed before use.' },
  { icon: BarChart3, title: 'AI-Assisted Power BI', text: 'AI can help interpret DAX formulas, troubleshoot measures, and brainstorm dashboard designs; results are checked against the data model.' },
  { icon: Lightbulb, title: 'From Data to Insights', text: 'AI can help turn validated analytical results into clear summaries, business questions, and recommendations.' },
]

export default function AiAnalytics({ theme }: { theme: Theme }) {
  return (
    <section id="ai-analytics" className="relative overflow-hidden border-y border-line bg-bg2/60">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="section relative">
        <p className="eyebrow">04 · AI Analytics</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
          Analytics, <span className="text-teal">Accelerated</span> by AI.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-mute">
          Combining analytical fundamentals with AI-assisted workflows to explore data faster, improve productivity, and validate insights with confidence.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <article className="card h-full p-5 transition hover:border-teal/60">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-mute">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10"><AiDemo theme={theme} /></div>
      </div>
    </section>
  )
}
