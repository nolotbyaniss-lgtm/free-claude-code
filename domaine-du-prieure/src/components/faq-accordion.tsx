'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faq } from '@/data/mock'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="divide-y divide-ink-800 border-y border-ink-800">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-ink-50"
            >
              <span className="font-display text-xl text-ink-100 md:text-2xl">
                {item.question}
              </span>
              <Plus
                className={cn(
                  'h-5 w-5 flex-shrink-0 text-forest-400 transition-transform duration-300',
                  isOpen && 'rotate-45'
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-ink-300 md:text-base">
                {item.reponse}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
