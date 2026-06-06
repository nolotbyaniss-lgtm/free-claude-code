'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { contact } from '@/data/mock'

const ShaderBg = dynamic(
  () => import('./shader-bg').then((m) => m.ShaderBg),
  { ssr: false }
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-ink-950">
      {/* ShaderGradient animated background */}
      <div className="absolute inset-0">
        <ShaderBg />
      </div>

      {/* Deep vignette — bottom heavy for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_110%,rgba(7,12,5,0.95)_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />

      {/* Animated green spotlight */}
      <motion.div
        className="pointer-events-none absolute"
        style={{ top: '10%', left: '35%', width: '55%', height: '65%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <div className="h-full w-full rounded-full bg-forest-700/10 blur-[120px]" />
      </motion.div>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Fine horizontal line — editorial top bar */}
      <motion.div
        className="absolute left-0 right-0 top-[88px] h-px bg-gradient-to-r from-transparent via-forest-700/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.2 }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 md:px-16 md:pb-28">
        <div className="max-w-3xl">
          {/* Region label */}
          <motion.p
            {...fadeUp(0.2)}
            className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-forest-400"
          >
            <span className="h-px w-8 bg-forest-600" />
            {contact.region}
          </motion.p>

          {/* Main title */}
          <motion.h1
            {...fadeUp(0.38)}
            className="font-display leading-[0.9] tracking-tight text-ink-50"
            style={{ fontSize: 'clamp(58px,9vw,130px)' }}
          >
            Domaine
            <br />
            <em className="not-italic" style={{ color: '#6aaa78' }}>du Prieuré</em>
          </motion.h1>

          {/* Divider rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 h-px origin-left bg-gradient-to-r from-forest-700/60 via-forest-600/20 to-transparent"
            style={{ maxWidth: 320 }}
          />

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.6)}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            Deux gîtes d&apos;exception dans un presbytère médiéval et un
            couvent du XIX<sup>e</sup> siècle, à dix minutes de la Cité de Carcassonne.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.78)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/les-gites"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-forest-900/40 transition-all hover:bg-forest-500 hover:shadow-forest-800/50 active:scale-[0.98]"
            >
              Découvrir les gîtes
              <span className="transition-transform group-hover:translate-x-0.5">&#8594;</span>
            </Link>
            <Link
              href="/visite"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-ink-100 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-ink-50 active:scale-[0.98]"
            >
              Visite 3D interactive
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.98)}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/8 pt-8"
        >
          {[
            { v: '1460', k: 'Presbytère médiéval' },
            { v: '1877', k: 'Couvent restauré' },
            { v: '13', k: 'Voyageurs max.' },
            { v: '10 min', k: 'Carcassonne' },
          ].map((s) => (
            <div key={s.k} className="flex flex-col gap-0.5">
              <span className="font-display text-3xl leading-none text-ink-50">{s.v}</span>
              <span className="text-xs uppercase tracking-[0.22em] text-ink-500">{s.k}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-ink-500 [writing-mode:vertical-lr]">
          Défiler
        </span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-ink-600 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.div>
    </section>
  )
}
