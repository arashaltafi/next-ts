"use client"

import React, { useEffect, useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { PixelCrop, type Crop } from 'react-image-crop'

//npm i react-image-crop
const ImageCrop = () => {
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    
    useEffect(() => {
        console.log('completedCrop:', completedCrop)
    }, [completedCrop])

    const [crop, setCrop] = useState<Crop>({
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
    })

    return (
        <div>
            <ReactCrop
                crop={crop}
                onChange={c => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
            >
                <img src={'https://arashaltafi.ir/arash.jpg'} />
            </ReactCrop>
        </div>
    )
}

export default ImageCrop