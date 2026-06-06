import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site du Domaine du Prieuré.',
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader titre="Mentions légales" />
      <section className="bg-ink-950 py-16">
        <div className="mx-auto max-w-2xl space-y-6 px-4 text-sm leading-relaxed text-ink-300 sm:px-6">
          <div>
            <h2 className="font-display text-lg text-ink-50">Éditeur</h2>
            <p className="mt-2">
              {contact.nom} — {contact.hotes}
              <br />
              {contact.lieu}
              <br />
              Téléphone : {contact.telephone}
              <br />
              Email : {contact.email}
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg text-ink-50">Hébergement</h2>
            <p className="mt-2">
              Ce site est hébergé par son prestataire d&apos;hébergement web. Les
              coordonnées complètes peuvent être communiquées sur demande.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg text-ink-50">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              L&apos;ensemble des contenus de ce site (textes, visuels, maquette
              3D) est protégé. Toute reproduction sans autorisation est
              interdite.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg text-ink-50">Données personnelles</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande et ne sont
              jamais cédées à des tiers.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
