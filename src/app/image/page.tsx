"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ImageComponent = () => {
    const [fill, setFill] = useState<boolean>(false)

    return (
        <div className='w-full flex flex-col items-center justify-center gap-8'>
            <button
                onClick={() => setFill(() => !fill)}
                className='text-xl text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-3 transition-all'
            >
                {fill ? 'Set No Fill' : 'Set Fill'}
            </button>

            <Image
                className='z-[-1] rounded-xl'
                width={fill ? undefined : 500}
                height={fill ? undefined : 500}
                src='/bg.jpg'
                alt='Arash'
                placeholder='blur'
                blurDataURL='/bg.jpg'
                loading='lazy'
                quality='100'
                fill={fill}
            />

            <Image
                className='rounded-xl'
                width={500}
                height={500}
                src='https://arashaltafi.ir/arash.jpg'
                alt='Arash'
                placeholder='blur'
                blurDataURL='/bg.jpg'
                loading='lazy'
                quality='100'
            />

            <div className='flex flex-row items-center justify-center gap-8'>
                <Image
                    className='rounded-xl shadow-md shadow-red-500'
                    width={500}
                    height={500}
                    src='/bg.jpg'
                    alt='Arash'
                    placeholder='blur'
                    blurDataURL='/bg.jpg'
                    loading='lazy'
                    quality='1'
                    fill={false}
                    onLoad={() => console.log('onLoad')}
                    onError={() => console.log('onError')}
                />

                <Image
                    className='rounded-xl shadow-md shadow-red-500'
                    width={500}
                    height={500}
                    src='/bg.jpg'
                    alt='Arash'
                    placeholder='blur'
                    blurDataURL='/bg.jpg'
                    loading='lazy'
                    quality='50'
                    fill={false}
                    onLoad={() => console.log('onLoad')}
                    onError={() => console.log('onError')}
                />
            </div>
        </div>
    )
}

export default ImageComponent