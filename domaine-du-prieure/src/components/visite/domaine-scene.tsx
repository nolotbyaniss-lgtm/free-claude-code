'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, ContactShadows, Stars } from '@react-three/drei'
import type { Group, Mesh, MeshStandardMaterial } from 'three'

/* Palette pierre dorée — heure dorée / crépuscule */
const STONE       = '#e0cfa8'
const STONE_DARK  = '#c8b48a'
const ROOF        = '#8c3e1e'
const ROOF_DARK   = '#6e2e14'
const WOOD        = '#5a3a22'
const WATER       = '#2a6878'

function Window({
  position,
  width = 0.6,
  height = 0.9,
}: {
  position: [number, number, number]
  width?: number
  height?: number
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[width + 0.14, height + 0.14, 0.06]} />
        <meshStandardMaterial color="#efe6d4" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0, 0.07]}>
        <boxGeometry args={[width, height, 0.05]} />
        <meshStandardMaterial color="#1c2530" metalness={0.2} roughness={0.1} />
      </mesh>
    </group>
  )
}

function Couvent() {
  return (
    <group position={[-6, 0, 0]}>
      {/* corps */}
      <mesh position={[0, 2.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 4.8, 5]} />
        <meshStandardMaterial color={STONE} roughness={0.88} />
      </mesh>
      {/* soubassement */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[6.2, 0.6, 5.2]} />
        <meshStandardMaterial color={STONE_DARK} roughness={1} />
      </mesh>
      {/* toit pyramidal */}
      <mesh position={[0, 5.7, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[4.8, 2.2, 4]} />
        <meshStandardMaterial color={ROOF} roughness={0.8} />
      </mesh>
      {/* clocheton */}
      <mesh position={[0, 7, 0]} castShadow>
        <boxGeometry args={[0.9, 1.2, 0.9]} />
        <meshStandardMaterial color={STONE} roughness={0.9} />
      </mesh>
      <mesh position={[0, 7.9, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.8, 0.9, 4]} />
        <meshStandardMaterial color={ROOF_DARK} roughness={0.8} />
      </mesh>
      {/* croix */}
      <mesh position={[0, 8.55, 0]}>
        <boxGeometry args={[0.06, 0.65, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 8.75, 0]}>
        <boxGeometry args={[0.32, 0.06, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* porte */}
      <mesh position={[0, 1.1, 2.52]}>
        <boxGeometry args={[1.2, 2.2, 0.1]} />
        <meshStandardMaterial color={WOOD} roughness={0.75} />
      </mesh>
      {/* fenêtres */}
      <Window position={[-2, 2.6, 2.51]} />
      <Window position={[2, 2.6, 2.51]} />
      <Window position={[-2, 1.2, 2.51]} />
      <Window position={[2, 1.2, 2.51]} />
      <group rotation={[0, Math.PI / 2, 0]} position={[3.02, 0, 0]}>
        <Window position={[-1.4, 2.6, 0]} />
        <Window position={[1.4, 2.6, 0]} />
      </group>
    </group>
  )
}

function Presbytere() {
  return (
    <group position={[6, 0, 0]}>
      <mesh position={[0, 1.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 3.8, 4.2]} />
        <meshStandardMaterial color={STONE_DARK} roughness={0.95} />
      </mesh>
      <mesh
        position={[0, 4.3, 0]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[1, 1, 1.02]}
        castShadow
      >
        <boxGeometry args={[3, 3, 4.3]} />
        <meshStandardMaterial color={ROOF_DARK} roughness={0.85} />
      </mesh>
      <mesh position={[0, 2.6, 0]}>
        <boxGeometry args={[4.3, 1.4, 4.4]} />
        <meshStandardMaterial color={STONE_DARK} roughness={0.95} />
      </mesh>
      {/* cheminée */}
      <mesh position={[1.2, 5, 0]} castShadow>
        <boxGeometry args={[0.6, 1.4, 0.6]} />
        <meshStandardMaterial color={STONE} roughness={1} />
      </mesh>
      {/* porte voûtée */}
      <mesh position={[0, 1, 2.12]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      <mesh position={[0, 2, 2.12]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      <Window position={[-1.3, 1.2, 2.11]} width={0.5} height={0.8} />
      <Window position={[1.3, 1.2, 2.11]} width={0.5} height={0.8} />
      <Window position={[-1.3, 2.7, 2.11]} width={0.5} height={0.7} />
      <Window position={[1.3, 2.7, 2.11]} width={0.5} height={0.7} />
    </group>
  )
}

/* Piscine avec eau animée */
function PoolWater() {
  const ref = useRef<Mesh>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return
    ;(ref.current.material as MeshStandardMaterial).opacity =
      0.72 + Math.sin(clock.elapsedTime * 1.4) * 0.06
  })
  return (
    <mesh ref={ref} position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[5.4, 2.6]} />
      <meshStandardMaterial
        color={WATER}
        transparent
        opacity={0.78}
        metalness={0.65}
        roughness={0.05}
      />
    </mesh>
  )
}

function Pool() {
  return (
    <group position={[0, 0, 6]}>
      {/* margelle */}
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <boxGeometry args={[6.6, 0.2, 3.6]} />
        <meshStandardMaterial color="#dfd3b4" roughness={0.85} />
      </mesh>
      {/* bassin */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[5.6, 0.3, 2.8]} />
        <meshStandardMaterial color="#163a48" />
      </mesh>
      <PoolWater />
    </group>
  )
}

function Cypress({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 0.6]} />
        <meshStandardMaterial color={WOOD} />
      </mesh>
      <mesh position={[0, 2.1, 0]} castShadow>
        <coneGeometry args={[0.7, 3.6, 8]} />
        <meshStandardMaterial color="#3a5228" roughness={1} />
      </mesh>
    </group>
  )
}

function RoundTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.18, 1]} />
        <meshStandardMaterial color={WOOD} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[1, 14, 14]} />
        <meshStandardMaterial color="#6a8450" roughness={1} />
      </mesh>
    </group>
  )
}

function Wall({ position, args }: { position: [number, number, number]; args: [number, number, number] }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={STONE_DARK} roughness={1} />
    </mesh>
  )
}

function Marker({ position, label }: { position: [number, number, number]; label: string }) {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.6) * 0.14
    }
  })
  return (
    <group position={[position[0], 0, position[2]]}>
      <mesh ref={ref} position={[0, position[1], 0]}>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color="#4f7f57" emissive="#4f7f57" emissiveIntensity={0.8} />
      </mesh>
      <Html position={[0, position[1] + 0.5, 0]} center distanceFactor={14}>
        <div className="pointer-events-none whitespace-nowrap rounded-full bg-ink-950/90 px-3 py-1.5 text-xs font-medium text-ink-50 shadow-lg backdrop-blur border border-white/10">
          {label}
        </div>
      </Html>
    </group>
  )
}

export function DomaineScene({ showMarkers = true }: { showMarkers?: boolean }) {
  const sunRef = useRef<Group>(null)

  return (
    <group>
      {/* Étoiles — crépuscule */}
      <Stars radius={100} depth={50} count={600} factor={3} saturation={0} fade speed={0.3} />

      {/* Lumières crépusculaires — soleil couchant + ciel bleu */}
      <hemisphereLight args={['#ffe8b0', '#1a3a5c', 0.55]} />
      <ambientLight intensity={0.25} color="#8090b0" />
      <group ref={sunRef}>
        <directionalLight
          position={[8, 5, 10]}
          intensity={2.4}
          color="#ff8040"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-28}
          shadow-camera-right={28}
          shadow-camera-top={28}
          shadow-camera-bottom={-28}
          shadow-camera-near={1}
          shadow-camera-far={70}
        />
      </group>
      {/* Lumière de remplissage — ciel nocturne côté opposé */}
      <directionalLight position={[-10, 8, -8]} intensity={0.4} color="#2040a0" />

      {/* Sol — pelouse verte dorée */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#6a7a48" roughness={1} />
      </mesh>
      {/* Allée gravillonnée */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 3.5]} receiveShadow>
        <planeGeometry args={[3, 12]} />
        <meshStandardMaterial color="#c8ba96" roughness={1} />
      </mesh>

      <Couvent />
      <Presbytere />
      <Pool />

      {/* Murets */}
      <Wall position={[0, 0.4, -8]}  args={[28, 0.8, 0.4]} />
      <Wall position={[-14, 0.4, 0]} args={[0.4, 0.8, 16]} />
      <Wall position={[14, 0.4, 0]}  args={[0.4, 0.8, 16]} />

      {/* Végétation */}
      <Cypress position={[-12, 0, -5]} scale={1.2} />
      <Cypress position={[-12, 0, -2]} />
      <Cypress position={[12, 0, -5]} scale={1.1} />
      <Cypress position={[12, 0, -2]} />
      <Cypress position={[-10, 0, 8]} scale={0.9} />
      <RoundTree position={[10, 0, 7]} />
      <RoundTree position={[-9, 0, 4]} />
      <RoundTree position={[9, 0, 4]} />
      <RoundTree position={[3, 0, -5]} />

      {/* Marqueurs */}
      {showMarkers && (
        <>
          <Marker position={[-6, 9.5, 0]} label="Le Couvent" />
          <Marker position={[6, 6.5, 0]}  label="Le Presbytère" />
          <Marker position={[0, 1.8, 6]}  label="La Piscine" />
        </>
      )}

      <ContactShadows position={[0, 0.06, 0]} opacity={0.5} scale={45} blur={2.8} far={14} />
    </group>
  )
}
