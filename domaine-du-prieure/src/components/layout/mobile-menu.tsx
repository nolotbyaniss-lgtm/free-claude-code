'use client'

import Link from 'next/link'
import { X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { navLinks } from '@/data/nav'
import { contact } from '@/data/mock'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-neutral-50 transition-opacity duration-300 lg:hidden',
        open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <span className="font-display text-lg text-primary-700">
            Domaine du Prieuré
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="rounded-full p-2 text-neutral-900 transition-colors hover:bg-neutral-300/40"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-neutral-900 transition-colors hover:text-primary-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center p-8">
          <a
            href={`tel:${contact.telephoneRaw}`}
            onClick={onClose}
            className={cn(buttonVariants({ variant: 'primary', size: 'lg' }))}
          >
            <Phone className="h-5 w-5" />
            {contact.telephone}
          </a>
        </div>
      </div>
    </div>
  )
}
