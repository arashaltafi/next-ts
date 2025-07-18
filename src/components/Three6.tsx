import React from "react";
import { useGLTF } from "@react-three/drei";

interface Three6Props {
    position: [number, number, number];
}

export function Three6(props: Three6Props) {
    const { nodes, materials } = useGLTF('/headphone_2.glb')

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}
                    userData={{ name: 'Sketchfab_model' }}>
                    <group
                        name="Headphones_finalobjcleanermaterialmergergles"
                        userData={{ name: 'Headphones final.obj.cleaner.materialmerger.gles' }}>
                        <mesh
                            name="Object_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_2.geometry}
                            material={materials.blinn1SG}
                            userData={{ name: 'Object_2' }}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/headphone_2.glb")