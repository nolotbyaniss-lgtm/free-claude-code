const items = [
  '1460',
  'Presbytère Médiéval',
  '1877',
  'Couvent de la Sainte-Famille',
  '800 m² de Jardin',
  'Piscine Privée',
  '10 min de Carcassonne',
  'Vélos Offerts',
  'Éco-Responsable depuis 20 ans',
  '13 Voyageurs',
  'Occitanie',
]

function Dot() {
  return (
    <span className="mx-6 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-forest-600" />
  )
}

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-ink-700 bg-ink-900 py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-ink-300">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  )
}
