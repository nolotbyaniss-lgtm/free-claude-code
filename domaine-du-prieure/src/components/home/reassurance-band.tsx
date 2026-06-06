'use client'

import { motion } from 'framer-motion'
import { Waves, Car, Zap, Bike, PawPrint, Leaf, type LucideIcon } from 'lucide-react'
import { reassurances } from '@/data/mock'

const icons: Record<string, LucideIcon> = { Waves, Car, Zap, Bike, PawPrint, Leaf }

export function ReassuranceBand() {
  return (
    <section className="border-y border-ink-800 bg-ink-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {reassurances.map((r, i) => {
            const Icon = icons[r.icon] ?? Leaf
            return (
              <motion.div
                key={r.titre}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-forest-800 bg-forest-900/40 text-forest-300">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <p className="mt-3 text-sm font-medium text-ink-100">{r.titre}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-400">{r.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
