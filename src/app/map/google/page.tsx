"use client"

import React from 'react'
import GoogleMapReact from 'google-map-react';

// npm i google-map-react
// npm i @types/google-map-react
const GoogleSample = () => {

    const AnyReactComponent = ({ text }: any) => <div>{text}</div>

    const defaultProps = {
        center: {
            lat: 35.7009447852995,
            lng: 51.39116262864598
        },
        zoom: 18
    }

    return (
        <div className='w-full h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-6xl'>Google Sample</h1>

            <div className='flex flex-col md:flex-row gap-8 items-center justify-center md:justify-between w-full'>
                <div style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        <AnyReactComponent
                            lat={35.7009447852995}
                            lng={51.39116262864598}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

export default GoogleSample