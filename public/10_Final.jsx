/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Shirt_Export20.10_Final.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Final(props) {
  const { nodes, materials } = useGLTF('/Shirt_Export20.10_Final.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Canvas_shoes002.geometry} material={materials['Canvas_shoes.002']} scale={0.01} />
      <group scale={0.01}>
        <mesh geometry={nodes.Double_low_1.geometry} material={materials['Hair_Transparency.011']} />
        <mesh geometry={nodes.Double_low_2.geometry} material={materials['Scalp_Transparency.003']} />
      </group>
      <group scale={0.01}>
        <mesh geometry={nodes.CC_Base_Eye003_1.geometry} material={materials['Std_Eye_R.003']} />
        <mesh geometry={nodes.CC_Base_Eye003_2.geometry} material={materials['Std_Cornea_R.003']} />
        <mesh geometry={nodes.CC_Base_Eye003_3.geometry} material={materials['Std_Eye_L.003']} />
        <mesh geometry={nodes.CC_Base_Eye003_4.geometry} material={materials['Std_Cornea_L.003']} />
      </group>
      <mesh geometry={nodes.Sunglasses003.geometry} material={materials['Sunglasses.003']} scale={0.01} />
      <group scale={0.01}>
        <mesh geometry={nodes.CC_Base_Body003_1.geometry} material={materials['Std_Skin_Head.003']} />
        <mesh geometry={nodes.CC_Base_Body003_2.geometry} material={materials['Std_Skin_Body.003']} />
        <mesh geometry={nodes.CC_Base_Body003_3.geometry} material={materials['Std_Skin_Arm.003']} />
        <mesh geometry={nodes.CC_Base_Body003_4.geometry} material={materials['Std_Skin_Leg.003']} />
        <mesh geometry={nodes.CC_Base_Body003_5.geometry} material={materials['Std_Nails.003']} />
        <mesh geometry={nodes.CC_Base_Body003_6.geometry} material={materials['Std_Eyelash.003']} />
      </group>
      <mesh geometry={nodes.Basic_T_shirts.geometry} material={materials['Basic_T_shirts.001']} scale={0.01} />
      <mesh geometry={nodes.Denim_shorts001.geometry} material={materials['Denim_shorts.001']} scale={0.01} />
      <mesh geometry={nodes.Baby_bangs.geometry} material={materials['Hair_Transparency.010']} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/Shirt_Export20.10_Final.glb')