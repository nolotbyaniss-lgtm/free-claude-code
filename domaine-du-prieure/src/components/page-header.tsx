export function PageHeader({
  eyebrow,
  titre,
  intro,
}: {
  eyebrow?: string
  titre: string
  intro?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-secondary-100 via-neutral-50 to-sage-100">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.2em] text-sage-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-4xl text-neutral-900 sm:text-5xl">
          {titre}
        </h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
