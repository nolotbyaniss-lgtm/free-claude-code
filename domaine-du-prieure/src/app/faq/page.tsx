import type { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { FaqAccordion } from '@/components/faq-accordion'
import { faq, contact } from '@/data/mock'

export const metadata: Metadata = {
  title: 'Questions fréquentes',
  description:
    'Animaux acceptés, borne de recharge, parking, distance de Carcassonne, horaires : toutes les réponses pour préparer votre séjour au Domaine du Prieuré.',
}

export default function FaqPage() {
  // JSON-LD FAQ pour le référencement
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.reponse },
    })),
  }

  return (
    <>
      <PageHeader
        eyebrow="Bon à savoir"
        titre="Questions fréquentes"
        intro="Tout ce qu'il faut savoir avant de réserver votre séjour au domaine."
      />

      <section className="bg-ink-950 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <FaqAccordion />

          <div className="mt-14 rounded-2xl border border-ink-700 bg-ink-900 p-8 text-center">
            <h2 className="font-display text-2xl text-ink-50">
              Une autre question ?
            </h2>
            <p className="mt-2 text-sm text-ink-300">
              Sabrina &amp; Benoît vous répondent personnellement.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${contact.telephoneRaw}`}
                className={cn(buttonVariants({ variant: 'primary', size: 'md' }))}
              >
                {contact.telephone}
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}
              >
                Nous écrire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
