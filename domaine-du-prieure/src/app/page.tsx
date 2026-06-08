import Image from 'next/image'
import Link from 'next/link'
import { contact } from '@/data/mock'
import { Hero } from '@/components/home/hero'
import { MarqueeStrip } from '@/components/home/marquee'
import { GitesShowcase } from '@/components/home/gites-showcase'
import { AmenitiesBento } from '@/components/home/amenities-bento'
import { GalleryPan } from '@/components/home/gallery-pan'
import { ParallaxGallery } from '@/components/home/parallax-gallery'
import { ReassuranceBand } from '@/components/home/reassurance-band'
import { Reviews } from '@/components/home/reviews'
import VisiteEmbed from '@/components/visite/visite-embed'
import { photos } from '@/data/images'

export default function Home() {
  return (
    <>
      {/* 1 — Hero 3D plein écran */}
      <Hero />

      {/* 2 — Marquee */}
      <MarqueeStrip />

      {/* 2b — Réassurance */}
      <ReassuranceBand />

      {/* 3 — Intro éditoriale */}
      <section className="relative bg-ink-900 py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[560px]">
            <Image
              src={photos.interieur}
              alt="Domaine du Prieuré"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-950/30 to-transparent" />
          </div>
          <div>
            <h2 className="font-display text-5xl leading-tight text-ink-50 md:text-6xl">
              Un hameau,<br />
              <em className="text-forest-400 not-italic">deux demeures,</em><br />
              mille histoires
            </h2>
            <p className="mt-6 leading-relaxed text-ink-300">
              Au creux du hameau de Grèzes, le Domaine du Prieuré réunit le
              Couvent de la Sainte-Famille (1877) et un presbytère médiéval
              (1460). Sabrina et Benoît vous y accueillent dans un écrin de
              800 m² mêlant pierre dorée, jardin et piscine.
            </p>
            <p className="mt-4 text-sm text-forest-400">
              Démarche éco-responsable depuis plus de 20 ans
            </p>
            <Link
              href="/histoire"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-200 transition-colors hover:text-ink-50"
            >
              Lire notre histoire <span className="text-forest-500">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Visite 3D teaser */}
      <section className="bg-ink-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl text-ink-50 md:text-5xl">
              Visitez le domaine<br />en 3D
            </h2>
            <Link
              href="/visite"
              className="inline-flex items-center gap-2 rounded-full border border-forest-700 px-6 py-3 text-sm font-medium text-forest-300 transition-all hover:bg-forest-700/30 hover:text-forest-100 whitespace-nowrap"
            >
              Plein écran
            </Link>
          </div>
          <VisiteEmbed compact />
        </div>
      </section>

      {/* 5 — Gîtes (sticky showcase) */}
      <GitesShowcase />

      {/* 6 — Équipements bento */}
      <AmenitiesBento />

      {/* 6b — Galerie parallaxe 3D (tilt au curseur) */}
      <ParallaxGallery />

      {/* 7 — Galerie horizontale (GSAP pan) */}
      <GalleryPan />

      {/* 8 — Avis */}
      <Reviews />

      {/* 8 — CTA contact */}
      <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={photos.domaine}
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h2 className="font-display text-5xl text-ink-50 md:text-6xl">
            Réservez votre parenthèse
          </h2>
          <p className="mt-5 text-ink-300">{contact.lieu} · {contact.distanceCentre}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${contact.telephoneRaw}`}
              className="inline-flex items-center rounded-full bg-forest-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-forest-500 active:scale-[0.98]"
            >
              {contact.telephone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-ink-600 bg-ink-900/60 px-8 py-4 text-base font-medium text-ink-100 backdrop-blur transition-all hover:border-ink-400 hover:text-ink-50"
            >
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
