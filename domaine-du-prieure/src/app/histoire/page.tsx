import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Notre Histoire',
  description:
    "Du presbytère médiéval de 1460 au couvent de la Sainte-Famille de 1877, découvrez l'histoire du Domaine du Prieuré à Grèzes, près de Carcassonne.",
}

const timeline = [
  {
    annee: '1460',
    titre: 'Le Presbytère',
    texte:
      "Au cœur du Moyen Âge, on bâtit à Grèzes la demeure du curé du village. Ses murs de pierre épaisse traversent les siècles et abritent aujourd'hui l'un de nos deux gîtes.",
  },
  {
    annee: '1877',
    titre: 'Le Couvent de la Sainte-Famille',
    texte:
      "Quatre cents ans plus tard, le couvent de la Sainte-Famille sort de terre dans le même hameau. Lieu de recueillement et de vie, il marque durablement le paysage de Grèzes.",
  },
  {
    annee: 'Depuis 20 ans',
    titre: 'Une renaissance éco-responsable',
    texte:
      "Sabrina et Benoît reprennent le domaine et entreprennent une restauration patiente, fidèle à l'esprit des lieux et résolument durable. Pierre nettoyée, charpentes préservées, gestion économe.",
  },
  {
    annee: "Aujourd'hui",
    titre: 'Deux gîtes de caractère',
    texte:
      'Le Couvent et le Presbytère accueillent désormais voyageurs et familles, à dix minutes de la Cité de Carcassonne, dans un jardin de 800 m² entre piscine et oliviers.',
  },
]

export default function HistoirePage() {
  return (
    <>
      <PageHeader
        eyebrow="Notre Histoire"
        titre="Six siècles sous le même ciel"
        intro="Du presbytère médiéval au couvent du XIXᵉ siècle, le Domaine du Prieuré raconte l'histoire d'un hameau de l'Aude — et de ceux qui le font vivre."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="relative border-l-2 border-secondary-200 pl-8">
            {timeline.map((t) => (
              <li key={t.annee} className="mb-12 last:mb-0">
                <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 ring-4 ring-neutral-50" />
                <p className="font-display text-2xl text-primary-600">
                  {t.annee}
                </p>
                <h2 className="mt-1 font-display text-xl text-neutral-900">
                  {t.titre}
                </h2>
                <p className="mt-2 leading-relaxed text-neutral-600">
                  {t.texte}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="font-display text-2xl italic text-neutral-800">
            « Restaurer ces pierres, c&apos;était leur rendre la parole. »
          </p>
          <p className="mt-3 text-sm uppercase tracking-widest text-sage-600">
            Sabrina &amp; Benoît, vos hôtes
          </p>
        </div>
      </section>
    </>
  )
}
