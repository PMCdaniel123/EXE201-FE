/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 model3d.glb --transform 
Files: model3d.glb [83.75MB] > D:\Github_projects\3D_model\newModel\public\model3d-transformed.glb [4.67MB] (94%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Hailry(props) {
  const { nodes, materials } = useGLTF('/model3d-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bang.geometry} material={materials['Hair_Transparency.003']} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Bun.geometry} material={materials['Hair_Transparency.001']} scale={0.5} frustumCulled={false}/>
      <group scale={0.5}>
        <mesh geometry={nodes.CC_Base_Body.geometry} material={materials.Std_Skin_Head} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Body_1.geometry} material={materials.Std_Skin_Body} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Body_2.geometry} material={materials.Std_Skin_Arm} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Body_3.geometry} material={materials.Std_Skin_Leg} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Body_4.geometry} material={materials.Std_Nails} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Body_5.geometry} material={materials.Std_Eyelash} frustumCulled={false}/>
      </group>
      {/* <group scale={0.5}>
        <mesh geometry={nodes.CC_Base_Eye.geometry} material={materials.Std_Eye_R} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Eye_1.geometry} material={materials.Std_Eye_L} frustumCulled={false}/>
        <mesh geometry={nodes.CC_Base_Eye_2.geometry} material={materials.Std_Cornea_R} frustumCulled={false}/>
      </group> */}
      <group scale={0.5}>
        <mesh geometry={nodes.Hair_Base.geometry} material={materials.Scalp_Transparency} frustumCulled={false}/>
        <mesh geometry={nodes.Hair_Base_1.geometry} material={materials.Hair_Transparency} frustumCulled={false}/>
      </group>
      <mesh geometry={nodes.High_Heels.geometry} material={materials.High_Heels} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Long_slim_coat.geometry} material={materials.Long_slim_coat} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Slim_Jeans.geometry} material={materials.Slim_Jeans} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Sunglasses.geometry} material={materials.Sunglasses} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Turtleneck_sweater.geometry} material={materials.Turtleneck_sweater} scale={0.5} frustumCulled={false}/>
      <mesh geometry={nodes.Underwear_Bottoms.geometry} material={materials.Underwear_Bottoms} scale={0.5} frustumCulled={false}/>
    </group>
  )
}

useGLTF.preload('/model3d-transformed.glb')
