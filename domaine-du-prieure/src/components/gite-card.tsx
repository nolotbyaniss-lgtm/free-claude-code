import Link from 'next/link'
import Image from 'next/image'
import { Users, Maximize, BedDouble, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import type { Gite } from '@/types'

export function GiteCard({ gite }: { gite: Gite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <Image
          src={gite.photo}
          alt={gite.nom}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-neutral-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-50 backdrop-blur">
          Depuis {gite.annee}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl text-neutral-900">{gite.nom}</h3>
        <p className="mt-1 text-sm text-sage-600">{gite.sousTitre}</p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4 text-primary-500" />
            {gite.capacite} pers.
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

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-neutral-600">
          {gite.description}
        </p>

        <Link
          href={`/les-gites#${gite.slug}`}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'md' }),
            'mt-6 w-full'
          )}
        >
          Découvrir
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
