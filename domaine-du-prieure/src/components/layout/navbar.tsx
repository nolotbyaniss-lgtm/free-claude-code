'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/nav'
import { contact } from '@/data/mock'

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => {
      setScrolled((prev) => {
        const next = v > 72
        return prev === next ? prev : next
      })
    })
  }, [scrollY])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-400',
          scrolled
            ? 'bg-ink-950/92 backdrop-blur-md border-b border-white/8'
            : 'bg-ink-950/0'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display text-xl text-ink-50 tracking-wide transition-colors group-hover:text-forest-300">
              Domaine du Prieuré
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-forest-400">
              Carcassonne
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-200 transition-colors hover:text-ink-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/reserver"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-forest-500 active:scale-[0.98]"
            >
              Réserver
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-ink-200 transition-colors hover:bg-white/8 lg:hidden"
            >
              <span
                className={cn(
                  'block h-[1.5px] w-5 bg-current transition-all duration-300',
                  open && 'translate-y-[3px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-[1.5px] w-5 bg-current transition-all duration-300',
                  open && '-translate-y-[3px] -rotate-45'
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-72 bg-ink-950 px-6 pt-20 pb-10 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-100 transition-colors hover:bg-ink-800 hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${contact.telephoneRaw}`}
              className="mt-8 flex w-full items-center justify-center rounded-full border border-forest-600 py-3 text-sm font-medium text-forest-300 hover:bg-forest-700/30"
            >
              {contact.telephone}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
