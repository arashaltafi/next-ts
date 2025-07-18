import React from 'react'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Three2 } from '@/components/Three2';
import { Three5 } from '@/components/Three5.tsx';
import { Three6 } from '@/components/Three6';

// https://imagetostl.com/convert/file/png/to/glb#convert
// https://sketchfab.com/
// https://gltf.pmnd.rs/
// https://www.cgtrader.com/
// npm i three
// npm i @react-three/drei
// npm i @react-three/fiber
const Sample2 = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-start w-full min-h-screen">
            <h1>ThreeJs</h1>
            <Canvas className='bg-white rounded-xl'>
                {/* <Environment preset="studio" /> */}
                <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                <OrbitControls />
                <ContactShadows />
                <Three6 position={[0, 0.1, 0]} />
            </Canvas>
        </div>
    )
}

export default Sample2