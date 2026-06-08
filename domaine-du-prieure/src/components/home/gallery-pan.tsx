'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import { photos } from '@/data/images'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  {
    img: photos.couvent,
    kicker: 'La pierre',
    title: 'Voutes et pierres d\'epoque',
    body: 'Les murs portent six siecles. Chaque piece garde la fraicheur de la pierre taille.',
  },
  {
    img: photos.piscine,
    kicker: 'L\'ete',
    title: 'La piscine plein sud',
    body: 'Un bassin pour les longues journees d\'Occitanie, ouvert sur le jardin et les collines.',
  },
  {
    img: photos.domaine,
    kicker: 'Le jardin',
    title: '800 m2 de verdure',
    body: 'Oliviers, lavande et coins d\'ombre. Sans produit chimique depuis vingt ans.',
  },
  {
    img: photos.presbytere,
    kicker: 'L\'histoire',
    title: 'Le Presbytere medieval',
    body: 'Date de 1460. Chaque pierre raconte l\'histoire de l\'Occitanie medievale.',
  },
  {
    img: photos.interieur,
    kicker: 'L\'interieur',
    title: 'Volumes et lumiere',
    body: 'Plafonds hauts, cuisine equipee, confort contemporain dans un ecrin ancien.',
  },
]

export function GalleryPan() {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth
      gsap.to(track.current, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, wrap)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section className="relative bg-ink-950">
      {/* Section intro */}
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-10 sm:px-8">
        <h2 className="font-display text-4xl leading-tight text-ink-50 md:text-6xl">
          Cinq raisons de<br />
          <em className="not-italic text-forest-400">poser ses valises</em>
        </h2>
      </div>

      {/* Reduced-motion fallback: simple scroll-snap row */}
      {reduce ? (
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-24 sm:px-8">
          {slides.map((s) => (
            <GalleryCard key={s.title} slide={s} />
          ))}
        </div>
      ) : (
        <div ref={wrap} className="relative overflow-hidden">
          <div ref={track} className="flex h-[100dvh] items-center gap-6 px-6 sm:px-10">
            {slides.map((s) => (
              <GalleryCard key={s.title} slide={s} />
            ))}
            <div className="flex h-full w-[20vw] flex-shrink-0 items-center">
              <p className="font-display text-2xl italic text-ink-500">
                ... et bien plus.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function GalleryCard({ slide }: { slide: (typeof slides)[number] }) {
  return (
    <article className="relative h-[68vh] w-[78vw] flex-shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[46vw] lg:w-[32vw]">
      <Image
        src={slide.img}
        alt={slide.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 78vw, 32vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="text-xs uppercase tracking-[0.25em] text-forest-300">
          {slide.kicker}
        </p>
        <h3 className="mt-2 font-display text-3xl leading-tight text-ink-50">
          {slide.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-200">
          {slide.body}
        </p>
      </div>
    </article>
  )
}
