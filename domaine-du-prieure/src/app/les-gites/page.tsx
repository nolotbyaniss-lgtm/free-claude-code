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
            'scroll-mt-20 py-16 sm:py-20',
            index % 2 === 1 && 'bg-secondary-50'
          )}
        >
          <div
            className={cn(
              'mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2',
              index % 2 === 1 && 'md:[&>div:first-child]:order-2'
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-lg">
              <Image
                src={gite.photo}
                alt={gite.nom}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-50 backdrop-blur">
                Depuis {gite.annee}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-sage-600">
                {gite.sousTitre}
              </p>
              <h2 className="mt-2 font-display text-4xl text-neutral-900">
                {gite.nom}
              </h2>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary-500" />
                  {gite.capacite} voyageurs
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BedDouble className="h-4 w-4 text-primary-500" />
                  {gite.chambres} chambres
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Maximize className="h-4 w-4 text-primary-500" />
                  {gite.surface}
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-neutral-600">
                {gite.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {gite.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-500" />
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

      <section className="bg-neutral-900 py-16 text-center text-neutral-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl">Une question sur les gîtes ?</h2>
          <p className="mt-3 text-neutral-300">
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
