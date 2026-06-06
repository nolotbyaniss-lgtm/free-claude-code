'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroEmbed from '@/components/visite/hero-embed'
import { contact } from '@/data/mock'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink-950">
      {/* 3D canvas — full background */}
      <div className="absolute inset-0">
        <HeroEmbed />
      </div>

      {/* Gradient overlays for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-transparent" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Hero content — lower left */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 md:px-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0.15)}
            className="mb-5 text-xs uppercase tracking-[0.28em] text-forest-400"
          >
            {contact.region}
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="font-display text-[clamp(52px,8vw,120px)] leading-[0.92] tracking-tight text-ink-50"
          >
            Domaine
            <br />
            <em className="text-forest-400 not-italic">du Prieuré</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            Deux gîtes d&apos;exception dans un presbytère médiéval et un
            couvent, à dix minutes de la Cité de Carcassonne.
          </motion.p>

          <motion.div
            {...fadeUp(0.68)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/les-gites"
              className="inline-flex items-center rounded-full bg-forest-600 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-forest-500 active:scale-[0.98]"
            >
              Découvrir les gîtes
            </Link>
            <Link
              href="/visite"
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/50 px-7 py-3.5 text-sm font-medium text-ink-100 backdrop-blur transition-all hover:border-ink-400 hover:text-ink-50 active:scale-[0.98]"
            >
              Visite 3D interactive
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-4"
        >
          {[
            { v: '1460', k: 'Presbytère' },
            { v: '1877', k: 'Couvent' },
            { v: '13 pers.', k: 'Capacité totale' },
            { v: '10 min', k: 'Carcassonne' },
          ].map((s) => (
            <div key={s.k} className="flex flex-col">
              <span className="font-display text-2xl text-ink-50">{s.v}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-ink-400">{s.k}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
