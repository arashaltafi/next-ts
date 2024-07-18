import React from 'react'
import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Three4 } from '@/components/Three4';

// https://imagetostl.com/convert/file/png/to/glb#convert
// https://sketchfab.com/
// https://gltf.pmnd.rs/
// npm i three
// npm i @react-three/drei
// npm i @react-three/fiber
const Sample3 = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-start w-full h-screen">
            <h1>ThreeJs</h1>
            <Canvas
                className='bg-red-500'
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                {/* <Environment preset="studio" /> */}
                <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                <OrbitControls />
                <Three4 position={[0, 0.1, 0]} />
            </Canvas>
        </div>
    )
}

export default Sample3