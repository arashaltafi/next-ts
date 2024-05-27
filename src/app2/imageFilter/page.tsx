import React from 'react'

const ImageFilter = () => {
    return (
        <div className='flex flex-col gap-16 items-center justify-start w-full min-h-screen'>
            <h1 className='text-6xl'>ImageFilter</h1>

            <div className='w-full flex flex-col items-center justify-center gap-8'>
                <h2>Image On Text:</h2>
                <h3
                    className='text-8xl bg-[url("https://arashaltafi.ir/arash.jpg")] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent'
                >
                    Arash
                </h3>

                <span className='w-full h-px rounded-full bg-white' />


                <a
                    className='text-3xl'
                    href="https://bennettfeely.com/image-effects/"
                    target='_blank'
                >
                    bennettfeely image-effects
                </a>
            </div>
        </div>
    )
}

export default ImageFilter