'use client'

import dynamic from 'next/dynamic'

const VisitePhoto = dynamic(
  () => import('./visite-photo').then((m) => m.VisitePhoto),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[60vh] min-h-[380px] w-full items-center justify-center rounded-2xl border border-ink-700 bg-ink-950">
        <p className="text-sm text-ink-400">Préparation de la visite 3D…</p>
      </div>
    ),
  }
)

export default function VisiteEmbed({ compact = false }: { compact?: boolean }) {
  return <VisitePhoto compact={compact} />
}
