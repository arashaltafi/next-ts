"use client"

import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Source, Layer } from 'react-map-gl';
import type { CircleLayer } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';

const MapboxSample = () => {
    const [viewState, setViewState] = React.useState({
        latitude: 35.7009447852995,
        longitude: 51.39116262864598,
        zoom: 18
    })

    const geojson: FeatureCollection = {
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [51.39116262864598, 35.7009447852995] } }
        ]
    };

    const layerStyle: CircleLayer = {
        id: 'point',
        type: 'circle',
        paint: {
            'circle-radius': 50,
            'circle-color': '#f00'
        }
    };

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
                />

                <Map
                    mapboxAccessToken="pk.eyJ1IjoiYWxpYWhhcmlhbjUiLCJhIjoiY2wyMWUzeGZiMTU4bjNjbWt5Zjk3NHZ6cyJ9.oPpYJC4Xxc315h6S8Tl8Ig"
                    style={{ width: 600, height: 400, borderRadius: 16 }}
                    {...viewState}
                    onMove={evt => setViewState(evt.viewState)}
                    cursor='url(/cursor.svg), auto'
                    mapStyle="mapbox://styles/mapbox/streets-v9" //dark-v10   -   streets-v9
                >
                    <Source id="my-data" type="geojson" data={geojson}>
                        <Layer {...layerStyle} />
                    </Source>
                </Map>
            </div>
        </div>
    )
}

export default MapboxSample