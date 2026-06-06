'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./hero-scene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-ink-950" />,
})

export default function HeroEmbed() {
  return <HeroScene />
}
