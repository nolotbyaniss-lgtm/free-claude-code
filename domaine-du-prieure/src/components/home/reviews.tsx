'use client'

import { motion } from 'framer-motion'
import { avis } from '@/data/mock'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-forest-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  const [featured, ...rest] = avis

  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Featured quote — large editorial */}
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mb-16 border-b border-ink-700 pb-16"
        >
          <Stars n={featured.note} />
          <blockquote className="mt-6 font-display text-3xl italic leading-relaxed text-ink-50 sm:text-4xl md:text-5xl">
            &ldquo;{featured.texte}&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-sm text-ink-400">
            {featured.auteur} <span className="text-ink-600">via</span> {featured.provenance}
          </figcaption>
        </motion.figure>

        {/* Remaining reviews */}
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((a, i) => (
            <motion.figure
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="rounded-2xl border border-ink-700 bg-ink-900 p-8"
            >
              <Stars n={a.note} />
              <blockquote className="mt-4 text-lg italic leading-relaxed text-ink-200">
                &ldquo;{a.texte}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-ink-400">
                {a.auteur} <span className="text-ink-600">via</span> {a.provenance}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Platform trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-ink-500"
        >
          <span>Booking.com</span>
          <span className="h-px w-8 bg-ink-700" />
          <span>Gites de France</span>
          <span className="h-px w-8 bg-ink-700" />
          <span>Airbnb</span>
        </motion.div>
      </div>
    </section>
  )
}
