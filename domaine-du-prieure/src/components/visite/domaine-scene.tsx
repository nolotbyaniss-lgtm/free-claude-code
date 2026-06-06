'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, ContactShadows } from '@react-three/drei'
import type { Group, Mesh } from 'three'

/* Palette pierre / terre cuite / sauge */
const STONE = '#d8c6a8'
const STONE_DARK = '#c7b291'
const ROOF = '#a9532f'
const ROOF_DARK = '#8a4124'
const WOOD = '#6f4a2f'
const WATER = '#5a93a8'

/** Fenêtre encastrée (cadre clair + vitre sombre) */
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
        <boxGeometry args={[width + 0.12, height + 0.12, 0.05]} />
        <meshStandardMaterial color="#efe6d4" />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[width, height, 0.04]} />
        <meshStandardMaterial
          color="#2b3138"
          metalness={0.1}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

/** Bâtiment à toit pyramidal (Le Couvent) */
function Couvent() {
  return (
    <group position={[-6, 0, 0]}>
      {/* corps */}
      <mesh position={[0, 2.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 4.8, 5]} />
        <meshStandardMaterial color={STONE} roughness={0.9} />
      </mesh>
      {/* bandeau de soubassement */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[6.2, 0.6, 5.2]} />
        <meshStandardMaterial color={STONE_DARK} roughness={1} />
      </mesh>
      {/* toit pyramidal */}
      <mesh position={[0, 5.7, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[4.7, 2, 4]} />
        <meshStandardMaterial color={ROOF} roughness={0.8} />
      </mesh>
      {/* clocheton */}
      <mesh position={[0, 7, 0]} castShadow>
        <boxGeometry args={[0.9, 1.2, 0.9]} />
        <meshStandardMaterial color={STONE} roughness={0.9} />
      </mesh>
      <mesh position={[0, 7.9, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.8, 0.9, 4]} />
        <meshStandardMaterial color={ROOF_DARK} />
      </mesh>
      <mesh position={[0, 8.55, 0]}>
        <boxGeometry args={[0.05, 0.6, 0.05]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.6} />
      </mesh>
      <mesh position={[0, 8.75, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.05]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.6} />
      </mesh>
      {/* porte */}
      <mesh position={[0, 1.1, 2.51]}>
        <boxGeometry args={[1.2, 2.2, 0.1]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      {/* fenêtres façade */}
      <Window position={[-2, 2.6, 2.5]} />
      <Window position={[2, 2.6, 2.5]} />
      <Window position={[-2, 1.2, 2.5]} />
      <Window position={[2, 1.2, 2.5]} />
      {/* fenêtres côté */}
      <group rotation={[0, Math.PI / 2, 0]} position={[3.01, 0, 0]}>
        <Window position={[-1.4, 2.6, 0]} />
        <Window position={[1.4, 2.6, 0]} />
      </group>
    </group>
  )
}

/** Bâtiment à toit à deux pentes (Le Presbytère) */
function Presbytere() {
  return (
    <group position={[6, 0, 0]}>
      <mesh position={[0, 1.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 3.8, 4.2]} />
        <meshStandardMaterial color={STONE_DARK} roughness={0.95} />
      </mesh>
      {/* toit à deux pentes (prisme = box tournée) */}
      <mesh
        position={[0, 4.3, 0]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[1, 1, 1.02]}
        castShadow
      >
        <boxGeometry args={[3, 3, 4.3]} />
        <meshStandardMaterial color={ROOF_DARK} roughness={0.85} />
      </mesh>
      {/* masque les coins du toit qui dépassent sous la ligne de faîte */}
      <mesh position={[0, 2.6, 0]}>
        <boxGeometry args={[4.3, 1.4, 4.4]} />
        <meshStandardMaterial color={STONE_DARK} roughness={0.95} />
      </mesh>
      {/* cheminée */}
      <mesh position={[1.2, 5, 0]} castShadow>
        <boxGeometry args={[0.6, 1.4, 0.6]} />
        <meshStandardMaterial color={STONE} roughness={1} />
      </mesh>
      {/* porte voûtée approximée */}
      <mesh position={[0, 1, 2.11]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      <mesh position={[0, 2, 2.11]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color={WOOD} roughness={0.7} />
      </mesh>
      <Window position={[-1.3, 1.2, 2.1]} width={0.5} height={0.8} />
      <Window position={[1.3, 1.2, 2.1]} width={0.5} height={0.8} />
      <Window position={[-1.3, 2.7, 2.1]} width={0.5} height={0.7} />
      <Window position={[1.3, 2.7, 2.1]} width={0.5} height={0.7} />
    </group>
  )
}

/** Cyprès méditerranéen */
function Cypress({
  position,
  scale = 1,
}: {
  position: [number, number, number]
  scale?: number
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.16, 0.6]} />
        <meshStandardMaterial color={WOOD} />
      </mesh>
      <mesh position={[0, 2.1, 0]} castShadow>
        <coneGeometry args={[0.7, 3.6, 8]} />
        <meshStandardMaterial color="#4e5a3a" roughness={1} />
      </mesh>
    </group>
  )
}

/** Petit arbre rond (olivier / feuillu) */
function RoundTree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.18, 1]} />
        <meshStandardMaterial color={WOOD} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color="#7e8e62" roughness={1} />
      </mesh>
    </group>
  )
}

