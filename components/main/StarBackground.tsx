"use client"

import { useRef } from "react"
import type * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

const StarField = () => {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}

const StarBackground = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}

export default StarBackground
