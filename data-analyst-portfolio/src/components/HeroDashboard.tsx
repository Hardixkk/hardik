import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis } from 'recharts'
import { useChartColors, type Theme } from './useTheme'

// ILLUSTRATIVE decorative data only — not real results.
const trend = [32, 38, 35, 46, 52, 49, 61, 68].map((v, i) => ({ m: `P${i + 1}`, v }))
const bars = [
  { n: 'A', v: 42 }, { n: 'B', v: 64 }, { n: 'C', v: 51 }, { n: 'D', v: 78 }, { n: 'E', v: 58 },
]
const mix = [
  { n: 'Seg 1', v: 45 }, { n: 'Seg 2', v: 30 }, { n: 'Seg 3', v: 25 },
]

export default function HeroDashboard({ theme }: { theme: Theme }) {
  const c = useChartColors(theme)
  const pie = [c.blue, c.teal, c.amber]
  return (
    <figure className="card relative p-4 sm:p-5" aria-label="Illustrative analytics workspace with sample charts">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span className="chip font-mono">Sample data · illustrative</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { l: 'Sales', v: '▲ 12%' },
          { l: 'Performance', v: '82 / 100' },
          { l: 'Insights', v: '5 new' },
        ].map((k) => (
          <div key={k.l} className="rounded-xl border border-line bg-bg2 p-3">
            <p className="text-[11px] text-mute">{k.l}</p>
            <p className="mt-1 font-mono text-sm font-semibold sm:text-base">{k.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-2.5 grid grid-cols-5 gap-2.5">
        <div className="col-span-5 rounded-xl border border-line bg-bg2 p-3 sm:col-span-3">
          <p className="text-[11px] text-mute">Trends</p>
          <div className="h-28" role="img" aria-label="Sample line chart trending upward">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ top: 6, right: 4, left: 4, bottom: 0 }}>
                <defs>
                  <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={c.blue} stopOpacity={0.35} /><stop offset="100%" stopColor={c.blue} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="m" tick={{ fill: c.text, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Area type="monotone" dataKey="v" stroke={c.blue} strokeWidth={2} fill="url(#hg)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-span-5 rounded-xl border border-line bg-bg2 p-3 sm:col-span-2">
          <p className="text-[11px] text-mute">Performance</p>
          <div className="h-28" role="img" aria-label="Sample bar chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars} margin={{ top: 6, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="n" tick={{ fill: c.text, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Bar dataKey="v" fill={c.teal} radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex items-center gap-4 rounded-xl border border-line bg-bg2 p-3">
        <div className="h-20 w-20 shrink-0" role="img" aria-label="Sample donut chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={mix} dataKey="v" innerRadius={24} outerRadius={38} paddingAngle={3} stroke="none" isAnimationActive={false}>
                {mix.map((_, i) => <Cell key={i} fill={pie[i]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="text-xs text-mute">
          <li className="mb-1 font-semibold text-ink">Insights · sample mix</li>
          {mix.map((m, i) => (
            <li key={m.n} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: pie[i] }} />{m.n} — {m.v}%</li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-[11px] text-mute">Decorative sample figures — not real results or project outcomes.</figcaption>
    </figure>
  )
}
