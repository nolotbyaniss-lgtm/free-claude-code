import Link from 'next/link'
import { Camera, AtSign, MapPin, Phone, Clock } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-secondary-500">
              Lili Vintage
            </p>
            <p className="mt-3 text-sm text-neutral-300">
              Friperie vintage à Castelnaudary
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
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
                <span>9 Place de Verdun, 11400 Castelnaudary</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary-500" />
                <a
                  href="tel:0750435103"
                  className="transition-colors hover:text-secondary-500"
                >
                  07 50 43 51 03
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-secondary-500" />
                <span>Ouvert · Ferme à 19:00</span>
              </li>
            </ul>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-2 text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-secondary-500"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-2 text-neutral-100 transition-colors hover:bg-neutral-600 hover:text-secondary-500"
              >
                <AtSign className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-600 pt-6 text-sm text-neutral-300 sm:flex-row">
          <p>© 2026 Lili Vintage Fripstore</p>
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
