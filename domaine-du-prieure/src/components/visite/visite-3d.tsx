'use client'

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentRef,
} from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Sky, Html, useProgress } from '@react-three/drei'
import { MapPin, RotateCcw, Move } from 'lucide-react'
import { cn } from '@/lib/utils'
import { hotspots } from '@/data/mock'
import { DomaineScene } from './domaine-scene'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-forest-700 border-t-forest-400" />
        <p className="text-sm text-ink-200">Chargement… {Math.round(progress)}%</p>
      </div>
    </Html>
  )
}

export function Visite3D({ compact = false }: { compact?: boolean }) {
  const controls = useRef<ComponentRef<typeof CameraControls>>(null)
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)

  const goTo = (i: number, transition = true) => {
    const h = hotspots[i]
    setActive(i)
    controls.current?.setLookAt(
      h.camera[0], h.camera[1], h.camera[2],
      h.target[0], h.target[1], h.target[2],
      transition
    )
  }

  useEffect(() => {
    if (!ready || !controls.current) return
    controls.current.smoothTime = 0.9
    const start = hotspots[0]
    controls.current.setLookAt(
      start.camera[0] + 8, start.camera[1] + 6, start.camera[2] + 8,
      start.target[0], start.target[1], start.target[2],
      false
    )
    const t = setTimeout(() => goTo(0, true), 400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  const current = hotspots[active]

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-950 shadow-2xl',
        compact ? 'h-[60vh] min-h-[380px]' : 'h-[78vh] min-h-[520px]'
      )}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: hotspots[0].camera, fov: 46, near: 0.1, far: 200 }}
        onCreated={() => setReady(true)}
      >
        <Sky
          distance={450000}
          sunPosition={[3, 0.3, -5]}
          inclination={0.56}
          azimuth={0.18}
          turbidity={14}
          rayleigh={3.5}
        />
        <fog attach="fog" args={['#1a1008', 40, 110]} />
        <Suspense fallback={<Loader />}>
          <DomaineScene showMarkers />
        </Suspense>
        <CameraControls
          ref={controls}
          makeDefault
          minDistance={5}
          maxDistance={40}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.15}
        />
      </Canvas>

      {/* Info panel */}
      <div className="pointer-events-none absolute left-3 top-3 max-w-xs sm:left-5 sm:top-5">
        <div className="pointer-events-auto rounded-xl bg-ink-950/85 p-4 shadow-lg backdrop-blur border border-white/10">
          <p className="flex items-center gap-2 font-display text-lg text-ink-50">
            <MapPin className="h-4 w-4 text-forest-400" />
            {current.titre}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-300">
            {current.description}
          </p>
        </div>
      </div>

      {/* Hint */}
      <div className="pointer-events-none absolute right-3 top-3 hidden items-center gap-1.5 rounded-full bg-ink-950/60 px-3 py-1.5 text-xs text-ink-200 backdrop-blur border border-white/8 sm:flex">
        <Move className="h-3.5 w-3.5" />
        Glissez pour explorer
      </div>

      {/* Hotspot nav */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {hotspots.map((h, i) => (
            <button
              key={h.id}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                'rounded-full px-3.5 py-2 text-xs font-medium shadow transition-all sm:text-sm',
                active === i
                  ? 'bg-forest-600 text-white'
                  : 'bg-ink-950/80 text-ink-200 backdrop-blur border border-ink-700 hover:border-forest-700 hover:text-ink-50'
              )}
            >
              {h.titre}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goTo(0)}
            aria-label="Réinitialiser"
            className="rounded-full bg-ink-950/80 p-2 text-ink-300 shadow backdrop-blur border border-ink-700 transition-colors hover:border-forest-700 hover:text-ink-50"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
