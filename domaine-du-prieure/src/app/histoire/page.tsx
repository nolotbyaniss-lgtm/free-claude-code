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

      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="relative border-l border-ink-700 pl-8">
            {timeline.map((t) => (
              <li key={t.annee} className="mb-14 last:mb-0">
                <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-forest-500 ring-4 ring-ink-950" />
                <p className="font-display text-2xl text-forest-400">
                  {t.annee}
                </p>
                <h2 className="mt-1 font-display text-2xl text-ink-50">
                  {t.titre}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-300">
                  {t.texte}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink-800 bg-ink-900 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="font-display text-3xl italic leading-relaxed text-ink-100 md:text-4xl">
            « Restaurer ces pierres, c&apos;était leur rendre la parole. »
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-forest-400">
            Sabrina &amp; Benoît, vos hôtes
          </p>
        </div>
      </section>
    </>
  )
}
