import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import type { Theme } from './useTheme'
import { profile } from '../data/profile'

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai-analytics', label: 'AI Analytics' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const y = window.scrollY + 120
      let current = NAV[0].id
      for (const n of NAV) {
        const el = document.getElementById(n.id)
        if (el && el.offsetTop <= y) current = n.id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = NAV[NAV.length - 1].id
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = (id: string, label: string, mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'true' : undefined}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
        active === id ? 'bg-brand/15 text-brand' : 'text-mute hover:text-ink'
      } ${mobile ? 'block' : ''}`}
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-line bg-bg/90 backdrop-blur' : ''}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/15 text-brand">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="7" width="4" height="14" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" />
            </svg>
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">Hardik</span>
        </a>
        <div className="hidden items-center gap-0.5 xl:flex">{NAV.map((n) => link(n.id, n.label))}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-mute transition hover:border-brand hover:text-brand"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-mute xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-4 pt-2 xl:hidden">
          {NAV.map((n) => link(n.id, n.label, true))}
        </div>
      )}
    </header>
  )
}
