'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/data/nav'
import { contact } from '@/data/mock'
import { MobileMenu } from './mobile-menu'

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-300/70 bg-neutral-50/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-primary-700 transition-colors group-hover:text-primary-500">
            Domaine du Prieuré
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-sage-500">
            Carcassonne
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contact.telephoneRaw}`}
            className={cn(
              buttonVariants({ variant: 'primary', size: 'sm' }),
              'hidden sm:inline-flex'
            )}
          >
            <Phone className="h-4 w-4" />
            Réserver
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="rounded-full p-2 text-neutral-900 transition-colors hover:bg-neutral-300/40 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
