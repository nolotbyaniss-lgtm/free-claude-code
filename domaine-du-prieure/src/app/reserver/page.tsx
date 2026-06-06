import type { Metadata } from 'next'
import { Phone, Users, BedDouble, Maximize, Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { gites, contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Réserver votre séjour',
  description:
    'Réservez en direct Le Couvent ou Le Presbytère au Domaine du Prieuré, près de Carcassonne. Demande de disponibilité confirmée sous 24 h.',
}

export default function ReserverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disponibilités"
        titre="Réservez en direct"
        intro="Pas d'intermédiaire, pas de commission. Indiquez vos dates et le gîte souhaité : nous confirmons les disponibilités sous 24 h."
      />

      <section className="bg-ink-950 py-12 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Gîtes récap */}
          <div className="space-y-5">
            {gites.map((gite) => (
              <div
                key={gite.id}
                className="rounded-2xl border border-ink-700 bg-ink-900 p-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl text-ink-50">{gite.nom}</h2>
                  <span className="text-sm text-forest-400">{gite.annee}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-300">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-forest-400" />
                    {gite.capacite} voyageurs
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-forest-400" />
                    {gite.chambres} chambres
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="h-4 w-4 text-forest-400" />
                    {gite.surface}
                  </span>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-forest-800 bg-forest-900/25 p-6">
              <p className="flex items-start gap-2 text-sm leading-relaxed text-ink-200">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest-400" />
                Réservation directe sans frais. Animaux acceptés, parking et borne
                de recharge sur place, vélos offerts.
              </p>
              <a
                href={`tel:${contact.telephoneRaw}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-forest-500 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                {contact.telephone}
              </a>
            </div>
          </div>

          {/* Formulaire de demande */}
          <div>
            <h2 className="mb-5 font-display text-2xl text-ink-50">
              Demande de disponibilité
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
