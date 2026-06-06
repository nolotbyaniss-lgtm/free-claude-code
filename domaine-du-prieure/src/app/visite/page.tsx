import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import VisiteEmbed from '@/components/visite/visite-embed'
import { hotspots } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Visite 3D du domaine',
  description:
    'Explorez le Domaine du Prieuré en 3D : le Couvent, le Presbytère, la piscine et le jardin, depuis votre navigateur.',
}

export default function VisitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Visite immersive"
        titre="Explorez le domaine en 3D"
        intro="Faites glisser pour pivoter autour des bâtisses, ou laissez-vous guider d'un point d'intérêt à l'autre par des transitions fluides."
      />

      <section className="bg-ink-950 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <VisiteEmbed />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hotspots.map((h) => (
              <div
                key={h.id}
                className="rounded-2xl border border-ink-700 bg-ink-900 p-5 transition-colors hover:border-forest-700"
              >
                <h2 className="font-display text-lg text-forest-300">
                  {h.titre}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {h.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-400">
            Maquette 3D illustrative du domaine. Les volumes et l&apos;agencement
            sont schématiques.
          </p>
        </div>
      </section>
    </>
  )
}
