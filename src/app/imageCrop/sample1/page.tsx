"use client"

import React, { useState } from 'react'
import ImageCropComponent from '@/components/ImageCropComponent'

const ImageCrop1 = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }

    return (
        <div>
            <ImageCropComponent
                image='https://arashaltafi.ir/arash.jpg'
                crop={crop}
                zoom={zoom}
                minZoom={1}
                maxZoom={10}
                aspect={4 / 3}
                zoomWithScroll={true}
                showGrid={false}
                cropShape='rect'
                zoomSpeed={0.1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />
        </div>
    )
}

export default ImageCrop1