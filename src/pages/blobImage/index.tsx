import Image from 'next/image'
import React from 'react'

const BlobImage = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='text-5xl'>BlobImage</h1>

            <Image
                className='blobImage mt-20'
                src={'/bg.jpg'}
                alt='bg'
                width={500}
                height={500}
                loading='lazy'
                quality={50}
            />
        </div>
    )
}

export default BlobImage