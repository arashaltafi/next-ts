import Image from 'next/image'
import React from 'react'

const DividerMusic = () => {
    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>DividerMusic</h1>

            <Image
                className='invert'
                src={'/music-divider-1.png'}
                alt='music-divider'
                width={1000}
                height={5}
            />

            <Image
                className='invert'
                src={'/music-divider-2.png'}
                alt='music-divider'
                width={1000}
                height={5}
            />
        </div>
    )
}

export default DividerMusic