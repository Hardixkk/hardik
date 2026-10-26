import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Play, ShieldCheck } from 'lucide-react'
import { useChartColors, type Theme } from './useTheme'

// ILLUSTRATIVE SAMPLE DATASET — invented for this demo, not from any real business or project.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const CATS = ['Electronics', 'Accessories', 'Services']
const SALES: Record<string, number[]> = {
  Electronics: [120, 132, 128, 150, 161, 174],
  Accessories: [60, 58, 66, 64, 72, 70],
  Services: [40, 44, 47, 52, 55, 61],
}
const rows = MONTHS.flatMap((m, i) => CATS.map((c) => ({ month: m, category: c, sales: SALES[c][i] })))

type Q = { id: string; label: string; sql: string }
const QUESTIONS: Q[] = [
  {
    id: 'monthly',
    label: 'What were total sales by month?',
    sql: `SELECT month,\n       SUM(sales) AS total_sales\nFROM sample_sales\nGROUP BY month\nORDER BY month_number;`,
  },
  {
    id: 'category',
    label: 'Which category contributes the most sales?',
    sql: `SELECT category,\n       SUM(sales) AS total_sales,\n       ROUND(100 * SUM(sales) /\n         SUM(SUM(sales)) OVER (), 1) AS pct_of_total\nFROM sample_sales\nGROUP BY category\nORDER BY total_sales DESC;`,
  },
  {
    id: 'change',
    label: 'How did each category change from Jan to Jun?',
    sql: `WITH ends AS (\n  SELECT category,\n    SUM(CASE WHEN month = 'Jan' THEN sales END) AS jan,\n    SUM(CASE WHEN month = 'Jun' THEN sales END) AS jun\n  FROM sample_sales\n  GROUP BY category\n)\nSELECT category, jan, jun,\n       ROUND(100 * (jun - jan) / jan, 1) AS pct_change\nFROM ends;`,
  },
]

const sum = (a: number[]) => a.reduce((x, y) => x + y, 0)

function compute(id: string) {
  if (id === 'monthly') {
    const data = MONTHS.map((m, i) => ({ label: m, value: sum(CATS.map((c) => SALES[c][i])) }))
    const best = data.reduce((a, b) => (b.value > a.value ? b : a))
    const first = data[0], last = data[data.length - 1]
    return {
      cols: ['month', 'total_sales'], table: data.map((d) => [d.label, String(d.value)]), data,
      read: `Total sales in this sample rose from ${first.value} in ${first.label} to ${last.value} in ${last.label}; the highest month is ${best.label} (${best.value}).`,
      check: 'Re-add the three category values for one month by hand and confirm they match the total.',
    }
  }
  if (id === 'category') {
    const tot = CATS.map((c) => ({ label: c, value: sum(SALES[c]) }))
    const grand = sum(tot.map((t) => t.value))
    const sorted = [...tot].sort((a, b) => b.value - a.value)
    return {
      cols: ['category', 'total_sales', 'pct_of_total'],
      table: sorted.map((t) => [t.label, String(t.value), ((100 * t.value) / grand).toFixed(1) + '%']), data: sorted,
      read: `${sorted[0].label} contributes the largest share (${((100 * sorted[0].value) / grand).toFixed(1)}%) of the sample's ${grand} total sales units.`,
      check: 'Percentages should sum to about 100% (rounding aside). Confirm the grand total equals the monthly totals combined.',
    }
  }
  const data = CATS.map((c) => ({ label: c, value: +((100 * (SALES[c][5] - SALES[c][0])) / SALES[c][0]).toFixed(1) }))
  const top = data.reduce((a, b) => (b.value > a.value ? b : a))
  return {
    cols: ['category', 'jan', 'jun', 'pct_change'],
    table: CATS.map((c, i) => [c, String(SALES[c][0]), String(SALES[c][5]), data[i].value + '%']), data,
    read: `${top.label} shows the largest Jan→Jun increase (${top.value}%) in this sample. Two endpoints say nothing about the months in between.`,
    check: 'Endpoint comparisons hide volatility — check the month-by-month series before drawing a trend conclusion.',
  }
}

