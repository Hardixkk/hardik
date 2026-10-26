import type { ReactNode } from 'react'

export default function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <header className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="mt-3 text-mute">{sub}</p>}
    </header>
  )
}
