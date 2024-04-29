"use client"

import React, { useRef, useState } from 'react';
import { CropperRef, Cropper, CircleStencil } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'

//npm i react-advanced-cropper
const ImageCrop = () => {
    const image = 'https://arashaltafi.ir/arash.jpg'

    const cropperRef = useRef<CropperRef>(null);
    const [imageCrop, setImageCrop] = useState<string>();

    const onChange = (cropper: CropperRef) => {
        console.log(cropper.getCoordinates(), cropper.getCanvas());
        if (cropperRef.current) {
            setImageCrop(cropperRef.current.getCanvas()?.toDataURL());
        }
    }

    const onCrop = () => {
        if (cropperRef.current) {
            setImageCrop(cropperRef.current.getCanvas()?.toDataURL());
        }
        onUpload()
    }

    const onUpload = () => {
        const canvas = cropperRef.current?.getCanvas();
        if (canvas) {
            const base64 = canvas.toDataURL('image/png');
            console.log('base64:', base64);
        }
    }

    return (
        <div className='flex flex-col gap-16 items-center justify-center'>
            <Cropper
                ref={cropperRef}
                src={image}
                onChange={onChange}
                className={'cropper'}
                stencilComponent={CircleStencil}
                stencilProps={{
                    aspectRatio: 1 / 1,
                    movable: true,
                    resizable: false,
                    grid: true
                }}
            />

            <button
                className='w-full bg-red-500 text-white font-bold py-2 px-4 rounded'
                onClick={onCrop}
            >
                Show Result
            </button>

            {
                imageCrop &&
                <img src={imageCrop} alt="Cropped" className='size-20' />
            }
        </div>
    )
}

export default ImageCrop