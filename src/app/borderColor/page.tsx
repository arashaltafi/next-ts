import Image from 'next/image'
import React from 'react'

const BorderColor = () => {
    const imageSize = 150

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-32'>
            <h1 className='text-5xl'>BorderColor</h1>

            <p className='bg-red-500 border-custom px-8 py-4 rounded-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium hic saepe vel excepturi culpa impedit suscipit modi sed similique esse assumenda praesentium ut, amet ipsum tempora eius reprehenderit quis.
            </p>


            <div
                className="relative p-1 rounded-full"
                style={{
                    background: 'linear-gradient(135deg, #ff6b6b, #f5f7fa)',
                    width: `${imageSize  + 10}px`,
                    height: `${imageSize + 10}px`,
                }}
            >
                <div
                    className="rounded-full bg-white"
                    style={{
                        width: `${imageSize}px`,
                        height: `${imageSize}px`,
                    }}
                >
                    <Image
                        src={'https://arashaltafi.ir/Social_Media/story-01.jpg'}
                        alt={'arash'}
                        width={imageSize}
                        height={imageSize}
                        className={`rounded-full`}
                        style={{
                            width: `${imageSize}px`,
                            height: `${imageSize}px`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default BorderColor