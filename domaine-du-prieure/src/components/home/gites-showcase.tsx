'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { gites } from '@/data/mock'

const photos: Record<string, string> = {
  'le-couvent':    'https://picsum.photos/seed/couvent-stone-1877/1400/900',
  'le-presbytere': 'https://picsum.photos/seed/presbytere-medieval-1460/1400/900',
}

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

export function GitesShowcase() {
  return (
    <section className="bg-ink-950">
      {gites.map((gite, i) => {
        const isEven = i % 2 === 0
        return (
          /* Each gite: sticky full-viewport dwell section */
          <div
            key={gite.id}
            className="relative min-h-[160dvh]"
          >
            <div className={`sticky top-0 min-h-[100dvh] overflow-hidden grid grid-cols-1 md:grid-cols-2 ${isEven ? 'bg-ink-950' : 'bg-ink-900'}`}>
              {/* Photo */}
              <div className={`relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'} h-64 md:h-auto`}>
                <Image
                  src={photos[gite.slug] ?? 'https://picsum.photos/seed/estate-occitanie/1400/900'}
                  alt={gite.nom}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
                {/* Year badge */}
                <div className="absolute bottom-6 right-6 rounded-2xl bg-ink-950/70 px-5 py-3 backdrop-blur border border-white/10">
                  <p className="font-display text-4xl text-ink-50">{gite.annee}</p>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center px-8 py-14 md:px-16 ${isEven ? 'md:order-2' : 'md:order-1'}`}
              >
                <motion.div {...reveal}>
                  <p className="text-xs uppercase tracking-[0.25em] text-forest-400">
                    {gite.sousTitre}
                  </p>
                  <h2 className="mt-4 font-display text-5xl leading-tight text-ink-50 md:text-6xl">
                    {gite.nom}
                  </h2>
                  <p className="mt-6 leading-relaxed text-ink-300 max-w-sm">
                    {gite.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-8 grid grid-cols-2 gap-3">
                    {gite.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-forest-500" />
                        <span className="text-sm text-ink-200">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta grid */}
                  <div className="mt-8 flex gap-8 border-t border-ink-700 pt-6">
                    {[
                      { v: `${gite.capacite} pers.`, k: 'Capacité' },
                      { v: gite.surface, k: 'Surface' },
                      { v: `${gite.chambres} ch.`, k: 'Chambres' },
                    ].map((s) => (
                      <div key={s.k} className="flex flex-col">
                        <span className="font-display text-2xl text-forest-400">{s.v}</span>
                        <span className="text-xs uppercase tracking-[0.15em] text-ink-400">{s.k}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/les-gites#${gite.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-forest-700 px-6 py-3 text-sm font-medium text-forest-300 transition-all hover:bg-forest-700/30 hover:text-forest-100 active:scale-[0.98]"
                  >
                    Voir {gite.nom}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
