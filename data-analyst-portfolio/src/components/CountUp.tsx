import { useEffect, useRef, useState } from 'react'

/** Animates the numeric part of a displayed figure (e.g. "435.8M", "12.05%", "38,576"). Falls back to static text. */
export default function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const m = value.match(/^([\d,]*\.?\d+)(.*)$/)
  const [text, setText] = useState(value)
  const raf = useRef(0)

  useEffect(() => {
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(value); return }
    const target = parseFloat(m[1].replace(/,/g, ''))
    const decimals = (m[1].split('.')[1] || '').length
    const comma = m[1].includes(',')
    const suffix = m[2]
    const start = performance.now()
    const fmt = (n: number) => {
      const s = n.toFixed(decimals)
      return comma ? Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : s
    }
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - k, 3)
      setText(fmt(target * eased) + suffix)
      if (k < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <span aria-label={value}>{text}</span>
}
