import Link from 'next/link'
import { Heart, Tag, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ReviewStars } from '@/components/ui/review-stars'
import { ProductCard } from '@/components/product-card'
import { mockProducts, mockAvis } from '@/data/mock'

const valeurs = [
  {
    icon: Heart,
    titre: 'Chaque pièce a une histoire',
    description:
      'Sélectionnées à la main, nos fringues vintage ont du caractère. Pas du fast fashion.',
  },
  {
    icon: Tag,
    titre: 'Prix accessibles',
    description: 'Mode durable qui ne vide pas ton portefeuille.',
  },
  {
    icon: MapPin,
    titre: 'Au cœur de Castelnaudary',
    description:
      "Viens nous rendre visite, on t'accueille comme à la maison.",
  },
]

export default function Home() {
  const nouveautes = mockProducts.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 via-secondary-100 to-secondary-200">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <p className="text-sm uppercase tracking-widest text-primary-600">
            Friperie · Castelnaudary
          </p>
          <h1 className="mt-4 font-display text-5xl text-neutral-900 md:text-6xl">
            Vintage. Unique. À toi.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Découvre notre sélection de pièces rares et tendances à
            Castelnaudary.
          </p>
          <Link
            href="/boutique"
            className={cn(
              buttonVariants({ variant: 'primary', size: 'lg' }),
              'mt-8'
            )}
          >
            Voir la boutique
          </Link>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl text-neutral-900">
              Nos arrivages du moment
            </h2>
            <p className="mt-3 text-neutral-600">
              Les dernières pépites dénichées rien que pour toi.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {nouveautes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/boutique"
              className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}
            >
              Voir tout le catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-secondary-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valeurs.map(({ icon: Icon, titre, description }) => (
              <div key={titre} className="flex flex-col items-center text-center">
                <Icon className="h-10 w-10 text-primary-500" />
                <h3 className="mt-4 font-display text-xl text-neutral-900">
                  {titre}
                </h3>
                <p className="mt-2 text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl text-neutral-900">
            Ce qu'elles en disent
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {mockAvis.map((avis) => (
              <figure
                key={avis.id}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <ReviewStars note={avis.note} />
                <blockquote className="mt-4 italic text-neutral-600">
                  “{avis.texte}”
                </blockquote>
                <figcaption className="mt-4 font-medium text-neutral-900">
                  {avis.auteur}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-primary-500 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-3xl">Viens fouiner chez Lili</h2>
          <p className="mt-4 text-white/90">
            9 Place de Verdun, 11400 Castelnaudary · Ouvert jusqu'à 19:00
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'lg' }),
              'mt-8'
            )}
          >
            Nous trouver
          </Link>
        </div>
      </section>
    </>
  )
}
