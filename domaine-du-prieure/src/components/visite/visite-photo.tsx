'use client'

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentRef,
} from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Image as DreiImage, Html, useProgress } from '@react-three/drei'
import { MapPin, RotateCcw, Move } from 'lucide-react'
import { cn } from '@/lib/utils'
import { photos } from '@/data/images'

/**
 * Photo-based 3D tour: each real estate photo is a textured plane floating in a
 * dark space, arranged on a gentle inward-facing arc. The camera glides between
 * them via CameraControls. Textures are pulled through the Next.js image
 * optimizer so they load same-origin (no WebGL CORS tainting).
 */

function optimized(src: string, w = 1920) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=80`
}

type Panel = {
  id: string
  titre: string
  description: string
  src: string
}

const panels: Panel[] = [
  {
    id: 'couvent',
    titre: 'Le Couvent — 1877',
    description:
      "L'ancien couvent de la Sainte-Famille, pierres dorées et clocheton. 8 voyageurs, 4 chambres.",
    src: photos.couvent,
  },
  {
    id: 'presbytere',
    titre: 'Le Presbytère — 1460',
    description:
      'La plus ancienne bâtisse du domaine, demeure médiévale sur deux niveaux.',
    src: photos.presbytere,
  },
  {
    id: 'piscine',
    titre: 'La Piscine',
    description:
      'Bassin plein sud ouvert sur le jardin et les collines de l’Aude.',
    src: photos.piscine,
  },
  {
    id: 'interieur',
    titre: "L'Intérieur",
    description:
      'Volumes hauts, pierre apparente et confort contemporain dans un écrin ancien.',
    src: photos.interieur,
  },
  {
    id: 'domaine',
    titre: 'Le Domaine',
    description:
      '800 m² de jardin clos, vue dégagée sur la campagne occitane.',
    src: photos.domaine,
  },
]

// Arc geometry: photos spread across ~160°, facing the centre.
const R = 9
const PW = 4.8
const PH = 3.4
const SPREAD = (160 * Math.PI) / 180
const angleOf = (i: number) =>
  panels.length === 1 ? 0 : -SPREAD / 2 + (SPREAD * i) / (panels.length - 1)

function posOf(i: number): [number, number, number] {
  const a = angleOf(i)
  return [R * Math.sin(a), 1.4, -R * Math.cos(a)]
}

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

function PhotoPanel({ panel, index }: { panel: Panel; index: number }) {
  const pos = posOf(index)
  const a = angleOf(index)
  return (
    <group position={pos} rotation={[0, -a, 0]}>
      {/* Dark frame behind the photo */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[PW + 0.3, PH + 0.3]} />
        <meshStandardMaterial color="#0b0908" roughness={0.9} metalness={0.1} />
      </mesh>
      <DreiImage
        url={optimized(panel.src)}
        scale={[PW, PH]}
        radius={0.12}
        toneMapped={false}
      />
      {/* Forest rim glow under each panel */}
      <pointLight position={[0, -0.4, 1.2]} intensity={6} color="#6aaa78" distance={6} />
    </group>
  )
}

export function VisitePhoto({ compact = false }: { compact?: boolean }) {
  const controls = useRef<ComponentRef<typeof CameraControls>>(null)
  const [active, setActive] = useState(-1) // -1 = vue d'ensemble
  const [ready, setReady] = useState(false)

  const overview = (transition = true) => {
    setActive(-1)
    controls.current?.setLookAt(0, 2.2, 6.5, 0, 1.2, -4, transition)
  }

  const goTo = (i: number, transition = true) => {
    setActive(i)
    const [x, y, z] = posOf(i)
    // Stand a few units in front of the chosen photo, looking at it.
    const k = (R - 3.6) / R
    controls.current?.setLookAt(x * k, y, z * k, x, y, z, transition)
  }

  useEffect(() => {
    if (!ready || !controls.current) return
    controls.current.smoothTime = 0.85
    controls.current.setLookAt(0, 3, 9, 0, 1.2, -4, false)
    const t = setTimeout(() => overview(true), 400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready])

  const current = active >= 0 ? panels[active] : null

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-950 shadow-2xl',
        compact ? 'h-[60vh] min-h-[380px]' : 'h-[78vh] min-h-[520px]'
      )}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 3, 9], fov: 50, near: 0.1, far: 200 }}
        onCreated={() => setReady(true)}
      >
        <color attach="background" args={['#0b0908']} />
        <fog attach="fog" args={['#0b0908', 12, 26]} />

        <ambientLight intensity={0.5} color="#cdd6e0" />
        <hemisphereLight args={['#f0ece6', '#070c05', 0.5]} />
        <directionalLight position={[4, 8, 6]} intensity={0.6} color="#ffe8c0" />
        {/* Forest spotlight from above the centre */}
        <pointLight position={[0, 6, -2]} intensity={40} color="#6aaa78" distance={30} />

        <Suspense fallback={<Loader />}>
          {panels.map((p, i) => (
            <PhotoPanel key={p.id} panel={p} index={i} />
          ))}

          {/* Reflective dark floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, -2]}>
            <planeGeometry args={[60, 60]} />
            <meshStandardMaterial color="#0d0b09" roughness={0.35} metalness={0.6} />
          </mesh>
        </Suspense>

        <CameraControls
          ref={controls}
          makeDefault
          minDistance={2}
          maxDistance={16}
          minPolarAngle={0.3}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>

      {/* Info panel */}
      <div className="pointer-events-none absolute left-3 top-3 max-w-xs sm:left-5 sm:top-5">
        <div className="pointer-events-auto rounded-xl border border-white/10 bg-ink-950/85 p-4 shadow-lg backdrop-blur">
          <p className="flex items-center gap-2 font-display text-lg text-ink-50">
            <MapPin className="h-4 w-4 text-forest-400" />
            {current ? current.titre : "Vue d'ensemble"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-300">
            {current
              ? current.description
              : 'Les cinq visuels du domaine, suspendus en arc. Glissez pour pivoter, ou choisissez un lieu pour vous en approcher.'}
          </p>
        </div>
      </div>

      {/* Hint */}
      <div className="pointer-events-none absolute right-3 top-3 hidden items-center gap-1.5 rounded-full border border-white/8 bg-ink-950/60 px-3 py-1.5 text-xs text-ink-200 backdrop-blur sm:flex">
        <Move className="h-3.5 w-3.5" />
        Glissez pour explorer
      </div>

      {/* Nav */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => overview()}
            className={cn(
              'rounded-full px-3.5 py-2 text-xs font-medium shadow transition-all sm:text-sm',
              active === -1
                ? 'bg-forest-600 text-white'
                : 'border border-ink-700 bg-ink-950/80 text-ink-200 backdrop-blur hover:border-forest-700 hover:text-ink-50'
            )}
          >
            Vue d&apos;ensemble
          </button>
          {panels.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                'rounded-full px-3.5 py-2 text-xs font-medium shadow transition-all sm:text-sm',
                active === i
                  ? 'bg-forest-600 text-white'
                  : 'border border-ink-700 bg-ink-950/80 text-ink-200 backdrop-blur hover:border-forest-700 hover:text-ink-50'
              )}
            >
              {p.titre.split(' — ')[0]}
            </button>
          ))}
          <button
            type="button"
            onClick={() => overview()}
            aria-label="Réinitialiser"
            className="rounded-full border border-ink-700 bg-ink-950/80 p-2 text-ink-300 shadow backdrop-blur transition-colors hover:border-forest-700 hover:text-ink-50"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
