import Link from 'next/link'
import { Camera, Globe, MapPin, Phone, Mail, Leaf } from 'lucide-react'
import { navLinks } from '@/data/nav'
import { contact } from '@/data/mock'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-secondary-500">
              Domaine du Prieuré
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              Deux gîtes de caractère dans un ancien couvent et un presbytère,
              au cœur de l&apos;Aude, à dix minutes de la Cité de Carcassonne.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-sage-300">
              <Leaf className="h-4 w-4" />
              Éco-responsable depuis 20 ans
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg">Naviguer</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-secondary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg">Nous trouver</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" />
                <span>{contact.lieu}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary-500" />
                <a
                  href={`tel:${contact.telephoneRaw}`}
                  className="transition-colors hover:text-secondary-500"
                >
                  {contact.telephone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary-500" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-secondary-500"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/domainelecouventcarcassonne/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-2 text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-secondary-500"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-2 text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-secondary-500"
              >
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-600 pt-6 text-sm text-neutral-300 sm:flex-row">
          <p>© 2026 Domaine du Prieuré · {contact.hotes}</p>
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-secondary-500"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
