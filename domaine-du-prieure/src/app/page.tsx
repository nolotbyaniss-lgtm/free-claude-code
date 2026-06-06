import Link from 'next/link'
import { ArrowRight, Box, Leaf, MapPin, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ReviewStars } from '@/components/ui/review-stars'
import { GiteCard } from '@/components/gite-card'
import { AmenityIcon } from '@/components/amenity-icon'
import VisiteEmbed from '@/components/visite/visite-embed'
import { gites, amenities, avis, contact } from '@/data/mock'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-secondary-100 to-primary-100" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #2a2520 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
          <p className="animate-fade-up inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-primary-700">
            <MapPin className="h-4 w-4" />
            {contact.region}
          </p>
          <h1 className="animate-fade-up mt-5 font-display text-5xl leading-[1.05] text-neutral-900 sm:text-6xl md:text-7xl">
            Le temps suspendu,
            <br />
            <span className="italic text-primary-600">pierre après pierre.</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
            Deux gîtes de caractère dans un ancien couvent et un presbytère
            séculaire, à dix minutes de la Cité de Carcassonne.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/les-gites"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
            >
              Découvrir les gîtes
            </Link>
            <Link
              href="/visite"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              <Box className="h-5 w-5" />
              Visite 3D
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / histoire courte */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-sage-600">
              Le Domaine
            </p>
            <h2 className="mt-3 font-display text-4xl text-neutral-900">
              Un hameau, deux demeures, mille histoires
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
              Au creux du hameau de Grèzes, le Domaine du Prieuré réunit le
              Couvent de la Sainte-Famille (1877) et un presbytère médiéval
              (1460). Sabrina et Benoît vous y accueillent dans un écrin de
              800 m² mêlant pierre dorée, jardin et piscine.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sage-600">
              <Leaf className="h-4 w-4" />
              Démarche éco-responsable engagée depuis plus de 20 ans
            </p>
            <Link
              href="/histoire"
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-primary-600 transition-colors hover:text-primary-700"
            >
              Lire notre histoire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: 'Fondé en', v: '1460' },
              { k: 'Gîtes', v: '2' },
              { k: 'Capacité', v: '13 pers.' },
              { k: 'De Carcassonne', v: '10 min' },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm"
              >
                <p className="font-display text-3xl text-primary-600">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les gîtes */}
      <section className="bg-secondary-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl text-neutral-900">
              Nos deux gîtes
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-600">
              Chacun son âme, chacun son siècle. Choisissez votre refuge audois.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {gites.map((gite) => (
              <GiteCard key={gite.id} gite={gite} />
            ))}
          </div>
        </div>
      </section>

      {/* Visite 3D (teaser interactif) */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-sage-600">
              <Box className="h-4 w-4" />
              Visite immersive
            </p>
            <h2 className="mt-3 font-display text-4xl text-neutral-900">
              Promenez-vous dans le domaine
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-600">
              Glissez pour explorer, ou laissez-vous guider d&apos;un point
              d&apos;intérêt à l&apos;autre.
            </p>
          </div>
          <VisiteEmbed compact />
        </div>
      </section>

      {/* Équipements */}
      <section className="bg-sage-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl text-neutral-900">
              Tout pour un séjour parfait
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <AmenityIcon
                  name={a.icon}
                  className="h-9 w-9 text-primary-500"
                />
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

      {/* Avis */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1 text-primary-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary-500" />
              ))}
            </div>
            <h2 className="mt-4 font-display text-4xl text-neutral-900">
              Ils ont séjourné chez nous
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {avis.map((a) => (
              <figure
                key={a.id}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
              >
                <ReviewStars note={a.note} />
                <blockquote className="mt-4 flex-1 italic leading-relaxed text-neutral-600">
                  “{a.texte}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-medium text-neutral-900">{a.auteur}</p>
                  <p className="text-xs text-sage-600">via {a.provenance}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-neutral-900 py-20 text-center text-neutral-50 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-4xl">Réservez votre parenthèse</h2>
          <p className="mt-4 text-neutral-300">
            {contact.lieu} · {contact.distanceCentre}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${contact.telephoneRaw}`}
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
            >
              {contact.telephone}
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'lg' })
              )}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
