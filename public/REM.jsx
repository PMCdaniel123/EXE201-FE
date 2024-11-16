/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 REM.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function REMModel(props) {
  const { nodes, materials } = useGLTF('/REM.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.CC_Base_Body.geometry} material={materials.Std_Skin_Head} />
        <mesh geometry={nodes.CC_Base_Body_1.geometry} material={materials.Std_Skin_Body} />
        <mesh geometry={nodes.CC_Base_Body_2.geometry} material={materials.Std_Skin_Arm} />
        <mesh geometry={nodes.CC_Base_Body_3.geometry} material={materials.Std_Skin_Leg} />
        <mesh geometry={nodes.CC_Base_Body_4.geometry} material={materials.Std_Nails} />
        <mesh geometry={nodes.CC_Base_Body_5.geometry} material={materials.Std_Eyelash} />
        <mesh geometry={nodes.CC_Base_Body_6.geometry} material={materials.Basic_T_shirts} />
        <mesh geometry={nodes.CC_Base_Body_7.geometry} material={materials.Sport_sneakers} />
        <mesh geometry={nodes.CC_Base_Body_8.geometry} material={materials['Hair_Transparency.001']} />
        <mesh geometry={nodes.CC_Base_Body_9.geometry} material={materials.Std_Tearline_R} />
        <mesh geometry={nodes.CC_Base_Body_10.geometry} material={materials.Std_Tearline_L} />
        <mesh geometry={nodes.CC_Base_Body_11.geometry} material={materials.Std_Tongue} />
        <mesh geometry={nodes.CC_Base_Body_12.geometry} material={materials.Std_Eye_R} />
        <mesh geometry={nodes.CC_Base_Body_13.geometry} material={materials.Std_Cornea_R} />
        <mesh geometry={nodes.CC_Base_Body_14.geometry} material={materials.Std_Eye_L} />
        <mesh geometry={nodes.CC_Base_Body_15.geometry} material={materials.Std_Cornea_L} />
        <mesh geometry={nodes.CC_Base_Body_16.geometry} material={materials.Rocker_Jeans} />
        <mesh geometry={nodes.CC_Base_Body_17.geometry} material={materials.Hair_Transparency} />
        <mesh geometry={nodes.CC_Base_Body_18.geometry} material={materials.Scalp_Transparency} />
        <mesh geometry={nodes.CC_Base_Body_19.geometry} material={materials.Std_Eye_Occlusion_R} />
        <mesh geometry={nodes.CC_Base_Body_20.geometry} material={materials.Std_Eye_Occlusion_L} />
        <mesh geometry={nodes.CC_Base_Body_21.geometry} material={materials.Std_Upper_Teeth} />
        <mesh geometry={nodes.CC_Base_Body_22.geometry} material={materials.Std_Lower_Teeth} />
      </group>
    </group>
  )
}

useGLTF.preload('/REM.glb')