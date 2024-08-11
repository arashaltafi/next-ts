import Image from 'next/image'
import React from 'react'

const ImageSample = () => {
    return (
        <div className='flex flex-col items-center justify-start w-full min-h-screen'>
            <h1 className='text-5xl'>ImageSample</h1>

            <div className='mt-32 w-2/3 h-auto mx-auto flex items-center justify-center'>
                <Image
                    src={'/bg.jpg'}
                    alt='arash'
                    width={500}
                    height={500}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/bg.jpg"
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}

export default ImageSample