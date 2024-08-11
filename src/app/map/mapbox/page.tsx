"use client"

import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { FullscreenControl, GeolocateControl, Marker, ScaleControl } from 'react-map-gl';

// https://visgl.github.io/react-map-gl/docs/get-started
// npm install react-map-gl mapbox-gl @types/mapbox-gl
const MapboxSample = () => {
    const [viewState, setViewState] = React.useState({
        latitude: 35.7009447852995,
        longitude: 51.39116262864598,
        zoom: 18
    })

    return (
        <div className='w-full h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-6xl'>Mapbox Sample</h1>

            <div className='flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between w-full'>
                <Map
                    mapboxAccessToken="pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig"
                    style={{ width: 600, height: 400, borderRadius: 16 }}
                    zoom={18}
                    latitude={35.7009447852995}
                    longitude={51.39116262864598}
                    cursor='url(/cursor.svg), auto'
                    mapStyle="mapbox://styles/mapbox/dark-v10" //dark-v10   -   streets-v9
                    attributionControl={false}
                />

                <Map
                    mapboxAccessToken="pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig"
                    style={{ width: 600, height: 400, borderRadius: 16 }}
                    {...viewState}
                    onMove={evt => setViewState(evt.viewState)}
                    cursor='url(/cursor.svg), auto'
                    mapStyle="mapbox://styles/mapbox/streets-v9" //dark-v10   -   streets-v9
                    attributionControl={false}
                >
                    <Marker longitude={51.39116262864598} latitude={35.7009447852995} anchor="bottom" >
                        <img src="/cursor.svg" />
                    </Marker>
                    <FullscreenControl />
                    <GeolocateControl />
                    <ScaleControl />
                </Map>
            </div>
        </div>
    )
}

export default MapboxSample