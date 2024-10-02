import Image from 'next/image'
import React from 'react'

const ImageGradient = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8 p-8'>
            <h1 className='text-5xl'>ImageGradient</h1>

            <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle,_#0F172A00_0%,_#000000ff_90%)]"
                />
                <Image
                    src="https://arashaltafi.ir/Social_Media/story-01.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default ImageGradient