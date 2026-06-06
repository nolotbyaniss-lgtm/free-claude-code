import type { Metadata } from 'next'
import Link from 'next/link'
import { Leaf, MapPin, Box, Car, Plane, Train } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { AmenityIcon } from '@/components/amenity-icon'
import { amenities, contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Le Domaine',
  description:
    'Piscine, jardin de 800 m², vélos offerts, pétanque et démarche éco-responsable. Le Domaine du Prieuré à 10 minutes de Carcassonne.',
}

const acces = [
  { icon: Car, label: 'Carcassonne centre', value: '10 min en voiture' },
  { icon: Plane, label: 'Aéroport de Carcassonne', value: '15 min' },
  { icon: Train, label: 'Gare de Carcassonne', value: '12 min' },
]

export default function LeDomainePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'art de vivre"
        titre="Le Domaine"
        intro="Un jardin de 800 m² baigné de soleil, entre pierre dorée et oliviers, pensé pour la détente en famille ou entre amis."
      />

      {/* Équipements */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl text-neutral-900">
            Équipements &amp; loisirs
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <AmenityIcon name={a.icon} className="h-9 w-9 text-primary-500" />
                <h3 className="mt-4 font-display text-xl text-neutral-900">
                  {a.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Éco-responsable */}
      <section className="bg-sage-100 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sage-700">
              <Leaf className="h-4 w-4" />
              Notre engagement
            </p>
            <h2 className="mt-3 font-display text-4xl text-neutral-900">
              Un domaine éco-responsable depuis 20 ans
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-700">
              Bien avant que cela ne devienne courant, le Domaine du Prieuré a
              choisi une gestion respectueuse de son environnement : économies
              d&apos;eau et d&apos;énergie, matériaux durables lors des
              rénovations, jardin entretenu sans produits chimiques. Le luxe du
              calme, sans empreinte superflue.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '800 m²', k: 'de jardin' },
              { v: '20 ans', k: "d'éco-gestion" },
              { v: '0', k: 'produit chimique' },
              { v: '∞', k: 'vélos & balades' },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-sage-200 bg-neutral-50 p-6 text-center shadow-sm"
              >
                <p className="font-display text-3xl text-sage-600">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accès / situation */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sage-600">
              <MapPin className="h-4 w-4" />
              Situation
            </p>
            <h2 className="mt-3 font-display text-3xl text-neutral-900">
              {contact.lieu}
            </h2>
            <p className="mt-3 text-neutral-600">
              Aux portes de la Cité médiévale, au calme de la campagne audoise.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {acces.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm"
              >
                <Icon className="h-8 w-8 text-primary-500" />
                <p className="mt-3 font-medium text-neutral-900">{label}</p>
                <p className="text-sm text-neutral-600">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl bg-secondary-50 p-8 text-center sm:flex-row">
            <p className="font-display text-xl text-neutral-900">
              Envie de voir le domaine avant de venir ?
            </p>
            <Link
              href="/visite"
              className={cn(buttonVariants({ variant: 'primary', size: 'md' }))}
            >
              <Box className="h-4 w-4" />
              Lancer la visite 3D
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
