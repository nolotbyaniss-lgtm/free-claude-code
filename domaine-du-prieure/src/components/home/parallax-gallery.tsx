'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { photos } from '@/data/images'

type Card = {
  img: string
  kicker: string
  title: string
  meta: string
}

const cards: Card[] = [
  {
    img: photos.couvent,
    kicker: 'Le Couvent',
    title: 'Sainte-Famille, 1877',
    meta: '8 voyageurs · 4 chambres',
  },
  {
    img: photos.presbytere,
    kicker: 'Le Presbytere',
    title: 'Demeure medievale, 1460',
    meta: '5 voyageurs · 3 chambres',
  },
  {
    img: photos.piscine,
    kicker: 'La piscine',
    title: 'Bassin plein sud',
    meta: 'Ouvert sur le jardin',
  },
  {
    img: photos.interieur,
    kicker: 'L\'interieur',
    title: 'Pierre et lumiere',
    meta: 'Volumes contemporains',
  },
  {
    img: photos.domaine,
    kicker: 'Le domaine',
    title: '800 m2 de jardin',
    meta: 'Vue sur les collines',
  },
]

export function ParallaxGallery() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      {/* Ambient forest glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-forest-800/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-forest-400">
            <span className="h-px w-8 bg-forest-600" />
            Au plus pres
          </p>
          <h2 className="font-display text-4xl leading-[1.05] text-ink-50 md:text-6xl">
            Survolez chaque lieu,<br />
            <em className="not-italic text-forest-400">la pierre prend du relief</em>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink-300">
            Passez le curseur sur les visuels du domaine. Chaque image bascule
            en profondeur pour reveler la matiere, comme une visite avant la
            visite.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <TiltCard key={card.title} card={card} priority={i < 2} />
          ))}

          {/* Closing CTA tile, shares the grid rhythm */}
          <Link
            href="/visite"
            className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-ink-700 bg-ink-900 p-7 transition-colors hover:border-forest-700"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-forest-400">
              Visite 3D
            </span>
            <span className="font-display text-3xl leading-tight text-ink-50">
              Entrez dans le domaine en immersion
              <span className="mt-4 block text-base text-forest-300 transition-transform group-hover:translate-x-1">
                Lancer la visite &#8594;
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TiltCard({ card, priority }: { card: Card; priority: boolean }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  // Pointer position, normalised to -0.5..0.5 around the card centre.
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const spring = { stiffness: 150, damping: 18, mass: 0.4 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), spring)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), spring)

  // Depth layers move opposite the tilt for parallax separation.
  const imgX = useSpring(useTransform(px, [-0.5, 0.5], [18, -18]), spring)
  const imgY = useSpring(useTransform(py, [-0.5, 0.5], [18, -18]), spring)
  const capX = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), spring)
  const glowX = useTransform(px, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(py, [-0.5, 0.5], ['0%', '100%'])
  const sheen = useTransform(
    [glowX, glowY],
    ([cx, cy]) =>
      `radial-gradient(420px circle at ${cx} ${cy}, rgba(106,170,120,0.18), transparent 60%)`,
  )

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative min-h-[300px] [transform-style:preserve-3d]"
    >
      <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-ink-700 bg-ink-900">
        {/* Image layer — floats above the card plane */}
        <motion.div
          className="absolute inset-0 scale-110"
          style={reduce ? undefined : { x: imgX, y: imgY }}
        >
          <Image
            src={card.img}
            alt={card.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </motion.div>

        {/* Cursor-follow sheen */}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: sheen }}
          />
        )}

        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

        {/* Caption — sits closest to the viewer */}
        <motion.div
          className="absolute inset-x-0 bottom-0 p-6"
          style={reduce ? undefined : { x: capX, translateZ: 40 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-forest-300">
            {card.kicker}
          </p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-ink-50">
            {card.title}
          </h3>
          <p className="mt-1 text-sm text-ink-300">{card.meta}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
