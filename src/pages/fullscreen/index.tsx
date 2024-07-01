import Image from 'next/image'
import React, { useEffect } from 'react'

const FullScreen = () => {
    let imageRef: any;

    useEffect(() => {
        imageRef = document.getElementById('img1')
    }, [])

    return (
        <div className='w-full min-h-screen flex items-center justify-start gap-16'>
            <h1 className='text-5xl'>FullScreen</h1>

            <Image
                id='img1'
                src={'https://arashaltafi.ir/arash.jpg'}
                alt='arash'
                width={500}
                height={500}
                quality={100}
                loading='eager'
                onClick={() => {
                    if (document.fullscreenElement) {
                        document.exitFullscreen()
                    } else {
                        imageRef?.requestFullscreen()
                    }
                }}
            />
        </div>
    )
}

export default FullScreen