export default function AiDemo({ theme }: { theme: Theme }) {
  const c = useChartColors(theme)
  const [qid, setQid] = useState(QUESTIONS[0].id)
  const [ran, setRan] = useState(false)
  const q = QUESTIONS.find((x) => x.id === qid)!
  const res = useMemo(() => compute(qid), [qid])
  const unit = qid === 'change' ? '%' : ''

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-bg2 px-5 py-3">
        <h3 className="font-bold">Interactive demo: from business question to validated insight</h3>
        <span className="chip border-teal/50 text-teal">Illustrative sample data · no live AI, no API key</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="space-y-5 p-5 lg:border-r lg:border-line">
          <fieldset>
            <legend className="font-mono text-xs uppercase tracking-widest text-teal">1 · Sample business question</legend>
            <div className="mt-3 space-y-2">
              {QUESTIONS.map((x) => (
                <label key={x.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-brand ${qid === x.id ? 'border-brand bg-brand/10' : 'border-line hover:border-brand/60'}`}>
                  <input type="radio" name="q" className="accent-[rgb(var(--brand))]" checked={qid === x.id} onChange={() => { setQid(x.id); setRan(false) }} />
                  {x.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">2 · Example SQL (hand-written for this demo)</p>
            <pre className="mt-3 overflow-x-auto rounded-xl border border-line bg-bg p-4 font-mono text-xs leading-relaxed text-ink" tabIndex={0} aria-label="Example SQL query"><code>{q.sql}</code></pre>
            <button className="btn-primary mt-3" onClick={() => setRan(true)}><Play className="h-4 w-4" /> Run on sample data</button>
          </div>
          <details className="rounded-xl border border-line text-sm">
            <summary className="cursor-pointer px-3 py-2 font-medium">View sample dataset ({rows.length} rows · illustrative)</summary>
            <div className="max-h-48 overflow-auto px-3 pb-3">
              <table className="w-full text-left text-xs text-mute">
                <thead className="text-ink"><tr><th className="py-1">month</th><th>category</th><th>sales</th></tr></thead>
                <tbody>{rows.map((r, i) => <tr key={i}><td className="py-0.5">{r.month}</td><td>{r.category}</td><td>{r.sales}</td></tr>)}</tbody>
              </table>
            </div>
          </details>
        </div>
        <div className="p-5" aria-live="polite">
          {!ran ? (
            <div className="grid h-full min-h-[240px] place-items-center rounded-xl border border-dashed border-line p-6 text-center text-sm text-mute">
              Choose a question and press “Run on sample data” to see the result table, chart, interpretation and validation note.
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-teal">3 · Result (sample units)</p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-line">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-bg2 font-mono text-xs text-mute"><tr>{res.cols.map((h) => <th key={h} className="px-3 py-2">{h}</th>)}</tr></thead>
                    <tbody>{res.table.map((r, i) => <tr key={i} className="border-t border-line">{r.map((v, j) => <td key={j} className="px-3 py-1.5 font-mono text-xs">{v}</td>)}</tr>)}</tbody>
                  </table>
                </div>
                <div className="mt-3 h-44" role="img" aria-label={`Bar chart of sample results for: ${q.label}`}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={res.data} margin={{ top: 6, right: 6, left: -16, bottom: 0 }}>
                      <CartesianGrid stroke={c.grid} vertical={false} />
                      <XAxis dataKey="label" tick={{ fill: c.text, fontSize: 11 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: c.text, fontSize: 11 }} axisLine={false} tickLine={false} unit={unit} />
                      <Tooltip cursor={{ fill: c.grid, opacity: 0.4 }} contentStyle={{ background: c.tooltipBg, border: `1px solid ${c.grid}`, borderRadius: 8, fontSize: 12 }} />
                      <Bar dataKey="value" fill={c.blue} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="rounded-xl bg-brand/10 p-4 text-sm">
                <p className="font-mono text-xs uppercase tracking-widest text-brand">4 · Business interpretation</p>
                <p className="mt-1.5">{res.read}</p>
              </div>
              <div className="rounded-xl border border-teal/40 bg-teal/10 p-4 text-sm">
                <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-teal"><ShieldCheck className="h-3.5 w-3.5" /> 5 · Validation note</p>
                <p className="mt-1.5">{res.check} AI-suggested SQL should always be tested against known totals before its output is trusted.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