/** Piscine avec margelle */
function Pool() {
  return (
    <group position={[0, 0, 6]}>
      {/* margelle */}
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <boxGeometry args={[6.6, 0.2, 3.6]} />
        <meshStandardMaterial color="#e7ddc8" roughness={0.8} />
      </mesh>
      {/* bassin */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[5.6, 0.3, 2.8]} />
        <meshStandardMaterial color="#23566a" />
      </mesh>
      {/* eau */}
      <mesh position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.4, 2.6]} />
        <meshStandardMaterial
          color={WATER}
          transparent
          opacity={0.82}
          metalness={0.4}
          roughness={0.15}
        />
      </mesh>
    </group>
  )
}

/** Muret de pierre bas */
function Wall({
  position,
  args,
}: {
  position: [number, number, number]
  args: [number, number, number]
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={STONE_DARK} roughness={1} />
    </mesh>
  )
}

/** Étiquette flottante au-dessus d'un point d'intérêt */
function Marker({
  position,
  label,
}: {
  position: [number, number, number]
  label: string
}) {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.12
    }
  })
  return (
    <group position={[position[0], 0, position[2]]}>
      <mesh ref={ref} position={[0, position[1], 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#b85c33"
          emissive="#b85c33"
          emissiveIntensity={0.6}
        />
      </mesh>
      <Html position={[0, position[1] + 0.4, 0]} center distanceFactor={14}>
        <div className="pointer-events-none whitespace-nowrap rounded-full bg-neutral-900/85 px-3 py-1 text-xs font-medium text-neutral-50 shadow-lg backdrop-blur">
          {label}
        </div>
      </Html>
    </group>
  )
}

export function DomaineScene() {
  const sunRef = useRef<Group>(null)

  return (
    <group>
      {/* lumières — fin d'après-midi doré */}
      <hemisphereLight args={['#fff4e0', '#6b7a55', 0.7]} />
      <ambientLight intensity={0.35} />
      <group ref={sunRef}>
        <directionalLight
          position={[12, 16, 8]}
          intensity={2.1}
          color="#ffedd0"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-25}
          shadow-camera-right={25}
          shadow-camera-top={25}
          shadow-camera-bottom={-25}
          shadow-camera-near={1}
          shadow-camera-far={60}
        />
      </group>

      {/* sol — pelouse */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial color="#8a9b6a" roughness={1} />
      </mesh>
      {/* allée gravillonnée centrale */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 4]}
        receiveShadow
      >
        <planeGeometry args={[3, 14]} />
        <meshStandardMaterial color="#d6c9ac" roughness={1} />
      </mesh>

      {/* bâtiments */}
      <Couvent />
      <Presbytere />
      <Pool />

      {/* murets */}
      <Wall position={[0, 0.4, -8]} args={[28, 0.8, 0.4]} />
      <Wall position={[-14, 0.4, 0]} args={[0.4, 0.8, 16]} />
      <Wall position={[14, 0.4, 0]} args={[0.4, 0.8, 16]} />

      {/* végétation */}
      <Cypress position={[-12, 0, -5]} scale={1.2} />
      <Cypress position={[-12, 0, -2]} />
      <Cypress position={[12, 0, -5]} scale={1.1} />
      <Cypress position={[12, 0, -2]} />
      <Cypress position={[-10, 0, 8]} scale={0.9} />
      <RoundTree position={[10, 0, 7]} />
      <RoundTree position={[-9, 0, 4]} />
      <RoundTree position={[9, 0, 4]} />

      {/* marqueurs des points d'intérêt */}
      <Marker position={[-6, 9.2, 0]} label="Le Couvent" />
      <Marker position={[6, 6.2, 0]} label="Le Presbytère" />
      <Marker position={[0, 1.6, 6]} label="La Piscine" />

      {/* ombres de contact douces */}
      <ContactShadows
        position={[0, 0.05, 0]}
        opacity={0.4}
        scale={40}
        blur={2.2}
        far={12}
      />
    </group>
  )
}
