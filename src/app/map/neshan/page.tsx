"use client"

import React, { useRef } from 'react'
import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"
import "@neshan-maps-platform/react-openlayers/dist/style.css"

// https://platform.neshan.org/sdk/%DA%A9%D8%A7%D9%85%D9%BE%D9%88%D9%86%D9%86%D8%AA-reactjs/
// npm install @neshan-maps-platform/react-openlayers
// npm install @neshan-maps-platform/ol
// npm install @types/ol@5
const NeshanSample = () => {
    const mapRef = useRef<NeshanMapRef | null>(null)

    return (
        <div className='w-full h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-6xl'>Neshan Sample</h1>

            <div className='flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between w-full'>
                <NeshanMap
                    className='w-full h-80'
                    ref={mapRef}
                    mapKey="web.d43ed7896859410ab458ff1cbd87f758"
                    center={{ latitude: 35.7009447852995, longitude: 51.39116262864598 }}
                    zoom={18}
                    defaultType="neshan" //standard-night  ,  neshan  ,  osm-bright   ,  dreamy
                    traffic={true}
                    poi={true}
                />

                <NeshanMap
                    className='w-full h-80'
                    ref={mapRef}
                    mapKey="web.d43ed7896859410ab458ff1cbd87f758"
                    center={{ latitude: 35.7009447852995, longitude: 51.39116262864598 }}
                    zoom={18}
                    defaultType="standard-night" //standard-night  ,  neshan  ,  osm-bright   ,  dreamy
                    traffic={true}
                    poi={true}
                />
            </div>
        </div>
    )
}

export default NeshanSample