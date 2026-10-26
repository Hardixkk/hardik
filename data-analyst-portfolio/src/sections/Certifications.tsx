import { useState } from 'react'
import { Award, ExternalLink, ZoomIn } from 'lucide-react'
import { certifications, type Certification } from '../data/profile'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Modal from '../components/Modal'

export default function Certifications() {
  const [open, setOpen] = useState<Certification | null>(null)
  return (
    <section id="certifications" className="section">
      <SectionHeading eyebrow="07 · Certifications" title="Certifications" />
      {certifications.length === 0 ? (
        <div className="card mt-10 max-w-2xl border-dashed p-6 text-sm text-mute">
          <Award className="mb-3 h-6 w-6 text-teal" />
          <p className="font-semibold text-ink">Certificates will be listed here.</p>
          <p className="mt-1">Only verified certifications are shown. Add them in <code className="font-mono text-xs">src/data/profile.ts</code> (<code className="font-mono text-xs">certifications</code>).</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title + i} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl hover:shadow-brand/10">
                {c.image && (
                  <button onClick={() => setOpen(c)} aria-label={`Enlarge certificate: ${c.title}`} className="relative block overflow-hidden bg-white">
                    <img src={c.image} alt={`Certificate of completion: ${c.title}, ${c.issuer}`} loading="lazy" className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"><ZoomIn className="h-3.5 w-3.5" /> Enlarge</span>
                  </button>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow">Certificate of Completion</p>
                  <h3 className="mt-1 text-xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-mute">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
                  {c.tasks && c.tasks.length > 0 && (
                    <>
                      <p className="mt-4 text-xs text-mute">Practical tasks completed in:</p>
                      <ul className="mt-2 flex flex-wrap gap-2">{c.tasks.map((t) => <li key={t} className="chip text-ink">{t}</li>)}</ul>
                    </>
                  )}
                  {c.link && <a className="btn-ghost mt-auto self-start !mt-5" href={c.link} target="_blank" rel="noopener noreferrer">View certificate <ExternalLink className="h-4 w-4" /></a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
      {open?.image && (
        <Modal title={`Certificate: ${open.title}`} onClose={() => setOpen(null)}>
          <img src={open.image} alt={`Certificate of completion: ${open.title}, ${open.issuer}`} className="w-full bg-white" />
        </Modal>
      )}
    </section>
  )
}
