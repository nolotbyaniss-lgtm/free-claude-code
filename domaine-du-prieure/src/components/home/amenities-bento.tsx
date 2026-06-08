'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { photos } from '@/data/images'

const cells = [
  {
    id: 'piscine',
    title: 'Piscine',
    sub: 'Plein sud, à partager en famille',
    img: photos.piscine,
    span: 'md:col-span-2 md:row-span-2',
    dark: false,
  },
  {
    id: 'jardin',
    title: '800 m²',
    sub: 'de jardin',
    img: null,
    stat: true,
    span: '',
    dark: true,
  },
  {
    id: 'eco',
    title: 'Éco depuis 20 ans',
    sub: 'Sans produit chimique',
    img: photos.domaine,
    span: '',
    dark: false,
  },
  {
    id: 'velos',
    title: 'Vélos offerts',
    sub: 'Tous gabarits + casques',
    img: null,
    stat: false,
    span: '',
    dark: true,
  },
  {
    id: 'petanque',
    title: 'Pétanque',
    sub: 'Terrain ombragé',
    img: null,
    stat: false,
    span: '',
    dark: true,
  },
  {
    id: 'bbq',
    title: 'Barbecue & Terrasse',
    sub: 'Soirées étoilées en Occitanie',
    img: photos.interieur,
    span: 'md:col-span-2',
    dark: false,
  },
]

export function AmenitiesBento() {
  return (
    <section className="bg-ink-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl text-ink-50 md:text-5xl">
            Le domaine, à votre disposition
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-300">
            Tout ce qu&apos;il faut pour un séjour parfait, nichés dans 800 m² de jardin occitan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">
          {cells.map((cell, i) => (
            <motion.div
              key={cell.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl ${cell.span} ${
                cell.dark ? 'bg-ink-950 border border-ink-700' : 'bg-ink-900'
              } min-h-[180px]`}
            >
              {cell.img && (
                <Image
                  src={cell.img}
                  alt={cell.title}
                  fill
                  className="object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {/* overlay */}
              {cell.img && (
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
              )}

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                {cell.stat ? (
                  <p className="font-display text-5xl text-forest-400 md:text-6xl">{cell.title}</p>
                ) : (
                  <p className="font-display text-2xl text-ink-50">{cell.title}</p>
                )}
                <p className="mt-1 text-sm text-ink-300">{cell.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
