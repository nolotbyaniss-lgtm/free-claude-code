'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { DomaineScene } from './domaine-scene'

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [28, 20, 14], fov: 50, near: 0.1, far: 300 }}
      onCreated={({ gl }) => {
        gl.setClearColor('#0c0908')
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Sky
        distance={450000}
        sunPosition={[3, 0.3, -5]}
        inclination={0.56}
        azimuth={0.18}
        turbidity={14}
        rayleigh={3.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      <fog attach="fog" args={['#1a1008', 40, 110]} />

      <DomaineScene showMarkers={false} />

      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.45}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 3.2}
        target={[0, 3, 0]}
      />
    </Canvas>
  )
}
