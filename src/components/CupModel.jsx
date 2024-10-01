import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CupModel(props) {
  const { nodes, materials } = useGLTF('/a_cup.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/a_cup.glb')