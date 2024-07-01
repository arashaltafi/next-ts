import React, { useState } from 'react'

const DelaySample = () => {
    const [content, setContent] = useState('test')

    const setDelay = async (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const showContentWithDelay = async () => {
        await setDelay(2000)
        if (content === 'test delay') {
            setContent('test')
        } else {
            setContent('test delay')
        }
    }

    return (
        <div className='flex flex-col gap-16 items-center justify-start w-full min-h-screen'>
            <h1 className='text-5xl'>DelaySample</h1>

            <button
                className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
                onClick={showContentWithDelay}
            >
                show content with delay 2 seconds
            </button>

            <p>{content}</p>
        </div>
    )
}

export default DelaySample