import React from 'react'
import Video from 'next-video';
import Image from 'next/image';
import BackgroundVideo from 'next-video/background-video';

const NextVideo = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Video
                src='https://arashaltafi.ir/url_sample/mp4.mp4'
                poster='https://arashaltafi.ir/url_sample/jpg.jpg'
                blurDataURL='/bg.jpg'
            />


            <span className='w-full h-px bg-white rounded-full my-32' />


            <Video
                src='https://arashaltafi.ir/url_sample/mp4.mp4'
                poster='https://arashaltafi.ir/url_sample/jpg.jpg'
                blurDataURL='/bg.jpg'
            >
                <Image
                    slot="poster"
                    src='/bg.jpg'
                    fill
                    placeholder="blur"
                    blurDataURL='/bg.jpg'
                    alt="Some peeps doing something awesome"
                />
            </Video>


            <span className='w-full h-px bg-white rounded-full my-32' />


            <BackgroundVideo src='https://arashaltafi.ir/url_sample/mp4.mp4'>
                <h1>next-video</h1>
                <p>
                    A React component for adding video to your Next.js application.
                    It extends both the video element and your Next app with features
                    for automatic video optimization.
                </p>
                <img
                    src='https://arashaltafi.ir/url_sample/jpg.jpg'
                    className='rounded-md w-1/2 h-auto'
                />
            </BackgroundVideo>

        </div>
    )
}

export default NextVideo