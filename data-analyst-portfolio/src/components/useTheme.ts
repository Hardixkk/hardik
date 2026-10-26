import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B1220' : '#F8FAFC')
  }, [theme])
  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}

export function useChartColors(theme: Theme) {
  return theme === 'dark'
    ? { blue: '#3B82F6', teal: '#14B8A6', grid: '#26364F', text: '#94A3B8', amber: '#F59E0B', tooltipBg: '#111C30' }
    : { blue: '#2563EB', teal: '#0D9488', grid: '#D6DEEA', text: '#475569', amber: '#D97706', tooltipBg: '#FFFFFF' }
}
