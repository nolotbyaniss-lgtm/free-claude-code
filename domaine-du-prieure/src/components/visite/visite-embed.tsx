'use client'

import dynamic from 'next/dynamic'

const Visite3D = dynamic(
  () => import('./visite-3d').then((m) => m.Visite3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[60vh] min-h-[380px] w-full items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100">
        <p className="text-sm text-neutral-500">Préparation de la visite 3D…</p>
      </div>
    ),
  }
)

export default function VisiteEmbed({ compact = false }: { compact?: boolean }) {
  return <Visite3D compact={compact} />
}
