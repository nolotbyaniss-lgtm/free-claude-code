import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Contact & Réservation',
  description:
    'Contactez le Domaine du Prieuré pour réserver Le Couvent ou Le Presbytère. Téléphone, email et formulaire de demande.',
}

const infos = [
  { icon: MapPin, label: 'Adresse', value: contact.lieu },
  { icon: Phone, label: 'Téléphone', value: contact.telephone, href: `tel:${contact.telephoneRaw}` },
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Clock, label: 'Réponse', value: 'Sous 24 h en général' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        titre="Contactez vos hôtes"
        intro="Une question, une envie de séjour ? Sabrina et Benoît vous répondent personnellement."
      />

      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <div>
            <h2 className="font-display text-3xl text-ink-50">
              {contact.nom}
            </h2>
            <p className="mt-2 text-sm text-forest-400">
              {contact.hotes} · {contact.region}
            </p>

            <ul className="mt-8 space-y-5">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest-800 bg-forest-900/40 text-forest-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-ink-100 transition-colors hover:text-forest-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-ink-100">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-ink-700 bg-ink-900 p-5 text-sm leading-relaxed text-ink-300">
              À {contact.distanceCentre}, le domaine est facilement accessible
              en voiture. Un parking privé est à votre disposition sur place.
            </div>
          </div>

          {/* Formulaire */}
          <ContactForm />
        </div>
      </section>
    </>
  )
}
