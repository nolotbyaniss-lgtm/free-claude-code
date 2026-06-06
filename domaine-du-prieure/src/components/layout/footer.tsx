import Link from 'next/link'
import { navLinks } from '@/data/nav'
import { contact } from '@/data/mock'

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="h-px bg-gradient-to-r from-transparent via-forest-700 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-ink-50">Domaine du Prieuré</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Deux gîtes de caractère dans un ancien couvent et un presbytère,
              au coeur de l&apos;Aude, à dix minutes de la Cité de Carcassonne.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-forest-500">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              Éco-responsable depuis 20 ans
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-ink-500">Explorer</h3>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-ink-500">Nous trouver</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="text-ink-300">{contact.lieu}</li>
              <li>
                <a
                  href={`tel:${contact.telephoneRaw}`}
                  className="text-forest-400 transition-colors hover:text-forest-300"
                >
                  {contact.telephone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-forest-400 transition-colors hover:text-forest-300"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/domainelecouventcarcassonne/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-colors hover:border-forest-700 hover:text-forest-400"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-colors hover:border-forest-700 hover:text-forest-400"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.5]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-xs text-ink-500 sm:flex-row">
          <p>© 2026 Domaine du Prieuré · {contact.hotes}</p>
          <Link href="/mentions-legales" className="transition-colors hover:text-ink-300">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}
