import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

// Stack so that only the top-most modal reacts to Escape / Tab.
const stack: symbol[] = []

export default function Modal({ title, onClose, children, wide = false }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const id = Symbol('modal')
    stack.push(id)
    const prev = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (stack[stack.length - 1] !== id) return
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !ref.current) return
      const f = ref.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      stack.splice(stack.indexOf(id), 1)
      document.body.style.overflow = prevOverflow
      prev?.focus?.()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} role="dialog" aria-modal="true" aria-label={title} className={`card relative max-h-[92vh] w-full overflow-y-auto ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}>
        <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border border-line bg-bg/80 text-ink hover:border-brand">
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  )
}
