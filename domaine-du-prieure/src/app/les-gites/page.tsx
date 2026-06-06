import type { Metadata } from 'next'
import Image from 'next/image'
import { Users, Maximize, BedDouble, Check, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { gites, contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Les Gîtes',
  description:
    'Le Couvent (1877, 8 personnes) et Le Presbytère (1460, 5 personnes) : deux gîtes de charme entièrement rénovés près de Carcassonne.',
}

const photos: Record<string, string> = {
  'le-couvent': 'https://picsum.photos/seed/couvent-stone-1877/1200/900?grayscale',
  'le-presbytere': 'https://picsum.photos/seed/presbytere-medieval-1460/1200/900?grayscale',
}

export default function LesGitesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hébergements"
        titre="Deux gîtes, deux époques"
        intro="Le Couvent et Le Presbytère partagent le même jardin mais offrent chacun une atmosphère singulière. Pierres anciennes, confort d'aujourd'hui."
      />

      {gites.map((gite, index) => (
        <section
          key={gite.id}
          id={gite.slug}
          className={cn(
            'scroll-mt-20 py-16 sm:py-24',
            index % 2 === 1 ? 'bg-ink-900' : 'bg-ink-950'
          )}
        >
          <div
            className={cn(
              'mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2',
              index % 2 === 1 && 'md:[&>div:first-child]:order-2'
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-800">
              <Image
                src={photos[gite.slug] ?? 'https://picsum.photos/seed/estate/1200/900?grayscale'}
                alt={gite.nom}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-100 backdrop-blur">
                Depuis {gite.annee}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-forest-400">
                {gite.sousTitre}
              </p>
              <h2 className="mt-2 font-display text-4xl text-ink-50 md:text-5xl">
                {gite.nom}
              </h2>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-forest-400" />
                  {gite.capacite} voyageurs
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-forest-400" />
                  {gite.chambres} chambres
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Maximize className="h-4 w-4 text-forest-400" />
                  {gite.surface}
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-ink-300">
                {gite.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {gite.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-ink-200"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-400" />
                    <span>{h.replace(/\*\*/g, '')}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${contact.telephoneRaw}`}
                className={cn(
                  buttonVariants({ variant: 'primary', size: 'md' }),
                  'mt-8'
                )}
              >
                <Phone className="h-4 w-4" />
                Réserver ce gîte
              </a>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-ink-800 bg-ink-950 py-20 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl text-ink-50 md:text-4xl">
            Une question sur les gîtes ?
          </h2>
          <p className="mt-3 text-ink-300">
            Sabrina &amp; Benoît vous répondent avec plaisir.
          </p>
          <a
            href={`tel:${contact.telephoneRaw}`}
            className={cn(
              buttonVariants({ variant: 'primary', size: 'lg' }),
              'mt-6'
            )}
          >
            {contact.telephone}
          </a>
        </div>
      </section>
    </>
  )
}
