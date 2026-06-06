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
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(79,127,87,0.12),transparent)]" />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-forest-400">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-display text-5xl text-ink-50 sm:text-6xl">{titre}</h1>
        {intro && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />
    </section>
  )
}
