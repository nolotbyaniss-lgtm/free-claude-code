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

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <div>
            <h2 className="font-display text-2xl text-neutral-900">
              {contact.nom}
            </h2>
            <p className="mt-2 text-sm text-sage-600">
              {contact.hotes} · {contact.region}
            </p>

            <ul className="mt-8 space-y-5">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-neutral-900 transition-colors hover:text-primary-600"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-neutral-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-sage-50 p-5 text-sm leading-relaxed text-neutral-600">
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
