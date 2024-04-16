"use client"

import React, { useState } from 'react'
import ImageCropComponent from '@/components/ImageCropComponent'

const ImageCrop2 = () => {
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
                aspect={1 / 1}
                zoomWithScroll={true}
                showGrid={true}
                cropShape='round'
                zoomSpeed={0.5}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />
        </div>
    )
}

export default ImageCrop2