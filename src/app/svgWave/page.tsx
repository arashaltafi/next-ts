"use client"

import Image from 'next/image'
import React from 'react'

const SvgWave = () => {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-start'>
            <h1 className='mt-16 font-bold text-6xl'>SvgWave</h1>

            <h2
                className='mt-32 text-sky-500 cursor-pointer z-10'
                onClick={() => window.open('https://svgwave.in/', '_blank')}
            >
                https://svgwave.in/
            </h2>

            <Image
                className='absolute top-0 right-0 w-1/2'
                src={'/svgWave.svg'}
                alt='svgWave'
                width={500}
                height={500}
            />

            <Image
                className='fixed bottom-0 left-0 w-1/2'
                src={'/svgWave2.svg'}
                alt='svgWave'
                width={500}
                height={500}
            />

            <Image
                className='fixed bottom-0'
                src={'/svgWave3.svg'}
                alt='svgWave'
                width={500}
                height={500}
            />
        </div>
    )
}

export default SvgWave