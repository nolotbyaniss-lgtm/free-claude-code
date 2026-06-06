'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export function ShaderBg() {
  return (
    <ShaderGradientCanvas
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      pointerEvents="none"
    >
      <ShaderGradient
        type="waterPlane"
        animate="on"
        uSpeed={0.06}
        uStrength={2.8}
        uDensity={1.2}
        uFrequency={5.5}
        uAmplitude={4.2}
        color1="#0b1a0e"
        color2="#1a0f06"
        color3="#070c05"
        grain="on"
        lightType="3d"
        envPreset="dawn"
        reflection={0.15}
        rotationX={45}
        positionX={0}
        positionY={0}
        positionZ={0}
      />
    </ShaderGradientCanvas>
  )
}
